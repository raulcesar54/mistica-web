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

const IconEditPaperRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M19.627 5.807c-.308.302-5.226 4.652-6.112 5.46l-2.65.873.866-2.58c.6-.53 5.826-5.134 6.168-5.473.63-.628 1.398-.334 1.731 0 .227.23.37.566.367.885 0 .317-.134.619-.37.835zm-1.635 11.87c0 .743-.2 1.298-.614 1.698-.448.434-1.137.653-2.045.653H6.345c-.908 0-1.597-.219-2.045-.653-.412-.397-.614-.952-.614-1.694V7.356c0-1.98 1.446-2.398 2.659-2.398h8.05c-1.115.989-2.496 2.207-3.826 3.378-.19.168-.334.384-.415.628l-1.04 3.09a1.445 1.445 0 001.83 1.837l3.112-1.025a1.41 1.41 0 00.496-.286c.03-.028 1.793-1.583 3.442-3.045-.002-.003-.002 8.143-.002 8.143zm3.694-12.702a2.995 2.995 0 00-.863-2.084c-1.01-1.011-2.826-1.286-4.117 0-.042.042-.196.182-.434.395a26.211 26.211 0 00-.939-.017H6.345C3.705 3.272 2 4.874 2 7.356v10.322c0 1.207.378 2.188 1.129 2.907.776.751 1.857 1.13 3.218 1.13h8.99c1.358 0 2.442-.379 3.218-1.127.747-.722 1.128-1.7 1.128-2.91l-.008-9.644c.6-.535 1.036-.928 1.137-1.026a2.811 2.811 0 00.874-2.033z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconEditPaperRegular;