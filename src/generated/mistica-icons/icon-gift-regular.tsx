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

const IconGiftRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^vivo-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M13.947 2.685h.002c.622-.394 1.373-.649 2.175-.484.806.166 1.393.7 1.803 1.313l.001.001c.4.6.69 1.358.509 2.182-.115.53-.4.96-.753 1.302H20.5a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.268 1.482v7.225c0 .886-.685 1.634-1.494 1.634H4.727c-.809 0-1.495-.748-1.495-1.634v-7.231A1.5 1.5 0 0 1 2 11.499v-3a1.5 1.5 0 0 1 1.5-1.5h2.752c-.35-.34-.633-.769-.748-1.298-.18-.823.107-1.583.51-2.185.506-.756 1.27-1.364 2.303-1.364.619 0 1.188.227 1.676.535.657.415 1.153 1.186 1.48 1.775.182.33.35.678.496 1.011.148-.334.317-.682.5-1.014.327-.59.823-1.358 1.478-1.774m3.269 2.745c.081-.367-.031-.776-.328-1.221-.594-.888-1.359-1.045-2.272-.468-.468.297-.943 1.06-1.318 1.835-.207.43-.385.862-.514 1.22.379.031.845.05 1.323.041.894-.015 1.828-.123 2.3-.421.456-.289.73-.622.809-.986m-10.487 0c.078.364.353.697.81.986.47.298 1.405.406 2.299.421.478.008.944-.01 1.322-.04a12.83 12.83 0 0 0-.514-1.22c-.375-.775-.85-1.539-1.318-1.836-.913-.577-1.678-.42-2.271.468-.297.445-.41.854-.328 1.221M20.5 8.249h-17a.25.25 0 0 0-.25.25v3a.25.25 0 0 0 .138.223h17.224a.25.25 0 0 0 .138-.223v-3a.25.25 0 0 0-.25-.25M4.482 20.206c0 .12.048.23.116.305.069.075.12.079.129.079h14.511c.008 0 .06-.004.128-.08a.456.456 0 0 0 .116-.304V13h-15z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.998 8.037h-.167a3.88 3.88 0 0 0 .712-2.265C18.543 3.657 16.946 2 14.907 2c-1.578 0-2.886.99-3.398 2.42a2.952 2.952 0 0 0-1.69-.532c-1.555 0-2.728 1.218-2.728 2.83 0 .484.107.933.298 1.32H6.002C4.88 8.037 4 9.031 4 10.301v10.945c0 .415.326.753.726.753h14.548c.4 0 .726-.338.726-.753v-10.95c0-1.265-.88-2.26-2.002-2.26Zm.545 2.26v1.13h-5.82V9.54h5.275c.4.005.545.46.545.758ZM17.09 5.772c0 1.29-.935 2.265-2.183 2.265h-2.183V5.772c0-1.29.94-2.265 2.183-2.265 1.243 0 2.183.975 2.183 2.265Zm-8.546.942c0-.778.52-1.319 1.27-1.319.699 0 1.453.507 1.453 1.319v1.318H9.814c-.75.005-1.27-.54-1.27-1.318Zm2.727 2.83v1.888H5.452v-1.13c0-.304.145-.758.545-.758h5.274ZM5.452 12.94h5.82v7.544h-5.82V12.94Zm7.272 0h5.819v7.544h-5.82V12.94Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.74 6.95h2.638c.768 0 1.465.776 1.465 1.63v2.927c0 .821-.577 1.513-1.294 1.614v7.087c0 .885-.672 1.633-1.465 1.633H4.857c-.792 0-1.465-.748-1.465-1.633v-7.093c-.686-.129-1.232-.81-1.232-1.605V8.583c0-.854.697-1.633 1.465-1.633h2.577c-.37-.373-.628-.796-.728-1.258-.152-.692.025-1.437.507-2.16.983-1.47 2.532-1.79 4.044-.831.827.52 1.496 1.694 1.947 2.717.454-1.023 1.12-2.194 1.947-2.717 1.513-.958 3.062-.639 4.045.832.482.722.658 1.467.507 2.16-.101.461-.359.884-.731 1.257m-3.123-3.207c-.729.462-1.471 2.05-1.833 3.056 1.087.087 2.9.075 3.622-.381.457-.289.732-.622.81-.986.081-.367-.03-.776-.328-1.222-.594-.887-1.358-1.044-2.272-.467m-6.3-.34c-.48 0-.902.27-1.264.81-.296.443-.409.855-.327 1.224.078.365.353.698.81.986.72.457 2.532.468 3.618.381-.358-1.008-1.1-2.6-1.829-3.059-.358-.226-.697-.341-1.008-.341M3.44 8.58h.003v2.927c0 .21.134.364.193.387h7.672v-3.7H3.625a.556.556 0 0 0-.185.386m17.12 2.93V8.583c0-.193-.15-.367-.212-.39l-7.762.003v3.7h7.79c.044-.013.184-.173.184-.386m-1.476 9.084c.042-.014.182-.174.185-.386V13.14h-6.68v7.454zM4.673 13.14v7.068c0 .213.14.37.198.386h6.435V13.14z"
                />
            </svg>
        );
    }
};

export default IconGiftRegular;
