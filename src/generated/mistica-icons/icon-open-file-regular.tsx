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

const IconOpenFileRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M19.685 8.684h.807c.742 0 1.347.608 1.344 1.353a.508.508 0 0 1-.01.112l-1.449 7.947a1.353 1.353 0 0 1-1.345 1.288H4.262a1.353 1.353 0 0 1-1.347-1.355c0-.01.001-.017.003-.025a.11.11 0 0 0 .002-.02l-.77-11.95c0-.798.633-1.414 1.415-1.414h6.129c.781 0 1.417.619 1.417 1.375v.403h7.104c.781 0 1.417.62 1.417 1.376l.064.812a.227.227 0 0 1-.005.06.352.352 0 0 0-.006.038ZM3.568 5.874c-.107 0-.18.065-.177.127l.451 6.994.557-3.02a1.35 1.35 0 0 1 1.345-1.288h12.72v-.003l-.065-.86c-.002-.11-.075-.174-.182-.174h-7.722a.622.622 0 0 1-.62-.624V5.998c0-.06-.072-.124-.179-.124H3.568ZM19.156 17.92l1.442-7.913a.107.107 0 0 0-.103-.073H5.744c-.062 0-.11.045-.11.104a.742.742 0 0 1-.01.107v.008l-1.463 7.91a.11.11 0 0 0 .104.073h14.77c.062 0 .11-.045.11-.104 0-.036.002-.075.01-.112Z"
            />
        </svg>
    );
};

export default IconOpenFileRegular;
