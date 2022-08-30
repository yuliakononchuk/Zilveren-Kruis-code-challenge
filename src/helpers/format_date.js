export default function formatDate(dateObject) {
    const day = dateObject.getDay().toString().padStart(2, '0');
    const month = dateObject.toLocaleString('NL', { month: 'short' });
    const year = dateObject.getFullYear();
    return `${day} ${month} ${year}`;
}
