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

const IconRulerLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.838 17.338c0-.35-.138-.68-.384-.927L7.57 2.523c-.493-.496-1.358-.496-1.851 0L2.535 5.711c-.25.25-.384.577-.384.927-.003.347.138.68.384.924l13.882 13.891c.247.25.575.384.925.384.35 0 .68-.137.927-.384l3.185-3.188c.25-.246.384-.577.384-.927Zm-.99-.316a.451.451 0 0 1 0 .638l-3.187 3.188a.457.457 0 0 1-.639 0L3.14 6.958a.455.455 0 0 1 0-.642l3.188-3.19a.454.454 0 0 1 .638.002l1.359 1.359L7.078 5.71a.432.432 0 0 0-.005.608c.168.168.44.17.608.005l1.249-1.23 1.507 1.51L7.93 9.111a.426.426 0 0 0 0 .605.426.426 0 0 0 .605 0l2.507-2.51 1.507 1.508-1.328 1.305-.002.003a.428.428 0 0 0 .602.61l1.333-1.313 1.504 1.504-2.26 2.263a.426.426 0 0 0 0 .605.426.426 0 0 0 .605 0l2.263-2.26 1.507 1.51-1.496 1.47a.429.429 0 0 0-.005.605l.002.003a.425.425 0 0 0 .603.003l1.501-1.474 3.47 3.474Zm-2.865.67a.525.525 0 0 1-.91-.527c.003 0 .003-.003.003-.003a.522.522 0 0 1 .714-.19.53.53 0 0 1 .193.72Zm.563.319c.32-.56.126-1.275-.434-1.597h-.002v-.003a1.168 1.168 0 0 0-1.71 1.32 1.172 1.172 0 0 0 2.146.28Z"
            />
        </svg>
    );
};

export default IconRulerLight;
