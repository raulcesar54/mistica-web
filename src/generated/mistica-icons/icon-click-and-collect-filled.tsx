/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconClickAndCollectFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M16.994 5.928V7h2.86v12.856c0 1.184-.96 2.144-2.144 2.144H8.426a2.141 2.141 0 01-2.14-2.096 1.616 1.616 0 001.14.268 1.601 1.601 0 001.32-1.184l2.16-8.22a1.603 1.603 0 00-.416-1.548 1.598 1.598 0 00-1.54-.42l-2.668.704V7h2.856V5.928A3.932 3.932 0 0113.066 2a3.935 3.935 0 013.928 3.928zM10.566 7h5V5.928a2.5 2.5 0 00-5 0V7z"
            />
            <path
                fill={fillColor}
                d="M9.734 9.976a.548.548 0 00-.384-.152c-.048 0-.088.008-.136.016L.99 12a.526.526 0 00-.392.444.54.54 0 00.252.536l2.116 1.272L.15 17.064l2.488 2.488 2.816-2.816 1.272 2.116a.529.529 0 00.536.252.536.536 0 00.444-.392l2.164-8.224a.54.54 0 00-.136-.512z"
            />
        </svg>
    );
};

export default IconClickAndCollectFilled;
