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

const IconInfinityLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M18.13 7.903c1.143.003 2.084.381 2.728 1.096.642.714.98 1.759.983 3.016-.008 2.563-1.395 4.09-3.711 4.09h-.02c-2.1-.008-5.115-2.546-6.112-3.487-.997.94-4.008 3.479-6.115 3.487h-.016c-1.135 0-2.073-.373-2.718-1.078-.647-.71-.991-1.751-.994-3.012-.003-1.26.336-2.302.978-3.016.641-.712 1.585-1.093 2.728-1.096h.008c2.104 0 5.126 2.544 6.126 3.488.998-.944 4.023-3.488 6.126-3.488h.009Zm-.006 7.289c1.852 0 2.877-1.129 2.88-3.18.003-1.027-.244-1.823-.737-2.37-.49-.545-1.213-.823-2.143-.826h-.005c-1.628 0-4.407 2.146-5.513 3.188 1.104 1.042 3.874 3.182 5.501 3.188h.017Zm-6.75-3.185c-1.107-1.045-3.886-3.188-5.513-3.188h-.006c-.93.003-1.65.28-2.143.827-.493.546-.74 1.344-.736 2.37.003 1.027.255 1.823.75 2.364.49.537 1.208.812 2.132.812h.017c1.63-.006 4.398-2.149 5.498-3.185Z"
            />
        </svg>
    );
};

export default IconInfinityLight;
