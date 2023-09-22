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

const IconTargetRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.478 4.906a.521.521 0 00-.483-.338h-1.924v-2.02c0-.22-.13-.422-.322-.506a.513.513 0 00-.572.117L15.73 4.728a.565.565 0 00-.152.39v2.338l-.962 1.01a7.191 7.191 0 00-2.671-1.55 6.984 6.984 0 00-5.592.578c-1.731.967-2.997 2.587-3.565 4.555-1.177 4.067 1.02 8.378 4.89 9.613A7.043 7.043 0 009.82 22a7.02 7.02 0 003.45-.911c1.73-.967 2.997-2.588 3.565-4.555a8.043 8.043 0 00-.38-5.513c-.166-.367-.582-.526-.931-.353a.75.75 0 00-.336.977 6.52 6.52 0 01.309 4.461c-.46 1.592-1.485 2.903-2.886 3.691a5.66 5.66 0 01-4.527.465c-3.136-1.005-4.912-4.494-3.963-7.786.46-1.592 1.485-2.902 2.885-3.69a5.66 5.66 0 014.527-.466 5.786 5.786 0 012.08 1.193l-1.239 1.3a4.038 4.038 0 00-2.567-.929c-2.313 0-4.197 1.977-4.197 4.405s1.884 4.405 4.197 4.405c2.312 0 4.196-1.977 4.196-4.405a4.507 4.507 0 00-.886-2.696l3.199-3.357h2.228a.512.512 0 00.37-.16l2.448-2.569a.571.571 0 00.116-.6zm-8.875 9.383c0 1.62-1.253 2.935-2.796 2.935-1.544 0-2.796-1.315-2.796-2.935s1.252-2.935 2.796-2.935c.581 0 1.123.188 1.57.507L9.435 13.9a.57.57 0 000 .78.509.509 0 00.743 0l1.941-2.038a3.02 3.02 0 01.484 1.648zm4.021-7.157v-1.79l1.396-1.464v1.24c0 .305.233.549.524.549h1.18L18.33 7.132h-1.705z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.853 12.025a.602.602 0 00-.58-.624l-1.546.003c-.294-6.241-5.398-7.149-7.126-7.27V2.732a.6.6 0 00-.569-.568.598.598 0 00-.633.568v1.381c-1.46.042-6.983.656-7.26 7.289h-1.41a.602.602 0 000 1.204h1.423c.373 6.384 5.723 7.079 7.25 7.14v1.53a.6.6 0 00.568.568.598.598 0 00.633-.568v-1.538c1.69-.104 6.774-.955 7.118-7.132h1.552a.6.6 0 00.58-.58zm-3.33.58c-.323 5.006-4.228 5.818-5.92 5.927v-.465a.6.6 0 00-.568-.568.598.598 0 00-.633.569v.476c-1.603-.067-5.703-.765-6.05-5.936h.588a.602.602 0 000-1.204h-.597c.258-5.395 4.493-6.04 6.059-6.087v.625a.6.6 0 00.568.568.598.598 0 00.633-.568v-.603c1.732.126 5.65.995 5.925 6.062h-.462a.602.602 0 000 1.204h.456zm-7.424-3.647c.202-.196.563-.238.832-.238s.636.042.838.238c.168.16.252.446.252.852 0 .403-.084.689-.25.849-.204.193-.568.235-.84.235-.269 0-.633-.042-.835-.235-.204-.197-.246-.569-.246-.85 0-.276.045-.652.25-.85zm-.725 2.454c.361.347.885.524 1.557.524.672 0 1.199-.177 1.563-.524.381-.364.572-.902.572-1.602 0-.698-.194-1.238-.572-1.602-.367-.35-.89-.53-1.563-.53-.67 0-1.196.18-1.557.53-.378.364-.569.902-.569 1.602 0 .7.19 1.238.569 1.602zM9.2 15.14c.011-.269.081-.61.32-.857.296-.308.77-.372 1.117-.372h2.594c.347 0 .823.067 1.12.375.238.247.308.585.32.854H9.2zm5.902-1.58c-.437-.453-1.084-.691-1.874-.691l-2.594-.003c-.787 0-1.434.24-1.87.694-.399.418-.609.995-.609 1.673v.708c0 .132.107.241.241.241h7.079a.24.24 0 00.24-.24v-.71c0-.677-.212-1.254-.613-1.671z"
                />
            </svg>
        );
    }
};

export default IconTargetRegular;
