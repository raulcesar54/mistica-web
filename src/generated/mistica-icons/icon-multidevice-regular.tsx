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

const IconMultideviceRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^blau/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path fill={fillColor} d="M17.21 16.699h1.98v1.98h-1.98v-1.98Z" />
                <path
                    fill={fillColor}
                    d="M19.655 8.048h.8a1.544 1.544 0 0 1 1.543 1.563v9.864a1.552 1.552 0 0 1-1.547 1.548h-4.508a1.548 1.548 0 0 1-1.544-1.544v-2.244H2.548L2 16.139l2-2.676V3h15.655v5.048Zm-1.352-3.68H5.376v8.66h9.023V9.61a1.543 1.543 0 0 1 1.56-1.563h2.344v-3.68ZM5.032 14.375l-1.116 1.492h10.483v-1.492H5.032Zm15.546 5.219a.18.18 0 0 0 .053-.127V9.61a.176.176 0 0 0-.177-.176H15.96a.18.18 0 0 0-.18.176v9.86a.18.18 0 0 0 .18.176h4.492a.18.18 0 0 0 .127-.053Z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M19.884 2h-4.926c-1.161 0-2.111.964-2.111 2.144V4.5H5.112C3.95 4.5 3 5.464 3 6.644v13.213C3 21.035 3.95 22 5.112 22h9.85c1.162 0 2.112-.964 2.112-2.143v-3.57h2.814c1.162 0 2.112-.964 2.112-2.143v-10C21.995 2.964 21.046 2 19.884 2Zm-5.628 3.574h6.33v7.139h-6.33V5.574Zm5.628-2.143c.387 0 .702.32.702.713V4.5h-6.33v-.356c0-.394.315-.713.702-.713h4.926ZM5.112 5.93h7.74V7H4.404v-.356c0-.357.35-.713.707-.713Zm0 14.639c-.352 0-.703-.357-.703-.713V19.5h11.256v.357c-.004.356-.355.713-.707.713H5.112Zm10.549-2.144H4.405V8.074h8.442v6.07c0 1.179.95 2.143 2.111 2.143h.703v2.139Zm-.703-3.57a.709.709 0 0 1-.702-.713v-.356h6.33v.356a.709.709 0 0 1-.702.713h-4.926Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M18.278 17.32c-.285 0-.456-.112-.549-.208a.746.746 0 0 1-.199-.54c0-.457.294-.75.748-.75s.748.293.748.75c0 .28-.106.448-.199.54a.746.746 0 0 1-.549.208"
                />
                <path
                    fill={fillColor}
                    d="M14.715 16.922H5.446c-1.098 0-1.94-.328-2.504-.97-.524-.599-.787-1.467-.787-2.582V8.432c0-1.115.266-1.983.787-2.583.563-.644 1.404-.97 2.504-.97h10.09c1.098 0 1.941.329 2.504.97.524.6.787 1.468.787 2.583v.008h.922c1.37 0 2.095.726 2.095 2.095v6.49c-.003 1.37-.725 2.096-2.098 2.096h-2.935c-1.37 0-2.096-.726-2.096-2.095zm0-1.118v-5.269c0-1.35.745-2.095 2.096-2.095h.896v-.008c0-.835-.171-1.457-.513-1.846-.344-.395-.888-.588-1.658-.588H5.446c-.77 0-1.313.193-1.658.588-.339.39-.513 1.011-.513 1.846v4.938c0 .835.171 1.457.513 1.846.345.395.888.588 1.658.588zm2.096-6.246c-.729 0-.975.246-.975.975v6.49c0 .375.07.636.207.773.137.134.395.204.77.204h2.939c.375 0 .633-.067.77-.204.137-.134.207-.395.207-.773v-6.488c0-.747-.227-.974-.974-.974H16.81z"
                />
                <path
                    fill={fillColor}
                    d="M7.897 19.124h4.916a.56.56 0 1 0 0-1.12H7.897a.562.562 0 0 0-.56.56c0 .308.252.56.56.56"
                />
            </svg>
        );
    }
};

export default IconMultideviceRegular;
