/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconTowTruckFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M16.375 18.903c-1.257 0-1.896-.635-1.896-1.89s.639-1.891 1.896-1.891c1.258 0 1.897.636 1.897 1.89 0 1.256-.639 1.891-1.897 1.891m-9.504 0c-1.258 0-1.896-.635-1.896-1.89s.638-1.891 1.896-1.891 1.897.636 1.897 1.89c0 1.256-.64 1.891-1.897 1.891m14.04-7.921a459.63 459.63 0 01-3.334-4.426c-.457-.636-1.272-1.045-2.073-1.045h-4.302a.6.6 0 00-.603.6v4.759L6.401 4.79a.604.604 0 00-.493-.26l-1.443-.01h-.006c-.056 0-.103.025-.156.039a.729.729 0 00-.132.033l-.011.009a.598.598 0 00-.342.535L3.81 9.332c.002.042-.009.23-.085.31-.033.037-.1.054-.198.054-.096-.028-.177-.008-.222-.056-.064-.07-.084-.246-.075-.339a.604.604 0 00-1.199-.14c-.009.078-.076.779.375 1.28.188.21.532.457 1.115.457h.014c.555-.003.894-.244 1.076-.443.44-.476.406-1.137.4-1.165l.003-1.69 1.765 3.553H2.625a.6.6 0 00-.603.6v4.4c0 .574.253 1.154.695 1.593a2.34 2.34 0 001.308.653c.446 1.079 1.448 1.709 2.84 1.709 1.376 0 2.367-.62 2.821-1.67h3.86c.454 1.054 1.446 1.67 2.82 1.67 1.376 0 2.368-.62 2.822-1.67h.224c.574 0 1.16-.252 1.6-.692.442-.44.694-1.022.694-1.593V12.81c.008-.79-.516-1.468-.796-1.83"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconTowTruckFilled;
