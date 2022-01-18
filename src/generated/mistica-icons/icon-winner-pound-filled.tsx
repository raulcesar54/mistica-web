/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconWinnerPoundFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M5.662 15.37c1.492 1.655 3.55 2.702 5.884 2.81l-1.952 3.532a.552.552 0 01-.46.288h-.072a.58.58 0 01-.46-.396l-.921-3.42-3.015.935a.5.5 0 01-.566-.18c-.107-.184-.142-.436-.036-.615zm12.601 0l1.661 2.922c.107.22.107.435-.035.615a.5.5 0 01-.567.18l-3.085-.935-.921 3.42c-.036.216-.213.36-.425.396h-.071a.514.514 0 01-.46-.252l-2.06-3.532c2.342-.076 4.47-1.155 5.962-2.813zM11.978 2c4.12 0 7.458 3.389 7.458 7.568 0 4.18-3.337 7.569-7.454 7.569-4.116 0-7.453-3.389-7.453-7.569S7.862 2 11.979 2zm.142 3.425c-1.133 0-1.916.827-1.916 1.982v1.442h-.532c-.283 0-.46.252-.46.54 0 .287.177.54.46.54h.532v1.442c0 .251-.248.54-.532.54a.549.549 0 00-.531.539c0 .287.248.539.531.539h4.258a.549.549 0 00.532-.54.549.549 0 00-.532-.539h-2.802c.071-.18.142-.324.142-.503V9.932h1.42a.526.526 0 00.532-.54.526.526 0 00-.531-.539h-1.42V7.407c0-.544.318-.904.85-.904.322 0 .499.072.605.18.213.216.532.18.744-.036.213-.215.177-.54-.035-.755-.465-.431-.96-.467-1.315-.467z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconWinnerPoundFilled;