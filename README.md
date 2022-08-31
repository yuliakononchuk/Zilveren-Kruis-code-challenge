# Zilveren Kruis code challenge

Super tof dat je interesse hebt om bij Zilveren Kruis aan de slag te gaan! We werken elke dag met een grote groep van developers aan de website van Zilveren Kruis. Deze groep van developers willen we heel graag uitbreiden. Daarbij vinden we opleiding, werkervaring of achtergrond eigenlijk helemaal niet zo waardevol. Belangrijker is dat je talent hebt en de juiste motivatie. Daarom kun je bij ons ook solliciteren op de vacature Front-end Developer door mee te doen aan onze code challenge.

Bekijk de vacature op [werkenbijachmea.nl](https://werkenbijachmea.nl/vacature/front-end-developer-leiden/).

## Wat is de Zilveren Kruis code challenge?

De Zilveren Kruis code challenge is een laagdrempelige front-end opdracht waarbij je een aantal nieuwe functionaliteiten bouwt voor een voorbeeld-applicatie. Wij reviewen je code, vinden we jouw oplossing tof? Dan nodigen we je graag uit voor een eerste kennismakingsgesprek.

## De challenge

Bij Zilveren Kruis werken we veel met formulieren. Formulieren om je zorgkosten te melden, een nieuwe verzekering af te sluiten, etc.

Deze formulieren zijn vaak gebouwd in Vue.

In deze code challenge ga je aan de slag met een voorbeeldformulier. De styling (we gebruiken voor deze challenge [Bootstrap](https://getbootstrap.com/docs/4.6/getting-started/introduction/)) en html is al klaar maar we missen nog wat functionaliteit.

![Formulier](screenshot.png 'formulier')
[Zie hier voor het ontwerp in Figma](<https://www.figma.com/proto/i6xTWlKP0aqyEc38HxGDVr/frontend-assesment-(design)?page-id=0%3A1&node-id=0%3A1&viewport=101%2C315%2C0.13&scaling=scale-down-width&starting-point-node-id=2%3A4&show-proto-sidebar=1>).
Het wachtwoord is `ZK2022!`.

### Requirements:

Bouw het voorbeeldformulier (zie src/App.vue voor de huidige html) verder af. We verwachten dat je applicatie in ieder geval (een deel van) de volgende requirements bevat:

## Functionaliteiten:

-   De gebruiker moet een aanvraagRedenId kunnen kiezen
    -   Mogelijke keuzes:
        -   Nieuwe werkgever met collectiviteit bij Zilveren Kruis
        -   Overstappen per 1-1-2023 naar Zilveren Kruis
-   De gebruiker moet zijn gegevens kunnen invullen.
    -   Mogelijke invoervelden:
        -   Naam
        -   Tussenvoegsel
        -   Achternaam
        -   Geslacht
        -   Geboortedatum
        -   Burgerservicenummer
-   De gebruiker moet een basisverzekering kunnen kiezen
    -   Mogelijke keuzes:
        -   Basis Budget
        -   Basis Zeker
        -   Basis Exclusief
-   De gebruiker moet een betaaltermijn kunnen kiezen
    -   Mogelijke keuzes:
        -   per maand
        -   per kwartaal
        -   per jaar
-   De gebruiker moet een eigen risico kunnen kiezen
    -   Mogelijke keuzes:
        -   358
        -   885
-   De gebruiker moet een aanvullende verzekering kunnen kiezen
    -   Mogelijke keuzes:
        -   Aanvullend 1
        -   Aanvullend 2
        -   Aanvullend 3
        -   Aanvullend 4
-   De gebruiker moet een tandverzekering kunnen kiezen
    -   Mogelijke keuzes:
        -   Tand 1
        -   Tand 2
        -   Tand 3
-   De gebruiker moet zijn ingevulde gegevens terug kunnen zien
    -   Mogelijke weergaven:
        -   Gekozen pakket
            -   Gekozen basisverzekering
            -   Gekozen eigen risico
            -   Gekozen aanvullende verzekering
            -   Gekozen tandverzekering
        -   Totaalpremie
            -   Betaaltermijn
            -   Totaalpremie
        -   Adres en contactgegevens
            -   Naam, tussenvoegsel, achternaam
            -   Geslacht
            -   Geboortedatum
            -   Burgerservicenummer

### Technische vereisten:

-   Invoervelden:
    -   Gebruik voor de geboortedatum een [datepicker](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date)
    -   Zorg voor logische formulier elementen, dit is belangrijk voor screenreaders
-   Validaties:
    -   Je kan alleen een eigen risico kiezen als je een basisverzekering hebt gekozen
    -   BSN validatie
        -   Is de ingevoerde waarde invalid? Toon dan de volgende error-message (on-blur van het veld): "Helaas is het ingevoerde burgerservicenummer niet geldig. Probeer het opnieuw."
-   Splits de html op in logische Vue componenten

## Extra uitdaging?

-   Wil je laten zien wat je nog meer kunt? Kun je bijvoorbeeld al unit testen schrijven, heb je ervaring met VueX en Vue-Router, dan mag je huidige opzet omzetten naar losse routes. Ga lekker aan de gang met je eigen idee en laat ons zien wat je kunt!

## Randvoorwaarden

-   Om de challenge gelijkwaardig te houden voor alle kandidaten verwachten we dat je niet meer dan 2 - max 4 uur aan de challenge besteedt. Nog niet klaar met alle requirements na 4 uur? Geen probleem, stuur gewoon in wat je hebt. We vinden kwaliteit en oog voor details veel belangrijker dan dat je alle requirements hebt gerealiseerd.
-   Maak een fork van deze Github naar je eigen Github account en push jouw oplossing. Stuur ons een linkje van je oplossing in het sollicitatieformulier van de vacature **Front-end Developer**.

## Technische details

Dit project is gegenereerd met [Vue CLI](https://github.com/vuejs/vue-cli).

### Installeer de dependencies

```
npm ci
```

### Compileer en hot-reloading van het project

```
npm run serve
```

Voer `npm run serve` uit voor een development server. Navigeer naar `http://localhost:8080/`. De app zal automatisch herladen na het maken van een wijziging.

### Unit tests

```
npm run test:unit
```

Voer `npm run test:unit` uit om unit tests te draaien met [Jest](https://jestjs.io/)
