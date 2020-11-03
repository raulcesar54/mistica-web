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

const IconDocumentOtherFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M13.632 3.83v1.759c0 .666.208 1.215.614 1.613.406.398.98.608 1.667.608h1.767l-4.048-3.98zm5.695 4.086a.62.62 0 01.048.244v12.308c0 .745-.63 1.378-1.387 1.378H5.997c-.734 0-1.387-.641-1.387-1.378l.042-3.3-.042-7.977V3.538c0-.723.661-1.378 1.387-1.378h7.3a.86.86 0 01.613.252l5.21 5.123a.846.846 0 01.207.381zm-6.571 7.378a.915.915 0 00-.916-.932.913.913 0 00-.916.932v.017a.91.91 0 00.924.925c.51 0 .908-.407.908-.942zm3.106 0a.915.915 0 00-.916-.932.913.913 0 00-.916.932v.017a.91.91 0 00.925.925c.51 0 .907-.407.907-.942zm-6.216 0a.917.917 0 00-.924-.932c-.51 0-.908.411-.908.932v.017c0 .518.398.925.916.925.519 0 .916-.407.916-.942z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDocumentOtherFilled;