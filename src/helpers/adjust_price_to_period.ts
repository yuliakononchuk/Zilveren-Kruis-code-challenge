import { PERIODS } from '@/constants/enums';

export default function adjustPriceToPeriod(
    pricePerYear: number,
    periodId: PERIODS
): number {
    if (!PERIODS[periodId]) {
        throw new Error('Please select valid period');
    }
    if (periodId === PERIODS.kwartaal) {
        return Math.round((pricePerYear / 4) * 1.05 * 100) / 100;
    }
    if (periodId === PERIODS.maand) {
        return Math.round((pricePerYear / 12) * 1.12 * 100) / 100;
    }
    return pricePerYear;
}
