/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconExportRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M6.335 9.564a.842.842 0 01-.597-1.44l5.717-5.728a.847.847 0 011.194 0l5.65 5.655a.845.845 0 01-1.171 1.216c-.009-.006-.014-.014-.023-.022l-4.21-4.213v11.05a.845.845 0 01-1.689 0V5.032L6.929 9.315a.835.835 0 01-.594.249zm14.658 6.498c.465 0 .843.379.843.844v4.086a.844.844 0 01-.843.844h-18a.844.844 0 01-.843-.844v-4.086a.845.845 0 011.69 0v3.243h16.313v-3.243a.84.84 0 01.84-.844z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconExportRegular;
