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

const IconMobileDeviceRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M15.238 2c2.182 0 3.47 1.243 3.47 3.472v13.376c0 2.23-1.288 3.473-3.47 3.473H8.47c-2.181 0-3.47-1.244-3.47-3.473V5.472C5 3.242 6.289 2 8.47 2zm0 1.5H8.47c-1.365 0-1.97.584-1.97 1.972v13.376c0 1.389.606 1.973 1.97 1.973h6.768c1.365 0 1.97-.584 1.97-1.973V5.472c0-1.388-.604-1.972-1.97-1.972zm-3.384 12.66c.61 0 1.007.317 1.007 1 0 .328-.092.572-.254.735-.177.18-.436.265-.753.265s-.576-.085-.753-.265c-.162-.163-.254-.407-.254-.735 0-.683.397-1 1.007-1z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconMobileDeviceRegular;