/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconAddBillPoundLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M22.391 7.556a3.703 3.703 0 01-3.699 3.702 3.703 3.703 0 01-.37-7.386v-.018a1.11 1.11 0 00-1.107-1.11H6.852c-.616 0-1.113.498-1.113 1.11V21.26h12.949a.37.37 0 010 .739H5V3.854C5 2.834 5.829 2 6.852 2h10.363c1.018 0 1.852.83 1.852 1.854v.018a3.71 3.71 0 013.324 3.684zm-3.33 5.186v4.447a.37.37 0 01-.738 0v-4.447a.37.37 0 01.739 0zm-.369 7.404a.74.74 0 000-1.479.74.74 0 000 1.48zm0-15.553a2.963 2.963 0 000 5.926 2.963 2.963 0 000-5.926zm1.847 2.593h-1.477V5.707a.37.37 0 00-.74 0v1.48h-1.477a.37.37 0 000 .739h1.478v1.479a.37.37 0 00.739 0v-1.48h1.477a.37.37 0 000-.739zM11.37 18.298h3.344a.37.37 0 010 .74h-4.627a.37.37 0 010-.74.731.731 0 00.739-.74v-1.853h-.37a.37.37 0 010-.74h.37v-1.669a2.04 2.04 0 012.036-2.038c.464 0 .919.161 1.279.455a.37.37 0 01.057.522.37.37 0 01-.521.056 1.295 1.295 0 00-2.108 1.005v1.67h1.852a.37.37 0 010 .739h-1.852v1.853c0 .27-.07.521-.199.74z"
            />
        </svg>
    );
};

export default IconAddBillPoundLight;
