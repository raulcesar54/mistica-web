/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconVideoChatLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M12.357 2c-5.057 0-9.17 4.319-9.17 9.628 0 1.389.276 2.726.817 3.982l-1.512 5.925a.376.376 0 00.09.356.344.344 0 00.249.109.278.278 0 00.09-.014l5.64-1.588a8.805 8.805 0 008.538-.53.375.375 0 00.117-.508.342.342 0 00-.483-.124 8.14 8.14 0 01-7.97.446c-.067-.038-.149-.057-.234-.038a.715.715 0 00-.05.014l-5.147 1.45 1.386-5.437a.38.38 0 00-.04-.289 9.147 9.147 0 01-.786-3.75c0-4.901 3.797-8.888 8.465-8.888 4.669 0 8.466 3.987 8.466 8.889 0 1.63-.424 3.223-1.223 4.607a.38.38 0 00.117.508.338.338 0 00.483-.124 9.998 9.998 0 001.328-4.991c0-5.31-4.114-9.633-9.17-9.633zm6.881 16.141c0 .408-.316.74-.704.74-.388 0-.704-.332-.704-.74 0-.407.316-.74.704-.74.388 0 .704.333.704.74zM17.65 15.15c.045 0 .09-.01.136-.028A.373.373 0 0018 14.78V8.485a.373.373 0 00-.216-.341.343.343 0 00-.384.08l-2.574 2.702V8.3h-7.76v6.665h7.761V12.34l2.574 2.702a.344.344 0 00.248.109zm-3.53-6.11v5.186H7.77V9.04h6.348zm1.033 2.588l2.145-2.252v4.504l-2.145-2.252z"
            />
        </svg>
    );
};

export default IconVideoChatLight;
