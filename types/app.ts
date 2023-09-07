import { Nullable } from './helpers';

export interface AppArgs {
    targetFunc: Nullable<string>;
    args: Nullable<string>;
    prefix: Nullable<string>;
    firstNBytes: Nullable<number>;
}
