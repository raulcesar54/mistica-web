/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconFilePngLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M15.744 2.156c.18 0 .35.07.482.194l5.41 5.235a.687.687 0 01.17.328.43.43 0 01.034.162v12.563c0 .653-.563 1.205-1.23 1.205H8.173c-.655 0-1.23-.564-1.23-1.205l.037-3.036H4.422a2.27 2.27 0 01-2.266-2.27v-4.179a2.27 2.27 0 012.266-2.268h2.521V3.36c0-.63.586-1.205 1.23-1.205h7.571zm-.691.83H8.17c-.185 0-.406.204-.406.378v5.52h6.706a2.27 2.27 0 012.266 2.27v4.179a2.27 2.27 0 01-2.266 2.269H7.803l-.036 3.042c0 .182.204.372.406.372H20.61c.207 0 .403-.185.403-.378V8.756h-2.565c-.98 0-1.827-.317-2.443-.916-.622-.603-.952-1.426-.952-2.384v-2.47zm-.58 6.722H4.42c-.793 0-1.44.647-1.44 1.443v4.179c0 .795.644 1.442 1.44 1.442h10.053c.792 0 1.44-.647 1.44-1.442v-4.18c0-.795-.645-1.442-1.44-1.442zm-1.101 1.684c.364 0 .801.075 1.036.176l-.106.613a3.292 3.292 0 00-.871-.134c-.743 0-1.048.44-1.048 1.24 0 .415.053.754.216.978.134.188.356.297.709.297.134 0 .316-.016.445-.036v-.773h-.516v-.602h1.35v1.876c-.35.107-.907.188-1.31.188-1.32-.003-1.765-.728-1.765-1.893 0-1.152.608-1.93 1.86-1.93zm-7.661.07c.574 0 .941.08 1.176.3.2.181.297.467.297.86 0 .391-.092.688-.274.893-.216.24-.55.356-1.031.356h-.591v1.268h-.84v-3.677H5.71zm2.683 0l1.743 2.353v-2.353h.736v3.675h-.672l-1.689-2.23v2.23h-.737v-3.675h.62zm-2.714.607h-.392v1.171H5.7c.269 0 .38-.036.49-.14.098-.098.146-.252.146-.468 0-.198-.042-.344-.14-.434-.101-.092-.258-.129-.516-.129zm10.2-8.904v2.288c0 .728.24 1.348.7 1.79.462.445 1.107.684 1.869.684h2.35l-4.92-4.762z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFilePngLight;
