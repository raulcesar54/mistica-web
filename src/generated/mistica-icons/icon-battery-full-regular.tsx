/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconBatteryFullRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M18.15 7.539c0-1.053-.275-1.832-.84-2.384-.566-.555-1.373-.824-2.46-.824h-.188v-.666c0-.474-.134-.849-.406-1.112-.269-.266-.655-.398-1.145-.398h-2.225c-.487 0-.873.134-1.142.406-.27.263-.407.636-.407 1.104v.666H9.15c-1.079 0-1.883.275-2.457.84-.568.558-.843 1.331-.843 2.368V18.63c0 1.065.277 1.849.849 2.398.566.546 1.367.812 2.448.812h5.706c1.081 0 1.882-.266 2.448-.812.572-.55.849-1.333.849-2.398V7.54zm-7.947-3.874c0-.359.118-.474.157-.51.04-.04.157-.154.53-.154h2.223c.379 0 .493.112.53.148v.001c.038.037.151.15.151.515v.666h-3.591v-.666zm7.079 14.966c-.003.826-.197 1.415-.592 1.796-.395.38-.997.566-1.837.566H9.147c-.843 0-1.443-.185-1.838-.566-.397-.381-.59-.97-.59-1.796V7.54c0-.804.193-1.381.59-1.773.404-.395 1.003-.589 1.838-.589h5.706c.843 0 1.445.188 1.84.575.395.383.588.969.588 1.787v11.09zm-1.72-.636c0 .661-.555 1.2-1.233 1.2H9.668c-.68 0-1.232-.539-1.232-1.2V7.458h7.126v10.537zm.868-10.96a.427.427 0 00-.434-.423H7.999a.429.429 0 00-.435.423v10.96c0 1.13.944 2.045 2.104 2.045h4.658c1.163 0 2.104-.916 2.104-2.045V7.035z"
            />
        </svg>
    );
};

export default IconBatteryFullRegular;
