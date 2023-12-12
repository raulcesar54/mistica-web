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

const IconShieldCheckedOkRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m12.21 21.967.007-.002c1.778-.594 7.15-2.388 7.15-7.237V6c0-.4-.315-.726-.701-.726-3.398 0-5.994-2.863-6.14-3.024l-.006-.007A.695.695 0 0 0 11.998 2a.688.688 0 0 0-.52.242c-.028.033-2.67 3.03-6.147 3.03-.386 0-.701.327-.701.727v8.73c0 1.2 0 4.855 7.157 7.238a.692.692 0 0 0 .423 0Zm-1.977-5.675L7.46 13.42a.746.746 0 0 1 0-1.029.685.685 0 0 1 .992 0l1.793 1.858 5.122-5.14a.685.685 0 0 1 .993.019c.27.288.26.75-.018 1.028l-6.11 6.136Zm7.728-9.6v8.036c0 2.547-1.896 4.386-5.967 5.782-4.07-1.396-5.967-3.235-5.967-5.782V6.693c2.822-.261 5.01-2.03 5.967-2.943.957.913 3.145 2.682 5.967 2.943Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20.615 5.295v.032c0 .555.008 6.654-.448 9.33-.622 3.61-7.611 6.985-7.908 7.128a.581.581 0 0 1-.51-.003c-.297-.14-7.28-3.518-7.902-7.126-.476-2.745-.46-9.092-.456-9.36a.597.597 0 0 1 .74-.583c1.608.254 2.46-.317 3.534-1.037l.009-.006C8.735 2.96 9.937 2.155 12 2.155h.009c2.063.003 3.262.806 4.324 1.518 1.079.723 1.933 1.294 3.566 1.04a.615.615 0 0 1 .715.582M18.99 14.45c.364-2.134.423-6.75.431-8.479-1.68.081-2.733-.613-3.75-1.294l-.003-.002C14.66 4 13.708 3.362 12.004 3.36H12c-1.706 0-2.658.638-3.67 1.316-1.013.678-2.056 1.373-3.748 1.294.009 1.728.067 6.345.437 8.48.412 2.386 4.958 5.108 6.983 6.12 2.028-1.012 6.58-3.74 6.99-6.12m-3.493-5.61-4.983 5.041-2-2.03a.592.592 0 0 0-.843 0 .607.607 0 0 0 0 .851l2.426 2.457a.592.592 0 0 0 .84 0L16.34 9.69a.607.607 0 0 0 0-.852.592.592 0 0 0-.843 0"
                />
            </svg>
        );
    }
};

export default IconShieldCheckedOkRegular;
