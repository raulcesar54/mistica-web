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

const IconDataUnlimitedFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M15.299 15.224h-1.147V13.97h1.147c.358 0 .645.286.645.645 0 .358-.287.609-.645.609Zm.43-4.587a1.406 1.406 0 0 0 0-1.971 1.406 1.406 0 0 0-1.971 0l-.968.967.968.968c.537.61 1.397.61 1.97.036ZM8.275 8.702a1.406 1.406 0 0 0 0 1.97 1.406 1.406 0 0 0 1.97 0l.968-.967-.967-.968c-.538-.609-1.398-.609-1.971-.035Zm7.382 7.597h-1.505v1.254h1.505a.642.642 0 0 0 .645-.645c0-.358-.287-.609-.645-.609Zm3.835-8.6v14.298H4.512V4.114C4.512 2.932 5.372 2 6.447 2h7.275c.537 0 1.147.25 1.54.645L18.955 6.3c.358.359.538.825.538 1.398Zm-7.132 8.063a.551.551 0 0 0-.537-.538H9.85a.551.551 0 0 0-.537.537c0 .287.25.538.537.538h1.362a1.786 1.786 0 0 1-1.72 1.254 1.774 1.774 0 0 1-1.792-1.792c0-1.003.789-1.791 1.792-1.791.43 0 .788.143 1.111.394.215.179.573.143.753-.072a.555.555 0 0 0-.072-.752c-.502-.395-1.147-.645-1.792-.645a2.875 2.875 0 0 0-2.867 2.867 2.875 2.875 0 0 0 2.867 2.866 2.875 2.875 0 0 0 2.867-2.867Zm.61-4.337c.465.466 1.11.717 1.755.717.645 0 1.255-.25 1.756-.717.968-.967.968-2.544 0-3.476-.967-.968-2.544-.968-3.476 0l-1.003.968-.968-.968c-.968-.968-2.544-.968-3.476 0-.932.968-.968 2.544 0 3.476.466.466 1.11.717 1.756.717.645 0 1.254-.25 1.756-.717l.967-.967.932.967Zm4.407 5.52c0-.538-.25-1.04-.68-1.363.214-.286.322-.609.322-.967a1.72 1.72 0 0 0-1.72-1.72h-1.72a.551.551 0 0 0-.538.537v4.659c0 .287.25.537.537.537h2.08c.967 0 1.72-.752 1.72-1.684Z"
            />
        </svg>
    );
};

export default IconDataUnlimitedFilled;
