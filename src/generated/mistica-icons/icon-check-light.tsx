/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconCheckLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M21 6.568c.552 0 1-.463 1-1.034S21.552 4.5 21 4.5s-1 .463-1 1.034.448 1.034 1 1.034zM2.15 12.877l6.1 6.623L19.351 7.963c.2-.207.2-.518 0-.724a.472.472 0 00-.7 0L8.25 17.945l-5.4-5.792a.472.472 0 00-.699 0c-.2.207-.2.517 0 .724z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCheckLight;