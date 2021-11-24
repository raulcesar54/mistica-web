/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconDisconnectFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M11.711 18.636V8.989c0-.642-.134-1.09-.417-1.373-.283-.283-.734-.426-1.378-.426H5.073c-.633 0-1.076.143-1.37.435-.291.29-.426.74-.426 1.364v9.647c0 .641.135 1.1.426 1.384.283.274.734.417 1.37.417h4.843c.636 0 1.084-.143 1.37-.417.294-.283.425-.743.425-1.384zM14.325 2c4.759 0 7.39 2.625 7.39 7.38 0 4.749-2.631 7.365-7.39 7.365-.476 0-.927-.034-1.361-.084v1.975c0 1-.258 1.74-.793 2.266-.527.524-1.27.784-2.255.784H5.073c-.986 0-1.72-.258-2.255-.784-.535-.527-.793-1.266-.793-2.266V8.989c0-.975.258-1.706.785-2.241.54-.54 1.277-.807 2.263-.807h2.454C8.549 3.375 10.885 2 14.325 2zm1.846 10.081a.633.633 0 00.885 0 .627.627 0 000-.885l-1.9-1.894V6.748a.628.628 0 00-1.255 0v2.815a.63.63 0 00.186.443l2.084 2.075zm-8.675 5.62c.512 0 .818.305.818.82 0 .252-.07.45-.213.597-.143.145-.353.224-.605.224s-.462-.079-.605-.224c-.143-.146-.213-.345-.213-.597 0-.515.305-.82.818-.82z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDisconnectFilled;
