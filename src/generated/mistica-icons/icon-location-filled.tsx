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

const IconLocationFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12.002 2C8.347 2 5.5 5.22 5.5 9.37c0 5.369 5.728 12.11 5.97 12.37.14.148.32.26.528.26a.622.622 0 0 0 .528-.26c.25-.296 5.974-7.001 5.974-12.37C18.5 5.22 15.653 2 12.002 2Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M18.975 9.197c.011-4.398-2.585-7.028-6.952-7.042h-.034c-2.143 0-3.907.633-5.106 1.835-1.208 1.207-1.85 2.994-1.855 5.165-.01 4.322 5.3 11.202 6.659 12.569a.405.405 0 0 0 .577 0c1.364-1.373 6.697-8.247 6.711-12.527Zm-6.93-2.944c1.563 0 2.499.933 2.499 2.499s-.933 2.498-2.499 2.498c-1.563 0-2.498-.932-2.498-2.498 0-1.563.935-2.499 2.498-2.499Z"
                />
            </svg>
        );
    }
};

export default IconLocationFilled;
