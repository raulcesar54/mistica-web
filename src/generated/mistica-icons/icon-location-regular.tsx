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

const IconLocationRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <defs>
                <filter id="prefix__a">
                    <feColorMatrix
                        in="SourceGraphic"
                        values="0 0 0 0 0.192157 0 0 0 0 0.196078 0 0 0 0 0.207843 0 0 0 1.000000 0"
                    />
                </filter>
            </defs>
            <g filter="url(#prefix__a)" fill={fillColor} fillRule="evenodd">
                <path
                    d="M12.068 3.223c-3.769 0-5.85 2.11-5.862 5.945-.011 3.407 4.045 9.221 5.845 11.31 1.639-1.912 5.891-7.703 5.902-11.273.012-3.846-2.067-5.968-5.856-5.982h-.029zm-.014 18.767a.6.6 0 01-.427-.179C10.277 20.441 4.986 13.528 5 9.165 5.014 4.677 7.657 2 12.068 2h.032c4.431.014 7.07 2.708 7.057 7.208-.012 4.682-5.846 11.761-6.676 12.603a.606.606 0 01-.427.18zM12.08 7.3c-.97 0-1.445.48-1.445 1.464 0 .987.472 1.468 1.445 1.468.972 0 1.445-.481 1.445-1.465 0-.987-.475-1.465-1.445-1.468zm0 4.158c-1.636 0-2.651-1.033-2.651-2.691s1.015-2.691 2.65-2.691c1.636 0 2.652 1.033 2.652 2.69 0 1.66-1.016 2.692-2.651 2.692z"
                    fill={fillColor}
                />
            </g>
        </svg>
    );
};

export default IconLocationRegular;