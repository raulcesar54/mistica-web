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

const IconDiamondLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="m21.837 8.347-.002.01a.08.08 0 0 1-.012.035.388.388 0 0 1-.056.162.047.047 0 0 0-.004.015c0 .004-.001.009-.004.013l-9.428 13.087a.18.18 0 0 1-.041.036c-.01.006-.018.013-.027.02-.017.017-.03.03-.05.045a.414.414 0 0 1-.221.07.412.412 0 0 1-.219-.07.724.724 0 0 1-.05-.045.243.243 0 0 0-.028-.023c-.013-.01-.027-.02-.037-.033L2.23 8.582c-.005-.005-.006-.01-.007-.016a.032.032 0 0 0-.005-.012.363.363 0 0 1-.056-.162.164.164 0 0 0-.004-.016.074.074 0 0 1-.004-.02l-.003-.012a.424.424 0 0 1 .05-.185c0-.006 0-.011.003-.017l3.317-5.778.01-.009.01-.008a.372.372 0 0 1 .165-.143l.018-.011c.01-.007.02-.014.032-.017a.248.248 0 0 1 .06-.007.5.5 0 0 0 .03-.002.072.072 0 0 0 .016-.005c.006-.003.012-.006.02-.006h12.224c.007 0 .014.003.02.006a.086.086 0 0 0 .014.005l.03.002c.02 0 .04.001.06.007.012.003.022.01.032.017.006.004.012.008.018.01a.39.39 0 0 1 .165.144.037.037 0 0 0 .008.005c.005.003.01.006.012.012l3.317 5.781a.035.035 0 0 1 .002.009c0 .003.002.006.003.008a.36.36 0 0 1 .05.185ZM7.902 7.453l3.317-4.476H6.45l1.451 4.476Zm8.9.482h3.91l-2.5-4.35-1.41 4.35Zm-.267.82L13.202 19.05l7.414-10.294h-4.081Zm-5.75 10.295L7.45 8.756H3.37l7.414 10.294Zm6.753-16.073h-4.77l3.322 4.476 1.448-4.476ZM8.574 7.935l.002-.003h6.839l-3.42-4.61-3.419 4.61h-.002v.003Zm3.42 12.154 3.67-11.333h-7.34l3.67 11.333ZM5.78 3.582l-2.502 4.35h3.91L5.78 3.582Z"
            />
        </svg>
    );
};

export default IconDiamondLight;
