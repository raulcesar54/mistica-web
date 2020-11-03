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

const IconTruckLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M20.694 16.664a1.05 1.05 0 01-.731.328h-1.084c-.18-1.412-1.165-2.247-2.717-2.247-.23 0-.451.017-.656.06V7.657h1.048c.395 0 .82.21 1.042.516.395.538 2.636 3.493 2.913 3.851.188.247.502.656.502 1.023l.008 2.89c.003.253-.12.522-.325.726zm-4.532 2.737c-1.263 0-1.93-.661-1.93-1.919s.664-1.919 1.93-1.919 1.93.661 1.93 1.919-.667 1.919-1.93 1.919zm-2.717-2.41H9.027c-.179-1.411-1.165-2.246-2.717-2.246-1.549 0-2.53.835-2.708 2.247h-.188a.438.438 0 01-.437-.432V5.062c0-.238.196-.434.434-.434l10.838.008c.246 0 .437.196.437.434v10.011c-.692.367-1.126 1.02-1.241 1.91zm-7.135 2.41c-1.263 0-1.93-.661-1.93-1.919s.664-1.919 1.93-1.919 1.93.661 1.93 1.919-.666 1.919-1.93 1.919zm15.524-6.353c0-.644-.434-1.216-.675-1.518-.28-.362-2.501-3.3-2.9-3.832-.377-.524-1.05-.857-1.705-.857h-1.05V5.067c0-.686-.56-1.249-1.258-1.249L3.414 3.812c-.7 0-1.258.564-1.258 1.25v11.496c0 .686.56 1.249 1.255 1.249h.174c.126 1.51 1.117 2.409 2.725 2.409 1.611 0 2.603-.9 2.726-2.41h4.4c.132 1.51 1.118 2.41 2.726 2.41 1.61 0 2.602-.9 2.725-2.41h1.076a1.89 1.89 0 001.314-.562c.361-.359.566-.835.566-1.305l-.009-2.891z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconTruckLight;