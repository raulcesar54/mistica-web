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

const IconChevronRightLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M9.111 4.117a.368.368 0 01.538 0l7.24 7.585c.118.124.142.31.071.46a.41.41 0 01-.088.14l-6.008 6.296a.377.377 0 01-.55 0 .422.422 0 010-.577l5.765-6.04-6.968-7.3a.412.412 0 010-.564zm1.023 15.293a.577.577 0 00-.563-.59.577.577 0 00-.564.59c0 .326.252.59.564.59a.577.577 0 00.563-.59z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M9.613 20a.583.583 0 01-.442-.198.644.644 0 010-.875l7.356-6.99-7.318-6.865A.635.635 0 019.17 4.2a.585.585 0 01.846-.037l7.794 7.312a.645.645 0 01.025.886l-.024.025-7.795 7.46a.61.61 0 01-.404.154z"
                />
            </svg>
        );
    }
};

export default IconChevronRightLight;
