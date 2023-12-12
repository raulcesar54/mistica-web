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

const IconCowboyLassoLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M18.208 3.533c1.947.7 3.123 2.086 3.496 4.12.507 2.756-.575 6.356-8.597 7.838a22.055 22.055 0 0 1-3.443.383c-.112.46-.333.81-.658 1.053.398.718.507 1.435.297 2.076-.266.807-1.003 1.465-2.193 1.955a.413.413 0 0 1-.31-.762c.957-.395 1.537-.885 1.724-1.45.177-.547-.039-1.099-.263-1.482a3.49 3.49 0 0 1-.837.098c-.163 0-.334-.009-.513-.026-1.656-.16-2.555-.921-2.417-2.352.006-.075.02-.141.034-.208l.01-.05c-.036-.011-.072-.023-.106-.045-1.143-.782-1.863-1.938-2.137-3.437-.505-2.76.574-6.359 8.59-7.84 3.054-.563 5.516-.524 7.323.129m-5.25 11.148c5.905-1.09 8.577-3.406 7.942-6.88-.322-1.748-1.292-2.89-2.967-3.495-1.666-.6-3.986-.63-6.896-.093-5.902 1.093-8.571 3.41-7.933 6.882.23 1.247.818 2.205 1.74 2.86.383-.565 1.05-.843 1.96-.843.163 0 .334.009.513.025 1.47.143 2.342.765 2.42 1.908a21.49 21.49 0 0 0 3.222-.364m-5.532 1.86c1.216 0 1.434-.54 1.488-1.126.056-.586-.132-.838-.28-.975-.27-.252-.751-.42-1.398-.482a4.75 4.75 0 0 0-.434-.022c-1.216 0-1.435.543-1.49 1.129v.001c-.04.415-.122 1.279 1.677 1.452.154.014.297.023.437.023"
            />
        </svg>
    );
};

export default IconCowboyLassoLight;
