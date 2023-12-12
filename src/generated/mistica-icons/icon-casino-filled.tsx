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

const IconCasinoFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M19.855 8.484c1.311 1.266 1.978 3.14 1.978 5.566 0 2.426-.667 4.294-1.98 5.558-1.258 1.21-3.079 1.823-5.41 1.823-2.33 0-4.148-.614-5.4-1.826-.672-.647-1.168-1.457-1.499-2.423-1.395-.258-2.546-.804-3.417-1.647-1.305-1.258-1.966-3.13-1.966-5.555 0-2.426.66-4.3 1.966-5.563C5.382 3.196 7.2 2.58 9.53 2.58c2.328 0 4.149.616 5.41 1.834.672.647 1.17 1.457 1.5 2.415 1.393.263 2.544.812 3.415 1.655m-9.697-3.252c.98.081 1.798.353 2.442.815l1.082-1.08c-.883-.67-2.065-1.046-3.524-1.127zM3.42 9.372h1.39c.078-.98.336-1.804.79-2.45L4.527 5.845C3.872 6.73 3.5 7.91 3.42 9.372m6.115 4.143c.034 0 .064-.003.094-.006.03-.002.059-.005.09-.005.264-.009.513-.025.743-.062.177-.028.345-.064.502-.109.492-.14.902-.353 1.212-.65.474-.457.754-1.131.852-1.997a6.16 6.16 0 0 0 .045-.703c0-.176-.015-.338-.03-.5l-.007-.063c-.047-.53-.162-.983-.344-1.37a2.533 2.533 0 0 0-.521-.776c-.112-.11-.25-.199-.387-.288-.563-.362-1.313-.552-2.257-.552-1.174 0-2.062.283-2.636.84-.594.574-.897 1.488-.897 2.709s.3 2.131.894 2.703c.046.044.1.081.153.118.031.022.063.043.093.067.325.24.723.414 1.194.518l.088.02c.059.014.117.028.18.039.298.036.6.067.939.067m7.557 3.232c.594-.574.897-1.481.897-2.703 0-1.22-.303-2.131-.9-2.708-.05-.049-.111-.09-.17-.13a3.105 3.105 0 0 1-.068-.047 8.59 8.59 0 0 1-.465 2.112c-.33.894-.812 1.653-1.45 2.266a5.657 5.657 0 0 1-1.149.846 6.87 6.87 0 0 1-1.602.647c.56.362 1.31.552 2.26.552 1.18 0 2.07-.28 2.647-.835m2.359 1.44c.664-.876 1.04-2.053 1.12-3.51h-1.389c-.081.975-.347 1.793-.804 2.435zm-5.616.594c-.97-.078-1.785-.342-2.426-.793l-1.081 1.082c.88.652 2.056 1.022 3.507 1.1zm-4.916-4.07c-.06-.005-.122-.008-.184-.011-.093-.005-.186-.009-.27-.022-.027-.004-.052-.01-.077-.018a.637.637 0 0 0-.055-.013 4.91 4.91 0 0 1-1.207-.373c-.014-.005-.03-.014-.042-.02a4.033 4.033 0 0 1-.591-.336l-1.081 1.084c.504.376 1.109.653 1.804.838.403.11.837.185 1.302.23l.138.012c.087.008.174.016.263.021zm5.35-4.1c-.025.313-.073.61-.137.89a4.383 4.383 0 0 1-.667 1.543l.465.465.608.611c.151-.202.288-.42.409-.653.21-.403.38-.846.501-1.341.11-.46.18-.955.21-1.493v-.023zm2.507-2.432c.081.496.123 1.025.134 1.585.219.101.42.219.608.35l1.079-1.078c-.508-.386-1.12-.667-1.821-.857m-6.283 3.67c.272-.286.454-.51.65-.802l.028-.041a2.35 2.35 0 0 0 .056-.085c.11-.17.193-.341.277-.512.11-.213.193-.426.258-.639.01-.037.024-.073.038-.108.017-.047.035-.093.046-.139.1-.422.056-.809-.101-1.131a1.322 1.322 0 0 0-.316-.432 1.52 1.52 0 0 0-.827-.333.378.378 0 0 1-.042-.007.36.36 0 0 0-.036-.007 1.862 1.862 0 0 0-.986.238 1.828 1.828 0 0 0-.989-.238 1.497 1.497 0 0 0-.902.35c-.415.356-.569.927-.417 1.563.098.412.283.832.535 1.25l.042.075c.013.025.026.05.042.076.232.364.428.608.74.93l.008.008c.006.005.013.01.016.014.05.05.163.16.266.236a1.216 1.216 0 0 0 .583.218l.079.003.056-.003a.957.957 0 0 0 .16-.025c.014-.002.026-.007.039-.011a1.138 1.138 0 0 0 .403-.185c.112-.082.246-.216.294-.264"
            />
        </svg>
    );
};

export default IconCasinoFilled;
