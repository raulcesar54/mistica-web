/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconCheckedLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M11.998 2C17.513 2 21.996 6.488 22 11.996c0 1.892-.536 3.74-1.544 5.332a.36.36 0 01-.608-.384 9.261 9.261 0 001.432-4.952c0-5.12-4.163-9.284-9.282-9.284s-9.286 4.168-9.286 9.288 4.163 9.284 9.282 9.284a9.257 9.257 0 004.951-1.432.36.36 0 01.496.112.353.353 0 01-.112.496A9.97 9.97 0 0111.998 22C6.488 22 2 17.512 2 12S6.487 2 11.998 2zm6.79 16.072a.716.716 0 110 1.432.716.716 0 010-1.432zM17.907 8.1a.336.336 0 010 .466L10.928 16l-3.834-4.267a.336.336 0 010-.467.292.292 0 01.44 0l3.394 3.732L17.466 8.1a.292.292 0 01.44 0z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M11.998 1c3.511 0 6.232.908 8.093 2.703C22.02 5.563 23 8.356 23 12.002 23.003 19.195 19.198 23 11.998 23 4.805 23 1 19.198 1 12.002 1 4.805 4.802 1 11.998 1zm0 .626c-6.88 0-10.372 3.492-10.372 10.376 0 6.88 3.489 10.372 10.372 10.372 6.887 0 10.376-3.489 10.376-10.372.003-6.887-3.489-10.376-10.376-10.376zm5.39 5.816c.128.1.153.288.053.416l-6.864 8.872a.301.301 0 01-.235.116.292.292 0 01-.235-.116l-2.89-3.776a.296.296 0 01.056-.417.296.296 0 01.416.056l2.653 3.467 6.63-8.565a.298.298 0 01.416-.053z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconCheckedLight;
