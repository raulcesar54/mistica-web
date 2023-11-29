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

const IconNonBinaryToiletRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M4.6 9.205c0-.44.36-.8.8-.8h7.198c.44 0 .8.36.8.8 0 .44-.36.8-.8.8H5.4c-.44 0-.8-.36-.8-.8Zm14.796-5.598v18.394h-9.198v-4.838c-2.279-.24-5.598-1.6-5.598-5.558v-.8h9.597V3.607c0-.88.72-1.6 1.6-1.6h1.999c.88 0 1.6.72 1.6 1.6Zm-1.6 0h-2v8.797H6.28c.56 3.16 4.558 3.2 4.718 3.2h4.399c.44 0 .8.36.8.8 0 .439-.36.799-.8.799h-3.6v3.199h5.999V3.607Z"
            />
        </svg>
    );
};

export default IconNonBinaryToiletRegular;
