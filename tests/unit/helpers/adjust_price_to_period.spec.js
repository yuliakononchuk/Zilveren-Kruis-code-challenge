import adjustPriceToPeriod from '@/helpers/adjust_price_to_period.js';
import { PERIODS } from '@/constants/enums.js';

describe('adjustPriceToPeriod', () => {
    it("returns correct value for year", () => {
        expect(adjustPriceToPeriod(120, PERIODS.jaar)).toBe(120.00);
        expect(adjustPriceToPeriod(120.24, PERIODS.jaar)).toBe(120.24);
    });
    it("returns correct value for quarter", () => {
        expect(adjustPriceToPeriod(120, PERIODS.kwartaal)).toBe(31.50);
        expect(adjustPriceToPeriod(120.24, PERIODS.kwartaal)).toBe(31.56);
    });
    it("returns correct value for month", () => {
        expect(adjustPriceToPeriod(120, PERIODS.maand)).toBe(11.20);
        expect(adjustPriceToPeriod(120.24, PERIODS.maand)).toBe(11.22);
    });
    it("errors out if period is incorrect", () => {
        expect(() => { adjustPriceToPeriod(120, 'jaaar') }).toThrow();
    });
});
