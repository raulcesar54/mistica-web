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

const IconCarLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M20.701 14.869h-2.627c-.157-1.255-1.042-2.023-2.406-2.023-1.361 0-2.25.768-2.406 2.023h-3.81c-.154-1.26-1.042-2.031-2.406-2.031s-2.252.77-2.406 2.03H3.07a9.379 9.379 0 01-.073-1.921c-.008-.924.653-2.53 1.93-3.807a7.047 7.047 0 015.098-2.1c4.678 0 6.583 3.047 6.661 3.176a.42.42 0 00.328.199c.025.003 2.34.173 3.493 2.053.874 1.426.4 2.17.193 2.4m-5.033 2.015c-1.056 0-1.614-.558-1.614-1.608s.558-1.608 1.614-1.608 1.613.557 1.613 1.608c0 1.05-.557 1.608-1.613 1.608m-8.622-.009c-1.056 0-1.616-.554-1.616-1.608 0-1.05.56-1.607 1.616-1.607s1.613.557 1.613 1.607c0 1.054-.557 1.608-1.613 1.608m14.168-4.835c-1.174-1.91-3.26-2.336-3.933-2.422-.512-.729-2.697-3.398-7.252-3.398-2.77 0-4.622 1.271-5.686 2.341-1.501 1.505-2.177 3.334-2.168 4.367-.084 1.451.143 2.41.154 2.451a.41.41 0 00.4.314h1.91c.166 1.247 1.051 2.006 2.407 2.006s2.24-.76 2.406-2.006h3.813c.16 1.252 1.047 2.014 2.406 2.014 1.358 0 2.243-.762 2.406-2.014h2.787c.087 0 .17-.028.24-.078.015-.014 1.578-1.182.11-3.575"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCarLight;