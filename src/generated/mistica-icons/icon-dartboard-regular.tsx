'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconDartboardRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.488 4.906a.521.521 0 0 0-.483-.338h-1.924v-2.02c0-.22-.13-.422-.322-.506a.513.513 0 0 0-.572.117L15.74 4.728a.565.565 0 0 0-.152.39v2.338l-.962 1.01a7.192 7.192 0 0 0-2.671-1.55 6.984 6.984 0 0 0-5.592.578c-1.731.967-2.997 2.587-3.566 4.555-1.176 4.067 1.02 8.378 4.89 9.613A7.043 7.043 0 0 0 9.83 22a7.02 7.02 0 0 0 3.45-.911c1.73-.967 2.996-2.588 3.565-4.555a8.042 8.042 0 0 0-.38-5.513c-.166-.367-.582-.526-.931-.353a.75.75 0 0 0-.336.977 6.52 6.52 0 0 1 .309 4.461c-.46 1.592-1.485 2.903-2.886 3.691a5.66 5.66 0 0 1-4.527.465c-3.136-1.005-4.912-4.494-3.963-7.786.46-1.592 1.485-2.902 2.885-3.69a5.66 5.66 0 0 1 4.527-.466 5.786 5.786 0 0 1 2.08 1.193l-1.239 1.3a4.038 4.038 0 0 0-2.567-.929c-2.313 0-4.197 1.977-4.197 4.405s1.884 4.405 4.197 4.405c2.312 0 4.196-1.977 4.196-4.405a4.508 4.508 0 0 0-.886-2.696l3.199-3.357h2.227a.512.512 0 0 0 .372-.16l2.447-2.569a.571.571 0 0 0 .116-.6Zm-8.875 9.383c0 1.62-1.253 2.935-2.796 2.935-1.544 0-2.796-1.315-2.796-2.935s1.252-2.935 2.796-2.935c.581 0 1.122.188 1.57.507L9.445 13.9a.57.57 0 0 0 0 .78.509.509 0 0 0 .743 0l1.941-2.038c.305.47.484 1.037.484 1.648Zm4.021-7.157v-1.79l1.396-1.464v1.24c0 .305.233.549.523.549h1.181L18.34 7.132h-1.705Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.247 5.118a.602.602 0 0 1 .533.334.606.606 0 0 1-.056.624l-1.516 2.056a.604.604 0 0 1-.484.244h-.009l-2.913-.048-.742.743c.899 1.14 1.535 2.756 1.535 5.078 0 7.115-5.894 7.67-7.367 7.695-.137.002-.297.005-.457.005-.084 0-.168 0-.25-.003-1.55-.022-7.366-.582-7.366-7.745 0-7.148 5.762-7.68 7.31-7.694h.16c.197 0 .398.003.572.008.877.02 3.216.238 5.03 1.787l.662-.66-.118-3.015a.594.594 0 0 1 .216-.484L18.074 2.3a.599.599 0 0 1 .986.462V4.41a.594.594 0 0 1 .734.075c.168.168.21.41.14.62l1.313.013Zm-4.266-.339.062 1.608.812-.812V4.048l-.874.731Zm2.443 2.392.636-.86-1.224-.014-.852.852 1.44.022Zm-6.305 6.978c0-.714-.073-1.339-.292-1.849l-1.93 1.93.527.009a.6.6 0 0 1-.011 1.201h-.011l-1.942-.033c-.007 0-.013-.002-.02-.005a.061.061 0 0 0-.019-.004l-.022-.002c-.046-.005-.091-.009-.135-.026a.056.056 0 0 1-.011-.005c-.003-.002-.007-.005-.011-.006a.144.144 0 0 1-.03-.015.21.21 0 0 1-.192-.142.578.578 0 0 1-.1-.157l-.009-.017a.569.569 0 0 1-.042-.168l-.151-1.733a.6.6 0 0 1 .546-.65.595.595 0 0 1 .653.546l.04.448 2.094-2.092c-.456-.297-1.087-.47-1.966-.49a57.47 57.47 0 0 0-.591-.006c-2.378.022-2.866 1.305-2.866 3.221 0 1.939.502 3.235 2.953 3.272l.185.003.392-.006c2.456-.045 2.96-1.322 2.96-3.224Zm-2.914 6.496c1.86-.037 6.185-.737 6.185-6.496 0-1.91-.484-3.258-1.187-4.221l-1.488 1.487c.602 1 .608 2.165.608 2.731 0 1.079 0 4.353-4.151 4.426l-.415.006-.19-.003C5.43 18.515 5.43 15.194 5.43 14.1c0-1.084 0-4.386 4.067-4.423 0 0 .46.003.619.009 1.286.028 2.176.358 2.795.832l1.47-1.47c-1.394-1.169-3.178-1.407-4.212-1.432a16.768 16.768 0 0 0-.543-.009H9.48c-1.84.014-6.12.681-6.12 6.493 0 5.827 4.322 6.518 6.179 6.544l.232.003c.151 0 .303 0 .434-.003Z"
                />
            </svg>
        );
    }
};

export default IconDartboardRegular;
