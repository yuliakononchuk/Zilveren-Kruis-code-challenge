export default function formatBSN(bsnString) {
    return bsnString.replace(/[^0-9]/g, "");
};
