/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconFingerprintRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M16.23 15.656c-1.19 0-2.191-.329-2.993-.988-1.748-1.436-1.862-3.893-1.868-3.998a.417.417 0 01.395-.432.416.416 0 01.425.397c0 .023.109 2.193 1.568 3.388.886.725 2.113.96 3.634.693a.417.417 0 01.174.815c-.012.004-.023.004-.032.006a7.731 7.731 0 01-1.303.119m-2.067 4.154a.378.378 0 01-.11-.016c-2.585-.728-4.927-2.619-6.112-4.933-.928-1.817-1.081-3.74-.437-5.566.68-2.061 2.92-3.354 5.194-2.996 2.331.364 4.146 2.383 4.126 4.597a.414.414 0 01-.41.416h-.001a.412.412 0 01-.407-.421c.014-1.812-1.493-3.47-3.43-3.77-1.888-.291-3.737.758-4.294 2.444-.567 1.61-.43 3.306.392 4.913 1.08 2.118 3.226 3.85 5.597 4.518a.413.413 0 01.283.51.409.409 0 01-.39.304m-.68 2.148a.37.37 0 01-.097-.012c-1.606-.394-3.256-1.255-4.647-2.428-3.096-2.61-5.571-8.661-2.581-12.585 1.667-2.187 4.628-3.226 7.357-2.588.011 0 4.227.66 5.394 5.558.015.048.441 1.59-.352 2.672-.468.636-1.234.963-2.277.974.018.003-.718.091-1.402-.466-.62-.5-.989-1.343-1.099-2.501-.04-.409-.208-.733-.5-.963-.386-.298-.977-.414-1.585-.31-.184.017-1.516.185-1.633 1.71-.135 1.784 1.244 4.813 4.632 5.648a.415.415 0 01-.193.806c-3.845-.953-5.406-4.455-5.25-6.522.136-1.815 1.595-2.411 2.348-2.47.803-.142 1.61.03 2.184.473.474.37.758.9.818 1.542.084.907.354 1.57.78 1.923.236.201.542.31.852.295.818-.011 1.366-.224 1.673-.642.545-.74.221-1.95.218-1.961-1.045-4.377-4.716-4.95-4.753-4.953-2.468-.574-5.085.34-6.56 2.277-2.654 3.485-.317 9.104 2.456 11.447 1.295 1.09 2.829 1.894 4.314 2.258a.418.418 0 01.304.5.412.412 0 01-.4.318m6.005-15.24a.41.41 0 01-.338-.18c-1.025-1.51-2.706-2.751-4.498-3.317-2.672-.849-5.577-.298-7.959 1.51a13.222 13.222 0 00-1.88 1.756.407.407 0 01-.57.04l-.008-.009a.42.42 0 01-.031-.588A14.102 14.102 0 016.2 4.064c2.598-1.967 5.77-2.563 8.697-1.638 1.963.622 3.803 1.982 4.93 3.637a.422.422 0 01-.105.58.41.41 0 01-.233.074"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFingerprintRegular;
