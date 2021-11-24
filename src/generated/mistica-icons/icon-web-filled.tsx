/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconWebFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M6.655 10.357l2.729 2.384a.57.57 0 01.006.857l-2.73 2.429a.595.595 0 01-.409.154.61.61 0 01-.442-.188.566.566 0 01.01-.801c.01-.006.015-.014.023-.02l2.244-1.997-2.238-1.958a.567.567 0 01-.062-.798c.006-.009.014-.014.02-.023a.615.615 0 01.848-.039zm10.681 2.255c.333 0 .605.26.605.58 0 .32-.272.58-.602.58H10.87a.596.596 0 01-.605-.58c0-.32.272-.583.605-.583l6.465.003zm2.922 5.515a.22.22 0 00.224-.215V8.248H3.204v9.664c0 .117.101.215.225.215h16.829zM5.188 6.732a.548.548 0 00-.558-.537h-.003a.548.548 0 00-.557.537c0 .297.25.538.557.538a.548.548 0 00.56-.538zm1.678 0a.548.548 0 00-.558-.537h-.003a.548.548 0 00-.557.537c0 .297.25.538.557.538a.548.548 0 00.56-.538zm1.677 0a.548.548 0 00-.557-.537h-.003a.548.548 0 00-.557.537c0 .297.25.538.557.538a.548.548 0 00.56-.538zm11.715-2.207c.787 0 1.428.62 1.428 1.378v12.009c0 .759-.641 1.378-1.428 1.378H3.428c-.79 0-1.428-.616-1.428-1.375V5.903c0-.759.639-1.378 1.429-1.378h16.829z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconWebFilled;
