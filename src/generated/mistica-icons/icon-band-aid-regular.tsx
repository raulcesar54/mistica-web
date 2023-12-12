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

const IconBandAidRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.144 12.11c2.342 2.498 2.26 5.268-.255 7.784-1.294 1.294-2.647 1.95-4.02 1.95h-.075c-1.35-.023-2.675-.678-3.938-1.942l-.154-.148-.047-.046a5.911 5.911 0 0 1-.306-.313l-.684-.683c-.004-.004-.01-.007-.015-.01a.09.09 0 0 1-.018-.013l-5.477-5.478c-.005-.006-.008-.012-.01-.018a.077.077 0 0 0-.006-.01l-.566-.566a4.228 4.228 0 0 1-.325-.32l-.149-.154c-1.266-1.266-1.918-2.59-1.944-3.94C2.13 6.798 2.783 5.42 4.1 4.103c2.552-2.555 5.367-2.591 7.93-.112l1.157 1.157.015.009.005.002 5.476 5.479a.061.061 0 0 0 .009.014l1.268 1.269c.065.062.127.123.185.188m-14.552-.205 6.309-6.31-.734-.735C10.142 3.87 9.13 3.37 8.119 3.37c-1.048 0-2.092.532-3.154 1.594-2.123 2.123-2.123 4.185 0 6.308l.168.174c.09.098.177.19.272.271zm5.477 5.48 6.305-6.312-4.61-4.61-6.306 6.31zm7.952 1.643c2.059-2.058 2.126-4.053.207-6.103a1.058 1.058 0 0 0-.086-.09l-.026-.025-.087-.084-.787-.787-6.308 6.308.311.31c.112.127.205.216.3.306l.174.168c1.033 1.034 2.072 1.566 3.095 1.583 1.028.011 2.137-.513 3.207-1.586m-6.636-7.549a.62.62 0 0 0-.88 0 .625.625 0 0 0 0 .88.62.62 0 0 0 .88 0 .62.62 0 0 0 0-.88m-1.431 2.846a.62.62 0 0 1 .88 0 .62.62 0 0 1 0 .88.62.62 0 0 1-.88 0 .626.626 0 0 1 0-.88M15.3 11.74a.62.62 0 0 0 0-.88.62.62 0 0 0-.88 0 .62.62 0 0 0 0 .88.62.62 0 0 0 .88 0m-6.58.33a.62.62 0 0 1 .88 0 .62.62 0 0 1 0 .88.62.62 0 0 1-.88 0 .62.62 0 0 1 0-.88m4.348-3.467a.62.62 0 0 0-.88 0 .62.62 0 0 0 0 .88.62.62 0 0 0 .88 0 .62.62 0 0 0 0-.88"
            />
        </svg>
    );
};

export default IconBandAidRegular;
