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

const IconPresentationLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.802 6.202a.686.686 0 0 1 .222.484v.692c0 .367-.331.647-.821.75a.95.95 0 0 1 .062.295v8.479c0 .557-.521 1.005-1.169 1.005H12.39v1.664c.463.127.83.485.83 1.104 0 .787-.591 1.154-1.166 1.162h-.1c-.578-.008-1.168-.366-1.168-1.162 0-.639.383-1 .837-1.118V17.91l-6.667-.008c-.445.03-.745-.146-.899-.286a.97.97 0 0 1-.316-.706V8.43c0-.104.03-.208.061-.295-.246-.05-.453-.131-.59-.263a.69.69 0 0 1-.233-.484l.008-.692c0-.463.524-.793 1.247-.793h2.742l3.91-2.081a1.261 1.261 0 0 1-.1-.507c0-.796.59-1.154 1.176-1.163h.092c.577.017 1.166.384 1.166 1.168 0 .177-.031.34-.093.48l3.65 2.103h2.958c.468-.017.835.092 1.067.3ZM11.55 3.31c0 .12 0 .426.423.434.476-.006.476-.314.476-.426 0-.117 0-.425-.423-.434.003-.003-.067-.003-.067-.003-.409 0-.409.308-.409.429Zm-.106 1.05L8.556 5.9h6.737l-2.698-1.552a1.373 1.373 0 0 1-.546.132h-.084a1.399 1.399 0 0 1-.521-.118Zm8.826 2.95s.07-.011.07-.286c0-.26-.092-.333-.092-.333-.042-.034-.138-.056-.451-.056H4.126c-.212-.002-.274-.003-.374.092-.003 0-.067.07-.065.328.003.24.115.308.115.308l.007.005c.057.042.097.07.4.07h15.57c.292-.002.469-.092.491-.128Zm-.776 9.588V8.431a.232.232 0 0 0-.07-.176c-.053-.05-.151-.065-.269-.081H4.83c-.176.03-.322.131-.322.257v8.48c0 .064.023.125.079.167.07.065.193.087.353.087l14.16.009c.204 0 .394-.126.394-.275Zm-3.602-1.543a.381.381 0 0 0-.384-.367h-7.16l1.258-1.869 2.605.97c.154.056.33.01.437-.118l1.927-2.317.06.381c.024.177.193.309.377.309h.054c.215-.037.36-.222.322-.418l-.185-1.185a.383.383 0 0 0-.378-.308h-1.367a.37.37 0 0 0-.384.367v.008c.006.205.18.365.384.36h.53l-1.768 2.13-2.636-.977a.38.38 0 0 0-.462.149l-1.297 1.935v-3.955a.377.377 0 0 0-.384-.367.381.381 0 0 0-.384.367v4.905c.006.207.177.37.384.367h8.067a.375.375 0 0 0 .384-.367Zm-3.443 5.316c0-.117 0-.42-.423-.425h-.07c-.409 0-.409.308-.409.425 0 .11 0 .426.415.426.487-.006.487-.308.487-.426Z"
            />
        </svg>
    );
};

export default IconPresentationLight;
