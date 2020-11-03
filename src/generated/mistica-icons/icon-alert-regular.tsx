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

const IconAlertRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M11.872 2.156c.257 0 .486.15.615.405l9.21 18.224s0 .003.002.003a.72.72 0 01-.02.71.728.728 0 01-.625.333H2.888a.722.722 0 01-.626-.333.735.735 0 01-.023-.71l9.018-18.224c.128-.257.357-.408.615-.408zm.005 1.624L3.49 20.735h16.955L11.877 3.78zm.106 14.196c.353 0 .554.201.554.554 0 .352-.204.553-.554.553-.349 0-.553-.201-.553-.553 0-.353.201-.554.553-.554zm0-9.805c.302 0 .548.246.548.548v7.698a.549.549 0 01-1.095 0V8.719c0-.302.246-.548.547-.548z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconAlertRegular;