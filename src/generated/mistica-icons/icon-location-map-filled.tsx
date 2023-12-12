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

const IconLocationMapFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M19.314 6.486c0 2.305-3.534 7.733-3.938 8.345a.54.54 0 0 1-.91 0c-.402-.612-3.937-6.04-3.937-8.345C10.529 3.97 12.46 2 14.926 2s4.388 1.97 4.388 4.486Zm-3.567 0c0 .464-.37.842-.825.842a.835.835 0 0 1-.825-.842c0-.464.37-.842.825-.842.454 0 .825.378.825.842Zm-.825-1.96c-1.06 0-1.922.88-1.922 1.96s.862 1.96 1.922 1.96 1.922-.88 1.922-1.96-.863-1.96-1.922-1.96ZM9.615 18.111c-.005-.029-.005-.053-.005-.081v-1.268c0-1.114-.745-1.396-2.067-1.793-1.097-.33-2.462-.741-2.687-2.229-.004-.028-.004-.057-.004-.086v-1.119c0-.822-.657-1.492-1.463-1.492H2.47V22h8.907c-1.012-1.004-1.692-2.51-1.762-3.888ZM20.05 6.486c0-.187-.009-.378-.028-.56h1.496V21.99h-7.693c-1.646 0-3.113-2.295-3.113-4.108v-1.119c0-2.008-1.65-2.506-2.854-2.869-1.097-.33-1.778-.57-1.91-1.287v-1.076c0-1.444-1.148-2.616-2.564-2.616H2.47V5.926h7.351a5.447 5.447 0 0 0-.028.56c0 .43.197 2.893 4.065 8.761.239.364.637.579 1.064.579.426 0 .825-.215 1.064-.579 3.868-5.863 4.064-8.326 4.064-8.761Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m19.527 13.049 2.294 8.025a.605.605 0 0 1-.826.717l-4.169-1.838-4.605 1.843a.6.6 0 0 1-.364.026l-.112-.026a.476.476 0 0 1-.09-.028l-4.428-1.815-4.23 1.838a.605.605 0 0 1-.815-.737L4.71 13.03a.599.599 0 0 1 .87-.342l2.245 1.27.322-.093c-1.143-1.92-2.112-4.062-2.107-5.748.014-3.734 2.244-5.961 5.97-5.961h.027c3.743.011 5.97 2.252 5.958 5.994-.005 1.757-1.014 3.914-2.179 5.816l.168.053 2.695-1.345a.6.6 0 0 1 .849.375m-7.493-3.933c.893 0 1.308-.418 1.305-1.306 0-.89-.415-1.305-1.305-1.305-.891 0-1.306.415-1.306 1.305 0 .891.415 1.306 1.306 1.306m4.672 5.893.664 3.869 2.94 1.294-1.741-6.093zm-4.084 3.311-.014 2.028 3.546-1.423-.647-3.792-.364-.118c-1.028 1.532-2.045 2.773-2.521 3.305m-4.765.591 3.544 1.454.014-1.994c-.555-.597-1.586-1.883-2.605-3.44l-.516.151zm-1.21-.017.457-3.957-1.468-.83-1.908 6.056z"
                />
            </svg>
        );
    }
};

export default IconLocationMapFilled;
