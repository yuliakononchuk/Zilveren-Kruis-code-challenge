<template>
    <section>
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
                        v-for="option in options.basisVerzekering"
                        :checked="basisVerzekeringId === option.id"
                        :key="option.id"
                        :id="option.id"
                        :title="option.title"
                        :price="`${formatCurrency(option.pricePerYear)} per ${
                            betaalTermijn.name
                        }`"
                        name="radio-insurance"
                        @radioTileChange="updateBasisVerzekering"
                    />
                </div>
            </div>
        </form-group>
        <form-group>
            <simple-select
                title="Kies je betaaltermijn"
                :value="betaalTermijnId"
                :options="options.betaalTermijn"
                @selectChange="updateBetaalTermijn"
                :has-placeholder="false"
            />
        </form-group>
        <form-group title="Eigen risico">
            <simple-select
                :value="eigenRisicoId"
                :disabled="basisVerzekeringIdNotSelected"
                :placeholder="
                    basisVerzekeringIdNotSelected
                        ? 'Kies eerst uw basisverzekering'
                        : 'Er is nog niets geselecteerd'
                "
                title="Kies de hoogste van het eigen risico"
                :options="options.eigenRisico"
                @selectChange="updateEigenRisico"
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
                :value="aanvullendeVerzekeringId"
                title="Kies uw aanvullende verzekering"
                :options="generateOptions(options.aanvullendeVerzekering)"
                @selectChange="updateAanvullendeVerzekering"
                placeholder="Geen aanvullende verzekering geselecteerd"
            />
        </form-group>
        <form-group>
            <simple-select
                :value="tandartsVerzekeringId"
                title="Kies uw tandartsverzekering"
                :options="generateOptions(options.tandartsVerzekering)"
                @selectChange="updateTandartsVerzekering"
                placeholder="Geen tandartsverzekering geselecteerd"
            />
        </form-group>
        <router-link to="/controle"> Ge verder naar Controle </router-link>
    </section>
</template>

<script>
import SimpleSelect from '@/components/reusable/SimpleSelect.vue';
import FormGroup from '@/components/reusable/FormGroup.vue';
import RadioTile from '@/components/reusable/RadioTile.vue';
import options from '@/constants/options.js';
import formatCurrency from '@/helpers/format_currency.js';
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
    name: 'InsuranceDetails',
    components: {
        SimpleSelect,
        FormGroup,
        RadioTile
    },
    computed: {
        options() {
            return options;
        },
        ...mapState([
            'basisVerzekeringId',
            'betaalTermijnId',
            'eigenRisicoId',
            'aanvullendeVerzekeringId',
            'tandartsVerzekeringId'
        ]),
        ...mapGetters(['basisVerzekeringIdNotSelected', 'betaalTermijn'])
    },
    methods: {
        generateOptions(options) {
            return options.map(option => {
                const { id } = option;
                const title = `${option.title} - ${formatCurrency(
                    option.pricePerYear
                )} per ${this.betaalTermijn.name}`;
                return { id, title };
            });
        },
        formatCurrency(curr) {
            return formatCurrency(curr);
        },
        ...mapMutations([
            'updateBasisVerzekering',
            'updateBetaalTermijn',
            'updateEigenRisico',
            'updateAanvullendeVerzekering',
            'updateTandartsVerzekering'
        ])
    }
};
</script>

<style lang="scss"></style>
