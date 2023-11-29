'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconSearchCloudLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.837 11.106c0 4.9-4.308 5.146-5.17 5.146h-.39a4.583 4.583 0 0 1-.815 1.451l3.398 3.429c.16.162.16.423 0 .585l-.003.003a.408.408 0 0 1-.577-.003l-3.4-3.431a4.489 4.489 0 0 1-2.886 1.047c-1.974 0-3.65-1.274-4.271-3.053l-1.824.003c-1.157-.118-3.748-.756-3.748-4.221 0-2.56 1.454-3.558 2.502-3.942.114-5.677 5.344-5.969 6.403-5.969.824 0 4.91.188 6.081 3.852 1.418.106 4.7.823 4.7 5.103ZM5.941 15.46l1.58-.01a4.744 4.744 0 0 1-.056-.695c0-2.524 2.028-4.572 4.532-4.572s4.532 2.048 4.532 4.574c0 .224-.02.446-.053.664h.194c1.022 0 4.352-.31 4.352-4.316 0-3.77-2.938-4.258-4.201-4.294a.415.415 0 0 1-.387-.309c-.893-3.355-4.636-3.526-5.378-3.526-1.308 0-5.583.384-5.583 5.328l.006.114a.408.408 0 0 1-.297.398c-1.465.42-2.21 1.513-2.21 3.247 0 2.554 1.616 3.257 2.97 3.397Zm6.053 3.045c2.048 0 3.715-1.68 3.715-3.745 0-2.064-1.667-3.745-3.715-3.745-2.047 0-3.711 1.68-3.711 3.745 0 2.064 1.664 3.745 3.711 3.745Z"
            />
        </svg>
    );
};

export default IconSearchCloudLight;
