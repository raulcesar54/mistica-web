/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconSearchLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M9.5 2c4.136 0 7.5 3.364 7.496 7.5 0 .392-.036.788-.108 1.22a.355.355 0 01-.412.292.355.355 0 01-.292-.412c.068-.388.1-.748.1-1.1A6.793 6.793 0 009.5 2.716 6.793 6.793 0 002.716 9.5 6.793 6.793 0 009.5 16.284a6.734 6.734 0 004.792-1.996c.14-.14.364-.14.504 0l.008.008 7.091 7.096c.14.136.14.364-.004.504a.357.357 0 01-.503 0l-6.852-6.852A7.434 7.434 0 019.5 17C5.364 17 2 13.636 2 9.5S5.364 2 9.5 2zm6.428 10a.716.716 0 110 1.432.716.716 0 010-1.432z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M15.487 4.38a7.806 7.806 0 01.192 10.907l6.085 6.082a.28.28 0 01-.196.479.28.28 0 01-.199-.084l-6.087-6.084-.018.02a7.757 7.757 0 01-5.298 2.072 7.809 7.809 0 01-5.524-13.33 7.814 7.814 0 0111.045-.062zM9.966 2.716a7.248 7.248 0 105.123 2.123 7.196 7.196 0 00-5.123-2.123z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconSearchLight;
