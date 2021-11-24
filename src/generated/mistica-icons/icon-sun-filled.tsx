/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconSunFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M21.214 11.335h-2.467c-.05 0-.09.017-.132.025-.134-1.675-.658-2.882-1.37-3.748.025-.017.042-.025.059-.042l1.773-1.765a.606.606 0 00.017-.857l-.017-.016a.611.611 0 00-.865-.014l-.014.014-1.774 1.764c-.016.017-.025.042-.042.065-1.333-1.04-2.924-1.294-3.77-1.353V2.769a.621.621 0 00-1.244-.003v2.636c-.86.05-2.428.289-3.745 1.311-.016-.017-.025-.048-.05-.064L5.85 4.932a.611.611 0 00-.865-.014l-.014.014a.624.624 0 000 .873L6.693 7.52c.026.017.05.025.076.05-.695.869-1.21 2.09-1.325 3.787-.042-.008-.073-.022-.115-.022H2.772a.623.623 0 00-.622.619c0 .336.283.616.622.616h2.56c.034 0 .064-.017.098-.017.076 1.709.524 2.961 1.177 3.871-.017.017-.042.023-.065.048l-1.709 1.7a.607.607 0 00-.014.86c.006.006.009.012.014.014a.593.593 0 00.77.073.582.582 0 00.25-.148l1.566-1.552c.017-.025.025-.05.05-.073 1.334 1.146 2.992 1.42 3.902 1.476v2.392c0 .348.275.62.622.62a.622.622 0 00.622-.62V18.84c0-.008-.008-.008-.008-.017.876-.05 2.602-.313 3.986-1.484.016.025.025.058.05.08l1.557 1.553c.124.123.28.179.44.179a.594.594 0 00.44-.18.606.606 0 00.017-.856l-.017-.017-1.56-1.55c-.034-.033-.073-.05-.118-.075.68-.916 1.16-2.188 1.227-3.927.042.008.076.025.115.025h2.468a.625.625 0 00.621-.619.619.619 0 00-.619-.616"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconSunFilled;
