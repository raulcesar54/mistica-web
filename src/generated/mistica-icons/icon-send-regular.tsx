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

const IconSendRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.513 2.831c.005-.038.005-.076.005-.109v-.024a.722.722 0 0 0-.023-.137v-.01c-.005-.009-.009-.018-.009-.028a.514.514 0 0 0-.054-.137l-.04-.071a.717.717 0 0 0-.086-.104l-.019-.017a1.046 1.046 0 0 0-.104-.083.704.704 0 0 0-.212-.09c-.004-.003-.01-.004-.015-.005a.558.558 0 0 0-.235-.007.12.12 0 0 1-.02.002.326.326 0 0 1-.035.005c-.01.001-.022.002-.033.005L2.99 7.03a.737.737 0 0 0-.519.654.75.75 0 0 0 .406.734l7.898 3.815-.696.73a.767.767 0 0 0 0 1.047c.276.29.723.29.998 0l.696-.73 3.634 8.289a.703.703 0 0 0 .642.431c.018 0 .04 0 .058-.005a.708.708 0 0 0 .623-.545l4.764-18.51.005-.028c0-.01.002-.02.004-.029l.002-.01c.004-.014.007-.026.007-.042Zm-3.066 1.35-6.606 6.934-6.601-3.19 13.207-3.743Zm-5.608 7.981 6.606-6.933-3.567 13.861-3.039-6.928Z"
            />
        </svg>
    );
};

export default IconSendRegular;
