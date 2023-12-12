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

const IconPercentFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.841 12c0-6.705-3.627-9.845-9.846-9.845-6.218 0-9.84 3.14-9.84 9.846 0 6.706 3.622 9.84 9.84 9.84 6.219 0 9.846-3.134 9.846-9.84m-6.014-4.946a.575.575 0 0 1 .1.807l-6.946 8.927a.572.572 0 0 1-.804.1.572.572 0 0 1-.1-.806l6.943-8.927a.572.572 0 0 1 .807-.1m.149 7.779c0 1.129-.611 1.655-1.656 1.655-1.048 0-1.655-.526-1.655-1.655s.61-1.656 1.655-1.656 1.656.527 1.656 1.656m-6.3-7.202c1.045 0 1.655.527 1.655 1.656 0 1.126-.61 1.655-1.655 1.655-1.048 0-1.656-.53-1.656-1.655 0-1.126.608-1.656 1.656-1.656"
            />
        </svg>
    );
};

export default IconPercentFilled;
