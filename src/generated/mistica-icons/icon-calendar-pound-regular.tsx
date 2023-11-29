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

const IconCalendarPoundRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M16.647 4.14h3.213c1.18 0 2.145.964 2.14 2.143V22H2V6.283C2 5.1 2.965 4.14 4.144 4.14h3.218V2.713a.714.714 0 0 1 1.427 0V4.14h6.432V2.713a.714.714 0 0 1 1.426 0V4.14ZM3.43 20.57h17.143V10.21H3.43v10.36ZM20.564 8.783v-2.5a.714.714 0 0 0-.713-.714h-3.213v1.427a.714.714 0 0 1-1.427 0V5.57H8.784v1.427a.714.714 0 0 1-1.426 0V5.57H4.144a.714.714 0 0 0-.713.713v2.501h17.133ZM9.858 18.069a.714.714 0 0 0-.004 1.426h4.466a.714.714 0 0 0 0-1.426h-2.715c.022-.115.036-.234.036-.357v-1.426h1.426a.714.714 0 0 0 0-1.427h-1.426v-1.248a.893.893 0 0 1 1.454-.694.717.717 0 0 0 1.006-.106.717.717 0 0 0-.106-1.005 2.319 2.319 0 0 0-1.458-.517 2.326 2.326 0 0 0-2.322 2.322v1.248a.714.714 0 0 0 0 1.427v1.426a.351.351 0 0 1-.357.357Z"
            />
        </svg>
    );
};

export default IconCalendarPoundRegular;
