/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconAlarmLightCrossRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M18.719 20.567v-1.874a.324.324 0 00-.174-.053H5.525a.344.344 0 00-.173.048v1.888c.053.03.112.045.173.045h13.02c.062 0 .123-.02.174-.054zM6.887 11.702v5.703h10.297v-5.703c0-3.48-1.684-5.171-5.152-5.171-3.462 0-5.145 1.692-5.145 5.17zm11.658 5.725c.74 0 1.384.547 1.384 1.168v2.07c0 .625-.647 1.171-1.384 1.171H5.525c-.75 0-1.383-.535-1.383-1.17v-2.07c0-.634.633-1.169 1.383-1.169h.152v-5.725c0-4.118 2.257-6.387 6.355-6.387 4.101 0 6.359 2.27 6.359 6.387v5.725h.154zM12.035 4.84a.607.607 0 01-.605-.608V2.758c0-.336.272-.608.605-.608.333 0 .605.272.605.608V4.23a.608.608 0 01-.605.608zm-7.21 4.723a.609.609 0 01-.605.608H2.755a.608.608 0 010-1.216h1.468c.333 0 .605.272.602.608zm16.406-.58c.334 0 .605.272.605.608a.607.607 0 01-.605.608h-1.468a.607.607 0 01-.605-.608c0-.336.272-.608.605-.608h1.468zM5.665 5.957L4.63 4.915a.607.607 0 01.852-.863l.002.003L6.52 5.097a.61.61 0 01-.429 1.039.62.62 0 01-.426-.18zm11.524.056a.607.607 0 01-.426-1.037L17.8 3.934a.602.602 0 01.851-.002l.003.002a.609.609 0 010 .857l-1.036 1.042a.607.607 0 01-.429.18zm-2.835 6.476v-.695h-1.479a.527.527 0 01-.523-.526V9.786h-.692v1.482a.525.525 0 01-.524.526H9.66v.695h1.476c.289 0 .524.235.524.527v1.481h.692v-1.481c0-.292.235-.527.523-.527h1.48zm.222-1.748c.448 0 .829.353.829.768v1.263c0 .414-.381.767-.83.767h-1.17v1.18c0 .45-.35.832-.768.832h-1.255c-.414 0-.767-.381-.767-.832v-1.177H9.441c-.448 0-.829-.353-.829-.77v-1.263c0-.418.381-.768.83-.768h1.17v-1.18c0-.45.353-.834.768-.834h1.255c.414 0 .767.381.767.832v1.176c-.003.006 1.174.006 1.174.006z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconAlarmLightCrossRegular;
