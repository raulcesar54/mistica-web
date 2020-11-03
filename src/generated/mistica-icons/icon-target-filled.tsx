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

const IconTargetFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M17.888 12.476a.598.598 0 110-1.199h.462c-.272-5.056-4.182-5.918-5.905-6.047v.6a.598.598 0 01-.6.599.593.593 0 01-.599-.6v-.616c-1.56.04-5.781.689-6.039 6.064h.594c.336 0 .6.264.6.6a.6.6 0 01-.6.6h-.585c.344 5.15 4.431 5.845 6.03 5.918v-.48a.598.598 0 111.2 0v.466c1.688-.104 5.576-.919 5.896-5.902h-.454v-.003zm3.199-1.202c.336 0 .6.264.6.6a.6.6 0 01-.6.6h-1.544c-.344 6.159-5.414 7-7.095 7.103v1.535a.6.6 0 01-.6.6.593.593 0 01-.599-.6v-1.521c-1.518-.064-6.854-.75-7.232-7.12H2.602a.598.598 0 110-1.199h1.406C4.288 4.655 9.793 4.048 11.246 4V2.625a.598.598 0 111.2 0v1.4c1.72.12 6.806 1.025 7.103 7.247h1.538v.002zm-7.185-1.59c0 .703-.193 1.24-.569 1.599-.367.344-.888.52-1.56.52s-1.193-.176-1.552-.52c-.375-.361-.568-.896-.568-1.6 0-.694.193-1.232.568-1.59.362-.354.88-.527 1.552-.527s1.193.176 1.56.526c.378.359.569.897.569 1.591zm1.647 5.406v.711a.246.246 0 01-.25.238H8.247a.246.246 0 01-.24-.238v-.711c0-.673.207-1.247.607-1.664.432-.454 1.082-.687 1.863-.687h2.591c.785 0 1.432.233 1.863.687.403.417.619.994.619 1.664z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconTargetFilled;