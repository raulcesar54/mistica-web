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

const IconTrashCanLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.176 4.5h-6.35v-.716c0-1-.775-1.784-1.763-1.784h-2.118c-.988 0-1.763.784-1.763 1.784V4.5h-6.35c-.214 0-.352.145-.352.357s.142.356.352.356h1.762v15.003c0 1 .775 1.784 1.763 1.784h11.29c.988 0 1.762-.784 1.762-1.784V9.146c0-.217-.142-.357-.351-.357-.214 0-.352.144-.352.356V20.22c0 .608-.458 1.072-1.06 1.072H6.357c-.6 0-1.058-.464-1.058-1.072V5.217h15.878c.213 0 .352-.144.352-.356s-.139-.36-.352-.36zm-11.29-.716c0-.608.458-1.072 1.059-1.072h2.118c.6 0 1.059.464 1.059 1.072V4.5H9.886v-.716z"
                />
                <path
                    fill={fillColor}
                    d="M19.77 7.001a.712.712 0 01-.708.716.712.712 0 01-.708-.716c0-.396.317-.716.708-.716.39 0 .707.32.707.716zM9.182 18.431V8.073c0-.216.142-.356.352-.356s.352.14.352.356v10.358c0 .212-.143.356-.352.356-.21 0-.352-.14-.352-.356zm4.94 0V8.073c0-.216.142-.356.352-.356s.351.14.351.356v10.358c0 .212-.142.356-.351.356-.21 0-.352-.14-.352-.356z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.813 6.783a.41.41 0 00-.384-.434H16.6V4.325c.004-.108.03-.997-.54-1.609-.345-.37-.821-.557-1.426-.557H9.369c-.095-.005-.795-.039-1.349.45-.417.376-.622.942-.622 1.687V6.35H2.561a.41.41 0 000 .818h1.694v11.548c-.005.144-.045 1.361.78 2.24.548.59 1.324.885 2.324.885h9.306c.277 0 1.4-.048 2.21-.835.574-.546.868-1.317.868-2.292V7.167h1.686a.41.41 0 00.384-.384zM8.219 4.296c-.003-.501.112-.86.35-1.073.283-.262.674-.25.758-.247h5.309c.367 0 .64.09.827.295.336.358.321.94.32 1.022V6.35H8.218V4.296zm10.706 14.417c0 .737-.204 1.311-.608 1.695-.646.63-1.615.615-1.698.614H7.356c-.753 0-1.333-.213-1.72-.622-.593-.62-.566-1.546-.563-1.66V7.167h13.852v11.546zM9.9 17.655a.408.408 0 01-.41-.41v-6.29a.41.41 0 01.819 0v6.29a.408.408 0 01-.41.41zm3.784-.41c0 .228.182.41.409.41a.408.408 0 00.409-.41v-6.29a.41.41 0 00-.818 0v6.29z"
                />
            </svg>
        );
    }
};

export default IconTrashCanLight;
