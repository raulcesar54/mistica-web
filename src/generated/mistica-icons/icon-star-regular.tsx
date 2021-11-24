/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconStarRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M16.583 21.658c-.345 0-.69-.087-1.006-.26l-3.728-2.042a.042.042 0 00-.037 0l-3.728 2.042a2.08 2.08 0 01-2.216-.13 2.213 2.213 0 01-.899-2.19l.712-4.325a.105.105 0 00-.026-.086l-3.014-3.062a2.234 2.234 0 01-.52-2.291 2.148 2.148 0 011.714-1.465L8 7.219a.062.062 0 00.045-.034c0-.003 0-.003.003-.006L9.91 3.244a2.112 2.112 0 011.922-1.241 2.12 2.12 0 011.924 1.238l1.863 3.935c0 .003 0 .003.003.006.008.017.025.03.045.034l4.165.63a2.15 2.15 0 011.714 1.468 2.24 2.24 0 01-.524 2.291l-3.014 3.062a.096.096 0 00-.025.086l.712 4.328a2.223 2.223 0 01-.9 2.19 2.093 2.093 0 01-1.212.387zm-4.751-3.395c.188 0 .372.048.543.14l3.726 2.042a.982.982 0 001.064-.061c.278-.196.54-.594.454-1.126l-.711-4.325c-.062-.37.056-.754.319-1.023l.003-.002 3.016-3.065c.365-.37.376-.854.267-1.185-.135-.4-.449-.675-.844-.734l-4.168-.633h-.005a1.144 1.144 0 01-.86-.65L12.773 3.71c-.182-.387-.535-.617-.941-.617-.406 0-.756.23-.938.617L9.03 7.64a1.149 1.149 0 01-.86.65h-.006l-4.168.63a1.048 1.048 0 00-.843.734 1.16 1.16 0 00.266 1.185l3.014 3.065.003.003c.263.268.38.652.32 1.025l-.712 4.325c-.087.53.176.93.454 1.126a.98.98 0 001.064.061l3.728-2.042c.168-.092.353-.14.54-.14z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconStarRegular;
