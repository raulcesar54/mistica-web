/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconFileAviLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M15.744 2.156c.18 0 .35.07.482.194l5.41 5.238c.089.086.14.201.17.322a.43.43 0 01.034.162v12.563c0 .653-.563 1.205-1.23 1.205H8.173c-.655 0-1.23-.563-1.23-1.205L6.98 17.6H4.422a2.27 2.27 0 01-2.266-2.27v-4.178a2.27 2.27 0 012.266-2.27h2.521v-5.52c0-.63.586-1.205 1.23-1.205h7.571zm-.689.83H8.17c-.185 0-.406.204-.406.378v5.52h6.706a2.27 2.27 0 012.266 2.27v4.179a2.27 2.27 0 01-2.266 2.269H7.803l-.036 3.042c0 .182.204.372.406.372H20.61c.207 0 .403-.185.403-.378V8.758h-2.565c-.98 0-1.827-.316-2.443-.915-.622-.603-.95-1.429-.95-2.384V2.985zm-.582 6.725H4.42c-.793 0-1.44.647-1.44 1.44v4.179c0 .795.644 1.442 1.44 1.442h10.053c.792 0 1.44-.647 1.44-1.442v-4.18a1.44 1.44 0 00-1.44-1.44zm-7.185 1.812l1.33 3.684H7.72l-.308-.928H6.215l-.286.928h-.804l1.236-3.684h.927zm2.095 0l.863 2.672.804-2.672h.818l-1.224 3.684h-.877l-1.283-3.684h.9zm3.801 0v3.684h-.84v-3.684h.84zm-6.38.922h-.012l-.384 1.227h.799l-.404-1.227zm9.075-9.28v2.291c0 .728.24 1.347.7 1.79.462.445 1.11.683 1.869.683h2.35l-4.92-4.764z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFileAviLight;
