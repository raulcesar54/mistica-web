/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconCancelLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M11.998 2C17.513 2 21.996 6.488 22 11.996c0 1.892-.536 3.74-1.544 5.332a.36.36 0 01-.608-.384 9.261 9.261 0 001.432-4.952c0-5.12-4.163-9.284-9.282-9.284s-9.286 4.168-9.286 9.288 4.163 9.284 9.282 9.284a9.257 9.257 0 004.951-1.432.36.36 0 01.496.112.353.353 0 01-.112.496A9.97 9.97 0 0111.998 22C6.488 22 2 17.512 2 12S6.487 2 11.998 2zm6.79 16.072a.716.716 0 110 1.432.716.716 0 010-1.432zM7.464 7.464c.14-.14.364-.14.504 0l4.031 4.032 4.035-4.032c.14-.14.364-.14.504 0a.362.362 0 010 .504L12.506 12l4.027 4.032a.355.355 0 01-.252.608.354.354 0 01-.252-.104l-4.031-4.032-4.031 4.032a.354.354 0 01-.252.104.355.355 0 01-.252-.608L11.494 12 7.463 7.968a.355.355 0 010-.504z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M16.846 7.15a.5.5 0 010 .708L12.7 12.003l4.146 4.15a.498.498 0 01-.014.706.497.497 0 01-.693 0l-4.146-4.149-4.135 4.136a.5.5 0 01-.707-.707l4.135-4.136-4.135-4.132a.5.5 0 01.707-.707l4.135 4.136 4.15-4.15a.497.497 0 01.703 0zM11.996 23C19.299 23 23 19.3 23 12.002 23 4.702 19.299 1 11.998 1 4.699 1 1 4.702 1 12.003 1 19.301 4.699 23 11.997 23zm0-23C19.579 0 24 3.828 24 12.003 24 20.18 19.578 24 11.997 24 4.415 24 0 20.179 0 12.003 0 3.828 4.415 0 11.997 0z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconCancelLight;
