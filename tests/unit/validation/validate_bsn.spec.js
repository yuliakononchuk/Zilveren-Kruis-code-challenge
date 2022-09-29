import validateBSN from '@/validation/validate_bsn';

const correct_bsn_with_zero_end = '383155800';
const correct_bsn_with_zero_start = '009078496';
const correct_bsn_random = '364208375';
const too_short_bsn = correct_bsn_with_zero_end.slice(
    0,
    correct_bsn_with_zero_end.length - 1
);
const too_long_bsn = `${correct_bsn_with_zero_end}0`;
const bsn_with_wrong_number = `${too_short_bsn}1`;

describe('validateBSN', () => {
    it("doesn't pass validation for a too short bsn", () => {
        expect(validateBSN(too_short_bsn)).toBe(false);
    });
    it("doesn't pass validation for a too long bsn", () => {
        expect(validateBSN(too_long_bsn)).toBe(false);
    });
    it("doesn't pass validation for a bsn not matching elftal", () => {
        expect(validateBSN(bsn_with_wrong_number)).toBe(false);
    });
    it('passes validation for a correct bsn', () => {
        expect(validateBSN(correct_bsn_with_zero_end)).toBe(true);
        expect(validateBSN(correct_bsn_with_zero_start)).toBe(true);
        expect(validateBSN(correct_bsn_random)).toBe(true);
    });
});
