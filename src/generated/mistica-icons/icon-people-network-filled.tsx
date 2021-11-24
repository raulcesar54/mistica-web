/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconPeopleNetworkFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M17.393 13.251c-.18 0-.397 0-.573.038l-1.575-2.884c.898-.898 1.43-2.137 1.43-3.527C16.675 4.175 14.6 2 12.024 2 9.448 2 7.369 4.175 7.369 6.874c0 1.39.573 2.624 1.43 3.527l-1.61 2.888c-.145-.038-.357-.038-.538-.038C4.075 13.251 2 15.426 2 18.126S4.071 23 6.647 23c2.328 0 4.26-1.801 4.58-4.127h1.542C13.126 21.2 15.025 23 17.35 23c2.575 0 4.65-2.175 4.65-4.874 0-2.7-2.031-4.875-4.607-4.875zM12.024 3.5c1.79 0 3.221 1.499 3.221 3.375 0 .752-.252 1.465-.645 2.024a2.212 2.212 0 00-1.037-1.125c.284-.34.428-.79.428-1.277 0-1.125-.897-2.065-1.971-2.065s-1.971.94-1.971 2.065c0 .487.18.94.429 1.314-.501.265-.858.639-1.038 1.126a3.763 3.763 0 01-.645-2.066C8.799 5.002 10.229 3.5 12.024 3.5zm-2.043 7.767a4.723 4.723 0 002.039.487c.713 0 1.43-.19 2.04-.487l1.357 2.477c-1.358.676-2.363 2.023-2.612 3.64h-1.538c-.253-1.613-1.254-2.964-2.612-3.64l1.326-2.477zm-.753 8.888a2.212 2.212 0 00-1.038-1.126c.284-.34.429-.789.429-1.276 0-1.125-.898-2.065-1.972-2.065-1.073 0-1.967.94-1.967 2.065 0 .487.18.94.429 1.314-.5.265-.857.638-1.038 1.125-.396-.6-.645-1.314-.645-2.061 0-1.877 1.43-3.376 3.221-3.376 1.791 0 3.222 1.5 3.222 3.376a3.513 3.513 0 01-.641 2.024zm10.74 0a2.212 2.212 0 00-1.037-1.126c.285-.34.429-.789.429-1.276 0-1.125-.898-2.065-1.971-2.065-1.074 0-1.972.94-1.972 2.065 0 .487.18.94.43 1.314-.502.265-.858.638-1.039 1.125a3.763 3.763 0 01-.645-2.065c0-1.877 1.43-3.376 3.222-3.376 1.79 0 3.22 1.5 3.22 3.376a3.542 3.542 0 01-.636 2.028z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M11.84 6.426c-.697 0-1.24-.185-1.616-.546-.39-.379-.588-.936-.588-1.664 0-.729.196-1.289.588-1.667C10.6 2.185 11.146 2 11.84 2c.698 0 1.244.185 1.622.549.392.378.591.938.591 1.667 0 .725-.199 1.285-.59 1.664-.379.364-.925.546-1.623.546zM8.17 10.84a.253.253 0 01-.251-.252v-.736c0-.704.218-1.303.633-1.737.45-.47 1.123-.72 1.941-.72h2.695c.82 0 1.493.25 1.944.72.414.434.635 1.033.635 1.737v.736a.253.253 0 01-.252.252H8.171zm-2.248 6.432c-.698 0-1.241-.185-1.617-.547-.392-.378-.588-.935-.588-1.663 0-.729.196-1.286.588-1.667.376-.364.922-.552 1.62-.552.697 0 1.243.185 1.621.55.392.377.591.938.591 1.666 0 .725-.199 1.286-.594 1.664-.378.367-.924.549-1.621.549zm1.347.969c.818 0 1.49.25 1.944.72.417.434.636 1.033.636 1.736v.737c0 .14-.112.252-.252.252H2.252A.251.251 0 012 21.434v-.737c0-.703.218-1.305.633-1.736.451-.47 1.123-.723 1.941-.723H7.27v.003zm8.871-1.521c-.392-.378-.591-.936-.591-1.664 0-.728.199-1.289.588-1.667.376-.364.922-.549 1.62-.549.697 0 1.243.185 1.621.55.392.377.591.94.591 1.666 0 .725-.202 1.286-.594 1.664-.378.364-.921.546-1.622.546-.7 0-1.238-.185-1.613-.546zm4.91 2.235c.418.434.636 1.034.636 1.737v.737a.253.253 0 01-.252.252h-7.347a.253.253 0 01-.252-.252v-.737c0-.703.218-1.305.633-1.737.45-.47 1.123-.72 1.94-.72h2.693c.823 0 1.496.25 1.95.72zM14.5 16.34a.621.621 0 01-.858.207l-1.817-1.112-1.818 1.112a.622.622 0 01-.86-.207.627.627 0 01.207-.86l1.843-1.129v-2.143a.625.625 0 011.25 0v2.143l1.842 1.129c.297.18.393.563.21.86z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconPeopleNetworkFilled;
