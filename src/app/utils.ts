export function isArrayWithLength(test: any): boolean {
    return Array.isArray(test) && !!test.length;
}
