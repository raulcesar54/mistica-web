'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconMobileDeviceFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M18.488 5.388C18.397 3.504 16.902 2 15.078 2h-6.16C7.094 2 5.6 3.504 5.508 5.388h12.98ZM5.5 6.46h13v11.08h-13V6.46ZM8.918 22c-1.828 0-3.322-1.504-3.41-3.388h12.977C18.397 20.496 16.902 22 15.075 22H8.918Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M15.321 2.155c1.11 0 1.91.272 2.454.832.535.549.795 1.353.795 2.46V18.55c0 2.216-1.061 3.291-3.249 3.291H8.682c-2.187 0-3.249-1.075-3.249-3.291V5.446c0-2.185 1.093-3.291 3.25-3.291h6.638Zm-3.314 17.359c.342 0 .625-.107.821-.306.19-.199.289-.47.291-.81 0-.697-.411-1.114-1.109-1.114-.697 0-1.112.417-1.112 1.115 0 .339.095.61.289.81.193.198.479.305.82.305Z"
                />
            </svg>
        );
    }
};

export default IconMobileDeviceFilled;
