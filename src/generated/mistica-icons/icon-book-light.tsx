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

const IconBookLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M11.997 5.645c4.274-2.187 9.252-1.829 9.467-1.81.213.018.379.191.373.404v13.457a.408.408 0 0 1-.409.409c-5.1 0-8.978 1.918-9.219 2.039h-.002l-.02.011a.381.381 0 0 1-.137.034.112.112 0 0 0-.022.006c-.01.004-.019.008-.029.008a.406.406 0 0 1-.19-.045l-.002-.001c-.112-.056-4.05-2.05-9.242-2.05a.409.409 0 0 1-.409-.406V4.242c0-.213.166-.39.378-.403.213-.02 5.188-.379 9.463 1.806Zm9.025 11.653V4.628c-1.23-.036-5.21-.008-8.614 1.718v12.81c1.289-.567 4.513-1.782 8.614-1.858ZM2.977 4.631v12.67c4.1.078 7.328 1.291 8.613 1.857V6.348C8.187 4.623 4.201 4.592 2.977 4.631Z"
            />
        </svg>
    );
};

export default IconBookLight;
