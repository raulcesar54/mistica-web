/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconFileJpegLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M11.98 13.265c0-1.014.535-1.703 1.642-1.703.322 0 .706.068.916.157l-.095.54a2.891 2.891 0 00-.768-.117c-.655 0-.924.39-.924 1.096 0 .364.047.663.19.862.118.165.314.26.628.26.117 0 .28-.013.395-.033v-.683h-.457v-.533h1.19v1.656a4.526 4.526 0 01-1.156.165c-1.166.003-1.56-.639-1.56-1.667zm-7.79 1.062l.054.566c.232.03.339.042.498.042.367 0 .603-.067.751-.21.165-.165.232-.384.232-.787v-2.314h-.739v2.297c0 .361-.098.445-.412.445-.07 0-.235-.01-.384-.039zm3.34-2.703H6.416v3.246h.74v-1.12h.52c.427 0 .72-.1.911-.314.16-.179.241-.44.241-.787 0-.347-.084-.596-.26-.759-.21-.196-.533-.266-1.04-.266zm-.012 1.569h-.367v-1.034H7.5c.23 0 .367.034.456.115.084.081.123.207.123.384 0 .187-.044.327-.128.411-.096.09-.194.124-.432.124zm4.022-1.569H9.35v3.24h2.216v-.534H10.09v-.83h1.114v-.554H10.09v-.787h1.395l.056-.535z"
            />
            <path
                fill={fillColor}
                d="M21.804 7.907c.022.05.034.104.034.162v12.563c0 .653-.564 1.205-1.23 1.205H8.17c-.656 0-1.233-.563-1.233-1.205l.037-3.036H4.417a2.27 2.27 0 01-2.266-2.269v-4.18A2.27 2.27 0 014.417 8.88h2.521V3.36c0-.63.586-1.205 1.233-1.205h7.571c.18 0 .35.07.482.194l5.409 5.238c.09.084.14.199.17.319zm-1.196 13.106c.207 0 .403-.185.403-.378V8.755h-2.566c-.98 0-1.826-.316-2.442-.915-.622-.603-.953-1.429-.953-2.384V2.983H8.168c-.185 0-.406.204-.406.378v5.518h6.706a2.27 2.27 0 012.266 2.269v4.18a2.27 2.27 0 01-2.266 2.268H7.8l-.036 3.042c0 .182.204.373.406.373h12.437v.002zm-17.63-5.686c0 .796.644 1.443 1.44 1.443H14.47c.792 0 1.44-.647 1.44-1.443v-4.18c0-.795-.645-1.442-1.44-1.442H4.417c-.792 0-1.44.647-1.44 1.443v4.18zM15.877 3.162v2.291c0 .728.24 1.348.7 1.79.462.445 1.11.684 1.868.684h2.35l-4.918-4.765z"
            />
        </svg>
    );
};

export default IconFileJpegLight;
