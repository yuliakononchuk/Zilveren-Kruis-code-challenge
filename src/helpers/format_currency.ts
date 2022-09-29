export default function formatCurrency(price: number): string {
    const formatter = Intl.NumberFormat('nl-NL', {
        style: 'currency',
        currency: 'EUR'
    });
    return formatter.format(price);
}
