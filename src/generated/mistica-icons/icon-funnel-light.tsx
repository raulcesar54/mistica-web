/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconFunnelLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M13.594 15.408v4.919c0 .92-.712 1.673-1.591 1.673-.88 0-1.596-.749-1.596-1.668v-4.9L3.544 2.554a.395.395 0 01.004-.37A.348.348 0 013.852 2h16.292c.127 0 .245.071.308.185a.382.382 0 010 .37l-3.989 7.284a.351.351 0 01-.485.137.387.387 0 01-.131-.507l3.685-6.73H4.455l6.618 12.408a.366.366 0 01.046.18v5.005c0 .507.394.924.884.924.485 0 .883-.412.883-.924v-5a.35.35 0 01.032-.152l.798-1.853a.346.346 0 01.467-.185c.177.08.258.303.177.488l-.766 1.778zm1.59-3.043c.39 0 .708-.332.708-.74 0-.407-.317-.739-.707-.739-.39 0-.707.332-.707.74 0 .407.317.739.707.739z"
            />
        </svg>
    );
};

export default IconFunnelLight;
