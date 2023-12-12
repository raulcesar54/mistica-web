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

const IconDataLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M16.463 2.566C15.253 2.211 13.671 2 12.006 2c-1.677 0-3.26.208-4.46.566-1.41.427-2.24 1.062-2.479 1.888-.042.16-.067.324-.067.492v14.108c0 1.067.855 1.87 2.545 2.38 1.21.367 2.793.566 4.46.566 1.657 0 3.243-.2 4.458-.567 1.685-.517 2.537-1.312 2.537-2.38V4.95c0-1.07-.852-1.862-2.537-2.383M18.17 9.61c-.208.393-.818.91-1.94 1.252-1.128.342-2.627.527-4.219.527-1.592 0-3.082-.182-4.218-.524-1.01-.31-1.741-.777-1.963-1.244v-3.7c.413.333.987.617 1.724.837 1.209.367 2.795.566 4.46.566s3.251-.2 4.46-.566c.723-.217 1.286-.484 1.7-.82v3.672zm-1.94 6.183c-1.128.341-2.627.535-4.219.535-1.592 0-3.082-.19-4.218-.535-1.01-.308-1.741-.769-1.963-1.244v-3.71c.438.325 1.02.61 1.724.82 1.209.368 2.795.57 4.46.57 1.676 0 3.257-.202 4.46-.57.681-.199 1.26-.483 1.7-.825v3.706h-.004c-.208.393-.818.911-1.94 1.253m1.94 3.265c0 .652-.655 1.184-1.949 1.58-1.136.341-2.635.532-4.218.532-1.584 0-3.083-.19-4.227-.532-1.294-.393-1.95-.928-1.95-1.58v-3.291c.431.324 1.022.61 1.725.825 1.21.368 2.795.57 4.46.57 1.676 0 3.257-.2 4.46-.57.681-.199 1.26-.492 1.7-.834zm-6.167-16.22c1.589 0 3.09.19 4.218.532 1.128.342 1.767.792 1.907 1.33 0 0-.008.008-.008.017-.192.492-.835.92-1.89 1.235-1.136.342-2.627.535-4.219.535-1.592 0-3.082-.19-4.218-.535-1.077-.327-1.733-.769-1.907-1.278v-.008l-.009-.01c.175-.509.83-.958 1.899-1.286 1.136-.341 2.638-.532 4.227-.532"
            />
        </svg>
    );
};

export default IconDataLight;
