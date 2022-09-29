import formatName from '@/helpers/format_name';

describe('formatName', () => {
    it('returns empty string if empty string is passed', () => {
        expect(formatName('')).toBe('');
    });
    it('Returns correct name when name has one letter', () => {
        expect(formatName('L')).toBe('L');
    });
    it('Returns correct name when name is in uppercase', () => {
        expect(formatName('LEELA')).toBe('Leela');
    });
    it('Returns correct name when name is in lowercase', () => {
        expect(formatName('leela')).toBe('Leela');
    });
    it('Returns correct name when name is random', () => {
        expect(formatName('leElA')).toBe('Leela');
    });
});
