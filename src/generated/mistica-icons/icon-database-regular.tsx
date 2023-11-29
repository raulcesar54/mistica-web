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

const IconDatabaseRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.912 2H4v20h16V4.144C20 2.964 19.06 2 17.912 2ZM5.393 9.145h13.218v4.608H5.393V9.145Zm13.214-5.001v3.927H5.393V3.43h12.52c.382 0 .694.32.694.713ZM5.393 20.574v-5.751h13.218v5.75H5.393Zm4.345-15H6.956a.544.544 0 0 1-.52-.534c0-.283.244-.535.52-.535h2.782c.277 0 .521.252.521.535a.544.544 0 0 1-.52.535Zm0 4.64H6.956a.544.544 0 0 0-.52.536c0 .283.244.535.52.535h2.782c.277 0 .521-.252.521-.535a.54.54 0 0 0-.52-.535ZM6.956 15.93h2.782c.28 0 .521.252.521.535a.544.544 0 0 1-.52.535H6.955a.544.544 0 0 1-.52-.535c0-.283.244-.535.52-.535Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m21.85 9.768-.006 4.46c0 .314-.101.602-.266.84.168.241.271.532.271.849l-.005 4.46a1.46 1.46 0 0 1-1.451 1.464H3.61a1.46 1.46 0 0 1-1.448-1.465l.006-4.46c0-.313.098-.601.263-.84a1.48 1.48 0 0 1-.272-.848l.006-4.46c0-.313.098-.602.263-.84a1.48 1.48 0 0 1-.272-.849l.006-4.459c0-.807.65-1.465 1.448-1.465h16.782A1.46 1.46 0 0 1 21.84 3.62l-.006 4.46c0 .313-.098.602-.266.84.177.24.28.532.28.848ZM3.397 3.62l-.005 4.46c0 .12.098.223.221.223h16.782c.123 0 .22-.1.22-.224l.006-4.459a.22.22 0 0 0-.22-.221H3.616a.22.22 0 0 0-.219.221Zm14.813 3.835c-1.023 0-1.63-.617-1.63-1.65 0-1.034.61-1.65 1.63-1.65s1.63.616 1.63 1.65c0 1.03-.608 1.65-1.63 1.65Zm-.65-1.65c0 .484.17.658.65.658.479 0 .65-.174.65-.658 0-.488-.171-.658-.65-.658-.48 0-.65.173-.65.658Zm.63 4.546c1.023 0 1.63.616 1.63 1.65 0 1.034-.61 1.65-1.63 1.65s-1.63-.616-1.63-1.65c0-1.03.61-1.65 1.63-1.65Zm.65 1.65c0-.485-.17-.658-.65-.658-.479 0-.65.173-.65.658.003.487.171.658.65.658.48 0 .65-.174.65-.658Zm-.65 4.552c1.023 0 1.63.616 1.63 1.65 0 1.033-.61 1.65-1.63 1.65s-1.63-.617-1.63-1.65c0-1.034.61-1.65 1.63-1.65Zm0 2.308c.48 0 .65-.174.65-.658 0-.485-.17-.659-.65-.659-.479 0-.65.174-.65.659.003.484.171.658.65.658Zm2.429-2.944a.22.22 0 0 0-.222-.221H3.617c-.12 0-.219.1-.219.224l-.005 4.46a.22.22 0 0 0 .221.22h16.782a.226.226 0 0 0 .218-.224l.006-4.46Zm-.227-1.468c.123 0 .221-.1.221-.224l.006-4.46a.22.22 0 0 0-.222-.22H3.617a.22.22 0 0 0-.219.22l-.005 4.46a.22.22 0 0 0 .218.224h16.782ZM4.289 5.802c0 .345.275.622.614.622h5.683a.617.617 0 0 0 .614-.622.617.617 0 0 0-.614-.622H4.903a.617.617 0 0 0-.614.622Zm6.297 5.58c.339 0 .614.277.614.622a.619.619 0 0 1-.614.622H4.903a.617.617 0 0 1-.614-.622c0-.345.275-.622.614-.622h5.683Zm.614 6.86a.617.617 0 0 0-.614-.622H4.903a.617.617 0 0 0-.614.622c0 .344.275.622.614.622h5.683a.617.617 0 0 0 .614-.622Z"
                />
            </svg>
        );
    }
};

export default IconDatabaseRegular;
