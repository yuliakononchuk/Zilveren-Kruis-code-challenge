import { PERIODS } from '@/constants/enums';

export interface OptionSimple {
    id: string;
    title: string;
    name?: string;
    hasBadge?: boolean;
}

export interface OptionWithPrice extends Partial<OptionSimple> {
    pricePerYear: number;
}

export interface OptionWithDeductible extends Partial<OptionSimple> {
    deductible: number;
}

export interface OptionsObject {
    purposeOfRequest: OptionSimple[];
    deductible: OptionWithDeductible[];
    paymentPeriod: OptionSimple[];
    basicInsurance: OptionWithPrice[];
    extraInsurance: OptionWithPrice[];
    dentalInsurance: OptionWithPrice[];
    gender: OptionSimple[];
}

const options: OptionsObject = {
    purposeOfRequest: [
        {
            id: 'nieuw',
            title: 'Nieuwe werkgever met collectiviteit bij Zilveren Kruis'
        },
        {
            id: 'overstappen',
            title: 'Overstappen per 1-1-2023 naar Zilveren Kruis'
        }
    ],
    deductible: [
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
    paymentPeriod: [
        { id: PERIODS.maand, name: 'maand', title: 'per maand' },
        { id: PERIODS.kwartaal, name: 'kwartaal', title: 'per kwartaal' },
        { id: PERIODS.jaar, name: 'jaar', title: 'per jaar' }
    ],
    basicInsurance: [
        {
            id: 'radio-insurance-basis-budget',
            title: 'Basis Budget',
            pricePerYear: 1393.26
        },
        {
            id: 'radio-insurance-basis-zeker',
            title: 'Basis Zeker',
            pricePerYear: 1483.54,
            hasBadge: true
        },
        {
            id: 'radio-insurance-basis-exclusief-(restitutie)',
            title: 'Basis Exclusief (Restitutie)',
            pricePerYear: 1624.62
        }
    ],
    extraInsurance: [
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
    dentalInsurance: [
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
    gender: [
        { id: 'man', title: 'Man' },
        { id: 'vrouw', title: 'Vrouw' }
    ]
};

export default options;
