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

const IconTree2Filled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M17.186 5.933C15.939 2.345 11.9 2.16 11.076 2.16c-1.061 0-6.274.289-6.467 5.894-1.07.428-2.454 1.473-2.454 3.994 0 3.21 2.244 4.353 4.342 4.353h4.832v-1.51L8.93 12.465a.612.612 0 0 1 .003-.86.603.603 0 0 1 .854.003l1.54 1.558V9.59a.605.605 0 1 1 1.21 0v1.034l1.194-1.627a.605.605 0 1 1 .972.722l-2.143 2.922c-.005.008-.017.011-.022.02v3.728l-1.207.01v4.836a.605.605 0 1 0 1.21 0v-4.838l4.039-.025c2.431 0 5.266-1.378 5.266-5.26-.006-3.51-2.333-4.961-4.661-5.18"
            />
        </svg>
    );
};

export default IconTree2Filled;
