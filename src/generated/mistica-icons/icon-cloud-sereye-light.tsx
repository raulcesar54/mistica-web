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

const IconCloudSereyeLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M20.988 19.685c-.009.487-.202 1.31-1.41 1.31-1.204 0-1.392-.806-1.4-1.293v-.16c.017-.487.213-1.294 1.367-1.32a.076.076 0 00.042.01c.008 0 .025 0 .034-.01 1.162.026 1.358.833 1.367 1.309v.154zM5.8 19.542v.143c0 .496-.196 1.31-1.41 1.31-1.195 0-1.388-.806-1.388-1.293v-.16c.008-.496.212-1.32 1.409-1.32 1.193 0 1.38.824 1.389 1.32zm1.857-6.93c-.79 0-2.63-.252-2.63-2.588 0-1.314.577-2.143 1.697-2.454.185-.05.306-.31.306-.496 0-3.79 3.341-4.084 4.36-4.084.586 0 3.514.126 4.211 2.698a.432.432 0 00.398.308c.977.025 3.26.403 3.26 3.277 0 3.05-2.58 3.286-3.378 3.286l-8.224.053zm12.356 4.813v-2.681a.43.43 0 00-.423-.42h-7.216v-.9l3.504-.025c.706 0 4.227-.193 4.227-4.126 0-2.798-1.893-3.938-3.776-4.1C15.346 2.3 12.06 2.15 11.391 2.15c-.857 0-5.073.227-5.21 4.714-.857.328-2.003 1.143-2.003 3.16 0 2.53 1.801 3.429 3.479 3.429l3.871-.026v.9h-7.14a.455.455 0 00-.305.126.43.43 0 00-.118.3l.009 2.672c-1.3.184-1.807 1.21-1.824 2.1v.185c.008.983.602 2.126 2.238 2.126 1.647 0 2.25-1.151 2.258-2.134v-.185c-.017-.89-.518-1.913-1.827-2.1l-.008-2.253h14.35v2.26c-1.3.185-1.807 1.2-1.832 2.101v.185c.009.983.603 2.126 2.25 2.126 1.638 0 2.238-1.151 2.257-2.134v-.185c-.017-.89-.524-1.916-1.823-2.092z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCloudSereyeLight;