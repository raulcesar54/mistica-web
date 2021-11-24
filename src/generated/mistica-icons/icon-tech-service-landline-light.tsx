/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconTechServiceLandlineLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M8.408 3.334c.297.291.554.62.767.975 1.042 1.675.19 3.098-.708 3.994a4.72 4.72 0 01-.519.457c-.257.307-.167 1.094 1.635 3.085l4.04-4.035a.438.438 0 00.079-.19c.003-.322.033-.644.092-.96.135-.743.392-1.309.765-1.682.367-.367.924-.621 1.653-.759.325-.061.652-.095.983-.1.325 0 .582.156.689.417.106.26.034.554-.193.781l-.678.678a.293.293 0 00-.04.118l.13.896.896.13a.293.293 0 00.117-.04l.681-.675c.199-.2.4-.241.535-.241.328 0 .661.252.664.734a5.526 5.526 0 01-.092.96c-.135.743-.393 1.309-.765 1.681-.367.367-.925.622-1.653.76a6.125 6.125 0 01-.986.097.455.455 0 00-.193.079l-4.042 4.04.125.113c1.902 1.696 2.661 1.777 2.962 1.525.14-.182.294-.356.46-.518.895-.897 2.318-1.748 3.993-.71.356.214.684.471.975.768 1.577 1.58 1.58 3.216.003 4.866a6.335 6.335 0 01-.815.68l-.022.017-.014.012c-.53.358-1.21.54-2.003.54-.715 0-1.518-.148-2.384-.445-1.926-.659-4.073-2.015-6.208-3.919l-.814.815a.438.438 0 00-.079.19 5.526 5.526 0 01-.092.961c-.135.743-.392 1.309-.765 1.681-.367.367-.924.622-1.653.76a6.125 6.125 0 01-.986.097c-.325-.003-.582-.16-.689-.42-.106-.26-.033-.555.194-.781l.675-.676a.255.255 0 00.039-.117l-.129-.897-.894-.128a.293.293 0 00-.117.039l-.678.678a.748.748 0 01-.535.24c-.328 0-.661-.254-.664-.739.003-.322.034-.644.092-.96.135-.743.393-1.309.765-1.681.367-.367.925-.622 1.653-.76.325-.058.655-.092.986-.097a.455.455 0 00.193-.079l.813-.812-.251-.284c-1.767-2.036-3.03-4.069-3.663-5.904s-.6-3.398.095-4.403a.061.061 0 01.012-.014l.016-.023c.255-.355.485-.63.681-.818 1.65-1.577 3.286-1.574 4.866.003zm8.787 1.345c-.05 0-1.552.008-2.244.692-.633.633-.69 1.957-.694 2.203v.04a.951.951 0 01-.241.586l-7.782 7.784a.967.967 0 01-.585.24c-.056 0-1.558.007-2.247.696-.633.633-.69 1.957-.694 2.203v.04c0 .115.041.177.103.177.04 0 .087-.025.14-.076l.684-.68a.794.794 0 01.512-.2.59.59 0 01.07.006l.978.14a.49.49 0 01.39.39l.14.977a.767.767 0 01-.194.583l-.68.68c-.135.132-.088.244.1.244.05 0 1.552-.005 2.241-.694.634-.634.69-1.958.694-2.204v-.04c0-.188.107-.451.242-.586l7.784-7.781a.967.967 0 01.585-.241h.06c.286-.008 1.564-.075 2.184-.695.634-.633.69-1.957.694-2.203v-.04c0-.115-.041-.177-.103-.177-.04 0-.09.023-.14.076l-.68.68a.794.794 0 01-.513.2.59.59 0 01-.07-.006l-.978-.14a.49.49 0 01-.39-.39l-.14-.977a.767.767 0 01.194-.583l.68-.68c.135-.135.087-.244-.1-.244zm-5.326 10.254l-2.135 2.133.296.26c1.974 1.706 3.936 2.923 5.697 3.526 1.65.566 3.028.555 3.88-.028l.036-.025c.328-.235.574-.442.737-.61.703-.737 1.039-1.426 1.028-2.107-.012-.653-.348-1.3-1.023-1.975a4.22 4.22 0 00-.862-.68l-.009-.006c-.535-.333-1.078-.457-1.61-.367-.564.095-1.132.429-1.698.994a4.721 4.721 0 00-.429.488c-.008.011-.02.022-.03.033-.41.379-1.014.356-1.801-.064-.564-.304-1.246-.816-2.077-1.572zM6.038 2.703c-.68-.013-1.37.323-2.106 1.029a5.409 5.409 0 00-.64.779c-.585.857-.593 2.24-.022 3.896.635 1.844 1.941 3.906 3.778 5.973l2.142-2.14-.182-.201c-.658-.743-1.115-1.36-1.392-1.88-.42-.784-.44-1.386-.064-1.795a.157.157 0 01.033-.03 4.44 4.44 0 00.488-.43c.563-.562.899-1.134.994-1.697.09-.532-.034-1.073-.367-1.61l-.006-.009a4.22 4.22 0 00-.68-.863c-.675-.675-1.322-1.01-1.975-1.022z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconTechServiceLandlineLight;
