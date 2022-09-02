import Vue from 'vue';
import Vuex from 'vuex';
import formatDate from '@/helpers/format_date.js';
import formatName from '@/helpers/format_name.js';
import formatFullName from '@/helpers/format_full_name.js';
import formatBSN from '@/helpers/format_bsn.js';
import options from '@/constants/options';

Vue.use(Vuex);

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
        paymentPeriodId: 'jaar',
        deductibleId: '',
        extraInsuranceId: '',
        dentalInsuranceId: ''
    },

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
        updatePurposeOfRequestId(state, value) {
            state.purposeOfRequestId = value;
        },
        updateBSN(state, value) {
            state.bsn = formatBSN(value);
        },
        updateName(state, value) {
            state.name = formatName(value);
        },
        updateTussenvoegsels(state, value) {
            state.tussenvoegsels = value.toLowerCase();
        },
        updateSurname(state, value) {
            state.surname = formatName(value);
        },
        updateGender(state, value) {
            state.genderId = value;
        },
        updateDateOfBirth(state, value) {
            state.dateOfBirth = value;
        },
        updateBasicInsurance(state, value) {
            state.basicInsuranceId = value;
        },
        updatePaymentPeriod(state, value) {
            state.paymentPeriodId = value;
        },
        updateDeductible(state, value) {
            state.deductibleId = value;
        },
        updateExtraInsurance(state, value) {
            state.extraInsuranceId = value;
        },
        updateDentalInsurance(state, value) {
            state.dentalInsuranceId = value;
        }
    }
});
