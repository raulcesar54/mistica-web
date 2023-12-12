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

const IconHomeFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^vivo-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M19.572 20.225c0 .888-.79 1.61-1.76 1.61H6.058c-.97 0-1.76-.722-1.76-1.607v-6.933h-.386c-.723 0-1.367-.398-1.633-1.014-.255-.583-.123-1.232.347-1.69l8.081-7.951c.662-.653 1.91-.653 2.575 0l8.08 7.95c.469.459.603 1.106.348 1.688-.266.617-.91 1.014-1.633 1.014h-.504z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.443 12.284 12.012 2 2.584 12.284a.34.34 0 0 0-.068.396c.068.144.171.216.308.216h1.7V22h5.444v-6.428h4.083V22h5.444v-9.108h1.7c.137 0 .27-.072.309-.216.038-.14.038-.284-.061-.392Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m21.423 10.71-8.258-8.115c-.596-.586-1.725-.586-2.324 0l-8.258 8.117a1.326 1.326 0 0 0-.311 1.502c.24.552.818.907 1.47.907h.611v7.283c0 .793.709 1.437 1.583 1.437h3.109c.23.006.423-.18.426-.409v-4.045h5.112v4.045a.42.42 0 0 0 .425.412h2.939c.874 0 1.582-.644 1.582-1.437v-7.283h.729c.652 0 1.232-.356 1.47-.907.23-.521.112-1.099-.305-1.507"
                />
            </svg>
        );
    }
};

export default IconHomeFilled;
