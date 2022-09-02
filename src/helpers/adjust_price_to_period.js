import { PERIODS } from '@/constants/enums.js';

export default function adjustPriceToPeriod(pricePerYear, periodId) {
    if (!PERIODS[periodId]) {
        throw new Error('Please select valid period')
    }

    if (periodId === PERIODS.jaar) {
        return pricePerYear;
    }
    if (periodId === PERIODS.kwartaal) {
        return Math.round((pricePerYear / 4) * 1.05 * 100) / 100;
    }
    if (periodId === PERIODS.maand) {
        return Math.round((pricePerYear / 12) * 1.12 * 100) / 100;
    }
}
