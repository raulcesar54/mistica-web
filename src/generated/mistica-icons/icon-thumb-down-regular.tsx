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

const IconThumbDownRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.841 10.16c0 .606-.168 1.06-.38 1.393.21.347.38.832.383 1.501 0 1.53-1.18 2.283-2.384 2.348H16.05l-2.07.061c.002.827.005 2.356.005 3.614l.006.131.003.098c0 1.588-.936 2.535-2.499 2.535-.818 0-1.485-.252-1.927-.728-.294-.32-.636-.9-.569-1.849l.02-.23.001-.015a2.95 2.95 0 0 0 .018-.245l.003-.042c.025-1.112.04-2.515-.07-3.639-.117-1.232-1.336-1.994-1.885-2.274-.247.19-.552.308-.885.308H3.609a1.457 1.457 0 0 1-1.454-1.457V4.077c0-.804.653-1.457 1.454-1.457h2.59c.34.003.668.123.928.342l.06-.015c.043-.012.087-.024.133-.024l2.804-.037c.16 0 .415-.073.731-.165l.208-.059c.77-.227 1.728-.507 3.986-.507 3.613 0 4.512.33 5.075 1.854a.487.487 0 0 1 .031.11c.076.456.081.848.011 1.196.737.462 1.149 1.143 1.149 1.93 0 .49-.096.874-.222 1.168.485.484.748 1.092.748 1.748m-1.622 1.813a.62.62 0 0 1 .031-.874c.241-.224.364-.538.359-.936 0-.428-.224-.8-.664-1.103a.629.629 0 0 1-.26-.429.621.621 0 0 1 .142-.479c.166-.196.255-.507.255-.902 0-.563-.496-.89-.91-1.061a.617.617 0 0 1-.303-.863c.084-.151.166-.395.082-.941-.247-.664-.463-.997-3.902-.997-2.071 0-2.9.24-3.628.453l-.011.003-.216.062c-.409.117-.734.21-1.061.21l-2.477.033v7.521a.13.13 0 0 1-.002.024.131.131 0 0 0-.003.024v.008c.759.39 2.367 1.429 2.54 3.25.115 1.21.098 2.694.073 3.851 0 .023-.002.045-.005.067-.006.093-.013.17-.021.249l-.002.015-.017.19c-.028.412.054.723.244.928.258.28.7.336 1.028.336.89 0 1.272-.39 1.27-1.364l-.006-.121c-.006-1.417-.009-2.837-.009-4.255a.613.613 0 0 1 .597-.619l2.686-.078h3.392c.359-.02 1.19-.168 1.19-1.118 0-.473-.125-.838-.358-1.05zM5.646 10.289c0 .449-.313.762-.762.762-.45 0-.762-.31-.762-.761 0-.449.314-.762.762-.762.449 0 .762.313.762.761M6.2 3.85l-2.591.004c-.123 0-.227.1-.227.226v7.591c0 .127.1.23.227.23h2.59c.121 0 .22-.095.225-.216V4.065A.229.229 0 0 0 6.2 3.85"
            />
        </svg>
    );
};

export default IconThumbDownRegular;
