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

const IconChipSimCardFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M8.546 10.78h6.877c.071 0 .14.108.14.144v7.026H8.401v-7.026c0-.036.108-.143.144-.143z"
                />
                <path
                    fill={fillColor}
                    d="M18.929 6.338l-3.686-3.69A2.226 2.226 0 0013.7 2H6.433C5.359 2 4.5 2.932 4.5 4.115V22h15V7.734c-.032-.572-.212-1.04-.571-1.396zM7.33 19.025v-8.1c0-.644.572-1.22 1.219-1.22h6.909c.642 0 1.218.572 1.218 1.22v8.1H7.33z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M8 13v-2h2v2H8zm3 0v-2h2v2h-2zm3-2v2h2v-2h-2zm-6 5v-2h8v2H8zm0 3v-2h2v2H8zm5 0h-2v-2h2v2zm3 0h-2v-2h2v2z"
                />
                <path
                    fill={fillColor}
                    d="M19 20V4a2 2 0 00-2-2h-6.793a.5.5 0 00-.353.146L5.146 6.854A.5.5 0 005 7.207V20a2 2 0 002 2h10a2 2 0 002-2zM7.5 10h9a.5.5 0 01.5.5v9a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5z"
                />
            </svg>
        );
    }
};

export default IconChipSimCardFilled;
