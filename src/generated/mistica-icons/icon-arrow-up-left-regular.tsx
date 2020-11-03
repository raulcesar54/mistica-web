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

const IconArrowUpLeftRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M14.143 20.661a1.13 1.13 0 01-.216-.022c-.336-.073-.605-.303-.823-.521l-.014-.014-4.813-5.115-2.58 2.58-.008.008c-.33.317-.893.409-1.339.218-.414-.179-.66-.568-.658-1.044V4.664a.901.901 0 01.255-.717.89.89 0 01.717-.252l12.145.005a1.01 1.01 0 01.956.614c.204.456.112 1.047-.216 1.406a.074.074 0 00-.014.017l-2.384 2.375 4.905 4.79.006.006c.367.366.549.756.543 1.162-.006.395-.193.779-.56 1.143L15.02 20.26l-.017.017c-.278.255-.569.384-.86.384zm-.277-1.3c.17.168.246.21.274.222a.604.604 0 00.129-.093l5.017-5.039c.157-.157.243-.3.246-.4.003-.127-.12-.278-.227-.382l-4.972-4.857-.005-.005a.973.973 0 01-.017-1.376l2.448-2.448c.03-.042.045-.148.03-.213l-12.02-.005V16.75a.17.17 0 00.005.05c.037.02.137.017.177-.008l2.652-2.653a.954.954 0 01.7-.274.995.995 0 01.676.294l.01.01 4.878 5.191z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconArrowUpLeftRegular;