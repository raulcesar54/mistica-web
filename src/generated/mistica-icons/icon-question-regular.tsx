/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant, useTheme} from '../..';

type Props = {
    color?: string;
    size?: number;
};

const IconQuestionRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M12.405 20.626c1.93-.037 8.227-.76 8.227-8.608 0-7.846-6.328-8.608-8.266-8.656a28.489 28.489 0 00-.857-.008c-1.914.02-8.155.686-8.155 8.61 0 7.933 6.295 8.64 8.225 8.667.277.006.58 0 .826-.005zM12.394 2.16c1.577.036 9.442.689 9.442 9.857 0 9.176-7.837 9.784-9.411 9.812-.174.003-.379.006-.58.006-.096 0-.19 0-.283-.003-1.572-.02-9.412-.602-9.412-9.868 0-9.267 7.787-9.799 9.35-9.813.291-.005.62 0 .894.009zm-.84 14.383c.529 0 .873.348.873.846 0 .558-.339.891-.843.891-.538 0-.874-.333-.874-.826v-.065c.003-.498.348-.846.843-.846zm2.644-10.058c.697.515 1.025 1.224 1.025 2.232 0 1.233-.51 1.966-1.678 3.345-1.339 1.549-1.392 1.61-1.392 3.056a.4.4 0 01-.4.4h-.443a.404.404 0 01-.395-.325 3.187 3.187 0 01-.056-.633c0-1.084.38-1.725 1.235-2.753l.162-.196c1.407-1.664 1.673-2.13 1.673-2.914 0-.557-.16-.921-.535-1.22-.216-.172-.594-.37-1.628-.37-.563 0-1.059.064-1.666.218a.403.403 0 01-.488-.289c-.003-.008-.003-.016-.005-.025l-.065-.342a.4.4 0 01.221-.437c.379-.179 1.306-.364 2.2-.364.94-.002 1.691.205 2.235.617z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconQuestionRegular;