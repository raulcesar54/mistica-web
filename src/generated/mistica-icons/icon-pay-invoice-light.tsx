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

const IconPayInvoiceLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M19.152 21.643a.353.353 0 0 1-.349.357H4.5V3.787C4.5 2.805 5.281 2 6.246 2H17.41c.96 0 1.746.8 1.746 1.787V17.36a.353.353 0 0 1-.348.357.353.353 0 0 1-.349-.357V3.787c0-.59-.468-1.07-1.044-1.07H6.25c-.577 0-1.045.48-1.045 1.07v17.5h13.606c.188 0 .34.16.34.356Zm-.349-2.857a.706.706 0 0 0-.696.713c0 .394.312.714.696.714.384 0 .697-.32.697-.714a.7.7 0 0 0-.697-.713ZM7.988 17.003h7.676c.192 0 .348.16.348.357a.353.353 0 0 1-.348.357H7.988a.353.353 0 0 1-.349-.357c0-.197.157-.357.349-.357Zm7.676-3.574H7.988a.353.353 0 0 0-.349.356c0 .197.157.357.349.357h7.676c.192 0 .348-.16.348-.357a.353.353 0 0 0-.348-.356Zm.255-7.968a2.03 2.03 0 0 0-.952-.243c-.772 0-1.447.43-1.808 1.08h1.808c.192 0 .349.16.349.356a.353.353 0 0 1-.349.356h-2.063a2.295 2.295 0 0 0-.031.357c0 .123.013.242.031.356h2.063c.192 0 .349.16.349.357a.353.353 0 0 1-.349.357H13.16a2.079 2.079 0 0 0 1.808 1.07c.326 0 .648-.083.951-.243a.35.35 0 0 1 .47.155.366.366 0 0 1-.152.48c-.402.21-.831.32-1.269.32-1.17 0-2.17-.74-2.585-1.787h-.554a.353.353 0 0 1-.348-.357c0-.196.156-.356.348-.356h.375a3.184 3.184 0 0 1-.022-.357c0-.119.009-.237.022-.356h-.375a.353.353 0 0 1-.348-.357c0-.196.156-.356.348-.356h.554c.415-1.047 1.415-1.788 2.585-1.788.438 0 .867.11 1.269.32a.358.358 0 0 1 .151.48.34.34 0 0 1-.469.156Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M10.253 18.028h8.28a.28.28 0 0 0 .28-.28.28.28 0 0 0-.28-.28h-8.28a.28.28 0 0 0-.28.28c0 .154.126.28.28.28M18.533 14.75H11.41a.28.28 0 0 1-.28-.28.28.28 0 0 1 .28-.28h7.126a.28.28 0 0 1 .28.28c0 .154-.129.28-.283.28M13.197 11.473h5.336a.28.28 0 0 0 .28-.28.28.28 0 0 0-.28-.28h-5.336a.28.28 0 0 0-.28.28c0 .154.126.28.28.28M7.471 11.79v.518a.28.28 0 0 1-.28.28.28.28 0 0 1-.28-.28v-.502a3.025 3.025 0 0 1-1.532-.532.364.364 0 0 1-.171-.313.348.348 0 0 1 .353-.345.426.426 0 0 1 .232.076c.372.248.746.392 1.118.433V9.242c-1.3-.185-1.574-.926-1.574-1.52 0-.915.61-1.528 1.574-1.605v-.29a.28.28 0 0 1 .28-.28.28.28 0 0 1 .28.28v.301c.405.044.78.165 1.079.35.134.082.207.2.207.326a.337.337 0 0 1-.336.336.515.515 0 0 1-.213-.059l-.003-.003a2.306 2.306 0 0 0-.734-.266V8.61c.743.107 1.6.465 1.6 1.541.005.912-.6 1.515-1.6 1.638m0-2.469v1.79c.567-.094.905-.433.905-.929 0-.34-.114-.701-.905-.86m-.56-2.53c-.547.062-.88.391-.88.892 0 .313.107.683.88.846z"
                />
                <path
                    fill={fillColor}
                    d="M7.85 21.854h12.106c.322 0 .647 0 .972.003.566 0 .89-.328.89-.893V7.774a.278.278 0 0 0-.08-.217L16.4 2.221a.3.3 0 0 0-.092-.06.278.278 0 0 0-.107-.021c-2.944 0-7.705 0-8.353.006-.582 0-.916.333-.916.91v.882c-1.464.049-2.614.464-3.414 1.238-.888.858-1.339 2.14-1.339 3.813 0 1.672.451 2.955 1.339 3.812.8.771 1.949 1.189 3.412 1.239v6.89c0 .594.327.924.918.924m8.072-19.151V5.26c.003.948.267 1.687.744 2.164.394.395.936.61 1.598.612.277.003 1.286.003 2.997.003v12.922c-.003.255-.078.333-.333.333H7.849c-.28 0-.358-.078-.358-.364V14.04c1.487-.043 2.648-.46 3.457-1.24.887-.857 1.338-2.14 1.338-3.812 0-1.673-.45-2.955-1.338-3.813-.808-.78-1.971-1.196-3.454-1.24v-.88c0-.269.084-.35.355-.35.63-.003 5.118-.003 8.073-.003m.56.395 4.378 4.38a1739.968 1739.968 0 0 1-2.599-.002c-1.543-.008-1.776-1.392-1.778-2.216zM7.234 4.493c1.46 0 2.58.364 3.328 1.087.776.748 1.168 1.893 1.168 3.409 0 1.515-.395 2.66-1.168 3.409-.75.722-1.868 1.087-3.328 1.087-1.46 0-2.58-.365-3.328-1.087-.775-.748-1.168-1.894-1.168-3.41 0-1.515.393-2.66 1.168-3.408.751-.72 1.869-1.087 3.328-1.087"
                />
            </svg>
        );
    }
};

export default IconPayInvoiceLight;
