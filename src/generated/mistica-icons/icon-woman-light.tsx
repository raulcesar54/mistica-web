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

const IconWomanLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M16.982 17.104a.188.188 0 0 0 .013-.073l.003-.016a.087.087 0 0 0 .002-.016c0-.011-.003-.019-.006-.029l-.003-.008v-.014c.002-.008.003-.016 0-.022l-1.604-7.497a3.545 3.545 0 0 0-1.98-2.474 2.673 2.673 0 0 0 1.271-2.276A2.682 2.682 0 0 0 12 2a2.682 2.682 0 0 0-2.678 2.679c0 .96.512 1.801 1.275 2.276a3.526 3.526 0 0 0-1.98 2.474L7.01 16.93a.048.048 0 0 0 0 .024v.013a.048.048 0 0 1-.004.018c-.003.006-.005.012-.005.018 0 .008.001.014.003.02a.058.058 0 0 1 .002.012l.013.069c.005.023.014.041.023.06.01.018.023.036.037.054.013.019.027.032.045.05a.378.378 0 0 0 .12.065c.008.004.018.009.031.013.01.003.02.002.027.001a.07.07 0 0 1 .01 0c.007 0 .012.002.018.004.006.002.011.004.018.004h2.144v4.288a.357.357 0 0 0 .713 0v-4.996H7.79l1.512-7.068c.275-1.28 1.404-2.212 2.683-2.217H12c1.28.005 2.404.937 2.678 2.217l1.513 7.068h-2.413v2.5a.357.357 0 0 0 .713 0V17.36h2.139c.023 0 .05-.005.073-.01a.106.106 0 0 0 .016-.006.848.848 0 0 0 .08-.034c.018-.01.036-.023.055-.037.018-.014.032-.032.046-.05.013-.018.027-.037.036-.055a.086.086 0 0 0 .046-.064ZM10.039 4.679c0-1.084.882-1.966 1.966-1.966 1.083 0 1.965.882 1.965 1.966A1.97 1.97 0 0 1 12 6.645a1.967 1.967 0 0 1-1.96-1.966ZM13.435 21.287a.714.714 0 0 1 1.426 0 .714.714 0 0 1-1.426 0Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M9.663 4.484c0 1.476.851 2.322 2.336 2.322 1.487 0 2.342-.846 2.342-2.322 0-.75-.213-1.336-.636-1.742-.406-.387-.98-.586-1.706-.586s-1.297.196-1.703.588c-.42.407-.633.992-.633 1.74m.829 0c0-.518.129-.905.38-1.148.245-.239.625-.356 1.127-.356.504 0 .885.117 1.131.356.255.243.384.633.384 1.148 0 1.025-.481 1.501-1.515 1.501-1.028 0-1.507-.479-1.507-1.501m5.958 10.059a.508.508 0 0 1-.297.258.52.52 0 0 1-.658-.311l-.827-2.449a.415.415 0 0 0-.52-.263.409.409 0 0 0-.267.515l.373 1.152.764 2.812h-.493a.414.414 0 0 0-.414.41l-.02 3.831a.52.52 0 0 1-.518.524.522.522 0 0 1-.518-.524l.017-3.832a.417.417 0 0 0-.415-.412h-1.314a.414.414 0 0 0-.409.415l.02 3.829a.518.518 0 1 1-1.036 0l-.02-3.832a.416.416 0 0 0-.415-.409h-.49l.754-2.795.375-1.166a.416.416 0 0 0-.252-.49.413.413 0 0 0-.535.235l-.824 2.446a.525.525 0 0 1-.271.297.508.508 0 0 1-.395.016.517.517 0 0 1-.32-.655l1.586-4.49c.014-.034.028-.067.045-.101a1.913 1.913 0 0 1 1.756-1.157h2.18c.806 0 1.529.507 1.803 1.266l1.583 4.48a.524.524 0 0 1-.028.4m.74.364c.162-.325.187-.69.07-1.037l-1.592-4.473a.966.966 0 0 0-.07-.174 2.732 2.732 0 0 0-2.515-1.652h-2.18a2.73 2.73 0 0 0-2.506 1.633 1.334 1.334 0 0 0-.076.182L6.736 13.87c-.118.338-.093.714.07 1.033.154.314.425.555.759.667.235.084.487.1.73.047l-.251.936a.413.413 0 0 0 .398.518h.621l.017 3.42c0 .743.602 1.348 1.345 1.348.742 0 1.344-.605 1.344-1.35l-.017-3.418h.48l-.018 3.42a1.35 1.35 0 0 0 1.348 1.348c.742 0 1.347-.605 1.347-1.345l.017-3.42h.622a.412.412 0 0 0 .4-.518l-.252-.936c.241.056.493.04.726-.045a1.32 1.32 0 0 0 .767-.67"
                />
            </svg>
        );
    }
};

export default IconWomanLight;
