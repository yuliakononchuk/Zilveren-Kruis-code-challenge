export default function adjustPriceToPeriod(pricePerYear, periodId) {
    if (periodId === 'jaar') {
        return pricePerYear;
    }
    if (periodId === 'kwartaal') {
        return (pricePerYear / 4) * 1.05;
    }
    if (periodId === 'maand') {
        return (pricePerYear / 12) * 1.12;
    }
}
