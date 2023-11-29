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

const IconRecordingFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M12 2C6.488 2 2 6.488 2 12s4.488 10 10 10 10-4.488 10-10S17.512 2 12 2Zm0 15.535A5.54 5.54 0 0 1 6.465 12 5.54 5.54 0 0 1 12 6.465 5.54 5.54 0 0 1 17.535 12 5.54 5.54 0 0 1 12 17.535Zm0-1.07A4.472 4.472 0 0 0 16.465 12 4.472 4.472 0 0 0 12 7.535 4.469 4.469 0 0 0 7.535 12 4.469 4.469 0 0 0 12 16.465Z"
            />
        </svg>
    );
};

export default IconRecordingFilled;
