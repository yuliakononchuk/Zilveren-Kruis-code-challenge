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
                            :options="[
                                {
                                    id: 'nieuw',
                                    title: 'Nieuwe werkgever met collectiviteit bij Zilveren Kruis'
                                },
                                {
                                    id: 'overstappen',
                                    title: 'Overstappen per 1-1-2023 naar Zilveren Kruis'
                                }
                            ]"
                        />
                    </form-group>
                    <form-group title="Persoonlijke gegevens">
                        <text-field title="Naam" />
                        <text-field title="Tussenvoegsels" />
                        <text-field title="Achternaam" />

                        <div class="form-input my-4">
                            <div class="input__group">
                                <label class="input__title">Geslacht</label>
                                <div class="form-row">
                                    <div
                                        class="radio custom-radio radio__option"
                                    >
                                        <input
                                            id="man"
                                            class="radio__input custom-control-input"
                                            type="radio"
                                            name="geslacht"
                                        />
                                        <label
                                            class="radio__label custom-control-label"
                                            for="man"
                                        >
                                            Man
                                        </label>
                                    </div>
                                    <div
                                        class="radio custom-radio radio__option"
                                    >
                                        <input
                                            id="vrouw"
                                            class="radio__input custom-control-input"
                                            type="radio"
                                            name="geslacht"
                                        />
                                        <label
                                            class="radio__label custom-control-label"
                                            for="vrouw"
                                        >
                                            Vrouw
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="form-input my-4">
                            <div class="input__group">
                                <label class="input__title">
                                    Geboortedatum
                                </label>
                                <input
                                    class="input__field form-control"
                                    type="text"
                                />
                            </div>
                        </div>
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
                                <div class="radio__tile">
                                    <div
                                        class="radio custom-radio radio__option"
                                    >
                                        <input
                                            value="Basis Budget"
                                            type="radio"
                                            name="radio-insurance"
                                            id="radio-insurance-basis-budget"
                                            class="radio__input custom-control-input"
                                        />
                                        <label
                                            for="radio-insurance-basis-budget"
                                            class="radio__label custom-control-label"
                                        >
                                            <p class="radio__description">
                                                Basis Budget
                                            </p>
                                            <p class="radio__price">
                                                € 1.393,26 per jaar
                                            </p>
                                        </label>
                                    </div>
                                </div>
                                <div class="radio__tile radio__tile--choice">
                                    <div class="badge radio__tile-badge">
                                        Meest gekozen
                                    </div>
                                    <div
                                        class="radio custom-radio radio__option"
                                    >
                                        <input
                                            value="Basis Zeker"
                                            type="radio"
                                            name="radio-insurance"
                                            id="radio-insurance-basis-zeker"
                                            class="radio__input custom-control-input"
                                        />
                                        <label
                                            for="radio-insurance-basis-zeker"
                                            class="radio__label custom-control-label"
                                        >
                                            <p class="radio__description">
                                                Basis Zeker
                                            </p>
                                            <p class="radio__price">
                                                € 1.483,54 per jaar
                                            </p>
                                        </label>
                                    </div>
                                </div>
                                <div class="radio__tile">
                                    <div
                                        class="radio custom-radio radio__option"
                                    >
                                        <input
                                            value="Basis Exclusief (Restitutie)"
                                            type="radio"
                                            name="radio-insurance"
                                            id="radio-insurance-basis-exclusief-(restitutie)"
                                            class="radio__input custom-control-input"
                                        />
                                        <label
                                            for="radio-insurance-basis-exclusief-(restitutie)"
                                            class="radio__label custom-control-label"
                                        >
                                            <p class="radio__description">
                                                Basis Exclusief (Restitutie)
                                            </p>
                                            <p class="radio__price">
                                                € 1.624,62 per jaar
                                            </p>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form-group>
                    <form-group>
                        <simple-select
                            title="Kies je betaaltermijn"
                            :options="[
                                { id: 'maand', title: 'per maand' },
                                { id: 'kwartaal', title: 'per kwartaal' },
                                {
                                    id: 'jaar',
                                    title: 'per jaar',
                                    selected: true
                                }
                            ]"
                        />
                    </form-group>
                    <form-group title="Eigen risico">
                        <simple-select
                            title="Kies de hoogste van het eigen risico"
                            :options="[
                                {
                                    id: '1',
                                    title: '€ 385 - verplicht eigen risico',
                                    selected: true
                                },
                                {
                                    id: '2',
                                    title: '€ 885 - korting van € 22 per jaar'
                                }
                            ]"
                        />
                    </form-group>
                    <form-group
                        title="Aanvullende verzekering"
                        subtitle="Onze aanvullende verzekeringen kennen ruim 100
                verschillende vergoedingen. De hoogte van de
                vergoeding verschilt per pakket"
                    >
                        >

                        <simple-select
                            title="Kies uw aanvullende verzekering"
                            :options="[
                                {
                                    id: '0',
                                    title: 'Geen aanvullende verzekering geselecteerd',
                                    selected: true
                                },
                                {
                                    id: '1',
                                    title: 'Aanvullend 1 - € 21,38 per jaar'
                                },
                                {
                                    id: '2',
                                    title: 'Aanvullend 2 - € 85,06 per jaar'
                                },
                                {
                                    id: '3',
                                    title: 'Aanvullend 3 - € 198,63 per jaar'
                                },
                                {
                                    id: '4',
                                    title: 'Aanvullend 4 - € 359,73 per jaar'
                                }
                            ]"
                        />
                    </form-group>
                    <form-group>
                        <simple-select
                            title="Kies uw tandartsverzekering"
                            :options="[
                                {
                                    id: '0',
                                    title: 'Geen tandartsverzekering geselecteerd',
                                    selected: true
                                },
                                {
                                    id: '1',
                                    title: 'Tand 1 - € 80,28 per jaar'
                                },
                                {
                                    id: '2',
                                    title: 'Tand 2 - € 221,65 per jaar'
                                },
                                {
                                    id: '3',
                                    title: 'Tand 3 - € 449,36 per jaar'
                                }
                            ]"
                        />
                    </form-group>

                    <h2 class="mt-5">Controleren</h2>
                    <form-group title="Gekozen pakket"> </form-group>
                    <form-group title="Totaalpremie"> </form-group>
                    <form-group title="Adres en contactgegevens"> </form-group>
                </div>
                <div class="col-4">
                    <div class="card card--filled-secondary h-auto">
                        <div class="card-body">
                            <div class="sf-contactblok-content">
                                <h3 class="mb-2">We staan voor je klaar</h3>
                                <p class="mb-5">
                                    Twijfel je? Heb je een vraag?
                                </p>
                                <div class="phonenumber mb-2">
                                    <a href="tel:0900 040 03 09">
                                        <span class="sr-only">
                                            Telefoonnummer
                                        </span>
                                        0900 040 03 09
                                    </a>
                                    <div class="popover__container ml-1">
                                        <button
                                            id="info-phone"
                                            type="button"
                                            class="btn popover__btn btn--popover btn-none"
                                        >
                                            <span class="sr-only">
                                                Informatie weergeven
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <small>
                                    Open op maandag t/m vrijdag van 08:00 tot
                                    17:00
                                </small>
                            </div>
                        </div>
                    </div>
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
import FormGroup from '@/components/reusable/FormGroup.vue';

export default {
    name: 'App',
    components: {
        TheHeader,
        TheFooter,
        TextField,
        SimpleSelect,
        FormGroup
    }
};
</script>

<style lang="scss"></style>
