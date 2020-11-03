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

const IconCheckedLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M11.998 0c3.83 0 6.799.99 8.828 2.948C22.931 4.978 24 8.025 24 12.002 24.003 19.849 19.853 24 11.998 24 4.151 24 0 19.853 0 12.002 0 4.15 4.147 0 11.998 0zm0 .683C4.493.683.683 4.493.683 12.002c0 7.505 3.806 11.315 11.315 11.315 7.513 0 11.319-3.806 11.319-11.315C23.32 4.489 19.51.683 11.998.683zm5.88 6.344c.14.11.167.315.058.455l-7.489 9.678a.329.329 0 01-.256.127.319.319 0 01-.256-.127L6.78 13.04a.323.323 0 01.062-.454.323.323 0 01.454.061l2.894 3.782 7.232-9.343a.325.325 0 01.455-.059z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCheckedLight;