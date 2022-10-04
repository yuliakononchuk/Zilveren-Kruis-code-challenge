export default function validateBSN(bsn: number): boolean {
    const bsnString = bsn.toString();
    if (bsnString.length != 9) {
        return false;
    }
    const digitSum = bsnString.split('').reduce((agg, curr, index) => {
        const multiplier = index === 8 ? -1 : 9 - index;
        const currDigit = Number(curr);
        return agg + multiplier * currDigit;
    }, 0);
    return digitSum % 11 === 0;
}
