/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconCareHealthLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M20.551 17.42c.51-.32.591-.591.345-1.068-.238-.42-.673-.577-1.081-.434l-3.958 1.373c-.05.017-.099.017-.149.017-.263.17-.566.28-.877.28h-4.95a.41.41 0 010-.82l4.95-.001c.434 0 .86-.426.86-.863 0-.45-.31-.798-.72-.807h-.285c-.804.017-2.477.056-4.023-.921-.017-.009-.902-.535-3.812-.583v4.801l4.818 2.317c.37.213.804.314 1.344.314.451 0 .835-.076 1.146-.216.034-.02 4.894-2.434 6.392-3.39zm-14.52 2.596v-6.74a.436.436 0 00-.435-.433H3.408a.436.436 0 00-.434.434v6.74c0 .237.196.433.434.433h2.188a.433.433 0 00.434-.434zm15.585-4.05c.31.6.459 1.462-.625 2.145-1.54.978-6.275 3.337-6.479 3.443a3.753 3.753 0 01-1.499.289c-.68 0-1.26-.14-1.72-.404l-4.44-2.137v.714c0 .692-.56 1.255-1.251 1.258H3.408a1.258 1.258 0 01-1.252-1.258v-6.74c0-.688.566-1.257 1.252-1.257h2.188c.515 0 .95.305 1.148.748 3.261.034 4.261.65 4.359.725 1.336.83 2.784.796 3.563.78h.32c.85.016 1.523.733 1.523 1.627 0 .106-.017.204-.039.302l3.073-1.067a1.68 1.68 0 012.03.756c0 .003.043.076.043.076zM4.484 13.722c.426 0 .731.297.731.734a.703.703 0 01-.731.731c-.429 0-.731-.308-.731-.734 0-.437.302-.73.731-.73zM15.268 2.977c-3.028 0-4.566 1.543-4.566 4.583 0 3.039 1.535 4.58 4.566 4.58 3.031 0 4.566-1.541 4.566-4.58 0-3.04-1.538-4.583-4.566-4.583zm0 9.983c-3.473 0-5.383-1.916-5.383-5.4-.003-3.485 1.91-5.404 5.383-5.404 3.474 0 5.387 1.919 5.387 5.404-.003 3.484-1.913 5.4-5.387 5.4zM12.7 7.067l-.003.988h1.667a.41.41 0 01.408.41v1.672h.986V8.464a.41.41 0 01.41-.411h1.666v-.99h-1.667a.41.41 0 01-.409-.408V4.983h-.988v1.672a.408.408 0 01-.41.409l-1.66.003zm-.096 1.81c-.395 0-.725-.303-.725-.665V6.904c0-.358.333-.66.725-.66l1.35-.004V4.885c0-.39.309-.726.662-.726h1.302c.35 0 .661.339.661.728V6.24h1.353c.387 0 .726.308.726.661V8.21c0 .353-.34.662-.726.662h-1.35v1.355c0 .395-.303.726-.658.726h-1.306c-.358 0-.66-.334-.66-.729l-.003-1.352c0 .005-1.35.005-1.35.005z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCareHealthLight;
