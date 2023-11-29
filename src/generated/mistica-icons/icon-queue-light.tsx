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

const IconQueueLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M7.056 8.649c.655-.473 1.127-1.236 1.127-2.109a2.53 2.53 0 0 0-2.545-2.545A2.53 2.53 0 0 0 3.093 6.54c0 .836.436 1.6 1.055 2.073-1.273.436-2.146 1.454-2.146 2.654v5.453c0 .219.146.364.364.364s.364-.145.364-.364v-5.453c0-1.236 1.272-2.182 2.908-2.182.837 0 1.527.364 1.964.655.181.109.4.072.509-.11.109-.181.072-.4-.11-.508a4.535 4.535 0 0 0-.945-.473ZM3.82 6.54a1.8 1.8 0 0 1 1.818-1.818A1.8 1.8 0 0 1 7.456 6.54a1.8 1.8 0 0 1-1.818 1.818A1.8 1.8 0 0 1 3.82 6.54Zm9.454 3.563a2.599 2.599 0 0 0 1.09-2.109A2.53 2.53 0 0 0 11.82 5.45a2.53 2.53 0 0 0-2.545 2.545c0 .837.436 1.6 1.055 2.073-1.273.436-2.146 1.454-2.146 2.654v5.454c0 .218.146.363.364.363s.364-.145.364-.363V12.72c0-1.236 1.272-2.181 2.908-2.181.836 0 1.527.363 1.963.654.182.109.4.073.51-.11.109-.18.072-.4-.11-.508a5.176 5.176 0 0 0-.909-.473ZM10 7.994a1.8 1.8 0 0 1 1.818-1.817 1.8 1.8 0 0 1 1.818 1.817 1.8 1.8 0 0 1-1.818 1.818 1.8 1.8 0 0 1-1.818-1.818Zm10.908 9.09c0 .218.145.364.363.364.219 0 .364-.146.364-.364v-2.909c0-1.2-.873-2.218-2.145-2.654a2.5 2.5 0 0 0 1.054-2.072A2.53 2.53 0 0 0 18 6.904a2.53 2.53 0 0 0-2.545 2.545c0 .836.436 1.6 1.054 2.072-1.272.436-2.145 1.454-2.145 2.654v5.454c0 .218.146.364.364.364s.363-.146.363-.364v-5.454c0-1.236 1.273-2.181 2.91-2.181 1.635 0 2.908.945 2.908 2.181v2.909Zm-4.727-7.635A1.8 1.8 0 0 1 18 7.63a1.8 1.8 0 0 1 1.818 1.818A1.8 1.8 0 0 1 18 11.267a1.8 1.8 0 0 1-1.818-1.818ZM22 19.265a.73.73 0 0 1-.728.728.73.73 0 0 1-.727-.727c0-.4.327-.728.727-.728.4 0 .728.328.728.727Z"
            />
        </svg>
    );
};

export default IconQueueLight;
