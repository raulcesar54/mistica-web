/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconAccesibilityRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M21.783 20.72l-3.856-4.05c1.716-1.163 3.072-2.851 3.964-4.875a.862.862 0 000-.601c-1.748-4.086-5.608-6.75-9.893-6.75a10.44 10.44 0 00-4.644 1.089l-4.14-4.31a.67.67 0 00-1.001 0 .753.753 0 000 1.05L8.25 8.612a4.995 4.995 0 00-.892 2.89c0 2.7 2.072 4.875 4.644 4.875a4.466 4.466 0 002.753-.936l.82.86a8.867 8.867 0 01-3.573.753c-3.608 0-6.893-2.176-8.465-5.548a8.842 8.842 0 012.108-2.923.753.753 0 00.036-1.05.671.671 0 00-1-.038C3.573 8.506 2.717 9.783 2.11 11.207a.862.862 0 000 .6c1.744 4.078 5.64 6.74 9.89 6.74 1.643 0 3.216-.373 4.644-1.087l4.144 4.351c.144.113.32.189.5.189s.356-.076.5-.227a.755.755 0 00-.004-1.054zm-9.785-5.847c-1.784 0-3.216-1.5-3.216-3.377 0-.676.18-1.276.5-1.801l4.428 4.649a2.972 2.972 0 01-1.712.529zm2.717-1.575l-4.433-4.653a3.022 3.022 0 011.716-.525c1.784 0 3.217 1.499 3.217 3.376 0 .676-.18 1.277-.5 1.802zm1.036 1.088a4.995 4.995 0 00.892-2.89c0-2.7-2.072-4.876-4.645-4.876a4.466 4.466 0 00-2.752.937l-.82-.861c1.144-.487 2.32-.752 3.572-.752 3.609 0 6.893 2.176 8.465 5.548a9.612 9.612 0 01-3.536 4.087l-1.176-1.193z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M16.619 15.83c1.65-.796 3.286-2 4.894-3.609a.562.562 0 000-.792C18.38 8.29 15.137 6.703 11.87 6.703c-1.235 0-2.468.227-3.695.68l-5.2-5.197a.558.558 0 00-.79 0 .561.561 0 000 .793L7.067 7.86c-1.652.795-3.288 2-4.896 3.608a.562.562 0 000 .793c3.134 3.134 6.378 4.722 9.644 4.722 1.235 0 2.468-.227 3.695-.68l5.199 5.198a.558.558 0 00.79 0 .561.561 0 000-.792l-4.88-4.88zm-4.748-8.006c2.82 0 5.658 1.344 8.446 4-1.505 1.434-3.023 2.49-4.541 3.162l-.924-.924c.333-.569.504-1.278.504-2.118 0-2.336-1.334-3.675-3.659-3.675-.84 0-1.551.174-2.123.513l-.515-.513a9.282 9.282 0 012.812-.445zm-.053 2.63c-.18 0-.347.025-.499.073l-1.123-1.124c.409-.196.91-.294 1.501-.294.897 0 1.592.227 2.065.678.499.474.75 1.199.75 2.154 0 .586-.095 1.087-.285 1.496l-1.09-1.09a1.62 1.62 0 00.073-.498c0-.846-.546-1.395-1.392-1.395zm-.003 5.409c-2.82 0-5.658-1.345-8.445-4 1.504-1.432 3.02-2.488 4.54-3.16l2.505 2.504-.003.003.409.406c.154.154.423.429.683.695.213.218.418.426.54.549l.401.4.012-.01 2.17 2.17a9.393 9.393 0 01-2.812.443z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconAccesibilityRegular;
