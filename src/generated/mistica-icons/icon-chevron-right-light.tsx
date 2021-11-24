/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconChevronRightLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M8.553 18.854c.305 0 .553.257.553.573a.563.563 0 01-.553.573.563.563 0 01-.553-.573c0-.316.248-.573.553-.573zM8.469 4.086l7.448 7.716a.282.282 0 010 .4L9.85 18.486a.248.248 0 01-.194.087.248.248 0 01-.195-.087.282.282 0 010-.4L15.336 12 8.083 4.486a.282.282 0 010-.4.259.259 0 01.386 0z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M9.613 20a.584.584 0 01-.442-.198.644.644 0 010-.875l7.356-6.99-7.318-6.865A.635.635 0 019.17 4.2a.585.585 0 01.846-.037l7.794 7.312a.645.645 0 01.025.886l-.025.025-7.794 7.46a.61.61 0 01-.404.154z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconChevronRightLight;
