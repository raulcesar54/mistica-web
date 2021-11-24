/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconChemistryLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M20.962 20.887a.181.181 0 00-.009-.185l-5.79-7.652c-.896.263-2.058.406-3.28.406-1.137 0-2.22-.126-3.08-.356l-5.785 7.737c-.009.025 0 .067.017.095.016.034.05.067.103.067h17.633a.222.222 0 00.19-.112zm-11.06-9.269l-.548.737c1.549.33 3.759.314 5.25-.042l-.525-.695a.412.412 0 01-.086-.246V2.999H9.99v7.356c.008.034 0 .067 0 .11v.904c0 .09-.034.182-.087.25zm11.757 8.6c.233.356.241.745.05 1.081a1.06 1.06 0 01-.938.54H3.138a.975.975 0 01-.851-.49.936.936 0 01.017-.98l6.826-9.14v-.762a.237.237 0 010-.11V3.003h-.997A.434.434 0 017.7 2.58c0-.238.196-.423.432-.423h7.745c.232 0 .431.185.431.423 0 .23-.199.423-.431.423h-1.025v8.227l6.806 8.989zm-7.305-.882c.235-.006 1.182-.093 1.182-1.233 0-1.137-.944-1.232-1.185-1.238h-.12c-.25.003-1.171.087-1.171 1.232 0 1.146.933 1.236 1.182 1.239h.112zm.017-3.317c1.005.022 2.025.678 2.025 2.084 0 1.409-1.017 2.059-2.025 2.076h-.143c-1.011-.014-2.03-.664-2.03-2.084 0-1.423 1.016-2.068 2.027-2.076h.146zm-4.462.703c.131-.003.658-.05.658-.686 0-.63-.524-.684-.661-.686H9.84c-.137.002-.652.05-.652.686s.52.686.658.689h.022c.014 0 .028-.003.04-.003zm.016-2.216c.723.017 1.499.507 1.499 1.533 0 1.033-.779 1.518-1.501 1.529h-.09c-.726-.011-1.504-.496-1.504-1.535 0-1.042.781-1.524 1.504-1.53h.025l.067.003z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconChemistryLight;
