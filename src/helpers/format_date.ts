export default function formatDate(dateObject: Date): string {
    if (!dateObject.getDate) {
        throw new Error('Please provide a date object');
    }

    const day = dateObject.getDate().toString().padStart(2, '0');
    const month = dateObject.toLocaleString('NL', { month: 'short' });
    const year = dateObject.getFullYear();
    return `${day} ${month} ${year}`;
}
