'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconListLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M4.182 6.886A2.19 2.19 0 0 1 2 4.693C2 3.482 2.977 2.5 4.182 2.5c1.206 0 2.183.982 2.183 2.193a2.188 2.188 0 0 1-2.183 2.193ZM2 12.002a2.19 2.19 0 0 0 2.182 2.193 2.188 2.188 0 0 0 2.183-2.193A2.188 2.188 0 0 0 4.182 9.81 2.188 2.188 0 0 0 2 12.002Zm.73 0a1.451 1.451 0 1 1 2.904 0c0 .805-.651 1.46-1.452 1.46-.8 0-1.451-.655-1.451-1.46ZM4.183 21.5A2.19 2.19 0 0 1 2 19.307c0-1.211.977-2.193 2.182-2.193 1.206 0 2.183.982 2.183 2.193A2.188 2.188 0 0 1 4.182 21.5Zm-1.451-2.193c0 .804.651 1.459 1.451 1.459s1.452-.655 1.452-1.46c0-.803-.647-1.458-1.452-1.458-.8 0-1.451.655-1.451 1.459Zm0-14.614c0 .805.651 1.46 1.451 1.46s1.452-.655 1.452-1.46c0-.804-.647-1.459-1.452-1.459-.8 0-1.451.655-1.451 1.46ZM22 4.328a.364.364 0 0 0-.363-.364H7.821a.364.364 0 0 0 0 .73h13.816c.2.004.363-.16.363-.366Zm-.363 7.31a.364.364 0 0 1 0 .73H7.821a.364.364 0 0 1 0-.73h13.816Zm-2.182 8.038a.364.364 0 0 0-.363-.364H7.822a.364.364 0 0 0 0 .729h11.27c.2 0 .363-.164.363-.365Zm1.814.73a.729.729 0 0 1-.725-.73.726.726 0 1 1 1.451 0c0 .402-.325.73-.726.73Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M2.155 6.788c0 .519.426.939.95.939.523 0 .95-.423.95-.939a.944.944 0 0 0-.95-.938c-.524 0-.95.42-.95.938Zm2.801-.002c0 .31.26.56.58.56H21.26c.32 0 .58-.252.58-.56a.57.57 0 0 0-.58-.56H5.536a.581.581 0 0 0-.58.56Zm16.305 4.652c.32 0 .58.25.58.56 0 .311-.26.56-.58.56H5.536a.57.57 0 0 1-.58-.56c0-.31.26-.56.58-.56H21.26Zm-19.106.56c0 .519.426.939.95.939.523 0 .95-.42.95-.938a.944.944 0 0 0-.95-.939c-.524 0-.95.42-.95.938Zm19.106 4.653c.155 0 .3.059.41.163.109.103.17.246.17.395 0 .308-.26.56-.58.56H5.536a.581.581 0 0 1-.58-.56c0-.308.26-.56.58-.56H21.26v.002Zm-19.106.56c0 .519.426.939.95.939.523 0 .95-.42.95-.939a.944.944 0 0 0-.95-.938c-.524 0-.95.42-.95.938Z"
                />
            </svg>
        );
    }
};

export default IconListLight;
