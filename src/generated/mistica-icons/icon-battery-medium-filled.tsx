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

const IconBatteryMediumFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M17.279 5.152c.588.583.874 1.392.874 2.482v10.86c0 1.098-.289 1.913-.883 2.493-.588.574-1.412.854-2.515.854H9.248c-1.104 0-1.927-.28-2.516-.854-.593-.583-.882-1.398-.882-2.496V7.634c0-1.073.286-1.88.874-2.465.591-.588 1.409-.877 2.493-.882V3.84c0-.515.151-.93.454-1.23.302-.302.725-.456 1.255-.456h2.148c.532 0 .955.151 1.258.451.3.3.454.714.454 1.235v.446c1.092.005 1.91.288 2.493.865m-6.802-1.31v.445h3.048V3.84c0-.103-.011-.285-.087-.358-.072-.073-.257-.084-.361-.084h-2.149c-.126 0-.288.014-.36.087-.074.072-.09.232-.09.355m6.415 3.792c0-.742-.165-1.266-.507-1.605-.342-.336-.874-.501-1.63-.501H9.248c-.745 0-1.277.168-1.625.515-.344.342-.512.863-.512 1.591v10.857c0 .748.165 1.277.51 1.61.338.334.87.494 1.624.494h5.51c.753 0 1.288-.16 1.627-.493.345-.33.51-.86.51-1.608zm-.748 4.97a.626.626 0 0 0-.63-.623H8.492c-.348 0-.63.28-.63.622v5.266c0 1.219 1.005 2.207 2.24 2.207h3.801c1.236 0 2.241-.988 2.241-2.207z"
            />
        </svg>
    );
};

export default IconBatteryMediumFilled;
