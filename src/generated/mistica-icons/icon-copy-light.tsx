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

const IconCopyLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M21.022 20.59a.436.436 0 01-.434.435H9.15a.432.432 0 01-.432-.435v-4.31a.404.404 0 00-.045-.18h6.174c.692 0 1.252-.56 1.252-1.252V8.694a.46.46 0 00.123.025h4.367c.239 0 .435.194.435.434V20.59h-.003zM2.977 14.848V3.408c0-.238.193-.434.431-.434h11.44c.238 0 .434.193.434.434v11.437a.436.436 0 01-.434.434H3.408a.432.432 0 01-.431-.43zm17.613-6.95h-4.367a.46.46 0 00-.123.026V3.408c0-.692-.56-1.252-1.252-1.252H3.408c-.692 0-1.252.563-1.252 1.252v11.437c0 .692.56 1.252 1.252 1.252h4.535a.404.404 0 00-.044.18v4.31c0 .692.56 1.253 1.252 1.253h11.44c.691 0 1.252-.56 1.252-1.252V9.15c0-.692-.56-1.252-1.253-1.252z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCopyLight;