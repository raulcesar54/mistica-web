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

const IconPuzzleFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M16.177 21.43H3.61c-.801 0-1.454-.669-1.454-1.49v-2.846a.65.65 0 0 1 .207-.476.591.591 0 0 1 .485-.154c.12.014.224.023.297.025h.036c.053 0 .112 0 .163-.005.179-.003.495-.017.857-.14.991-.317 1.49-1.098 1.49-2.33 0-1.236-.496-2.02-1.479-2.328-.387-.138-.728-.152-.84-.157h-.266c-.056.002-.152.005-.267.02a.603.603 0 0 1-.478-.158.637.637 0 0 1-.205-.473v-2.54c0-.824.653-1.49 1.454-1.49h2.655c-.02-.191-.03-.387-.03-.59 0-2.719 1.803-3.71 3.49-3.733h.291c1.714.048 3.532 1.056 3.532 3.75 0 .197-.011.387-.03.57h2.663c.799 0 1.446.669 1.446 1.49v1.907a3.44 3.44 0 0 1 .403-.022h.3c1.697.05 3.512 1.061 3.512 3.75 0 2.72-1.893 3.712-3.512 3.734a3.316 3.316 0 0 1-.703-.022v2.216c0 .823-.65 1.493-1.449 1.493"
            />
        </svg>
    );
};

export default IconPuzzleFilled;
