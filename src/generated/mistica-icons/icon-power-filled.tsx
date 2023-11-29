'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconPowerFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.263 12.668c0 .416.335.76.74.76.405 0 .74-.344.74-.764V2.76a.755.755 0 0 0-.74-.76.755.755 0 0 0-.74.76v9.908Z"
                />
                <path
                    fill={fillColor}
                    d="M2.91 12.668C2.91 17.812 6.993 22 12.003 22c5.006 0 9.089-4.192 9.089-9.332 0-4.04-2.52-7.62-6.268-8.876-.37-.112-.819.116-.928.496-.109.38.113.84.483.952 3.117 1.068 5.232 4.036 5.232 7.428 0 4.308-3.412 7.812-7.608 7.812s-7.609-3.508-7.609-7.812c0-3.388 2.116-6.364 5.232-7.428.41-.112.593-.572.484-.952-.11-.42-.558-.608-.928-.496C5.435 5.048 2.91 8.628 2.91 12.668Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M19.234 4.574c-1.672-1.611-4.107-2.429-7.238-2.429-3.132 0-5.563.818-7.233 2.429C3.03 6.249 2.15 8.744 2.15 11.999s.88 5.751 2.613 7.423c1.673 1.61 4.107 2.429 7.236 2.429 3.128 0 5.565-.818 7.238-2.429 1.736-1.672 2.616-4.17 2.616-7.423 0-3.252-.882-5.75-2.62-7.425Zm-7.745.308c0-.308.252-.56.56-.56.308 0 .56.252.56.56V8.98c0 .308-.252.56-.56.56a.562.562 0 0 1-.56-.56V4.882Zm.585 13.21c-1.921 0-3.417-.507-4.454-1.507C6.545 15.548 6 14.008 6 12.013c0-1.658.378-3.005 1.126-4.008.74-.989 1.82-1.633 3.218-1.91a.559.559 0 1 1 .219 1.098c-2.32.462-3.446 2.039-3.446 4.82 0 1.681.432 2.947 1.28 3.765.821.79 2.06 1.19 3.678 1.19 1.62 0 2.857-.4 3.678-1.19.849-.818 1.28-2.087 1.28-3.765 0-2.82-1.16-4.403-3.543-4.84a.56.56 0 1 1 .201-1.104c1.435.264 2.544.9 3.303 1.891.77 1.009 1.16 2.37 1.16 4.05.003 2-.544 3.538-1.622 4.578-1.037 1-2.535 1.504-4.457 1.504Z"
                />
            </svg>
        );
    }
};

export default IconPowerFilled;
