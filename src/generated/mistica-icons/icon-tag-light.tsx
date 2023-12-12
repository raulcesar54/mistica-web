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

const IconTagLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m20.574 3.926 1.322-1.323a.352.352 0 0 0 0-.499.357.357 0 0 0-.504 0L20.07 3.426h-9.387c-.485 0-.943.19-1.285.532L2.532 10.82c-.342.342-.532.8-.532 1.285 0 .486.19.943.532 1.286l8.077 8.073c.356.356.819.536 1.281.536.449 0 .897-.166 1.253-.504a.373.373 0 0 0 .014-.527.369.369 0 0 0-.527-.014 1.066 1.066 0 0 1-1.494-.018l-8.073-8.074a1.063 1.063 0 0 1-.314-.758c0-.287.111-.555.314-.758L9.925 4.48c.199-.2.476-.315.758-.315h8.647l-1.905 1.905a.353.353 0 0 0 .25.606c.087 0 .18-.032.25-.102l1.904-1.905v8.642c0 .287-.11.555-.314.758l-3.824 3.824a.368.368 0 0 0 0 .527.368.368 0 0 0 .527 0l3.824-3.824c.342-.342.532-.8.532-1.285V3.926Zm-6.876 15.762a.722.722 0 0 1 1.443 0 .722.722 0 0 1-1.443 0Zm3.07-7.042c-2.658 0-4.517 1.785-4.517 4.337a.361.361 0 0 1-.721 0c0-2.552-1.86-4.337-4.518-4.337a.361.361 0 0 1 0-.721c2.534 0 4.518-2.062 4.518-4.698a.361.361 0 0 1 .72 0c0 2.631 1.984 4.698 4.518 4.698a.361.361 0 0 1 0 .721ZM11.89 9.243a5.209 5.209 0 0 1-2.894 3.015c1.35.485 2.381 1.475 2.894 2.77.513-1.295 1.544-2.285 2.895-2.77-1.332-.546-2.372-1.637-2.895-3.015Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.83 3.498h.008c0-.742-.602-1.342-1.342-1.342h-8.344a2.082 2.082 0 0 0-1.062.58l-8.336 8.35a1.555 1.555 0 0 0-.291 2.163l8.288 8.277c.224.21.521.325.83.314.51-.034.988-.264 1.333-.645l8.327-8.277c.309-.297.513-.68.589-1.1zm-.821 0v8.196a1.152 1.152 0 0 1-.347.622l-8.345 8.328c-.356.353-.829.445-.994.28l-8.289-8.28c-.165-.163-.081-.62.283-.983l8.362-8.32c.168-.176.383-.302.621-.356h8.196c.283 0 .513.23.513.513m-4.076.843c.645.05 1.247.35 1.673.838.493.437.79 1.05.829 1.706a2.388 2.388 0 0 1-.787 1.714c-.429.47-1.023.75-1.659.787a2.49 2.49 0 0 1-1.717-.83 2.494 2.494 0 0 1-.829-1.713 2.4 2.4 0 0 1 .787-1.715 2.44 2.44 0 0 1 1.703-.787m1.681 2.527a1.661 1.661 0 0 0-.563-1.135 1.665 1.665 0 0 0-1.126-.563c-.429.025-.83.222-1.112.546-.322.28-.518.676-.546 1.101.03.437.232.846.563 1.135.291.325.7.52 1.134.546.429-.04.827-.233 1.12-.546.317-.275.51-.667.53-1.084"
                />
            </svg>
        );
    }
};

export default IconTagLight;
