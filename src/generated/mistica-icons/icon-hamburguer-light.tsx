/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconHamburguerLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M20.834 8.12c-.115.115-.294.18-.54.18h-7.06v-.012c-.246 0-.428-.056-.537-.168-.118-.118-.177-.308-.177-.574 0-.267.06-.457.177-.575.112-.114.291-.17.538-.17h7.053c.246 0 .426.056.54.17.118.118.177.308.177.575.003.266-.053.456-.17.574zm-.857 5.37a942.8 942.8 0 00-.216 4.675c-.02 2.227-.52 2.717-1.38 2.806-.015 0-.029.006-.043.009h-.042a3.262 3.262 0 01-.44 0h-2.294a2.557 2.557 0 01-.602-.02c.241-.364.376-.82.516-1.328l.061-.218c.356-.1.664-.26.908-.504.426-.423.641-1.034.641-1.81s-.215-1.384-.641-1.81c-.031-.03-.07-.053-.104-.08.132.033.263.055.398.058h.033c.519 0 1.012-.243 1.474-.722.47-.493.706-1.017.695-1.569-.012-.527-.244-1.034-.698-1.504-.454-.47-.941-.712-1.448-.72-.544.017-1.037.238-1.507.725a2.676 2.676 0 00-.49.695 2.943 2.943 0 00-1.373-.97c-.03-.867-.059-1.599-.075-2.044h6.829c-.04.804-.12 2.571-.202 4.33zm-5.768 7.086c-.162.196-.4.303-.773.359-.044.008-.08.017-.131.022l-.958.014c-.241.017-.476.02-.779 0H7.646a35.94 35.94 0 01-1.145.017c-1.28 0-1.546-.35-1.9-1.487h10.043c-.143.512-.244.851-.435 1.075zm1.208-7.549c-.006-.305.148-.621.454-.94.302-.315.602-.474.896-.474h.011c.286.005.583.162.877.468.297.308.45.613.454.913.005.308-.146.624-.451.944-.3.31-.603.468-.891.468h-.017c-.283-.006-.58-.163-.877-.471-.297-.308-.448-.61-.456-.908zM4.18 18.641c-.347-.042-.621-.157-.817-.353-.255-.255-.384-.656-.384-1.19 0-.536.131-.936.386-1.191.04-.04.087-.07.132-.104.115.359.32.706.636 1.037.49.507 1.014.764 1.56.764h.034c.532-.01 1.047-.266 1.526-.764.395-.41.625-.846.703-1.297h6.91c.432.02.771.14.998.367.258.255.39.655.39 1.19 0 .532-.132.933-.39 1.19-.193.197-.47.309-.82.354H4.18v-.003zm.177-3.098h2.75c-.072.227-.215.46-.44.689-.321.333-.643.507-.957.512-.3.017-.658-.165-.992-.512-.221-.23-.364-.46-.434-.684 0-.002 0-.002-.003-.005h.076zm8.26-3.644c.32.028.591.134.84.257.79.392 1.253 1.188 1.491 2.527H4.291c.319-1.82 1.045-2.709 2.445-2.796.233-.016.933-.014.933-.014h3.924c0-.002.77.006 1.025.026zm3.642-5.956v-2.42c0-.28.221-.507.515-.507.272 0 .49.227.49.507v2.429H16.26v-.009zm4.03 0c-.548-.005-2.195 0-2.195 0v-2.42a1.35 1.35 0 00-1.342-1.367c-.728 0-1.32.614-1.32 1.367v2.42h-2.196c-.467 0-.843.14-1.114.412-.283.286-.429.686-.429 1.193s.146.908.429 1.194c.112.112.246.193.392.26l.073 2.011H7.702s-.599.006-.798.014a7.959 7.959 0 00-.37.02c-1.804.182-2.759 1.443-3.103 3.826a1.997 1.997 0 00-.636.418c-.426.425-.639 1.036-.639 1.81 0 .775.216 1.383.642 1.809.246.246.557.406.918.507.429 1.468.78 2.423 2.79 2.423h8.85l.237-.003h2.238l.26.003c.04-.003.239-.003.239-.003h.104s.095.006.126.003c1.776-.104 2.022-1.916 2.036-3.659.003-.09.11-2.358.216-4.65.137-2.98.19-4.1.21-4.529a1.26 1.26 0 00.392-.26c.286-.286.431-.687.431-1.194 0-.507-.145-.91-.431-1.196a1.388 1.388 0 00-.709-.364c-.008 0-.31-.045-.414-.045z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconHamburguerLight;
