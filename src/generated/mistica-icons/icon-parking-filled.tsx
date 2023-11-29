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

const IconParkingFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.528 3.853v16.294c0 1.019-.79 1.853-1.766 1.853H4.245c-.97 0-1.765-.83-1.765-1.853V3.853C2.48 2.834 3.27 2 4.245 2h15.522c.97 0 1.76.83 1.76 1.853Zm-6.172 5.588c0 1.53-1.187 2.777-2.646 2.777H9.713V6.664h2.997c1.459 0 2.646 1.246 2.646 2.777Zm-2.641-3.887H8.66v12.403a.54.54 0 0 0 .528.555.54.54 0 0 0 .528-.555v-4.63h2.998c2.04 0 3.702-1.744 3.702-3.886 0-2.142-1.662-3.887-3.702-3.887Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M15.166 2.522c1.037.263 1.891.711 2.541 1.333 1.112 1.05 1.675 2.675 1.678 4.821 0 2.118-.513 3.776-1.524 4.927-.602.7-1.39 1.221-2.33 1.55-.889.31-1.975.467-3.23.467h-2.028v5.392c0 .457-.364.83-.813.83H5.432a.822.822 0 0 1-.812-.83V2.984c0-.46.364-.829.812-.829H11.5c1.47 0 2.703.123 3.666.367Zm-1.96 8.658c.246-.073.459-.201.655-.4.367-.373.557-1.093.557-2.079 0-.624-.086-1.454-.512-1.871-.154-.143-.398-.263-.709-.339-.403-.098-.95-.148-1.622-.148H10.27v4.974h1.431c.846 0 1.286-.072 1.505-.137Z"
                />
            </svg>
        );
    }
};

export default IconParkingFilled;
