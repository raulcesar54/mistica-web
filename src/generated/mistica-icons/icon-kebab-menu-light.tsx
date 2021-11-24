/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconKebabMenuLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M11.914 14.439c-1.277 0-2.314-1.1-2.314-2.459 0-1.36 1.035-2.459 2.314-2.459 1.277 0 2.312 1.1 2.312 2.459 0 1.36-1.035 2.459-2.312 2.459zm0-7.374c-1.277 0-2.314-1.1-2.314-2.459 0-1.36 1.037-2.456 2.314-2.456 1.277 0 2.312 1.1 2.312 2.459 0 1.36-1.035 2.456-2.312 2.456zm0 14.745c-1.277 0-2.314-1.1-2.314-2.456 0-1.357 1.035-2.459 2.314-2.459 1.277 0 2.312 1.1 2.312 2.459 0 1.36-1.035 2.456-2.312 2.456z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconKebabMenuLight;
