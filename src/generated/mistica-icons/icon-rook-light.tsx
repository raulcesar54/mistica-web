/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconRookLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M9.348 2.156c.235 0 .425.188.425.42V3.73h.905V2.576c0-.232.19-.42.426-.42h1.627c.236 0 .426.188.426.42v1.227l.936-.014V2.576c0-.232.19-.42.425-.42h1.956c.235 0 .425.188.425.42v3.659c0 .232-.19.42-.425.42h-1.275v1.807c0 .232-.19.42-.426.42h-.434l.813 6.944c.005.05 0 .098-.014.145h.689c.235 0 .425.188.425.42v1.925h1.02c.238 0 .429.188.429.426v2.689c0 .232-.19.42-.426.42H6.645a.423.423 0 01-.426-.42v-2.69c0-.232.19-.42.426-.42h1.02v-1.924c0-.232.19-.42.425-.42h.781a.417.417 0 01-.01-.146l.812-6.944h-.437a.423.423 0 01-.426-.42V6.66H7.47a.423.423 0 01-.425-.42V2.576c0-.232.19-.42.426-.42zm7.498 17H7.07v1.849h9.776v-1.849zm-1.445-2.344H8.518v1.504h6.883v-1.504zm-1.922-7.927h-2.947l-.823 7.039c-.003.017-.011.033-.017.05h4.628c-.006-.017-.014-.03-.017-.05l-.824-7.04zm.869-2.225H9.664v1.387h4.684V6.66zm1.694-3.669h-1.1v1.207c0 .23-.188.418-.42.42l-1.79.028a.45.45 0 01-.306-.12.417.417 0 01-.126-.3V2.994h-.776v1.151c0 .233-.19.42-.426.42H9.342a.423.423 0 01-.426-.42V2.994H7.894v2.823h8.148V2.991z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconRookLight;
