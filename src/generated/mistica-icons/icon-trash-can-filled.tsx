/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconTrashCanFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M21.254 3.624h-5.922v-.373c0-1.239-1-2.251-2.223-2.251h-2.222C9.663 1 8.664 2.012 8.664 3.25v.374H2.742A.749.749 0 002 4.376c0 .416.332.752.742.752h1.48v14.621c0 1.239 1 2.251 2.223 2.251h11.11c1.223 0 2.222-1.012 2.222-2.25V5.123h1.48a.749.749 0 00-.003-1.5zM9.962 18.246a.576.576 0 01-.556.563.576.576 0 01-.555-.563V7.374c0-.298.26-.562.555-.562.295 0 .556.264.556.562v10.872zm3.885-14.622h-3.703v-.373a.75.75 0 01.743-.752h2.222a.75.75 0 01.743.752v.373h-.005zm1.298 14.622a.576.576 0 01-.555.563.576.576 0 01-.556-.563V7.374c0-.298.261-.562.556-.562.294 0 .555.264.555.562v10.872z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M15.347 6.137h-7.01V4.325c0-.423.092-.728.276-.9.233-.212.57-.193.628-.19l5.188-.003c.3 0 .515.073.66.227.236.25.267.69.258.877v1.801zM14.5 17.011a.601.601 0 11-1.205 0V10.85a.601.601 0 111.205 0v6.162zm-4.11 0a.601.601 0 11-1.204 0V10.85a.601.601 0 111.204 0v6.162zM21.084 6.137h-4.535V4.375c.008-.106.053-1.058-.577-1.734-.26-.28-.74-.613-1.543-.613l-5.13.006a2.002 2.002 0 00-1.484.493c-.45.409-.68 1.014-.68 1.798v1.812H2.601a.601.601 0 100 1.205H4.06l.003 11.087c-.003.056-.084 1.397.815 2.358.574.614 1.392.927 2.428.927h9.042c.006 0 .028.003.065.003.291 0 1.456-.053 2.31-.871.603-.577.908-1.381.908-2.39V7.343h1.457c.33 0 .602-.27.602-.603a.607.607 0 00-.605-.602z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconTrashCanFilled;
