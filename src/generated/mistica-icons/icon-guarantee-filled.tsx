/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconGuaranteeFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M18.228 4.194c-.2-.032-.4-.05-.606-.05a4.06 4.06 0 00-2.926 1.243H5.009C5.105 3.504 6.657 2 8.555 2h6.4c1.475 0 2.736.91 3.273 2.194zm.282 11.165v2.176H5V6.46h8.95a4.103 4.103 0 001.366 5.178v4.292a.354.354 0 00.604.25l1.702-1.708.888.886zM8.555 22h6.4c1.898 0 3.45-1.503 3.546-3.386H5.009C5.105 20.492 6.657 22 8.555 22zm9.067-9.642c-.569 0-1.11-.12-1.602-.325v3.035l1.348-1.353a.348.348 0 01.5 0l1.348 1.353v-3.035a3.986 3.986 0 01-1.594.325zm0-.713A3.39 3.39 0 0021 8.252a3.386 3.386 0 00-3.378-3.39 3.389 3.389 0 00-3.377 3.39 3.389 3.389 0 003.377 3.392zm1.958-3.392a1.961 1.961 0 01-1.957 1.966 1.961 1.961 0 01-1.958-1.966c0-1.087.874-1.965 1.957-1.965 1.084 0 1.958.882 1.958 1.965zm-3.2-.004c0-.686.555-1.248 1.242-1.248a1.247 1.247 0 010 2.495 1.247 1.247 0 01-1.242-1.247z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconGuaranteeFilled;