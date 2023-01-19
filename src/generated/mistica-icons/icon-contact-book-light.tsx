/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconContactBookLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M11.192 11.748c-1.579 0-2.45-.839-2.45-2.357 0-1.524.871-2.366 2.45-2.366 1.581 0 2.454.839 2.454 2.366-.003 1.518-.873 2.357-2.454 2.357zm-1.36-3.705c-.31.287-.467.74-.467 1.345 0 .606.157 1.058.463 1.342.299.276.756.418 1.36.418.605 0 1.066-.139 1.367-.418.31-.287.466-.74.466-1.342 0-.606-.157-1.058-.466-1.345-.301-.279-.759-.42-1.363-.42-.605 0-1.063.141-1.36.42zm-2.895 8.332c.06.06.142.091.227.091h8.052c.177 0 .322-.14.322-.31v-1.004c0-.733-.24-1.359-.69-1.814-.494-.492-1.22-.754-2.105-.754H9.637c-.885 0-1.611.26-2.104.754-.451.452-.69 1.08-.69 1.814v1.004a.31.31 0 00.094.22zm.549-1.223c0-1.24.782-1.95 2.15-1.95h3.11c1.367 0 2.151.71 2.151 1.95v.694H7.486v-.694z"
            />
            <path
                fill={fillColor}
                d="M7.362 22h9.47c1.47 0 2.668-1.155 2.668-2.568V4.571C19.5 3.15 18.302 2 16.833 2H7.07C5.654 2 4.5 3.112 4.5 4.477v14.765C4.5 20.763 5.783 22 7.362 22zM18.878 4.57v4.07h-1.101V2.823c.653.33 1.1.99 1.1 1.748zM16.833 2.6c.11 0 .219.009.324.025v18.747a2.13 2.13 0 01-.324.025H7.362c-1.233 0-2.24-.967-2.24-2.158V4.474c0-1.035.874-1.877 1.948-1.877V2.6h9.763zm.944 12.76h1.1v4.066c0 .759-.447 1.419-1.1 1.748V15.36zm0-.597V9.237h1.1v5.526h-1.1z"
            />
        </svg>
    );
};

export default IconContactBookLight;
