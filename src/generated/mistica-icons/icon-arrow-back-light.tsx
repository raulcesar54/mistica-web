/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant, useTheme} from '../..';

type Props = {
    color?: string;
    size?: number;
};

const IconArrowBackLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M21.262 11.533H4.024l7.933-8.347a.578.578 0 00-.255-1.02.587.587 0 00-.583.233l-8.86 9.32a.158.158 0 00-.059.08.51.51 0 000 .093.57.57 0 000 .44.51.51 0 000 .092.323.323 0 00.06.092l8.697 9.143c.109.12.266.19.431.185a.566.566 0 00.406-.972l-7.77-8.185h17.238c.32 0 .58-.257.58-.577a.58.58 0 00-.58-.577c0 .003 0 .003 0 0z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconArrowBackLight;