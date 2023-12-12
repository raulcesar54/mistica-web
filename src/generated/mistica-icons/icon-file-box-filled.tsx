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

const IconFileBoxFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.836 13.123a.306.306 0 0 0-.001.026l.005.041c.003.023.006.045.006.066v7.129c0 .804-.65 1.456-1.45 1.456H3.613a1.456 1.456 0 0 1-1.451-1.456v-7.132a.918.918 0 0 1 .014-.151c0-.01-.002-.02-.003-.029a.137.137 0 0 1 0-.047l1.59-9.476a1.457 1.457 0 0 1 1.452-1.395l13.577.014c.753 0 1.38.566 1.53 1.375l1.515 9.552zm-8.242-.685c0-.347.28-.63.627-.63v.002h6.14l-1.277-8.05c-.03-.182-.16-.328-.291-.328l-13.58-.014a.194.194 0 0 0-.193.194c0 .033-.003.07-.009.103L3.65 11.808h6.134a.63.63 0 0 1 .628.63v.868c.003.824.67 1.49 1.493 1.49h.193c.826 0 1.493-.666 1.496-1.49z"
            />
        </svg>
    );
};

export default IconFileBoxFilled;
