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

const IconPayInvoicePoundRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M4.31 7.42 9.617 2h10.078v20H4.31V7.42ZM9.206 7V4.44L6.7 7h2.506ZM5.71 20.57h12.588V3.43h-7.693v5H5.711v12.14Zm8.157-10.197a2.24 2.24 0 0 0-1.427-.517c-1.253 0-2.273 1.043-2.278 2.322v1.248a.707.707 0 0 0-.698.713c0 .393.313.713.698.713v1.426a.348.348 0 0 1-.349.356.707.707 0 0 0-.698.713c0 .393.313.713.698.713h4.372c.385 0 .698-.32.698-.713a.706.706 0 0 0-.698-.713h-2.658c.022-.114.036-.233.036-.356v-1.426h1.396c.385 0 .698-.32.698-.713a.706.706 0 0 0-.698-.713h-1.396v-1.248c0-.489.39-.891.872-.891.206 0 .394.069.55.196.3.247.744.202.985-.105a.727.727 0 0 0-.103-1.005Z"
            />
        </svg>
    );
};

export default IconPayInvoicePoundRegular;
