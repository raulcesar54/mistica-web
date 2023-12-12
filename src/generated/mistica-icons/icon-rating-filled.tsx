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

const IconRatingFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M18.5 5.214v.179h-13v-.179C5.5 3.44 6.956 2 8.75 2h6.5c1.794 0 3.25 1.44 3.25 3.214Zm-13 1.249h13v11.074h-13V6.463Zm13 12.144v.179C18.5 20.56 17.044 22 15.25 22h-6.5c-1.794 0-3.25-1.44-3.25-3.214v-.179h13ZM7.4 11.314l1.993 1.733-.546 2.684a.535.535 0 0 0 .532.64.557.557 0 0 0 .268-.068l2.358-1.317 2.353 1.317a.538.538 0 0 0 .795-.572l-.546-2.688L16.6 11.31a.534.534 0 0 0 .157-.567.542.542 0 0 0-.458-.37l-2.723-.284L12.5 7.647a.54.54 0 0 0-.989 0l-1.077 2.442-2.723.283a.555.555 0 0 0-.467.375.537.537 0 0 0 .157.567Zm3.116 1.642-.374 1.842 1.59-.891a.557.557 0 0 1 .536 0l1.59.891-.374-1.842a.531.531 0 0 1 .176-.508l1.299-1.13-1.808-.187a.536.536 0 0 1-.44-.32L12 9.206l-.707 1.605a.544.544 0 0 1-.44.32l-1.807.188 1.299 1.13a.54.54 0 0 1 .171.507Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20.41 4.617c.787 0 1.431.617 1.431 1.379v12.01c0 .76-.641 1.379-1.431 1.379H3.584c-.79 0-1.429-.616-1.429-1.378V5.996c0-.76.641-1.379 1.429-1.379zM4.782 6.29c-.31 0-.56.24-.56.538 0 .296.25.537.56.537.311 0 .56-.24.56-.537 0-.3-.249-.538-.56-.538m15.852 11.717V8.343H3.362v9.664c0 .117.101.215.224.215H20.41a.22.22 0 0 0 .224-.215M7.021 6.827c0-.3-.25-.537-.558-.537-.31 0-.56.24-.56.538 0 .296.25.537.56.537.308 0 .558-.24.558-.537m1.117-.537c-.31 0-.56.24-.56.538 0 .296.25.537.56.537.311 0 .56-.24.56-.537 0-.3-.249-.538-.56-.538m6.12 6.227a.506.506 0 0 0-.408-.34l-1-.145c-.006 0-.009-.003-.011-.008l-.446-.908a.513.513 0 0 0-.921 0l-.446.908c-.003.005-.008.008-.011.008l-.997.146a.51.51 0 0 0-.283.868l.723.706c.002.003.005.014.005.02l-.17.997c-.034.196.05.389.215.504.157.11.361.12.53.03l.893-.47c.003-.003.006-.003.008 0l.891.47a.516.516 0 0 0 .53-.03.498.498 0 0 0 .215-.504l-.17-.998c-.003-.005 0-.014.005-.02l.723-.705a.504.504 0 0 0 .126-.53m5.222-.34c.19.029.347.158.409.34a.504.504 0 0 1-.126.529l-.723.706c-.005.005-.008.014-.005.02l.17.997a.498.498 0 0 1-.215.504.515.515 0 0 1-.53.03l-.89-.47c-.003-.003-.006-.003-.009 0l-.893.47a.508.508 0 0 1-.53-.03.507.507 0 0 1-.216-.504l.171-.998c0-.005-.002-.016-.005-.02l-.723-.705a.51.51 0 0 1 .283-.868l.997-.146c.003 0 .009-.003.011-.008l.446-.908a.513.513 0 0 1 .921 0l.446.908c.002.005.005.008.01.008zm-10.854.34a.506.506 0 0 0-.41-.34l-1.002-.145c-.006 0-.009-.003-.011-.008l-.446-.908a.513.513 0 0 0-.921 0l-.446.908c-.002.005-.008.008-.01.008l-.998.146a.51.51 0 0 0-.283.868l.723.706c.002.003.005.014.005.02l-.17.997c-.034.196.05.389.215.504.157.11.361.12.53.03l.893-.47c.003-.003.006-.003.008 0l.894.47a.516.516 0 0 0 .53-.03.498.498 0 0 0 .215-.504l-.17-.998c-.004-.005 0-.014.005-.02l.723-.705a.504.504 0 0 0 .126-.53"
                />
            </svg>
        );
    }
};

export default IconRatingFilled;
