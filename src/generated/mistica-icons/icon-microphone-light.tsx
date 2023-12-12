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

const IconMicrophoneLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12 17.927c1.773 0 3.213-1.494 3.213-3.333v-.74c0-.204-.16-.37-.356-.37a.364.364 0 0 0-.357.37v.74c0 1.432-1.12 2.593-2.5 2.593s-2.5-1.161-2.5-2.593v-9.26C9.5 3.9 10.62 2.74 12 2.74s2.5 1.161 2.5 2.593v4.073c0 .204.16.37.357.37a.364.364 0 0 0 .356-.37V5.333C15.213 3.493 13.773 2 12 2c-1.773 0-3.213 1.494-3.213 3.333v9.26c0 1.84 1.44 3.334 3.213 3.334Zm4.643 3.703c0 .204-.16.37-.356.37H7.713a.364.364 0 0 1-.357-.37c0-.204.16-.37.357-.37h3.926v-1.48l.002-.009a.037.037 0 0 0 .002-.009C9.053 19.572 7 17.329 7 14.594c0-.204.16-.37.356-.37.197 0 .357.166.357.37 0 2.451 1.924 4.447 4.287 4.447s4.287-1.996 4.287-4.447c0-.204.16-.37.357-.37.196 0 .356.166.356.37 0 2.736-2.052 4.978-4.643 5.168 0 .002 0 .006.002.01l.002.009v1.48h3.926c.197 0 .357.165.357.37Zm-1.787-9.26a.728.728 0 0 1-.713-.74c0-.408.32-.74.713-.74.393 0 .713.332.713.74s-.32.74-.713.74Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.998 2.155c2.79 0 4.325 1.555 4.325 4.375v6.79c0 2.821-1.535 4.376-4.328 4.376-2.79 0-4.325-1.555-4.325-4.376V6.53c0-2.82 1.538-4.375 4.328-4.375m3.51 11.162V6.53c0-2.355-1.183-3.549-3.51-3.549-2.328 0-3.51 1.194-3.51 3.55v6.79c0 2.352 1.182 3.548 3.51 3.548 2.327 0 3.51-1.196 3.51-3.552m-2.533 7.558a.96.96 0 0 0-.955-.966.96.96 0 0 0-.955.966.962.962 0 0 0 .955.966.962.962 0 0 0 .955-.966m2.373-1.933a.96.96 0 0 1 .955.966.962.962 0 0 1-.955.967.96.96 0 0 1-.955-.966.96.96 0 0 1 .955-.967m3.627-1.336a.96.96 0 0 0-.955-.966.96.96 0 0 0-.955.966.962.962 0 0 0 .955.966.962.962 0 0 0 .955-.966m0-4.255a.82.82 0 0 1 .815.824.82.82 0 0 1-.815.826.82.82 0 0 1-.815-.826.818.818 0 0 1 .815-.824M9.6 19.908a.96.96 0 0 0-.955-.966.96.96 0 0 0-.955.966.96.96 0 0 0 .955.967.962.962 0 0 0 .955-.966M5.975 16.64a.96.96 0 0 1 .955.966.962.962 0 0 1-.955.966.962.962 0 0 1-.955-.966c0-.532.429-.966.955-.966M5.02 15a.82.82 0 0 0 .815-.825.818.818 0 0 0-.815-.824.818.818 0 0 0-.815.824.82.82 0 0 0 .815.826"
                />
            </svg>
        );
    }
};

export default IconMicrophoneLight;
