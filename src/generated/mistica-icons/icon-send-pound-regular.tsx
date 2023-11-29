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

const IconSendPoundRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.518 12.193V2h-9.889c-.578 0-1.098.352-1.317.907-.218.554-.1 1.178.31 1.601l2.156 2.222L9.98 9.619a.75.75 0 0 0 0 1.038.697.697 0 0 0 1.007 0l3.805-3.927-3.163-3.26h8.467v8.723l-3.163-3.26-3.955 4.077a.75.75 0 0 0 0 1.038.69.69 0 0 0 1.003 0l2.948-3.04 2.16 2.223c.405.422 1.016.55 1.55.319.532-.23.879-.76.879-1.357ZM4.753 20.9h4.302a.54.54 0 0 1 .533.55.54.54 0 0 1-.533.55H3.003a.54.54 0 0 1-.533-.55.54.54 0 0 1 .533-.55c.497 0 .902-.418.902-.93l-.004-2.372h-.542a.54.54 0 0 1-.534-.55.54.54 0 0 1 .534-.55H3.9l-.005-2.385c0-1.517 1.199-2.753 2.67-2.753.67 0 1.286.24 1.778.69.219.203.237.55.04.776a.518.518 0 0 1-.751.047 1.551 1.551 0 0 0-1.07-.414c-.903 0-1.605.728-1.605 1.654l.005 2.386h2.31a.54.54 0 0 1 .533.55.54.54 0 0 1-.533.549H4.967l.005 2.372c0 .333-.078.653-.219.93Z"
            />
        </svg>
    );
};

export default IconSendPoundRegular;
