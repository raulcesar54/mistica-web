/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconRouterLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M12.002 2C6.502 2 2 6.727 2 12.5S6.503 23 12.002 23a9.56 9.56 0 005.395-1.65c.178-.111.214-.337.105-.524-.105-.187-.32-.225-.499-.11a8.865 8.865 0 01-5 1.535c-5.107 0-9.285-4.386-9.285-9.746s4.178-9.752 9.284-9.752c5.107 0 9.285 4.387 9.285 9.747 0 1.838-.498 3.638-1.426 5.173-.106.187-.074.413.105.523.178.11.393.077.498-.11A10.91 10.91 0 0022 12.5C22.005 6.727 17.502 2 12.002 2zm-.644 9.823a.375.375 0 000-.523L7.856 7.624h1.641c.215 0 .357-.148.357-.374s-.142-.374-.357-.374H6.64v2.999c0 .226.142.374.357.374.214 0 .356-.148.356-.374V8.152l3.502 3.676c.073.077.178.11.251.11a.367.367 0 00.252-.115zm5.892-4.832a.334.334 0 00-.498 0L13.79 10.1V8.378c0-.226-.142-.375-.357-.375s-.356.15-.356.375v3h2.857c.215 0 .356-.15.356-.375 0-.226-.141-.375-.356-.375h-1.646l2.962-3.11a.372.372 0 000-.527zM14.146 17.75c0 .226.142.374.357.374h2.857v-2.999c0-.226-.142-.374-.357-.374-.214 0-.356.148-.356.374v1.723l-3.502-3.671a.334.334 0 00-.498 0 .375.375 0 000 .523l3.502 3.676h-1.642c-.219 0-.36.148-.36.374zm-3.57-.749c.215 0 .357-.148.357-.374v-3H8.075c-.214 0-.356.15-.356.375 0 .226.142.374.356.374h1.642l-2.963 3.11a.375.375 0 000 .523c.073.077.179.11.252.11a.391.391 0 00.251-.11l2.962-3.11v1.723c-.004.226.142.38.357.38zm8.21 1.872c.393 0 .713.336.713.749 0 .412-.32.748-.713.748-.393 0-.713-.336-.713-.748 0-.413.32-.75.713-.75z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M4.91 17.345c.405 0 .669.21.669.664 0 .219-.062.378-.168.49-.118.118-.289.177-.502.177-.21 0-.384-.056-.501-.177-.11-.109-.168-.271-.168-.49 0-.454.263-.664.67-.664zm2.436 0c.406 0 .67.21.67.664 0 .219-.062.378-.169.49-.117.118-.288.177-.498.177-.213 0-.384-.056-.502-.177-.109-.109-.168-.271-.168-.49-.002-.454.26-.664.667-.664zm13.67 1.482v-1.639c0-.733-.174-1.282-.516-1.638-.353-.367-.916-.552-1.675-.552H5.164c-.76 0-1.325.185-1.675.552-.342.356-.515.905-.515 1.638v1.64c0 .733.173 1.282.515 1.638.353.367.916.552 1.675.552h13.661c.76 0 1.322-.185 1.675-.552.342-.356.516-.905.516-1.639zm.075-3.846c.493.513.745 1.255.745 2.207v1.64c0 .951-.252 1.694-.745 2.206-.515.535-1.277.804-2.269.804H5.164c-.992 0-1.753-.269-2.269-.804-.496-.512-.745-1.255-.745-2.207v-1.639c0-.952.25-1.694.745-2.207.516-.532 1.277-.804 2.269-.804h1.888V6.771a.41.41 0 01.818 0v7.409h10.95c.994 0 1.756.269 2.271.801zm-7.633-8.238c-.025-2.42-1.585-3.866-1.6-3.88a.411.411 0 01.55-.61c.075.067 1.84 1.689 1.87 4.465.006.103.102 2.829-1.842 4.566a.41.41 0 01-.58-.034.41.41 0 01.033-.58c1.656-1.473 1.572-3.902 1.57-3.927zm-2.588.028c-.017-1.482-.952-2.339-.96-2.347a.41.41 0 01.548-.608c.05.045 1.213 1.112 1.233 2.933.002.061.064 1.854-1.216 3.002a.408.408 0 01-.577-.03l-.003-.003a.41.41 0 01.034-.58c.994-.888.94-2.353.94-2.367z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconRouterLight;
