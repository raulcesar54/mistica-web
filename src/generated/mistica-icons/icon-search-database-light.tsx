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

const IconSearchDatabaseLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M14.894 2.155c1.661 0 3.236.199 4.429.557 1.672.505 2.518 1.292 2.52 2.342v13.888c0 1.048-.845 1.835-2.517 2.34-1.208.36-2.78.56-4.429.56-1.647 0-3.218-.2-4.426-.558-1.672-.504-2.518-1.291-2.518-2.342v-1.468a4.848 4.848 0 0 1-1.619-.837l-3.479 3.476a.407.407 0 0 1-.569 0 .408.408 0 0 1-.01-.58l3.461-3.46a4.826 4.826 0 0 1-1.271-3.263 4.87 4.87 0 0 1 3.487-4.66V5.05c0-.162.023-.327.067-.484v-.003c.233-.81 1.056-1.431 2.449-1.852 1.196-.358 2.767-.557 4.425-.557m0 .82c-1.577 0-3.067.186-4.187.525-1.07.322-1.72.759-1.891 1.263a.056.056 0 0 0 .005.011.055.055 0 0 1 .006.011c.168.502.82.939 1.888 1.26 1.123.34 2.61.525 4.188.525 1.577 0 3.064-.188 4.187-.524 1.04-.314 1.69-.737 1.874-1.222l.01-.013c.003-.004.006-.007.007-.012-.151-.53-.787-.966-1.896-1.3-1.12-.338-2.608-.523-4.19-.523M8.771 6.005v1.98a4.874 4.874 0 0 1 5.204 3.395c.246.015.57.017.77.018l.152.002c1.588 0 3.076-.185 4.199-.524 1.115-.336 1.717-.852 1.924-1.238v-3.61c-.409.319-.963.585-1.689.803-1.199.359-2.77.558-4.425.558-1.653 0-3.225-.2-4.424-.558-.728-.221-1.296-.498-1.711-.826m4.602 6.81a4.05 4.05 0 0 0-4.045-4.046 4.05 4.05 0 0 0-4.044 4.045 4.05 4.05 0 0 0 4.044 4.045 4.05 4.05 0 0 0 4.045-4.045m1.524 8.207c1.571 0 3.059-.185 4.19-.524 1.284-.387 1.933-.908 1.936-1.555v-3.255c-.44.336-1.011.625-1.689.827-1.196.36-2.767.557-4.426.557a18.94 18.94 0 0 1-2.678-.182.413.413 0 0 1-.16-.062 4.779 4.779 0 0 1-3.296.815v1.3c0 .644.652 1.168 1.935 1.555 1.13.339 2.62.524 4.188.524m-.703-8.21a4.883 4.883 0 0 1-1.314 3.322c.65.07 1.325.117 2.034.117 1.58 0 3.067-.187 4.188-.524 1.112-.333 1.717-.851 1.924-1.235v-3.658c-.437.336-1.011.622-1.69.826-1.198.359-2.767.558-4.425.558H14.9c-.132 0-.451-.003-.748-.012.025.2.042.401.042.605"
            />
        </svg>
    );
};

export default IconSearchDatabaseLight;
