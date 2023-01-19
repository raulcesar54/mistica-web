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

const IconEmailRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^blau/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M3.355 17.984V6.291l7.068 7.087c.42.42.98.653 1.577.654h.002c.596 0 1.156-.232 1.576-.651l7.067-7.063v11.666H3.355zm16.338-12.63l-7.073 7.069a.87.87 0 01-.618.254h-.001a.87.87 0 01-.619-.255L4.334 5.355h15.359zM2 19.34h20V4H2v15.339z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.26 5H2.74a.754.754 0 00-.74.766v12.468c0 .422.332.766.74.766h18.52c.408 0 .74-.344.74-.766V5.766A.754.754 0 0021.26 5zm-2.114 1.532L12 10.824 4.854 6.532h14.292zM3.479 7.48l8.146 4.896a.715.715 0 00.74 0l8.156-4.896v9.983H3.479V7.48z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.843 7.08l-.014 9.776c.028.216.062.888-.392 1.437-.246.294-.728.653-1.619.667a437.3 437.3 0 01-4.835.014 5865.162 5865.162 0 01-11.092-.014c-.048.014-.661-.003-1.151-.479-.384-.373-.577-.908-.577-1.588V7.094c-.006-.067-.045-.977.526-1.577.303-.319.72-.487 1.202-.487l16.247.003c.481-.028 1.66.336 1.705 2.047zM3.888 6.226c-.19 0-.272.059-.322.107-.1.106-.154.285-.18.448l7.491 4.708c.064.048.933.64 1.9.009l7.825-4.717c-.109-.54-.436-.552-.45-.552L3.887 6.226zm16.614 11.311c.156-.182.136-.47.132-.533v-.013l-.01-.095.012-8.737-7.216 4.347a2.828 2.828 0 01-1.563.485 3.042 3.042 0 01-1.66-.513L3.363 8.184v8.712c0 .238.037.56.216.733a.53.53 0 00.297.138c.04-.001.955 0 2.33.002h.003c4.142.006 12.45.017 13.586-.002.235-.006.552-.048.706-.23z"
                />
            </svg>
        );
    }
};

export default IconEmailRegular;
