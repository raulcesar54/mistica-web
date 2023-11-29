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

const IconWinnerEuroFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="m4.064 18.324 1.598-2.953c1.492 1.654 3.55 2.701 5.884 2.809l-1.952 3.532a.552.552 0 0 1-.46.288h-.072a.58.58 0 0 1-.46-.395l-.921-3.421-3.015.935a.5.5 0 0 1-.566-.18c-.107-.184-.142-.435-.036-.615Zm8.237-.14c2.342-.076 4.47-1.155 5.963-2.813l1.66 2.92c.107.22.107.436-.035.616a.5.5 0 0 1-.567.18l-3.085-.935-.921 3.42c-.036.216-.213.36-.425.396h-.071a.514.514 0 0 1-.46-.252L12.3 18.184ZM4.529 9.568C4.529 5.388 7.862 2 11.979 2c4.12 0 7.457 3.389 7.457 7.568 0 4.18-3.337 7.569-7.454 7.569-4.116 0-7.453-3.389-7.453-7.569Zm8.229 0a.549.549 0 0 0-.532-.539l.004-.032H9.605c.071-.507.32-.975.709-1.37a2.637 2.637 0 0 1 1.88-.796c.465 0 .926.108 1.315.36.248.18.532.108.709-.18a.532.532 0 0 0-.177-.755 3.65 3.65 0 0 0-1.846-.504c-.992 0-1.917.396-2.625 1.115a3.56 3.56 0 0 0-1.067 2.126h-.39a.549.549 0 0 0-.53.54c0 .287.247.539.53.539h.39c.284 1.838 1.81 3.24 3.692 3.24.641 0 1.279-.179 1.846-.503.248-.144.319-.467.177-.719a.512.512 0 0 0-.709-.18c-.393.252-.854.36-1.314.36-1.28 0-2.346-.94-2.594-2.162h2.625a.549.549 0 0 0 .532-.54Z"
            />
        </svg>
    );
};

export default IconWinnerEuroFilled;
