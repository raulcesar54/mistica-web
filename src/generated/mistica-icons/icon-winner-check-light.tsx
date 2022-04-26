/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconWinnerCheckLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M14.59 6.506l-4.259 4.259-1.539-1.539a.346.346 0 00-.499 0 .346.346 0 000 .5l2.038 2.037 4.763-4.758a.346.346 0 000-.499.344.344 0 00-.504 0zm3.828 5.472a.715.715 0 010 1.429.715.715 0 010-1.429zm1.433 6.617l-2.505-4.327c-.073-.105-.142-.105-.251-.105a.38.38 0 00-.284.142 6.918 6.918 0 01-4.832 1.969 6.793 6.793 0 01-6.795-6.796c0-3.755 3.04-6.8 6.795-6.8a6.793 6.793 0 016.796 6.795c0 .358-.036.678-.073 1.04-.037.178.105.394.284.394.178.036.394-.106.394-.284.073-.357.073-.751.073-1.108A7.513 7.513 0 0011.938 2a7.502 7.502 0 00-7.505 7.51c0 1.933.75 3.718 1.969 5.046l-2.253 4.08c-.073.143-.073.284.037.394.11.11.251.142.393.106l3.22-.967.966 3.577c.037.142.142.252.284.252h.036a.375.375 0 00.321-.179l2.468-4.437 2.61 4.437a.381.381 0 00.321.179h.037c.141-.037.252-.106.284-.252l.966-3.577 3.256.967c.142.036.284 0 .393-.106.179-.146.179-.288.11-.435zM9.223 20.706l-.824-3.114c-.037-.105-.074-.178-.179-.215-.105-.036-.179-.036-.284-.036l-2.72.824 1.754-3.15c1.181 1.07 2.72 1.753 4.364 1.932l-2.111 3.76zm6.8-3.36c-.105-.038-.178 0-.284.036-.073.036-.142.142-.179.215l-.86 3.114-2.217-3.755a7.504 7.504 0 004.506-1.896l1.79 3.114-2.756-.829z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconWinnerCheckLight;