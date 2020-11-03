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

const IconLightbulbRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M14.514 14.527c1.154-.706 1.714-1.908 1.714-3.67 0-1.283-.409-4.28-4.193-4.361-.157-.006-.32-.006-.468-.006h-.036c-1.535.009-4.11.583-4.11 4.34 0 1.767.575 3.013 1.712 3.702l.591.356.006.683.008 1.112c0 .152.023.227.034.255.08.026.339.084 1.061.084h1.998c.72 0 .988-.053 1.078-.08a.936.936 0 00.03-.25l-.008-1.112-.002-.692c-.009 0 .585-.361.585-.361zm-2.451-9.264c1.106.023 5.415.457 5.415 5.594 0 2.583-1.087 3.972-2.306 4.717l.009 1.12c0 .513-.146.911-.44 1.174-.286.258-.72.39-1.916.39h-1.997c-1.168 0-1.605-.132-1.891-.39-.3-.263-.451-.66-.451-1.173l-.008-1.115c-1.219-.74-2.306-2.14-2.306-4.754 0-5.176 4.219-5.563 5.353-5.571.174 0 .367 0 .538.008zm-.61 1.869c1.907.042 4.01 1.106 4.162 3.972a.62.62 0 01-.591.647h-.034a.619.619 0 01-.622-.583c-.129-2.476-2.109-2.787-2.952-2.804-.112-.003-.227.003-.342-.003a.622.622 0 01-.624-.616.62.62 0 01.624-.616c.123 0 .26 0 .378.003zm3.097 11.622c.345 0 .625.277.625.616a.62.62 0 01-.625.616H9.256a.622.622 0 01-.624-.616.62.62 0 01.624-.616h5.294zm-.714 1.7c.345 0 .625.277.625.616a.62.62 0 01-.625.616H9.811a.622.622 0 01-.625-.616.62.62 0 01.625-.616h4.025zm-2.05-15.787a.622.622 0 01-.625-.617V2.616A.62.62 0 0111.786 2a.62.62 0 01.624.616v1.437a.621.621 0 01-.624.614zm5.103 1.65a.628.628 0 01-.44-.18.61.61 0 01-.008-.862l.009-.009 1.025-1.017a.629.629 0 01.882 0 .612.612 0 01.006.866l-.006.005-1.028 1.014a.614.614 0 01-.44.183zm-9.846-.003a.629.629 0 01-.882 0L5.136 5.3a.614.614 0 01-.009-.866l.009-.008a.629.629 0 01.882 0l1.025 1.017a.61.61 0 01.006.865l-.006.006zM4.917 9.952c.345 0 .625.278.625.617a.62.62 0 01-.625.616h-1.45a.622.622 0 01-.625-.616.62.62 0 01.624-.617h1.451zm15.345-.072a.62.62 0 01.625.616.62.62 0 01-.625.616H18.81a.622.622 0 01-.625-.616.62.62 0 01.625-.616h1.45z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconLightbulbRegular;