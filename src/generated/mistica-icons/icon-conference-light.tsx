/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconConferenceLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M14.241 2.156c.216 0 .426.087.58.241l.966.964a.811.811 0 01.241.577.82.82 0 01-.235.568l.678.675a.41.41 0 01.12.289v1.087h2.804c.454 0 .82.367.824.818v1.364a.82.82 0 01-.821.818h-.782v1.252a.818.818 0 01-.82.818h-1.297v7.37h1.274a.82.82 0 01.821.818v1.212a.818.818 0 01-.82.818H6.26a.82.82 0 01-.821-.818v-1.212c0-.454.367-.818.82-.818h1.275v-7.37H6.238a.82.82 0 01-.82-.818V9.557h-.785a.821.821 0 01-.82-.818V7.375c0-.454.366-.818.82-.818h2.801V5.47a.4.4 0 01.12-.289l.673-.669a.814.814 0 01.003-1.151l.966-.964a.825.825 0 011.163 0l.588.588c.32.32.32.838 0 1.157l-.966.961a.819.819 0 01-1.16 0l-.011-.011-.552.549v.919h7.512v-.92l-.557-.554-.017.017a.819.819 0 01-1.16 0l-.966-.96a.818.818 0 010-1.158l.591-.588a.818.818 0 01.58-.24zm3.53 17.656H6.257v1.213H17.77v-1.213zm-2.096-8.185H8.353v7.367h7.322v-7.367zm2.118-2.073H6.238v1.252h11.555V9.554zm1.602-2.18H4.633V8.74H6.22c.008 0 .014-.003.02-.003h11.554c.005 0 .011.003.017.003h1.585V7.375zm-9.616-4.4l-.966.964.588.585.966-.96-.588-.589zm4.46-.003l-.589.589.966.96.589-.585-.967-.964z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconConferenceLight;
