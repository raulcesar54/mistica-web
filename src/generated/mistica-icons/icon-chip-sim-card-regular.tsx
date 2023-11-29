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

const IconChipSimCardRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^blau/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M7.482 18.88h9.93v-8.511c0-.78-.639-1.419-1.42-1.419H8.902c-.78 0-1.419.639-1.419 1.419v8.51Zm8.51-1.419H8.902v-7.092h7.092v7.092Z"
                />
                <path
                    fill={fillColor}
                    d="M5 21.858h14.894V7.922c0-.567-.237-1.1-.61-1.49l-3.621-3.794A1.855 1.855 0 0 0 14.24 2H7.03C5.914 2 5 2.957 5 4.128v17.73Zm13.54-1.418H6.354V4.128c0-.39.305-.71.677-.71h7.21c.203 0 .372.071.508.213l3.588 3.795c.135.141.203.319.203.496V20.44Z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.03 19.144H6.98v-8.572c0-.784.647-1.428 1.435-1.428h7.18c.787 0 1.434.644 1.434 1.428v8.572Zm-8.615-1.428h7.18v-7.144h-7.18v7.144Z"
                />
                <path
                    fill={fillColor}
                    d="M19.9 22H4.11V4.144C4.11 2.964 5.079 2 6.26 2h7.646c.575 0 1.114.216 1.507.644l3.84 3.82c.393.392.646.928.646 1.5V22Zm-1.436-1.428V7.964a.7.7 0 0 0-.217-.5l-3.802-3.82a.729.729 0 0 0-.539-.216H6.261a.72.72 0 0 0-.72.716v16.428h12.923Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M7.901 19.387a.562.562 0 0 1-.56-.56v-8.611c0-.308.252-.56.56-.56h8.194c.308 0 .56.252.56.56v8.61a.56.56 0 0 1-.56.56H7.9Zm.56-3.852h7.073v-2.028H8.462v2.028Zm1.606 1.12H8.462v1.611h1.605v-1.61Zm1.12 1.611h1.61v-1.61h-1.61v1.61Zm2.731 0h1.616v-1.61h-1.616v1.61Zm-3.851-5.88v-1.61H8.462v1.61h1.605Zm2.73 0v-1.61h-1.61v1.61h1.61Zm2.737 0v-1.61h-1.616v1.61h1.616Z"
                />
                <path
                    fill={fillColor}
                    d="M16.638 21.835H7.361c-.482 0-1.16-.106-1.647-.622-.362-.384-.552-.927-.552-1.577V6.264a.56.56 0 0 1 .18-.412l3.82-3.544a.566.566 0 0 1 .38-.148h7.096c.482 0 1.16.106 1.647.622.361.384.552.927.552 1.577v15.277c0 .65-.19 1.194-.552 1.577-.269.283-.773.622-1.647.622ZM6.282 6.507v13.13c0 .744.334 1.078 1.079 1.078h9.277c.745 0 1.078-.334 1.078-1.079V4.36c0-.745-.333-1.079-1.078-1.079H9.764L6.282 6.507Z"
                />
            </svg>
        );
    }
};

export default IconChipSimCardRegular;
