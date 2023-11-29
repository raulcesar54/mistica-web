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

const IconBriefcaseLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20.076 5.27c1.08 0 1.924.873 1.924 1.98v11.875c0 1.111-.848 1.98-1.924 1.98-.228 0-.384-.16-.384-.395 0-.235.152-.395.384-.395.656 0 1.156-.52 1.156-1.19V12H2.768v7.12c0 .676.504 1.19 1.156 1.19h11.54c.228 0 .384.161.384.396 0 .234-.152.395-.384.395H3.924C2.844 21.1 2 20.228 2 19.12V7.25c0-1.111.844-1.98 1.924-1.98h4.652C8.768 3.727 10.228 2.5 12 2.5s3.192 1.227 3.424 2.77h4.652Zm-5.42.004c-.232-1.111-1.308-1.98-2.656-1.98s-2.424.869-2.656 1.98h5.312ZM2.768 11.206h18.468v-3.96c0-.675-.504-1.19-1.156-1.19H3.924c-.656 0-1.156.519-1.156 1.19v3.96Z"
                />
                <path
                    fill={fillColor}
                    d="M17.768 21.5a.783.783 0 0 0 .772-.794.783.783 0 0 0-.772-.795.783.783 0 0 0-.772.795c0 .438.346.794.772.794Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M16.824 7.287h3.737c.712 0 1.28.574 1.28 1.291V20.55c0 .72-.571 1.291-1.283 1.291H3.435c-.703 0-1.28-.571-1.28-1.291V8.578c0-.717.577-1.291 1.28-1.291h3.737v-.575c0-2.507 2.126-4.557 4.734-4.557h.182c2.616 0 4.736 2.05 4.736 4.557v.575Zm-8.812-.575v.575h7.975v-.575c0-2.042-1.742-3.714-3.896-3.714h-.182c-2.146 0-3.897 1.672-3.897 3.714ZM3.43 8.13a.444.444 0 0 0-.436.448v3.703c1.725 1.4 4.523 2.034 9.08 2.034h.326c4.249-.037 6.913-.625 8.605-1.908V8.572a.446.446 0 0 0-.446-.442H3.43Zm17.575 12.42s0-7.132-.003-7.132c-1.717 1.098-4.146 1.63-7.782 1.723v1.61c0 .253-.075.457-.226.608-.14.143-.342.219-.594.219h-.804A.834.834 0 0 1 11 17.36c-.151-.152-.227-.356-.227-.608V15.14l.008-.008c-3.66-.101-6.08-.667-7.79-1.807v7.23c0 .243.2.442.443.442h17.129a.444.444 0 0 0 .44-.448Zm-9.19-5.4-.216.008.016 1.594.762-.017.009-1.586v-.008l-.572.008Z"
                />
            </svg>
        );
    }
};

export default IconBriefcaseLight;
