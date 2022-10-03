<template>
    <form @submit.prevent="handleSubmit">
        <h2 class="mt-5">Verzekering</h2>
        <form-group
            title="Basisverzekering"
            subtitle="In Nederland is de basisverzekering verplicht.
                            Iedereen wordt voor de basisverzekering
                            geaccepteerd. De overheid bepaalt welke zorg hierin
                            zit en dit is dus bij elke verzekeraar hetzelfde."
        >
            <div class="input__group">
                <label class="input__title"> Kies uw basisverzekering </label>
                <div class="form-row">
                    <radio-tile
                        v-for="option in options.basicInsurance"
                        :checked="basicInsuranceId === option.id"
                        :key="option.id"
                        :id="option.id"
                        :title="option.title"
                        :price="`${formatCurrency(
                            adjustPriceToPeriod(
                                option.pricePerYear,
                                paymentPeriodId
                            )
                        )} per ${paymentPeriod.name}`"
                        name="radio-insurance"
                        @radioTileChange="updateBasicInsurance"
                    />
                </div>
            </div>
        </form-group>
        <form-group>
            <simple-select
                title="Kies je betaaltermijn"
                :value="paymentPeriodId"
                :options="options.paymentPeriod"
                @selectChange="updatePaymentPeriod"
                :has-placeholder="false"
                :has-error="v$.paymentPeriodId.$error"
            />
        </form-group>
        <form-group title="Eigen risico">
            <simple-select
                :value="deductibleId"
                :disabled="basicInsuranceIdNotSelected"
                :placeholder="
                    basicInsuranceIdNotSelected
                        ? 'Kies eerst uw basisverzekering'
                        : 'Er is nog niets geselecteerd'
                "
                title="Kies de hoogste van het eigen risico"
                :options="options.deductible"
                @selectChange="updateDeductible"
                :has-error="v$.deductibleId.$error"
            />
        </form-group>
        <form-group
            title="Aanvullende verzekering"
            subtitle="
                Onze aanvullende verzekeringen kennen ruim 100
                verschillende vergoedingen. De hoogte van de
                vergoeding verschilt per pakket"
        >
            <simple-select
                :value="extraInsuranceId"
                title="Kies uw aanvullende verzekering"
                :options="generateOptions(options.extraInsurance)"
                @selectChange="updateExtraInsurance"
                placeholder="Geen aanvullende verzekering geselecteerd"
                :has-error="v$.extraInsuranceId.$error"
            />
        </form-group>
        <form-group>
            <simple-select
                :value="dentalInsuranceId"
                title="Kies uw tandartsverzekering"
                :options="generateOptions(options.dentalInsurance)"
                @selectChange="updateDentalInsurance"
                placeholder="Geen tandartsverzekering geselecteerd"
                :has-error="v$.dentalInsuranceId.$error"
            />
        </form-group>
        <button type="submit">Ga verder naar Controle</button>
    </form>
</template>

<script lang="ts">
import Vue from 'vue';
import SimpleSelect from '@/components/reusable/SimpleSelect.vue';
import FormGroup from '@/components/reusable/FormGroup.vue';
import RadioTile from '@/components/reusable/RadioTile.vue';
import options, {
    OptionSimple,
    OptionWithPrice,
    OptionsObject
} from '@/constants/options';
import { Periods } from '@/constants/enums';
import formatCurrency from '@/helpers/format_currency';
import adjustPriceToPeriod from '@/helpers/adjust_price_to_period';
import { mapState, mapGetters, mapMutations } from 'vuex';
import { useVuelidate } from '@vuelidate/core';
import { required } from '@vuelidate/validators';

export default Vue.extend({
    name: 'InsuranceDetails',
    setup() {
        return { v$: useVuelidate() as any };
    },
    validations() {
        return {
            basicInsuranceId: { required },
            paymentPeriodId: { required },
            deductibleId: { required },
            extraInsuranceId: { required },
            dentalInsuranceId: { required }
        };
    },
    components: {
        SimpleSelect,
        FormGroup,
        RadioTile
    },
    computed: {
        options(): OptionsObject {
            return options;
        },
        ...mapState([
            'basicInsuranceId',
            'paymentPeriodId',
            'deductibleId',
            'extraInsuranceId',
            'dentalInsuranceId'
        ]),
        ...mapGetters(['basicInsuranceIdNotSelected', 'paymentPeriod'])
    },
    methods: {
        generateOptions(options: OptionWithPrice[]): OptionSimple[] {
            return options.map(option => {
                const id = option.id!;
                const title = `${option.title} - ${formatCurrency(
                    adjustPriceToPeriod(
                        option.pricePerYear,
                        this.paymentPeriodId
                    )
                )} per ${this.paymentPeriod.name}`;
                return { id, title };
            });
        },
        formatCurrency(curr: number): string {
            return formatCurrency(curr);
        },
        adjustPriceToPeriod(pricePerYear: number, periodId: Periods): number {
            return adjustPriceToPeriod(pricePerYear, periodId);
        },
        async handleSubmit(): Promise<void> {
            const validationPassed = await this.v$.$validate();
            if (!validationPassed) {
                return;
            }
            this.$router.push('/controle');
        },
        ...mapMutations([
            'updateBasicInsurance',
            'updatePaymentPeriod',
            'updateDeductible',
            'updateExtraInsurance',
            'updateDentalInsurance'
        ])
    }
});
</script>

<style lang="scss"></style>
