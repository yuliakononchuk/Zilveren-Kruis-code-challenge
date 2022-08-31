<template>
    <section>
        <table class="summary-table mb-4">
            <tr>
                <h2 class="mt-4 mb-4">Controle</h2>
                <h3>Gekozen pakket</h3>
                <h3 v-if="naamFormatted">
                    {{ naamFormatted }}
                    <span v-if="geboortedatumFormatted">
                        ({{ geboortedatumFormatted }})
                    </span>
                </h3>

                <div class="summary-table__row">
                    <p class="summary-table__row-title">Basisverzekering</p>
                    <div class="summary-table__row-content">
                        <span>{{ basisVerzekering.title }}</span>
                        <span>{{ formatCurrency(basisVerzekering.pricePerYear) }}</span>
                    </div>
                </div>
            </tr>
            <tr>
                <div class="summary-table__row">
                    <p class="summary-table__row-title">Eigen risico</p>
                    <div class="summary-table__row-content">
                        <span>{{ formatCurrency(eigenRisico.deductible) }}</span>
                    </div>
                </div>
            </tr>
            <tr>
                <div class="summary-table__row">
                    <p class="summary-table__row-title">
                        Aanvullende verzekering
                    </p>
                    <div class="summary-table__row-content">
                        <span>{{ aanvullendeVerzekering.title }}</span>
                        <span>{{ formatCurrency(aanvullendeVerzekering.pricePerYear) }}</span>
                    </div>
                </div>
            </tr>
            <tr>
                <div class="summary-table__row">
                    <p class="summary-table__row-title">Tandartsverzekering</p>
                    <div class="summary-table__row-content">
                        <span>{{ tandartsVerzekering.title }}</span>
                        <span>{{ formatCurrency(tandartsVerzekering.pricePerYear) }}</span>
                    </div>
                </div>
            </tr>
            <tr>
                <info-card class="mt-4">
                    <h4 class="mb-2">Totaal per {{}} in 2022:</h4>
                    <h2>{{ formatCurrency(totalVerzekeringValue) }}</h2>
                </info-card>

                <h3>Adres en contactgegevens</h3>
                <div class="summary-table__block">
                    <span class="summary-table__text--bold">
                        {{ naamFormatted }}
                    </span>
                    <span>Geslacht: {{ geslacht }}</span>
                    <span>Geboortedatum: {{ geboortedatumFormatted }}</span>
                    <span>Burgerservicenummer: {{ bsn }} </span>
                </div>
            </tr>
        </table>
    </section>
</template>

<script>
import InfoCard from '@/components/reusable/InfoCard.vue';
import formatCurrency from '@/helpers/format_currency.js'
import { mapState, mapGetters } from 'vuex';

export default {
    name: 'FormSummary',
    computed: {
        ...mapState(['bsn']),
        ...mapGetters([
            'naamFormatted',
            'geboortedatumFormatted',
            'eigenRisico',
            'basisVerzekering',
            'aanvullendeVerzekering',
            'tandartsVerzekering',
            'totalVerzekeringValue'
        ])
    },
    methods: {
        formatCurrency(curr) {
            return formatCurrency(curr)
        },
    },
    components: {
        InfoCard
    }
};
</script>

<style lang="scss">
.summary-table {
    width: 100%;

    &__text {
        &--bold {
            font-weight: bold;
        }
    }

    &__block {
        display: flex;
        flex-direction: column;
    }

    &__row {
        padding: 15px 0;
    }

    &__row-title {
        font-weight: bold;
    }

    &__row-content {
        display: flex;
        justify-content: space-between;
    }
}
</style>
