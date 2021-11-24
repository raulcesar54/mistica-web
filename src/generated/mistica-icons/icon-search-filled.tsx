/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconSearchFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M21.793 21.719l-5.9-6.19a8.469 8.469 0 001.82-5.276C17.717 5.7 14.19 2 9.857 2S2 5.7 2 10.249c0 4.548 3.524 8.249 7.857 8.249 1.908 0 3.66-.719 5.024-1.911l5.9 6.195a.695.695 0 001.008 0 .781.781 0 00.004-1.063zM3.428 10.249c0-3.721 2.884-6.75 6.429-6.75 3.544 0 6.428 3.029 6.428 6.75s-2.884 6.75-6.428 6.75c-3.545 0-6.429-3.029-6.429-6.75z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M15.417 4.39a7.845 7.845 0 01.378 10.497l5.704 5.704a.561.561 0 01-.793.793l-5.696-5.697a7.792 7.792 0 01-5.139 1.918A7.846 7.846 0 014.322 4.21a7.848 7.848 0 0111.095.18zM9.871 3.033a6.726 6.726 0 00-4.756 11.481 6.728 6.728 0 009.496.053.373.373 0 01.05-.055l.018-.016.128-.13a6.726 6.726 0 00-.143-9.328c-.011-.014-.025-.025-.037-.036a6.68 6.68 0 00-4.756-1.97zm-4 2.725a5.73 5.73 0 018.104 0 5.687 5.687 0 011.678 4.05 5.73 5.73 0 01-9.782 4.053 5.73 5.73 0 010-8.103z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconSearchFilled;
