/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconElectrocardiogramFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M17.46 2C19.715 2 22 3.575 22 6.58l-.003.196L22 7c0 2.292-1.276 5.195-3.892 8.86l-2.654 3.436v.039a73.347 73.347 0 01-2.947 3.435c-.107.152-.325.23-.507.23l-.109-.01a.723.723 0 01-.398-.22C8.4 19.296 2 12.077 2 7c0-.094.002-.185.005-.276L2 6.544C2 3.428 4.25 2 6.357 2l.128.001L6.58 2c2.072 0 3.566.875 5.419 3.284C13.853 2.801 15.203 2 17.237 2h.083zm-5.455 4.965c-.289 0-.545.27-.545.572v4.008H7.642c-.288 0-.544.268-.544.571 0 .303.256.572.544.572h3.818v4.008c0 .303.256.571.545.571.288 0 .544-.268.544-.571v-4.008h3.818c.288 0 .545-.269.545-.572 0-.303-.257-.571-.545-.571h-3.818V7.537c0-.303-.256-.572-.544-.572zm-.007.769c.215 0 .356.142.356.357v3.577h3.57c.215 0 .357.142.357.357s-.142.357-.356.357h-3.57v3.577c0 .215-.142.357-.357.357s-.357-.146-.357-.357v-3.577h-3.57c-.215 0-.357-.142-.357-.357s.142-.357.357-.357h3.57V8.091c0-.215.142-.357.357-.357z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M7.95 6.265L6.098 12.32H4.322c-.515-1.126-.919-2.238-1.174-3.33-.51-2.163-.09-3.962 1.177-5.062.737-.64 1.74-1.023 2.823-1.079.099-.005.194-.008.289-.008 1.053 0 2.129.294 3.137.86.373.21.76.434 1.18.686a.284.284 0 00.271.003c.42-.252.807-.476 1.182-.69 1.006-.562 2.084-.86 3.135-.86.098 0 .193.004.291.01 1.084.055 2.087.439 2.824 1.078 1.268 1.1 1.686 2.899 1.176 5.061-.263 1.12-.68 2.263-1.218 3.42h-3.241l-1.247-3.602a.612.612 0 00-.577-.414h-.017a.614.614 0 00-.571.445l-1.036 3.569h-1.023a.61.61 0 00-.585.44l-.423 1.4-1.563-7.922a.611.611 0 00-.569-.495.603.603 0 00-.613.434zm7.212 6.969a.612.612 0 00.578.414h3.058c-.271.502-.56.992-.862 1.471-1.048 1.647-1.886 2.711-3.306 4.196a.43.43 0 01-.033.037c-.14.145-.628.644-1.042.946a3.1 3.1 0 01-1.16.53 2.15 2.15 0 01-.364.053h-.017c-.036.003-.073.003-.11.003h-.033c-.039 0-.073-.003-.106-.003h-.017a2.004 2.004 0 01-.364-.053 3.1 3.1 0 01-1.16-.53c-.414-.3-.902-.8-1.042-.946-1.442-1.505-2.286-2.575-3.339-4.233a24.103 24.103 0 01-.916-1.557H6.55c.269 0 .507-.18.585-.437l1.272-4.163 1.566 7.941a.61.61 0 001.185.059l1-3.316h1.025a.612.612 0 00.588-.446l.628-2.165.764 2.199zM2.613 12.32h1.71l.607 1.24H2.613A.617.617 0 012 12.94c0-.342.275-.62.613-.62zm18.46.087c.339 0 .613.277.613.619a.613.613 0 01-.613.619h-2.275l.617-1.241c0 .003 1.658.003 1.658.003z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconElectrocardiogramFilled;
