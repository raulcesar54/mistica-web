/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconPenFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M20.553 8.145l.34-.357c1.476-1.55 1.476-4.075 0-5.625a3.667 3.667 0 00-5.358 0l-.34.357 5.358 5.625zM4.177 14.088l10.25-10.763 5.356 5.624L9.533 19.71l-5.356-5.623zm-.625.955l-1.528 6.003a.784.784 0 00.188.731.705.705 0 00.696.198l5.717-1.61-5.073-5.322z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M8.78 19.151l-1.663-1.644 9.339-9.238 1.639 1.622-9.314 9.26zm-3.66.919l-1.373-1.342.387-2.473 3.383 3.347-2.397.468zm8.79-14.32l1.686 1.67-9.336 9.238-1.686-1.666L13.91 5.75zm6.69-2.256a10.46 10.46 0 00-.249-.25c-1.37-1.335-3.605-2.002-5.759.13l-11.31 11.19a.615.615 0 00-.124.182l-.022.067c-.009.028-.023.054-.028.084l-.942 6.096a.6.6 0 00.712.68l5.865-1.075c.012 0 .023.005.034.005.11 0 .213-.039.308-.095.009-.003.014-.008.023-.014.033-.022.07-.036.1-.067.006-.006.006-.011.012-.014.005-.006.014-.009.02-.014L20.48 9.22c2.132-2.103 1.46-4.336.12-5.728z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconPenFilled;
