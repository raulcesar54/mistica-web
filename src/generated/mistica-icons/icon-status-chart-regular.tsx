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

const IconStatusChartRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M16.063 22H20.5V2h-4.437v20zm2.957-1.566h-1.476V3.566h1.476v16.868zM14.218 22H9.782V8.667h4.436V22zm-1.48-1.566V10.233h-1.476v10.2h1.476zM7.937 22H3.5v-7.646h4.437V22zm-1.48-1.566v-4.508H4.98v4.508h1.475z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.96 6.553a1.94 1.94 0 013.882 0 1.938 1.938 0 01-1.938 1.936 1.9 1.9 0 01-.423-.05l-2.398 4.013c.266.334.432.748.432 1.205v.002a1.941 1.941 0 01-3.88-.003c0-.03.004-.06.009-.09a.73.73 0 00.008-.069L9.526 11.69c-.356.387-.86.63-1.423.63a1.83 1.83 0 01-.345-.043l-.008-.001-2.21 3.896c.305.342.496.784.496 1.277a1.943 1.943 0 01-3.885 0 1.94 1.94 0 011.94-1.935c.121 0 .241.014.36.036l2.206-3.89a1.924 1.924 0 01-.495-1.275 1.94 1.94 0 013.88 0 .741.741 0 01-.01.107 1.48 1.48 0 00-.008.053l4.126 1.806a1.93 1.93 0 011.423-.63c.152 0 .3.02.448.056l2.39-4a1.907 1.907 0 01-.451-1.224zm1.941.683a.685.685 0 10-.003-1.37.685.685 0 00.003 1.37zM8.1 11.068a.685.685 0 10.047-1.37.685.685 0 00-.047 1.37z"
                />
            </svg>
        );
    }
};

export default IconStatusChartRegular;
