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

const IconInternetFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M16.854 16.316v.003h4.177c-.437 1.182-1.079 2.18-1.913 2.986-1.583 1.524-3.846 2.34-6.734 2.423v-.056c.585-.112 1.148-.375 1.686-.781.678-.516 1.286-1.247 1.798-2.168.404-.72.731-1.533.986-2.407zm-10.277 0c.255.877.585 1.687.986 2.407.515.921 1.12 1.652 1.798 2.168.603.456 1.241.73 1.902.815v.017c-2.837-.101-5.067-.914-6.63-2.42-.837-.804-1.473-1.804-1.91-2.987zm4.686 0v4.244c-1.008-.19-1.96-1.025-2.72-2.392a10.098 10.098 0 01-.792-1.852h3.512zm4.423.003a10.38 10.38 0 01-.792 1.852c-.71 1.269-1.58 2.075-2.51 2.342v-4.194zm-4.423-7.148v5.95H7.431a15.43 15.43 0 01-.336-3.247c0-.908.076-1.81.23-2.703h3.938zm-5.075-.003a17.129 17.129 0 00-.213 2.703c-.003 1.09.1 2.177.31 3.247H2.362c-.232-.98-.347-2.062-.347-3.244.003-.972.081-1.871.235-2.706zm9.921.003c.154.89.233 1.795.23 2.7a15.41 15.41 0 01-.336 3.247h-3.62V9.17zm5.395-.003c.157.835.235 1.737.235 2.706 0 1.182-.114 2.263-.347 3.244h-4.24a17.132 17.132 0 00.095-5.95zm-10.24-5.986V8.05H7.568c.238-.91.565-1.747.972-2.476.762-1.367 1.714-2.199 2.722-2.392zm1.12.05c.93.264 1.8 1.073 2.51 2.342.406.729.733 1.566.972 2.476h-3.482zM11.266 2.02v.02c-.661.086-1.3.358-1.902.814-.678.516-1.283 1.247-1.798 2.168-.496.888-.883 1.914-1.151 3.028h-3.9c.432-1.456 1.138-2.663 2.118-3.607C6.196 2.936 8.426 2.12 11.266 2.02zm1.115-.003c2.888.087 5.154.899 6.737 2.426.977.946 1.686 2.15 2.117 3.607H17.02c-.27-1.114-.656-2.14-1.152-3.028-.512-.924-1.117-1.652-1.798-2.168-.535-.409-1.1-.67-1.686-.781h-.003z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconInternetFilled;