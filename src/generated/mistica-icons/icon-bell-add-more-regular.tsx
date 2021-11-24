/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconBellAddMoreRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M5.832 17.577h13.871c-1.454-2.092-1.3-4.9-1.291-5.036V8.779c0-1.843-.518-3.258-1.535-4.2-1.633-1.512-4.045-1.366-4.07-1.366-.017 0-.023-.009-.042-.009-.014 0-.031.009-.04.009-.154-.009-3.515-.193-4.952 2.524 1.177.042 5.165.549 5.165 5.431 0 4.994-4.176 5.39-5.22 5.403h-.505a5.67 5.67 0 01-.787-.064 6.11 6.11 0 01-.594 1.07zm8.333 2.395c.317-.353.423-.838.448-1.19h-3.697c.034.352.132.845.457 1.198.3.34.753.499 1.397.499.633 0 1.087-.16 1.395-.507zM3.218 11.134c0 3.636 2.519 4.216 4.02 4.23h.457c1.51-.022 4.028-.61 4.028-4.199 0-3.594-2.54-4.19-4.054-4.23H7.19c-1.487.009-3.972.572-3.972 4.2zm18.25 6.58c.196.16.269.434.187.678a.606.606 0 01-.577.395h-5.24c-.04.546-.194 1.359-.762 1.995-.544.602-1.325.907-2.306.907-.991 0-1.77-.305-2.313-.907-.569-.636-.723-1.449-.757-1.995H4.462a.602.602 0 01-.392-1.07c.462-.37.846-.885 1.146-1.496C3.706 15.678 2 14.367 2 11.134c0-4.198 2.843-5.148 4.417-5.347 1.535-3.885 5.93-3.807 6.353-3.781.373-.017 3.014-.09 4.93 1.68 1.283 1.182 1.933 2.897 1.933 5.093v3.804c0 .061-.188 3.495 1.835 5.131zM8.076 13.846a.607.607 0 01-.611.602.608.608 0 01-.608-.602v-2.107H4.742a.604.604 0 110-1.207H6.86V8.457a.606.606 0 01.608-.603c.336 0 .61.27.61.603v2.075h2.12c.337 0 .609.272.609.605a.61.61 0 01-.608.605h-2.12v2.104h-.003z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconBellAddMoreRegular;
