/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconTreeLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M17.162 10.148a.398.398 0 00.031.664c.563.339.835.899.835 1.711 0 1.05-.476 1.712-1.417 1.961-.188.05-.308.283-.308.465 0 3.056-2.838 3.294-3.71 3.294h-.01v-4.695c.02-.02.047-.03.064-.053l2.305-2.935a.392.392 0 00-.064-.552l-.025-.02a.455.455 0 00-.605.084l-1.673 2.132V9.73c0-.224-.193-.406-.43-.406-.239 0-.432.182-.432.406v5.715L9.7 13.529a.452.452 0 00-.61-.003.39.39 0 00-.026.552c.009.008.014.017.023.022l2.596 2.462c.012.012.026.014.037.023v1.568c-.938-.16-2.283-.633-2.698-2.086a.424.424 0 00-.406-.3c-.829-.02-2.753-.314-2.753-2.628 0-.935.308-1.633.916-2.078a.4.4 0 00.165-.342.408.408 0 00-.199-.325c-.56-.336-.835-.896-.835-1.711 0-1.059.463-1.7 1.42-1.96.185-.051.306-.281.306-.463 0-3.056 2.837-3.294 3.709-3.294.691 0 2.997.157 3.571 2.17a.43.43 0 00.403.3c1.031.034 2.76.418 2.76 2.633 0 .95-.3 1.628-.917 2.079m1.782-2.073c0-2.314-1.644-3.277-3.286-3.429-.882-2.367-3.73-2.49-4.31-2.49-.746 0-4.384.188-4.56 3.888-1.124.423-1.738 1.35-1.738 2.647 0 1.031.381 1.678.807 2.076-.571.59-.857 1.39-.857 2.378 0 2.325 1.641 3.283 3.283 3.426.647 1.73 2.347 2.26 3.44 2.42v2.445c0 .227.193.407.431.407s.431-.183.431-.407v-2.378h.012c.745 0 4.383-.187 4.56-3.888.756-.283 1.74-.972 1.74-2.647 0-.885-.272-1.582-.807-2.078.568-.588.854-1.384.854-2.37"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconTreeLight;
