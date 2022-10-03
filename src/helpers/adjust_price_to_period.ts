import { Periods } from '@/constants/enums';

export default function adjustPriceToPeriod(
    pricePerYear: number,
    periodId: Periods
): number {
    if (!Periods[periodId]) {
        throw new Error('Please select valid period');
    }
    if (periodId === Periods.kwartaal) {
        return Math.round((pricePerYear / 4) * 1.05 * 100) / 100;
    }
    if (periodId === Periods.maand) {
        return Math.round((pricePerYear / 12) * 1.12 * 100) / 100;
    }
    return pricePerYear;
}
