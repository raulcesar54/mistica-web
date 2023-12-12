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

const IconEmergencyCrossFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="m20.432 8.731-5.168.003-.003-5.162c0-.737-.574-1.41-1.204-1.41l-4.13-.002c-.63 0-1.204.672-1.204 1.409l.003 5.165-5.162.003c-.751 0-1.41.563-1.41 1.204v4.13c0 .64.66 1.204 1.41 1.204l5.168-.003.003 5.163c0 .75.563 1.408 1.204 1.408h4.129c.641 0 1.204-.658 1.204-1.408l-.002-5.169 5.162-.002c.737 0 1.409-.575 1.409-1.205V9.93c0-.627-.672-1.199-1.409-1.199"
            />
        </svg>
    );
};

export default IconEmergencyCrossFilled;
