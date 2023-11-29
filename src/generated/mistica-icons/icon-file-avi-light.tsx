'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconFileAviLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M6.36 11.523h.928l1.33 3.684H7.72l-.308-.928H6.215l-.286.928h-.804l1.236-3.684Zm.847 2.149-.404-1.227h-.01l-.385 1.227h.799ZM9.383 11.523h-.899l1.283 3.684h.877l1.224-3.684h-.818l-.804 2.672-.863-2.672ZM12.344 11.523h.84v3.684h-.84v-3.684Z"
            />
            <path
                fill={fillColor}
                d="M21.806 7.91c.02.05.034.103.034.162v12.563c0 .653-.563 1.205-1.23 1.205H8.173c-.655 0-1.23-.563-1.23-1.205L6.98 17.6H4.422a2.27 2.27 0 0 1-2.266-2.27v-4.178a2.27 2.27 0 0 1 2.266-2.27h2.521v-5.52c0-.63.586-1.205 1.23-1.205h7.572c.179 0 .35.07.481.194l5.41 5.238c.089.086.14.201.17.322Zm-.793 12.728V8.758h-2.565c-.98 0-1.827-.316-2.443-.915-.622-.603-.95-1.43-.95-2.384V2.985H8.17c-.185 0-.406.205-.406.379v5.52h6.706a2.27 2.27 0 0 1 2.266 2.27v4.179a2.27 2.27 0 0 1-2.266 2.269H7.803l-.036 3.042c0 .182.204.372.406.372H20.61c.207 0 .403-.185.403-.378ZM4.42 16.772h10.053c.792 0 1.44-.647 1.44-1.442v-4.18a1.44 1.44 0 0 0-1.44-1.44H4.42c-.793 0-1.44.648-1.44 1.44v4.18c0 .795.644 1.443 1.44 1.443ZM15.879 5.457c0 .728.24 1.347.7 1.79.462.445 1.11.683 1.869.683h2.35l-4.92-4.764v2.291Z"
            />
        </svg>
    );
};

export default IconFileAviLight;
