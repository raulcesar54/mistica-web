/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconCloakroomFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.938 18.547a.989.989 0 01-.968.717H3.04c-.466 0-.825-.287-.968-.717-.18-.503 0-1.04.394-1.363l9-6.562V8.865c0-.287.252-.538.538-.538a1.27 1.27 0 001.255-1.255 1.27 1.27 0 00-1.255-1.255 1.27 1.27 0 00-1.255 1.255.551.551 0 01-.537.538.551.551 0 01-.538-.538c0-1.29 1.04-2.33 2.33-2.33a2.326 2.326 0 012.331 2.33c0 1.112-.753 2.008-1.793 2.259v1.255l9 6.562c.395.323.574.896.395 1.399z"
            />
        </svg>
    );
};

export default IconCloakroomFilled;
