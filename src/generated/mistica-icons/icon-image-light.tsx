/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconImageLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M21.016 18.04V5.728c0-.135-.272-.395-.6-.395H3.57c-.33 0-.596.238-.596.395L2.97 18.043c0 .157.269.395.6.395h16.848c.325-.002.597-.263.597-.397zm-.6-13.54c.745 0 1.42.583 1.42 1.224v12.317c0 .638-.678 1.224-1.42 1.224H3.567c-.753.003-1.417-.572-1.417-1.224l.003-12.317c0-.653.664-1.224 1.42-1.224h16.843zM7.05 7.62c-.678 0-1.23.558-1.23 1.241 0 .687.552 1.241 1.23 1.241.678 0 1.23-.557 1.23-1.24 0-.684-.552-1.242-1.23-1.242zm0 3.314c-1.131 0-2.05-.93-2.05-2.07 0-1.14.919-2.07 2.05-2.07 1.132 0 2.05.93 2.05 2.07 0 1.14-.918 2.07-2.05 2.07zm9.308-.765l3.247 2.507a.42.42 0 01.078.583.407.407 0 01-.571.079l-.003-.003-2.994-2.311-3.507 2.818 2.142 2.039c.166.157.174.42.017.585a.407.407 0 01-.574.023l-.006-.006-3.507-3.336-5 4.202a.405.405 0 01-.574-.05l-.003-.003a.416.416 0 01.054-.583l5.277-4.44a.407.407 0 01.543.017l1.026.975 3.851-3.09a.408.408 0 01.504-.006z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconImageLight;
