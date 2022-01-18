/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconArrowLineDownLeftLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M7.167 16.334L7.13 6.98a.47.47 0 00-.733-.44.477.477 0 00-.201.469l.065 10.447a.128.128 0 00.012.08.38.38 0 00.053.053.463.463 0 00.253.253.38.38 0 00.053.053.263.263 0 00.087.02l10.253.017a.454.454 0 00.354-.141.46.46 0 00-.325-.792H7.83l9.908-9.907a.47.47 0 00.001-.665.472.472 0 00-.664.001l-9.908 9.907z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconArrowLineDownLeftLight;