/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconLandlineLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.578 17.48a.357.357 0 010 .504.34.34 0 01-.49 0l-.428-.44a2.049 2.049 0 00-2.95 0l-3.478 3.619a2.742 2.742 0 01-3.943 0c-.989-1.016-1.074-2.616-.254-3.737-.989-.032-1.84-.38-2.486-1.034l-1.065-1.084c-.606-.618-.65-1.592-.093-2.168l1.595-1.656c.557-.576 1.501-.544 2.111.073l1.114 1.134c.753.764 2.38.197 3.872-1.349.766-.796 1.3-1.647 1.51-2.397.13-.471.196-1.13-.245-1.578l-1.114-1.134c-.606-.618-.65-1.588-.094-2.164l1.595-1.656c.277-.283.65-.43 1.056-.411.392.018.767.192 1.056.484l1.065 1.084c2.063 2.1.971 6.194-2.66 9.963-1.777 1.844-3.64 3.097-5.381 3.627a7.357 7.357 0 01-.816.193c-.001.001-.003.003-.003.005-.002.002-.003.004-.006.004l-.263.26c-.81.833-.81 2.192.005 3.029a2.05 2.05 0 002.954 0l3.47-3.619a2.73 2.73 0 013.938 0l.428.449zm1.813 1.68a.705.705 0 01-.695.713.705.705 0 01-.695-.714c0-.393.312-.713.695-.713.383 0 .695.32.695.713zM8.675 16.482c-1.07.325-2.571.485-3.631-.594l-1.07-1.07c-.334-.344-.374-.86-.089-1.158l1.595-1.656a.663.663 0 01.49-.2c.223 0 .455.09.637.278l1.114 1.134c1.074 1.09 3.025.545 4.856-1.354.86-.891 1.444-1.83 1.684-2.707.259-.934.107-1.743-.423-2.283L12.724 5.74c-.334-.343-.374-.86-.089-1.158l1.595-1.655a.665.665 0 01.526-.202c.222.01.432.11.601.28l1.065 1.083c1.773 1.803.677 5.485-2.664 8.952-1.698 1.761-3.453 2.95-5.083 3.444z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconLandlineLight;