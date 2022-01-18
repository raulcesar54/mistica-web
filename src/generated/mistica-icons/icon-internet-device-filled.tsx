/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconInternetDeviceFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M11.974 5.393H4v-.179C4 3.44 5.388 2 7.097 2h6.194c.85 0 1.616.357 2.176.933-1.507.192-2.793 1.134-3.493 2.46zm4.414 12.144v-5.02c-.115.009-.23.018-.344.018-2.564 0-4.648-2.158-4.648-4.824 0-.434.062-.85.163-1.248H4v11.074h12.388zM4 18.607v.179C4 20.56 5.388 22 7.097 22h6.194c1.709 0 3.097-1.44 3.097-3.214v-.179H4zM20 7.711c0 2.263-1.775 4.106-3.956 4.106-2.18 0-3.956-1.843-3.956-4.106s1.775-4.106 3.956-4.106C18.224 3.605 20 5.448 20 7.71zm-2.621-2.698c.211.622.33 1.386.37 2.163h1.172a3.042 3.042 0 00-1.542-2.163zm-.66 3.238H15.37c.08 1.513.48 2.354.674 2.492.194-.138.595-.979.674-2.492zm0-1.075c-.08-1.513-.481-2.355-.675-2.492-.194.133-.595.979-.674 2.492h1.348zm-3.552 0h1.172c.04-.773.159-1.54.37-2.163a3.042 3.042 0 00-1.542 2.163zm1.542 3.237c-.211-.622-.33-1.385-.37-2.162h-1.172a3.042 3.042 0 001.542 2.162zm4.212-2.162h-1.172c-.04.772-.159 1.54-.37 2.162a3.042 3.042 0 001.542-2.162z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconInternetDeviceFilled;