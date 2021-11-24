/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconTeddyBearRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M8.18 7.238c-.117-.109-.173-.266-.173-.473 0-.21.056-.37.174-.479.112-.104.274-.157.481-.157.208 0 .37.053.482.157.115.11.177.269.177.476 0 .208-.062.367-.177.474-.112.103-.277.156-.482.156-.207.003-.366-.05-.481-.154zm11.057 10.513a1.012 1.012 0 00-.306-.885c-.199-.185-.518-.28-.95-.28-.43 0-.75.095-.952.283-.207.193-.313.507-.313.935 0 .014-.009.028-.009.045l-.176 1.675c.003.37.092.642.272.807.173.16.459.244.843.244.38 0 .664-.082.84-.244.042-.042.076-.093.11-.143-.004-.003.565-1.812.64-2.437zm-3.751-.653c.104-.459.308-.846.63-1.142.2-.185.434-.32.695-.423.025-.255.05-.513.05-.79 0-1.345-.308-2.426-.885-3.247-.092.104-.165.224-.269.32-.991.918-2.397 1.383-4.179 1.383-1.779 0-3.188-.465-4.176-1.384-.104-.095-.18-.212-.272-.319-.574.82-.885 1.9-.885 3.247 0 .277.025.535.05.79.26.103.496.24.695.423.32.296.526.683.63 1.142.011.034.03.065.034.101l.002.028c.006.037.009.079.012.115l.145 1.384c.863.728 2.07 1.092 3.715 1.092.016 0 .033-.003.05-.003.02 0 .03.003.05.003 1.642 0 2.852-.367 3.712-1.092l.146-1.384c.005-.036.008-.078.014-.115l.002-.028c.003-.036.023-.064.034-.1zm-9.23 3.233c.18-.165.266-.437.272-.807l-.176-1.675c0-.014-.012-.03-.012-.045 0-.428-.106-.745-.31-.935-.205-.188-.524-.283-.956-.283-.431 0-.75.095-.95.28-.198.185-.35.487-.305.885.076.625.645 2.434.645 2.434.03.053.064.104.109.143.176.16.456.244.84.244.387.003.67-.081.843-.241zm-1.815-7.798c-1.092 1.235-.386 2.154.132 2.59l.162.135c.028.022.076.053.112.078a.59.59 0 01.07-.005c-.01-.199-.039-.384-.039-.591 0-1.14.207-2.123.574-2.978-.367.213-.764.496-1.01.77zm1.74-7.202a4.532 4.532 0 011.148-1.756c-.395-.157-.781-.037-1.146.375-.44.499-.434.964-.002 1.38zm5.347-1.91c-1.429 0-2.527.347-3.266 1.039-.765.711-1.154 1.798-1.154 3.227 0 1.428.39 2.51 1.154 3.218.619.574 1.504.896 2.616.989V8.762a1.375 1.375 0 01-.412-.255 1.096 1.096 0 01-.313-.484s-.045-.152-.045-.266c0-.098.056-.238.056-.238.073-.149.148-.255.266-.367.272-.25.641-.379 1.095-.387.457.008.827.137 1.095.387.12.109.197.218.27.367 0 0 .055.14.055.238 0 .112-.042.266-.042.266a1.08 1.08 0 01-.313.484c-.118.11-.258.19-.412.255v3.132c1.11-.093 1.997-.415 2.616-.989.765-.709 1.151-1.79 1.151-3.218 0-1.429-.386-2.516-1.15-3.227-.74-.69-1.838-1.04-3.267-1.04zm5.345.526c-.365-.412-.751-.53-1.146-.375.51.479.896 1.067 1.151 1.756.429-.414.437-.88-.005-1.38zm1.742 8.586c-.244-.275-.642-.555-1.011-.768.367.854.571 1.838.571 2.978 0 .204-.025.392-.04.59a.59.59 0 01.07.006 1.8 1.8 0 00.113-.078l.165-.135c.518-.442 1.224-1.358.132-2.593zm1.23 3.423c.453.42.683.96.703 1.697 0 .03-.006.148-.017.218-.009.079-.042.27-.042.27l-.65 2.456c-.006.028-.025.05-.036.078-.006.02-.006.04-.017.056-.009.012-.02.02-.023.031a.52.52 0 01-.061.076c-.09.143-.185.286-.308.4-.429.395-1.017.597-1.754.597-.734 0-1.328-.202-1.753-.597a2.02 2.02 0 01-.572-.974c-.994.546-2.23.818-3.74.818-.019 0-.03-.003-.05-.003-.017 0-.03.003-.05.003-1.513 0-2.745-.272-3.743-.818-.106.386-.288.717-.568.974-.432.395-1.02.597-1.754.597s-1.325-.202-1.753-.597a1.894 1.894 0 01-.311-.4c-.02-.025-.042-.048-.059-.076-.005-.011-.02-.02-.025-.03-.008-.02-.008-.04-.017-.057-.011-.028-.028-.05-.036-.078l-.647-2.457s-.037-.187-.045-.269a1.881 1.881 0 01-.017-.218c.022-.737.25-1.277.703-1.697.065-.06.137-.107.207-.155-.916-.96-1.386-2.5.023-4.09.605-.683 1.913-1.456 2.638-1.562.054-.009.076-.028.135-.04l-.009-.022c-.268-.697-.414-1.496-.414-2.4 0-.353.036-.675.078-.998-.02-.01-.044-.005-.064-.016a2.568 2.568 0 01-.28-.194l-.14-.112c-.81-.683-1.348-1.94-.2-3.235 1.14-1.286 2.497-.986 3.323-.336.84-.41 1.84-.636 3.022-.636 1.182 0 2.182.227 3.023.636.826-.65 2.182-.95 3.32.336 1.145 1.294.61 2.552-.2 3.235l-.137.112a3.036 3.036 0 01-.283.194c-.02.01-.042.008-.064.016.039.323.078.645.078.998 0 .907-.143 1.703-.412 2.4l-.008.023c.056.01.078.03.132.039.728.106 2.036.88 2.641 1.563 1.406 1.588.936 3.129.02 4.09.072.05.148.095.213.154zm-5.451-8.564c-.208 0-.37-.053-.482-.156-.118-.107-.177-.266-.177-.477 0-.207.06-.367.177-.473.112-.106.277-.16.482-.16.207 0 .37.054.481.16.118.106.174.266.174.476 0 .208-.056.367-.174.474-.112.106-.274.156-.481.156z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconTeddyBearRegular;
