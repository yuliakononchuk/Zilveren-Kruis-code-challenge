import Vue from 'vue';
import Vuex from 'vuex';
import formatDate from '@/helpers/format_date';
import formatName from '@/helpers/format_name';
import formatFullName from '@/helpers/format_full_name';
import options from '@/constants/options';
import { PERIODS } from '@/constants/enums';

Vue.use(Vuex);

export interface State {
    purposeOfRequestId: string;
    name: string;
    tussenvoegsels: string;
    surname: string;
    genderId: string;
    dateOfBirth: string;
    bsn: string;
    basicInsuranceId: string;
    paymentPeriodId: PERIODS;
    deductibleId: string;
    extraInsuranceId: string;
    dentalInsuranceId: string;
}

export default new Vuex.Store({
    state: {
        purposeOfRequestId: '',
        name: '',
        tussenvoegsels: '',
        surname: '',
        genderId: '',
        dateOfBirth: '',
        bsn: '',
        basicInsuranceId: '',
        paymentPeriodId: PERIODS.jaar,
        deductibleId: '',
        extraInsuranceId: '',
        dentalInsuranceId: ''
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
        updatePurposeOfRequestId(state, value: string) {
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
        updateGender(state, value: string) {
            state.genderId = value;
        },
        updateDateOfBirth(state, value: string) {
            state.dateOfBirth = value;
        },
        updateBasicInsurance(state, value: string) {
            state.basicInsuranceId = value;
        },
        updatePaymentPeriod(state, value: PERIODS) {
            state.paymentPeriodId = value;
        },
        updateDeductible(state, value: string) {
            state.deductibleId = value;
        },
        updateExtraInsurance(state, value: string) {
            state.extraInsuranceId = value;
        },
        updateDentalInsurance(state, value: string) {
            state.dentalInsuranceId = value;
        }
    }
});
