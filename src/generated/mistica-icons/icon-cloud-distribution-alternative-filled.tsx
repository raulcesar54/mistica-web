'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconCloudDistributionAlternativeFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M19.972 17.4c-.925 0-1.702.634-1.963 1.487h-4.037a2.067 2.067 0 0 0-1.408-1.416v-3.685a2.075 2.075 0 0 0 1.479-1.974c0-1.116-.925-2.05-2.038-2.05-1.114 0-2.038.93-2.038 2.05 0 .93.63 1.711 1.478 1.974v3.685a2.067 2.067 0 0 0-1.407 1.416H6C5.74 18.03 4.962 17.4 4.038 17.4 2.928 17.4 2 18.33 2 19.45c0 1.12.924 2.05 2.038 2.05.924 0 1.701-.634 1.962-1.488h4.038c.26.859 1.038 1.488 1.962 1.488.924 0 1.701-.634 1.962-1.488H18c.26.859 1.038 1.488 1.962 1.488 1.11 0 2.038-.93 2.038-2.05 0-1.12-.92-2.05-2.028-2.05Z"
            />
            <path
                fill={fillColor}
                d="M16.673 6.224A4.78 4.78 0 0 0 12.01 2.5a4.777 4.777 0 0 0-4.664 3.724c-2.555.148-4.592 2.236-4.592 4.844 0 2.68 2.146 4.844 4.815 4.844h3.147v-1.64a2.81 2.81 0 0 1-1.479-2.46c0-1.526 1.26-2.794 2.777-2.794 1.517 0 2.777 1.268 2.777 2.794 0 1.082-.592 2.012-1.478 2.46v1.64h3.147c2.663 0 4.815-2.16 4.815-4.844a4.865 4.865 0 0 0-4.602-4.844Z"
            />
        </svg>
    );
};

export default IconCloudDistributionAlternativeFilled;
