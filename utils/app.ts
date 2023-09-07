import { parseArgs } from 'node:util';
import { AppArgs } from '../types/app.js';

export const getAppArgs = (): AppArgs => {
    const {
        values: { targetFunc, args, prefix, firstNBytes }
    } = parseArgs({
        options: {
            targetFunc: {
                type: 'string',
                short: 't'
            },
            args: {
                type: 'string',
                short: 'a'
            },
            prefix: {
                type: 'string',
                short: 'p'
            },
            firstNBytes: {
                type: 'string',
                short: 'n'
            }
        }
    });

    return {
        targetFunc,
        args,
        prefix,
        firstNBytes: !!firstNBytes ? parseInt(firstNBytes, 10) : undefined
    };
};
