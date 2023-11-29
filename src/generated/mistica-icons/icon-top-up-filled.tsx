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

const IconTopUpFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M18.673 5.393C18.571 3.5 17.026 2 15.166 2H8.85c-1.86 0-3.405 1.5-3.507 3.393h13.33ZM12.531 21.996h2.635c1.86 0 3.405-1.5 3.507-3.393h-6.142v3.393Z"
            />
            <path
                fill={fillColor}
                d="M5.34 17.535V6.465h13.333v11.07h-6.142V9.357l1.888 1.929c.11.108.247.144.389.144a.527.527 0 0 0 .39-.144.524.524 0 0 0 0-.752l-3.194-3.18-3.157 3.18a.524.524 0 0 0 0 .752.503.503 0 0 0 .74 0l1.895-1.929V22H8.847c-1.895 0-3.401-1.5-3.507-3.393H9.9c.28 0 .528-.252.528-.536a.548.548 0 0 0-.527-.536H5.34Z"
            />
        </svg>
    );
};

export default IconTopUpFilled;
