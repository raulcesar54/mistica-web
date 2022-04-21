/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconPoundSymbolCircleRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M11.428 14.5h2.892a.72.72 0 01.716.716c0 .392-.32.716-.716.716H9.608a.718.718 0 01-.716-.716c0-.392.32-.716.716-.716a.434.434 0 00.428-.428v-1.536H9.68a.718.718 0 01-.716-.716c0-.392.32-.716.716-.716h.356V9.676c0-1.324 1-2.324 2.324-2.324.392 0 1 .072 1.536.536.324.248.324.716.072 1-.248.324-.716.324-1 .072-.144-.108-.284-.18-.608-.18-.54 0-.896.36-.896.896v1.428h1.428a.72.72 0 01.716.716c0 .392-.32.716-.716.716h-1.428v1.536c0 .144 0 .284-.036.428z"
                    fill={fillColor}
                />
                <path
                    d="M12 2C6.5 2 2 6.5 2 12s4.464 10 10 10c5.5 0 10-4.464 10-10 0-5.5-4.5-10-10-10zm0 18.568A8.548 8.548 0 013.428 12 8.552 8.552 0 0112 3.428c4.752 0 8.572 3.856 8.572 8.572A8.548 8.548 0 0112 20.568z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M12 2.16c6.44 0 9.846 3.403 9.846 9.846 0 6.437-3.403 9.84-9.846 9.84-6.44 0-9.84-3.403-9.84-9.84C2.16 5.563 5.563 2.16 12 2.16zm0 18.479c5.731 0 8.639-2.905 8.639-8.633 0-5.731-2.905-8.639-8.639-8.639-5.728 0-8.633 2.908-8.633 8.639 0 5.728 2.905 8.633 8.633 8.633zm3.247-3.689a.405.405 0 00-.404-.403h-4.72c.818-.872 1.115-1.628 1.115-2.69 0-.498-.067-1.013-.198-1.54h2.109c.224 0 .403-.18.403-.403v-.398a.404.404 0 00-.403-.404h-2.476c-.171-.574-.325-1.218-.325-1.86 0-1.456.764-2.134 2.403-2.134.524 0 1.188.073 1.871.202a.402.402 0 00.476-.398v-.367a.406.406 0 00-.283-.387c-.728-.224-1.652-.305-2.224-.305-2.249 0-3.54 1.241-3.54 3.4 0 .71.14 1.387.302 1.93l-.66.046a.406.406 0 00-.376.403v.272c0 .224.18.403.403.403h.997a5.22 5.22 0 01.244 1.527c0 .745-.168 1.341-1.04 2.182-.464.445-.697.672-.697 1.117 0 .163.031.303.093.423a.4.4 0 00.358.219h6.168c.225 0 .404-.18.404-.404v-.431z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconPoundSymbolCircleRegular;
