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

const IconPersonalComputerRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M13.843 6.5c.81 0 1.443.224 1.877.667.423.428.636 1.039.636 1.815v4.28c0 1.588-.916 2.501-2.513 2.501l-2.203.001.557.575 3.621-.001a.55.55 0 010 1.098L2.71 17.44a.55.55 0 010-1.098l3.535-.002.549-.574-2.11.002c-1.596 0-2.512-.91-2.512-2.501v-4.28c0-.777.213-1.387.636-1.816.434-.442 1.067-.666 1.877-.666l9.16-.006zm6.519.006c.434 0 1.448.196 1.448 2.016l.003 6.88c0 1.82-1.014 2.017-1.449 2.017h-1.997a1.28 1.28 0 01-1.12-.61c-.213-.34-.317-.8-.317-1.407l-.005-6.88c0-.607.103-1.067.319-1.406.25-.392.647-.61 1.12-.61h1.998zm-1.998 1.061c-.126 0-.176.04-.22.115-.06.093-.155.322-.155.84l.003 6.88c0 .518.095.748.154.84.048.076.095.115.221.115h1.997c.13 0 .18-.042.23-.118.059-.092.157-.322.157-.834l-.003-6.88c0-.515-.098-.745-.157-.837-.047-.076-.1-.118-.23-.118h-1.997v-.003zm-8.252 8.198l-1.8.001-.549.575 2.906-.002-.557-.574zm3.731-8.19l-9.16.006c-1.008 0-1.436.42-1.436 1.406v4.28c0 1 .431 1.426 1.437 1.426l9.16-.005c1.008 0 1.436-.426 1.436-1.426v-4.28c0-.986-.428-1.406-1.437-1.406z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconPersonalComputerRegular;