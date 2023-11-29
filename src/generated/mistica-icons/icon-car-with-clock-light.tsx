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

const IconCarWithClockLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.088 14.32c.467.42.86.918 1.16 1.47 1.307 2.498-.026 3.818-.085 3.868a.398.398 0 0 1-.283.118H18.26c-.16 1.28-1.062 2.061-2.437 2.061-1.37 0-2.27-.781-2.429-2.061H9.539c-.168 1.286-1.042 2.053-2.437 2.053-1.395 0-2.278-.765-2.437-2.053H2.729a.41.41 0 0 1-.4-.328c-.017-.042-.241-1.1-.16-2.706-.008-1.238.753-3.38 2.437-5.087.737-.739 1.846-1.58 3.339-2.016a9.112 9.112 0 0 1-.017-.48c0-4.585 2.403-7.008 6.952-7.008 4.547 0 6.958 2.423 6.958 7.006 0 2.243-.599 3.977-1.75 5.162ZM8.763 9.156c0 .051.002.1.004.149.002.046.004.091.004.137a7.722 7.722 0 0 1 1.345-.126c4.63 0 6.843 2.974 7.35 3.775.37.05 1.137.236 1.938.723 1.059-1.017 1.602-2.588 1.602-4.658-.002-4.095-2.064-6.165-6.126-6.165-4.056 0-6.117 2.07-6.117 6.165Zm11.742 7.028c-1.11-2.118-3.221-2.272-3.314-2.277a.429.429 0 0 1-.341-.219c-.076-.143-2.003-3.532-6.734-3.532-2.362 0-3.972 1.134-4.916 2.084-1.451 1.473-2.202 3.39-2.196 4.515-.05 1 .025 1.765.084 2.177h1.577c.157-1.294 1.05-2.084 2.437-2.084 1.378 0 2.277.79 2.437 2.084h3.854c.16-1.286 1.05-2.076 2.429-2.076 1.386 0 2.277.793 2.437 2.076 0 .003 2.42.003 2.42.003.207-.303.644-1.202-.174-2.751Zm-3.048 3.162c0-1.075-.557-1.647-1.635-1.647-1.07 0-1.628.572-1.628 1.65 0 1.076.56 1.647 1.628 1.647 1.075 0 1.635-.571 1.635-1.65ZM7.102 20.99c1.067 0 1.636-.572 1.636-1.65 0-1.078-.566-1.647-1.636-1.647-1.068 0-1.636.571-1.636 1.647s.568 1.65 1.636 1.65Zm9.479-10.84a.417.417 0 0 0 .3-.127.428.428 0 0 0 0-.593l-1.645-1.65V5.54a.414.414 0 0 0-.417-.42.416.416 0 0 0-.418.42v2.406a.412.412 0 0 0 .127.302l1.759 1.773a.433.433 0 0 0 .294.126Z"
            />
        </svg>
    );
};

export default IconCarWithClockLight;
