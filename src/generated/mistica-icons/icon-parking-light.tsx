/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconParkingLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M19.037 21.238c0 .42-.332.762-.74.762a.752.752 0 01-.739-.762c0-.42.332-.763.74-.763.407 0 .74.342.74.763m-2.59 0a.376.376 0 00-.369-.382H3.854c-.612 0-1.11-.513-1.11-1.143V2.91c0-.63.498-1.144 1.11-1.144H20.15c.612 0 1.11.513 1.11 1.144v16.802c0 .523-.342.972-.835 1.104a.38.38 0 00-.265.465.367.367 0 00.45.273c.82-.215 1.389-.977 1.389-1.842V2.91C22 1.86 21.17 1 20.146 1H3.854C2.834 1 2 1.855 2 2.91v16.803c0 1.05.83 1.91 1.854 1.91h12.22a.384.384 0 00.375-.385zM9.41 17.42v-4.966h3.333c2.043 0 3.702-1.71 3.702-3.816 0-2.107-1.659-3.817-3.702-3.817H8.67V17.42c0 .21.166.381.37.381.203 0 .37-.171.37-.381zm0-11.837h3.333c1.635 0 2.963 1.369 2.963 3.055 0 1.686-1.328 3.054-2.963 3.054H9.409V5.584z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M18.629 3.8c1.084 1.024 1.639 2.615 1.622 4.725a7.095 7.095 0 01-1.507 4.854 5.264 5.264 0 01-2.283 1.493 10.294 10.294 0 01-3.26.46h-2.609v6.1a.408.408 0 01-.409.41H5.91a.41.41 0 01-.409-.41V2.572a.41.41 0 01.409-.409h6.437c1.26-.025 2.518.098 3.748.37.941.193 1.815.63 2.535 1.266zm-.474 9.021a6.353 6.353 0 001.297-4.305c0-1.863-.465-3.28-1.378-4.1a4.765 4.765 0 00-2.143-1.09 15.415 15.415 0 00-3.585-.345h-6.03v18.045H9.78v-6.112c0-.227.182-.41.406-.41H13.2a9.381 9.381 0 003.014-.416 4.402 4.402 0 001.941-1.267zm-4.26-7.38c.454.09.874.3 1.221.607.605.698.9 1.614.815 2.535a3.696 3.696 0 01-.888 2.69c-.31.316-.697.548-1.123.672a6.646 6.646 0 01-1.63.165h-2.104a.405.405 0 01-.406-.409V5.687c0-.227.182-.409.406-.409h1.997a7.642 7.642 0 011.712.163zm.571 5.249a2.925 2.925 0 00.645-2.084 2.631 2.631 0 00-.586-1.936 1.708 1.708 0 00-.815-.409 7.152 7.152 0 00-1.524-.165h-1.588v5.193h1.658c.485.014.97-.03 1.443-.14.294-.081.557-.24.767-.46z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconParkingLight;
