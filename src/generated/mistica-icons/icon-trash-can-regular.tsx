'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconTrashCanRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M9.534 7.355a.713.713 0 0 0-.707.716v10.354c0 .392.316.716.707.716a.71.71 0 0 0 .706-.716V8.07a.716.716 0 0 0-.707-.716ZM13.763 8.07v10.355c0 .392.316.716.707.716a.71.71 0 0 0 .707-.716V8.07a.713.713 0 0 0-.707-.716.713.713 0 0 0-.707.716Z"
                />
                <path
                    fill={fillColor}
                    d="M15.177 4.5h5.64a.713.713 0 0 1 .004 1.427h-1.41v13.93c0 1.18-.952 2.143-2.117 2.143H6.714c-1.165 0-2.117-.964-2.117-2.144V5.931h-1.41a.71.71 0 0 1-.707-.716c0-.396.32-.715.707-.715h5.64v-.356c0-1.18.951-2.144 2.116-2.144h2.117c1.165 0 2.117.964 2.117 2.144V4.5Zm-4.23-1.072a.713.713 0 0 0-.707.716h.004V4.5h3.527v-.356a.713.713 0 0 0-.707-.716h-2.117Zm7.05 16.424V5.927H6.007v13.925c0 .396.32.716.707.716H17.29a.713.713 0 0 0 .707-.716Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M10 10.25a.75.75 0 0 1 .743.648l.007.102v6a.75.75 0 0 1-1.493.102L9.25 17v-6a.75.75 0 0 1 .75-.75M14.743 10.898A.75.75 0 0 0 13.25 11v6l.007.102A.75.75 0 0 0 14.75 17v-6z"
                />
                <path
                    fill={fillColor}
                    d="M16.745 4.447C16.667 3.23 15.702 2.25 14.5 2.25h-5l-.155.006C8.165 2.339 7.25 3.37 7.25 4.607V6.25H3l-.102.007A.75.75 0 0 0 3 7.75h1.25V18.5a3.25 3.25 0 0 0 3.25 3.25h9a3.25 3.25 0 0 0 3.25-3.25V7.75H21l.102-.007A.75.75 0 0 0 21 6.25h-4.25V4.607zM15.25 6.25h-6.5V4.607l.006-.11c.048-.43.373-.747.744-.747h5l.092.006c.361.052.658.404.658.851zm-9.5 1.5h12.5V18.5a1.75 1.75 0 0 1-1.75 1.75h-9l-.144-.006A1.75 1.75 0 0 1 5.75 18.5z"
                />
            </svg>
        );
    }
};

export default IconTrashCanRegular;
