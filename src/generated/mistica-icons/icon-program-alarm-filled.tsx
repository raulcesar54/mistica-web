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

const IconProgramAlarmFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M3.367 11.42c0 2.919 1.37 4.277 4.306 4.277 2.935 0 4.305-1.358 4.305-4.277s-1.37-4.277-4.305-4.277c-2.936 0-4.306 1.358-4.306 4.277zm18.25 6.451c.201.16.274.426.184.667a.592.592 0 01-.565.403h-5.227c-.034.55-.185 1.359-.76 1.995-.534.602-1.31.907-2.296.907-.99 0-1.765-.305-2.3-.907-.574-.636-.72-1.449-.75-1.995H4.674a.598.598 0 01-.568-.403.59.59 0 01.187-.667c.412-.339.754-.779 1.037-1.302-2.03-.667-3.171-2.348-3.171-5.146 0-3.328 1.619-5.073 4.443-5.412 1.507-3.958 5.924-3.868 6.353-3.843.364-.025 3.002-.095 4.918 1.68C19.151 5.031 19.8 6.737 19.8 8.93v3.804c-.014.07-.19 3.504 1.816 5.137zM9.37 13.863a.607.607 0 01-.428-.177L7.244 12a.596.596 0 01-.18-.426V9.291c0-.333.272-.602.609-.602.336 0 .607.269.607.602v2.034l1.521 1.51a.597.597 0 010 .851.613.613 0 01-.43.177z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconProgramAlarmFilled;