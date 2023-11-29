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

const IconWebFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.841 5.993c0-.759-.641-1.378-1.428-1.378H3.583c-.79 0-1.428.62-1.428 1.378v12.011c0 .76.639 1.376 1.429 1.376h16.829c.787 0 1.428-.62 1.428-1.378V5.993Zm-16.498.83a.548.548 0 0 1-.56.537.548.548 0 0 1-.558-.538.548.548 0 0 1 .557-.537h.003a.548.548 0 0 1 .558.537Zm15.294 11.179c0 .12-.101.215-.224.215H3.583a.221.221 0 0 1-.223-.215V8.338h17.277v9.664ZM6.81 10.447l2.729 2.384a.57.57 0 0 1 .006.857l-2.729 2.428a.595.595 0 0 1-.409.155.61.61 0 0 1-.442-.188.566.566 0 0 1 .01-.801l.012-.01a.082.082 0 0 1 .011-.01l2.244-1.997-2.238-1.958a.567.567 0 0 1-.052-.81l.01-.01a.615.615 0 0 1 .848-.04Zm10.681 2.255c.334 0 .605.26.605.58 0 .32-.271.58-.602.58h-6.468a.596.596 0 0 1-.605-.58c0-.32.272-.583.605-.583l6.465.003ZM6.463 6.285a.548.548 0 0 1 .558.537.548.548 0 0 1-.56.538.548.548 0 0 1-.558-.538.548.548 0 0 1 .557-.537h.003Zm2.235.537a.548.548 0 0 1-.56.538.548.548 0 0 1-.557-.538.548.548 0 0 1 .557-.537h.003a.548.548 0 0 1 .557.537Z"
            />
        </svg>
    );
};

export default IconWebFilled;
