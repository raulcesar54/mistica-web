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

const IconEyeOffFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m17.648 16.924 3.673 3.856a.719.719 0 0 1 .004 1.004.654.654 0 0 1-.476.216.654.654 0 0 1-.476-.216L2.683 3.213a.717.717 0 0 1 0-1 .639.639 0 0 1 .952 0L7.58 6.317a9.837 9.837 0 0 1 4.423-1.036c4.08 0 7.757 2.536 9.422 6.428a.82.82 0 0 1 0 .572c-.85 1.927-2.141 3.535-3.776 4.643Zm-2.312-2.464 1.394 1.424a9.154 9.154 0 0 0 3.368-3.892c-1.497-3.211-4.625-5.283-8.062-5.283a8.445 8.445 0 0 0-3.402.716l1.021 1.072a3.819 3.819 0 0 1 2.347-.784c2.244 0 4.08 1.928 4.08 4.283 0 .893-.27 1.748-.746 2.464ZM12.002 17.28c.781 0 1.532-.104 2.278-.32l1.125 1.144a10.08 10.08 0 0 1-3.403.608c-4.046 0-7.757-2.536-9.422-6.431a.82.82 0 0 1 0-.572c.648-1.608 1.669-2.928 2.926-4l.953 1.036a9.797 9.797 0 0 0-2.519 3.252c1.497 3.211 4.625 5.283 8.062 5.283Z"
                />
                <path
                    fill={fillColor}
                    d="M13.397 16.028c-.442.144-.884.252-1.395.252-2.244 0-4.08-1.928-4.084-4.284 0-.536.103-1 .24-1.463l5.239 5.495Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M16.774 15.984c1.65-.795 3.286-2 4.894-3.608a.562.562 0 0 0 0-.792c-3.132-3.138-6.376-4.726-9.642-4.726-1.235 0-2.468.227-3.694.68L3.13 2.34a.558.558 0 0 0-.79 0 .561.561 0 0 0 0 .793l4.882 4.882c-1.652.795-3.288 2-4.896 3.608a.574.574 0 0 0-.165.398.55.55 0 0 0 .165.394c3.134 3.135 6.378 4.723 9.644 4.723 1.236 0 2.468-.227 3.695-.68l5.199 5.198a.558.558 0 0 0 .79 0 .561.561 0 0 0 0-.792zm-3.468-3.468L11.47 10.68c.16-.062.322-.067.504-.067.846 0 1.392.546 1.392 1.395 0 .17-.005.341-.059.51m1.079 1.079c.19-.41.285-.908.285-1.496 0-.955-.252-1.68-.75-2.154-.474-.451-1.168-.678-2.065-.678-.588 0-1.092.098-1.501.294l-.622-.622c.572-.341 1.283-.515 2.123-.515 2.325 0 3.659 1.339 3.659 3.675-.003.838-.174 1.546-.507 2.118z"
                />
            </svg>
        );
    }
};

export default IconEyeOffFilled;
