/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconLockDeDataRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M7.291 16.639c.92-.017.92-.625.92-.92 0-.293 0-.907-.93-.93l-.13-.002h-.033c-.894.008-.894.6-.894.919 0 .32 0 .919.91.933h.157zm.014-2.975c.418.008 2.037.168 2.037 2.056 0 1.893-1.625 2.039-2.031 2.047h-.193c-.426-.005-2.031-.154-2.031-2.058 0-1.902 1.588-2.042 2.014-2.045h.045c.058-.003.112 0 .16 0zm11.418 6.269c.8-.25 1.753-.684 1.748-1.345l-.026-2.804c-.395.25-.862.468-1.397.63-1.197.37-2.765.583-4.415.597h-.188c-.605 0-1.19-.036-1.759-.087v1.51c0 .832-.342 1.325-.627 1.588a2.1 2.1 0 01-.317.236c.874.145 1.86.227 2.91.215 1.533-.01 2.975-.204 4.07-.54zM3.44 19.126c.17.18.454.266.843.266l6.112-.003c.18.009.597-.02.837-.249.16-.151.239-.381.239-.7-.003-1.751 0-5.314 0-5.314.002-.048.022-.429-.216-.678-.171-.18-.46-.272-.86-.272l-6.098.006h-.02c-.028 0-.056-.003-.095-.003-.168 0-.515.042-.728.238-.16.149-.238.381-.238.706v5.328c0 .04-.014.426.224.675zM7.188 7.952c-.852.009-2.283.33-2.283 2.415v.608l4.86-.006c.005-.011.014-.022.016-.033v-.552c0-2.143-1.627-2.415-2.324-2.432h-.27zm3.238-4.199c-.916.286-1.502.656-1.684 1.05.166.407.765.782 1.715 1.054 1.09.317 2.54.499 4.072.465 1.538-.014 2.98-.207 4.065-.543.921-.286 1.512-.661 1.686-1.06-.218-.506-1.022-.845-1.714-1.044-1.093-.314-2.544-.476-4.076-.465-1.535.017-2.98.207-4.064.543zm2.26 9.423c.003 0 .003 1.196.003 2.538.622.062 1.266.098 1.936.093 1.532-.014 2.977-.208 4.064-.544.997-.308 1.546-.762 1.742-1.087l-.028-3.142a5.85 5.85 0 01-1.397.63c-1.197.37-2.762.582-4.415.6h-.193c-.656 0-1.286-.04-1.894-.099.213.488.188.944.182 1.011zM8.695 6.958C9.922 7.367 11 8.406 11 10.387v.319c1.022.235 2.269.361 3.577.35 1.535-.014 2.98-.207 4.064-.543.998-.309 1.547-.76 1.743-1.087l-.028-3.098a5.992 5.992 0 01-1.398.608c-1.196.37-2.762.582-4.415.599h-.193c-1.58 0-3.076-.182-4.23-.515a5.814 5.814 0 01-1.428-.6l.003.538zm12.862-1.98l.13 13.599c.01 1.126-.866 1.972-2.603 2.51-1.205.37-2.773.582-4.417.596h-.182c-1.58 0-3.079-.182-4.241-.515a6.007 6.007 0 01-1.373-.571l-4.582.002c-.746 0-1.331-.22-1.74-.658-.591-.63-.549-1.448-.543-1.538l-.003-5.283c0-.84.344-1.333.636-1.599a2.143 2.143 0 011.053-.504v-.653c0-2.65 1.88-3.608 3.487-3.622l.297.003L7.46 5.11c0-.182.023-.358.07-.526V4.58c.244-.866 1.096-1.532 2.535-1.978 1.196-.37 2.765-.582 4.418-.596 1.666-.034 3.224.168 4.425.512 1.748.504 2.64 1.334 2.65 2.46z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconLockDeDataRegular;
