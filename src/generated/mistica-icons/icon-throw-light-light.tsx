/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant, useTheme} from '../..';

type Props = {
    color?: string;
    size?: number;
};

const IconThrowLightLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M11.327 17.294a.837.837 0 01-.594-.244l-3.8-3.801a.84.84 0 010-1.188l7.652-7.655-1.294-1.292a.561.561 0 01.395-.958h7.585c.308 0 .56.252.56.56v7.586c0 .308-.252.56-.56.56a.55.55 0 01-.395-.165l-1.305-1.305-7.65 7.658a.83.83 0 01-.594.244zm2.361-14.575l1.292 1.292a.561.561 0 010 .792l-7.653 7.653a.279.279 0 000 .395l3.801 3.801c.11.11.286.11.395 0l7.653-7.653a.55.55 0 01.79 0l1.302 1.303V2.719h-7.58zM2.436 21.823a.28.28 0 01-.199-.48l4.916-4.915a.282.282 0 01.395.006.282.282 0 010 .389l-4.913 4.919a.29.29 0 01-.199.08zm5.037.003a.28.28 0 01-.2-.48c1.046-1.044 2.558-2.613 2.575-2.63a.28.28 0 11.417.373c-.005.006-.008.011-.014.014-.014.017-1.532 1.588-2.58 2.639a.285.285 0 01-.198.084zM2.487 16.84a.28.28 0 01-.2-.48c1.046-1.044 2.558-2.616 2.575-2.63a.28.28 0 01.4.39c-.013.017-1.532 1.588-2.58 2.638a.278.278 0 01-.195.082z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconThrowLightLight;