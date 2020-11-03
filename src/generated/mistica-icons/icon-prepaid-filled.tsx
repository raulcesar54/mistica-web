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

const IconPrepaidFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M17.463 2.16c1.11 0 1.919.269 2.473.826.552.555.818 1.362.818 2.463v13.109c0 1.115-.269 1.927-.826 2.479-.552.546-1.359.812-2.465.812h-6.555c-1.106 0-1.913-.266-2.465-.812-.554-.552-.826-1.364-.826-2.48v-3.562c-1.289-.09-2.314-.493-3.05-1.202-.874-.843-1.317-2.09-1.317-3.709 0-1.619.443-2.865 1.317-3.708.736-.712 1.764-1.112 3.056-1.202.042-.947.31-1.658.817-2.17.563-.567 1.37-.844 2.468-.844zM14.19 17.289c-.697 0-1.112.417-1.112 1.115 0 .339.093.61.289.81.196.198.479.305.82.305.342 0 .625-.107.821-.306.19-.199.289-.47.294-.81 0-.697-.414-1.114-1.112-1.114zM8.18 6.278c-1.255 0-2.21.305-2.835.907-.647.622-.975 1.6-.975 2.902 0 1.303.328 2.28.975 2.902.625.602 1.58.908 2.835.908s2.21-.306 2.835-.908c.647-.622.974-1.6.974-2.902s-.327-2.28-.974-2.902c-.625-.602-1.58-.907-2.835-.907zm0 .462a.35.35 0 01.35.35v.31c.373.046.717.16.995.331.204.126.235.292.235.379a.403.403 0 01-.404.403.538.538 0 01-.235-.064 2.232 2.232 0 00-.59-.225v1.454c1.248.188 1.517.916 1.515 1.502 0 .479-.177.885-.507 1.17-.255.222-.6.365-1.009.42v.328a.35.35 0 01-.7 0v-.319a2.88 2.88 0 01-1.32-.493.426.426 0 01-.196-.364.415.415 0 01.418-.41.514.514 0 01.266.085c.274.185.555.302.832.359v-1.538c-1.146-.21-1.395-.905-1.395-1.465 0-.852.538-1.434 1.395-1.552V7.09a.35.35 0 01.35-.35zm.35 3.787v1.429c.434-.093.69-.362.69-.746 0-.277-.09-.546-.69-.683zm-.7-2.308c-.362.09-.569.336-.569.697 0 .163 0 .474.569.642z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconPrepaidFilled;