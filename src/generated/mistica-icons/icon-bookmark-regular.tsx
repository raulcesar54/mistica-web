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

const IconBookmarkRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M15.77 21.533c.265.205.58.308.896.308.224 0 .445-.05.655-.157.51-.252.826-.759.826-1.327V3.637c0-.818-.663-1.482-1.476-1.482h-9.35c-.815 0-1.476.664-1.476 1.479v16.723a1.472 1.472 0 0 0 .824 1.327c.51.252 1.106.194 1.616-.204l3.566-3.546a.21.21 0 0 1 .302-.006l3.616 3.605Zm-2.72-4.504a1.456 1.456 0 0 0-1.043-.431c-.392 0-.767.154-1.05.428L7.45 20.525a.194.194 0 0 1-.218.02.199.199 0 0 1-.118-.188V3.628c0-.114.092-.204.207-.204h9.35a.209.209 0 0 1 .205.21v16.723a.2.2 0 0 1-.118.187c-.042.023-.126.054-.157.034l-3.551-3.55Z"
            />
        </svg>
    );
};

export default IconBookmarkRegular;
