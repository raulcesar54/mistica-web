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

const IconTrendDownLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.837 14.878v3.68c0 .23-.188.415-.415.412h-3.73a.414.414 0 0 1-.424-.406v-.006c0-.23.185-.411.423-.411h2.81L14.526 9.86l-7.563 3.235a.429.429 0 0 1-.532-.174L2.207 5.648a.414.414 0 0 1 .154-.566c.002-.003.005-.003.008-.005a.436.436 0 0 1 .577.156l4.036 6.956 7.522-3.219a.416.416 0 0 1 .515.14l5.972 8.275v-2.51c0-.23.185-.412.423-.412a.417.417 0 0 1 .423.415"
            />
        </svg>
    );
};

export default IconTrendDownLight;
