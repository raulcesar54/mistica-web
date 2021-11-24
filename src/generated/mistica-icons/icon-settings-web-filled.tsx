/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconSettingsWebFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M11.843 14.884c1.053 0 1.658-.583 1.658-1.597s-.605-1.594-1.658-1.594-1.658.58-1.658 1.594c0 1.014.605 1.597 1.658 1.597zm3.577-2.56c.387 0 .698.3.698.672v.585c0 .37-.311.673-.698.673h-.501c-.04.165-.09.319-.151.464l.406.393c.266.252.274.67.025.935l-.025.025-.446.429a.725.725 0 01-.994 0l-.406-.395a3.53 3.53 0 01-.485.149v.481c0 .37-.314.673-.697.673h-.608a.685.685 0 01-.698-.673v-.481a3.228 3.228 0 01-.484-.149l-.406.395a.742.742 0 01-.995 0l-.445-.431a.666.666 0 01-.02-.939l.02-.02.403-.386a3.06 3.06 0 01-.148-.47h-.502a.685.685 0 01-.697-.673v-.585c0-.37.31-.672.697-.672h.502c.033-.138.08-.309.148-.471l-.403-.39a.654.654 0 01-.205-.478c0-.185.073-.356.208-.482l.442-.429a.742.742 0 01.995 0l.406.392c.151-.058.313-.106.484-.145v-.482c0-.37.314-.672.698-.672h.608c.386 0 .697.302.697.672v.482c.171.039.328.084.485.148l.406-.395a.72.72 0 01.994 0l.446.429c.263.252.274.67.022.935-.008.009-.014.017-.022.023l-.41.392c.062.146.113.302.152.468.003.003.504.003.504.003zm4.838 5.803a.22.22 0 00.224-.215V8.248H3.204v9.664c0 .117.101.215.225.215h16.829zM5.19 6.732a.545.545 0 00-.554-.537h-.003a.55.55 0 00-.56.535v.002c0 .297.25.538.557.538.311 0 .56-.24.56-.538zm1.678 0a.548.548 0 00-.557-.537h-.003a.548.548 0 00-.557.537c0 .297.249.538.557.538a.548.548 0 00.56-.538zm1.678 0a.548.548 0 00-.557-.537.55.55 0 00-.56.535v.002c0 .297.249.538.557.538a.548.548 0 00.56-.538zm11.712-2.207c.787 0 1.428.62 1.428 1.378v12.009c0 .759-.641 1.378-1.428 1.378H3.428c-.79 0-1.428-.616-1.428-1.375V5.903c0-.759.639-1.378 1.429-1.378h16.829z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconSettingsWebFilled;
