export default function formatFullName(firstName: string, middleName: string, lastName: string): string {
    const hasMiddleName = middleName.length > 0;
    return hasMiddleName
        ? `${firstName[0]}. ${middleName} ${lastName}`
        : `${firstName[0]}. ${lastName}`;
}
