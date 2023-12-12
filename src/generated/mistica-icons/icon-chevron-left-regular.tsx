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

const IconChevronLeftRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^blau/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M14.855 4.16a.535.535 0 0 1 0 .77L7.586 12l7.27 7.07a.535.535 0 0 1 0 .77.571.571 0 0 1-.793 0L6 12l8.063-7.84a.571.571 0 0 1 .792 0Z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M14.8 5.266a.79.79 0 0 0 0-1.049.641.641 0 0 0-.962 0L7.2 11.455A.777.777 0 0 0 7 12a.777.777 0 0 0 .2.545l6.638 7.238c.266.29.697.29.963 0a.79.79 0 0 0 0-1.05L8.624 12l6.177-6.734Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M14.161 4.024c.235 0 .46.105.617.285a.928.928 0 0 1-.048 1.257L8 12.083l6.78 6.541c.343.335.22.9 0 1.108-.28.28-.82.392-1.163.08l-.02-.018-7.323-7.046A.905.905 0 0 1 6 12.095a.913.913 0 0 1 .268-.658l7.325-7.176a.803.803 0 0 1 .568-.237"
                />
            </svg>
        );
    }
};

export default IconChevronLeftRegular;
