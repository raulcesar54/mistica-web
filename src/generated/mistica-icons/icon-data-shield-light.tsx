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

const IconDataShieldLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20.575 8.776h-.104a.352.352 0 01-.352-.255c-1.061-3.491-4.164-5.81-7.763-5.81-.212 0-.352-.14-.352-.355 0-.215.14-.356.352-.356 3.915 0 7.302 2.533 8.467 6.347a.396.396 0 01-.248.43zM12.004 6.28c0-.214.14-.356.352-.356 2.786 0 4.94 2.172 4.94 4.992 0 .215-.14.356-.352.356-.212 0-.352-.141-.352-.356 0-2.39-1.874-4.28-4.236-4.28-.212 0-.352-.141-.352-.356zM8.514 7.6l-.39-.356L7.7 7.6c-.036.036-2.01 1.889-4.62 1.889h-.6v7.06c0 3.207 2.998 4.562 5.292 5.347l.353.105.388-.105c2.258-.748 5.257-2.14 5.257-5.311V9.488h-.601c-2.61 0-4.624-1.853-4.656-1.89zm-.218 13.584l-.176.073-.14-.036c-2.258-.749-4.796-1.962-4.796-4.668v-6.316c2.61-.036 4.588-1.71 4.94-2.067.425.393 2.362 1.999 4.941 2.067v6.311h-.005c0 2.71-2.537 3.92-4.764 4.636zm12.527-11.34a.71.71 0 00-.704.713.71.71 0 00.704.712.71.71 0 00.705-.712.71.71 0 00-.705-.712zm-16.121 5.6l2.01 2.03 4.831-4.882a.347.347 0 000-.497.339.339 0 00-.492 0l-4.34 4.385-1.517-1.534a.338.338 0 00-.492 0 .347.347 0 000 .498z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M15.296 2c-1.594 0-3.108.19-4.264.538-1.346.404-2.146 1.007-2.374 1.79v.003c-.042.153-.065.31-.065.47v2.868a2.747 2.747 0 01-.087-.006 2.005 2.005 0 00-.138-.006c-1.529 0-2.417.586-3.2 1.104l-.015.01c-.798.528-1.43.945-2.635.756A.42.42 0 002 9.93v.022c0 .4-.005 4.859.339 6.813.455 2.63 5.625 5.091 5.847 5.193a.41.41 0 00.356 0l.015-.007c.177-.086 1.374-.664 2.643-1.52 1.139.315 2.58.495 4.094.495 1.588 0 3.105-.191 4.267-.538 1.62-.487 2.439-1.25 2.439-2.265V4.803c0-1.016-.82-1.779-2.44-2.265C18.409 2.19 16.89 2 15.297 2zm4.025 17.592c-1.087.324-2.516.5-4.027.5-1.159 0-2.266-.105-3.214-.3 1.121-.875 2.123-1.933 2.314-3.023.026-.148.046-.296.066-.444l.136.006c.234.01.468.02.709.02 1.594 0 3.108-.191 4.264-.538.635-.19 1.176-.456 1.597-.769v3.077c.003.609-.62 1.1-1.845 1.47zM2.985 15.033h4.916v5.85c-1.645-.87-4.463-2.663-4.742-4.26a16.56 16.56 0 01-.174-1.59zm2.642-5.575c.657-.432 1.28-.842 2.274-.941v5.685h-4.97a88.904 88.904 0 01-.097-3.802c1.256.057 2.038-.444 2.793-.942zm5.417-2.93c1.155.347 2.67.537 4.264.537 1.594 0 3.108-.19 4.264-.538.677-.202 1.204-.45 1.597-.745V9.19c-.2.367-.772.854-1.836 1.17-1.079.324-2.508.503-4.022.503-.131 0-.26-.005-.388-.01l-.193-.007c.003-.518.003-.865.003-.916a.423.423 0 00-.16-.313.445.445 0 00-.347-.091c-1.224.188-1.859-.23-2.664-.763-.58-.384-1.221-.805-2.135-.996V5.765c.398.304.936.558 1.617.762zm.225-3.193c1.081-.322 2.507-.501 4.025-.501 1.517 0 2.946.179 4.025.5 1.053.316 1.656.726 1.807 1.224a.07.07 0 01-.006.009.053.053 0 00-.005.008c-.177.461-.794.86-1.788 1.159-1.079.321-2.508.5-4.022.5-1.514 0-2.943-.179-4.022-.5-1.02-.308-1.643-.718-1.802-1.196 0-.003-.003-.005-.006-.008.162-.475.777-.888 1.794-1.195zm3.642 8.35c.132.005.264.01.397.01 1.594 0 3.108-.19 4.264-.538.638-.19 1.176-.455 1.597-.765v3.455c-.2.367-.777.85-1.836 1.169-1.079.324-2.508.5-4.022.5-.186 0-.366-.006-.545-.014l-.213-.008c.097-1.206.143-2.683.163-3.816l.195.007zM8.735 8.511c1.045.082 1.691.504 2.366.95l.002.002c.745.492 1.52 1.003 2.79.932 0 .173-.002.396-.005.648v.114l-.01.031a.248.248 0 00-.01.046.308.308 0 00.012.096l.004.018c-.01.953-.04 1.904-.085 2.854H8.735V8.511zm0 6.522h5.013c-.02.268-.04.524-.066.763a.317.317 0 01-.01.032.203.203 0 00-.01.039c0 .01.002.02.003.029a.155.155 0 01.003.025 10.72 10.72 0 01-.094.703c-.284 1.625-3.213 3.457-4.839 4.305v-5.896z"
                />
            </svg>
        );
    }
};

export default IconDataShieldLight;
