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

const IconShieldAntivirusFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M20.905 5.148c0 .27.017 6.608-.448 9.35-.611 3.552-7.163 6.774-7.905 7.13a.6.6 0 01-.518 0c-.745-.356-7.289-3.578-7.9-7.13-.473-2.742-.456-9.08-.456-9.35a.61.61 0 01.756-.593c1.608.26 2.454-.317 3.53-1.037C9.022 2.804 10.224 2 12.289 2h.005c2.065.003 3.266.807 4.325 1.518 1.076.72 1.927 1.292 3.552 1.034a.645.645 0 01.504.137c.14.112.221.28.23.46zm-8.614 9.653c-1.563 0-1.988-.583-1.988-2.711 0-1.328.184-2.042.624-2.381.286-.222.734-.33 1.367-.33.625 0 1.07.106 1.359.324.442.339.63 1.053.63 2.387-.003 2.128-.429 2.711-1.992 2.711zm.003-7.042c1.333 0 1.333.275 1.333.656l-.002.02a4.106 4.106 0 00-1.336-.2c-.516 0-.953.07-1.328.196l-.003-.016c.003-.381.003-.656 1.336-.656zm2.868.003l.042.779-.462.142c.011-.09.023-.176.023-.271 0-1.04-.577-1.47-1.208-1.659a.568.568 0 00-.061-.72.561.561 0 00-.793-.008l-.008.009-.395.4c-.009.009-.011.02-.023.031-.008-.011-.01-.022-.02-.03l-.397-.401a.561.561 0 00-.793-.009l-.008.009a.565.565 0 00-.053.728c-.617.193-1.174.625-1.174 1.647 0 .098.011.19.022.28l-.495-.154.042-.779a.572.572 0 00-.535-.602c-.309.006-.58.227-.597.543l-.065 1.227a.575.575 0 00.401.58l.908.28c-.171.41-.26.869-.303 1.336h-.68a.571.571 0 00-.57.572v.815c0 .317.256.574.57.574a.57.57 0 00.565-.574v-.24h.079c.005.579.053 1.142.182 1.646l-.751.233a.574.574 0 00-.4.577l.064 1.227a.571.571 0 00.566.543h.03a.57.57 0 00.536-.602l-.042-.779.484-.148c.457.599 1.21.98 2.451.98 1.235 0 1.989-.378 2.448-.975l.465.143-.042.779a.572.572 0 00.535.602h.031a.571.571 0 00.566-.543l.064-1.227a.57.57 0 00-.4-.577l-.731-.224c.131-.505.179-1.07.185-1.656h.078v.241c0 .317.255.574.566.574a.571.571 0 00.568-.571v-.818a.571.571 0 00-.565-.574h-.687c-.044-.47-.131-.933-.305-1.342l.888-.275a.569.569 0 00.4-.58l-.064-1.226c-.017-.317-.277-.54-.597-.544a.583.583 0 00-.535.61zm-2.901 2.45a.567.567 0 00-.566.572v3.054c0 .316.252.571.566.571a.57.57 0 00.565-.571v-3.054a.573.573 0 00-.565-.571z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconShieldAntivirusFilled;