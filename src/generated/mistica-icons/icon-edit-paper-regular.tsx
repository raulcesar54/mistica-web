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

const IconEditPaperRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.979 3.016c.549.557.857 1.302.862 2.084a2.814 2.814 0 0 1-.874 2.033c-.1.098-.537.49-1.137 1.026l.009 9.644c0 1.21-.381 2.188-1.13 2.91-.775.748-1.86 1.126-3.218 1.126H6.502c-1.361 0-2.442-.378-3.218-1.129-.75-.72-1.129-1.7-1.129-2.907V7.48c0-2.482 1.706-4.084 4.345-4.087h8.988c.314 0 .625.006.939.017.238-.213.392-.353.434-.395 1.291-1.286 3.106-1.011 4.118 0m-4.422 5.8c1.511-1.344 3.057-2.719 3.225-2.884.236-.216.37-.518.37-.835.003-.32-.14-.655-.367-.885-.333-.333-1.1-.628-1.73 0-.302.298-4.384 3.899-5.769 5.12l-.4.353-.865 2.58 2.65-.874c.4-.366 1.632-1.46 2.886-2.575m1.59 8.987s0-8.146.002-8.143c-1.167 1.034-2.39 2.115-3.017 2.669l-.001.001-.424.375c-.14.126-.311.224-.496.286l-3.112 1.025a1.447 1.447 0 0 1-1.83-1.838l1.04-3.09c.081-.243.224-.459.415-.627 1.33-1.17 2.711-2.39 3.826-3.378H6.5c-1.213 0-2.659.417-2.659 2.398v10.325c0 .742.202 1.297.614 1.694.448.434 1.137.653 2.045.653h8.988c.908 0 1.597-.218 2.045-.653.415-.4.614-.955.614-1.697"
            />
        </svg>
    );
};

export default IconEditPaperRegular;
