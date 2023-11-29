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

const IconConferenceCallFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.528 3.853v16.294c0 1.019-.79 1.853-1.766 1.853H4.245c-.97 0-1.765-.83-1.765-1.853V3.853C2.48 2.834 3.27 2 4.245 2h15.522c.97.005 1.76.834 1.76 1.853ZM7.419 4.967c-.677 0-1.232.578-1.232 1.294 0 .715.555 1.293 1.232 1.293.677 0 1.233-.578 1.233-1.293 0-.711-.551-1.294-1.233-1.294Zm8.04 10.971c0-.658.511-1.194 1.139-1.194.627 0 1.137.536 1.137 1.194 0 .66-.51 1.195-1.137 1.195-.628 0-1.138-.536-1.138-1.195Zm-8.04-1.346c-.682 0-1.232.583-1.232 1.299s.555 1.294 1.232 1.294c.682 0 1.233-.583 1.233-1.294.004-.716-.551-1.299-1.233-1.299ZM17.83 6.261c0 .71-.555 1.293-1.237 1.293s-1.237-.578-1.232-1.293c0-.711.55-1.294 1.232-1.294.682 0 1.237.578 1.237 1.294Zm-3.707 4.075a.537.537 0 0 0 .524-.492c.077-.702.858-1.176 1.941-1.176 1.088 0 1.87.474 1.942 1.176.031.303.298.526.587.488.289-.034.496-.308.465-.616-.086-.797-.578-1.432-1.332-1.801a2.471 2.471 0 0 0 .632-1.654c0-1.327-1.03-2.408-2.294-2.408s-2.293 1.08-2.293 2.408c0 .64.24 1.222.632 1.654-.754.37-1.246 1.004-1.332 1.8a.556.556 0 0 0 .528.621Zm-9.232-.004a.537.537 0 0 0 .587-.488c.077-.702.858-1.176 1.941-1.176 1.088 0 1.865.474 1.941 1.176a.538.538 0 0 0 .587.488c.29-.034.497-.308.465-.616-.085-.797-.578-1.432-1.332-1.801a2.472 2.472 0 0 0 .633-1.654c0-1.327-1.03-2.408-2.294-2.408s-2.293 1.08-2.293 2.408c0 .64.239 1.222.632 1.654-.75.37-1.246 1.004-1.332 1.8a.556.556 0 0 0 .465.617Zm4.194 7.208a2.472 2.472 0 0 0 .632-1.654c0-1.327-1.03-2.407-2.293-2.407-1.265 0-2.294 1.08-2.294 2.407 0 .64.24 1.223.632 1.654-.754.37-1.246 1.005-1.332 1.801a.556.556 0 0 0 .529.621.537.537 0 0 0 .523-.493c.077-.701.858-1.175 1.942-1.175 1.088 0 1.864.474 1.941 1.175a.538.538 0 0 0 .587.488c.289-.033.496-.312.465-.616-.086-.796-.578-1.431-1.332-1.8Zm10.501 1.801c-.09-.815-.605-1.464-1.386-1.83a2.35 2.35 0 0 0 .596-1.573c0-1.27-.984-2.308-2.198-2.308-1.215 0-2.2 1.034-2.2 2.308 0 .607.227 1.157.592 1.57-.79.364-1.305 1.013-1.395 1.828a.556.556 0 0 0 .528.621.537.537 0 0 0 .524-.493c.077-.701.858-1.175 1.941-1.175 1.088 0 1.87.474 1.942 1.175.031.304.298.527.587.489.293-.029.5-.308.47-.612Zm-.171-7.896h-6.88V4.223a.54.54 0 0 0-.529-.555.54.54 0 0 0-.528.555v7.218h-6.88a.54.54 0 0 0-.529.554.54.54 0 0 0 .528.555h6.876v7.218a.54.54 0 0 0 .528.554.54.54 0 0 0 .529-.554v-7.213h6.876a.544.544 0 0 0 .537-.555.54.54 0 0 0-.528-.555Z"
            />
        </svg>
    );
};

export default IconConferenceCallFilled;
