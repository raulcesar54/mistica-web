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

const IconBoxLocationFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="m10.123 7.617 6.834-3.891-2.935-1.672a.301.301 0 0 0-.345 0L7.122 5.802c.035 0 3.001 1.815 3.001 1.815ZM20.577 5.802l-2.552-1.464-6.9 3.923 2.726 1.716 6.726-4.175ZM14.366 18.856v-7.99l6.726-4.176v7.779a.38.38 0 0 1-.17.32l-6.556 4.067ZM6.948 9.617c2.587 0 4.726 2.176 4.726 4.888 0 .856-.379 1.82-.932 2.82l2.587 1.571v-8.03L6.604 6.69v2.963c.052 0 .114-.009.175-.018.06-.009.119-.018.169-.018Z"
            />
            <path
                fill={fillColor}
                d="M6.948 10.333c-2.209 0-4.038 1.856-4.038 4.176 0 2.212 3.59 7.139 3.763 7.347.07.072.17.144.275.144.1 0 .209-.072.274-.144 0 0 .758-1.104 1.551-2.532.065-.115.129-.223.192-.33.074-.126.147-.25.222-.386l.02-.035c.89-1.519 1.74-2.969 1.74-4.068.039-2.28-1.79-4.172-4-4.172Zm0 5.244c-.724 0-1.311-.604-1.311-1.356 0-.748.584-1.356 1.31-1.356.728 0 1.312.604 1.312 1.356 0 .752-.588 1.356-1.311 1.356Z"
            />
        </svg>
    );
};

export default IconBoxLocationFilled;
