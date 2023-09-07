import { expect } from 'chai';
import { getSelector } from '../utils/selector';

describe('getSelector', () => {
    // payloads from https://www.4byte.directory/signatures/

    it('transfer(address,uint256)', () => {
        const declaration = 'transfer(address, uint256)';
        expect(getSelector(declaration)).to.eq('0xa9059cbb');
    });

    it('onLiquidityPositionChanged(address,int256)', () => {
        const declaration = 'onLiquidityPositionChanged(address,int256)';
        expect(getSelector(declaration)).to.eq('0x950f5408');
    });

    it('testUpdateRoleAssigner2()', () => {
        const declaration = 'testUpdateRoleAssigner2()';
        expect(getSelector(declaration)).to.eq('0xc3b7b31a');
    });

    it('testIsInGroupOnlyConfersRoleInContextThatTheRoleIsAssigned()', () => {
        const declaration =
            'testIsInGroupOnlyConfersRoleInContextThatTheRoleIsAssigned()';
        expect(getSelector(declaration)).to.eq('0xe183151a');
    });
});
