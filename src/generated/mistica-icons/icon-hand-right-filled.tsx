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

const IconHandRightFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M14.39 18.164c0-.283-.04-.54-.118-.773.857-.238 1.367-.942 1.367-1.95 0-.283-.042-.543-.118-.776.85-.24 1.353-.941 1.353-1.944 0-.246-.03-.476-.09-.683h2.903c1.333 0 2.162-.818 2.162-2.135 0-1.266-.77-2.042-2.118-2.129h-7.428c.577-.339.98-.644 1.272-1.008a1.93 1.93 0 00.43-1.207c0-.404-.13-.801-.397-1.132-.52-.65-1.409-.81-2.263-.409-1.448.68-3.776 1.826-5.647 2.748a213.96 213.96 0 01-2.476 1.21c-.32.146-1.062.49-1.062 1.272v7.787c0 .983.308 1.82.866 2.361.554.538 1.33.81 2.302.81h6.997c1.275-.006 2.065-.785 2.065-2.042z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconHandRightFilled;