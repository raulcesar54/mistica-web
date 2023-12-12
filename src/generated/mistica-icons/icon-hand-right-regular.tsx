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

const IconHandRightRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M14.264 17.388c.079.233.118.49.118.774 0 1.255-.79 2.036-2.062 2.039H5.323c-.972 0-1.745-.272-2.303-.81-.557-.54-.865-1.378-.865-2.361V9.243c0-.782.742-1.126 1.059-1.272.298-.137 1.265-.613 2.396-1.17l.08-.04a415.373 415.373 0 0 1 5.647-2.748c.854-.4 1.742-.24 2.263.41.266.33.398.727.398 1.13 0 .42-.146.85-.431 1.208-.292.367-.695.672-1.272 1.011a5541.484 5541.484 0 0 1 7.384 0h.045c1.347.087 2.117.863 2.117 2.129 0 1.317-.829 2.135-2.162 2.135h-2.902c.059.207.09.437.09.683 0 1.003-.502 1.703-1.354 1.944.079.23.118.493.118.776 0 1.008-.51 1.711-1.367 1.95m-10.38 1.13c.319.31.792.462 1.439.462v.008h7c.588 0 .83-.238.83-.818 0-.149-.02-.28-.057-.39a1.209 1.209 0 0 1 .084-.957c.157-.294.429-.513.754-.603.154-.042.467-.131.467-.773 0-.151-.02-.283-.056-.395a1.209 1.209 0 0 1 .082-.955c.157-.294.425-.51.748-.602.137-.04.462-.132.462-.77 0-.135-.017-.252-.045-.356a1.217 1.217 0 0 1 .202-1.067c.232-.306.599-.485.983-.485h2.907c.653 0 .93-.274.93-.916 0-.527-.16-.86-.963-.91H12.3a1.231 1.231 0 0 1-1.233-1.219c0-.432.23-.832.602-1.05.482-.283.762-.499.936-.717a.728.728 0 0 0 .165-.451.586.586 0 0 0-.129-.373c-.224-.28-.613-.137-.77-.064-1.426.666-3.726 1.798-5.574 2.708l-.056.028a222.506 222.506 0 0 1-2.504 1.222c-.07.03-.272.123-.348.199v7.753c0 .644.18 1.185.493 1.49"
            />
        </svg>
    );
};

export default IconHandRightRegular;
