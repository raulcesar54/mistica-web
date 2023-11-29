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

const IconBarcodeFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M19.932 5.57H4.06c-1.14 0-2.064.932-2.064 2.075v8.707c0 1.143.925 2.075 2.064 2.075h15.872c1.139 0 2.064-.932 2.064-2.075V7.645a2.072 2.072 0 0 0-2.064-2.075Zm-4.008 2.664a.535.535 0 1 1 1.072 0v5.715a.535.535 0 1 1-1.072 0V8.234Zm-8.21.015a.535.535 0 1 1 1.071 0v5.714a.535.535 0 1 1-1.071 0V8.249Zm-3.547 0a.535.535 0 1 1 1.072 0v5.714a.535.535 0 1 1-1.072 0V8.249Zm2.286 8.039H4.682a.535.535 0 1 1 0-1.072h1.771a.535.535 0 1 1 0 1.072Zm.536-2.329a.535.535 0 1 1-1.072 0V8.245a.535.535 0 1 1 1.072 0v5.714Zm3.046 2.329H8.25a.535.535 0 1 1 0-1.072h1.786a.535.535 0 1 1 0 1.072Zm.536-2.329a.535.535 0 1 1-1.072 0V8.245a.535.535 0 1 1 1.072 0v5.714Zm1.96 1.793a.535.535 0 1 1-1.07 0V8.25a.535.535 0 1 1 1.07 0v7.503Zm1.79.536h-.714a.535.535 0 1 1 0-1.072h.714a.535.535 0 1 1 0 1.072Zm.536-2.329a.535.535 0 1 1-1.072 0V8.245a.535.535 0 1 1 1.072 0v5.714Zm2.685 2.329h-1.428a.535.535 0 1 1 0-1.072h1.428a.535.535 0 1 1 0 1.072Zm2.311-.536a.535.535 0 1 1-1.071 0V8.25a.535.535 0 1 1 1.071 0v7.503Z"
            />
        </svg>
    );
};

export default IconBarcodeFilled;
