import { keccak256 } from 'ethers/lib/utils';
import { getNBytesOfHexString } from './bytes';

// 0x-prefixed (2 char) + 4 bytes (8 char)
export const getSelector = (declaration: string, nBytes?: number) => {
    return getNBytesOfHexString(
        keccak256(Buffer.from(declaration.replace(' ', ''))),
        nBytes
    );
};

export const getSelectorArgs = (declaration: string) =>
    /\(([^)]+)\)/.exec(declaration)?.[1] || '';
