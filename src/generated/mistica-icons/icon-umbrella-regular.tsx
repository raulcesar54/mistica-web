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

const IconUmbrellaRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M20.387 11.134a.308.308 0 01-.236.107l-1.812-.006c-.602-3.375-2.135-5.361-3.55-6.501 1.494.361 2.724 1.014 3.66 1.97 1.027 1.05 1.7 2.464 1.996 4.206a.31.31 0 01-.058.224zm-7.84-6.372c1.29.6 3.71 2.266 4.534 6.473l-4.535-.01V4.761zm-5.945 6.445c.799-4.064 3.406-5.82 4.703-6.453v6.467l-4.703-.014zm-3.218-.056c-.011-.008-.04-.028-.07-.061a.294.294 0 01-.07-.236c.308-1.736.991-3.145 2.033-4.187.978-.986 2.272-1.647 3.85-1.986-1.494 1.157-3.183 3.17-3.78 6.52l-1.795-.005a.342.342 0 01-.168-.045zm18.28-.448c-.34-1.983-1.123-3.616-2.328-4.846-1.605-1.639-3.885-2.524-6.79-2.653v-.593A.616.616 0 0011.927 2a.616.616 0 00-.619.61v.594c-2.952.087-5.283.961-6.913 2.608-1.219 1.222-2.017 2.846-2.37 4.83a1.523 1.523 0 00.706 1.546c.238.145.524.23.815.232l7.762.023v7.014c0 .014 0 .028.003.042.025 1.212 1.036 2.19 2.272 2.19 1.252 0 2.271-1.006 2.271-2.24a.616.616 0 00-.619-.611.616.616 0 00-.619.61c0 .56-.465 1.017-1.033 1.017a1.028 1.028 0 01-1.034-1.017v-7.003l7.605.02c.46-.003.894-.199 1.196-.557.275-.348.39-.788.314-1.205z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconUmbrellaRegular;