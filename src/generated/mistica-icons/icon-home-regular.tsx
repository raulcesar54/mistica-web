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

const IconHomeRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M15.415 20.476h2.249c.28 0 .507-.18.507-.4v-7.538a.616.616 0 01.627-.605h1.13c.265 0 .422-.14.478-.275.04-.095.059-.232-.087-.378l-8.084-7.944c-.196-.193-.59-.193-.787 0l-8.081 7.95c-.146.143-.126.283-.084.378.056.132.213.272.479.272h1.017a.614.614 0 01.624.605v7.537c0 .222.227.401.505.401h2.417v-3.762a.616.616 0 01.627-.605h5.838a.614.614 0 01.625.605v3.76zm2.249 1.21h-2.877a.614.614 0 01-.625-.605v-3.759H9.577v3.76a.616.616 0 01-.625.604H5.908c-.97 0-1.76-.722-1.76-1.608v-6.932h-.386c-.723 0-1.367-.398-1.633-1.014-.255-.583-.123-1.233.347-1.69l8.081-7.952c.661-.652 1.91-.652 2.575 0l8.08 7.95c.469.46.603 1.106.348 1.689-.266.616-.91 1.014-1.633 1.014h-.504v6.933c0 .888-.79 1.61-1.76 1.61z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconHomeRegular;