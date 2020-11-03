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

const IconCallLandlineFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M6.094 2.15c.846.017 1.683.432 2.487 1.236.303.297.569.633.785 1 .431.694.588 1.412.465 2.131-.124.72-.524 1.423-1.196 2.096a5.707 5.707 0 01-.496.442c-.065.118-.025.488.496 1.25.602.88 1.61 1.918 2.316 2.624l.084.084c.706.706 1.745 1.712 2.625 2.317.759.52 1.131.56 1.25.496a5.28 5.28 0 01.442-.496c.672-.673 1.375-1.073 2.095-1.196.72-.124 1.437.033 2.132.465.366.218.7.481 1 .787.803.804 1.218 1.641 1.235 2.487.017.877-.395 1.765-1.227 2.633-.291.306-.698.597-.832.695l-.017.011a.154.154 0 00-.025.02c-.563.38-1.277.574-2.104.574-.865 0-1.857-.213-2.924-.639-2.182-.87-4.571-2.566-6.908-4.902l-.005-.005-.076-.073-.005-.006C5.354 13.845 3.66 11.46 2.789 9.274c-.832-2.09-.852-3.874-.056-5.028l.016-.025.012-.017c.103-.132.395-.538.7-.83.868-.829 1.753-1.24 2.633-1.224z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCallLandlineFilled;