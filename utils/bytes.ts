export const getNBytesOfHexString = (hexString: string, nBytes?: number) =>
    hexString.slice(0, 2 + 2 * (nBytes || 4));
