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

const IconFastForwardRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M11.846 20.476c-5.731 0-8.636-2.905-8.636-8.63 0-5.731 2.905-8.636 8.636-8.636 5.728 0 8.63 2.905 8.63 8.636 0 5.725-2.905 8.63-8.63 8.63zm0-18.476C5.406 2 2 5.403 2 11.846c0 6.437 3.403 9.84 9.846 9.84 6.437 0 9.84-3.403 9.84-9.84 0-6.443-3.403-9.846-9.84-9.846zM7.504 13.44V9.65l3.171 1.905c-.003 0-3.17 1.885-3.17 1.885zm9.093-1.891l-3.171 1.885v-3.79l3.17 1.905zM6.599 8.053a.603.603 0 00-.308.527v5.92a.606.606 0 00.916.521l4.953-2.946c.025-.014.036-.042.058-.06V14.5a.606.606 0 00.914.52l4.952-2.946a.604.604 0 00.003-1.037l-4.953-2.98a.605.605 0 00-.916.518v2.518c-.022-.016-.03-.042-.056-.056L7.21 8.062a.61.61 0 00-.61-.009z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFastForwardRegular;