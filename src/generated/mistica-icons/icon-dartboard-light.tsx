'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconDartboardLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m21.42 5.231-2.465 2.593a.337.337 0 0 1-.248.109H16.38l-3.39 3.56c.591.739.953 1.691.953 2.734 0 2.346-1.82 4.256-4.055 4.256-2.235 0-4.054-1.91-4.054-4.256s1.82-4.256 4.054-4.256c.993 0 1.9.374 2.605 1l1.874-1.967c-1.233-1.166-2.808-1.81-4.479-1.81-3.693 0-6.7 3.156-6.7 7.033 0 3.877 3.007 7.034 6.7 7.034 1.25 0 2.474-.365 3.53-1.057a.343.343 0 0 1 .488.118.38.38 0 0 1-.113.512A7.13 7.13 0 0 1 9.89 22c-4.086 0-7.409-3.488-7.409-7.778 0-4.289 3.323-7.777 7.409-7.777 1.856 0 3.612.72 4.976 2.028l1.02-1.07V4.96c0-.1.036-.194.104-.26l2.47-2.593a.343.343 0 0 1 .383-.08c.131.056.217.194.217.34v2.224h2.117c.145 0 .271.09.326.227a.39.39 0 0 1-.082.412Zm-5.54 13.807c0 .407-.316.74-.704.74-.388 0-.704-.333-.704-.74 0-.408.316-.74.704-.74.388 0 .704.332.704.74Zm-5.743-4.55a.344.344 0 0 1-.248.109.344.344 0 0 1-.248-.11.376.376 0 0 1 0-.52l2.352-2.47a3.25 3.25 0 0 0-2.104-.782c-1.847 0-3.35 1.578-3.35 3.517 0 1.938 1.503 3.517 3.35 3.517 1.847 0 3.35-1.579 3.35-3.517a3.637 3.637 0 0 0-.75-2.213l-2.352 2.469ZM20.323 5.34h-1.968V3.274l-1.766 1.853v2.067h1.969l1.765-1.853Zm-4.52 5.583a.382.382 0 0 1 .145-.503.344.344 0 0 1 .479.157 8.084 8.084 0 0 1 .867 3.654c0 1.08-.208 2.128-.619 3.109a.352.352 0 0 1-.325.223.303.303 0 0 1-.14-.033.38.38 0 0 1-.18-.489 7.383 7.383 0 0 0 .555-2.815 7.298 7.298 0 0 0-.781-3.303Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.429 5.16a.413.413 0 0 1 .36.22.4.4 0 0 1-.027.42l-1.185 1.725a.407.407 0 0 1-.339.18h-3.134l-.88.873c1.034 1.171 1.779 2.88 1.779 5.415 0 7.252-6.05 7.815-7.563 7.843l-.218.001-.253.002c-.084 0-.17 0-.255-.003-1.59-.022-7.563-.594-7.563-7.893 0-7.289 5.919-7.83 7.507-7.844l.16-.002c.196 0 .392.002.588.008.91.022 3.361.252 5.238 1.89l.813-.806V3.892a.42.42 0 0 1 .156-.32l1.7-1.333a.413.413 0 0 1 .667.32v2.129l.233-.233c.162-.16.42-.16.582 0l.003.003a.407.407 0 0 1-.002.574l-.11.11zm-4.146-1.07v2.284l.877-.869V3.402zm.647 2.796h2.092s.63-.918.633-.918l-1.781-.017zm-7.644 4.219c.787.017 1.367.157 1.784.44l1.21-1.196c-.709-.58-1.678-.897-2.95-.928a71.778 71.778 0 0 0-.644-.005C6.868 9.44 5.5 10.923 5.5 13.943c0 3.036 1.395 4.534 4.266 4.574l.201.003.423-.003c2.874-.048 4.275-1.532 4.275-4.527 0-1.3-.283-2.302-.824-3.042l-1.215 1.204c.238.443.341 1.043.341 1.838 0 2.092-.66 2.81-2.613 2.843l-.398.003-.185-.003c-1.666-.022-2.577-.49-2.577-2.89 0-2.373.883-2.83 2.51-2.844h.01c.068 0 .436.003.573.006m1.857 2.882c0-.532-.05-.916-.151-1.213l-1.435 1.423.633-.01h.006a.408.408 0 0 1 .412.4c0 .227-.18.412-.406.414l-1.647.026h-.006a.409.409 0 0 1-.347-.205.395.395 0 0 1-.062-.196v-.006l-.003-1.641v-.003c0-.224.182-.406.41-.406h.005a.41.41 0 0 1 .409.406l.003.658 1.52-1.51c-.285-.145-.683-.193-1.215-.207-.135-.002-.513-.002-.563-.002-1.174.008-1.69.098-1.69 2.025 0 1.963.575 2.059 1.765 2.075l.18.003.38-.003c1.415-.025 1.802-.28 1.802-2.028m2.213 5.939c1.877-1.157 2.826-3.157 2.826-5.939 0-2.039-.518-3.658-1.532-4.837l-1.207 1.199c.633.815 1.042 1.98 1.042 3.641 0 4.342-2.768 5.303-5.09 5.342l-.44.005-.207-.002c-2.314-.034-5.076-.995-5.076-5.392 0-4.381 2.723-5.323 5.011-5.342l.664.005c1.205.028 2.527.306 3.527 1.152l1.199-1.188a5.663 5.663 0 0 0-.717-.532c-1.54-.961-3.286-1.101-3.964-1.118-.17-.003-.372-.006-.566-.006H9.67c-.675.003-2.406.12-3.921 1.068-1.84 1.148-2.773 3.154-2.773 5.958 0 2.81.941 4.823 2.8 5.986 1.533.955 3.275 1.08 3.953 1.09l.244.002c.16 0 .317 0 .454-.003.67-.01 2.397-.143 3.93-1.09"
                />
            </svg>
        );
    }
};

export default IconDartboardLight;
