/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

type Props = {
    color?: string;
    size?: number;
};

const IconChevronDownRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M20 8.839c0 .208-.082.41-.23.564l-7.05 7.32a.924.924 0 01-1.273.044c-.014-.01-.025-.024-.04-.037l-7.17-7.323a.805.805 0 01.029-1.168l.02-.017a.928.928 0 011.257.048l6.516 6.651 6.393-6.646a.928.928 0 011.257-.055.827.827 0 01.291.619"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconChevronDownRegular;
