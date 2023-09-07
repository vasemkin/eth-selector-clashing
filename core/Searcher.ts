import { randomBytes } from 'crypto';
import { Nullable } from '../types/helpers';
import { getSelector, getSelectorArgs } from '../utils/selector';
import { DEFAULT_PREFIX } from '../constants/config';

export class Searcher {
    targetFunc: string;
    targetSelector: Nullable<string>;
    definition: Nullable<string>;
    selector: Nullable<string>;
    prefix: Nullable<string>;
    args: string;

    constructor(targetFunc: string, customPrefix?: string) {
        this.targetFunc = targetFunc;
        this.args = getSelectorArgs(targetFunc);
        this.targetSelector = getSelector(targetFunc);
        this.prefix = customPrefix ?? DEFAULT_PREFIX;
    }

    search() {
        if (!this.targetSelector) {
            throw new Error('Error while calcuating targetFunc selector');
        }

        if (!this.args) {
            throw new Error('Error while parsing args');
        }

        console.log('Searching for the new selector...');
        console.log({
            targetSelector: this.targetSelector,
            targetFunc: this.targetFunc
        });

        while (this.selector !== this.targetSelector) {
            const randBytes = randomBytes(4).toString('hex');
            this.definition = `${this.prefix}${randBytes}(${this.args})`;
            this.selector = getSelector(this.definition);
        }

        console.log('Target selector found!');
        console.log({
            selector: this.selector,
            targetSelector: this.targetSelector,
            definition: this.definition
        });
    }
}
