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

const IconRewindLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M2 12c0 5.517 4.488 10 10 10a9.97 9.97 0 0 0 5.334-1.545.36.36 0 0 0 .11-.493.36.36 0 0 0-.494-.11 9.247 9.247 0 0 1-4.95 1.43c-5.119 0-9.282-4.163-9.282-9.282S6.88 2.718 12 2.718s9.282 4.163 9.287 9.277a9.248 9.248 0 0 1-1.43 4.95.36.36 0 0 0 .11.494.36.36 0 0 0 .493-.11A9.98 9.98 0 0 0 22 12c0-5.512-4.488-10-10-10S2 6.484 2 12Zm16.787 6.07a.714.714 0 0 1 0 1.425.714.714 0 0 1 0-1.425Zm-2.249-1.175a.35.35 0 0 0 0-.503l-4.387-4.387 4.387-4.388a.35.35 0 0 0 0-.503.355.355 0 0 0-.502 0l-4.644 4.635a.35.35 0 0 0 0 .502l4.644 4.644c.068.068.16.105.251.105a.365.365 0 0 0 .251-.105Zm-6.07-.503a.35.35 0 0 1 0 .503.365.365 0 0 1-.25.105.357.357 0 0 1-.252-.105L5.323 12.25a.35.35 0 0 1 0-.502l4.643-4.635a.354.354 0 0 1 .503 0 .35.35 0 0 1 0 .503L6.08 12.005l4.388 4.387Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M10.984 15.216c.044.025.092.04.142.04a.252.252 0 0 0 .135-.04.278.278 0 0 0 .143-.244v-3.134a.284.284 0 0 0 .1.104l5.508 3.277c.044.025.092.04.142.04a.278.278 0 0 0 .28-.28V8.392c0-.101-.056-.194-.142-.244a.277.277 0 0 0-.283.003l-5.507 3.308a.274.274 0 0 0-.098.101V8.387c0-.1-.056-.193-.143-.244a.277.277 0 0 0-.283.003L5.47 11.454a.28.28 0 0 0 .003.482zm-.14-.734-4.681-2.787 4.68-2.812zm1.35-2.781 4.68-2.813v5.6z"
                />
                <path
                    fill={fillColor}
                    d="M2.16 12c0 6.437 3.403 9.838 9.838 9.838 6.44 0 9.843-3.404 9.84-9.838 0-3.26-.877-5.759-2.602-7.423-1.664-1.605-4.098-2.417-7.238-2.417C5.56 2.16 2.16 5.563 2.16 12m.56 0c0-6.156 3.123-9.28 9.278-9.28 6.16 0 9.283 3.12 9.28 9.28 0 6.157-3.12 9.278-9.28 9.278-6.157 0-9.278-3.124-9.278-9.278"
                />
            </svg>
        );
    }
};

export default IconRewindLight;
