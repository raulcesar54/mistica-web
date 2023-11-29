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

const IconConfigureTvDecoderRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M14.48 7.911c-.692 0-1.25.199-1.655.588-.423.41-.64.98-.64 1.706s.216 1.297.64 1.706c.406.392.963.588 1.655.588.692 0 1.25-.199 1.655-.588.423-.409.64-.98.64-1.706 0-.725-.217-1.297-.64-1.706-.406-.392-.963-.588-1.655-.588Zm0 .84c.921 0 1.454.46 1.454 1.454 0 .995-.532 1.454-1.454 1.454-.922 0-1.454-.46-1.454-1.454s.532-1.454 1.454-1.454ZM5.558 16.382a.457.457 0 1 1-.913 0 .457.457 0 0 1 .913 0ZM6.792 16.838a.457.457 0 1 0 0-.913.457.457 0 0 0 0 .913ZM8.888 16.382a.457.457 0 1 1-.913 0 .457.457 0 0 1 .913 0ZM18.5 17.082a.594.594 0 0 0 0-1.188h-2.656a.594.594 0 0 0 0 1.188H18.5Z"
            />
            <path
                fill={fillColor}
                d="M13.962 5.27h1.036a.84.84 0 0 1 .84.843v.523c.076.02.149.045.222.07l.356-.355a.84.84 0 0 1 1.187 0l.734.734a.84.84 0 0 1 0 1.187l-.356.356c.026.073.048.146.07.221h.524a.84.84 0 0 1 .84.84v1.037a.84.84 0 0 1-.84.84h-.524c-.02.076-.044.149-.07.222l.356.353c.083.083.146.18.186.283h1.173c1.187 0 2.148.963 2.148 2.148v2.02a2.15 2.15 0 0 1-2.148 2.148H4.303a2.152 2.152 0 0 1-2.148-2.148v-2.02c0-1.188.964-2.148 2.148-2.148h6.136c.041-.103.103-.2.187-.283l.355-.356a4.935 4.935 0 0 1-.07-.221h-.524a.84.84 0 0 1-.84-.84V9.686a.84.84 0 0 1 .84-.84h.524c.02-.076.045-.149.07-.222l-.355-.355a.84.84 0 0 1 0-1.188l.73-.734a.84.84 0 0 1 1.188 0l.356.356c.073-.026.146-.048.221-.07V6.11a.84.84 0 0 1 .84-.84Zm3.633 7.618a.556.556 0 0 1 .084-.212l-.706-.706c.202-.336.333-.75.387-1.244h1.215V9.69H17.36c-.05-.493-.183-.908-.387-1.244l.773-.773-.734-.731-.77.77c-.345-.207-.762-.333-1.244-.386V6.11h-1.036v1.216c-.485.05-.9.179-1.244.386l-.77-.77-.731.73.77.771c-.202.336-.333.75-.387 1.244h-1.215v1.036H11.6c.05.493.183.908.387 1.244l-.697.697c.05.071.083.154.095.243l.56.564.77-.77c.345.207.762.333 1.244.386v1.216h1.036v-1.216c.485-.05.9-.179 1.244-.386l.77.77.586-.583Zm-6.238 1.171-.516-.515H4.303c-.568 0-1.028.46-1.028 1.028v2.02c0 .568.46 1.028 1.028 1.028h15.393c.568 0 1.028-.46 1.028-1.028v-2.02c0-.569-.46-1.028-1.028-1.028H18.12l-.518.515a.84.84 0 0 1-1.188 0l-.355-.355a5.11 5.11 0 0 1-.221.07v.524a.84.84 0 0 1-.84.84h-1.037a.84.84 0 0 1-.84-.84v-.524c-.076-.02-.149-.045-.222-.07l-.356.355a.84.84 0 0 1-1.187 0Z"
            />
        </svg>
    );
};

export default IconConfigureTvDecoderRegular;
