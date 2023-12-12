'use client';
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

const IconRocketRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m21.151 3.887.634-.634a.734.734 0 0 0-1.038-1.038l-.615.615a3.686 3.686 0 0 0-2.085-.62 3.76 3.76 0 0 0-2.621 1.109L9.555 9.186 4.947 7.983l-2.921 2.391 3.095 3.241-.756.757 5.265 5.265.714-.714 3.057 3.04 2.616-2.88-1.202-4.636 5.871-5.872a3.727 3.727 0 0 0 .465-4.688Zm-4.105 4.35c.705 0 1.282-.573 1.282-1.283 0-.704-.577-1.282-1.282-1.282-.704 0-1.282.578-1.282 1.282 0 .705.578 1.283 1.282 1.283ZM6.16 12.577l-1.977-2.071 1.117-.912 3.053.794-2.193 2.19Zm5.223 5.308 2.23-2.236.79 3.035-1.052 1.155-1.968-1.954Zm8.261-13.528a2.248 2.248 0 0 1 0 3.18L9.63 17.561l-3.19-3.19L16.465 4.358a2.28 2.28 0 0 1 1.597-.677 2.17 2.17 0 0 1 1.366.456l.216.22ZM5.463 17.758a.55.55 0 1 1 .78.78L2.943 21.84a.547.547 0 0 1-.39.16.55.55 0 0 1-.39-.94l3.302-3.302Zm-2.911.573c.14 0 .282-.051.39-.16l1.465-1.47a.55.55 0 0 0 0-.78.55.55 0 0 0-.78 0l-1.465 1.466a.55.55 0 0 0 0 .78.533.533 0 0 0 .39.164Zm3.283 2.73L7.3 19.595a.55.55 0 0 1 .78 0 .55.55 0 0 1 0 .78L6.615 21.84a.547.547 0 0 1-.39.16.55.55 0 0 1-.39-.94Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.88 14.492c.072-.068.145-.138.219-.214 3.398-3.417 3.905-8.966 3.706-10.602a1.715 1.715 0 0 0-1.485-1.482c-1.933-.221-7.26.434-10.554 3.748-.066.066-.137.141-.209.218l-.077.082a3.8 3.8 0 0 0-2.356-.558C5.718 5.82 4.376 6.71 3.152 8.306c-.32.378-.297.743-.252.925.165.706 1.009 1.064 2.177 1.557.285.12.568.247.851.375l-.288.578c-.398.882-.773 1.969-.174 2.52l4.32 4.345c.204.204.476.308.823.308.437 0 .997-.162 1.7-.49l.555-.272c.148.32.291.647.425.972l.009.02c.488 1.163.841 2.004 1.54 2.168a1.016 1.016 0 0 0 .894-.235c1.614-1.252 2.499-2.603 2.63-4.014a3.86 3.86 0 0 0-.607-2.451c.04-.04.082-.08.125-.12m2.292-11.068a.476.476 0 0 1 .412.406c.092.748-.006 2.527-.563 4.488L15.718 3.99c1.927-.552 3.678-.653 4.454-.566m-2.944 9.98c-.16.16-.303.303-.457.44l-.622.538c-1.187 1.03-2.529 1.972-3.683 2.585l-.686.334c-.745.35-1.096.38-1.177.372L6.39 13.438c0-.107.034-.44.362-1.168l.333-.672c.633-1.183 1.594-2.575 2.569-3.71l.537-.604c.14-.163.303-.325.443-.465 1.09-1.098 2.434-1.86 3.779-2.387l5.168 5.196c-.518 1.345-1.272 2.69-2.353 3.776m-2.706-6.143c1.26 0 2.014.76 2.014 2.026 0 1.269-.754 2.025-2.014 2.025-1.26 0-2.014-.756-2.014-2.025 0-1.266.754-2.026 2.014-2.026m0 2.816c.58 0 .784-.208.784-.788 0-.582-.204-.787-.784-.787-.577 0-.784.208-.784.787 0 .58.207.788.784.788m-8.227 7.602c-.244-.247-.462-.37-.678-.37-.218 0-.434.123-.68.37-.502.504-1.295 1.496-1.5 2.871 1.432-.219 2.452-1.095 2.858-1.504.49-.493.49-.874 0-1.367m-2.23-.874c.972-.975 2.132-.978 3.101 0 .97.977.97 2.143 0 3.117-.574.578-2.151 1.92-4.395 1.92a.619.619 0 0 1-.616-.62c0-2.173 1.196-3.7 1.91-4.417m13.068.165c-.104 1.014-.782 2.028-2.054 3.048-.19-.266-.448-.882-.637-1.333l-.018-.043c-.151-.36-.311-.73-.485-1.098a23.91 23.91 0 0 0 2.877-2.109c.177.314.387.852.317 1.535M6.536 10.082c-.328-.154-.658-.3-.983-.437-.451-.19-1.095-.465-1.37-.658.994-1.266 2.014-1.964 3.03-2.067.611-.06 1.099.109 1.421.269a23.63 23.63 0 0 0-2.098 2.893"
                />
            </svg>
        );
    }
};

export default IconRocketRegular;
