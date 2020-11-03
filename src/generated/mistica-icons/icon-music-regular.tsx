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

const IconMusicRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M17.232 20.567l-.238.003c-.787-.011-2.104-.31-2.104-2.204 0-1.885 1.3-2.18 2.076-2.188l.255.003c.792.02 2.123.33 2.123 2.199-.003 1.87-1.322 2.173-2.112 2.187zM10.414 4.962V3.495l8.927 2.386V7.35l-8.927-2.387zM7.03 16.42a3.45 3.45 0 01-.24 0c-.788-.011-2.104-.314-2.104-2.205 0-1.888 1.305-2.182 2.08-2.187l.25.003c.779.016 2.073.327 2.115 2.12v.162c-.042 1.79-1.325 2.09-2.1 2.107zM20.627 5.707c0-.549-.429-1.002-.972-1.056l-9.28-2.479-.168-.022A1.07 1.07 0 009.13 3.212v8.232a3.727 3.727 0 00-2.087-.68c-.09-.003-.199-.003-.291-.003-1.546.01-3.353.924-3.353 3.453 0 2.527 1.815 3.449 3.367 3.471h.286c1.49-.028 3.199-.89 3.341-3.162h.02v-.21c0-.029.008-.054.008-.082 0-.028-.008-.05-.008-.078V6.276l8.927 2.387V15.6a3.737 3.737 0 00-2.092-.686l-.292-.003c-1.546.011-3.353.924-3.353 3.454 0 2.526 1.816 3.45 3.373 3.473h.078l.202-.003c1.555-.028 3.367-.95 3.367-3.454 0-.05-.011-.09-.014-.137h.014V5.707h.003z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconMusicRegular;