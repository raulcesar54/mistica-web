/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant, useTheme} from '../..';

type Props = {
    color?: string;
    size?: number;
};

const IconLongDistanceCallRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M11.859 2.25c.031 0 .062.003.092.008l.03-.002.176.005.1.001c5.29.149 9.534 4.489 9.529 9.814a9.809 9.809 0 01-5.986 9.028 9.769 9.769 0 01-3.741.77.532.532 0 01-.733-.493V2.783c0-.294.239-.532.533-.532zm-4.984.507c1.872.042 2.858 1.036 2.858 2.868a3.93 3.93 0 01-.118.99c-.148.632-.465 1.122-.938 1.459-.474.336-1.087.504-1.835.504-.163 0-.328-.009-.49-.028-.042.033-.224.224-.348 1.028-.12.773-.134 1.778-.134 2.465v.09c0 .688.014 1.691.134 2.464.126.804.306.995.348 1.028a3.99 3.99 0 01.49-.028c.745 0 1.364.168 1.835.505.47.336.79.829.938 1.459.081.322.12.655.118.989 0 1.834-.99 2.826-2.858 2.868l-.056.006a5.17 5.17 0 01-.784-.076l-.014-.003-.025-.005c-1.087-.2-2.064-1.194-2.756-2.802-.712-1.658-1.09-3.87-1.09-6.403v-.09c0-2.532.375-4.745 1.09-6.406.692-1.607 1.67-2.602 2.756-2.8l.025-.004.014-.002c.126-.02.51-.084.84-.076zm5.516 13.562v4.446c.361-.08.718-.269 1.064-.56.502-.42.955-1.033 1.35-1.82.263-.522.488-1.097.675-1.714-.98-.21-2.015-.328-3.089-.352zm-5.538-12.5a3.787 3.787 0 00-.644.061l-.031.006c-.711.137-1.423.927-1.96 2.174-.457 1.064-1.004 2.966-1.004 5.98v.095c0 3.014.547 4.916 1.003 5.98.535 1.247 1.25 2.037 1.958 2.174l.006.003.03.006c.275.044.49.064.645.061.653-.014 1.129-.17 1.412-.465.274-.285.406-.722.406-1.339a2.864 2.864 0 00-.084-.722c-.003-.006-.003-.012-.003-.017-.115-.493-.42-1.149-1.737-1.149-.148 0-.294.009-.442.028a.422.422 0 01-.084.003c-.275-.011-.664-.129-.961-.627-.163-.27-.283-.63-.37-1.098-.126-.678-.182-1.552-.182-2.838v-.09c0-1.285.056-2.162.182-2.837.087-.468.207-.83.37-1.098.297-.499.686-.616.96-.628.029 0 .057 0 .085.003.145.02.294.028.442.028 1.32 0 1.625-.655 1.737-1.148 0-.006.003-.011.003-.017a2.85 2.85 0 00.084-.723c0-.619-.135-1.056-.406-1.339-.286-.294-.762-.45-1.415-.467zm9.66 13.112l-.054.181a11.642 11.642 0 01-.701 1.751 7.85 7.85 0 01-.95 1.48 8.757 8.757 0 003.788-2.558 10.35 10.35 0 00-2.083-.854zm4.194-4.314h-3.534a17.694 17.694 0 01-.393 3.282 11.14 11.14 0 012.47 1.029 8.692 8.692 0 001.457-4.311zm-4.599 0l-3.718-.001v2.638a17.81 17.81 0 013.358.383c.206-.945.328-1.964.36-3.02zm-.315-3.908l-.288.062c-.983.195-2.033.309-3.115.332v2.449h3.72a16.778 16.778 0 00-.317-2.843zm3.563-1.34l-.264.15c-.67.37-1.434.681-2.267.927.202.98.32 2.027.349 3.107h3.535a8.745 8.745 0 00-1.353-4.185zM12.39 3.364l-.001 4.672.12-.002c1.054-.03 2.07-.15 3.032-.36a10.725 10.725 0 00-.737-1.93c-.395-.786-.851-1.4-1.35-1.82-.346-.291-.703-.479-1.064-.56zm2.418.422l.114.142c.3.384.58.831.835 1.338.325.646.598 1.365.815 2.138a9.971 9.971 0 002.151-.903 8.692 8.692 0 00-3.915-2.715z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconLongDistanceCallRegular;