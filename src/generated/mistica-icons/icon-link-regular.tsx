/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconLinkRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.712 7.93c.384-1.487-.08-2.862-1.42-4.21-2.896-2.913-5.577-1.411-8.709 1.743-.607.61-1.1 1.151-1.512 1.655a.622.622 0 00.084.874c.263.219.653.18.871-.084.387-.473.854-.986 1.431-1.568 3.286-3.309 4.98-3.729 6.958-1.737 1.98 1.994 1.56 3.695-1.728 7.003-3.288 3.305-4.978 3.728-6.96 1.736-.704-.708-1.087-1.38-1.169-2.05a.626.626 0 00-.689-.54.617.617 0 00-.538.691c.12.958.617 1.866 1.524 2.776 1.084 1.09 2.137 1.563 3.194 1.563 1.77 0 3.554-1.328 5.515-3.3 1.846-1.857 2.815-3.26 3.148-4.551zm-7.86 8.124a.612.612 0 00-.87.064 35.411 35.411 0 01-1.438 1.55c-1.658 1.669-2.916 2.57-3.96 2.843-1.045.271-1.97-.068-3-1.104-1.031-1.037-1.37-1.967-1.099-3.02.27-1.05 1.166-2.314 2.824-3.983 1.658-1.67 2.916-2.571 3.96-2.843 1.048-.269 1.973.07 3 1.106.732.734 1.116 1.432 1.177 2.13a.63.63 0 00.67.565.622.622 0 00.56-.675c-.087-1-.591-1.947-1.535-2.9-2.894-2.912-5.574-1.411-8.706 1.737-3.132 3.152-4.625 5.846-1.728 8.76 1.039 1.044 2.092 1.56 3.204 1.56.322 0 .647-.042.98-.129 1.284-.333 2.678-1.311 4.524-3.165.46-.463 1.12-1.174 1.502-1.62a.626.626 0 00-.065-.876z"
            />
        </svg>
    );
};

export default IconLinkRegular;
