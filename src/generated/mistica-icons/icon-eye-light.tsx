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

const IconEyeLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M12.027 17.2c3.967 0 8.014-4.12 9.004-5.196-.993-1.076-5.065-5.198-9.03-5.198-3.966 0-8.033 4.12-9.028 5.198.998 1.074 5.09 5.196 9.054 5.196zm9.878-5.453a.39.39 0 01.003.508c-.2.235-4.946 5.745-9.88 5.745-4.932 0-9.73-5.507-9.932-5.742a.388.388 0 010-.51C2.296 11.511 7.067 6 12.002 6c4.928.003 9.7 5.512 9.903 5.747zm-9.798-2.136c.507.011 2.467.202 2.467 2.475 0 2.275-1.966 2.453-2.458 2.464-.072 0-.157.003-.237 0-.518-.005-2.458-.186-2.458-2.478 0-2.289 1.923-2.458 2.438-2.46a2.56 2.56 0 01.248 0z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconEyeLight;