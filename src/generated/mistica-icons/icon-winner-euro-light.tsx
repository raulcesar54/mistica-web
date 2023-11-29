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

const IconWinnerEuroLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M18.953 12.69a.707.707 0 0 1-.697.716.707.707 0 0 1-.697-.716c0-.395.312-.716.697-.716.385 0 .697.32.697.716ZM12.23 6.613c.488 0 .978.144 1.395.396.175.108.386.036.487-.144a.364.364 0 0 0-.14-.5 3.276 3.276 0 0 0-1.741-.5c-.939 0-1.812.356-2.474 1.036a3.828 3.828 0 0 0-.802 1.288h-.732c-.21 0-.347.144-.347.356 0 .216.14.356.347.356h.557c-.035.18-.035.356-.035.536 0 .18.035.357.035.537h-.557c-.21 0-.347.144-.347.356 0 .216.14.356.347.356h.732c.487 1.36 1.776 2.324 3.24 2.324.593 0 1.22-.18 1.742-.464.175-.108.21-.324.14-.5-.105-.18-.316-.216-.487-.144a2.726 2.726 0 0 1-1.394.396c-1.114 0-2.057-.644-2.509-1.612h2.509c.21 0 .346-.144.346-.356 0-.216-.14-.356-.346-.356h-2.75c-.035-.18-.035-.357-.035-.537 0-.18.035-.356.035-.536h2.75c.21 0 .346-.144.346-.356s-.14-.356-.346-.356H9.687c.14-.284.316-.536.522-.788.592-.504 1.293-.788 2.022-.788Z"
            />
            <path
                fill={fillColor}
                d="m19.65 18.595-2.438-4.328c-.07-.109-.14-.109-.245-.109-.175 0-.276.145-.276.145-1.255 1.252-2.926 1.968-4.702 1.968-3.657 0-6.617-3.04-6.617-6.798 0-3.756 2.96-6.797 6.617-6.797 3.658 0 6.618 3.04 6.618 6.797 0 .33-.03.63-.062.955l-.008.082c-.035.18.105.396.276.396.175.036.386-.108.386-.284.07-.356.07-.752.07-1.108C19.269 5.36 15.997 2 11.954 2 7.911 2 4.635 5.357 4.635 9.51c0 1.932.733 3.72 1.917 5.045L4.359 18.63c-.07.144-.07.284.035.396a.38.38 0 0 0 .386.108l3.135-.964.939 3.577c.035.144.14.252.276.252h.035c.14 0 .246-.072.316-.18l2.403-4.44 2.543 4.436c.07.108.176.18.316.18h.035c.14-.036.245-.108.277-.252l.938-3.577 3.17.964c.141.036.277 0 .386-.108.172-.14.172-.284.102-.428ZM9.307 20.708l-.803-3.113c-.035-.108-.07-.18-.175-.216-.105-.036-.175-.036-.277-.036l-2.648.824 1.706-3.144a7.456 7.456 0 0 0 4.25 1.932l-2.053 3.753Zm6.376-3.338a2.56 2.56 0 0 1-.035.013c-.07.036-.14.144-.176.216l-.837 3.113-2.162-3.757c1.64-.108 3.17-.788 4.39-1.896l1.74 3.112-2.679-.824c-.092-.032-.158-.008-.241.023Z"
            />
        </svg>
    );
};

export default IconWinnerEuroLight;
