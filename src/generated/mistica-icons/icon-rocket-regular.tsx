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

const IconRocketRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M14.367 9.922c.58 0 .784-.208.784-.788 0-.582-.204-.787-.784-.787-.577 0-.784.208-.784.787 0 .58.207.788.784.788zm0-2.816c1.26 0 2.014.76 2.014 2.026 0 1.269-.754 2.025-2.014 2.025-1.26 0-2.014-.756-2.014-2.025 0-1.266.753-2.026 2.014-2.026zM6.14 18.891c.49-.493.49-.874 0-1.367-.244-.247-.462-.37-.678-.37-.218 0-.434.123-.68.37-.502.504-1.295 1.496-1.5 2.871 1.432-.219 2.452-1.095 2.858-1.504zM3.91 16.65c.972-.975 2.132-.978 3.101 0 .97.977.97 2.143 0 3.118-.574.577-2.151 1.918-4.395 1.918A.619.619 0 012 21.067c0-2.173 1.196-3.7 1.91-4.417zm12.706-2.96c.154-.138.297-.281.457-.44 1.081-1.088 1.835-2.432 2.353-3.777l-5.168-5.196c-1.345.527-2.69 1.289-3.779 2.387-.14.14-.303.302-.443.465l-.537.605c-.975 1.134-1.936 2.527-2.569 3.709l-.333.672c-.328.728-.362 1.061-.362 1.168l4.213 4.235c.081.009.432-.022 1.177-.372l.686-.334c1.154-.613 2.496-1.554 3.683-2.585l.622-.538zm.362 3.125a2.594 2.594 0 00-.317-1.535 23.912 23.912 0 01-2.877 2.11c.174.366.334.736.485 1.097.19.454.46 1.101.655 1.376 1.272-1.02 1.95-2.034 2.054-3.048zM5.398 9.49c.325.137.655.283.983.437.6-.98 1.33-1.989 2.098-2.893a2.606 2.606 0 00-1.42-.27c-1.017.104-2.037.802-3.031 2.068.275.193.919.468 1.37.658zm14.619-6.22c-.776-.087-2.527.014-4.454.566l4.303 4.327c.557-1.96.655-3.739.563-4.487a.476.476 0 00-.412-.406zm-2.073 10.854c-.118.12-.233.224-.345.334.28.431.715 1.3.608 2.45-.131 1.412-1.017 2.762-2.63 4.015a1.016 1.016 0 01-.894.235c-.703-.165-1.056-1.014-1.549-2.188a24.899 24.899 0 00-.425-.972l-.555.272c-.703.328-1.263.49-1.7.49-.348 0-.62-.104-.824-.308l-4.32-4.345c-.599-.551-.223-1.638.175-2.52l.288-.578a32.733 32.733 0 00-.851-.375c-1.168-.493-2.012-.851-2.177-1.557-.045-.182-.067-.547.252-.925C4.221 6.555 5.563 5.664 6.97 5.53a3.8 3.8 0 012.356.558c.098-.104.196-.21.286-.3 3.294-3.314 8.621-3.97 10.554-3.748a1.716 1.716 0 011.485 1.482c.199 1.636-.308 7.185-3.706 10.602z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconRocketRegular;