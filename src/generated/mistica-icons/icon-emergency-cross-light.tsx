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

const IconEmergencyCrossLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M9.14 14.445a.41.41 0 01.408.409l.003 5.574c0 .325.233.588.384.588l4.129.003c.151 0 .384-.266.384-.591l-.003-5.577a.41.41 0 01.409-.409l5.574-.003c.322 0 .588-.252.588-.384V9.927c0-.13-.266-.384-.588-.384l-5.577.003a.41.41 0 01-.409-.41l-.003-5.57c0-.323-.255-.589-.384-.589H9.93c-.128 0-.386.266-.386.588l.003 5.577a.41.41 0 01-.41.41l-5.574.002c-.325 0-.59.233-.59.384v4.129c0 .15.265.386.59.386l5.577-.008zm4.927 7.395l-4.13-.003c-.64 0-1.204-.658-1.204-1.409l-.003-5.163-5.165.003c-.75 0-1.409-.563-1.409-1.204l.003-4.126c0-.642.658-1.205 1.412-1.205l5.16-.003-.003-5.165c0-.736.574-1.409 1.204-1.409h4.129c.63 0 1.204.673 1.204 1.41v5.162l5.169-.003c.736 0 1.409.574 1.409 1.204v4.13c0 .63-.673 1.204-1.41 1.204h-5.165l.003 5.168c0 .75-.563 1.409-1.204 1.409z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconEmergencyCrossLight;