'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconComputerAcademicFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.841 16.996a.604.604 0 0 0-.602-.608h-8.636v-.482l6.263-.002c.95 0 1.684-.266 2.185-.79.485-.504.729-1.227.729-2.149V7.528c0-.918-.244-1.638-.729-2.137-.498-.512-1.232-.776-2.182-.776l-11.453.006c-.95 0-1.684.26-2.183.776-.481.496-.728 1.218-.728 2.137v3.092L7.36 9.343a1.917 1.917 0 0 1 1.583.003l4.86 2.185a1.938 1.938 0 0 1 1.153 1.793c0 .776-.454 1.479-1.154 1.793l-4.857 2.182a1.928 1.928 0 0 1-1.583 0l-3.566-1.605v1.156c0 .594.42 1.101 1 1.205.748.134 1.796.42 2.55 1.02.254.201.557.302.86.302.302 0 .604-.1.86-.302.753-.6 1.803-.886 2.548-1.02.3-.053.555-.221.734-.451h8.891a.604.604 0 0 0 .602-.608M7.69 16.56c.148.067.305.101.465.101.157 0 .317-.034.462-.104l4.86-2.185c.412-.182.678-.596.678-1.05 0-.462-.26-.865-.678-1.053l-4.86-2.185a1.138 1.138 0 0 0-.927 0l-4.86 2.188a1.137 1.137 0 0 0-.675 1.05c0 .462.26.863.678 1.053z"
            />
        </svg>
    );
};

export default IconComputerAcademicFilled;
