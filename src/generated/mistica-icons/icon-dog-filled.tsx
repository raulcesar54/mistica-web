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

const IconDogFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M9.941 11.893c.28 0 .499-.076.648-.225.156-.154.234-.385.234-.686 0-.3-.078-.531-.234-.686-.15-.15-.368-.225-.648-.225s-.498.076-.648.225c-.156.154-.234.385-.234.686 0 .3.079.531.234.686.15.149.368.225.648.225M14.707 11.668c-.15.149-.368.225-.648.225s-.499-.076-.648-.225c-.156-.155-.235-.385-.235-.686 0-.3.079-.532.235-.686.15-.15.367-.225.648-.225.28 0 .498.076.648.225.155.155.234.386.234.686 0 .301-.079.532-.234.686"
            />
            <path
                fill={fillColor}
                d="M15.065 5.13C14.28 4.392 13.271 4 12.075 4h-.151c-1.2 0-2.21.395-2.998 1.136l.004-.003.006-.006a2.092 2.092 0 0 0-.647-.401 1.668 1.668 0 0 0-.257-.078l-.018-.004-.01-.002a1.633 1.633 0 0 0-.07-.012l-.01-.002H7.92a1.564 1.564 0 0 0-.36-.017c-.282.014-.558.084-.81.207a4.872 4.872 0 0 0-.682.423A11.733 11.733 0 0 0 4.14 6.927c-.81.865-1.43 1.77-1.83 2.69-.457 1.051-.439 2.13.255 2.93.388.447.947.751 1.56.88.143.03.287.052.433.063l.509.041c-.029.195-.053.387-.073.578-.492 4.614 2.501 6.89 6.927 6.89h.158c4.425 0 7.418-2.276 6.927-6.89-.02-.19-.045-.383-.073-.578l.509-.04c.145-.012.29-.033.432-.063.613-.13 1.172-.434 1.56-.882.694-.8.712-1.878.256-2.928-.4-.922-1.02-1.826-1.83-2.691a11.732 11.732 0 0 0-1.968-1.715 4.864 4.864 0 0 0-.644-.394 2.112 2.112 0 0 0-.809-.208 1.564 1.564 0 0 0-.276.007c-.04.003-.072.009-.084.01l-.003.001-.011.002-.07.012-.01.002-.018.004a1.671 1.671 0 0 0-.257.078 2.093 2.093 0 0 0-.647.401zm1.536 13.25c-.868.803-2.224 1.313-4.013 1.394V17.86l.03-.011c.127-.047.246-.11.267-.121l.002-.001.003-.002.003-.001a3.68 3.68 0 0 0 .62-.402h.001c.248-.199.524-.475.696-.847.147-.318.224-.775.012-1.238a1.491 1.491 0 0 0-.765-.74h-.002a2.13 2.13 0 0 0-.814-.17c-.635-.01-.648-.01-1.283 0-.26.005-.549.053-.815.17a1.491 1.491 0 0 0-.766.74c-.212.463-.135.92.012 1.238.172.371.447.648.696.846a3.618 3.618 0 0 0 .927.54v1.912c-1.79-.081-3.145-.591-4.014-1.394-.905-.836-1.447-2.143-1.235-4.139.317-2.973 1.705-6.465 3.556-8.208.552-.52 1.273-.819 2.205-.819h.152c.932 0 1.652.3 2.204.82 1.851 1.742 3.24 5.234 3.556 8.207.213 1.996-.33 3.303-1.235 4.139"
            />
        </svg>
    );
};

export default IconDogFilled;