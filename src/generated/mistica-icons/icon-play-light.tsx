'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconPlayLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M4.318 21.748c.307.18.614.252.955.252.306 0 .647-.072.92-.216l10.28-6.217a.375.375 0 0 0 .136-.503c-.103-.18-.307-.252-.478-.144L5.852 21.176c-.375.18-.818.18-1.193-.035a.964.964 0 0 1-.477-.828V3.786c0-.36.204-.684.545-.9.375-.216.784-.252 1.125-.036l13.476 8.224c.273.18.443.468.477.791.034.36-.068.684-.306.9-.137.144-.17.36-.035.504.137.144.341.18.478.036a1.77 1.77 0 0 0 .545-1.508 1.693 1.693 0 0 0-.818-1.33L6.155 2.238c-.542-.324-1.223-.324-1.803.036-.511.32-.852.895-.852 1.507v16.53c0 .573.307 1.112.818 1.436Z"
                />
                <path
                    fill={fillColor}
                    d="M18.139 14.744c.376 0 .682-.322.682-.72 0-.397-.306-.72-.682-.72-.377 0-.682.323-.682.72 0 .398.305.72.682.72Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M5.647 2.694a.7.7 0 0 0-1.047.608v16.554a.7.7 0 0 0 1.047.607l14.485-8.277a.7.7 0 0 0 0-1.215L5.647 2.694ZM4 3.302a1.3 1.3 0 0 1 1.945-1.129l14.484 8.277a1.3 1.3 0 0 1 0 2.258L5.945 20.983A1.3 1.3 0 0 1 4 19.856V3.302Z"
                />
            </svg>
        );
    }
};

export default IconPlayLight;
