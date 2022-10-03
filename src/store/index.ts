import Vue from 'vue';
import Vuex from 'vuex';
import formatDate from '@/helpers/format_date';
import formatName from '@/helpers/format_name';
import formatFullName from '@/helpers/format_full_name';
import options from '@/constants/options';
import {
    Periods,
    PurposeOfRequest,
    Deductible,
    BasicInsurance,
    ExtraInsurance,
    DenalInsurance,
    Gender
} from '@/constants/enums';

Vue.use(Vuex);

export interface State {
    purposeOfRequestId: PurposeOfRequest;
    name: string;
    tussenvoegsels: string;
    surname: string;
    genderId: Gender;
    dateOfBirth: string;
    bsn: string;
    basicInsuranceId: BasicInsurance;
    paymentPeriodId: Periods;
    deductibleId: Deductible;
    extraInsuranceId: ExtraInsurance;
    dentalInsuranceId: DenalInsurance;
}

export default new Vuex.Store({
    state: {
        purposeOfRequestId: PurposeOfRequest.geen,
        name: '',
        tussenvoegsels: '',
        surname: '',
        genderId: Gender.geen,
        dateOfBirth: '',
        bsn: '',
        basicInsuranceId: BasicInsurance.geen,
        paymentPeriodId: Periods.jaar,
        deductibleId: Deductible.geen,
        extraInsuranceId: ExtraInsurance.geen,
        dentalInsuranceId: DenalInsurance.geen
    } as State,

    getters: {
        basicInsuranceIdNotSelected(state) {
            return state.basicInsuranceId.length === 0;
        },
        nameFormatted(state) {
            if (!state.name) return '';
            return formatFullName(
                state.name,
                state.tussenvoegsels,
                state.surname
            );
        },
        dateOfBirthFormatted(state) {
            if (!state.dateOfBirth) return '';
            return formatDate(new Date(state.dateOfBirth));
        },
        purposeOfRequest(state) {
            return options.purposeOfRequest.find(
                option => option.id === state.purposeOfRequestId
            );
        },
        gender(state) {
            return options.gender.find(option => option.id === state.genderId);
        },
        paymentPeriod(state) {
            return options.paymentPeriod.find(
                option => option.id === state.paymentPeriodId
            );
        },
        deductible(state) {
            return options.deductible.find(
                option => option.id === state.deductibleId
            );
        },
        basicInsurance(state) {
            return options.basicInsurance.find(
                option => option.id === state.basicInsuranceId
            );
        },
        extraInsurance(state) {
            return options.extraInsurance.find(
                option => option.id === state.extraInsuranceId
            );
        },
        dentalInsurance(state) {
            return options.dentalInsurance.find(
                option => option.id === state.dentalInsuranceId
            );
        },
        totalVerzekeringValue(state, getters) {
            return (
                getters.basicInsurance.pricePerYear +
                getters.extraInsurance.pricePerYear +
                getters.dentalInsurance.pricePerYear
            );
        }
    },

    mutations: {
        updatePurposeOfRequestId(state, value: PurposeOfRequest) {
            state.purposeOfRequestId = value;
        },
        updateBSN(state, value: string) {
            state.bsn = value;
        },
        updateName(state, value: string) {
            state.name = formatName(value);
        },
        updateTussenvoegsels(state, value: string) {
            state.tussenvoegsels = value.toLowerCase();
        },
        updateSurname(state, value: string) {
            state.surname = formatName(value);
        },
        updateGender(state, value: Gender) {
            state.genderId = value;
        },
        updateDateOfBirth(state, value: string) {
            state.dateOfBirth = value;
        },
        updateBasicInsurance(state, value: BasicInsurance) {
            state.basicInsuranceId = value;
        },
        updatePaymentPeriod(state, value: Periods) {
            state.paymentPeriodId = value;
        },
        updateDeductible(state, value: Deductible) {
            state.deductibleId = value;
        },
        updateExtraInsurance(state, value: ExtraInsurance) {
            state.extraInsuranceId = value;
        },
        updateDentalInsurance(state, value: DenalInsurance) {
            state.dentalInsuranceId = value;
        }
    }
});
