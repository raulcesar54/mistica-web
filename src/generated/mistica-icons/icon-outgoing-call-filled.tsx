/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconOutgoingCallFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.84 17.894c-.013-.848-.43-1.686-1.235-2.49a4.773 4.773 0 00-1.002-.787c-.544-.336-1.101-.507-1.662-.507-.156 0-.313.011-.473.04-.717.12-1.423.523-2.095 1.195a5.501 5.501 0 00-.443.496.216.216 0 01-.117.025c-.188 0-.544-.112-1.135-.518-.882-.605-1.924-1.613-2.63-2.32l-.084-.083c-.706-.709-1.714-1.748-2.32-2.63-.52-.762-.56-1.135-.495-1.252a5.5 5.5 0 00.496-.443c.672-.672 1.072-1.375 1.196-2.095.123-.72-.034-1.44-.465-2.135a4.924 4.924 0 00-.787-1c-.804-.804-1.642-1.218-2.49-1.235h-.054c-.86 0-1.728.415-2.582 1.23-.306.294-.6.697-.695.832-.003.008-.009.014-.011.016-.009.009-.014.017-.02.026-.795 1.154-.776 2.94.059 5.033.871 2.188 2.569 4.58 4.907 6.919l.003.001.003.002.078.078c2.34 2.34 4.732 4.037 6.92 4.908 1.072.428 2.064.641 2.93.641.825 0 1.54-.193 2.103-.582a.154.154 0 01.03-.023l.012-.008.019-.014c.15-.11.534-.389.813-.68.829-.872 1.244-1.76 1.227-2.64zm-8.246-8.683l.95 1.056a.762.762 0 00.613.31.747.747 0 00.518-.206l2.533-2.177.557.62a.61.61 0 00.451.212.626.626 0 00.143-.02.59.59 0 00.417-.464l.813-3.79a.633.633 0 00-.625-.779c-.017 0-.037 0-.053.003l-3.846.3a.579.579 0 00-.516.355.584.584 0 00.13.614l.551.613-2.521 2.219a.771.771 0 00-.115 1.134z"
            />
        </svg>
    );
};

export default IconOutgoingCallFilled;
