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

const IconFileMp4Filled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M15.51 2c.232 0 .448.087.613.246l5.297 5.127a.848.848 0 01.219.386c.03.073.047.154.047.238v12.305c0 .751-.644 1.384-1.409 1.384H8.095c-.75 0-1.409-.647-1.409-1.384l.034-2.773H4.423A2.427 2.427 0 012 15.106v-4.092a2.426 2.426 0 012.42-2.426h2.266V3.384C6.686 2.658 7.36 2 8.096 2h7.414zm-1.244 7.801H4.42c-.667 0-1.207.54-1.207 1.21v4.095c0 .667.54 1.21 1.207 1.21h9.846a1.21 1.21 0 001.207-1.21v-4.095c0-.666-.54-1.21-1.207-1.21zm-9.423 1.426l1.163 2.056 1.201-2.056h.647v3.68h-.77v-2.12l-.765 1.28h-.647l-.787-1.302v2.143h-.703v-3.681h.661zm5.076 0c.577 0 .94.081 1.179.302.199.182.297.468.297.86 0 .392-.092.69-.275.894-.215.24-.549.356-1.033.356h-.591v1.269h-.84v-3.681h1.263zm3.501-.003l-.829 2.26h.852v-.876h.77v.877h.431v.577h-.431v.846h-.77v-.846h-1.62a.778.778 0 01-.022-.188c0-.151.028-.322.112-.56l.765-2.09h.742zm-3.535.61h-.392v1.174h.412c.269 0 .38-.036.49-.14.098-.098.146-.252.146-.467 0-.2-.042-.345-.14-.437-.101-.093-.258-.13-.516-.13zm5.96-8.165v1.765c0 .658.217 1.213.626 1.608.414.4.997.61 1.689.61h1.8L15.847 3.67z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFileMp4Filled;