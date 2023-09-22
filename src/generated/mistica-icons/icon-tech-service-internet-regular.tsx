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

const IconTechServiceInternetRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M7.754 13.523c3.172 0 5.754-2.585 5.754-5.761S10.926 2 7.754 2C4.582 2 2 4.586 2 7.762c0 3.176 2.582 5.761 5.754 5.761zm.723-5.038h.87c-.097 1.392-.465 2.457-.87 3.052V8.485zm0-4.494c.41.6.773 1.66.87 3.052h-.87V3.99zM7.036 7.043h-.87c.097-1.392.465-2.457.87-3.052v3.052zm0 4.494c-.41-.6-.773-1.66-.87-3.052h.87v3.052zm3.153-.208c.322-.797.534-1.765.603-2.848h1.22a4.342 4.342 0 01-1.823 2.848zm.599-4.286c-.065-1.084-.277-2.052-.603-2.849a4.33 4.33 0 011.822 2.849h-1.22zM5.324 4.199C5 4.996 4.79 5.964 4.72 7.047H3.505A4.32 4.32 0 015.324 4.2zm-.599 4.286c.065 1.084.276 2.052.603 2.849a4.33 4.33 0 01-1.823-2.849h1.22zM21.73 9.601l-.313-.738-2.2 2.204a.18.18 0 01-.25.004l-.524-.493a.188.188 0 01-.055-.129.18.18 0 01.05-.13l2.214-2.216-.736-.314a3.408 3.408 0 00-3.752.733 3.427 3.427 0 00-.953 2.992l-3.687 3.692a3.417 3.417 0 00-2.987.954 3.417 3.417 0 00-.732 3.757l.313.737 2.2-2.203a.18.18 0 01.249-.005l.524.493a.188.188 0 01.056.13.179.179 0 01-.05.129l-2.215 2.217.736.313a3.412 3.412 0 003.752-.733 3.422 3.422 0 00.953-2.987l3.687-3.692a3.43 3.43 0 003.72-4.715zm-3.752 3.595l-.304-.083-4.539 4.55.083.304a2.343 2.343 0 01-.603 2.258c-.46.461-1.082.715-1.703.687l.957-.959a1.259 1.259 0 00-.028-1.807l-.524-.493a1.25 1.25 0 00-1.754.023l-.944.94a2.338 2.338 0 012.942-2.309l.304.083 4.543-4.549-.083-.304a2.343 2.343 0 01.603-2.259c.46-.46 1.078-.71 1.704-.687l-.958.96a1.259 1.259 0 00.028 1.807l.524.492c.498.47 1.271.461 1.754-.023l.944-.945a2.38 2.38 0 01-.69 1.71c-.59.59-1.45.82-2.256.604z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M15.256 7.095a1.82 1.82 0 00-.77.154c-.342.16-.648.468-.908.916-.107.18-.196.367-.272.563l-.008.009-3.779 1.761h-.011A3.644 3.644 0 008.39 10.3a1.83 1.83 0 00-.77.154c-.342.16-.647.467-.908.916-.109.187-.204.38-.28.585a.672.672 0 00.067.622.617.617 0 00.51.26.713.713 0 00.311-.072l.493-.23.314.168-.073.35-.493.23a.663.663 0 00-.403.619c.008.26.185.484.45.582a3.65 3.65 0 001.14.208c.292 0 .553-.053.771-.154.339-.166.644-.474.908-.922.106-.18.196-.367.271-.563l.009-.008 3.781-1.762h.011a3.65 3.65 0 001.118.199c.294 0 .552-.054.77-.154.342-.16.647-.468.908-.916.11-.188.204-.381.28-.586a.672.672 0 00-.067-.622.617.617 0 00-.51-.26.713.713 0 00-.31.073l-.494.23-.314-.169.073-.35.493-.23c.258-.12.412-.358.4-.619-.01-.26-.181-.481-.45-.582l-.029-.01c-.13-.04-.604-.192-1.111-.192zm0 .56c.476 0 .947.174.947.174.112.042.114.115.008.165l-.552.258a.49.49 0 00-.24.302l-.13.611c-.02.126.037.25.146.314l.549.294c.064.03.137.048.207.045a.437.437 0 00.18-.037l.551-.257a.166.166 0 01.073-.02c.056 0 .079.05.05.132 0 0-.33.916-.896 1.182-.16.075-.347.1-.535.1-.476 0-.947-.173-.947-.173a.525.525 0 00-.173-.028.625.625 0 00-.227.042l-3.82 1.787a.597.597 0 00-.27.294s-.33.916-.896 1.182c-.16.076-.347.101-.535.101-.476 0-.947-.174-.947-.174-.112-.042-.115-.114-.008-.168l.552-.257a.49.49 0 00.24-.303l.13-.61a.31.31 0 00-.146-.314l-.55-.294a.447.447 0 00-.207-.045.437.437 0 00-.179.036l-.552.258a.165.165 0 01-.073.02c-.056 0-.078-.05-.05-.132 0 0 .33-.916.896-1.182.16-.076.348-.101.535-.101.477 0 .947.174.947.174.056.02.115.028.174.028a.627.627 0 00.227-.042l3.82-1.785a.598.598 0 00.27-.294s.33-.916.896-1.182c.16-.073.347-.1.535-.1z"
                />
                <path
                    fill={fillColor}
                    d="M5.446 16.933h13.11c1.098 0 1.94-.328 2.504-.972.52-.6.787-1.468.787-2.583V8.44c0-1.115-.264-1.984-.787-2.583-.563-.644-1.406-.972-2.505-.972H5.446c-1.1 0-1.94.328-2.504.972-.521.6-.787 1.468-.787 2.583v4.938c0 1.115.266 1.983.787 2.585.563.642 1.406.97 2.504.97zM3.788 6.596c.345-.394.885-.588 1.658-.588l13.11-.003c.77 0 1.313.194 1.658.589.339.39.512 1.01.512 1.846v4.938c0 .835-.173 1.457-.512 1.846-.345.395-.888.588-1.659.588H5.446c-.77 0-1.313-.193-1.658-.588-.339-.39-.513-1.011-.513-1.846V8.44c0-.835.174-1.457.513-1.844zm17.465 12.521H2.749a.562.562 0 01-.56-.56c0-.308.252-.56.56-.56h18.504c.308 0 .56.252.56.56 0 .308-.252.56-.56.56z"
                />
            </svg>
        );
    }
};

export default IconTechServiceInternetRegular;
