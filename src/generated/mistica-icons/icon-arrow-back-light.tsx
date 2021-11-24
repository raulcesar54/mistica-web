/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconArrowBackLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M19.529 11.62H5.518l6.448-6.783a.47.47 0 00-.208-.829.477.477 0 00-.473.19L4.084 11.77a.128.128 0 00-.048.066.414.414 0 000 .075.463.463 0 000 .357.414.414 0 000 .075.263.263 0 00.048.075l7.069 7.43a.454.454 0 00.35.15.46.46 0 00.33-.79l-6.315-6.65h14.01a.47.47 0 00.472-.47.472.472 0 00-.471-.469c0 .003 0 .003 0 0z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconArrowBackLight;
