/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconBoatLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.838 12.864a.41.41 0 00-.409-.415l-3.902-.002c-.056-1.076-.398-1.95-1.045-2.577-1.079-1.047-2.588-1.043-2.772-1.042h-.018l-2.526-.003V4.217a.41.41 0 00-.41-.415H6.632a.412.412 0 00-.41.415v4.614c-.565 0-.98 0-1.13.002-.421.006-.648.177-.763.32a.751.751 0 00-.17.551l-.023 2.731-1.574-.002h-.023a.41.41 0 00-.386.431l.277 6.034c.02.45.294 1.305 1.19 1.305h12.698c.018.002.05.003.093.003a5.094 5.094 0 003.42-1.404c1.333-1.271 2.008-3.268 2.008-5.938zM10.345 5.433H7.04v-.801h3.305v.8zm-5.24 4.224c.257-.006 1.302-.006 2.579-.006 1.014 0 2.179.004 3.212.008 1.546.005 2.798.01 2.813-.002h.002c.064-.001 1.348-.026 2.211.815.462.448.728 1.076.796 1.868l-11.762.017-.003-2.675.003-.001a.393.393 0 01.148-.024zm14.173 8.535c-1.225 1.174-2.72 1.183-2.929 1.184H3.62c-.325 0-.367-.43-.373-.515l-.255-5.602 18.023.02c-.065 2.215-.648 3.865-1.737 4.913zM7.04 8.819V6.26h3.305v2.56H7.04zm-.527 7.07a.418.418 0 010 .835.415.415 0 01-.412-.417.414.414 0 01.412-.418zm-1.232.418a1.243 1.243 0 001.232 1.246c.678 0 1.233-.56 1.233-1.246a1.24 1.24 0 00-1.233-1.247c-.68 0-1.232.56-1.232 1.247zm5.35-.42a.418.418 0 010 .835.418.418 0 010-.835zm-1.233.42a1.24 1.24 0 001.233 1.246c.68 0 1.232-.56 1.232-1.246 0-.687-.554-1.247-1.232-1.247-.678 0-1.233.56-1.233 1.247zm5.353-.42c.227 0 .412.187.412.417 0 .23-.185.417-.412.417a.416.416 0 01-.414-.417c0-.23.184-.417.414-.417zm-1.232.42a1.243 1.243 0 001.232 1.246c.678 0 1.233-.56 1.233-1.246 0-.687-.555-1.247-1.233-1.247-.68 0-1.232.56-1.232 1.247z"
            />
        </svg>
    );
};

export default IconBoatLight;
