/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconFastForwardLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M12 22C6.488 22 2 17.516 2 12S6.488 2 12 2s10 4.488 10 10a9.98 9.98 0 01-1.54 5.33.36.36 0 01-.494.109.36.36 0 01-.11-.494 9.247 9.247 0 001.431-4.95C21.282 6.881 17.119 2.718 12 2.718 6.881 2.718 2.718 6.88 2.718 12S6.88 21.282 12 21.282a9.247 9.247 0 004.95-1.43.36.36 0 01.493.11.36.36 0 01-.11.493A9.971 9.971 0 0112 22zm7.5-3.218a.714.714 0 00-1.426 0 .714.714 0 001.426 0zM7.612 16.895l4.644-4.644a.35.35 0 000-.502L7.612 7.105a.35.35 0 00-.502 0 .354.354 0 000 .503l4.387 4.387-4.387 4.388a.35.35 0 000 .503c.068.068.16.105.251.105a.355.355 0 00.251-.096zm6.07 0l4.643-4.644a.35.35 0 000-.502l-4.643-4.644a.35.35 0 00-.503 0 .354.354 0 000 .503l4.388 4.387-4.388 4.388a.35.35 0 000 .503.36.36 0 00.252.105.355.355 0 00.25-.096z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M12.002 21.019c-5.986 0-9.022-3.034-9.022-9.017 0-5.989 3.033-9.022 9.022-9.022 5.983 0 9.017 3.033 9.017 9.022 0 5.983-3.034 9.017-9.017 9.017zm0-18.863c-6.44 0-9.846 3.404-9.846 9.846 0 6.437 3.404 9.84 9.846 9.84 6.437 0 9.84-3.403 9.84-9.84 0-6.442-3.403-9.846-9.84-9.846zm1.41 11.83V9.391l3.84 2.308-3.84 2.285zm-.617-5.681a.405.405 0 00-.207.358v6.048a.41.41 0 00.409.412h.002c.073 0 .146-.02.21-.056l5.056-3.012a.41.41 0 000-.705l-5.053-3.04a.419.419 0 00-.417-.005zM7.364 13.99V9.397l3.84 2.308-3.84 2.286zM6.75 8.31a.413.413 0 00-.21.358v6.047a.41.41 0 00.409.412h.003c.073 0 .145-.02.21-.056l5.056-3.011a.41.41 0 000-.706l-5.053-3.04a.407.407 0 00-.415-.005z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconFastForwardLight;
