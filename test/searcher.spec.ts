import { expect } from 'chai';
import { Searcher } from '../core/Searcher';
import { getSelector } from '../utils/selector';
import { getNBytesOfHexString } from 'utils/bytes';

describe('Searcher', () => {
    const transferDefintion = 'transfer(address,uint256)';
    const transferHash = getSelector(transferDefintion);

    it('Works with default values', () => {
        const searcher = new Searcher({
            targetFunc: transferDefintion,
            onlyFirstNBytes: 1
        });

        const { selector } = searcher.search();
        expect(selector).to.eq(getNBytesOfHexString(transferHash, 1));
    });

    it('Works with different args', () => {
        const searcher = new Searcher({
            targetFunc: transferDefintion,
            args: 'uint',
            onlyFirstNBytes: 1
        });

        const { selector } = searcher.search();
        expect(selector).to.eq(getNBytesOfHexString(transferHash, 1));
    });

    it('Works with custom prefix', () => {
        const searcher = new Searcher({
            targetFunc: transferDefintion,
            args: 'uint',
            customPrefix: 'notFunc_',
            onlyFirstNBytes: 1
        });

        const { selector } = searcher.search();
        expect(selector).to.eq(getNBytesOfHexString(transferHash, 1));
    });
});
