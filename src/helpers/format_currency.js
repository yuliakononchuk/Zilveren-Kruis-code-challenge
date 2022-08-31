export default function formatCurrency(price) {
    const formatter = Intl.NumberFormat('nl-NL', {
        style: 'currency',
        currency: 'EUR'

    })
    return formatter.format(price)
}
