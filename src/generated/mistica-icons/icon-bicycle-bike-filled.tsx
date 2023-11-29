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

const IconBicycleBikeFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M7.103 11.332 8.36 8.769l-.857-1.827h-.812a.54.54 0 0 1-.53-.552c0-.305.238-.551.53-.551h2.736a.54.54 0 0 1 .53.551.541.541 0 0 1-.53.552h-.745l.603 1.283h5.156V5.66c0-.26.174-.484.418-.54.154-.037 1.538-.33 2.353.353.255.213.56.613.56 1.305a.541.541 0 0 1-.53.552.542.542 0 0 1-.532-.552c0-.272-.087-.378-.165-.443-.23-.193-.68-.22-1.042-.193v2.504l1.336 2.7s-.35.135-.476.188c-.12.05-.51.23-.51.23l-.882-1.782L13 13.937c.306.285.48.714.48 1.263 0 .731-.303 1.25-.827 1.493l.317.658h.482c.294 0 .529.25.529.555a.541.541 0 0 1-.53.552h-.809a.522.522 0 0 1-.473-.306l-.639-1.33c-.653-.112-1.073-.546-1.193-1.216h-.743s.014-.21.014-.552a12.712 12.712 0 0 0-.013-.552h.002V14.5h.815c.082-.23.21-.418.373-.569L8.94 10.007l-.846 1.728s-.39-.18-.52-.232a16.461 16.461 0 0 0-.412-.15l-.06-.021Zm0 0-1.7 3.473a.577.577 0 0 0 .019.54.53.53 0 0 0 .454.264h3.722c-.19 2.137-1.507 3.361-3.706 3.361-2.378 0-3.742-1.42-3.742-3.899s1.364-3.9 3.742-3.9c.446 0 .84.065 1.21.16ZM9.598 14.5c-.12-1.265-.633-2.214-1.501-2.762l-1.353 2.764h2.852V14.5h.002Zm2.364-.948.037.004 2.1-4.224H9.804l1.986 4.224.037-.004a.59.59 0 0 1 .066-.005c.024 0 .047.003.07.005Zm-.07 1.102c-.403 0-.526.129-.526.549 0 .417.129.549.526.549.407 0 .527-.13.527-.55 0-.422-.12-.548-.527-.548Zm9.947.417c0-2.476-1.364-3.9-3.742-3.9-.462 0-.874.071-1.252.172l1.708 3.46a.565.565 0 0 1-.23.744.516.516 0 0 1-.243.062.53.53 0 0 1-.473-.3l-1.754-3.546c-.972.636-1.498 1.768-1.498 3.308 0 2.48 1.364 3.9 3.742 3.9s3.742-1.42 3.742-3.9Z"
            />
        </svg>
    );
};

export default IconBicycleBikeFilled;
