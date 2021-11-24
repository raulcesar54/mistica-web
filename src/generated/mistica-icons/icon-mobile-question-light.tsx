/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconMobileQuestionLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M7.675 14.956c.33 0 .55.218.55.529 0 .347-.213.557-.53.557-.336 0-.549-.21-.549-.52v-.037c0-.311.218-.53.53-.53zM9.266 8.97c.423.31.62.739.62 1.35 0 .742-.309 1.182-1.006 2.01-.793.917-.82.95-.82 1.802a.264.264 0 01-.267.266H7.53a.264.264 0 01-.26-.216 1.763 1.763 0 01-.034-.383c0-.656.23-1.04.742-1.659l.098-.117c.832-.986.989-1.258.989-1.717 0-.322-.093-.533-.308-.706-.124-.101-.345-.213-.953-.213-.333 0-.627.04-.983.129a.27.27 0 01-.325-.196l-.003-.012-.039-.204a.269.269 0 01.149-.291c.23-.11.787-.222 1.319-.222.563.003 1.017.13 1.344.379zm11.76 9.316V5.72c0-.944-.213-1.616-.664-2.067-.451-.451-1.124-.672-2.076-.672h-6.274c-.936 0-1.617.23-2.068.689-.45.46-.672 1.123-.672 2.05v.493c3.092.362 4.866 2.275 4.866 5.925S12.364 17.7 9.28 18.062v.583c.05.753.264 1.322.664 1.714.443.442 1.124.667 2.068.667h6.274c.944 0 1.625-.225 2.076-.667.45-.443.664-1.123.664-2.073zm-12.877-.978c3.479 0 5.168-1.691 5.168-5.17 0-3.48-1.69-5.171-5.168-5.171-3.48 0-5.168 1.692-5.168 5.17 0 3.48 1.689 5.171 5.168 5.171zm12.795-14.23c.608.609.902 1.477.902 2.642v12.566c0 1.182-.294 2.05-.91 2.658-.608.608-1.476.905-2.65.905h-6.274c-1.174 0-2.037-.297-2.65-.902-.54-.54-.835-1.28-.902-2.272v-.549c-.107 0-.205.009-.311.009-3.785-.006-5.989-1.91-5.989-5.997 0-4.079 2.204-5.992 5.989-5.992.106 0 .204.008.302.008V5.72c0-1.148.294-2.011.91-2.627.614-.63 1.485-.933 2.65-.933h6.275c1.182 0 2.05.303 2.658.919zm-6.58 15.827c-.184-.188-.277-.448-.277-.776 0-.67.398-1.067 1.065-1.067.666 0 1.064.4 1.064 1.067 0 .328-.092.588-.277.776-.188.193-.46.294-.787.294-.328 0-.6-.103-.788-.294z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconMobileQuestionLight;
