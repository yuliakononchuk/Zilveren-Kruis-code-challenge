import formatFullName from '@/helpers/format_full_name';

describe('formatFullName', () => {
    it('formats the name correctly with middle name', () => {
        expect(formatFullName('Philip', 'j', 'Fry')).toBe('P. j Fry');
    });
    it('formats the name correctly without middle name', () => {
        expect(formatFullName('Philip', '', 'Fry')).toBe('P. Fry');
    });
});
