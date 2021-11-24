/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconPoundryRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M20.431 16.812a23.065 23.065 0 00-7.96 1.687V6.519c3.067-1.505 6.593-1.614 7.96-1.589v11.882zM3.255 4.93c1.367-.017 4.885.081 7.96 1.588v11.98a23.115 23.115 0 00-7.96-1.686V4.93zm17.854-1.216c-.21-.017-5.056-.361-9.266 1.734C7.636 3.35 2.79 3.698 2.58 3.714a.62.62 0 00-.577.62v13.092c0 .342.28.622.627.622 5.06 0 8.885 1.95 8.925 1.969.092.047.19.07.29.07.026 0 .049-.017.077-.02a.596.596 0 00.249-.07c.328-.162 4.022-1.952 8.89-1.952a.623.623 0 00.628-.622V4.331a.627.627 0 00-.58-.617z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconPoundryRegular;
