import formatDate from '@/helpers/format_date';

describe('formatDate', () => {
    it('returns correct value for a one-digit date', () => {
        expect(formatDate(new Date(2021, 2, 4))).toBe('04 mrt. 2021');
    });
    it('returns correct value for a 2-digit date', () => {
        expect(formatDate(new Date(1990, 1, 23))).toBe('23 feb. 1990');
    });
    it('returns correct value for the last day of the month', () => {
        expect(formatDate(new Date(1990, 0, 31))).toBe('31 jan. 1990');
    });
    it('returns correct value for the 1st day of the year', () => {
        expect(formatDate(new Date(1990, 0, 1))).toBe('01 jan. 1990');
    });
    it('errors out if smth other than date object is passed', () => {
        expect(() => {
            formatDate('2021-01-02');
        }).toThrow();
    });
});
