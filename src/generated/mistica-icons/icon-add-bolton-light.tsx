/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconAddBoltonLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M17 3H7l-5 9.021L7 21h9.79a.362.362 0 00.355-.368.362.362 0 00-.354-.367H7.409L2.82 12.02l4.59-8.286h9.177l4.591 8.286-2.559 4.605c-.1.174-.04.4.132.504a.347.347 0 00.486-.136L22 12.02 17 3zm1.39 16.016a.723.723 0 01-.708.735.724.724 0 01-.71-.735c0-.406.319-.736.71-.736.39 0 .709.33.709.736zm-6.036-2.946a.362.362 0 01-.354.367.362.362 0 01-.354-.367v-3.313H8.45a.362.362 0 01-.355-.368c0-.203.16-.368.355-.368h3.196V8.708c0-.203.159-.368.354-.368.195 0 .354.165.354.368v3.313h3.196c.195 0 .354.165.354.368a.362.362 0 01-.354.368h-3.196v3.313z"
            />
        </svg>
    );
};

export default IconAddBoltonLight;
