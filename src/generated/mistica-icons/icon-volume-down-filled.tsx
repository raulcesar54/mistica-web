/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconVolumeDownFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M15.703 21.63V2.368a.361.361 0 00-.185-.318.368.368 0 00-.37 0l-10.1 5.875H2.37a.37.37 0 00-.37.37v7.407c0 .204.166.37.37.37h2.679l10.1 5.876a.363.363 0 00.37.005.374.374 0 00.184-.323zm1.484-10.371h4.073a.74.74 0 010 1.48h-4.073a.74.74 0 010-1.48z"
            />
        </svg>
    );
};

export default IconVolumeDownFilled;
