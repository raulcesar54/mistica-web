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

const IconMicrochipRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M17.359 17.468H6.647c-.044 0-.09-.04-.095-.042v-5.409c0-.003.003-.005.003-.011 0-.003-.003-.006-.003-.008L6.55 9.6c0-.006.003-.009.003-.014 0-.006-.003-.009-.003-.014v-2.93c.012-.031.07-.076.101-.076h10.712a.17.17 0 01.098.07V12l-.003.009c0 .003.003.005.003.008v2.406c0 .003-.003.006-.003.012l.003.01v2.964c-.011.02-.062.06-.101.06zm3.88-4.857a.606.606 0 000-1.21h-2.57v-1.213h2.57a.606.606 0 000-1.21h-2.57V6.61c0-.672-.61-1.26-1.307-1.26h-2.328V2.764a.606.606 0 00-1.21 0V5.35H12.61V2.765a.606.606 0 00-1.21 0V5.35h-1.213V2.765a.606.606 0 00-1.21 0V5.35H6.65c-.697 0-1.308.589-1.308 1.261v2.367H2.765a.606.606 0 000 1.21h2.577v1.213H2.765a.606.606 0 000 1.21h2.577v1.213H2.765a.606.606 0 000 1.21h2.577v2.392c0 .68.6 1.252 1.308 1.252h2.328v2.56a.606.606 0 001.21 0v-2.56h1.213v2.56a.606.606 0 001.21 0v-2.56h1.213v2.56a.606.606 0 001.21 0v-2.56h2.328c.697 0 1.308-.585 1.308-1.252v-2.392h2.568a.606.606 0 000-1.21H18.67V12.61h2.568z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconMicrochipRegular;