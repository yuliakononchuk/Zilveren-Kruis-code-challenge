<template>
    <form @submit.prevent="handleSubmit">
        <h2>Gegevens</h2>
        <form-group title="Reden van aanmelding">
            <simple-select
                title="Wat is de reden van uw aanvraag?"
                :value="purposeOfRequestId"
                placeholder="Er is nog niets geselecteerd"
                :options="options.purposeOfRequest"
                @selectChange="updatePurposeOfRequestId"
                :has-error="v$.purposeOfRequestId.$error"
            />
        </form-group>
        <form-group title="Persoonlijke gegevens">
            <text-field
                title="Naam"
                :value="name"
                @textFieldChange="updateName"
                :has-error="v$.name.$error"
            />

            <text-field
                title="Tussenvoegsels"
                :value="tussenvoegsels"
                @textFieldChange="updateTussenvoegsels"
            />

            <text-field
                title="Achternaam"
                :value="surname"
                @textFieldChange="updateSurname"
                :has-error="v$.surname.$error"
            />

            <radio-group
                name="gender"
                title="Geslacht"
                :value="genderId"
                :options="options.gender"
                @radioChange="updateGender"
                :has-error="v$.genderId.$error"
            />

            <date-selector
                title="Geboortedatum"
                :value="dateOfBirth"
                :maxDate="dateToday"
                @dateChange="updateDateOfBirth"
                :has-error="v$.dateOfBirth.$error"
            />

            <text-field
                title="Burgerservicenummer"
                type="number"
                :value="bsn"
                :error-message="v$.bsn.$error ? v$.bsn.$errors[0].$message : ''"
                :has-error="v$.bsn.$error"
                @textFieldChange="updateBSNAndClearValidation"
                @textFieldBlur="validateBSN"
            />
        </form-group>
        <button type="submit">Ga verder naar Verzekering</button>
    </form>
</template>

<script lang="ts">
import TextField from '@/components/reusable/TextField.vue';
import SimpleSelect from '@/components/reusable/SimpleSelect.vue';
import DateSelector from '@/components/reusable/DateSelector.vue';
import FormGroup from '@/components/reusable/FormGroup.vue';
import RadioGroup from '@/components/reusable/RadioGroup.vue';
import options, { OptionsObject } from '@/constants/options';
import validateBSN from '@/validation/validate_bsn';
import { mapState, mapMutations } from 'vuex';
import { useVuelidate } from '@vuelidate/core';
import { helpers, required } from '@vuelidate/validators';

export default {
    name: 'PersonalDetails',
    setup: () => ({ v$: useVuelidate() }),
    validations() {
        return {
            purposeOfRequestId: { required },
            name: { required },
            surname: { required },
            genderId: { required },
            dateOfBirth: { required },
            bsn: {
                validateBSN: helpers.withMessage(
                    'Helaas is het ingevoerde burgerservicenummer niet geldig. Probeer het opnieuw.',
                    validateBSN
                )
            }
        };
    },
    components: {
        TextField,
        SimpleSelect,
        DateSelector,
        FormGroup,
        RadioGroup
    },
    computed: {
        options(): OptionsObject {
            return options;
        },
        dateToday(): string {
            const today = new Date();
            return today.toISOString().split('T')[0];
        },
        ...mapState([
            'purposeOfRequestId',
            'name',
            'tussenvoegsels',
            'surname',
            'genderId',
            'dateOfBirth',
            'bsn'
        ])
    },
    methods: {
        updateBSNAndClearValidation(bsn: string): void {
            console.warn('updateBSNAndClearValidation', this.v$);
            this.updateBSN(bsn);
            this.v$.bsn.$reset();
        },
        validateBSN(): void {
            console.warn('validateBSN', this.v$);
            this.v$.bsn.$touch();
        },
        async handleSubmit(): Promise<void> {
            console.warn(this.v$);
            const validationPassed = await this.v$.$validate();
            if (!validationPassed) {
                return;
            }
            this.$router.push('/verzekering');
        },
        ...mapMutations([
            'updatePurposeOfRequestId',
            'updateName',
            'updateTussenvoegsels',
            'updateSurname',
            'updateGender',
            'updateDateOfBirth',
            'updateBSN'
        ])
    }
};
</script>

<style lang="scss"></style>
