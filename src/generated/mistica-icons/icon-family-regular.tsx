'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconFamilyRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12.688 10.14c.746-.549 1.907-.865 3.197-.865 2.067 0 3.682.87 4.107 2.215.096.307.38.503.682.503a.734.734 0 0 0 .681-.954c-.407-1.29-1.482-2.276-2.932-2.797a3.658 3.658 0 0 0 1.089-2.607C19.512 3.63 17.912 2 15.94 2c-1.971 0-3.572 1.629-3.572 3.635 0 .996.398 1.9 1.034 2.555a5.52 5.52 0 0 0-1.55.768.732.732 0 0 0-.156 1.015.69.69 0 0 0 .992.168Zm3.243-6.683c1.18 0 2.145.977 2.145 2.183 0 1.205-.96 2.183-2.145 2.183s-2.145-.978-2.145-2.183c0-1.206.965-2.183 2.145-2.183Z"
                />
                <path
                    fill={fillColor}
                    d="M11.815 12.547a.732.732 0 0 0-.156-1.015 5.355 5.355 0 0 0-1.445-.754 3.664 3.664 0 0 0 1.07-2.592c0-2.006-1.6-3.635-3.572-3.635-1.97 0-3.572 1.629-3.572 3.635 0 1.01.407 1.922 1.061 2.583C3.258 11.439 2 12.905 2 14.739v6.107c0 .4.32.726.713.726a.72.72 0 0 0 .714-.726v-6.107c0-1.69 1.793-2.918 4.258-2.918 1.253 0 2.364.316 3.133.884.32.238.764.168.997-.158ZM7.712 6.003c1.18 0 2.145.977 2.145 2.183 0 1.205-.96 2.183-2.145 2.183-1.18 0-2.145-.978-2.145-2.183 0-1.206.965-2.183 2.145-2.183Z"
                />
                <path
                    fill={fillColor}
                    d="M14.504 16.005c0 .638-.22 1.229-.585 1.694 1.033.489 1.655 1.369 1.655 2.486v1.089c0 .4-.32.726-.713.726a.72.72 0 0 1-.714-.726v-1.09c0-1.07-1.24-1.451-2.305-1.451-1.08 0-2.341.377-2.341 1.452v1.089c0 .4-.32.726-.714.726a.72.72 0 0 1-.713-.726v-1.09c0-1.112.622-1.991 1.66-2.48a2.718 2.718 0 0 1-.59-1.699c0-1.503 1.203-2.727 2.68-2.727s2.68 1.224 2.68 2.727ZM13.072 16c0-.698-.557-1.27-1.248-1.27-.69 0-1.249.572-1.249 1.27 0 .699.558 1.271 1.249 1.271.686 0 1.248-.572 1.248-1.27ZM20.157 16.084c.375-.47.599-1.066.599-1.717 0-1.504-1.203-2.728-2.68-2.728s-2.68 1.224-2.68 2.728c0 .675.242 1.289.64 1.764a4.02 4.02 0 0 0-.343.2l-.274.19a.734.734 0 0 0-.179 1.01c.224.331.673.41.993.182l.256-.181a2.907 2.907 0 0 1 1.582-.442c1.404 0 2.502.716 2.502 1.638 0 .4.32.726.713.726a.72.72 0 0 0 .714-.726c.01-1.15-.718-2.113-1.843-2.644Zm-3.33-1.717c0-.703.563-1.27 1.249-1.27.686 0 1.248.572 1.248 1.27 0 .698-.558 1.27-1.248 1.27s-1.249-.567-1.249-1.27Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M9.605 4.31c.123.506.356 1.024.692 1.542.26.401.479.67.83 1.028.041.043.192.191.321.283.152.11.328.185.493.222l.27.03.246-.028c.179-.039.355-.114.51-.224.128-.09.277-.238.33-.29.35-.36.563-.626.82-1.02a5.11 5.11 0 0 0 .69-1.544c.17-.711 0-1.356-.476-1.759a1.749 1.749 0 0 0-1.031-.392c-.364-.02-.75.067-1.095.252a2.097 2.097 0 0 0-1.09-.252c-.39.02-.756.16-1.034.392-.473.403-.647 1.048-.476 1.76m1.297-.306c-.022-.104-.07-.353.05-.451a.381.381 0 0 1 .23-.076h.031a.82.82 0 0 1 .378.104c.079.042.157.087.266.151l.18.09.38-.009.157-.092.247-.14a.736.736 0 0 1 .409-.104c.092.006.18.034.23.079.12.098.072.347.05.45-.09.362-.26.74-.515 1.135-.208.32-.367.518-.662.818l-.012.012c-.025.026-.07.07-.114.108-.053-.042-.109-.1-.126-.12a4.76 4.76 0 0 1-.666-.82c-.252-.396-.426-.774-.513-1.135m-5 4.88c.235-.228.633-.342 1.174-.342.546 0 .94.114 1.179.341.244.233.367.633.367 1.194 0 .557-.123.957-.364 1.187-.235.224-.633.34-1.18.34-.546 0-.943-.116-1.176-.337-.24-.23-.361-.633-.361-1.19 0-.56.12-.961.361-1.194m-.851 3.263c.467.453 1.15.68 2.028.68.874 0 1.557-.23 2.03-.68.493-.471.743-1.168.743-2.07 0-.905-.25-1.603-.743-2.073-.473-.454-1.157-.684-2.03-.684-.877 0-1.56.23-2.031.684-.49.47-.737 1.168-.737 2.073 0 .902.25 1.599.74 2.07m10.694-3.264c.236-.227.633-.341 1.174-.341.546 0 .941.114 1.18.341.243.233.366.633.366 1.194 0 .557-.123.957-.364 1.187-.235.224-.633.34-1.18.34-.546 0-.943-.116-1.176-.337-.24-.23-.361-.633-.361-1.19 0-.56.12-.961.361-1.194m-1.594 1.194c0 .902.25 1.599.74 2.07.47.45 1.154.68 2.028.68.874 0 1.557-.23 2.03-.68.494-.471.743-1.168.743-2.07 0-.905-.25-1.603-.742-2.073-.474-.454-1.157-.684-2.031-.684-.877 0-1.56.23-2.03.684-.491.47-.738 1.168-.738 2.073m-1.652 2.84c-.054.05-.208.104-.48.104-.268 0-.422-.054-.473-.104-.053-.05-.106-.199-.106-.473 0-.275.056-.426.11-.477.05-.05.2-.103.47-.103.269 0 .423.053.476.106.053.05.11.202.11.476 0 .272-.057.42-.107.47m.851-1.826c-.31-.297-.759-.449-1.33-.449-.572 0-1.017.152-1.328.449-.32.308-.482.761-.482 1.355 0 .591.16 1.045.482 1.353.31.294.756.446 1.328.446.571 0 1.02-.152 1.33-.446.322-.308.488-.762.488-1.353 0-.59-.166-1.047-.488-1.355m7.266 9.529h-5.372v-3.322c0-.574-.18-1.062-.521-1.415a1.807 1.807 0 0 0-.314-.255c.283-.084.577-.112.824-.112h3.378c.476 0 1.134.093 1.549.524.375.387.456.927.456 1.314zm-6.605-3.325v3.325h-.002v.014H10.03v-3.339c0-.176.03-.417.176-.569.087-.092.238-.14.418-.173l.038-.007c.079-.015.156-.03.25-.03h2.21c.073 0 .135.012.197.023.02.004.038.008.058.01.194.032.362.082.454.18.148.152.18.392.18.566m-4.689-1.412c-.341.35-.518.84-.515 1.412v3.325H3.392v-3.266c0-.387.079-.93.451-1.317.415-.428 1.07-.52 1.546-.52h3.379c.255 0 .56.03.854.123-.11.072-.21.15-.3.243m-6.846 5.958h12.608v.003h6.445c.174 0 .317-.14.317-.314v-4.173c0-.877-.277-1.622-.801-2.163-.566-.588-1.409-.899-2.437-.899H15.23c-1.025 0-1.869.311-2.434.9-.016.016-.03.035-.043.055-.012.016-.023.033-.036.048h-1.431l-.032-.042c-.015-.022-.03-.043-.05-.062-.565-.588-1.408-.899-2.436-.899H5.389c-1.025 0-1.868.311-2.434.9-.518.537-.792 1.282-.792 2.159v4.174c0 .173.14.313.313.313"
                />
            </svg>
        );
    }
};

export default IconFamilyRegular;
