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

const IconBookFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.463 3.83c-.213-.018-5.19-.379-9.468 1.812C7.721 3.454 2.746 3.81 2.533 3.829a.409.409 0 0 0-.378.406v13.46a.41.41 0 0 0 .409.409c5.24 0 9.204 2.03 9.244 2.05.059.031.123.048.19.048.025 0 .05-.017.079-.023.039-.008.078-.008.112-.028l.016-.008h.006l.003-.003c.252-.126 4.126-2.036 9.218-2.036a.408.408 0 0 0 .41-.41V4.236a.409.409 0 0 0-.379-.406Z"
            />
        </svg>
    );
};

export default IconBookFilled;
