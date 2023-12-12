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

const IconFileJpegRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M11.984 13.265c0-1.014.535-1.703 1.642-1.703.322 0 .705.067.915.157l-.095.54a2.891 2.891 0 0 0-.767-.117c-.656 0-.925.39-.925 1.095 0 .364.048.664.19.863.118.165.315.26.628.26.118 0 .28-.014.395-.033v-.684h-.456v-.532h1.19v1.655a4.525 4.525 0 0 1-1.157.166c-1.165.002-1.56-.639-1.56-1.667M4.194 14.327l.053.566c.233.03.34.041.5.041.366 0 .601-.067.75-.21.165-.165.232-.383.232-.787v-2.313h-.74v2.297c0 .36-.097.445-.411.445-.07 0-.235-.011-.384-.04M7.533 11.624H6.421v3.246h.74v-1.12h.52c.426 0 .72-.101.911-.314.16-.18.24-.44.24-.787 0-.348-.083-.597-.26-.76-.21-.195-.532-.265-1.039-.265m-.011 1.568c.238 0 .336-.033.431-.123.084-.084.13-.224.13-.412 0-.176-.04-.302-.124-.384-.09-.08-.227-.114-.457-.114h-.347v1.033zM11.544 11.624h-2.19v3.24h2.216v-.535h-1.477V13.5h1.115v-.554h-1.115v-.787h1.395zM20.116 7.803l.003.003v-.003z"
            />
            <path
                fill={fillColor}
                d="M21.794 7.912c.03.073.047.154.047.238v12.306c0 .75-.644 1.383-1.409 1.383H8.25c-.75 0-1.409-.647-1.409-1.383l.034-2.774h-2.3a2.427 2.427 0 0 1-2.42-2.425v-4.093a2.427 2.427 0 0 1 2.42-2.426h2.266V3.534c0-.726.673-1.384 1.41-1.384h7.414c.23 0 .445.087.61.244l5.3 5.132c.11.106.174.243.219.386m-1.362 12.712c.098 0 .194-.096.194-.168V9.02h-2.314c-1.014 0-1.888-.33-2.532-.952-.65-.63-.995-1.487-.995-2.482V3.37H8.25c-.073 0-.187.109-.193.168v5.201h6.364c1.336 0 2.42 1.09 2.42 2.426v4.093a2.426 2.426 0 0 1-2.42 2.425h-6.33l-.034 2.78c0 .05.1.159.193.159h12.182zM3.368 15.259c0 .667.54 1.21 1.207 1.21h9.846a1.21 1.21 0 0 0 1.207-1.21v-4.092c0-.667-.54-1.21-1.207-1.21H4.575a1.21 1.21 0 0 0-1.207 1.21zm16.748-7.456L16.004 3.82v1.764c0 .659.215 1.213.622 1.608.414.4.997.61 1.689.61z"
            />
        </svg>
    );
};

export default IconFileJpegRegular;
