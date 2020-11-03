/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant, useTheme} from '../..';

type Props = {
    color?: string;
    size?: number;
};

const IconSharedDataLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <g fill={fillColor}>
                <path d="M9.766 11.116a.287.287 0 01-.128-.544l4.476-2.25a.285.285 0 01.382.132c.068.14.011.31-.125.38l-4.477 2.253a.297.297 0 01-.128.029z" />
                <path d="M14.24 13.442a.292.292 0 01-.128-.031l-4.477-2.25a.289.289 0 01-.125-.386.283.283 0 01.378-.126l4.477 2.25c.14.071.199.243.128.383a.276.276 0 01-.253.16zm0-6.027c-.72 0-1.187.381-1.187 1.2 0 .392.108.683.299.88.207.216.512.319.885.319s.68-.103.885-.318c.19-.198.299-.49.299-.882.005-.818-.461-1.199-1.181-1.199z" />
                <path d="M14.24 11.917c-.72 0-1.187.38-1.187 1.2 0 .391.108.683.299.88.207.215.512.318.885.318s.68-.103.885-.317c.19-.198.299-.49.299-.882.005-.818-.461-1.199-1.181-1.199zm-4.474-2.25c-.72 0-1.187.381-1.187 1.2 0 .392.109.684.3.881.207.215.511.318.884.318s.68-.103.885-.318c.19-.197.3-.49.3-.881.002-.819-.465-1.2-1.182-1.2z" />
                <path d="M18.94 16.733H5.069c-1.03 0-1.813-.3-2.328-.892-.487-.561-.731-1.386-.731-2.453V8.343c0-1.068.244-1.892.73-2.45C3.256 5.3 4.039 5 5.069 5H18.94c1.03 0 1.813.3 2.328.893.483.558.731 1.382.731 2.45v5.045c0 1.067-.245 1.892-.731 2.45-.515.595-1.298.895-2.328.895zM5.069 5.573c-1.7 0-2.49.88-2.49 2.772v5.046c0 1.892.79 2.773 2.49 2.773H18.94c1.699 0 2.49-.881 2.49-2.773V8.343c0-1.892-.791-2.77-2.49-2.77H5.068zM21.707 19H2.285a.286.286 0 010-.572h19.422a.286.286 0 010 .572z" />
            </g>
        </svg>
    );
};

export default IconSharedDataLight;