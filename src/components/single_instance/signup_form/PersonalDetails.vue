<template>
    <section>
        <h2>Gegevens</h2>
        <form-group title="Reden van aanmelding">
            <simple-select
                title="Wat is de reden van uw aanvraag?"
                placeholder="Er is nog niets geselecteerd"
                :options="options.redenVanAanmelding"
                @selectChange="updateAanvraagReden"
            />
        </form-group>
        <form-group title="Persoonlijke gegevens">
            <text-field title="Naam" @textFieldChange="updateNaam" />
            <text-field
                title="Tussenvoegsels"
                @textFieldChange="updateTussenvoegsels"
            />
            <text-field
                title="Achternaam"
                @textFieldChange="updateAchternaam"
            />

            <radio-group
                name="geslacht"
                title="Geslacht"
                :options="options.geslacht"
                @radioChange="updateGeslacht"
            />

            <date-selector
                title="Geboortedatum"
                :maxDate="dateToday"
                @dateChange="updateGeboortedatum"
            />

            <text-field
                title="Burgerservicenummer"
                error-message="Helaas is het ingevoerde burgerservicenummer niet geldig. Probeer het opnieuw."
                :is-valid="true"
                @textFieldChange="updateBSN"
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
import { mapMutations } from 'vuex';

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
    },
    methods: {
        ...mapMutations([
            'updateAanvraagReden',
            'updateNaam',
            'updateTussenvoegsels',
            'updateAchternaam',
            'updateGeslacht',
            'updateGeboortedatum',
            'updateBSN'
        ])
    }
};
</script>

<style lang="scss"></style>
