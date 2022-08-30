export default {
    redenVanAanmelding: [
        {
            id: 'nieuw',
            title: 'Nieuwe werkgever met collectiviteit bij Zilveren Kruis'
        },
        {
            id: 'overstappen',
            title: 'Overstappen per 1-1-2023 naar Zilveren Kruis'
        }
    ],
    eigenRisico: [
        {
            id: '1',
            title: '€ 385 - verplicht eigen risico',
            selected: true
        },
        {
            id: '2',
            title: '€ 885 - korting van € 22 per jaar'
        }
    ],
    betaalTermijn: [
        { id: 'maand', title: 'per maand' },
        { id: 'kwartaal', title: 'per kwartaal' },
        { id: 'jaar', title: 'per jaar', selected: true }
    ],
    basisVerzekering: [
        {
            id: 'radio-insurance-basis-budget',
            title: 'Basis Budget',
            pricePerYear: '€ 1.393,26'
        },
        {
            id: 'radio-insurance-basis-zeker',
            title: 'Basis Zeker',
            pricePerYear: '€ 1.483,54',
            hasBadge: 'true'
        },
        {
            id: 'radio-insurance-basis-exclusief-(restitutie)',
            title: 'Basis Exclusief (Restitutie)',
            pricePerYear: '€ 1.624,62'
        }
    ],
    aanvullendVerzekering: [
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
    ],
    tandartsVerzekering: [
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
    ],
    geslacht: [
        { id: 'man', value: 'Man' },
        { id: 'vrouw', value: 'Vrouw' }
    ]
};
