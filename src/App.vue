<template>
    <div id="app" class="main-placeholder">
        <the-header />

        <div class="container my-3">
            <div class="row">
                <div class="col-8">
                    <h1>Aanmelden</h1>

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

                    <h2 class="mt-5">Verzekering</h2>
                    <form-group
                        title="Basisverzekering"
                        subtitle="In Nederland is de basisverzekering verplicht.
                            Iedereen wordt voor de basisverzekering
                            geaccepteerd. De overheid bepaalt welke zorg hierin
                            zit en dit is dus bij elke verzekeraar hetzelfde."
                    >
                        <div class="input__group">
                            <label class="input__title">
                                Kies uw basisverzekering
                            </label>
                            <div class="form-row">
                                <radio-tile
                                    id="radio-insurance-basis-budget"
                                    title="Basis Budget"
                                    price="€ 1.393,26 per jaar"
                                    name="radio-insurance"
                                    @radioTileChange="() => {}"
                                />
                                <radio-tile
                                    id="radio-insurance-basis-zeker"
                                    title="Basis Zeker"
                                    price="€ 1.483,54 per jaar"
                                    :selected="true"
                                    badge_title="Meest gekozen"
                                    name="radio-insurance"
                                    @radioTileChange="() => {}"
                                />

                                <radio-tile
                                    id="radio-insurance-basis-exclusief-(restitutie)"
                                    title="Basis Exclusief (Restitutie)"
                                    price="€ 1.624,62 per jaar"
                                    name="radio-insurance"
                                    @radioTileChange="() => {}"
                                />
                            </div>
                        </div>
                    </form-group>
                    <form-group>
                        <simple-select
                            title="Kies je betaaltermijn"
                            :options="options.betaalTermijn"
                        />
                    </form-group>
                    <form-group title="Eigen risico">
                        <simple-select
                            title="Kies de hoogste van het eigen risico"
                            :options="options.eigenRisico"
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
                            title="Kies uw aanvullende verzekering"
                            :options="options.aanvullendVerzekering"
                        />
                    </form-group>
                    <form-group>
                        <simple-select
                            title="Kies uw tandartsverzekering"
                            :options="options.tandartsVerzekering"
                        />
                    </form-group>

                    <h2 class="mt-5">Controleren</h2>
                    <form-group title="Gekozen pakket"> </form-group>
                    <form-group title="Totaalpremie"> </form-group>
                    <form-group title="Adres en contactgegevens"> </form-group>
                </div>

                <div class="col-4">
                    <the-contact-card />
                </div>
            </div>
        </div>

        <the-footer />
    </div>
</template>

<script>
import TheHeader from '@/components/single_instance/TheHeader.vue';
import TheFooter from '@/components/single_instance/TheFooter.vue';
import TextField from '@/components/reusable/TextField.vue';
import SimpleSelect from '@/components/reusable/SimpleSelect.vue';
import DateSelector from '@/components/reusable/DateSelector.vue';
import FormGroup from '@/components/reusable/FormGroup.vue';
import RadioGroup from '@/components/reusable/RadioGroup.vue';
import RadioTile from '@/components/reusable/RadioTile.vue';
import TheContactCard from '@/components/single_instance/TheContactCard.vue';
import options from '@/constants/options.js';

export default {
    name: 'App',
    components: {
        TheHeader,
        TheFooter,
        TextField,
        SimpleSelect,
        DateSelector,
        FormGroup,
        RadioGroup,
        RadioTile,
        TheContactCard
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
