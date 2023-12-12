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

const IconLocationMapRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M14.935 2c2.124 0 3.901 1.623 4.309 3.773h2.284V22H2.48V5.773h8.145C11.033 3.623 12.81 2 14.935 2Zm2.93 4.715c0-1.768-1.313-3.208-2.93-3.208-1.618 0-2.931 1.44-2.931 3.208 0 1.193 1.608 4.208 2.93 6.353 1.323-2.15 2.931-5.16 2.931-6.353ZM3.943 10.246v10.247h6.424a4.016 4.016 0 0 1-.924-2.387c-.004-.038-.004-.072-.004-.106v-1.28c0-.947-.558-1.213-1.937-1.633-1.149-.348-2.574-.783-2.818-2.406-.005-.038-.01-.077-.01-.116v-1.13c0-.527-.3-.976-.731-1.189Zm9.894 10.247h6.232V7.285h-.787c-.441 2.498-3.377 7.043-3.733 7.594a.731.731 0 0 1-.61.334.731.731 0 0 1-.61-.334c-.36-.55-3.291-5.096-3.732-7.594H3.943v1.377c1.252.26 2.2 1.406 2.2 2.773v1.067c.112.575.637.793 1.776 1.14 1.262.382 2.987.909 2.987 3.078v1.13c0 1.817 1.52 2.643 2.931 2.643Zm3.025-14.155c0-1.096-.868-1.985-1.927-1.985-1.065 0-1.928.893-1.928 1.985s.863 1.986 1.928 1.986c1.064 0 1.927-.89 1.927-1.986Zm-2.757 0c0-.473.37-.855.83-.855.46 0 .83.382.83.855 0 .474-.37.855-.83.855a.841.841 0 0 1-.83-.855Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.636 21.692a.606.606 0 0 0 .182-.619l-2.291-8.02a.594.594 0 0 0-.337-.386.608.608 0 0 0-.512.011l-2.695 1.345-.168-.053c1.165-1.9 2.174-4.056 2.18-5.813.01-3.745-2.216-5.986-5.959-5.997h-.028C8.28 2.16 6.05 4.387 6.04 8.12c-.005 1.687.964 3.83 2.107 5.749l-.322.092-2.244-1.269a.601.601 0 0 0-.871.342l-2.527 8.025a.61.61 0 0 0 .171.63.61.61 0 0 0 .644.104l4.23-1.837 4.429 1.815c.027.01.058.02.09.028l.111.025a.58.58 0 0 0 .364-.025l4.605-1.846 4.168 1.837a.604.604 0 0 0 .642-.098M7.244 8.118c.011-3.07 1.7-4.76 4.762-4.76h.025c3.076.01 4.765 1.71 4.756 4.788-.008 2.84-3.395 7.429-4.795 9.064-1.521-1.764-4.757-6.378-4.748-9.092m13.061 12.048-2.938-1.294-.667-3.869 1.863-.93zm-16.577-.009 1.908-6.056 1.468.83-.457 3.957zm7.687-1.793-.014 1.998-3.544-1.454.437-3.83.516-.15c1.02 1.557 2.05 2.843 2.605 3.436m1.204-.047c.476-.53 1.496-1.773 2.521-3.3l.364.115.65 3.793-3.549 1.42zM10.92 7.79c0-.75.35-1.098 1.095-1.098.748 0 1.098.35 1.098 1.098 0 .748-.35 1.096-1.098 1.096-.748 0-1.095-.348-1.095-1.096m1.098 2.303c1.42 0 2.302-.883 2.302-2.303s-.882-2.302-2.302-2.302-2.303.882-2.303 2.302.883 2.303 2.303 2.303"
                />
            </svg>
        );
    }
};

export default IconLocationMapRegular;
