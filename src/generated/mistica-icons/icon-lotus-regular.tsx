'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconLotusRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M14.47 8.47c-.235-.482-.494-.91-.738-1.267-.753-1.11-1.494-1.793-1.527-1.822a.27.27 0 0 0-.365 0c-.033.029-.774.711-1.528 1.822-.244.36-.505.791-.74 1.276-.443-.305-.881-.551-1.27-.744-1.12-.558-2.05-.797-2.21-.838a.271.271 0 0 0-.343.174v.005c-.032.103-.325 1.04-.424 2.324-.042.54-.052 1.187.024 1.875a9.96 9.96 0 0 0-.45-.01c-1.468 0-2.603.314-2.7.34l-.004.002a.27.27 0 0 0-.19.308v.006c.02.088.214.987.728 2.087.493 1.053 1.383 2.492 2.828 3.36 1.039.625 2.322.942 3.809.942a10.95 10.95 0 0 0 2.63-.322c.283.074 1.323.322 2.628.322 1.487 0 2.77-.317 3.81-.942 1.444-.868 2.339-2.307 2.827-3.36.53-1.135.72-2.052.729-2.093a.263.263 0 0 0-.205-.312 10.843 10.843 0 0 0-3.11-.329 10.2 10.2 0 0 0 .024-1.874c-.1-1.284-.392-2.22-.424-2.324l-.003-.008a.269.269 0 0 0-.319-.176c-.04.008-1.026.242-2.231.843-.385.19-.818.434-1.256.735m-3.181 6.948-.001-.002c-.644-.945-1.331-2.32-1.331-3.78 0-1.456.687-2.831 1.332-3.783.26-.382.516-.706.733-.961.218.254.475.58.734.961l.001.002c.644.946 1.33 2.32 1.33 3.78 0 1.456-.686 2.831-1.331 3.783-.26.382-.516.707-.734.961-.217-.254-.474-.579-.733-.961m3.975-3.782c0-.724-.134-1.417-.341-2.053.448-.33.91-.598 1.33-.806h.001c.415-.208.8-.365 1.114-.48.064.33.126.736.162 1.192.088 1.149.005 2.68-.717 3.947-.723 1.27-2.002 2.133-3.03 2.644h-.002a8.644 8.644 0 0 1-.086.044l.037-.056c.7-1.032 1.532-2.64 1.532-4.433M9.12 9.593a6.638 6.638 0 0 0-.34 2.043c0 1.797.833 3.404 1.532 4.432l.047.068a8.336 8.336 0 0 1-.113-.055h-.001c-1.029-.511-2.307-1.374-3.03-2.644-.723-1.272-.805-2.804-.717-3.948.035-.455.097-.862.161-1.192.319.116.7.273 1.114.48h.002c.425.211.892.481 1.345.816m.25 7.55c-1.32 0-2.382-.28-3.2-.772-1.152-.692-1.917-1.886-2.37-2.853l-.002-.005a10.056 10.056 0 0 1-.39-.967c.404-.061.92-.115 1.49-.115.23 0 .453.009.667.026.139.524.34 1.05.625 1.553.89 1.562 2.41 2.557 3.528 3.113l.027.013a9.54 9.54 0 0 1-.375.008m4.91-.006.011-.005.019-.01c1.118-.555 2.637-1.55 3.527-3.112.287-.503.488-1.03.627-1.556.205-.015.417-.023.636-.023a9.93 9.93 0 0 1 1.49.116c-.096.28-.226.614-.393.972v.002c-.447.962-1.216 2.157-2.37 2.85-.817.492-1.879.773-3.199.773-.119 0-.235-.002-.348-.007m2.873-9.722.003.009-.001-.004-.001-.002zm-11.359.61h.004-.006z"
            />
        </svg>
    );
};

export default IconLotusRegular;
