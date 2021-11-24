/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconDataDataSereyeFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M19.269 20.485c.767 0 1.162-.353 1.17-1.054l-.002-.14c-.009-.473-.213-1.036-1.12-1.053-.015 0-.029.008-.043.008-.014 0-.025-.008-.039-.008-.907.02-1.117.583-1.129 1.062v.143c.009.691.4 1.042 1.163 1.042zM5.577 19.29c-.011-.482-.218-1.056-1.16-1.056-.944 0-1.157.58-1.168 1.065l-.003.14v.003c.006.689.398 1.036 1.16 1.036.765 0 1.16-.356 1.171-1.053v-.135zm16.106-.022l.003.176c-.014 1.034-.658 2.238-2.417 2.238-1.76 0-2.395-1.198-2.406-2.226v-.191c.022-.894.515-1.922 1.79-2.176v-1.253H5.025l.006 1.253c1.28.249 1.773 1.28 1.79 2.179l.003.18c-.02 1.033-.662 2.237-2.418 2.237-1.759 0-2.395-1.199-2.406-2.227 0-.061 0-.131.003-.19.022-.894.515-1.919 1.784-2.174l-.008-1.857a.576.576 0 01.182-.426.627.627 0 01.442-.176h6.79c-.003-.025-.014-.048-.014-.073v-1.275c-.767-.039-1.482-.145-2.053-.308-.832-.243-1.255-.571-1.255-.974v-2.03c.277.201.658.375 1.11.51.778.226 1.798.35 2.87.35 1.079 0 2.099-.124 2.872-.35a3.344 3.344 0 001.095-.516v2.034c0 .403-.423.73-1.255.975-.591.17-1.336.277-2.137.313v1.27c0 .024-.011.047-.017.072h6.868c.345 0 .622.269.622.602v1.857c1.28.25 1.77 1.278 1.784 2.177zM9.134 3.922c-.694-.202-1.114-.474-1.226-.788 0-.005 0-.005-.003-.008.112-.316.532-.594 1.221-.793.731-.213 1.697-.33 2.723-.33 1.025 0 1.991.117 2.717.33.725.21 1.134.49 1.227.818 0 0-.006.006-.006.011-.123.303-.538.566-1.216.762-.73.213-1.691.33-2.714.33-1.03-.002-1.991-.12-2.723-.332zm0 3.028c-.65-.19-1.12-.48-1.263-.768V3.9c.266.207.636.384 1.11.516.778.226 1.798.35 2.87.35 1.073 0 2.09-.124 2.872-.35.462-.135.826-.3 1.095-.505v2.266c-.135.244-.53.563-1.25.774-.725.212-1.691.324-2.714.324-1.028 0-1.988-.112-2.72-.324zm0 3.039c-.65-.19-1.12-.474-1.263-.768V6.933c.283.201.658.375 1.11.504.778.227 1.798.35 2.87.35 1.076 0 2.099-.123 2.872-.35.437-.123.81-.3 1.095-.51v2.289c-.135.24-.53.56-1.25.773-.725.213-1.691.33-2.714.33-1.028 0-1.988-.117-2.72-.33z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDataDataSereyeFilled;
