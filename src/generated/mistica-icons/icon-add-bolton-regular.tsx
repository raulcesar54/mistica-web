/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconAddBoltonRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M17 3H7l-5 9 5 9h10l5-9-5-9zm-.818 16.533H7.818L3.632 12l4.182-7.533h8.368L20.368 12l-4.186 7.533zM16.06 12c0 .404-.317.734-.706.734h-2.649v2.755c0 .404-.316.734-.705.734-.389 0-.705-.33-.705-.734v-2.755h-2.65c-.388 0-.705-.33-.705-.734 0-.404.317-.734.706-.734h2.649V8.511c0-.404.316-.734.705-.734.389 0 .705.33.705.734v2.755h2.65c.388 0 .705.33.705.734z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconAddBoltonRegular;