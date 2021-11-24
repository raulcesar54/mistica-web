/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconStormLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M16.667 15.46l-1.053.005.367-.386a.417.417 0 00-.205-.692l-3.127-.707 1.81-4.721a.418.418 0 00-.165-.504.41.41 0 00-.521.07l-6.067 6.598a.417.417 0 00-.092.39l-1.236.006c-1.022 0-3.404-.334-3.404-3.427 0-1.738.742-2.833 2.208-3.254.176-.05.3-.215.3-.4l-.006-.115c0-4.954 4.273-5.34 5.582-5.34.742 0 4.486.17 5.377 3.535.047.18.204.303.387.309 1.26.036 4.2.526 4.2 4.304-.003 4.018-3.332 4.329-4.355 4.329zm-4.96.846a.423.423 0 00-.022-.345.407.407 0 00-.271-.207l-2.618-.594 4.12-4.483-1.208 3.152a.412.412 0 00.02.345.411.411 0 00.271.21l2.878.65-4.433 4.651 1.264-3.379zm5.437-10.295c-1.177-3.673-5.262-3.861-6.086-3.861-1.06 0-6.294.291-6.406 5.985-1.05.387-2.502 1.387-2.502 3.954 0 3.141 2.186 4.259 4.228 4.259l3.76-.017c.015 0 .026-.005.037-.008l.594.134-1.793 4.82a.417.417 0 00.384.563.42.42 0 00.297-.126l5.158-5.414 1.852-.01c.863 0 5.173-.25 5.173-5.162.003-4.287-3.278-5.007-4.696-5.117z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconStormLight;
