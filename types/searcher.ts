import { Nullable } from './helpers';

export type SearcherResult = {
    selector: string;
    targetSelector: string;
    definition: string;
};

export type SearcherArgs = {
    targetFunc: string;
    args?: Nullable<string>;
    customPrefix?: Nullable<string>;
    onlyFirstNBytes?: Nullable<number>;
};
