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

const IconTheaterFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M11.016 13.457a1.35 1.35 0 00.117-.274c-.79.52-2.201 1.199-4.213 1.131.437.328 1.19.592 2.406.255.844-.235 1.412-.61 1.69-1.112zm.66-1.574a.427.427 0 01.306.291c.011.034.238.846-.233 1.692-.392.706-1.131 1.216-2.196 1.516-.481.134-.91.193-1.29.193-2.007 0-2.654-1.58-2.662-1.6a.424.424 0 01.059-.414.415.415 0 01.386-.16c3.449.451 5.21-1.378 5.227-1.397a.42.42 0 01.404-.12zm-6.282-.594c.131 0 .274-.008.411-.025.46-.05.894-.21.894-.21s.305-.162.034-.39c0 0-.286-.33-.762-.33-.278 0-.616.11-1.006.46-.414.37-.064.495.429.495zm1.594.558a5.16 5.16 0 01-1.087.257c-.177.02-.348.031-.507.031-.74 0-1.208-.24-1.387-.714-.078-.202-.19-.723.398-1.255.499-.448 1.025-.675 1.566-.675.6 0 1.09.297 1.353.571.263.247.392.572.358.902-.045.415-.336.706-.594.84l-.1.043zm1.991-2.05c-.199.35-.07.475.193.475.213 0 .516-.08.796-.196.437-.173.81-.456.81-.456s.249-.25-.099-.423c0 0-.26-.182-.61-.182-.328 0-.737.16-1.09.781zm.193 1.319c-.621 0-.902-.365-.991-.521-.143-.247-.247-.656.07-1.216.594-1.05 1.398-1.207 1.82-1.207.5 0 .88.201 1.034.294.437.238.558.596.588.792.084.51-.224.863-.319.958a1.13 1.13 0 01-.09.079 4.793 4.793 0 01-1.002.566c-.294.115-.723.255-1.11.255zm10.647 2.322c.13-.236.113-.504-.047-.745-.177-.303-.658-.76-1.493-.76-.252 0-.521.043-.798.127-.715.215-.74.68-.732.818.042.669.97.854 1.32.924.428.084.849.092.893.092h.009c.028 0 .053 0 .081-.002.339-.031.627-.202.767-.454zm-2.607 4.131a1.64 1.64 0 00.12-1.378c-.204-.563-.714-1.039-1.513-1.414-.958-.454-1.759-.48-2.372-.322a3.263 3.263 0 01-.84 1.294c2.8.21 3.846 1.74 3.888 1.8a.434.434 0 00.31.188.418.418 0 00.406-.168zm-7.765-1.19c2.812-.787 4-1.83 3.137-5.614-.53-2.319-1.395-4.036-1.902-4.904-.613 1.078-1.714 1.916-3.235 2.448-.824.286-2.661.386-4.443-.4.042 1.153.208 3.52.863 5.28 1.112 2.974 2.832 3.955 5.58 3.19zm4.188-5.896c-.098-.003-.171.014-.252.022.005.025.014.048.016.076.157.683.241 1.282.275 1.829.426.21.849.344.899.358a1.58 1.58 0 00.291.051c.34.022.65-.073.855-.255a.68.68 0 00.218-.667c-.061-.473-.554-1.308-2.061-1.403a2.141 2.141 0 00-.241-.011zm7.969-.972a.425.425 0 01.232.38c0 .107-.03 2.659-1.434 5.877-1.14 2.62-2.412 3.55-3.989 3.55-.79 0-1.655-.233-2.619-.606-1.269-.487-2.137-1.157-2.678-2.022-.437.187-.918.353-1.445.501a6.922 6.922 0 01-1.868.28c-2.171 0-3.723-1.316-4.72-3.986-.95-2.549-.933-6.123-.933-6.274a.428.428 0 01.21-.364.412.412 0 01.417 0c1.79 1.033 3.732.89 4.393.66 1.117-.389 2.554-1.17 3.05-2.669a.418.418 0 01.737-.115c.05.068.95 1.32 1.74 3.471a22.55 22.55 0 01.963-1.426.41.41 0 01.437-.154.42.42 0 01.314.345c.173 1.137 1.787 2.563 2.747 2.933.992.38 2.936.476 4.003-.34a.422.422 0 01.443-.041z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconTheaterFilled;