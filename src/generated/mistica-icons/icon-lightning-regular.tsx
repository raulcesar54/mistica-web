/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconLightningRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M9.875 18.698l1.893-4.944a.639.639 0 00-.025-.507.6.6 0 00-.39-.314l-3.767-.932 6.05-6.496-1.815 4.605a.633.633 0 00.023.51c.078.16.221.274.39.316l4.145 1.023-6.504 6.739zm8.246-7.246a.605.605 0 00-.434-.429l-4.501-1.11 2.72-6.904a.624.624 0 00-.23-.745.582.582 0 00-.754.09l-8.916 9.57a.626.626 0 00-.143.598.6.6 0 00.432.423l4.112 1.016-2.7 7.05a.618.618 0 00.23.737.584.584 0 00.747-.078l9.286-9.619a.627.627 0 00.151-.6z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconLightningRegular;
