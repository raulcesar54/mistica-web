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

const IconMouseFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M11.998 6.425v-.364c0-.02-.011-.308-.157-.577-.174-.322-.462-.47-.91-.47H9.01c-.896 0-1.663-.2-2.218-.575-.605-.411-.938-1.025-.938-1.725a.55.55 0 0 1 1.098 0c0 .888 1.064 1.204 2.062 1.204h1.918c.869 0 1.544.39 1.9 1.096.255.501.26.989.26 1.045v.37c1.503.09 2.694.545 3.546 1.352.995.95 1.502 2.356 1.502 4.185v4.311c0 1.896-.44 3.263-1.345 4.174-.924.93-2.322 1.38-4.277 1.38-1.776 0-3.163-.459-4.12-1.37-.998-.946-1.502-2.355-1.502-4.184v-4.31c0-1.83.504-3.239 1.501-4.186.86-.817 2.072-1.273 3.6-1.356m.52 1.883a.55.55 0 0 0-.548.549v2.877a.55.55 0 0 0 1.098 0V8.857a.552.552 0 0 0-.55-.55m4.757 5.09c.277-.029.47-.222.431-.43-.039-.206-.294-.35-.57-.321a44.533 44.533 0 0 1-4.614.232 44.533 44.533 0 0 1-4.614-.232c-.277-.031-.532.115-.571.322-.04.207.154.4.431.429 1.58.162 3.165.243 4.754.24 1.588 0 3.173-.078 4.753-.24"
            />
        </svg>
    );
};

export default IconMouseFilled;
