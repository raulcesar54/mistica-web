/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconThumbDownFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M20.255 11.104c.241-.221.362-.538.362-.938 0-.432-.225-.804-.664-1.104a.616.616 0 01-.118-.908c.168-.196.255-.507.255-.902 0-.563-.496-.888-.91-1.061a.604.604 0 01-.342-.362.609.609 0 01.04-.498c.083-.151.164-.395.08-.941-.249-.664-.462-.998-3.902-.998-2.08 0-2.907.244-3.638.457l-.216.062c-.409.117-.734.21-1.062.21l-2.476.033v7.524c0 .017-.003.031-.005.048v.008c.759.392 2.367 1.432 2.54 3.25.118 1.21.101 2.694.076 3.851a.544.544 0 01-.006.067c-.005.098-.014.18-.022.264l-.017.19c-.028.409.053.72.244.924.26.278.703.337 1.028.337.89 0 1.269-.39 1.269-1.365l-.006-.12v-.034c0-1.823-.008-4.22-.008-4.22 0-.334.263-.609.596-.617l2.687-.081h3.395c.358-.02 1.19-.168 1.19-1.118 0-.476-.123-.84-.359-1.05a.607.607 0 01-.201-.454.586.586 0 01.19-.454M4.888 9.533c-.448 0-.762.313-.762.761 0 .449.314.762.762.762s.76-.31.76-.762c0-.448-.312-.761-.76-.761m16.577 2.025c.213.344.381.832.381 1.504 0 1.53-1.179 2.28-2.383 2.347H16.05l-2.07.062c.003.826.005 2.353.005 3.613l.006.132.003.098c0 1.585-.933 2.535-2.499 2.535-.818 0-1.484-.252-1.927-.728-.294-.32-.636-.9-.569-1.849l.02-.23c.008-.08.017-.157.02-.257l.002-.042c.026-1.112.04-2.516-.07-3.639-.117-1.233-1.336-1.992-1.885-2.275-.246.19-.552.309-.885.309H3.617a1.458 1.458 0 01-1.457-1.46V4.082c0-.804.653-1.457 1.457-1.457h2.59c.354 0 .676.132.928.342.064-.014.123-.04.19-.04l2.807-.036c.162 0 .415-.07.731-.165l.21-.059c.77-.224 1.728-.507 3.983-.507 3.611 0 4.513.33 5.076 1.857a.797.797 0 01.03.11c.076.456.082.848.012 1.195.737.463 1.148 1.143 1.148 1.93 0 .49-.095.874-.22 1.169.487.484.747 1.09.747 1.747-.003.603-.17 1.056-.384 1.39"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconThumbDownFilled;
