'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconFolderEncryptedFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.841 7.46c0-.807-.655-1.462-1.462-1.462h-8.157v-.734c0-.807-.655-1.462-1.462-1.462H3.617c-.807 0-1.462.655-1.462 1.462v13.479c0 .806.655 1.462 1.462 1.462h16.762c.806 0 1.462-.655 1.462-1.462zM5.591 8.796c.914 0 1.261.586 1.261 1.712s-.347 1.705-1.26 1.705-1.26-.58-1.26-1.705c0-1.124.347-1.712 1.26-1.712m0 .504c.39 0 .544.3.544 1.207 0 .908-.154 1.155-.543 1.155-.39 0-.544-.244-.544-1.155 0-.91.154-1.207.544-1.207m3.592-.504c.913 0 1.26.586 1.26 1.712s-.347 1.705-1.26 1.705-1.26-.58-1.26-1.705c0-1.124.347-1.712 1.26-1.712m0 .504c.39 0 .543.3.543 1.207 0 .908-.154 1.155-.543 1.155-.39 0-.544-.244-.544-1.155 0-.91.154-1.207.544-1.207m7.863 1.207c0-1.123.347-1.71 1.26-1.71s1.26.585 1.26 1.71c0 1.127-.347 1.706-1.26 1.706s-1.26-.58-1.26-1.705m1.8 0c0-.907-.154-1.207-.543-1.207-.39 0-.543.297-.543 1.207 0 .91.154 1.155.543 1.155.39 0 .544-.247.544-1.155m-6.834 1.194V9.41h-.53v-.46c.194-.028.522-.056.754-.056.336 0 .451.081.451.322v2.488h.465v.484h-1.695v-.487zM5.35 17.1v-2.29h-.527v-.46a6.17 6.17 0 0 1 .754-.056c.336 0 .45.08.45.322v2.487h.466v.485H4.799V17.1zm9.017-5.4h.551V9.41h-.526v-.46c.193-.028.52-.056.753-.056.336 0 .451.081.451.322v2.488h.465v.484h-1.694zm-6.446 4.21c0-1.123.348-1.712 1.26-1.712.914 0 1.261.586 1.261 1.712s-.347 1.706-1.26 1.706-1.26-.58-1.26-1.706m1.804 0c0-.908-.154-1.207-.543-1.207-.39 0-.544.297-.544 1.207 0 .91.154 1.154.544 1.154s.543-.247.543-1.154m8.58-1.712c.913 0 1.26.586 1.26 1.712s-.347 1.706-1.26 1.706-1.26-.58-1.26-1.706c0-1.123.347-1.712 1.26-1.712m-.003.505c.39 0 .544.3.544 1.207s-.155 1.154-.544 1.154c-.39 0-.543-.244-.543-1.154 0-.91.154-1.207.543-1.207m-6.291 2.4v-2.291h-.53v-.46a6.17 6.17 0 0 1 .754-.056c.336 0 .451.082.451.323v2.487h.465v.485h-1.695v-.488zm2.356 0h.551v-2.291h-.526v-.46a6.17 6.17 0 0 1 .753-.056c.336 0 .451.082.451.323v2.487h.465v.485h-1.694z"
            />
        </svg>
    );
};

export default IconFolderEncryptedFilled;
