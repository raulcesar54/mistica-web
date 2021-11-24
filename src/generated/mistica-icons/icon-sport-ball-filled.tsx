/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconSportBallFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M18.381 19.23c-1.118-1.734-1.82-4.143-1.947-6.717h5.252c-.173 2.67-1.417 5.039-3.305 6.717zm-5.782 2.445v-9.162h2.39c.137 2.89.944 5.627 2.246 7.593a9.708 9.708 0 01-4.636 1.57zM12.6 2a9.75 9.75 0 014.519 1.504c-1.272 2.003-2.034 4.695-2.13 7.563H12.6V2zm9.087 9.067h-5.252c.095-2.524.762-4.952 1.84-6.706a9.847 9.847 0 013.412 6.706zm-10.532 0H8.658c-.095-2.86-.848-5.549-2.109-7.543a9.733 9.733 0 014.605-1.521v9.064zm0 10.62a9.914 9.914 0 01-4.75-1.609c1.319-1.986 2.111-4.663 2.246-7.565h2.504v9.173zM2 12.512h5.204c-.123 2.543-.826 4.944-1.935 6.677A9.899 9.899 0 012 12.513zm3.392-8.124c1.079 1.762 1.726 4.135 1.82 6.678h-5.2a9.824 9.824 0 013.38-6.678z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconSportBallFilled;
