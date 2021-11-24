/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconLocationMapFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M15.94 5.71a.876.876 0 01-.866.884.876.876 0 01-.866-.884c0-.487.389-.884.866-.884.478 0 .866.397.866.884zm3.746 0c0 2.42-3.711 8.12-4.134 8.763a.567.567 0 01-.955 0c-.424-.643-4.135-6.342-4.135-8.763 0-2.64 2.028-4.71 4.617-4.71 2.59 0 4.607 2.069 4.607 4.71zm-2.594 0c0-1.135-.905-2.059-2.018-2.059-1.112 0-2.018.924-2.018 2.06 0 1.134.906 2.058 2.018 2.058 1.113 0 2.018-.924 2.018-2.059zm-7.59 12.208c-.005-.03-.005-.056-.005-.086v-1.33c0-1.17-.783-1.467-2.17-1.884-1.153-.346-2.585-.778-2.821-2.34-.005-.03-.005-.06-.005-.09v-1.175c0-.864-.69-1.567-1.536-1.567H2V22h9.353c-1.064-1.055-1.777-2.636-1.851-4.082zM20.43 5.123c.02.19.03.391.03.587 0 .457-.207 3.043-4.269 9.2-.25.381-.669.607-1.117.607-.448 0-.866-.226-1.117-.607-4.061-6.162-4.268-8.748-4.268-9.2 0-.2.01-.397.03-.587H2V8.26h.96c1.486 0 2.692 1.23 2.692 2.747v1.13c.138.753.852 1.004 2.004 1.35 1.265.382 2.998.904 2.998 3.013v1.175c0 1.904 1.54 4.314 3.268 4.314H22V5.123h-1.57z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M17.365 18.873l-.664-3.869 1.863-.93 1.742 6.093-2.941-1.294zm-4.762 1.47l.014-2.028c.476-.532 1.493-1.773 2.521-3.305l.364.118.647 3.792-3.546 1.423zM12.03 9.111c-.89 0-1.305-.415-1.305-1.306 0-.89.414-1.305 1.305-1.305.89 0 1.305.415 1.305 1.305.003.888-.412 1.306-1.305 1.306zm-.633 11.249l-3.544-1.454.437-3.829.516-.151c1.02 1.557 2.05 2.843 2.605 3.44l-.014 1.994zm-4.754-1.47l-2.918 1.268 1.907-6.056 1.468.83-.457 3.957zm15.174 2.179l-2.294-8.025a.601.601 0 00-.849-.376l-2.695 1.345-.168-.053c1.166-1.902 2.174-4.06 2.18-5.816.01-3.742-2.216-5.983-5.958-5.994h-.028c-3.726 0-5.956 2.227-5.97 5.96-.005 1.687.964 3.83 2.107 5.749l-.322.092-2.244-1.269a.599.599 0 00-.871.342l-2.527 8.025a.605.605 0 00.815.737l4.23-1.838 4.429 1.815a.477.477 0 00.09.028l.111.026c.12.03.247.02.365-.026l4.605-1.843 4.168 1.838a.613.613 0 00.641-.098.598.598 0 00.185-.62z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconLocationMapFilled;
