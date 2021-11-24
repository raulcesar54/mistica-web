/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconCopyRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M20.412 20.227a.185.185 0 01-.185.185H9.064a.185.185 0 01-.184-.185V16.08h5.694c.832 0 1.51-.678 1.51-1.51V8.877h4.143c.104 0 .185.081.185.185v11.165zM3.275 14.574V3.51c0-.129.106-.235.235-.235h11.06c.13 0 .236.106.236.235v11.064a.237.237 0 01-.236.236H3.507a.236.236 0 01-.232-.236c-.003 0-.003 0 0 0zm16.952-6.972H16.08V3.51A1.51 1.51 0 0014.571 2H3.507C2.675 2 2 2.675 2 3.51v11.064c0 .832.678 1.51 1.51 1.51h4.092v4.143c0 .804.656 1.46 1.46 1.46h11.162a1.46 1.46 0 001.46-1.46V9.062a1.458 1.458 0 00-1.457-1.46z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCopyRegular;
