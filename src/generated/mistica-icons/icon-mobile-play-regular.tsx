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

const IconMobilePlayRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M6.956 13.785l2.88-1.647-2.88-1.65v3.297zm4.4-2.171a.607.607 0 01.305.524.608.608 0 01-.305.523L6.65 15.353a.605.605 0 01-.608 0 .606.606 0 01-.305-.52v-5.39a.61.61 0 01.913-.521l4.706 2.692zm9.272 6.54V5.852c0-.868-.193-1.488-.6-1.888-.406-.4-1.03-.597-1.907-.597h-6.21c-.869 0-1.496.202-1.908.61-.406.41-.6 1.023-.6 1.875v.498c2.93.41 4.611 2.283 4.611 5.79 0 3.499-1.672 5.365-4.602 5.782v.597c.042.666.235 1.182.591 1.535.406.395 1.03.588 1.908.588h6.21c.877 0 1.501-.193 1.907-.588.407-.404.6-1.02.6-1.9zm-12.55-1.35c3.216 0 4.718-1.487 4.718-4.664 0-3.184-1.502-4.672-4.717-4.672-3.208 0-4.7 1.49-4.7 4.672 0 3.177 1.492 4.664 4.7 4.664zM20.898 3.11c.641.644.95 1.535.95 2.742v12.302c0 1.213-.317 2.115-.967 2.751-.642.636-1.544.941-2.762.941h-6.207c-1.219 0-2.12-.305-2.77-.932-.575-.572-.886-1.342-.95-2.365v-.546c-.042 0-.073.009-.112.009-3.745 0-5.919-1.874-5.919-5.872 0-4.005 2.176-5.88 5.919-5.88.042 0 .073.01.106.01v-.42c0-1.191.308-2.077.958-2.726.647-.65 1.55-.964 2.768-.964h6.21c1.218 0 2.126.314 2.776.95zm-6.661 15.658c-.182-.185-.275-.44-.275-.76 0-.655.395-1.047 1.053-1.047.659 0 1.054.392 1.054 1.048 0 .32-.093.574-.275.759-.185.185-.454.286-.779.286s-.593-.098-.778-.286z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconMobilePlayRegular;