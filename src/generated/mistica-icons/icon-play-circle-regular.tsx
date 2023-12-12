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

const IconPlayCircleRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M9.198 16.31a.484.484 0 0 1-.487-.485V8.143a.484.484 0 0 1 .728-.42l6.653 3.84a.484.484 0 0 1 0 .84l-6.653 3.844a.501.501 0 0 1-.241.064m.485-1.328 5.196-3-5.196-3z"
            />
            <path
                fill={fillColor}
                d="M11.996 21.831c-3.123 0-5.552-.815-7.218-2.423-1.731-1.667-2.608-4.157-2.608-7.403 0-3.247.877-5.74 2.608-7.41C6.444 2.989 8.876 2.17 11.996 2.17c3.124 0 5.552.815 7.222 2.423 1.733 1.67 2.61 4.162 2.61 7.409 0 3.246-.88 5.737-2.61 7.406-1.67 1.608-4.098 2.423-7.222 2.423m0-18.571c-5.798 0-8.74 2.94-8.74 8.745 0 5.798 2.942 8.74 8.74 8.74 5.801 0 8.745-2.942 8.745-8.74 0-5.801-2.944-8.745-8.745-8.745"
            />
        </svg>
    );
};

export default IconPlayCircleRegular;
