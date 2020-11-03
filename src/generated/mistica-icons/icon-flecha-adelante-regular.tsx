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

const IconFlechaAdelanteRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M21.608 12.11a.833.833 0 000-.637c-.02-.05-.056-.086-.081-.128-.028-.045-.048-.093-.087-.135l-8.43-8.919a.845.845 0 00-1.227 1.16l7.084 7.493H2.83a.846.846 0 000 1.692h16.04l-7.239 7.652a.847.847 0 00.031 1.194.847.847 0 001.193-.031l8.586-9.081c.039-.04.056-.09.087-.135.025-.042.061-.078.08-.126"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFlechaAdelanteRegular;