/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconBeachUmbrellaRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M20.003 6.743l-1.473.89c-2.485-2.71-5.017-3.635-6.947-3.868 1.504-.456 2.94-.526 4.294-.196 1.53.376 2.944 1.272 4.21 2.664a.35.35 0 01.087.258.352.352 0 01-.171.252zM9.446 4.978c1.43-.196 4.745-.16 8.014 3.3l-4.49 2.709c.002 0-3.524-6.009-3.524-6.009zm-1.51 9.048c-1.597-4.023-.311-7.006.507-8.328l3.473 5.924c.003 0-3.98 2.404-3.98 2.404zm-2.897 1.75c-.078.048-.123.09-.31.037a.34.34 0 01-.219-.193c-.712-1.723-.9-3.356-.552-4.86.347-1.546 1.252-2.953 2.678-4.2-.74 1.847-1.204 4.66.232 8.11L5.04 15.777zm15.972-10.35c-1.428-1.574-3.056-2.596-4.834-3.033-2.337-.572-4.85-.132-7.488 1.291l-.314-.538a.627.627 0 00-.845-.224.598.598 0 00-.239.81l.009.014.33.563c-2.694 1.706-4.34 3.787-4.88 6.185-.403 1.742-.198 3.619.611 5.574.169.412.522.734.99.893.173.05.335.076.49.076.288 0 .588-.081.845-.232l6.85-4.135 5.195 8.86a.626.626 0 00.846.224.596.596 0 00.241-.81l-.008-.016-5.222-8.89 7.07-4.267c.404-.247.675-.647.745-1.123.05-.446-.09-.891-.392-1.222z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconBeachUmbrellaRegular;
