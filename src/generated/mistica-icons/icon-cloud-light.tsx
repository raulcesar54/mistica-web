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

const IconCloudLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M16.761 18.881H6.033a3.882 3.882 0 01-3.877-3.876c0-.863.3-1.69.869-2.393a4.053 4.053 0 012.03-1.358.623.623 0 00.138-.05c.016-3.524 2.431-6.079 5.75-6.079a6.11 6.11 0 015.569 3.61l.006.012.033-.003a5.079 5.079 0 015.286 5.067 5.077 5.077 0 01-5.076 5.07zM10.943 5.685c-1.467 0-2.792.558-3.736 1.572C6.263 8.27 5.75 9.682 5.75 11.24c0 .398-.409.515-.543.552a3.49 3.49 0 00-1.748 1.173 3.22 3.22 0 00-.743 2.04 3.32 3.32 0 003.317 3.316h10.728a4.519 4.519 0 004.513-4.513 4.516 4.516 0 00-4.51-4.512c-.062 0-.12.003-.188.005l-.12.006c-.207.006-.359-.104-.448-.328-.003-.005-.003-.01-.006-.016a5.555 5.555 0 00-5.059-3.278z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCloudLight;