export default {
    aanvraagReden: [
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
            deductible: 385
        },
        {
            id: '2',
            title: '€ 885 - korting van € 22 per jaar',
            deductible: 885
        }
    ],
    betaalTermijn: [
        { id: 'maand', name: 'maand', title: 'per maand' },
        { id: 'kwartaal', name: 'kwartaal', title: 'per kwartaal' },
        { id: 'jaar', name: 'jaar', title: 'per jaar'}
    ],
    basisVerzekering: [
        {
            id: 'radio-insurance-basis-budget',
            title: 'Basis Budget',
            pricePerYear: 1393.26
        },
        {
            id: 'radio-insurance-basis-zeker',
            title: 'Basis Zeker',
            pricePerYear: 1483.54,
            hasBadge: 'true'
        },
        {
            id: 'radio-insurance-basis-exclusief-(restitutie)',
            title: 'Basis Exclusief (Restitutie)',
            pricePerYear: 1624.62
        }
    ],
    aanvullendeVerzekering: [
        {
            id: '1',
            title: 'Aanvullend 1',
            pricePerYear: 21.38
        },
        {
            id: '2',
            title: 'Aanvullend 2',
            pricePerYear: 85.06
        },
        {
            id: '3',
            title: 'Aanvullend 3',
            pricePerYear: 198.63
        },
        {
            id: '4',
            title: 'Aanvullend 4',
            pricePerYear: 359.73
        }
    ],
    tandartsVerzekering: [
        {
            id: '1',
            title: 'Tand 1',
            pricePerYear: 80.28
        },
        {
            id: '2',
            title: 'Tand 2',
            pricePerYear: 221.65
        },
        {
            id: '3',
            title: 'Tand 3',
            pricePerYear: 449.36
        }
    ],
    geslacht: [
        { id: 'man', title: 'Man' },
        { id: 'vrouw', title: 'Vrouw' }
    ]
};
