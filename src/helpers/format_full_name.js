export default function formatFullName(firstName, middleName, lastName) {
    const hasMiddleName = middleName.length > 0;
    return hasMiddleName ? `${firstName[0]}. ${middleName} ${lastName}` : `${firstName[0]}. ${lastName}`;
}
