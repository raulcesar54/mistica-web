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

const IconTechServiceLandlineRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M5.993 14.369c-1.63-1.926-2.8-3.847-3.403-5.592-.317-.919-.468-1.77-.454-2.53.017-.792.213-1.467.582-2.005l.028-.042.007-.009c.103-.142.392-.538.69-.823.875-.835 1.766-1.25 2.645-1.232.849.016 1.69.43 2.496 1.238.305.3.569.635.79 1.002.431.698.588 1.418.468 2.138-.12.72-.527 1.428-1.2 2.1a4.98 4.98 0 0 1-.498.443c-.073.123.017.443.23.83.202.364.512.79.938 1.293l4.429-4.428c.011-.317.045-.628.1-.939.158-.857.468-1.523.922-1.977.451-.451 1.104-.76 1.947-.916a6.44 6.44 0 0 1 1.087-.11h.005c.547.003 1.009.297 1.202.768.193.47.073 1.006-.314 1.392l-.526.527.039.269.272.039.526-.532c.26-.264.594-.406.933-.406.42 0 .812.22 1.03.582.13.216.197.462.194.712-.005.355-.04.714-.104 1.064-.153.857-.464 1.524-.918 1.978-.451.448-1.104.756-1.947.913-.32.059-.642.095-.966.106l-4.438 4.438c.533.453.982.777 1.36.982.369.202.677.283.798.213a4.96 4.96 0 0 1 .442-.498c.672-.672 1.381-1.079 2.1-1.2.72-.12 1.44.034 2.138.469.367.218.703.484 1.003.787.807.806 1.224 1.644 1.238 2.496.017.88-.398 1.77-1.23 2.641-.286.3-.686.59-.825.69l-.007.005-.016.01-.026.02c-.54.373-1.218.57-2.014.583-.036.003-.067.003-.1.003-.74 0-1.564-.154-2.449-.462-1.747-.605-3.667-1.78-5.595-3.415a6.59 6.59 0 0 1-.094.79c-.157.854-.467 1.521-.921 1.975-.451.45-1.104.759-1.947.916a6.445 6.445 0 0 1-1.09.11h-.005c-.546 0-1.009-.295-1.202-.766-.193-.47-.073-1.002.314-1.389l.532-.527-.04-.271-.27-.04-.528.527c-.26.264-.593.406-.932.406-.423 0-.815-.22-1.034-.582a1.342 1.342 0 0 1-.193-.709c.005-.356.039-.714.103-1.064.155-.858.465-1.524.92-1.978.45-.448 1.106-.756 1.946-.913.275-.05.553-.085.832-.1Zm.854-.724 1.671-1.67c-.506-.593-.877-1.103-1.122-1.545-.221-.398-.347-.748-.386-1.068-.065-.537.143-.888.325-1.086a.422.422 0 0 1 .064-.06c.16-.12.308-.251.451-.394.507-.507.804-1.009.888-1.496.076-.451-.028-.9-.32-1.367l-.008-.017a3.85 3.85 0 0 0-.616-.778c-.605-.6-1.168-.897-1.725-.908-.575-.011-1.197.3-1.846.922a5.04 5.04 0 0 0-.56.677l-.026.034c-.512.756-.51 2.006.014 3.527.556 1.615 1.655 3.41 3.196 5.23Zm3.473 3.48c1.823 1.548 3.623 2.653 5.244 3.215 1.527.53 2.785.538 3.544.02l.033-.023c.303-.218.533-.406.678-.56.622-.65.93-1.272.922-1.846-.011-.557-.308-1.12-.91-1.723a3.848 3.848 0 0 0-.78-.616l-.016-.008c-.468-.292-.913-.395-1.367-.32-.487.084-.989.381-1.496.888-.143.14-.274.292-.395.448-.02.023-.039.045-.059.065-.196.18-.537.384-1.064.328-.314-.034-.658-.154-1.048-.364-.46-.251-.993-.638-1.616-1.174l-1.67 1.67ZM17.8 3.93c-.054 0-1.555.006-2.247.695-.7.7-.695 2.243-.695 2.243a.951.951 0 0 1-.24.586l-7.782 7.784a.967.967 0 0 1-.585.241h-.006c-.05 0-1.552.006-2.24.695-.701.7-.696 2.243-.696 2.243 0 .115.042.177.104.177.04 0 .09-.025.14-.076l.684-.683a.794.794 0 0 1 .512-.2.59.59 0 0 1 .07.006l.978.14a.49.49 0 0 1 .39.39l.14.977a.767.767 0 0 1-.194.583l-.68.68c-.135.132-.088.245.1.245.05 0 1.552-.006 2.241-.695.7-.7.695-2.244.695-2.244a.95.95 0 0 1 .24-.585l7.79-7.782a.953.953 0 0 1 .583-.24h.003c.05 0 1.552-.006 2.24-.695.701-.7.696-2.244.696-2.244 0-.115-.043-.177-.104-.177-.04 0-.09.023-.14.076l-.68.68a.794.794 0 0 1-.514.2.59.59 0 0 1-.07-.006l-.977-.14a.49.49 0 0 1-.39-.39l-.14-.977a.767.767 0 0 1 .194-.583l.68-.68c.135-.135.087-.244-.1-.244Z"
            />
        </svg>
    );
};

export default IconTechServiceLandlineRegular;
