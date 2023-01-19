/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconSkullFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M11.525 2.16c.28 0 .588 0 .86.011 1.762.037 8.642.734 8.642 8.958 0 4.137-1.734 6.364-3.681 7.558v.652c0 .824-.233 1.462-.703 1.883-.454.411-1.11.621-1.955.621H9.352c-.85 0-1.513-.21-1.967-.621-.482-.418-.722-1.06-.722-1.88v-.647c-1.947-1.185-3.681-3.429-3.681-7.613 0-8.292 6.734-8.914 8.543-8.922zm-3.3 11.95c1.331-.026 2.883-.818 2.883-2.967a4.07 4.07 0 00-.025-.468c-.21-1.81-1.617-2.487-2.863-2.515a3.247 3.247 0 00-.244-.003c-1.21.011-2.686.698-2.854 2.591-.011.12-.017.247-.017.378 0 2.174 1.555 2.967 2.888 2.986h.098l.067-.001.068-.001zm7.796 0c1.328-.026 2.882-.818 2.877-2.967 0-.165-.009-.322-.025-.468-.208-1.81-1.614-2.487-2.86-2.515-.076-.003-.171-.003-.244-.003-1.213.011-2.686.698-2.854 2.591-.011.12-.017.247-.017.378 0 2.174 1.555 2.967 2.888 2.986h.1l.068-.001.067-.001zm-2.465 2.66a.642.642 0 00.345-.845l-.362-.857a.656.656 0 00-.854-.345.644.644 0 00-.347.846l.364.857c.143.33.524.485.854.345zm-2.218-.347l.364-.854a.646.646 0 00-.35-.849.66.66 0 00-.855.345l-.364.857v.003a.651.651 0 001.204.499z"
            />
        </svg>
    );
};

export default IconSkullFilled;
