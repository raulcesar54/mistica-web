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

const IconAlarmLightCrossRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M11.435 4.236c0 .336.272.608.605.608a.608.608 0 0 0 .605-.608V2.763a.607.607 0 0 0-.605-.608.607.607 0 0 0-.605.608v1.473Zm7.115 13.196c.74 0 1.383.547 1.383 1.168v2.07c0 .625-.647 1.171-1.383 1.171H5.53c-.75 0-1.384-.535-1.384-1.17V18.6c0-.634.633-1.169 1.384-1.169h.151v-5.725c0-4.118 2.258-6.387 6.356-6.387 4.101 0 6.359 2.27 6.359 6.387v5.725h.154ZM6.89 17.41h10.297v-5.703c0-3.48-1.683-5.171-5.15-5.171-3.463 0-5.147 1.692-5.147 5.17v5.704Zm11.832 1.288a.324.324 0 0 0-.173-.053H5.53a.345.345 0 0 0-.174.048v1.888c.054.03.113.045.174.045h13.02c.061 0 .123-.02.173-.054v-1.874ZM4.83 9.567a.608.608 0 0 1-.605.608H2.76a.608.608 0 0 1 0-1.216h1.468c.333 0 .605.272.602.608Zm17.011.028a.607.607 0 0 0-.605-.608h-1.468a.607.607 0 0 0-.605.608c0 .336.272.608.605.608h1.468a.607.607 0 0 0 .605-.608ZM5.671 5.962 4.633 4.92a.607.607 0 0 1 .851-.863l.003.003 1.037 1.042a.61.61 0 0 1-.429 1.039.62.62 0 0 1-.426-.18Zm10.92-.558a.607.607 0 0 0 .603.614c.16 0 .314-.065.429-.18l1.036-1.042a.609.609 0 0 0 0-.857l-.003-.002a.602.602 0 0 0-.851.002l-1.037 1.042a.598.598 0 0 0-.176.423Zm-2.232 7.09H12.88a.525.525 0 0 0-.524.527v1.481h-.691V13.02a.525.525 0 0 0-.524-.526H9.665v-.695h1.476a.525.525 0 0 0 .524-.526V9.79h.692v1.482c0 .288.235.526.523.526h1.48v.695Zm1.05-.98c0-.415-.38-.768-.828-.768 0 0-1.177 0-1.174-.006V9.564c0-.451-.353-.832-.768-.832h-1.255c-.414 0-.767.384-.767.835v1.179h-1.17c-.45 0-.83.35-.83.768v1.263c0 .417.38.77.83.77h1.173v1.177c0 .45.353.832.767.832h1.255c.418 0 .768-.381.768-.832v-1.18h1.17c.449 0 .83-.353.83-.767v-1.263Z"
            />
        </svg>
    );
};

export default IconAlarmLightCrossRegular;
