/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconAlertFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M21.892 19.877L12.656 3.375A.804.804 0 0012 3c-.256 0-.545.149-.656.374L2.108 19.877a.702.702 0 000 .75c.145.225.363.374.62.374h18.545a.702.702 0 00.619-.375c.144-.22.144-.484 0-.748zM11.455 9.226c0-.297.256-.561.545-.561.289 0 .545.264.545.561v5.776c0 .298-.256.562-.545.562-.289 0-.545-.264-.545-.562V9.227zm-.363 8.44c0-.522.4-.935.908-.935.507 0 .908.413.908.936 0 .523-.4.936-.908.936-.507 0-.908-.413-.908-.936z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M22.886 22.628a.799.799 0 00.019-.79L12.582 1.452C12.438 1.17 12.178 1 11.887 1c-.292 0-.552.172-.693.456L1.091 21.837a.8.8 0 00.025.788c.145.231.41.375.709.375h20.353a.82.82 0 00.708-.372zm-11.507-3.317c0-.393.226-.619.62-.619.395 0 .621.226.621.62 0 .393-.229.618-.62.618-.392 0-.62-.225-.62-.619zm1.25-2.363a.615.615 0 01-.617.616.616.616 0 01-.617-.616V8.34a.616.616 0 111.234 0v8.608z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconAlertFilled;
