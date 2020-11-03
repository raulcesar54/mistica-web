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

const IconWarningFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M11.997 18.994a.857.857 0 010-1.714c.47 0 .853.382.853.857a.855.855 0 01-.853.857zM11.245 5.15a.751.751 0 011.503 0v10.36a.751.751 0 01-1.503 0V5.15zM12.502.014C12.222.007 11.898 0 11.587 0h-.222C8.954.02 0 .847 0 11.959c0 11.13 9.04 12.003 11.45 12.038.123.003.25.003.376.003.253 0 .505-.003.724-.007 2.29-.04 11.45-.901 11.45-11.962C24 .997 14.851.068 12.502.014z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconWarningFilled;