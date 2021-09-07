/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

type Props = {
    color?: string;
    size?: string | number;
};

const IconComputerAcademicRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M8.162 18.001a.181.181 0 01-.23 0c-.952-.756-2.2-1.103-3.086-1.266v-1.501l2.689 1.21c.294.132.633.134.927 0l2.787-1.252-.003 1.549c-.882.16-2.131.504-3.084 1.26zm-.187-6.918l4.725 2.123-4.675 2.123L3.3 13.206l4.675-2.123zm5.347 1.072l-4.86-2.184a1.138 1.138 0 00-.927 0l-1.992.893V7.416c0-.594.132-1.03.39-1.297.266-.274.714-.415 1.333-.415L18.72 5.7c.616 0 1.064.14 1.333.414.258.267.39.704.39 1.297v5.437c0 .6-.132 1.042-.393 1.314-.269.28-.717.423-1.33.423l-6.132.003.731-.328c.412-.185.678-.597.678-1.05a1.128 1.128 0 00-.675-1.054zm7.762 4.115h-8.627v-.482l6.266-.002c.946 0 1.683-.266 2.185-.79.481-.504.725-1.23.725-2.149V7.413c0-.919-.246-1.638-.728-2.137-.499-.516-1.233-.776-2.182-.776H7.269c-.952 0-1.686.263-2.185.776-.485.499-.728 1.218-.728 2.137v3.983l-1.678.757A1.14 1.14 0 002 13.206c0 .454.266.868.678 1.05l.963.437v2.045c0 .594.42 1.098.998 1.205.745.134 1.792.42 2.549 1.02.504.4 1.218.4 1.72 0 .753-.6 1.8-.886 2.549-1.02a1.21 1.21 0 00.733-.451h8.891a.606.606 0 00.602-.608.603.603 0 00-.599-.614z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconComputerAcademicRegular;