/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconPersonalComputerFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M22 3H2v10.959h19.991V3H22zm-1.43 12.057H2v2.558h19.995v-2.558H20.57zm-4.644 3.652H8.074l-.68 2.375c-.074.22 0 .477.104.659A.703.703 0 008.07 22h7.857c.215 0 .43-.075.571-.257.142-.182.179-.402.105-.66l-.676-2.374z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M13.843 6.5c.81 0 1.443.224 1.877.667.423.428.636 1.039.636 1.815v4.28c0 1.59-.916 2.501-2.513 2.501l-2.203.001.557.575 3.621-.001a.55.55 0 010 1.098L2.71 17.44a.55.55 0 010-1.098l3.531-.002.548-.574-2.104.002c-1.597 0-2.513-.91-2.513-2.501v-4.28c0-.777.213-1.387.636-1.816.434-.442 1.067-.666 1.877-.666l9.16-.006zm6.516.006c.434 0 1.448.196 1.448 2.014l.003 6.88c.003 1.823-1.011 2.019-1.446 2.019h-1.997a1.28 1.28 0 01-1.12-.61c-.213-.34-.317-.8-.317-1.407l-.005-6.88c0-.607.103-1.067.316-1.406.25-.392.647-.61 1.12-.61h1.998zm-10.247 9.259l-1.806.001-.549.575 2.912-.002-.557-.574z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconPersonalComputerFilled;
