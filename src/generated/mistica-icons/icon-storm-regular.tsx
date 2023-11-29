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

const IconStormRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M11.076 2.16c.824 0 4.863.19 6.11 3.793 2.327.218 4.655 1.675 4.655 5.201 0 3.88-2.835 5.255-5.266 5.255l-1.728.009-4.992 5.238a.594.594 0 0 1-.756.092.612.612 0 0 1-.244-.73l1.675-4.5-.322-.072a.197.197 0 0 0-.01.002l-.015.003-3.684.017c-2.1 0-4.344-1.148-4.344-4.372 0-2.535 1.384-3.583 2.454-4.014.193-5.63 5.406-5.922 6.467-5.922Zm5.493 13.03c.958 0 4.065-.29 4.065-4.038 0-3.521-2.737-3.978-3.916-4.012a.609.609 0 0 1-.566-.453c-.838-3.152-4.373-3.311-5.073-3.311-1.235 0-5.266.364-5.266 5.025l.006.112a.61.61 0 0 1-.44.588c-1.336.384-2.014 1.39-2.014 2.989 0 2.843 2.19 3.151 3.132 3.151l1.008-.002a.59.59 0 0 1 .146-.317l5.94-6.462a.601.601 0 0 1 .763-.101.616.616 0 0 1 .243.74l-1.689 4.403 2.832.641a.613.613 0 0 1 .303 1.02l-.028.03.554-.002Zm-4.7.598a.611.611 0 0 1 .034.504l-.888 2.386 3.414-3.58-2.47-.557a.61.61 0 0 1-.432-.818l.804-2.095-3.081 3.35 2.219.504c.17.04.316.151.4.306Z"
            />
        </svg>
    );
};

export default IconStormRegular;
