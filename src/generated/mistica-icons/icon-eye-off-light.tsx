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

const IconEyeOffLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.5 17a10.804 10.804 0 0 0 4.32-4.856c.036-.108.036-.216 0-.284A10.715 10.715 0 0 0 12 5.464c-1.68 0-3.356.392-4.892 1.18l-4.5-4.536a.343.343 0 0 0-.5 0 .343.343 0 0 0 0 .5l6.644 6.644A4.222 4.222 0 0 0 7.716 12 4.297 4.297 0 0 0 12 16.284c1.036 0 2-.392 2.752-1l1.572 1.572a9.82 9.82 0 0 1-4.32 1c-3.928 0-7.5-2.284-9.144-5.82A10.626 10.626 0 0 1 5.788 8.32a.382.382 0 0 0 .072-.5.382.382 0 0 0-.5-.072 10.679 10.679 0 0 0-3.216 4.108c-.036.108-.036.216 0 .284 1.712 3.896 5.608 6.396 9.856 6.396 1.716 0 3.392-.428 4.856-1.18l2.752 2.752c.072.072.18.108.252.108.072 0 .18-.036.252-.108a.343.343 0 0 0 0-.5L17.5 17ZM12 15.572A3.583 3.583 0 0 1 8.428 12c0-.856.284-1.644.82-2.252l5.036 5.036c-.64.5-1.428.788-2.284.788Zm0-7.14a3.583 3.583 0 0 1 3.572 3.572c0 .856-.284 1.644-.82 2.252l-5-5.004c.608-.5 1.392-.82 2.248-.82Zm3.284 6.32c.644-.748 1-1.716 1-2.752A4.297 4.297 0 0 0 12 7.716c-1.036 0-2 .392-2.752 1L7.68 7.144c1.356-.644 2.856-1 4.356-1 3.892 0 7.464 2.284 9.144 5.82A10.72 10.72 0 0 1 17 16.5l-1.716-1.748ZM21.284 22a.716.716 0 1 0 0-1.432.716.716 0 0 0 0 1.432Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m16.394 16.004 5.322 5.322c.112.109.112.285.002.392a.286.286 0 0 1-.198.081.275.275 0 0 1-.2-.081l-5.487-5.488c-1.285.5-2.577.748-3.868.748-3.269 0-6.532-1.602-9.692-4.762a.282.282 0 0 1 0-.398c1.75-1.75 3.53-3.027 5.322-3.823L2.273 2.673a.279.279 0 1 1 .395-.395l5.488 5.49c1.285-.498 2.576-.748 3.868-.748 3.269 0 6.532 1.603 9.692 4.762.05.054.081.126.081.2a.282.282 0 0 1-.081.198c-1.751 1.75-3.53 3.028-5.322 3.824m4.728-4.028c-2.989-2.92-6.048-4.4-9.098-4.4-1.143 0-2.289.21-3.432.62l.874.875c.622-.507 1.457-.762 2.49-.762 1.127 0 2.02.305 2.653.908.67.635 1.009 1.568 1.009 2.773 0 1.033-.252 1.868-.748 2.487l1.098 1.095c1.728-.73 3.45-1.932 5.154-3.596m-9.151-.804c.504 0 .832.263.829.837 0 .135-.02.252-.054.353l1.72 1.72c.393-.513.589-1.213.589-2.087 0-2.577-1.687-3.117-3.101-3.117-.874 0-1.574.201-2.09.599l1.75 1.75a1.02 1.02 0 0 1 .357-.055m-9.104.848c2.989 2.92 6.048 4.401 9.098 4.401 1.143 0 2.289-.207 3.431-.622L8.021 8.424c-1.728.73-3.45 1.933-5.154 3.597"
                />
            </svg>
        );
    }
};

export default IconEyeOffLight;
