<template>
    <section>
        <h2>Gegevens</h2>
        <form-group title="Reden van aanmelding">
            <simple-select
                title="Wat is de reden van uw aanvraag?"
                placeholder="Er is nog niets geselecteerd"
                :options="options.redenVanAanmelding"
            />
        </form-group>
        <form-group title="Persoonlijke gegevens">
            <text-field title="Naam" />
            <text-field title="Tussenvoegsels" />
            <text-field title="Achternaam" />

            <radio-group
                name="geslacht"
                title="Geslacht"
                :options="options.geslacht"
                @radioChange="() => {}"
            />

            <date-selector
                title="Geboortedatum"
                :maxDate="dateToday"
                @dateChange="() => {}"
            />

            <text-field
                title="Burgerservicenummer"
                error-message="Helaas is het ingevoerde burgerservicenummer niet geldig. Probeer het opnieuw."
                :is-valid="true"
            />
        </form-group>
        <router-link to="/verzekering">
            Ge verder naar Verzekering
        </router-link>
    </section>
</template>

<script>
import TextField from '@/components/reusable/TextField.vue';
import SimpleSelect from '@/components/reusable/SimpleSelect.vue';
import DateSelector from '@/components/reusable/DateSelector.vue';
import FormGroup from '@/components/reusable/FormGroup.vue';
import RadioGroup from '@/components/reusable/RadioGroup.vue';
import options from '@/constants/options.js';

export default {
    name: 'PersonalDetails',
    components: {
        TextField,
        SimpleSelect,
        DateSelector,
        FormGroup,
        RadioGroup
    },
    computed: {
        options() {
            return options;
        },
        dateToday() {
            const today = new Date();
            return today.toISOString().split('T')[0];
        }
    }
};
</script>

<style lang="scss"></style>
