/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconCarRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M20.269 14.528h-2.095c-.227-1.218-1.166-1.952-2.569-1.952s-2.344.734-2.569 1.952H9.625c-.224-1.221-1.166-1.96-2.572-1.96-1.406 0-2.347.739-2.571 1.96h-1.19a8.956 8.956 0 01-.048-1.658c-.006-.852.627-2.34 1.854-3.535.919-.9 2.518-1.967 4.91-1.967 4.513 0 6.356 2.852 6.429 2.97a.62.62 0 00.493.288c.084.003 2.056.14 3.09 1.874.658 1.104.425 1.756.249 2.028m-4.664 1.944c-.941 0-1.395-.443-1.395-1.353 0-.91.457-1.353 1.395-1.353S17 14.21 17 15.12c0 .91-.457 1.353-1.395 1.353m-8.552-.006c-.941 0-1.395-.442-1.395-1.353 0-.913.457-1.355 1.395-1.355.939 0 1.398.442 1.398 1.355-.003.91-.46 1.353-1.398 1.353m14.031-4.56c-1.106-1.86-3.014-2.322-3.767-2.434-.614-.818-2.84-3.294-7.306-3.294-2.815 0-4.697 1.26-5.781 2.32-1.54 1.5-2.222 3.282-2.21 4.344-.087 1.431.148 2.383.156 2.426a.612.612 0 00.597.453H4.49c.23 1.208 1.168 1.936 2.563 1.936 1.398 0 2.334-.728 2.566-1.936h3.42c.227 1.213 1.168 1.944 2.569 1.944 1.4 0 2.336-.73 2.566-1.944h2.38c.15 0 .292-.05.401-.145.065-.056 1.527-1.328.129-3.67"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCarRegular;
