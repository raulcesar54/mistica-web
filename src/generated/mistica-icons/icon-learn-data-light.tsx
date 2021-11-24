/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconLearnDataLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M19.104 20.499c-1.123.339-2.605.524-4.168.524-1.56 0-3.042-.188-4.163-.524-1.277-.387-1.924-.908-1.924-1.555v-.117a1.24 1.24 0 00.569-.241c.88-.698 2.09-1.028 2.95-1.182.271-.05.512-.205.672-.429a19.07 19.07 0 001.907.098c1.65 0 3.21-.199 4.4-.56.673-.205 1.242-.49 1.679-.826v3.255c.002.65-.645 1.17-1.922 1.557zm-14.078-3.9a.267.267 0 01-.222-.263V14.27l3.356 1.504c.26.115.557.115.818 0l3.468-1.551v2.117c0 .13-.093.241-.222.264-.952.17-2.296.54-3.31 1.344a.467.467 0 01-.58 0C7.32 17.14 5.972 16.771 5.026 16.6zm-2.048-4.17a.18.18 0 01.112-.171l5.403-2.423a.185.185 0 01.154 0l5.401 2.42c.07.034.112.095.112.174a.18.18 0 01-.112.17l-5.403 2.42a.185.185 0 01-.154 0L3.09 12.6a.18.18 0 01-.112-.17zm7.793-8.922c1.117-.336 2.596-.523 4.165-.523s3.048.187 4.168.523c1.104.334 1.737.77 1.888 1.3-.003.011-.011.014-.017.022-.185.485-.829.908-1.863 1.222-1.114.336-2.596.524-4.165.524-1.568 0-3.047-.188-4.165-.524-1.059-.322-1.709-.757-1.874-1.258-.003-.008-.008-.014-.011-.02.165-.507.81-.94 1.874-1.266zM8.849 6.014c.412.328.975.605 1.698.824 1.19.361 2.753.56 4.4.56 1.65 0 3.21-.199 4.4-.56.712-.216 1.27-.488 1.681-.807v3.614c-.207.389-.804.902-1.913 1.238-1.115.336-2.596.523-4.165.523-.283 0-.563-.008-.84-.02L8.978 9.09c-.042-.017-.087-.014-.129-.028V6.014zm4.415 7.84l1.12-.5c.367-.166.597-.519.597-.925a.999.999 0 00-.028-.205c1.65 0 3.21-.198 4.4-.557.675-.204 1.244-.487 1.678-.824V14.5c-.207.386-.81.9-1.913 1.235-1.115.336-2.597.524-4.165.524-.577 0-1.14-.03-1.69-.081v-2.322zM19.339 2.72c-1.193-.361-2.756-.56-4.403-.56-1.644 0-3.207.199-4.4.56-1.387.42-2.205 1.045-2.438 1.855h-.002a1.744 1.744 0 00-.065.484v4.084l-5.274 2.362c-.364.162-.6.523-.597.924 0 .406.23.759.597.924l1.227.55v2.43c0 .53.375.981.893 1.073.86.155 2.067.485 2.947 1.183.064.05.134.075.204.112v.246c0 1.05.84 1.838 2.505 2.342 1.198.358 2.762.557 4.4.557 1.642 0 3.205-.199 4.406-.56 1.661-.504 2.505-1.291 2.505-2.339V5.06c.002-1.047-.84-1.835-2.505-2.339z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconLearnDataLight;
