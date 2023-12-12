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

const IconBookmarkLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M7.141 2.156h9.703c.717 0 1.3.577 1.305 1.28v17.115c0 .493-.277.936-.725 1.154a1.303 1.303 0 0 1-1.37-.132l-3.731-3.672a.464.464 0 0 0-.644.006L7.976 21.54c-.437.336-.961.387-1.41.168a1.277 1.277 0 0 1-.725-1.154V3.439c0-.706.583-1.283 1.3-1.283m9.9 18.799a.44.44 0 0 0 .254-.401h.003V3.442a.448.448 0 0 0-.451-.445H7.144a.448.448 0 0 0-.451.445v17.115c0 .174.092.322.252.4a.452.452 0 0 0 .473-.044l3.664-3.603c.255-.249.591-.372.922-.372.336 0 .666.126.918.372l3.687 3.636c.095.067.274.087.431.009"
            />
        </svg>
    );
};

export default IconBookmarkLight;
