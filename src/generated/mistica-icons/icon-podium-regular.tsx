/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant, useTheme} from '../..';

type Props = {
    color?: string;
    size?: number;
};

const IconPodiumRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M13.39 7.998l.002.002s.003 0 .003-.002l-.193-1.334a.664.664 0 01.193-.574l.877-.89-1.244-.267a.65.65 0 01-.47-.344L12 3.406l-.585 1.169a.65.65 0 01-.516.36l-1.196.183.888.986c.138.14.208.364.174.557l-.21 1.283 1.129-.554a.646.646 0 01.622.011l1.084.597zM9.507 6.754l-.683-.695a1.28 1.28 0 01-.3-1.308c.149-.454.532-.779.997-.849l.922-.14.417-.882a1.238 1.238 0 012.25 0l.42.885.921.137c.465.07.85.395 1 .849.152.462.037.964-.302 1.308l-.684.695.163.991c.078.49-.12.97-.518 1.253-.381.268-.897.3-1.306.075l-.818-.448-.815.445a1.21 1.21 0 01-.59.154c-.253 0-.5-.078-.715-.23a1.275 1.275 0 01-.518-1.251l.16-.99zM15.692 20.6h4.927v-3.165h-4.927V20.6zM3.387 15.056V20.6H8.31v-5.544H3.387zm11.078-3.036H9.538v2.686c0 .009.003.011.003.02v5.893h4.924v-8.6zm.157 9.83H3.232c-.59 0-1.072-.424-1.072-.92v-6.204c0-.555.557-.9 1.073-.9h5.081v-2.008c0-.546.501-1.028 1.07-1.028h5.238c.572 0 1.073.48 1.073 1.028v4.387h5.081c.622 0 1.07.336 1.07.798v4.025c0 .47-.442.818-1.073.818h-6.15v.003z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconPodiumRegular;