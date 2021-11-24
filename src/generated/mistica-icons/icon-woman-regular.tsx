/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconWomanRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M16.98 15.746l-1.66-6.764a3.47 3.47 0 00-1.553-2.24c.55-.5.9-1.22.9-2.028C14.667 3.216 13.473 2 12.001 2S9.334 3.216 9.334 4.714c0 .807.35 1.528.9 2.027A3.426 3.426 0 008.685 8.96l-1.668 6.782v.013a.343.343 0 00-.008.07.386.386 0 00-.009.069v.013c0 .017.004.03.004.048a.389.389 0 00.026.134.387.387 0 00.021.065.4.4 0 00.03.061c.009.018.017.04.03.057l.038.052a.458.458 0 00.043.052c.013.013.03.026.043.043.017.013.034.03.05.044.018.013.035.021.056.034.017.014.039.022.056.03.021.01.047.018.068.027.013.004.03.013.043.017h.013a.324.324 0 00.064.009.467.467 0 00.072.009h1.681V21h5.334v-4.411h1.501a.462.462 0 00.077-.009c.03.004.06.009.09.009a.521.521 0 00.162-.022.68.68 0 00.478-.82zM12 3.36c.734 0 1.332.608 1.332 1.355 0 .746-.598 1.354-1.34 1.354a1.347 1.347 0 01-1.327-1.354c.004-.747.602-1.355 1.336-1.355zm1.332 11.87v4.412h-2.667V15.23H8.52l1.463-5.966c.21-.999 1.02-1.667 2.014-1.667.994 0 1.805.668 2.018 1.689l1.46 5.94h-2.142v.004z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M11.398 3.501c-.202.2-.306.53-.306.98 0 .889.376 1.267 1.255 1.267.883 0 1.258-.378 1.258-1.266 0-.451-.104-.782-.308-.98-.199-.194-.518-.292-.95-.292-.431-.003-.75.095-.95.291zm.947 3.457c-1.533 0-2.449-.924-2.449-2.476 0-.79.224-1.412.67-1.849.431-.42 1.028-.633 1.779-.633.75 0 1.347.213 1.778.63.446.437.675 1.06.675 1.852 0 1.552-.918 2.476-2.453 2.476zm4.106 7.283a.34.34 0 00.017-.241l-1.524-4.378c-.006-.011-.036-.087-.042-.098a1.64 1.64 0 00-1.507-1.009h-2.098A1.64 1.64 0 009.75 9.622l-1.524 4.386a.314.314 0 00.017.236c.02.042.067.115.165.148a.29.29 0 00.232-.008.31.31 0 00.157-.177l.79-2.386a.594.594 0 01.75-.39.6.6 0 01.387.76l-.364 1.14-.658 2.476h.216a.6.6 0 01.596.602l.017 3.75c0 .076.017.314.23.32.073-.008.095-.017.1-.022.04-.04.076-.143.076-.292l-.02-3.75c0-.16.062-.314.174-.429a.59.59 0 01.423-.18h1.673a.601.601 0 01.597.608l-.017 3.754s.002.308.16.314a.421.421 0 00.159-.028c.02-.02.059-.107.059-.289l.02-3.756a.602.602 0 01.596-.602h.213l-.664-2.493-.359-1.124a.6.6 0 01.387-.76c.31-.102.65.074.75.39l.793 2.393a.32.32 0 00.157.174c.042.02.123.047.219.01a.295.295 0 00.193-.156zm1.146-.636c.131.392.103.807-.073 1.17a1.47 1.47 0 01-.855.757 1.14 1.14 0 01-.493.087l.169.63a.604.604 0 01-.577.762h-.401l-.017 3.151c0 .48-.143.877-.417 1.149-.174.174-.485.372-.983.372h-.037c-.77-.014-1.33-.655-1.33-1.523l.014-3.149h-.47l.016 3.146c0 .47-.154.882-.437 1.16-.244.24-.563.366-.927.366h-.037c-.798-.02-1.397-.675-1.397-1.523l-.015-3.15h-.4a.585.585 0 01-.473-.238.604.604 0 01-.104-.524l.168-.633h-.003c-.17 0-.339-.03-.501-.09a1.473 1.473 0 01-.84-.75A1.517 1.517 0 017.1 13.61l1.526-4.393a1.3 1.3 0 01.084-.201 2.824 2.824 0 012.594-1.712h2.098c1.135 0 2.157.684 2.605 1.74.023.045.05.11.076.193l1.513 4.367z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconWomanRegular;
