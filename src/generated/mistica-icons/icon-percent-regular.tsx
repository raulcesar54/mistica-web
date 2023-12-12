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

const IconPercentRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.841 12.001c0-6.706-3.627-9.846-9.846-9.846-6.218 0-9.84 3.14-9.84 9.846 0 6.706 3.622 9.84 9.84 9.84 6.219 0 9.846-3.134 9.846-9.84m-9.846 8.61c-5.792 0-8.61-2.817-8.61-8.61 0-5.798 2.818-8.616 8.61-8.616 5.799 0 8.617 2.818 8.617 8.616 0 5.793-2.821 8.61-8.617 8.61m3.827-13.56a.571.571 0 0 0-.802.104l-6.944 8.927a.575.575 0 1 0 .908.706l6.941-8.93a.572.572 0 0 0-.1-.804zm-6.146 3.891c-1.048 0-1.656-.53-1.656-1.655 0-1.13.611-1.659 1.656-1.659s1.658.53 1.658 1.659c0 1.128-.613 1.655-1.658 1.655m-.507-1.655c0 .453.05.507.507.507s.507-.05.507-.507c0-.451-.056-.507-.507-.507-.457 0-.507.05-.507.507m5.151 3.89c1.045 0 1.658.53 1.658 1.659 0 1.128-.61 1.655-1.658 1.655-1.045 0-1.655-.527-1.655-1.655 0-1.132.608-1.659 1.655-1.659m0 2.163c.457 0 .51-.053.51-.507 0-.451-.056-.507-.51-.507-.456 0-.507.05-.507.507 0 .454.05.507.507.507"
            />
        </svg>
    );
};

export default IconPercentRegular;
