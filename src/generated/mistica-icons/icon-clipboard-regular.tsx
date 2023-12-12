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

const IconClipboardRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M15.94 3.074h1.795c1.185 0 2.155.965 2.155 2.144V22H4.1V5.214c0-1.18.97-2.144 2.154-2.144H8.05V2h7.89v1.074ZM7.87 8.075h8.249c.29 0 .542.252.542.535a.552.552 0 0 1-.538.535H7.871a.552.552 0 0 1-.538-.535c0-.283.253-.535.538-.535Zm8.249 2.858H7.87a.552.552 0 0 0-.538.534c0 .284.253.535.538.535h8.252a.552.552 0 0 0 .538-.535.553.553 0 0 0-.542-.534Zm0 2.857H7.87a.552.552 0 0 0-.538.535c0 .283.253.534.538.534h8.252a.552.552 0 0 0 .538-.534.553.553 0 0 0-.542-.535Zm0 2.857H7.87a.552.552 0 0 0-.538.535c0 .283.253.535.538.535h8.252a.552.552 0 0 0 .538-.535.553.553 0 0 0-.542-.535ZM9.088 3.074v1.788h5.777V3.074H9.088Zm-3.55 17.5h12.914V5.214a.716.716 0 0 0-.717-.713h-1.79v1.43H8.05V4.505H6.254a.716.716 0 0 0-.716.713v15.356Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.783 3.586c.854 0 1.602.611 1.602 1.306v15.644c0 .709-.734 1.305-1.602 1.305H6.223c-.869 0-1.603-.6-1.603-1.305V4.889c0-.695.75-1.305 1.602-1.305h2.956c.47-.914 1.442-1.429 2.826-1.429 1.686 0 2.468.709 2.829 1.431zm-7.737 1.317-.006.14v.002c.012.269.028.65 1.964.65 1.938 0 1.952-.382 1.96-.612v-.118a2.387 2.387 0 0 0-.098-.629c-.078-.25-.315-1.002-1.862-1.002-1.672 0-1.924.838-1.958 1.569m8.162 15.588-.008-15.6c0 .004-.013-.002-.035-.014-.066-.035-.216-.114-.382-.114h-2.648l.006.038.006.046.002.078.003.115-.002.107c-.05 1.51-1.544 1.722-3.146 1.722-1.602 0-3.093-.213-3.149-1.748v-.08l.003-.127.006-.1c0-.013.002-.023.004-.034a.27.27 0 0 0 .004-.02h-2.65c-.215 0-.397.132-.428.185l.011 15.588c.003 0 .011.005.024.013a.79.79 0 0 0 .393.116h11.56c.233 0 .401-.126.426-.17M10.755 4.738a.55.55 0 0 0 .551.549H12.7a.553.553 0 0 0 .554-.55.553.553 0 0 0-.555-.548h-1.392a.55.55 0 0 0-.551.549"
                />
            </svg>
        );
    }
};

export default IconClipboardRegular;
