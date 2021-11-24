/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconSportBallLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M17.767 18.93c-1.149-1.634-1.863-4.037-1.936-6.572h5.185a9.03 9.03 0 01-3.25 6.571zm-5.359 2.083v-8.652h2.6c.073 2.706.846 5.291 2.109 7.061a8.954 8.954 0 01-4.709 1.591zm0-18.028a8.907 8.907 0 014.594 1.51c-1.221 1.82-1.935 4.348-1.991 7.045h-2.603V2.985zm8.605 8.555h-5.182c.056-2.518.723-4.871 1.83-6.555a9.014 9.014 0 013.352 6.555zm-9.423 0H8.932c-.047-2.68-.753-5.207-1.969-7.03a8.995 8.995 0 014.627-1.525v8.555zm0 9.473a8.978 8.978 0 01-4.75-1.616c1.238-1.773 2.003-4.347 2.09-7.04h2.658v8.656h.002zm-8.607-8.652h5.126c-.082 2.51-.787 4.904-1.92 6.538a9.034 9.034 0 01-3.206-6.538zm3.316-7.35C7.414 6.7 8.064 9.039 8.111 11.54H2.985A9.043 9.043 0 016.3 5.01zM12 2.156c-5.431 0-9.843 4.412-9.843 9.843 0 5.429 4.412 9.844 9.843 9.844 5.432 0 9.844-4.415 9.844-9.844 0-5.431-4.412-9.843-9.844-9.843z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconSportBallLight;
