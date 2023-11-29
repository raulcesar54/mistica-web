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

const IconOfficeFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M3.757 2h16.466a.48.48 0 0 1 .468.464V22h-9.609v-7.907H5.59V22H3.3V2.464c0-.256.205-.464.457-.464Zm1.827 6.978h5.492V5.257H5.584v3.721Zm12.812 8.836v-3.721h-5.493v3.721h5.493Zm-5.493-8.836h5.493V5.257h-5.493v3.721Z"
            />
        </svg>
    );
};

export default IconOfficeFilled;
