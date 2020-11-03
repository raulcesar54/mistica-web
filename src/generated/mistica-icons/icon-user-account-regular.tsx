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

const IconUserAccountRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M16.438 14.505c2.496 0 4.52 2.023 4.519 4.504l.041 2.229-.007.11a.75.75 0 01-.742.647h-16a.749.749 0 01-.749-.749v-2.223a4.517 4.517 0 014.518-4.518zm0 1.498h-8.42a3.02 3.02 0 00-3.02 3.02v1.474h14.488l-.032-1.651a3.02 3.02 0 00-3.016-2.843zM12.25 2.5c3.343 0 5.25 1.839 5.25 5.25S15.592 13 12.25 13c-3.259 0-5.154-1.748-5.246-4.997L7 7.75l.004-.253C7.095 4.247 8.99 2.5 12.249 2.5zm0 1.5C9.723 4 8.5 5.18 8.5 7.75c0 2.57 1.224 3.75 3.75 3.75S16 10.32 16 7.75C16 5.18 14.775 4 12.25 4z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconUserAccountRegular;