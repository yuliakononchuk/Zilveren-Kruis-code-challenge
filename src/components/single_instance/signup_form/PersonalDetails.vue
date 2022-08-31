<template>
    <section>
        <h2>Gegevens</h2>
        <form-group title="Reden van aanmelding">
            <simple-select
                title="Wat is de reden van uw aanvraag?"
                :value="aanvraagRedenId"
                placeholder="Er is nog niets geselecteerd"
                :options="options.aanvraagReden"
                @selectChange="updateaanvraagRedenId"
            />
        </form-group>
        <form-group title="Persoonlijke gegevens">
            <text-field
                title="Naam"
                :value="naam"
                @textFieldChange="updateNaam"
            />
            <text-field
                title="Tussenvoegsels"
                :value="tussenvoegsels"
                @textFieldChange="updateTussenvoegsels"
            />
            <text-field
                title="Achternaam"
                :value="achternaam"
                @textFieldChange="updateAchternaam"
            />

            <radio-group
                name="geslacht"
                title="Geslacht"
                :value="geslachtId"
                :options="options.geslacht"
                @radioChange="updateGeslacht"
            />

            <date-selector
                title="Geboortedatum"
                :value="geboortedatum"
                :maxDate="dateToday"
                @dateChange="updateGeboortedatum"
            />

            <text-field
                title="Burgerservicenummer"
                :value="bsn"
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
import { mapState, mapMutations } from 'vuex';

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
        },
        ...mapState([
            'aanvraagRedenId',
            'naam',
            'tussenvoegsels',
            'achternaam',
            'geslachtId',
            'geboortedatum',
            'bsn'
        ])
    },
    methods: {
        ...mapMutations([
            'updateaanvraagRedenId',
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
