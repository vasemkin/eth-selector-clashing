import { getSelector } from './utils/selector';
import { getAppArgs } from './utils/app';
import { Searcher } from './core/Searcher';

(async () => {
    const { targetFunc, args, prefix, firstNBytes } = getAppArgs();

    if (!targetFunc) {
        throw new Error('Please specify --targetFunc');
    }

    console.log('Searching for the new selector...');
    const targetHash = getSelector(targetFunc);
    console.log({
        targetSelector: targetHash,
        targetFunc
    });

    const searcher = new Searcher({
        targetFunc,
        args,
        customPrefix: prefix,
        onlyFirstNBytes: firstNBytes
    });
    const result = searcher.search();

    console.log('Found successfully');
    console.log(result);
})();
