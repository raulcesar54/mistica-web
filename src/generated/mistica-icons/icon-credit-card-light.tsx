/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconCreditCardLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M18.058 17.529c.394 0 .713.33.713.735a.724.724 0 01-.713.736.724.724 0 01-.712-.736c0-.406.319-.735.712-.735zM20.195 5c.989 0 1.789.843 1.805 1.888v9.856c0 1.045-.8 1.888-1.789 1.888a.363.363 0 01-.356-.368c0-.202.16-.367.356-.367.593 0 1.069-.517 1.069-1.153V9.785H2.72v6.963c0 .636.476 1.153 1.069 1.153h12.137c.196 0 .356.165.356.368 0 .202-.16.367-.356.367H3.789C2.8 18.636 2 17.793 2 16.748v-9.86C2 5.843 2.8 5 3.789 5zM9.5 12.368c.196 0 .356.224.356.5 0 .275-.16.5-.356.5H4.501c-.196 0-.356-.225-.356-.5 0-.276.16-.5.356-.5zm4.638 0c.196 0 .356.224.356.5 0 .275-.16.5-.356.5h-2.501c-.196 0-.356-.225-.356-.5 0-.276.16-.5.356-.5zm5.346 0c.204 0 .356.224.356.5 0 .275-.16.5-.356.5H16.27c-.196 0-.356-.225-.356-.5 0-.276.16-.5.356-.5zm.712-6.637H3.781c-.593 0-1.069.517-1.069 1.153V9.05h18.552V6.884c0-.636-.476-1.153-1.069-1.153z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M21.598 9.317v3.81a.47.47 0 010 .087v4.724c.003.327-.13.643-.363.876-.236.23-.552.36-.884.36H3.531a1.231 1.231 0 01-1.231-1.22V6.72A1.233 1.233 0 013.539 5.5H20.35a1.24 1.24 0 01.876.354c.234.228.368.539.368.865v2.51c.006.03.006.06.003.088zm-18.493.407v3.012h17.691V9.724H3.105zm.434-3.417a.427.427 0 00-.437.423v2.2H20.78v-2.2a.425.425 0 00-.426-.423H3.539zM20.354 18.37a.424.424 0 00.442-.423v-4.413H3.105v4.413a.427.427 0 00.437.423h16.812z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconCreditCardLight;
