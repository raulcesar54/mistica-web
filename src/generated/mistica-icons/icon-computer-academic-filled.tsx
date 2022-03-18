/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconComputerAcademicFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.686 16.906a.604.604 0 00-.602-.608h-8.636v-.481l6.264-.003c.95 0 1.683-.266 2.184-.79.485-.504.729-1.227.729-2.149V7.438c0-.918-.244-1.638-.729-2.137-.498-.512-1.232-.776-2.182-.776l-11.453.006c-.95 0-1.684.26-2.183.776-.481.496-.728 1.218-.728 2.137v3.092l2.854-1.282a1.917 1.917 0 011.583.003l4.86 2.184a1.938 1.938 0 011.154 1.793c0 .776-.454 1.479-1.154 1.793l-1.19.535-3.667 1.647a1.928 1.928 0 01-1.583 0l-3.566-1.605v1.157c0 .593.42 1.1 1 1.204.748.134 1.796.42 2.55 1.02.254.201.557.302.86.302.302 0 .604-.1.86-.302.753-.6 1.803-.886 2.548-1.02.3-.053.555-.221.734-.451h8.891a.604.604 0 00.602-.608zM7.535 16.47c.148.067.305.101.465.101.157 0 .317-.034.462-.104l4.86-2.185c.412-.182.678-.596.678-1.05 0-.462-.26-.865-.678-1.053l-4.86-2.185a1.138 1.138 0 00-.927 0l-4.86 2.188A1.137 1.137 0 002 13.23c0 .462.26.863.678 1.053l4.857 2.185z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconComputerAcademicFilled;