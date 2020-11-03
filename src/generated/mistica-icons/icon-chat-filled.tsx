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

const IconChatFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M18.812 2.845H4.832a2.822 2.822 0 00-2.826 2.812v9.65c0 1.383.924 2.507 2.187 2.759v2.35c0 .51.482.975 1.009.975.518 0 .77-.336.854-.449l2.207-2.823h10.55a2.82 2.82 0 002.823-2.812V5.654a2.82 2.82 0 00-2.824-2.81zm-1.03 6.036H5.848a.562.562 0 01-.56-.56c0-.308.252-.56.56-.56H17.78a.561.561 0 010 1.12zm-3.824 4.37h-8.11a.562.562 0 01-.56-.56c0-.309.253-.56.56-.56h8.11a.561.561 0 010 1.12z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconChatFilled;