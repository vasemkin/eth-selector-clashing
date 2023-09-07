import { getSelector } from './utils/selector';
import { getAppArgs } from './utils/app';
import { Searcher } from './core/Searcher';

(async () => {
    const { targetFunc } = getAppArgs();

    if (!targetFunc) {
        throw new Error('Please specify --targetFunc');
    }

    const searcher = new Searcher(targetFunc);
    searcher.search();
})();
