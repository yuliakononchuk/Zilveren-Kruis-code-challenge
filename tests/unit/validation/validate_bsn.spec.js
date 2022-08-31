import validate_bsn from '@/validation/validate_bsn.js';

const correct_bsn_with_zero_end = '383155800';
const correct_bsn_with_zero_start = '009078496';
const correct_bsn_random = '364208375';
const too_short_bsn = correct_bsn_with_zero_end.slice(
    0,
    correct_bsn_with_zero_end.length - 1
);

describe('bsn_validator', () => {
    it("doesn't pass validation for a too short bsn", () => {
        expect(validate_bsn(too_short_bsn)).toBe(false);
    });
    it("doesn't pass validation for a too long bsn", () => {
        expect(validate_bsn(`${correct_bsn_with_zero_end}0`)).toBe(false);
    });
    it("doesn't pass validation for a bsn not matching elftal", () => {
        expect(validate_bsn(`${too_short_bsn}1`)).toBe(false);
    });
    it('passes validation for a correct bsn', () => {
        expect(validate_bsn(correct_bsn_with_zero_end)).toBe(true);
        expect(validate_bsn(correct_bsn_with_zero_start)).toBe(true);
        expect(validate_bsn(correct_bsn_random)).toBe(true);
    });
});
