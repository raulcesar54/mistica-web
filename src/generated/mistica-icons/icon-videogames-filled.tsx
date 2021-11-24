/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconVideogamesFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M18.104 11.294c-.138.129-.334.193-.586.193-.252 0-.448-.064-.585-.193-.143-.134-.213-.33-.213-.59 0-.261.073-.46.213-.595.137-.129.333-.196.585-.196.252 0 .448.067.586.196.142.135.215.334.215.594-.003.26-.075.46-.215.591m-1.62-1.569c-.134.13-.333.194-.585.194-.25 0-.448-.065-.585-.194-.14-.134-.21-.336-.21-.59 0-.258.072-.457.21-.592.137-.131.333-.196.585-.196.252 0 .448.065.586.196.142.135.212.334.212.591 0 .258-.07.457-.212.591m0 3.14c-.135.132-.334.197-.586.197-.25 0-.448-.065-.585-.196-.14-.135-.21-.334-.21-.592 0-.257.072-.456.21-.59.137-.132.333-.197.585-.197.252 0 .448.068.586.196.142.135.212.334.212.591 0 .258-.07.457-.212.592m-1.62-1.572c-.137.129-.333.193-.585.193-.252 0-.448-.064-.585-.193-.14-.134-.213-.33-.213-.59 0-.261.073-.46.213-.595.137-.129.333-.196.585-.196.252 0 .448.067.586.196.14.135.212.334.212.594.003.26-.07.46-.212.591m-4.91.188c-.189.176-.463.266-.819.266h-.112l.003.022c.014.062.02.126.02.177 0 .364-.098.641-.289.82-.185.177-.462.267-.818.267-.358 0-.633-.09-.818-.267-.187-.173-.285-.453-.285-.82 0-.034.01-.12.016-.157-.042.005-.072.005-.168.005-.358 0-.633-.09-.82-.266-.188-.176-.286-.453-.286-.82 0-.367.098-.642.288-.827.182-.173.46-.263.815-.263.031 0 .118.008.146.011h.02c-.006-.05-.011-.1-.011-.16 0-.366.098-.644.29-.823.183-.174.457-.263.816-.263.356 0 .63.09.818.266.193.182.288.46.288.823 0 .02-.002.07-.005.107a.651.651 0 01.095-.006c.356 0 .63.09.818.266.193.188.288.465.288.827-.002.355-.1.633-.29.815m9.604-3.827c-.059-.142-.11-.266-.151-.36-.04-.093-.056-.119-.067-.14l-.06-.113a3.042 3.042 0 00-.545-.728c-.681-.647-1.645-.975-2.866-.975-.501 0-.95.07-1.361.176-.244.065-.785.303-.796.309 0 0-.414.232-.546.322a2.375 2.375 0 01-2.65 0 14.5 14.5 0 00-.546-.322 7.513 7.513 0 00-.793-.309 5.254 5.254 0 00-1.361-.176c-1.221 0-2.185.328-2.863.975a3.15 3.15 0 00-.549.728l-.056.112c-.011.022-.028.05-.067.14-.042.095-.095.219-.154.361-.56 1.345-2.165 4.63-2.126 7.499.005.415.162 1.238.286 1.636.243.793.812 1.302 1.436 1.507.255.084.6.143.85.162.024 0 .05.003.078.003.35 0 .95-.143 1.26-.283.19-.087.457-.227.77-.496.188-.162.27-.268.58-.652.219-.27.412-.563.664-.804.58-.555 1.32-.95 2.196-1.193a6.523 6.523 0 011.726-.236 6.39 6.39 0 011.722.236c.88.246 1.617.638 2.196 1.193.255.24.449.535.667.804.311.38.392.49.58.652.314.27.594.41.784.496.336.149.992.28 1.325.28.25 0 .594-.078.849-.162.622-.205 1.193-.714 1.437-1.507.12-.395.277-1.221.283-1.636.033-2.866-1.572-6.151-2.132-7.499"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconVideogamesFilled;
