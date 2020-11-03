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

const IconTongueRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M17.413 10.356c0 6.459-1.361 8.641-5.397 8.641-4.037 0-5.398-2.182-5.398-8.641 0-.824.022-1.552.067-2.219 1.356.507 2.922.79 4.695.843l.039 7.056a.612.612 0 00.616.602h.003a.61.61 0 00.613-.607l-.039-7.048c1.79-.053 3.367-.336 4.731-.852.048.67.07 1.401.07 2.225m4.154-6.446a.624.624 0 00-.854.171c-1.653 2.462-4.583 3.712-8.706 3.712-4.129 0-7.062-1.253-8.714-3.72a.625.625 0 00-.855-.174.596.596 0 00-.176.837C3.08 5.955 4.17 6.9 5.492 7.596c-.07.816-.107 1.718-.107 2.754 0 5.913 1.13 9.851 6.633 9.851 5.505 0 6.63-3.938 6.63-9.851 0-1.014-.033-1.896-.1-2.703-.003-.02-.011-.037-.017-.056 1.314-.695 2.398-1.636 3.213-2.846a.596.596 0 00-.177-.835"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconTongueRegular;