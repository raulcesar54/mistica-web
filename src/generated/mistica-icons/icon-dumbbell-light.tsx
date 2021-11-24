/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconDumbbellLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M6.434 5.438c.478 0 .875.371.929.846l.006.111v3.513l.042-.01.042-.007h9.093l.039.008.039.01V6.394a.95.95 0 01.827-.951l.109-.006h1.204c.479 0 .875.371.93.846l.006.111v.6h1.207c.481 0 .875.37.93.846l.006.112v8.098c0 .489-.36.893-.827.949l-.109.006H19.7v.6a.951.951 0 01-.827.951l-.109.007H17.56a.945.945 0 01-.93-.847l-.006-.111v-3.513l-.038.01-.04.007H7.453l-.042-.008-.042-.009v3.513a.951.951 0 01-.827.951l-.108.007H5.229a.945.945 0 01-.93-.847l-.005-.111v-.6H3.092a.94.94 0 01-.93-.843l-.006-.112v-8.1c0-.49.36-.894.826-.95l.11-.006h1.202v-.6a.95.95 0 01.826-.951l.11-.006h1.204zm12.333.957h-1.205v11.21h1.205V6.396zm-12.333 0H5.229v1.541l.001.006.002.008v8.098l-.002.009v1.548h1.204V6.396zm14.473 1.558h-1.205v8.098h1.205V7.953zm-16.613 0H3.092v8.098h1.202V7.953zm12.252 2.896H7.453v2.303h9.093v-2.303z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDumbbellLight;
