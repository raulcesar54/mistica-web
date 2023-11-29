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

const IconSmartWifiLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.745 10.21a1.172 1.172 0 0 0-.255-1.286l-6.24-6.4c-.485-.497-1.404-.497-1.889 0L7.112 8.925l-.008.01-.001.002-.002.002H4.57c-.787 0-1.375.21-1.798.642-.417.423-.622 1.008-.622 1.79v8.033c0 .799.208 1.393.628 1.813.417.417 1.002.619 1.792.619h3.992c.787 0 1.375-.202 1.793-.62.423-.42.627-1.013.627-1.812v-1.543h7.815c.712 0 1.289-.549 1.289-1.224v-5.656h.46c.531 0 1.002-.302 1.198-.773Zm-.762-.323c-.053.126-.193.263-.437.266h-.874a.413.413 0 0 0-.412.415v6.07c0 .216-.207.392-.462.392h-7.815V11.37c0-.793-.202-1.38-.619-1.804-.417-.423-1.005-.627-1.798-.627h-.314l5.695-5.835c.176-.182.532-.182.708 0l6.247 6.403c.146.152.115.303.081.381ZM10.16 19.403c0 .566-.126.966-.384 1.224-.255.255-.65.378-1.21.378H4.57c-.56 0-.955-.126-1.21-.378-.257-.258-.383-.659-.383-1.224v-8.037c0-.549.126-.944.383-1.207.26-.263.656-.392 1.21-.392h3.995c.56 0 .958.126 1.213.383.255.261.38.659.38 1.219v8.034Zm-3.591-.362c.425 0 .677.255.677.684 0 .21-.058.375-.176.496-.118.123-.291.187-.501.187-.208 0-.381-.064-.499-.187-.118-.12-.176-.289-.176-.496-.003-.426.249-.684.675-.684Zm8.114-5.616c0-.095 0-.204-.187-.207h-.048c-.162 0-.176.081-.176.204 0 .12.014.205.185.207.226-.005.226-.106.226-.204Zm-.16-1.036c.485.008.987.333.987 1.036 0 .7-.499 1.025-.995 1.034-.568-.006-1.07-.33-1.07-1.04 0-.708.502-1.03.998-1.033a.273.273 0 0 0 .04.001c.018 0 .037 0 .04.002Zm3.833-3.325c-1.544-1.74-3.832-1.622-3.913-1.617-2.465.026-3.785 1.46-3.838 1.521a.416.416 0 0 0 .028.586.41.41 0 0 0 .583-.025c.05-.054 1.154-1.227 3.255-1.25h.002c.08-.002 2.017-.065 3.266 1.34a.413.413 0 0 0 .583.03.416.416 0 0 0 .034-.585Zm-3.91.028h.01c.16-.003 1.916-.03 3.054 1.249a.416.416 0 0 1-.034.586.41.41 0 0 1-.582-.034c-.908-1.023-2.41-.975-2.426-.972-1.502.017-2.398.98-2.406.991a.41.41 0 0 1-.306.135.42.42 0 0 1-.277-.107.418.418 0 0 1-.03-.585l.002-.003c.071-.076 1.156-1.238 2.994-1.26Zm2.061 2.524c-.79-.888-2.017-.846-2.053-.84-1.241.013-1.975.814-2.003.848a.415.415 0 0 0 .028.585.42.42 0 0 0 .277.107.41.41 0 0 0 .306-.135c.02-.022.532-.565 1.414-.577.017-.008.894-.022 1.415.563a.413.413 0 1 0 .616-.551Z"
            />
        </svg>
    );
};

export default IconSmartWifiLight;
