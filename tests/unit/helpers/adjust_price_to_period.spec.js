import adjustPriceToPeriod from '@/helpers/adjust_price_to_period';
import { PERIODS } from '@/constants/enums';

describe('adjustPriceToPeriod', () => {
    it('returns correct value for year', () => {
        expect(adjustPriceToPeriod(120, PERIODS.jaar)).toBe(120.0);
        expect(adjustPriceToPeriod(120.24, PERIODS.jaar)).toBe(120.24);
    });
    it('returns correct value for quarter', () => {
        expect(adjustPriceToPeriod(120, PERIODS.kwartaal)).toBe(31.5);
        expect(adjustPriceToPeriod(120.24, PERIODS.kwartaal)).toBe(31.56);
    });
    it('returns correct value for month', () => {
        expect(adjustPriceToPeriod(120, PERIODS.maand)).toBe(11.2);
        expect(adjustPriceToPeriod(120.24, PERIODS.maand)).toBe(11.22);
    });
    it('errors out if period is incorrect', () => {
        expect(() => {
            adjustPriceToPeriod(120, 'jaaar');
        }).toThrow();
    });
});
