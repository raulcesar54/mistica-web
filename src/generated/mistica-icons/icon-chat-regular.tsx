/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconChatRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M18.364 2.5h-5.82c-2.006 0-3.635 1.703-3.635 3.799v.38H5.636C3.629 6.678 2 8.38 2 10.476v3.8c0 1.833 1.252 3.37 2.91 3.726v2.738a.76.76 0 00.447.7.703.703 0 00.796-.165L9.21 18.08h2.244c2.007 0 3.636-1.702 3.636-3.799v-.063l2.761 2.885c.14.146.326.223.512.223a.724.724 0 00.28-.058.76.76 0 00.446-.7v-2.739c1.658-.355 2.91-1.887 2.91-3.726v-3.8c0-2.1-1.63-3.803-3.636-3.803zm-4.73 11.781c0 1.255-.978 2.282-2.183 2.282H8.904a.696.696 0 00-.512.224l-2.03 2.12v-1.585c0-.419-.326-.76-.726-.76-1.201 0-2.183-1.02-2.183-2.28v-3.8c0-1.255.977-2.281 2.183-2.281h3.273v1.902c0 2.096 1.63 3.799 3.636 3.799h1.09v.38zm4.73-1.897c-.4 0-.726.34-.726.76v1.585l-2.03-2.121a.715.715 0 00-.512-.224h-2.547c-1.2 0-2.183-1.021-2.183-2.281v-3.8c0-1.254.978-2.28 2.183-2.28h5.82c1.2 0 2.183 1.021 2.183 2.28v3.8h-.005c0 1.255-.977 2.281-2.183 2.281z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M17.81 8.909H5.877a.562.562 0 01-.56-.56c0-.308.252-.56.56-.56H17.81c.308 0 .56.252.56.56 0 .308-.252.56-.56.56zm-3.824 4.37h-8.11a.562.562 0 01-.56-.56c0-.309.253-.56.56-.56h8.11a.561.561 0 010 1.12z"
                    fill={fillColor}
                />
                <path
                    d="M5.227 21.433c-.546 0-1.028-.465-1.028-.995v-2.336c-1.263-.258-2.188-1.384-2.188-2.773V5.682c0-1.56 1.278-2.83 2.846-2.83H18.84a2.839 2.839 0 012.843 2.83v9.65a2.84 2.84 0 01-2.843 2.83H8.297l-2.202 2.817c-.341.454-.74.454-.868.454zm-.373-17.46c-.95 0-1.722.768-1.722 1.71v9.649c0 .975.7 1.709 1.627 1.709.308 0 .56.252.56.56v2.552l2.264-2.894a.566.566 0 01.442-.216h10.813c.95 0 1.722-.767 1.722-1.708V5.682c0-.944-.773-1.709-1.722-1.709H4.854z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconChatRegular;
