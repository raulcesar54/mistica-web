/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconDataRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M18.056 9.476c-.196.32-.737.756-1.709 1.053-1.07.325-2.493.502-4.003.502-1.51 0-2.932-.177-4.002-.502-1.02-.31-1.552-.725-1.731-1.033v-3.07c.375.23.829.426 1.372.588 1.182.359 2.731.555 4.361.555s3.18-.2 4.362-.555a6.061 6.061 0 001.353-.574v3.036h-.003zm0 4.728c-.188.32-.723.765-1.709 1.065-1.07.325-2.493.501-4.003.501-1.51 0-2.932-.179-4.002-.504-1.023-.308-1.555-.723-1.731-1.034v-3.095c.386.23.846.432 1.372.591 1.185.359 2.734.555 4.364.555s3.18-.196 4.362-.555a5.81 5.81 0 001.35-.594v3.07h-.003zm0 4.423c0 .645-.936 1.062-1.717 1.3-1.079.325-2.502.504-4.009.504-1.504 0-2.927-.179-4.002-.501-.785-.238-1.72-.656-1.72-1.3v-2.748c.386.23.846.432 1.372.589 1.185.358 2.734.557 4.364.557s3.18-.196 4.362-.555c.51-.154.963-.358 1.35-.594v2.748zM8.328 3.76c1.073-.325 2.493-.504 4.002-.504 1.513 0 2.933.18 4.006.501.67.202 1.443.538 1.658 1.034-.173.386-.75.748-1.65 1.02-1.07.322-2.49.5-4.002.5-1.513 0-2.933-.178-4.003-.5-.908-.275-1.485-.642-1.653-1.031.18-.387.743-.748 1.642-1.02zm8.37-1.204C15.512 2.196 13.96 2 12.33 2c-1.627 0-3.179.199-4.364.555-1.431.434-2.283 1.095-2.532 1.966a1.92 1.92 0 00-.075.538v13.568c0 1.138.876 1.978 2.607 2.505 1.19.358 2.74.554 4.362.554 1.624 0 3.173-.196 4.367-.554 1.728-.524 2.607-1.367 2.607-2.502V5.062c.003-1.14-.873-1.984-2.605-2.507z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDataRegular;
