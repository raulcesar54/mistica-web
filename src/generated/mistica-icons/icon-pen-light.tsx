/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconPenLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M16.155 2.052a3.315 3.315 0 014.844 0c1.335 1.402 1.335 3.684 0 5.086l-.722.757-8.85 9.293a.366.366 0 01-.257.11.349.349 0 01-.256-.11.392.392 0 010-.535l8.597-9.019-3.826-4.016L4.458 15.407l4.082 4.282a.404.404 0 01.092.366.378.378 0 01-.257.27l-5.922 1.662a.352.352 0 01-.349-.097.404.404 0 01-.092-.366l1.587-6.218V15.3l.017-.042a.13.13 0 01.016-.042s.004-.004.004-.008c.008-.009.012-.021.02-.03l.008-.008c.008-.013.016-.021.028-.034L15.432 2.81zM4.133 16.139L2.87 21.086l4.71-1.326-3.448-3.62zm5.594 1.541c.398 0 .721.34.721.758 0 .419-.323.758-.721.758-.399 0-.722-.34-.722-.758s.323-.758.722-.758zM20.489 2.586a2.618 2.618 0 00-3.825 0l-.465.489 3.825 4.016.465-.488c1.055-1.107 1.055-2.91 0-4.017z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M19.925 8.597l-.829.824-4.565-4.516.845-.837c2.037-2.011 3.77-.76 4.423-.126.079.078.163.165.233.235.639.664 1.91 2.423-.107 4.42zM3.267 19.628L4.34 20.69l-1.272.232.2-1.294zM6.13 17.2l-2.014-1.995 9.83-9.723 2.013 1.995L6.13 17.2zm-.804 3.308L3.421 18.62l.395-2.555 4.025 3.98-2.515.463zm3.381-.76L6.715 17.78l9.83-9.722 1.969 1.946-9.807 9.746zM20.631 3.612c-.084-.084-.165-.168-.252-.252-1.33-1.294-3.498-1.938-5.59.132L3.233 14.919a.368.368 0 00-.104.205c-.003.008-.011.014-.011.022L2.16 21.37a.41.41 0 00.484.465l6.02-1.103c.014 0 .028.008.042.008.11 0 .216-.042.294-.12.006-.006.009-.014.014-.023.003-.003.011-.003.014-.005L20.514 9.177c2.67-2.644.566-5.1.117-5.566z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconPenLight;
