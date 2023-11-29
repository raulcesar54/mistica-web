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

const IconMenuRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M2.998 6.256a.834.834 0 0 1-.843-.82c0-.451.378-.821.843-.821h17.997c.465 0 .843.367.843.82a.834.834 0 0 1-.843.821H2.998Zm18 4.922c.465 0 .843.367.843.82a.832.832 0 0 1-.843.822h-18a.832.832 0 0 1-.843-.821c0-.454.378-.821.843-.821h18Zm.843 7.384a.832.832 0 0 0-.843-.821h-18a.832.832 0 0 0-.843.82c.006.46.384.827.843.822h18a.832.832 0 0 0 .843-.821Z"
            />
        </svg>
    );
};

export default IconMenuRegular;
