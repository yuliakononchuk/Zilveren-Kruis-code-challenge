import {
    Periods,
    PurposeOfRequest,
    Deductible,
    BasicInsurance,
    ExtraInsurance,
    DenalInsurance,
    Gender
} from '@/constants/enums';

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
            id: PurposeOfRequest.nieuw,
            title: 'Nieuwe werkgever met collectiviteit bij Zilveren Kruis'
        },
        {
            id: PurposeOfRequest.overstappen,
            title: 'Overstappen per 1-1-2023 naar Zilveren Kruis'
        }
    ],
    deductible: [
        {
            id: Deductible.verplicht,
            title: '€ 385 - verplicht eigen risico',
            deductible: 385
        },
        {
            id: Deductible.hoog,
            title: '€ 885 - korting van € 22 per jaar',
            deductible: 885
        }
    ],
    paymentPeriod: [
        { id: Periods.maand, name: 'maand', title: 'per maand' },
        { id: Periods.kwartaal, name: 'kwartaal', title: 'per kwartaal' },
        { id: Periods.jaar, name: 'jaar', title: 'per jaar' }
    ],
    basicInsurance: [
        {
            id: BasicInsurance.budget,
            title: 'Basis Budget',
            pricePerYear: 1393.26
        },
        {
            id: BasicInsurance.zeker,
            title: 'Basis Zeker',
            pricePerYear: 1483.54,
            hasBadge: true
        },
        {
            id: BasicInsurance.exclusief,
            title: 'Basis Exclusief (Restitutie)',
            pricePerYear: 1624.62
        }
    ],
    extraInsurance: [
        {
            id: ExtraInsurance.aanvullend1,
            title: 'Aanvullend 1',
            pricePerYear: 21.38
        },
        {
            id: ExtraInsurance.aanvullend2,
            title: 'Aanvullend 2',
            pricePerYear: 85.06
        },
        {
            id: ExtraInsurance.aanvullend3,
            title: 'Aanvullend 3',
            pricePerYear: 198.63
        },
        {
            id: ExtraInsurance.aanvullend4,
            title: 'Aanvullend 4',
            pricePerYear: 359.73
        }
    ],
    dentalInsurance: [
        {
            id: DenalInsurance.tand1,
            title: 'Tand 1',
            pricePerYear: 80.28
        },
        {
            id: DenalInsurance.tand2,
            title: 'Tand 2',
            pricePerYear: 221.65
        },
        {
            id: DenalInsurance.tand3,
            title: 'Tand 3',
            pricePerYear: 449.36
        }
    ],
    gender: [
        { id: Gender.man, title: 'Man' },
        { id: Gender.vrouw, title: 'Vrouw' }
    ]
};

export default options;
