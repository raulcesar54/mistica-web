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

const IconFindStoreRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.989 4.772c-.001-.008-.003-.016-.003-.025a.757.757 0 0 0-.044-.174c0-.002-.002-.003-.003-.004l-.002-.005a.606.606 0 0 0-.096-.155l-.007-.01-1.756-2.143A.695.695 0 0 0 19.539 2H5.509a.71.71 0 0 0-.538.256L3.215 4.399a.063.063 0 0 0-.007.01l-.007.009a.792.792 0 0 0-.09.146c0 .002 0 .003-.002.005l-.002.004a.702.702 0 0 0-.045.174c-.004.018-.004.032-.004.05 0 .012-.002.022-.003.032l-.002.032v3.926H5.16v3.13a3.758 3.758 0 0 0-1.4 2.94c0 .84.278 1.613.74 2.239l-2.344 2.381a.542.542 0 0 0 0 .759.518.518 0 0 0 .373.155c.134 0 .27-.05.372-.155l2.26-2.3V22h15.084V8.787H22V4.861l-.002-.01c-.004-.018-.007-.034-.007-.054a.178.178 0 0 0-.002-.025ZM5.837 3.43h13.379l.75.892H5.083l.754-.892Zm3 17.14H6.56v-2.076a3.572 3.572 0 0 0 2.277-.174v2.25Zm-1.4-3.035c-1.451 0-2.632-1.202-2.632-2.678 0-1.477 1.18-2.679 2.631-2.679 1.45 0 2.632 1.202 2.632 2.678 0 1.477-1.181 2.679-2.632 2.679Zm2.456 3.035v-2.926a3.78 3.78 0 0 0 0-5.576v-.603h5.613v9.105H9.893Zm6.664 0V10.39H8.842v.997a3.59 3.59 0 0 0-2.277-.174V8.778h12.278V20.57h-2.286ZM4.454 5.39h16.14v1.965H4.454V5.391Z"
            />
        </svg>
    );
};

export default IconFindStoreRegular;
