import Vue from 'vue';
import Vuex from 'vuex';
import formatDate from '@/helpers/format_date.js';
import formatName from '@/helpers/format_name.js';
import formatFullName from '@/helpers/format_full_name.js';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        aanvraagReden: '',
        naam: '',
        tussenvoegsels: '',
        achternaam: '',
        geslacht: '',
        geboortedatum: '',
        bsn: '',
        basisVerzekering: '',
        betaalTermijn: '',
        eigenRisico: '',
        aanvullendeVerzekering: '',
        tandartsVerzekering: ''
    },

    getters: {
        basisVerzekeringNotSelected(state) {
            return state.basisVerzekering.length === 0;
        },
        naamFormat(state) {
            if (!state.naam) return '';
            return formatFullName(
                state.naam,
                state.tussenvoegsels,
                state.achternaam
            );
        },
        geboortedatumFormat(state) {
            if (!state.geboortedatum) return '';
            return formatDate(new Date(state.geboortedatum));
        }
    },

    mutations: {
        updateAanvraagReden(state, value) {
            state.aanvraagReden = value;
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
            state.geslacht = value;
        },
        updateGeboortedatum(state, value) {
            state.geboortedatum = value;
        },
        updateBasisVerzekering(state, value) {
            state.basisVerzekering = value;
        },
        updateBetaalTermijn(state, value) {
            state.betaalTermijn = value;
        },
        updateEigenRisico(state, value) {
            state.eigenRisico = value;
        },
        updateAanvullendeVerzekering(state, value) {
            state.aanvullendeVerzekering = value;
        },
        updateTandartsVerzekering(state, value) {
            console.warn(state);
            state.tandartsVerzekering = value;
        }
    }
});
