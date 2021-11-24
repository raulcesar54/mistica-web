/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconRulerRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M20.52 17.4a.237.237 0 000-.33l-3.25-3.249-1.32 1.3a.628.628 0 11-.882-.896l1.314-1.292-1.177-1.176-2.067 2.061a.625.625 0 01-.885.003l-.003-.003a.629.629 0 010-.89l2.065-2.065-1.18-1.176-1.156 1.137a.627.627 0 01-.886-.003l-.002-.003a.626.626 0 01.008-.888l1.149-1.13-1.178-1.178L8.766 9.93a.625.625 0 01-.885.003l-.003-.003a.629.629 0 010-.89l2.305-2.309-1.176-1.176-1.082 1.059a.625.625 0 01-.885-.006l-.003-.003a.629.629 0 01.009-.89l1.067-1.05-1.182-1.18a.233.233 0 00-.328 0l-3.12 3.12a.233.233 0 000 .328L17.07 20.52c.09.09.24.09.328 0 0 .002 3.12-3.118 3.12-3.118zm.887-1.218c.58.583.58 1.527 0 2.11l-3.117 3.117a1.485 1.485 0 01-1.054.437c-.38 0-.762-.145-1.056-.437L2.595 7.824a1.496 1.496 0 010-2.11l3.118-3.117a1.491 1.491 0 012.109 0l13.585 13.585zM17.77 17.53a.41.41 0 00-.146-.558s-.003 0-.003-.002a.409.409 0 00-.56.148.409.409 0 00.148.56.403.403 0 00.56-.148zm.271-1.286c.597.342.801 1.098.462 1.695l-.005.01a1.243 1.243 0 01-1.7.46c-.003 0-.003-.003-.006-.003a1.25 1.25 0 011.25-2.162z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconRulerRegular;
