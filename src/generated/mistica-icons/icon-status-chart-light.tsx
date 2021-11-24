/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconStatusChartLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M21 19.254a.775.775 0 01-.765.783.775.775 0 01-.764-.783c0-.432.343-.783.764-.783.422 0 .765.351.765.783zm-.382 2.354a.388.388 0 00-.383-.391H16.79V2.783h3.064V16.9c0 .215.172.391.382.391a.388.388 0 00.383-.391V2H16.02v20h4.215a.388.388 0 00.383-.392zm-6.51-12.941H9.51V22h4.598V8.667zm-3.833.783h3.063v11.767h-3.063V9.45zm-2.677 5.1H3V22h4.598v-7.45zm-3.833.783h3.063v5.884H3.765v-5.884z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M20.089 4.854a.938.938 0 010-1.875c.515 0 .933.42.933.94 0 .517-.42.935-.933.935m-4.43 7.33a.938.938 0 010-1.874.938.938 0 010 1.875m-7.65-3.377a.933.933 0 01-.933-.933v-.006a.932.932 0 111.863 0 .935.935 0 01-.93.939m-4.102 7.288a.935.935 0 010-1.872.937.937 0 010 1.872M20.086 2.15c-.967 0-1.754.793-1.754 1.765 0 .485.196.925.513 1.247l-2.623 4.422a1.629 1.629 0 00-.566-.101c-.569 0-1.068.277-1.39.698l-4.54-2.004c.02-.1.032-.204.032-.308a1.76 1.76 0 00-1.755-1.763 1.76 1.76 0 00-1.193 3.05L4.383 13.47a1.729 1.729 0 00-.479-.075 1.76 1.76 0 00-1.754 1.762c0 .972.787 1.765 1.754 1.765a1.762 1.762 0 001.194-3.045l2.426-4.313c.157.045.317.07.482.07.566 0 1.068-.277 1.387-.697l4.54 2.003c-.02.1-.031.205-.031.308 0 .973.787 1.766 1.754 1.766a1.76 1.76 0 001.26-2.982l2.635-4.447c.17.056.347.093.535.093.97 0 1.754-.79 1.754-1.763a1.76 1.76 0 00-1.754-1.765"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconStatusChartLight;
