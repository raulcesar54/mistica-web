/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconUnlimitedCallsSmsLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M17.833 16.177c-2.075 2.181-4.236 3.636-6.256 4.2a.36.36 0 01-.1.016.394.394 0 01-.377-.303.41.41 0 01.276-.502c1.854-.523 3.955-1.936 5.9-3.986 3.768-3.965 5.004-8.176 3.004-10.237l-1.2-1.24c-.378-.387-.95-.429-1.272-.089L16.009 5.93a.81.81 0 00-.211.622c.015.256.126.508.311.701l1.257 1.297c1.19 1.224.608 3.573-1.422 5.702-.975 1.025-2 1.726-2.965 2.02-1.02.313-1.914.146-2.512-.472L9.21 14.503c-.376-.387-.95-.429-1.27-.094l-1.8 1.894a.81.81 0 00-.21.622c.014.256.125.508.31.701l1.202 1.24a.424.424 0 01.005.58.379.379 0 01-.553.006l-1.2-1.24a1.923 1.923 0 01-.549-1.235 1.654 1.654 0 01.438-1.24l1.798-1.893c.629-.659 1.694-.622 2.382.084l1.256 1.297c.498.513 1.216.429 1.739.267.824-.257 1.759-.9 2.628-1.81 1.673-1.763 2.276-3.672 1.427-4.546L15.557 7.84a1.924 1.924 0 01-.548-1.235c-.025-.476.13-.915.437-1.24l1.799-1.893c.628-.659 1.693-.622 2.382.084l1.2 1.24c2.337 2.39 1.101 7.072-2.994 11.382zm-11.165-5.2a2.65 2.65 0 01-1.935.832 2.684 2.684 0 01-1.934-.832c-1.065-1.108-1.065-2.913 0-4.022a2.656 2.656 0 011.934-.832c.729 0 1.417.298 1.935.832l1.377 1.433 1.377-1.433a2.656 2.656 0 011.934-.832c.734 0 1.417.298 1.935.832 1.065 1.109 1.065 2.914 0 4.022a2.676 2.676 0 01-1.935.832 2.676 2.676 0 01-1.934-.832L8.05 9.544l-1.382 1.433zm3.311-.58c.759.79 1.995.79 2.754 0a2.09 2.09 0 000-2.867 1.896 1.896 0 00-2.754 0L8.602 8.964l1.377 1.433zm-3.864 0l1.377-1.433L6.115 7.53a1.897 1.897 0 00-2.753 0 2.09 2.09 0 000 2.867c.758.79 1.995.79 2.753 0zm2.367 9.787c0-.45.352-.816.784-.816.432 0 .784.366.784.816 0 .45-.352.816-.784.816-.432 0-.784-.366-.784-.816z"
            />
        </svg>
    );
};

export default IconUnlimitedCallsSmsLight;
