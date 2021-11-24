/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconExitFullscreenLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M21.256 15.167a.581.581 0 010 1.16h-4.932v4.932a.581.581 0 01-1.16 0v-5.512c0-.32.258-.58.577-.58h5.515zm-13.016 0a.58.58 0 01.58.577v5.512a.581.581 0 01-1.16 0v-4.932H2.73a.58.58 0 110-1.16c0 .003 5.51.003 5.51.003zm0-13.017a.58.58 0 01.58.577V8.24a.59.59 0 01-.578.58H2.73a.579.579 0 110-1.157h4.933V2.73c0-.322.257-.58.577-.58zm7.507 6.67a.579.579 0 01-.58-.578V2.73a.579.579 0 111.157 0v4.933h4.932a.581.581 0 010 1.16h-5.51v-.004z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconExitFullscreenLight;
