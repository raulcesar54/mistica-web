/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconMenuLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M2.74 5.737a.575.575 0 01-.58-.568c0-.314.26-.569.58-.569h18.53c.319 0 .58.255.58.569a.575.575 0 01-.58.568H2.74zm18.526 5.678c.32 0 .58.255.58.569 0 .313-.26.568-.58.568H2.74a.575.575 0 01-.58-.568c0-.314.26-.569.58-.569h18.526zm0 6.815c.32 0 .58.255.58.569 0 .314-.26.569-.58.569H2.74a.575.575 0 01-.58-.57c0-.313.26-.568.58-.568h18.526z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconMenuLight;
