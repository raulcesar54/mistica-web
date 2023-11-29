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

const IconExitDoorFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path fill={fillColor} d="M17.677 21.993h3.694V3.347l-3.694 3.695v14.951Z" />
            <path
                fill={fillColor}
                d="M16.373 6.78c0-.173.087-.347.174-.477L20.893 2H7.898v8.475h4.78a1.54 1.54 0 0 1 1.522 1.521 1.54 1.54 0 0 1-1.521 1.522H7.898v8.475h8.475V6.781Z"
            />
            <path
                fill={fillColor}
                d="M12.679 11.345H5.116L6.16 10.3a.63.63 0 0 0 0-.912.63.63 0 0 0-.912 0l-2.608 2.607 2.651 2.652c.13.13.304.174.478.174a.654.654 0 0 0 .478-.174.63.63 0 0 0 0-.913l-1.043-1.043h7.476a.668.668 0 0 0 .652-.652c0-.348-.304-.695-.652-.695Z"
            />
        </svg>
    );
};

export default IconExitDoorFilled;
