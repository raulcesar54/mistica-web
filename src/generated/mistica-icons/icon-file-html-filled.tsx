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

const IconFileHtmlFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M3.973 11.707h.706v1.26h1.09v-1.26h.705v3.095h-.706V13.5h-1.09v1.303h-.705v-3.095ZM6.875 12.217v-.51H9.53l-.053.51h-.935v2.582h-.706v-2.582h-.961ZM10.455 11.707h-.558v3.095h.594v-1.801l.661 1.095h.544l.641-1.075v1.781h.647v-3.095h-.543l-1.009 1.728-.977-1.728ZM13.654 11.707h.706v2.582h1.37v.513h-2.076v-3.095Z"
            />
            <path
                fill={fillColor}
                d="M21.794 7.914a.61.61 0 0 1 .047.238v12.306c0 .75-.644 1.383-1.409 1.383H8.253c-.75 0-1.409-.647-1.409-1.384l.034-2.77H4.575a2.427 2.427 0 0 1-2.42-2.426V11.17a2.426 2.426 0 0 1 2.42-2.426h2.266V3.54c0-.726.673-1.384 1.41-1.384h7.414c.23 0 .445.087.61.244l5.3 5.131c.112.107.177.241.219.384ZM16 3.824V5.59c0 .658.216 1.213.625 1.608.414.4.997.61 1.689.61h1.804L16 3.825ZM4.575 16.471h10.493a1.21 1.21 0 0 0 1.207-1.21V11.17c0-.667-.54-1.21-1.207-1.21H4.575c-.666 0-1.207.54-1.207 1.21v4.092c0 .667.54 1.21 1.207 1.21Z"
            />
        </svg>
    );
};

export default IconFileHtmlFilled;
