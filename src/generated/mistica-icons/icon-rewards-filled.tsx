/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconRewardsFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.98 17.135c4.112 0 7.448-3.39 7.448-7.568C19.428 5.39 16.092 2 11.979 2 7.866 2 4.53 5.39 4.53 9.567c0 4.178 3.336 7.568 7.45 7.568zm-.432 1.07l-1.943 3.518a.533.533 0 01-.463.277c-.023 0-.045 0-.064-.005a.543.543 0 01-.449-.396l-.921-3.427-3.024.923a.526.526 0 01-.567-.18.545.545 0 01-.05-.6l1.607-2.942c1.47 1.642 3.55 2.712 5.874 2.832zm6.722-2.822a8.453 8.453 0 01-5.969 2.822l2.057 3.528a.528.528 0 00.458.262c.023 0 .045 0 .073-.004a.528.528 0 00.44-.392l.921-3.431 3.07.922c.208.06.435-.01.567-.184a.544.544 0 00.04-.604l-1.657-2.92zm-.97-5.456c0-.3-.237-.54-.532-.54-2.388 0-4.258-1.978-4.258-4.505 0-.3-.236-.54-.53-.54a.533.533 0 00-.532.54c0 2.527-1.87 4.506-4.258 4.506a.533.533 0 00-.531.54c0 .299.236.539.531.539 2.506 0 4.258 1.701 4.258 4.14 0 .3.236.54.531.54.295 0 .531-.24.531-.54 0-2.439 1.752-4.14 4.258-4.14.29 0 .531-.24.531-.54zM9.586 9.89a5.358 5.358 0 002.392-2.531A5.358 5.358 0 0014.37 9.89a4.912 4.912 0 00-2.392 2.329A4.913 4.913 0 009.587 9.89z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconRewardsFilled;