/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconDataNetworkFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M20.403 14.297c.289-.953.434-2.04.434-3.272 0-1.011-.092-1.93-.288-2.759h-3.154c.154.863.238 1.782.238 2.742a15.71 15.71 0 01-.347 3.292h3.117v-.003zm-5.51 4.697c2.558-.481 4.303-1.773 5.205-3.868H17.07c-.476 1.655-1.235 3.006-2.176 3.868zm-2.033.182c1.42-.266 2.636-1.832 3.325-4.05H12.86v4.05zm3.468-11.739c-.647-2.496-1.939-4.283-3.48-4.566l.01 4.566h3.47zm.45 3.569c0-.961-.092-1.888-.263-2.743h-3.658v6.034h3.555c.232-1.014.367-2.123.367-3.291zM20.3 7.437c-.835-2.403-2.645-3.86-5.4-4.384 1.036.953 1.853 2.493 2.313 4.384H20.3zm-12.006 0h3.717l-.008-4.566c-1.583.28-2.995 2.104-3.709 4.566zm-.902 0c.493-1.863 1.353-3.398 2.44-4.359-2.686.538-4.448 1.998-5.272 4.359h2.832zm-.45 3.297c.016-.863.1-1.69.254-2.468H4.322c-.188.77-.28 1.63-.288 2.577a11.2 11.2 0 011.904-.157c.348-.003.678.014 1.003.048zm14.335-3c.264.977.41 2.07.41 3.288 0 5.9-3.197 9.023-9.261 9.023-.894 0-1.734-.073-2.51-.208-.017-.008-.025-.016-.042-.016v.596c0 .39-.417.712-1.241.944-.723.208-1.683.325-2.695.325-1.002 0-1.963-.117-2.694-.325-.824-.232-1.241-.554-1.241-.944v-1.972c.28.19.655.364 1.106.49.765.225 1.776.34 2.84.34 1.07 0 2.076-.118 2.85-.34a3.291 3.291 0 001.078-.495v.596a.504.504 0 01.196-.016c.594.109 1.25.16 1.938.182v-4.076H9.885a.421.421 0 01-.263-.098c-.213.174-.527.347-.978.479-.722.199-1.683.316-2.694.316-1.012 0-1.964-.117-2.687-.316-.647-.19-1.115-.47-1.257-.754v-2.22c.263.206.63.372 1.106.503.765.224 1.776.342 2.84.342 1.062 0 2.076-.115 2.85-.342.458-.131.814-.288 1.078-.487v1.748h2.134v-6.03h-3.93c-.18.811-.28 1.671-.289 2.568.3.05.586.098.844.173.714.208 1.123.474 1.215.796l-.008.008c-.12.297-.527.555-1.199.745-.731.208-1.683.323-2.695.323-1.01 0-1.963-.115-2.686-.323-.689-.199-1.106-.462-1.216-.77l-.008-.008c.11-.292.501-.555 1.14-.745v-.009c0-1.218.146-2.31.417-3.288.009-.017.009-.042.017-.06 1.053-3.719 4.048-5.674 8.818-5.674 4.787 0 7.782 1.955 8.835 5.675.003.014.003.04.008.056zM3.255 18.457c-.644-.188-1.11-.463-1.252-.748v-2.224c.28.196.65.364 1.1.49.774.218 1.782.341 2.847.341 1.067 0 2.078-.12 2.845-.341a3.39 3.39 0 001.085-.496v2.224c-.132.235-.524.546-1.236.754-.72.204-1.678.319-2.692.319-1.022.003-1.972-.112-2.697-.32z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDataNetworkFilled;
