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

const IconPinRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M18.734 9.795a.62.62 0 00-.376.182l-2.919 2.938a.627.627 0 00-.165.586c.39 1.703-.193 3.353-1.779 4.96l-3.921-3.943c-.011-.014-.017-.034-.03-.048-.015-.014-.035-.02-.049-.03l-3.84-3.864.028-.03C7.257 8.96 8.904 8.36 10.577 8.758a.61.61 0 00.585-.168l2.919-2.938a.623.623 0 00.18-.384c.058-.605.335-1.187.856-1.764l5.387 5.414c-.563.524-1.143.812-1.77.877m2.79-1.628l-5.662-5.689a1.041 1.041 0 00-1.498 0c-.737.743-1.18 1.56-1.317 2.437l-2.53 2.55c-1.456-.253-3.529-.01-5.719 2.195l-.03.034a1.23 1.23 0 00-.362.88c0 .33.129.641.361.876l3.443 3.468-5.866 5.854a.634.634 0 00-.003.891.626.626 0 00.886.003l5.868-5.857 3.518 3.546a1.2 1.2 0 00.86.359c.333 0 .672-.135.947-.412 1.767-1.782 2.49-3.709 2.143-5.734l2.532-2.552c.877-.148 1.7-.602 2.462-1.37a.995.995 0 00.291-.708 1.093 1.093 0 00-.325-.77"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconPinRegular;