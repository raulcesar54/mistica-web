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

const IconMeatballFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M16.745 12.314c0-1.277 1.1-2.314 2.459-2.314 1.36 0 2.456 1.037 2.456 2.314 0 1.277-1.1 2.312-2.459 2.312-1.36 0-2.456-1.035-2.456-2.312m-7.374 0c0-1.277 1.1-2.314 2.459-2.314 1.36 0 2.459 1.035 2.459 2.314 0 1.277-1.1 2.312-2.459 2.312-1.36 0-2.459-1.035-2.459-2.312M4.456 10C3.1 10 2 11.037 2 12.314c0 1.277 1.097 2.312 2.456 2.312 1.36 0 2.459-1.035 2.459-2.312 0-1.28-1.102-2.314-2.459-2.314"
            />
        </svg>
    );
};

export default IconMeatballFilled;
