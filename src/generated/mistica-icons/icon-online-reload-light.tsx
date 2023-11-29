'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconOnlineReloadLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M10.542 14.234c.434.143.94.216 1.504.216 1.131 0 2.014-.289 2.622-.86.63-.594.952-1.482.952-2.633 0-.853-.175-1.559-.522-2.109l.316.087.038.01.235.065a.282.282 0 0 0 .345-.196.283.283 0 0 0-.196-.345l-.236-.064a17.132 17.132 0 0 0-.868-.23c-.409-.081-.709.115-.795.521a7.215 7.215 0 0 0-.087.566l-.01.067c-.022.164-.044.33-.069.448a.28.28 0 0 0 .549.118 7.56 7.56 0 0 0 .087-.563 8.23 8.23 0 0 1 .058-.408c.396.481.598 1.164.598 2.033 0 .991-.26 1.74-.776 2.224-.502.47-1.252.709-2.238.709-.505 0-.953-.065-1.33-.188a.281.281 0 0 0-.345.174.28.28 0 0 0 .168.358ZM8.897 12.942c-.35-.552-.526-1.26-.526-2.117 0-1.151.319-2.04.952-2.633.608-.571 1.49-.86 2.622-.86.563 0 1.067.073 1.504.213a.28.28 0 0 1-.174.532 4.321 4.321 0 0 0-1.33-.187c-.986 0-1.737.238-2.238.708-.516.485-.776 1.233-.776 2.224 0 .865.2 1.545.592 2.026.02-.118.039-.256.055-.393a7.26 7.26 0 0 1 .087-.56.279.279 0 0 1 .546.118c-.026.125-.05.302-.073.478l-.005.037a7.215 7.215 0 0 1-.087.566c-.07.339-.297.532-.614.532a.942.942 0 0 1-.176-.017c-.14-.028-.415-.103-.868-.23l-.236-.064a.279.279 0 1 1 .135-.542l.014.005.235.064.042.012.32.088Z"
            />
            <path
                fill={fillColor}
                d="M5.175 16.635H18.83c1.014 0 1.784-.295 2.291-.877.48-.546.72-1.353.72-2.398V8.422c0-1.045-.243-1.852-.72-2.398-.507-.58-1.277-.874-2.29-.874H5.174c-1.014 0-1.785.294-2.292.874-.479.546-.72 1.353-.72 2.398v4.938c0 1.045.241 1.852.72 2.4.507.58 1.278.875 2.292.875Zm-2.451-8.21c0-1.852.778-2.715 2.45-2.715H18.83c1.672 0 2.451.86 2.451 2.712v4.94c0 1.852-.779 2.715-2.45 2.715H5.174c-1.673 0-2.451-.863-2.451-2.714V8.425ZM21.553 18.853H2.435a.28.28 0 0 1-.28-.28.28.28 0 0 1 .28-.28h19.118a.28.28 0 0 1 .28.28.28.28 0 0 1-.28.28Z"
            />
        </svg>
    );
};

export default IconOnlineReloadLight;
