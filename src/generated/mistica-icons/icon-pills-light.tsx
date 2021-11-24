/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconPillsLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M16.037 21.006c-2.4 0-3.902-.858-4.565-2.572a.4.4 0 00-.107-.252c-.168-.52-.25-1.132-.277-1.801a.413.413 0 00.201.059h9.496c.076 0 .14-.025.2-.06-.119 3.102-1.73 4.626-4.948 4.626zM4.553 18.16c-1.05-1.054-1.574-2.12-1.555-3.171.017-1.014.538-2.045 1.55-3.059l.159-.165c.087-.093.173-.185.291-.286l2.964-2.972c.064 1.213.79 2.524 2.176 3.916.221.218.434.417.65.602-.372.835-.555 1.838-.555 2.995 0 .876.107 1.66.32 2.355-1.989 1.855-4.006 1.785-6-.215zM11.48 4.978c.081-.096.174-.182.266-.27l.162-.159c2.065-2.067 4.155-2.067 6.216 0 1.972 1.978 2.042 3.983.244 5.964-.675-.208-1.445-.32-2.328-.32-2.316 0-3.905.737-4.829 2.084-.16-.143-.317-.285-.482-.448-1.585-1.594-2.204-3-1.837-4.188.008-.028.005-.053.008-.078l2.58-2.585zm9.507 10.68a.412.412 0 00-.199-.059h-9.496a.413.413 0 00-.201.06c.12-3.102 1.73-4.625 4.946-4.625 3.219 0 4.83 1.526 4.95 4.624zm-1.779-4.818c1.88-2.243 1.715-4.672-.493-6.885-2.386-2.395-5.014-2.392-7.4 0l-.149.146a5.105 5.105 0 00-.302.305l-6.434 6.46a4.426 4.426 0 00-.328.322l-.146.148c-1.168 1.174-1.773 2.398-1.795 3.636-.023 1.288.582 2.557 1.8 3.779 1.197 1.201 2.457 1.8 3.712 1.8 1.087 0 2.171-.453 3.21-1.352.849 1.7 2.538 2.644 5.157 2.644 3.958 0 5.81-2.148 5.81-5.826-.003-2.499-.857-4.283-2.642-5.177z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconPillsLight;
