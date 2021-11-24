/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconInformationUserRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2zm0 1.428c-4.716 0-8.572 3.856-8.572 8.572 0 4.716 3.856 8.572 8.572 8.572 4.716 0 8.572-3.856 8.572-8.572 0-4.716-3.856-8.572-8.572-8.572zm0 5.712c.392 0 .716.32.716.716v6.784a.718.718 0 01-.716.716.718.718 0 01-.716-.716V9.856c0-.392.32-.716.716-.716zm0-2.852a.892.892 0 110 1.784.892.892 0 010-1.784z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M12.57 21.626c2.723-.025 9.056-1.008 9.056-9.592 0-8.599-6.392-9.62-9.144-9.657-.32-.003-.642-.003-.96.003-2.753.05-9.148 1.087-9.148 9.589 0 8.505 6.433 9.579 9.2 9.644.244.007.526.01.799.01 0 .003.197.003.197.003zM12.504 1C14.714 1.031 23 1.833 23 12.034 23 22.224 14.79 22.981 12.582 23h-.21c-.281 0-.575-.003-.829-.013C9.386 22.937 1 22.086 1 11.97 1 1.833 9.396 1.044 11.496 1.006 11.831 1 12.169 1 12.504 1zm-.498 8.264c.379 0 .689.307.689.689v7.15a.689.689 0 01-1.377 0v-7.15a.69.69 0 01.688-.689zm.007-2.373a.73.73 0 01.757.708.73.73 0 01-.707.757h-.054a.736.736 0 01-.707-.757.74.74 0 01.71-.708z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconInformationUserRegular;
