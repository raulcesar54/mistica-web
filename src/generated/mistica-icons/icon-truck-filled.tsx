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

const IconTruckFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M15.955 19.65c-1.126 0-1.697-.594-1.697-1.757 0-1.17.571-1.764 1.697-1.764 1.118 0 1.69.594 1.69 1.764 0 1.163-.572 1.757-1.69 1.757zm-9.65 0c-1.126 0-1.697-.594-1.697-1.757 0-1.17.571-1.764 1.697-1.764 1.118 0 1.69.594 1.69 1.764 0 1.163-.572 1.757-1.69 1.757zm14.7-7.983a479.146 479.146 0 01-2.831-3.922c-.41-.585-1.126-.97-1.835-.97h-.009l-.82.01V5.17c0-.82-.645-1.482-1.432-1.482L3.457 3.681c-.79 0-1.432.67-1.432 1.49V16.95c0 .809.628 1.473 1.406 1.487.202 1.54 1.264 2.468 2.872 2.468 1.599 0 2.66-.93 2.854-2.468h3.935c.194 1.54 1.255 2.468 2.863 2.468 1.6 0 2.661-.93 2.854-2.468h.869c.507 0 1.028-.233 1.423-.644a2.19 2.19 0 00.61-1.482v-2.97c.003-.728-.456-1.347-.705-1.674z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconTruckFilled;