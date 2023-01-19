/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconContactlessPaymentsPoundFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M7.994 2c-1.882 0-3.42 1.504-3.515 3.388h13.372C17.756 3.504 16.218 2 14.337 2H7.994zm0 20c-1.882 0-3.42-1.504-3.515-3.388h13.372C17.756 20.496 16.218 22 14.337 22H7.994zm13.687-5.318a6.75 6.75 0 00-.117-9.378.699.699 0 00-.997 0 .722.722 0 000 1.01 5.31 5.31 0 01.09 7.385.722.722 0 00.027 1.01.692.692 0 00.487.197.71.71 0 00.51-.224zm-1.777-7.7a4.382 4.382 0 01.126 6.013.681.681 0 01-.519.233.688.688 0 01-.478-.187.726.726 0 01-.04-1.01 2.947 2.947 0 00-.086-4.038.722.722 0 010-1.01.699.699 0 01.997 0zm-2.04-2.524v11.084H4.47V6.458h13.395zm-4.407 8.4h-2.91c.059-.17.09-.348.09-.535v-1.61h1.588a.53.53 0 00.528-.535.53.53 0 00-.528-.535h-1.588v-1.426c0-.59.474-1.07 1.056-1.07.244 0 .474.082.663.237.226.188.56.151.745-.077a.542.542 0 00-.077-.755 2.11 2.11 0 00-1.331-.475c-1.164 0-2.116.96-2.116 2.144v1.427h-.176a.53.53 0 00-.528.535.53.53 0 00.528.535h.176v1.61c0 .301-.23.534-.528.534a.53.53 0 00-.528.535.53.53 0 00.528.535h4.408a.536.536 0 00.528-.54.53.53 0 00-.528-.534z"
            />
        </svg>
    );
};

export default IconContactlessPaymentsPoundFilled;
