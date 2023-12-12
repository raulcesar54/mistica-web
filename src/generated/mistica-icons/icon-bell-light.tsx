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

const IconBellLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^vivo-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m4.618 16.877.722-2.21.697-7.017a4.8 4.8 0 0 1 4.776-4.325h2.374a4.8 4.8 0 0 1 4.776 4.325l.697 7.016.722 2.21a.8.8 0 0 1-.76 1.049h-3.697l-.02.176a2.925 2.925 0 0 1-5.81 0l-.02-.176H5.378a.8.8 0 0 1-.76-1.048m13.935.198-.73-2.233-.706-7.108a3.95 3.95 0 0 0-3.93-3.559h-2.374a3.95 3.95 0 0 0-3.93 3.56l-.707 7.107-.729 2.233zm-4.47.85H9.917l.048.24a2.076 2.076 0 0 0 4.068 0z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20.73 17.924H3.968a11.642 11.642 0 0 0 1.854-6.296V9.036c0-3.48 2.764-6.296 6.18-6.296s6.18 2.816 6.18 6.296v2.592c0 .816.11 1.628.255 2.48a.38.38 0 0 0 .436.296c.18-.036.326-.26.29-.444a10.734 10.734 0 0 1-.254-2.332V9.036C18.913 5.148 15.822 2 12.002 2S5.095 5.148 5.095 9.036v2.592c0 2.296-.762 4.592-2.108 6.444-.075.112-.11.26-.036.372.075.112.18.224.326.224h6.29c-.074.26-.11.48-.11.74 0 1.444 1.127 2.592 2.545 2.592 1.417 0 2.544-1.148 2.544-2.592 0-.26-.035-.48-.11-.74h6.29c.22 0 .366-.148.366-.372s-.145-.372-.361-.372Zm-6.91 1.484c0 1.036-.801 1.852-1.818 1.852s-1.818-.816-1.818-1.852c0-.26.075-.52.145-.74h3.31c.11.22.18.48.18.74Z"
                />
                <path
                    fill={fillColor}
                    d="M19.639 16.816a.733.733 0 0 0 .726-.74.733.733 0 0 0-.726-.74.733.733 0 0 0-.726.74c0 .409.325.74.726.74Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12.002 21.746c-1.558 0-2.764-.918-2.875-2.66l.001-.146H3.4a.421.421 0 0 1-.395-.271.4.4 0 0 1 .13-.457c1.37-1.093 1.798-2.928 1.927-4.143l.03-.329.015-.288.007-.24-.002-.29-.003-.077v-3.9c0-1.1.175-2.075.508-2.923l.117-.278.417-.773a5.46 5.46 0 0 1 .894-1.056c1.15-1.044 2.566-1.44 3.596-1.585l.312-.038.281-.024.247-.013.295-.005.23.007.229-.007.186.002.228.008.264.018.297.03c1.04.125 2.543.505 3.75 1.604 1.22 1.107 1.87 2.692 1.931 4.714l.005.323-.003 3.955-.003.204.007.31.013.255.023.29.016.155.042.331c.176 1.197.646 2.782 1.88 3.766a.407.407 0 0 1-.192.721l-.074.007h-1.726l-1.126-.003h-2.856l-.004.079c-.145 1.746-1.346 2.727-2.891 2.727m0-.8c1.147 0 1.967-.617 2.082-1.897l.009-.109H9.934l.003.052c.086 1.281.905 1.954 2.065 1.954m-.044-17.89a6.772 6.772 0 0 0-1.67.146c-.932.193-1.78.553-2.478 1.112l-.228.193-.166.16a4.748 4.748 0 0 0-.44.512l-.121.172-.392.721c-.325.723-.51 1.562-.547 2.512l-.007.362-.002 3.838.006.18.001.258c-.024 1.807-.441 3.564-1.519 4.865l-.046.053h13.406l1.908.003-.086-.103a6.044 6.044 0 0 1-.862-1.512l-.107-.284a9.14 9.14 0 0 1-.463-2.12c-.04-.39-.056-.741-.055-1.04l.006-.261V8.949c0-1.963-.568-3.44-1.674-4.445-.736-.67-1.665-1.09-2.7-1.303a7.143 7.143 0 0 0-1.764-.146"
                />
            </svg>
        );
    }
};

export default IconBellLight;
