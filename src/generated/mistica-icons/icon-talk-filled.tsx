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

const IconTalkFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.309 2.15h-6.006c-.072 0-.143.005-.212.014h-.225c-.89 0-1.613.723-1.613 1.613V7.68c0 .92.658 1.614 1.53 1.614h.109v1.557c0 .426.336.824.75.888a.754.754 0 0 0 .112.009c.376 0 .79-.27 1.082-.715.131-.198.795-1.243 1.109-1.74h3.288c.891 0 1.614-.722 1.614-1.613V3.777c0-.107-.01-.212-.03-.313a1.52 1.52 0 0 0-1.508-1.314m-5.446 4.118a.545.545 0 1 1 0-1.093.547.547 0 0 1 0 1.093m1.64-.547a.547.547 0 1 1 1.093.002.547.547 0 0 1-1.094-.002m2.73.547a.545.545 0 1 1 0-1.093.547.547 0 0 1 0 1.093M5.908 14.248c.656.695 1.603 1.045 2.818 1.045 1.213 0 2.163-.353 2.818-1.045.616-.653.93-1.563.93-2.703s-.314-2.05-.93-2.703c-.655-.692-1.602-1.045-2.818-1.045-1.215 0-2.162.35-2.818 1.045-.616.653-.93 1.563-.93 2.703s.311 2.05.93 2.703M14.735 21.848H2.715a.562.562 0 0 1-.56-.56v-1.04c0-1.344.356-2.384 1.059-3.09s1.74-1.067 3.075-1.067h4.871c1.34 0 2.373.359 3.076 1.067.703.71 1.059 1.745 1.059 3.09v1.04a.56.56 0 0 1-.56.56"
            />
        </svg>
    );
};

export default IconTalkFilled;
