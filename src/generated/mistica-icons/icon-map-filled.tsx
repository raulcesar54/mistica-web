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

const IconMapFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M20.589 19.743l-3.222-.53V3.53l3.222.53v15.683zm-9.216.613l-3.289-1.067V3.653l3.289 1.067v15.636zM21.32 2.908l-4.477-.737c-.014-.003-.03.003-.044.003-.02-.003-.037-.011-.06-.011-.041 0-.078.014-.117.022-.022.006-.047-.003-.07.006l-4.546 1.414L7.65 2.191c-.022-.006-.047 0-.073-.006-.039-.008-.078-.025-.12-.025-.02 0-.037.008-.053.008-.014.003-.028-.005-.045-.002l-4.67.736a.627.627 0 00-.529.622v16.958a.627.627 0 00.725.62l4.521-.715 4.404 1.431a.633.633 0 00.38 0l4.597-1.431 4.328.714a.634.634 0 00.734-.619V3.527a.634.634 0 00-.53-.62z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconMapFilled;