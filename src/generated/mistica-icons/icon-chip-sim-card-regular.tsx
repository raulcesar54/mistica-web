/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconChipSimCardRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M14.306 2c.546 0 1.058.205 1.432.612l3.647 3.629c.374.372.615.881.615 1.425V21H5V4.037C5 2.916 5.92 2 7.043 2h7.263zm0 1.357H7.043a.684.684 0 00-.684.68v15.606h12.278V7.666a.665.665 0 00-.207-.475l-3.612-3.63a.693.693 0 00-.512-.204zm1.604 5.43c.749 0 1.363.612 1.363 1.356v8.144H7.727v-8.144c0-.744.614-1.356 1.363-1.356h6.82zm0 1.356H9.09v6.787h6.82v-6.787z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M16.818 2c.482 0 1.16.106 1.647.622.361.384.552.927.552 1.577v15.277c0 .65-.19 1.193-.552 1.577-.269.283-.773.622-1.647.622H7.54c-.482 0-1.16-.106-1.647-.622-.362-.384-.552-.927-.552-1.577V6.104a.56.56 0 01.179-.412l3.82-3.544A.566.566 0 019.724 2h7.095zm0 1.12H9.944L6.462 6.347v13.13c0 .744.334 1.078 1.079 1.078h9.277c.745 0 1.078-.334 1.078-1.079V4.2c0-.745-.333-1.079-1.078-1.079zm-.543 6.376c.308 0 .56.252.56.56v8.61a.56.56 0 01-.56.56H8.08a.562.562 0 01-.56-.56v-8.61c0-.308.252-.56.56-.56h8.194zm-6.03 6.999H8.642v1.611h1.605v-1.611zm2.732 0h-1.61v1.611h1.61v-1.611zm2.737 0h-1.616v1.611h1.616v-1.611zm0-3.148H8.64v2.028h7.073v-2.028zm-5.468-2.731H8.64v1.61h1.605v-1.61zm2.73 0h-1.61v1.61h1.61v-1.61zm2.738 0h-1.616v1.61h1.616v-1.61z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconChipSimCardRegular;
