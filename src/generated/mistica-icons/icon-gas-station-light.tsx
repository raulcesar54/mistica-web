/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconGasStationLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M19.26 10.422c.798-.017 1.75-.348 1.75-1.85 0-1.5-.96-1.84-1.764-1.859l-.188-.003h-.039c-.787.009-1.725.334-1.725 1.846 0 1.521.95 1.852 1.747 1.863l.219.003zM13.195 20.64V3.377c0-.174-.22-.381-.408-.381H3.389c-.188 0-.41.204-.41.38V20.64c0 .19.208.381.41.381l9.398.003c.201-.003.408-.193.408-.384zm8.64-12.008l.008 10.546c0 1.93-1.381 2.641-2.564 2.661l-.142.003h-.087c-1.233-.017-2.558-.731-2.558-2.678v-3.952a1.774 1.774 0 00-1.778-1.77h-.698v7.2c0 .64-.574 1.203-1.23 1.203H3.39c-.656 0-1.233-.563-1.233-1.202V3.377c0-.63.588-1.202 1.233-1.202h9.398c.644 0 1.232.572 1.232 1.202v9.24h.697a2.598 2.598 0 012.6 2.595v3.952c0 1.653 1.227 1.849 1.756 1.857h.193c.53-.011 1.757-.21 1.757-1.843l-.006-8.55c-.63.539-1.445.609-1.742.614h-.247c-.537-.008-2.56-.201-2.56-2.683 0-2.48 2-2.664 2.54-2.67h.048l.157.003-3.042-3.036a.41.41 0 01.58-.58l4.126 4.118c.011.008.014.022.023.03.51.381.932 1.031.932 2.149l-.002.028c.002.011.005.02.005.03zm-11.096.26V5.738c0-.075-.05-.151-.079-.168l-5.058.009c.016.008-.034.08-.034.16v3.153c0 .079.04.137.062.16h5.078c-.02-.008.03-.073.03-.16zm-.034-4.134c.457 0 .857.456.857.98v3.154c0 .53-.392.98-.857.98H5.602c-.465 0-.858-.448-.858-.98V5.735c0-.52.401-.98.858-.98l5.103.003z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconGasStationLight;
