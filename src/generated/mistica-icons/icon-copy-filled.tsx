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

const IconCopyFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M3.275 14.571V3.507c0-.129.106-.235.235-.235h11.06c.13 0 .236.106.236.235v11.064a.237.237 0 01-.236.236H3.51a.233.233 0 01-.235-.236zm16.952-6.969h-4.143V3.51c0-.832-.678-1.51-1.51-1.51H3.513c-.832 0-1.51.678-1.51 1.51v11.064c0 .832.678 1.51 1.51 1.51h4.09v4.143c0 .804.655 1.46 1.459 1.46h11.162c.804 0 1.46-.656 1.46-1.46V9.062a1.458 1.458 0 00-1.457-1.46z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCopyFilled;