import { randomBytes } from 'crypto';
import { Nullable } from '../types/helpers';
import { getSelector, getSelectorArgs } from '../utils/selector';
import { DEFAULT_BYTES, DEFAULT_PREFIX } from '../constants/config';
import { SearcherArgs, SearcherResult } from '../types/searcher';

export class Searcher {
    targetFunc: string;
    targetSelector: Nullable<string>;
    definition: Nullable<string>;
    selector: Nullable<string>;
    prefix: Nullable<string>;
    nBytes: Nullable<number>;
    args: string;

    constructor({
        targetFunc,
        onlyFirstNBytes,
        args,
        customPrefix
    }: SearcherArgs) {
        this.targetFunc = targetFunc;
        this.nBytes = onlyFirstNBytes ?? DEFAULT_BYTES;
        this.targetSelector = getSelector(targetFunc, this.nBytes);
        this.args = args ?? getSelectorArgs(targetFunc);
        this.prefix = customPrefix ?? DEFAULT_PREFIX;
    }

    search(): SearcherResult {
        if (!this.targetSelector) {
            throw new Error('Error while calcuating targetFunc selector');
        }

        if (!this.args) {
            throw new Error('Error while parsing args');
        }

        while (this.selector !== this.targetSelector) {
            const randBytes = randomBytes(4).toString('hex');
            this.definition = `${this.prefix}${randBytes}(${this.args})`;
            this.selector = getSelector(this.definition, this.nBytes || 4);
        }

        return {
            selector: this.selector,
            targetSelector: this.targetSelector,
            definition: this.definition!
        };
    }
}
