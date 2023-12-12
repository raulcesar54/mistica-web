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

const IconConferenceLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M19.5 12.71c.393 0 .714.321.714.714a.716.716 0 0 1-.714.714.716.716 0 0 1-.714-.714c0-.393.321-.714.714-.714Zm2.143-8.215h-9.286V2.71c0-.215-.143-.357-.357-.357s-.357.142-.357.357v1.785H2.357c-.214 0-.357.143-.357.357 0 .215.143.358.357.358h1.786v10.714h7L6.036 21.03a.345.345 0 0 0 0 .5.386.386 0 0 0 .25.107.386.386 0 0 0 .25-.107l5.107-5.107v4.857c0 .214.143.357.357.357s.357-.143.357-.357v-4.857l5.107 5.107a.386.386 0 0 0 .25.107.386.386 0 0 0 .25-.107.345.345 0 0 0 0-.5l-5.107-5.107H19.5c.214 0 .357-.143.357-.357 0-.215-.143-.357-.357-.357H4.857v-10h14.286v6.071c0 .214.143.357.357.357s.357-.143.357-.357V5.21h1.786c.214 0 .357-.143.357-.357 0-.215-.143-.358-.357-.358ZM16.75 7.102 12 11.852 9.857 9.71 6.75 12.817a.345.345 0 0 0 0 .5.386.386 0 0 0 .25.107.386.386 0 0 0 .25-.107l2.607-2.607L12 12.852l5.25-5.25a.345.345 0 0 0 0-.5.345.345 0 0 0-.5 0Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M19.38 6.552h-2.804V5.465a.409.409 0 0 0-.12-.289l-.678-.675a.82.82 0 0 0 .235-.568.812.812 0 0 0-.24-.577l-.967-.964a.818.818 0 0 0-1.16 0l-.59.588a.818.818 0 0 0 0 1.157l.966.961a.819.819 0 0 0 1.16 0l.016-.017.557.555v.919H8.244v-.92l.552-.548.01.011a.819.819 0 0 0 1.16 0l.967-.96a.818.818 0 0 0 0-1.158l-.588-.588a.823.823 0 0 0-1.163 0l-.966.964a.814.814 0 0 0-.003 1.151l-.672.67a.398.398 0 0 0-.12.288v1.087H4.617a.818.818 0 0 0-.82.818v1.364c0 .45.37.818.82.818h.785v1.252a.82.82 0 0 0 .82.818H7.52v7.37H6.246a.818.818 0 0 0-.821.817v1.213a.82.82 0 0 0 .82.818h11.513c.454 0 .821-.364.821-.818V19.81a.82.82 0 0 0-.82-.818h-1.275v-7.37h1.297c.454 0 .82-.364.82-.818V9.552h.782a.82.82 0 0 0 .82-.818V7.37a.824.824 0 0 0-.823-.818m0 2.182h-1.585c-.003 0-.006 0-.009-.002H6.215l-.011.002H4.618V7.37H19.38zM17.778 10.8H6.223V9.55h11.555zm-9.44 8.188v-7.367h7.322v7.367zm-2.095 2.03v-1.212h11.513v1.213zm3.52-18.05.59.588-.967.961-.589-.585zm4.46-.003.967.964-.589.585-.966-.96z"
                />
            </svg>
        );
    }
};

export default IconConferenceLight;
