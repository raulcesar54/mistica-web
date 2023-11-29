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

const IconAddMoreRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^blau/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.321 11.321h-8.643V2.68a.679.679 0 1 0-1.357 0v8.642H2.679a.679.679 0 1 0 0 1.357h8.642v8.643a.679.679 0 0 0 1.357 0v-8.643h8.643a.679.679 0 1 0 0-1.357Z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.42 2.72a.722.722 0 0 1 .716-.716.722.722 0 0 1 .716.716l.003 8.064 8.426.003a.722.722 0 0 1 .716.716.84.84 0 0 1-.22.552c-.127.127-.3.16-.493.16l-8.432.003v9.073a.703.703 0 0 1-.713.712.722.722 0 0 1-.715-.715v-9.072l-8.712.005a.722.722 0 0 1-.716-.715.722.722 0 0 1 .716-.716l8.711-.006-.002-8.064Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20.169 11.123H12.8V3.829c0-.395-.301-.798-.805-.798a.802.802 0 0 0-.802.798v7.361H3.829c-.485.026-.853.376-.828.857.023.446.382.737.828.76h7.296v7.365a.876.876 0 0 0 1.75 0v-7.297h7.297a.876.876 0 0 0-.003-1.752Z"
                />
            </svg>
        );
    }
};

export default IconAddMoreRegular;
