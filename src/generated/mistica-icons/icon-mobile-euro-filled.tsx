/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconMobileEuroFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M5.349 5.387h13.315c-.094-1.883-1.626-3.392-3.5-3.387H8.849c-1.873 0-3.405 1.504-3.5 3.387zm13.324 12.151V6.458H5.34v11.08h13.333zm-5.525-8.397c-1.367 0-2.506.996-2.757 2.313h2.932c.292 0 .525.237.525.534a.528.528 0 01-.525.535h-2.934c.248 1.322 1.389 2.323 2.759 2.323.49 0 .975-.133 1.401-.384a.523.523 0 01.72.196.542.542 0 01-.194.732 3.807 3.807 0 01-1.932.53c-1.95 0-3.562-1.481-3.818-3.392h-.566a.528.528 0 01-.526-.535c0-.297.234-.535.526-.535h.566c.256-1.91 1.869-3.392 3.818-3.392.674 0 1.343.183 1.932.53a.542.542 0 01.193.732.519.519 0 01-.719.197 2.765 2.765 0 00-1.401-.384zM15.165 22H8.849c-1.874 0-3.406-1.51-3.5-3.388h13.315C18.57 20.496 17.038 22 15.164 22z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconMobileEuroFilled;