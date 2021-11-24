/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconHeadphonesFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M12.005 1C6.49 1 2 5.713 2 11.5v6.56c0 2.246 1.536 3.935 3.571 3.935H7.36v-7.87H5.57c-.818 0-1.555.278-2.144.749V11.5c0-4.962 3.845-8.998 8.573-8.998s8.573 4.036 8.573 8.998v3.374a3.38 3.38 0 00-2.144-.749H16.64V22h1.788C20.464 22 22 20.306 22 18.065V11.5C22.01 5.713 17.519 1 12.005 1z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M19.723 11c-.093-5.804-2.91-9-7.984-9-5.098 0-7.924 3.238-7.974 9.126-1.146.7-1.762 2.003-1.762 3.868 0 2.745 1.328 4.322 3.736 4.432l.275.008h.106c1.942-.067 2.342-1.823 2.342-4.44 0-2.624-.4-4.378-2.305-4.448a1.799 1.799 0 00-.303 0c-.05 0-.1 0-.115.009a5.102 5.102 0 00-.711.084c.185-4.883 2.431-7.364 6.711-7.364s6.53 2.473 6.72 7.338c-.157-.016-.308-.053-.476-.061-.05-.009-.1-.009-.134-.009a1.522 1.522 0 00-.283 0c-1.947.068-2.342 1.824-2.342 4.449 0 1.714.176 3.05.846 3.792-.868.485-1.913.801-3.134.964-.152-.572-.603-.913-1.289-.93-.88-.025-1.42.468-1.448 1.39-.017.442.092.8.328 1.055.232.255.585.41 1.028.418h.067c.409 0 .742-.12.986-.35.075-.076.126-.18.176-.28 1.88-.197 3.446-.751 4.659-1.637.042.009.067.017.106.017h.126l.275-.008c2.406-.112 3.736-1.69 3.736-4.431 0-1.972-.703-3.337-1.963-3.992"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconHeadphonesFilled;
