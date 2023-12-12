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

const IconArrowUpLeftFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M2 15.376c0 .884.508 1.648 1.324 1.984.816.34 1.716.16 2.344-.464l2.78-2.776 7.88 7.88L22 16.328l-7.88-7.88 2.78-2.78a2.107 2.107 0 0 0 .464-2.344A2.118 2.118 0 0 0 15.38 2H2v13.376Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20.455 13.873v.022c-.005.395-.196.779-.56 1.143l-5.025 5.045-.017.017c-.347.319-.709.44-1.078.36-.337-.072-.606-.302-.824-.52l-.014-.014-4.81-5.112-2.588 2.588c-.33.316-.893.409-1.339.218-.414-.176-.66-.565-.66-1.039V4.49a.901.901 0 0 1 .254-.717.894.894 0 0 1 .717-.252l12.146.005c.415-.01.793.233.955.614.205.456.112 1.047-.216 1.406l-.014.017-2.38 2.378 4.904 4.79.006.005c.361.356.543.74.543 1.138"
                />
            </svg>
        );
    }
};

export default IconArrowUpLeftFilled;
