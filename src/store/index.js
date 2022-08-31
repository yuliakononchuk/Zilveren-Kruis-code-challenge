import Vue from 'vue';
import Vuex from 'vuex';
import formatDate from '@/helpers/format_date.js';
import formatName from '@/helpers/format_name.js';
import formatFullName from '@/helpers/format_full_name.js';
import options from '@/constants/options';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        aanvraagRedenId: '',
        naam: '',
        tussenvoegsels: '',
        achternaam: '',
        geslachtId: '',
        geboortedatum: '',
        bsn: '',
        basisVerzekeringId: '',
        betaalTermijnId: 'jaar',
        eigenRisicoId: '',
        aanvullendeVerzekeringId: '',
        tandartsVerzekeringId: ''
    },

    getters: {
        basisVerzekeringIdNotSelected(state) {
            return state.basisVerzekeringId.length === 0;
        },
        naamFormatted(state) {
            if (!state.naam) return '';
            return formatFullName(
                state.naam,
                state.tussenvoegsels,
                state.achternaam
            );
        },
        geboortedatumFormatted(state) {
            if (!state.geboortedatum) return '';
            return formatDate(new Date(state.geboortedatum));
        },
        aanvraagReden(state) {
            return options.aanvraagReden.find(
                option => option.id === state.aanvraagRedenId
            );
        },
        betaalTermijn(state) {
            return options.betaalTermijn.find(
                option => option.id === state.betaalTermijnId
            );
        },
        eigenRisico(state) {
            console.warn(state.eigenRisicoId, options.eigenRisico.find(
                option => option.id === state.eigenRisicoId
            ))
            return options.eigenRisico.find(
                option => option.id === state.eigenRisicoId
            );
        },
        basisVerzekering(state) {
            return options.basisVerzekering.find(
                option => option.id === state.basisVerzekeringId
            );
        },
        aanvullendeVerzekering(state) {
            return options.aanvullendeVerzekering.find(
                option => option.id === state.aanvullendeVerzekeringId
            );
        },
        tandartsVerzekering(state) {
            return options.tandartsVerzekering.find(
                option => option.id === state.tandartsVerzekeringId
            );
        },
        totalVerzekeringValue(state, getters) {
            return getters.basisVerzekering.pricePerYear + getters.aanvullendeVerzekering.pricePerYear + getters.tandartsVerzekering.pricePerYear
        },
    },

    mutations: {
        updateaanvraagRedenId(state, value) {
            state.aanvraagRedenId = value;
        },
        updateBSN(state, value) {
            state.bsn = value;
        },
        updateNaam(state, value) {
            state.naam = formatName(value);
        },
        updateTussenvoegsels(state, value) {
            state.tussenvoegsels = value.toLowerCase();
        },
        updateAchternaam(state, value) {
            state.achternaam = formatName(value);
        },
        updateGeslacht(state, value) {
            state.geslachtId = value;
        },
        updateGeboortedatum(state, value) {
            state.geboortedatum = value;
        },
        updateBasisVerzekering(state, value) {
            state.basisVerzekeringId = value;
        },
        updateBetaalTermijn(state, value) {
            state.betaalTermijnId = value;
        },
        updateEigenRisico(state, value) {
            state.eigenRisicoId = value;
        },
        updateAanvullendeVerzekering(state, value) {
            state.aanvullendeVerzekeringId = value;
        },
        updateTandartsVerzekering(state, value) {
            console.warn(state);
            state.tandartsVerzekeringId = value;
        }
    }
});
