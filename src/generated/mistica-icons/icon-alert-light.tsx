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

const IconAlertLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M11.979 2.156c.151 0 .285.093.367.252l9.4 18.776a.446.446 0 01-.005.44c-.076.129-.219.202-.39.202H2.61a.445.445 0 01-.392-.202.446.446 0 01-.006-.44l9.404-18.776c.078-.16.213-.252.364-.252zm.003.72L2.76 21.288h18.437L11.982 2.876zm0 15.65c.19 0 .302.112.302.303 0 .19-.11.302-.302.302-.194 0-.303-.112-.303-.302 0-.191.112-.303.303-.303zm.02-10.364a.28.28 0 01.28.28v8.202a.28.28 0 01-.28.28.28.28 0 01-.28-.28V8.442a.28.28 0 01.28-.28z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconAlertLight;