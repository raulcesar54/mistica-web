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
                d="M21.841 7.46c0-.807-.655-1.462-1.462-1.462h-8.157v-.734c0-.807-.655-1.462-1.462-1.462H3.617c-.807 0-1.462.655-1.462 1.462v13.479c0 .806.655 1.462 1.462 1.462H20.38c.807 0 1.462-.655 1.462-1.462V7.46zM5.592 8.796c.913 0 1.26.586 1.26 1.712s-.347 1.705-1.26 1.705-1.26-.58-1.26-1.705c0-1.124.347-1.712 1.26-1.712zm0 .504c.39 0 .543.3.543 1.207 0 .908-.154 1.155-.543 1.155-.39 0-.543-.244-.543-1.155 0-.91.154-1.207.543-1.207zm3.591-.504c.913 0 1.26.586 1.26 1.712s-.347 1.705-1.26 1.705-1.26-.58-1.26-1.705c0-1.124.347-1.712 1.26-1.712zm0 .504c.39 0 .543.3.543 1.207 0 .908-.154 1.155-.543 1.155-.39 0-.543-.244-.543-1.155 0-.91.154-1.207.543-1.207zm7.863 1.207c0-1.123.347-1.71 1.26-1.71s1.26.585 1.26 1.71c0 1.127-.347 1.706-1.26 1.706s-1.26-.58-1.26-1.705zm1.8 0c0-.907-.153-1.207-.543-1.207-.389 0-.543.297-.543 1.207 0 .91.154 1.155.543 1.155.39 0 .544-.247.544-1.155zm-6.834 1.194V9.41h-.53v-.46c.194-.028.522-.056.754-.056.336 0 .451.081.451.322v2.488h.465v.484h-1.694v-.487h.554zm-6.66 5.4v-2.29h-.528v-.46c.194-.028.521-.056.754-.056.336 0 .451.08.451.322v2.487h.465v.485H4.799V17.1h.552zm9.016-5.4h.552V9.41h-.527v-.46c.193-.028.521-.056.754-.056.336 0 .45.081.45.322v2.488h.466v.484h-1.695v-.487zm-6.445 4.21c0-1.123.347-1.712 1.26-1.712s1.26.586 1.26 1.712-.347 1.706-1.26 1.706-1.26-.58-1.26-1.706zm1.803 0c0-.908-.154-1.207-.543-1.207-.39 0-.543.296-.543 1.207 0 .91.154 1.154.543 1.154.39 0 .543-.247.543-1.154zm8.58-1.712c.913 0 1.26.586 1.26 1.712s-.347 1.706-1.26 1.706-1.26-.58-1.26-1.706c0-1.123.347-1.712 1.26-1.712zm-.003.505c.39 0 .544.3.544 1.207s-.154 1.154-.544 1.154c-.389 0-.543-.244-.543-1.154 0-.91.154-1.207.543-1.207zm-6.29 2.4v-2.291h-.53v-.46a6.17 6.17 0 01.753-.056c.336 0 .451.082.451.323v2.487h.465v.485h-1.694v-.488h.554zm2.355 0h.552v-2.291h-.527v-.46c.193-.027.521-.056.754-.056.336 0 .45.082.45.323v2.487h.466v.485h-1.695v-.488z"
            />
        </svg>
    );
};

export default IconFolderEncryptedFilled;
