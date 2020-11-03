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

const IconAddMoreQueryFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M11.011 12.966c.34 0 .616.272.616.605a.61.61 0 01-.616.605H8.636v2.342a.61.61 0 01-.616.605.612.612 0 01-.617-.605v-2.342h-2.37a.612.612 0 01-.616-.605.61.61 0 01.617-.605h2.37v-2.308a.61.61 0 01.616-.605c.339 0 .616.272.616.605v2.308h2.375zm-.714-7.621c-1.185-.35-1.905-.824-2.098-1.373 0-.008 0-.008-.009-.017.191-.546.91-1.03 2.087-1.38 1.25-.368 2.9-.575 4.65-.575 1.75 0 3.4.207 4.642.574 1.24.367 1.94.852 2.098 1.426 0 0-.009.008-.009.017-.21.53-.921.986-2.078 1.328-1.25.366-2.89.574-4.642.574-1.75 0-3.392-.208-4.641-.574zm2.37 7.039a4.766 4.766 0 00-.49-1.384 4.24 4.24 0 00-.236-.381c-.008-.011-.017-.025-.028-.036a3.473 3.473 0 00-.258-.32l-.064-.067a3.137 3.137 0 00-.28-.263l-.1-.084a3.474 3.474 0 00-.306-.213 2.383 2.383 0 00-.14-.09 3.704 3.704 0 00-.334-.168c-.058-.028-.117-.059-.179-.084-.118-.048-.246-.087-.375-.129-.07-.022-.138-.047-.213-.067a5.204 5.204 0 00-.454-.09c-.073-.01-.14-.03-.216-.039a6.915 6.915 0 00-.753-.059l-.107-.002c-.168 0-.42-.003-.42-.003-1.664.014-4.456.638-4.456 4.67 0 1.394.44 4.65 4.507 4.705h.17c.07 0 .135 0 .2-.003.044 0 .095 0 .137-.002a5.972 5.972 0 00.843-.073c.143-.02.28-.045.412-.076.061-.011.123-.028.184-.042a4.36 4.36 0 00.41-.126c.033-.011.07-.022.1-.034.152-.058.292-.123.426-.196.056-.028.107-.061.16-.092.078-.048.157-.095.23-.146.053-.036.106-.075.16-.115.066-.05.128-.106.19-.16.044-.039.092-.078.131-.117a3.74 3.74 0 00.62-.812c.545-.953.65-2.025.65-2.684 0-.098-.004-.207-.01-.322-.002-.028-.002-.062-.005-.09a5.39 5.39 0 00-.025-.285c-.003-.037-.009-.07-.014-.11a7.475 7.475 0 00-.067-.411zm2.271-1.2c-.45 0-.89-.016-1.322-.044.101.277.182.585.247.91.353.02.711.031 1.075.031 1.84 0 3.583-.215 4.905-.61.748-.216 1.387-.521 1.868-.888v3.98c-.226.42-.901.978-2.134 1.345-1.24.367-2.89.574-4.641.574-.507 0-.998-.02-1.474-.056a4.993 4.993 0 01-.484.854c.63.059 1.283.098 1.96.098 1.84 0 3.583-.216 4.905-.608.748-.215 1.387-.53 1.868-.899v3.544c0 .7-.72 1.274-2.142 1.694-1.25.367-2.9.574-4.642.574-1.742 0-3.392-.204-4.65-.574-1.372-.406-2.084-.958-2.134-1.624l-.21.002h-.188c-1.204-.016-5.72-.445-5.72-5.918 0-5.465 4.474-5.872 5.678-5.88h.12c.104 0 .208.003.309.003V5.308c.456.361 1.086.667 1.896.9 1.33.394 3.073.61 4.905.61 1.832 0 3.574-.216 4.905-.61.792-.233 1.411-.522 1.868-.88v3.944c-.227.42-.902.977-2.135 1.344-1.232.37-2.882.569-4.633.569z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconAddMoreQueryFilled;