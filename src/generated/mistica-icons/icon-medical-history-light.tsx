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

const IconMedicalHistoryLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M5.201 21.287h13.602c.21 0 .349.142.349.356 0 .215-.139.357-.349.357H4.5V4.857c0-1.001.768-1.787 1.746-1.787h1.746V2h7.668v1.074h1.746c.978 0 1.746.787 1.746 1.788v12.493c0 .215-.139.357-.349.357-.21 0-.348-.142-.348-.357V4.857c0-.603-.451-1.07-1.045-1.07h-1.742V5.58H7.992V3.792H6.246c-.59 0-1.045.462-1.045 1.07v6.427h.87L7.676 8.61a.364.364 0 0 1 .313-.178.37.37 0 0 1 .312.178l2.479 4.43 1.777-3.323c.067-.106.174-.179.277-.179.138 0 .241.037.312.142l1.117 1.61h1.393c.21 0 .348.14.348.356 0 .215-.138.356-.348.356h-1.393c-.103 0-.277-.036-.348-.141l-.943-1.322-1.848 3.429a.364.364 0 0 1-.313.178.37.37 0 0 1-.313-.178l-2.51-4.466-1.464 2.322c-.031.105-.174.178-.277.178H5.201v9.285Zm9.766-18.57H8.69v2.145h6.278V2.718Zm.697 14.286H7.992c-.21 0-.348.142-.348.357s.138.357.348.357h7.676c.21 0 .349-.142.349-.357s-.143-.357-.353-.357Zm2.443 2.496c0-.393.312-.713.696-.713.384 0 .697.32.697.713a.706.706 0 0 1-.697.714.706.706 0 0 1-.696-.714Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M19.382 4.746c0-.591-.686-1.132-1.443-1.132h-3.154c-.32-.717-1.064-1.459-2.781-1.459-1.412 0-2.367.513-2.787 1.457H6.063c-.754 0-1.443.54-1.443 1.134V20.71c0 .613.661 1.131 1.443 1.131h11.876c.782 0 1.443-.515 1.443-1.131zM12 2.956c1.17 0 1.86.381 2.106 1.168.068.224.104.457.11.692v.132c-.012.344-.031.818-2.219.818-2.187 0-2.204-.474-2.218-.866l.005-.154c.06-1.221.76-1.79 2.216-1.79m6.571 17.754c0 .109-.274.33-.63.33H6.065c-.355 0-.63-.218-.63-.33V4.746c0-.078.26-.33.63-.33h2.95a2.772 2.772 0 0 1-.013.086c-.01.06-.019.122-.02.188l-.006.092v.194c.047 1.32 1.246 1.59 3.03 1.59 1.785 0 2.984-.268 3.029-1.573l.002-.093-.008-.19a3.335 3.335 0 0 0-.03-.294h2.943c.37 0 .63.249.63.33zM11.1 5.088a.405.405 0 0 1-.406-.4c0-.222.182-.401.406-.401H12.9c.224 0 .406.179.406.4 0 .222-.182.4-.406.4zm7.036 9.07c0-.221-.182-.4-.406-.4l-2.577.002-.815-2.291a.403.403 0 0 0-.395-.266.402.402 0 0 0-.378.285l-.675 2.272h-.664a.41.41 0 0 0-.39.283l-.268.874-1.02-5.028a.403.403 0 0 0-.378-.322.391.391 0 0 0-.409.28l-1.21 3.857H6.273a.402.402 0 0 0-.407.4.403.403 0 0 0 .407.401H8.85c.179 0 .336-.115.389-.283l.826-2.633 1.023 5.042a.403.403 0 0 0 .378.322h.02c.179 0 .336-.114.389-.283l.653-2.112h.666a.403.403 0 0 0 .39-.285l.406-1.367.493 1.386a.41.41 0 0 0 .383.266h2.863c.224 0 .406-.179.406-.4"
                />
            </svg>
        );
    }
};

export default IconMedicalHistoryLight;
