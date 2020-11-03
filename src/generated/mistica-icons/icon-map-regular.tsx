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

const IconMapRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M20.591 19.74l-3.218-.53V3.53l3.218.53v15.68zM3.421 4.062l3.411-.538v15.684l-3.411.54V4.062zm9.212.664l3.482-1.084v15.641l-3.482 1.084V4.726zM8.087 3.653l3.291 1.067v15.633l-3.29-1.067V3.653zm13.235-.748l-4.476-.737c-.014-.002-.03.003-.045.003-.02-.003-.036-.011-.056-.011-.042 0-.078.014-.117.022-.023.006-.048-.002-.07.006l-4.55 1.415L7.654 2.19c-.025-.009-.048 0-.073-.006-.042-.008-.078-.025-.123-.025-.02 0-.036.008-.053.011-.014.003-.028-.005-.045-.003l-4.67.737a.63.63 0 00-.529.622v16.952a.628.628 0 00.728.619l4.521-.714 4.404 1.429a.648.648 0 00.38.002l4.597-1.43 4.328.713a.646.646 0 00.51-.14.63.63 0 00.221-.479V3.524a.629.629 0 00-.527-.619z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconMapRegular;