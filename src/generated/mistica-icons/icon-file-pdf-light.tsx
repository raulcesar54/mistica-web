/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconFilePdfLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M15.747 2.156c.182 0 .353.07.485.196l5.409 5.236a.687.687 0 01.168.322c.022.05.034.106.034.162v12.563c0 .653-.564 1.205-1.23 1.205H8.176c-.656 0-1.233-.563-1.233-1.205L6.98 17.6H4.422a2.27 2.27 0 01-2.266-2.27v-4.178a2.27 2.27 0 012.266-2.27h2.521v-5.52c0-.63.586-1.205 1.233-1.205h7.571zm-.692.832H8.173c-.182 0-.406.207-.406.378v5.521h6.706a2.27 2.27 0 012.266 2.27v4.179a2.27 2.27 0 01-2.266 2.268H7.806l-.036 3.042c0 .18.207.373.406.373h12.437v-.003c.207 0 .403-.185.403-.378V8.758H18.45c-.98 0-1.826-.316-2.442-.915-.622-.603-.953-1.429-.953-2.384v-2.47zm-.58 6.72H4.423c-.792 0-1.44.647-1.44 1.443v4.179c0 .795.645 1.442 1.44 1.442h10.054c.792 0 1.44-.647 1.44-1.442v-4.18c0-.795-.645-1.442-1.44-1.442zm-5.243 1.717c.703 0 1.17.11 1.479.418.297.29.45.753.45 1.42 0 .672-.145 1.137-.45 1.45-.277.284-.703.418-1.364.418H8.089v-3.706h1.143zm-3.227 0c.58 0 .947.081 1.185.303.202.185.297.47.297.865s-.093.695-.278.9c-.215.243-.551.358-1.039.358h-.596v1.277h-.84v-3.703h1.271zm8.244 0l-.065.61h-1.532v.9h1.213v.633h-1.213v1.56h-.846v-3.703h2.443zm-5.056.62h-.26v2.47h.358c.378 0 .65-.115.795-.33.146-.216.196-.466.196-.922 0-.533-.08-.782-.26-.975-.168-.18-.418-.244-.83-.244zm-3.222-.006h-.395v1.182h.418v-.003c.271 0 .384-.04.493-.14.098-.098.145-.255.145-.47 0-.2-.042-.348-.14-.44-.103-.093-.26-.13-.52-.13zm9.91-8.874v2.288c0 .728.242 1.348.701 1.79.462.445 1.106.684 1.868.684h2.347l-4.915-4.762z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFilePdfLight;
