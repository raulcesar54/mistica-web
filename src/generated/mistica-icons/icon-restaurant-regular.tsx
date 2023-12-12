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

const IconRestaurantRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17 21.282c0 .393-.31.713-.689.713a.702.702 0 0 1-.688-.713v-8.571h-1.378a.702.702 0 0 1-.689-.713v-7.14C13.556 3.28 14.793 2 16.316 2c.375-.005.684.315.684.713v18.57ZM12.514 3.07a.706.706 0 0 0-.693-.713c-.38 0-.688.32-.688.713v5.357a.704.704 0 0 1-.68.714V3.07a.702.702 0 0 0-.69-.713c-.379 0-.688.32-.688.713v6.07h-.009a.702.702 0 0 1-.689-.713V3.07a.702.702 0 0 0-.688-.713c-.38 0-.689.32-.689.713v5.357c0 1.184.932 2.144 2.07 2.144h.01v10.716c0 .393.309.713.688.713.38 0 .689-.32.689-.713V10.57c1.135-.009 2.057-.964 2.057-2.144V3.07Zm2.415 1.787v6.428h.69V3.618a1.44 1.44 0 0 0-.69 1.24Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M10.75 2.76a.598.598 0 0 0-.593-.602.598.598 0 0 0-.594.602l-.005 4.532h-.922V2.757a.598.598 0 0 0-.594-.602.6.6 0 0 0-.594.602v4.535h-.82V2.757a.583.583 0 0 0-.594-.582c-.328 0-.594.291-.594.621v7.359c0 .614.358 1.073.835 1.073l.386-.003a464.661 464.661 0 0 0-1.028 8.106c0 1.827 1.283 2.496 2.373 2.51h.199c1.095-.02 2.375-.686 2.372-2.557l-.008-.085c-.065-.627-.469-4.595-.95-7.971h.3c.473 0 .832-.46.832-1.073zm-2.38 7.672a.58.58 0 0 0-.017.33c.463 3.12.876 7.014 1.002 8.21l.04.365c0 1.053-.658 1.286-1.207 1.297h-.154c-.552-.008-1.21-.24-1.213-1.235l.03-.24c.136-1.133.724-5.98 1.088-8.444.047-.32-.2-.627-.516-.686a.71.71 0 0 0-.106-.008H6.63V8.49h2.928v1.532h-.63a.588.588 0 0 0-.558.41m7.846 10.208h-.149c-.529-.006-1.162-.23-1.168-1.188 0 0 .4-3.373.773-6.177a1.58 1.58 0 0 0 .006-.112.598.598 0 0 0-.594-.602h-.263V6.088c0-1.289.89-2.367 2.081-2.642v9.219a.601.601 0 0 0-.235.479v.02c0 .044.005.09.014.131.33 2.564.597 5.111.676 5.868l.024.224c0 1.017-.636 1.241-1.165 1.253m2.347-1.312c-.006-.063-.282-2.828-.65-5.742a.604.604 0 0 0 .174-.423V2.78a.598.598 0 0 0-.594-.603c-2.129 0-3.863 1.754-3.863 3.91v7.076c0 .334.266.603.594.603h.185a396.533 396.533 0 0 0-.695 5.613c0 1.796 1.258 2.448 2.334 2.462h.187c1.076-.022 2.33-.678 2.328-2.513"
                />
            </svg>
        );
    }
};

export default IconRestaurantRegular;
