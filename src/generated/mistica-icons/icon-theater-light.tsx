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

const IconTheaterLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M11.019 13.456c.053-.093.09-.185.12-.275-.79.521-2.188 1.205-4.213 1.132.437.33 1.19.594 2.406.255.84-.235 1.41-.61 1.687-1.112zm.66-1.574a.427.427 0 01.306.29c.011.034.238.847-.232 1.693-.392.706-1.132 1.216-2.196 1.512-.482.135-.91.194-1.292.194-2.006 0-2.653-1.58-2.661-1.6a.424.424 0 01.059-.414.412.412 0 01.386-.16c3.446.454 5.21-1.381 5.228-1.398a.43.43 0 01.403-.117zm-6.285-.594c.132 0 .274-.009.414-.026.46-.053.891-.21.891-.21s.306-.162.034-.389c0 0-.286-.33-.765-.33-.277 0-.616.109-1.003.459-.409.37-.059.496.429.496zm1.597.557c-.054.02-.544.196-1.087.258-.177.02-.348.03-.507.03-.74 0-1.205-.24-1.387-.716-.076-.2-.19-.723.398-1.255.496-.446 1.022-.673 1.566-.673.6 0 1.09.297 1.353.572.263.246.395.571.358.899-.045.415-.336.706-.59.84l-.104.045zm1.991-2.05c-.199.35-.067.476.194.476.212 0 .515-.084.798-.196.437-.174.81-.457.81-.457s.249-.25-.099-.423c0 0-.26-.182-.613-.182-.328 0-.74.163-1.09.782zm.194 1.319c-.622 0-.902-.364-.992-.521-.143-.247-.247-.658.07-1.216.594-1.05 1.395-1.207 1.82-1.207.5 0 .88.202 1.034.294.44.238.558.597.589.793.084.51-.222.863-.32.958a1.197 1.197 0 01-.09.078 4.793 4.793 0 01-1.002.566c-.294.115-.723.255-1.11.255zm4.053 4.112c1.608.095 2.7.72 3.336 1.236-.1-.426-.431-.933-1.35-1.286-.941-.364-1.58-.205-1.986.05zm6.41.202c.887-2.04 1.198-3.818 1.305-4.782-1.353.58-3.104.412-4.082.034-.96-.37-2.372-1.513-2.992-2.743-.22.328-.501.762-.792 1.255-.009.014-.023.023-.034.037.104.336.199.692.289 1.061.095-.025.187-.053.308-.061.087-.006.168-.011.25-.011 1.526 0 2.078 1.042 2.167 1.65a1.06 1.06 0 01-.179.88 1.05 1.05 0 01-.849.4c-.115 0-.196-.014-.196-.014l-.098-.023a5.567 5.567 0 01-1.034-.442c-.005-.003-.005-.009-.01-.012a5.15 5.15 0 01-.169 1.547c.54-.135 1.202-.118 1.992.185.863.33 1.445.829 1.731 1.482.375.86.07 1.658.059 1.691a.418.418 0 01-.34.264c-.016.003-.033.003-.05.003a.417.417 0 01-.341-.177c-.05-.073-1.33-1.793-4.272-1.574-.023.003-.042-.011-.065-.014a4.334 4.334 0 01-.364.244c.448.675 1.165 1.21 2.224 1.616 2.586.994 4.073.871 5.541-2.496zm-10.189.95c2.813-.788 4-1.83 3.137-5.611-.529-2.32-1.395-4.037-1.902-4.905C10.072 6.94 8.971 7.778 7.45 8.31c-.82.288-2.658.39-4.443-.4.042 1.153.208 3.52.863 5.28 1.112 2.972 2.832 3.952 5.58 3.188zm4.062-5.275c.03.157.056.31.078.46.143.125.33.254.533.369.409.232.857.37.857.37a.5.5 0 00.056.003c.095 0 .266-.031.201-.283 0 0-.095-.958-1.341-.958a2.2 2.2 0 00-.188.008.775.775 0 00-.196.03zm8.095-1.594a.425.425 0 01.233.38c0 .107-.03 2.66-1.434 5.878-1.14 2.619-2.412 3.549-3.99 3.549-.79 0-1.655-.232-2.618-.605-1.27-.487-2.138-1.157-2.678-2.023-.437.188-.916.353-1.446.502a6.926 6.926 0 01-1.871.28c-2.171 0-3.723-1.317-4.72-3.986-.953-2.55-.933-6.12-.933-6.272a.428.428 0 01.21-.364.431.431 0 01.42 0c1.79 1.033 3.732.89 4.39.66 1.118-.389 2.555-1.17 3.05-2.669a.422.422 0 01.334-.283.41.41 0 01.403.168c.05.068.95 1.32 1.74 3.471a22.97 22.97 0 01.963-1.426.423.423 0 01.437-.157c.163.042.289.18.314.345.174 1.137 1.787 2.563 2.748 2.933.995.38 2.939.476 4.003-.34a.428.428 0 01.445-.041zm-2.686 3.602s-.221-.515-.9-.515c-.17 0-.369.03-.601.112-.575.202-.012.454.557.585.398.09.801.096.801.096s.3-.031.143-.278zm-1.779-1.199c.306-.106.6-.16.877-.16.919 0 1.448.575 1.642.959.173.305.193.647.05.944-.151.32-.468.532-.846.574-.03.003-.059.006-.09.006h-.008c-.05 0-.51-.009-.98-.118-.384-.09-1.404-.322-1.449-1.168-.008-.177.023-.765.804-1.037z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconTheaterLight;