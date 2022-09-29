export default function formatName(name: string): string {
    if (!name.length) {
        return name;
    }
    const nameLowerCase = name.toLowerCase();
    return nameLowerCase[0].toUpperCase() + nameLowerCase.slice(1);
}
