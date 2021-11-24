/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconRoadSignLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M11.99 21.016c5.99 0 9.023-3.034 9.023-9.02 0-5.989-3.037-9.022-9.023-9.022S2.97 6.01 2.97 11.996c0 5.986 3.037 9.02 9.02 9.02zm0-18.866c6.443 0 9.846 3.406 9.846 9.846 0 6.437-3.403 9.84-9.846 9.84-6.437 0-9.84-3.403-9.84-9.84 0-6.44 3.403-9.846 9.84-9.846zm1.768 10.345l2.689-2.6-2.69-2.608v.983c0 .227-.246.463-.47.463H9.248a.142.142 0 00-.1.042.133.133 0 00-.043.1v8.048h2.137v-5.456a.41.41 0 01.41-.41h1.63c.12.009.235.062.319.146a.504.504 0 01.151.317c.006 0 .006.975.006.975zm.255-6.101l3.123 3.028a.642.642 0 01-.022.963L14.04 13.36c-.233.19-.502.221-.731.115a.648.648 0 01-.376-.586v-1.01h-.868v5.453a.41.41 0 01-.409.409H8.693a.41.41 0 01-.409-.409v-8.46c0-.257.101-.498.283-.68a.956.956 0 01.681-.283l3.69.003v-1.02a.64.64 0 01.372-.582.657.657 0 01.703.084z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconRoadSignLight;
