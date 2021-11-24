/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconUserSupportRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M12.36 2C17.672 2 22 6.543 22 12.118s-4.328 10.118-9.64 10.118c-1.348 0-2.656-.307-3.892-.84L2.9 22.962C2.864 23 2.792 23 2.72 23a.697.697 0 01-.508-.227.754.754 0 01-.184-.726l1.528-5.844a10.445 10.445 0 01-.836-4.085C2.72 6.543 7.048 2 12.36 2zm-.004 1.528c-4.512 0-8.184 3.858-8.184 8.59 0 1.297.256 2.519.8 3.665.072.151.072.344.036.533L3.736 21.17l4.58-1.302c.184-.038.364-.038.508.038 1.092.533 2.292.84 3.492.84 4.548-.038 8.22-3.892 8.22-8.628 0-4.736-3.672-8.59-8.18-8.59zm-.508 12.486c.402 0 .728.342.728.764s-.326.764-.728.764c-.402 0-.728-.342-.728-.764s.326-.764.728-.764zm.288-9.467a3.01 3.01 0 012.436 1.26c.692.952.8 2.67-.108 3.627l-.98 1.028c-.508.533-.8 1.26-.8 2.062-.072.457-.4.801-.8.801s-.728-.344-.728-.764c0-1.184.436-2.292 1.236-3.132l.98-1.028c.364-.382.292-1.222 0-1.642-.292-.42-.8-.688-1.272-.688h-.184c-.508 0-.98.306-1.236.764-.216.382-.656.495-.98.269a.745.745 0 01-.256-1.029 2.868 2.868 0 012.508-1.528h.184z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M11.006 15.927c1.339 0 2.372.359 3.075 1.067.703.71 1.06 1.745 1.06 3.09v1.04c0 .31-.25.56-.561.56H2.56a.562.562 0 01-.56-.56v-1.04c0-1.345.356-2.384 1.059-3.09.703-.705 1.74-1.067 3.075-1.067h4.872zm.002 1.12H6.134c-1.028 0-1.795.247-2.28.737-.484.49-.734 1.264-.734 2.3v.479h10.9v-.479c0-1.036-.247-1.812-.731-2.3-.485-.487-1.253-.736-2.28-.736zM8.571 7.63c1.216 0 2.163.353 2.818 1.045.617.653.93 1.563.93 2.703s-.313 2.05-.93 2.703c-.655.698-1.605 1.048-2.818 1.048-1.215 0-2.162-.35-2.817-1.045-.62-.653-.93-1.563-.93-2.703s.313-2.05.93-2.703C6.409 7.983 7.356 7.63 8.57 7.63zm0 1.12c-1.745 0-2.627.886-2.627 2.628s.885 2.628 2.627 2.628c1.743 0 2.628-.886 2.628-2.628s-.885-2.627-2.628-2.627zM20.078 2c.891 0 1.614.723 1.614 1.613v3.902c0 .891-.723 1.614-1.614 1.614H16.79c-.314.496-.978 1.54-1.11 1.74-.29.445-.705.714-1.08.714a.754.754 0 01-.113-.009c-.414-.061-.75-.462-.75-.888v-1.56h-.11c-.87 0-1.529-.695-1.529-1.613v-3.9c0-.89.723-1.613 1.613-1.613h6.367zm0 1.12h-6.367a.494.494 0 00-.493.493v3.902c0 .247.127.493.41.493h.669c.308 0 .56.253.56.56v1.51c.328-.51 1.143-1.795 1.151-1.81a.56.56 0 01.474-.26h3.596a.494.494 0 00.493-.493V3.613a.494.494 0 00-.493-.493zm-3.05 3.648a.44.44 0 110 .88.44.44 0 010-.88zm.003-3.295c.72 0 1.201.6 1.201 1.157 0 .476-.257.639-.462.846-.087.087-.322.244-.322.434v.171a.417.417 0 01-.409.429c-.005.003-.008.003-.011.003a.418.418 0 01-.417-.423v-.177c0-.45.294-.711.49-.902.078-.075.272-.199.272-.378 0-.115-.068-.364-.345-.364-.277 0-.417.224-.417.358a.418.418 0 01-.835 0c0-.7.487-1.154 1.255-1.154z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconUserSupportRegular;
