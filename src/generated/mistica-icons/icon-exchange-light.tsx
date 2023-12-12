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

const IconExchangeLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="m19.148 3.994 2.574 2.603a.555.555 0 0 1 .065.585.529.529 0 0 1-.482.308l-1.025.011c-.132 1.048-.642 3.213-2.591 4.852 3.79 2.09 3.834 6.21 3.834 6.255 0 .877-.711 1.594-1.588 1.594a1.595 1.595 0 0 1-1.588-1.586c-.006-.383-.202-3.482-4.283-4.123l-.045.059c-.037.049-.073.098-.117.14-.446.426-1.084.641-1.905.641s-1.46-.215-1.902-.641a1.202 1.202 0 0 1-.114-.139l-.054-.071c-4.196.619-4.392 3.75-4.398 4.14a1.602 1.602 0 0 1-1.588 1.574 1.596 1.596 0 0 1-1.588-1.591c0-.045.044-4.202 3.907-6.289-1.919-1.65-2.417-3.86-2.543-4.826l-1.031-.008a.528.528 0 0 1-.48-.308.553.553 0 0 1 .074-.583l2.6-2.633c.055-.078.181-.146.321-.163.14-.016.28.023.392.113l.087.09 2.53 2.568c.16.193.187.426.098.613a.532.532 0 0 1-.482.308l-.919.009c.174.938.818 2.582 3.154 3.308.006-.006.01-.012.014-.018a.115.115 0 0 1 .014-.018c.443-.432 1.084-.648 1.902-.648.82 0 1.462.216 1.905.648l.01.011.015.017c2.348-.743 2.986-2.426 3.16-3.3l-.916-.009a.525.525 0 0 1-.476-.305.557.557 0 0 1 .067-.583l2.59-2.638c.287-.233.62-.194.802.033M4.705 18.608c.009-.46.225-4.104 4.835-4.902a3.49 3.49 0 0 1-.134-.975c0-.468.075-.877.215-1.224-3.165-1.104-3.54-3.77-3.585-4.39l-.03-.44 1.153-.005-1.896-1.927L3.36 6.672l1.053.011.084.381c.034.533.334 3.28 2.773 5.006l.597.423-.67.291c-3.938 1.717-4.025 5.782-4.025 5.824 0 .417.342.762.76.764a.777.777 0 0 0 .772-.764M19.501 7.062l.025-.387 1.11-.003-1.905-1.927-1.891 1.927 1.11.011.016.437c-.042.62-.417 3.286-3.588 4.39.14.347.218.753.218 1.224 0 .367-.05.692-.137.986 4.487.826 4.703 4.431 4.711 4.888.003.426.348.77.768.77a.77.77 0 0 0 .768-.77v-.006c-.008-.18-.158-4.101-3.956-5.798l-.666-.3.599-.417c2.479-1.726 2.782-4.49 2.818-5.025m-8.353 7.313c.235.087.518.132.849.132.328 0 .608-.045.846-.129.196-.07.361-.16.49-.286.132-.128.232-.296.305-.495.087-.241.137-.53.137-.869 0-.403-.07-.734-.196-.997a1.245 1.245 0 0 0-.249-.37 1.376 1.376 0 0 0-.54-.308 2.57 2.57 0 0 0-.793-.11 2.6 2.6 0 0 0-.796.11c-.215.07-.392.171-.532.305-.104.101-.182.23-.25.373-.123.263-.193.594-.193.997 0 .34.048.625.135.863.073.202.17.373.305.501a1.3 1.3 0 0 0 .482.283"
            />
        </svg>
    );
};

export default IconExchangeLight;
