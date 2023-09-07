import { parseArgs } from 'node:util';
import { AppArgs } from '../types/app.js';

export const getAppArgs = (): AppArgs => {
    const {
        values: { targetFunc }
    } = parseArgs({
        options: {
            targetFunc: {
                type: 'string',
                short: 't'
            }
        }
    });

    return {
        targetFunc
    };
};
