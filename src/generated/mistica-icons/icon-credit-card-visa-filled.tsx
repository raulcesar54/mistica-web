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

const IconCreditCardVisaFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.992 8.97V6.938c0-1.073-.8-1.938-1.788-1.938H3.788C2.8 5 2 5.865 2 6.938V8.97h19.992ZM2 10.102v6.96C2 18.135 2.8 19 3.788 19h16.424C21.2 19 22 18.135 22 17.062v-6.96H2Zm2.5 3.406c-.3 0-.536-.259-.536-.569 0-.318.244-.568.536-.568h5.002c.3 0 .536.259.536.568-.008.319-.244.569-.545.569H4.5Zm9.642 0h-2.504c-.3 0-.536-.259-.536-.569 0-.318.244-.568.536-.568h2.5c.3 0 .537.259.537.568 0 .319-.245.569-.533.569Zm2.137 0c-.3 0-.536-.259-.536-.569 0-.318.244-.568.536-.568h3.212c.3 0 .537.259.537.568-.004.319-.236.569-.537.569H16.28Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.841 11.208c0 .016-.004.031-.008.047-.004.012-.007.025-.008.037v6.272a1.42 1.42 0 0 1-1.43 1.406h-16.8a1.42 1.42 0 0 1-1.429-1.406v-6.305a.139.139 0 0 0-.005-.02c-.003-.009-.006-.019-.006-.03V8.216c0-.011.003-.022.007-.032l.004-.016V6.432a1.42 1.42 0 0 1 1.429-1.406h16.8c.788 0 1.43.63 1.43 1.406v1.703c0 .01.004.021.007.032.005.016.01.032.01.05v2.991Zm-18.246-5a.222.222 0 0 0-.224.221v1.194h17.246V6.429c0-.12-.1-.22-.221-.22H3.595Zm16.8 11.574a.22.22 0 0 0 .222-.218v-5.762H3.371v5.762c0 .12.1.218.224.218h16.8Zm-5.733-1.747-.143.002c-.51-.008-1.12-.218-1.12-1.179 0-.958.602-1.165 1.106-1.168h.146c.518.014 1.134.227 1.134 1.176 0 .95-.61 1.16-1.123 1.169Zm5.017-1.166c0-1.59-1.16-2.182-2.149-2.204a3.837 3.837 0 0 0-.184-.006c-.216.003-.83.048-1.35.431a2.391 2.391 0 0 0-1.32-.428c-.056-.003-.12-.003-.185-.003-.986.009-2.14.588-2.14 2.196s1.16 2.194 2.151 2.207h.174a2.37 2.37 0 0 0 1.333-.428c.499.37 1.076.428 1.345.431h.174c.991-.017 2.15-.602 2.15-2.196Z"
                />
            </svg>
        );
    }
};

export default IconCreditCardVisaFilled;
