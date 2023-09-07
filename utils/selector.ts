import { keccak256 } from 'ethers/lib/utils';

// 0x-prefixed (2 char) + 4 bytes (8 char)
export const getSelector = (declaration: string) =>
    keccak256(Buffer.from(declaration.replace(' ', ''))).slice(0, 10);

export const getSelectorArgs = (declaration: string) =>
    /\(([^)]+)\)/.exec(declaration)?.[1] || '';
