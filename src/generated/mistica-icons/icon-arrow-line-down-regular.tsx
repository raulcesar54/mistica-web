/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconArrowLineDownRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M11.375 4.685v13.038l-6.228-5.885a.688.688 0 00-.97.05.684.684 0 00.027.947l7.385 6.978c.032.03.073.046.11.07.033.024.065.051.104.067.082.032.168.05.257.05h.005a.749.749 0 00.253-.052c.04-.016.073-.044.107-.069.034-.022.075-.036.107-.066l7.252-6.852a.684.684 0 00.03-.968s0-.002-.003-.002a.687.687 0 00-.97-.027l-6.095 5.76V4.684a.687.687 0 00-1.371 0z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconArrowLineDownRegular;