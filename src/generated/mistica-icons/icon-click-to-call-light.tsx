/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconClickToCallLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M8.28 3.34c.297.292.555.617.765.975 1.042 1.675.19 3.098-.709 3.995a4.994 4.994 0 01-.518.456c-.3.356.095 1.101.482 1.664.635.927 1.689 2.014 2.423 2.748l.086.087c.737.736 1.821 1.787 2.748 2.423.566.386 1.308.781 1.664.482.14-.183.294-.356.46-.519.899-.896 2.319-1.748 3.994-.708.356.213.683.47.975.767 1.577 1.577 1.58 3.216.003 4.866a6.335 6.335 0 01-.816.68l-.022.017-.014.011c-.53.37-1.207.555-1.997.555-.855 0-1.838-.213-2.908-.639-2.215-.885-4.644-2.61-7.025-4.991l-.087-.087c-2.38-2.381-4.106-4.81-4.989-7.025-.82-2.056-.851-3.799-.09-4.905.004-.006.01-.011.012-.017l.017-.022a5.77 5.77 0 01.68-.815C5.064 1.76 6.7 1.763 8.28 3.34zm-2.373-.62c-.68-.014-1.37.322-2.106 1.025a5.418 5.418 0 00-.639.776c-.308.45-.459 1.045-.445 1.767.014.77.216 1.647.6 2.605.857 2.146 2.537 4.507 4.862 6.835l.048.048.042.039c2.328 2.328 4.689 4.008 6.835 4.863.958.383 1.834.582 2.605.599.722.014 1.316-.134 1.767-.445l.037-.026c.327-.235.574-.442.736-.61.703-.737 1.04-1.426 1.028-2.107-.011-.652-.347-1.3-1.022-1.974a4.318 4.318 0 00-.863-.681l-.008-.006c-.538-.333-1.079-.456-1.611-.367-.563.096-1.132.429-1.697.995a4.721 4.721 0 00-.429.487c-.008.011-.02.023-.03.034-1.051.966-3.121-.827-5.205-2.91l-.087-.087C8.246 11.497 6.454 9.424 7.42 8.377c.011-.011.02-.023.034-.031.173-.132.336-.274.487-.429.563-.565.9-1.137.994-1.697.09-.532-.033-1.073-.366-1.61l-.006-.01a4.203 4.203 0 00-.68-.859C7.206 3.066 6.56 2.73 5.906 2.719zm12.188 1.66a.65.65 0 01.468.267l1.146 1.274a.647.647 0 01-.107.953l-3.24 2.851.85.944c.124.137.16.3.104.446-.056.145-.196.238-.38.252l-4.6.355a.483.483 0 01-.415-.16.489.489 0 01-.103-.43l.969-4.536c.04-.179.146-.305.297-.344.151-.04.308.014.431.148l.846.936h.011l3.241-2.784a.617.617 0 01.482-.171zm-.04.564a.063.063 0 00-.044.01c-.006.006-.014.012-.02.02l-3.249 2.793a.57.57 0 01-.79-.05l-.672-.74-.894 4.182 4.219-.327-.658-.731a.555.555 0 01.042-.788c.002-.002.002-.002.005-.002l3.255-2.866.034-.025a.07.07 0 00.033-.053.104.104 0 00-.014-.065l-.002-.003-1.157-1.285c-.009-.009-.017-.017-.023-.028a.086.086 0 00-.064-.042z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconClickToCallLight;
