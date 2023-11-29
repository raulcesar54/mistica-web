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

const IconFilePngFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="m20.11 7.803.004.003v-.003h-.003ZM11.511 13.318c0-1.151.608-1.93 1.86-1.93.365 0 .801.076 1.037.177l-.107.613a3.293 3.293 0 0 0-.87-.134c-.743 0-1.048.44-1.048 1.24 0 .415.053.754.215.978.135.188.356.297.709.297.134 0 .316-.017.445-.036v-.773h-.515v-.603h1.35v1.877c-.35.107-.907.188-1.31.188-1.32-.003-1.765-.729-1.765-1.894ZM4.447 11.458H5.71c.575 0 .942.082 1.177.3.199.182.297.468.297.86 0 .392-.093.689-.275.893-.215.241-.549.356-1.03.356h-.592v1.27h-.84v-3.679ZM5.7 13.237c.27 0 .381-.036.49-.14.098-.098.146-.252.146-.468 0-.199-.042-.344-.14-.434-.1-.092-.258-.129-.515-.129h-.393v1.171H5.7ZM8.394 11.458h-.62v3.675h.737v-2.23l1.69 2.23h.672v-3.675h-.737v2.353l-1.742-2.353Z"
            />
            <path
                fill={fillColor}
                d="M21.792 7.912c.03.073.047.154.047.238v12.306c0 .75-.644 1.383-1.409 1.383H8.248c-.748 0-1.409-.647-1.409-1.383l.034-2.774H4.57a2.425 2.425 0 0 1-2.42-2.423v-4.095a2.427 2.427 0 0 1 2.42-2.426h2.266V3.534c0-.726.67-1.384 1.41-1.384h7.414a.86.86 0 0 1 .613.25l5.297 5.126c.115.109.18.243.222.386Zm-1.681-.11L15.999 3.82v1.764c0 .656.216 1.213.622 1.608.414.4.997.61 1.692.61h1.798ZM4.573 16.468h9.846a1.21 1.21 0 0 0 1.207-1.208v-4.095c0-.666-.54-1.21-1.207-1.21H4.573a1.21 1.21 0 0 0-1.207 1.21v4.095c0 .667.54 1.208 1.207 1.208Z"
            />
        </svg>
    );
};

export default IconFilePngFilled;
