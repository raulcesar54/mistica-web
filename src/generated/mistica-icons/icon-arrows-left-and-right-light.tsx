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

const IconArrowsLeftAndRightLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M6.549 18.685c.2.209.484.315.784.315.172 0 .356-.033.532-.115.444-.192.728-.581.728-1.02V16.06h3.425a.361.361 0 0 0 .356-.365c0-.2-.16-.364-.356-.364h-4.12v2.543c0 .156-.149.283-.285.34-.172.074-.408.09-.536-.04l-4.065-4.31 4.053-4.35c.132-.131.368-.123.536-.049.14.057.284.184.284.34v2.593h7.526v1.806c0 .439.276.828.728 1.02.48.197.996.115 1.32-.217L22 10.193 17.451 5.32c-.324-.332-.844-.41-1.32-.21-.444.193-.728.582-.728 1.02v1.864H9.485a.361.361 0 0 0-.356.365c0 .2.16.365.357.365h6.633V6.13c0-.156.156-.283.292-.34.16-.074.404-.082.524.04L21 10.19l-4.057 4.301c-.132.131-.376.115-.536.05-.148-.058-.292-.185-.292-.34v-2.536H8.589V9.8c0-.438-.276-.828-.728-1.02-.48-.197-.996-.115-1.32.217L2 13.863l4.549 4.822Z"
                />
                <path
                    fill={fillColor}
                    d="M14.15 16.432c.398 0 .72-.33.72-.738a.729.729 0 0 0-.72-.737c-.397 0-.72.33-.72.737 0 .408.323.738.72.738Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M16.631 13.603c.073.034.149.05.224.05.115 0 .23-.042.325-.117l.004-.004.006-.005.005-.004.005-.004 4.473-4.415a.488.488 0 0 0 .168-.429.497.497 0 0 0-.168-.31l-4.47-4.429a.515.515 0 0 0-.569-.084.489.489 0 0 0-.283.44l-.02 2.247-3.392.002c-.53 0-.96.432-.96.961v2.46c0 .53.43.96.96.96l3.39-.005.02 2.244c0 .19.106.358.282.442Zm.258-2.767a.503.503 0 0 0-.502-.485c-.002 0-.005 0-.008-.003l-3.44.006a.4.4 0 0 1-.4-.4v-2.46a.4.4 0 0 1 .4-.4l3.448-.004a.503.503 0 0 0 .502-.484V6.6l.017-2.176 4.341 4.308-4.341 4.286-.017-2.177v-.005Zm-9.756 9.367a.51.51 0 0 1-.342-.135l-4.474-4.437a.498.498 0 0 1-.168-.31.488.488 0 0 1 .168-.43l4.474-4.414a.122.122 0 0 1 .01-.008.515.515 0 0 1 .559-.073.485.485 0 0 1 .282.442l.02 2.244 3.39-.006c.529 0 .96.432.96.961v2.46c0 .53-.431.96-.96.96l-3.393.003-.02 2.25c0 .187-.109.355-.282.44a.489.489 0 0 1-.224.053Zm-.05-.633.016-2.177v-.006a.501.501 0 0 1 .51-.484l3.44-.003a.4.4 0 0 0 .4-.4v-2.46a.4.4 0 0 0-.4-.4l-3.44.005a.501.501 0 0 1-.51-.484v-.006l-.017-2.177-4.342 4.283 4.342 4.309Z"
                />
            </svg>
        );
    }
};

export default IconArrowsLeftAndRightLight;
