export default function formatName(name) {
    const nameLowerCase = name.toLowerCase();
    return nameLowerCase[0].toUpperCase() + nameLowerCase.slice(1);
}
