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

const IconChevronLeftLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M14.889 4.117a.368.368 0 0 0-.538 0l-7.24 7.585a.413.413 0 0 0-.071.46c.019.05.048.099.088.14l6.008 6.296c.152.159.398.159.55 0a.422.422 0 0 0 0-.577l-5.765-6.04 6.968-7.3a.412.412 0 0 0 0-.564ZM13.866 19.41c0-.326.252-.59.563-.59.312 0 .564.264.564.59 0 .326-.252.59-.564.59a.577.577 0 0 1-.563-.59Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M14.387 4a.583.583 0 0 1 .442.198.644.644 0 0 1 0 .875l-7.356 6.99 7.318 6.865c.242.23.26.622.038.872a.584.584 0 0 1-.846.037L6.19 12.525a.645.645 0 0 1-.025-.886l.025-.025 7.794-7.46A.61.61 0 0 1 14.387 4"
                />
            </svg>
        );
    }
};

export default IconChevronLeftLight;
