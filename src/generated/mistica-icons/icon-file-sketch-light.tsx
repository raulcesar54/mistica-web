/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconFileSketchLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M19.352 7.911a.39.39 0 01.03.163v12.563c0 .652-.557 1.204-1.22 1.204H5.835c-.65 0-1.221-.563-1.221-1.204V3.36c0-.63.583-1.205 1.221-1.205h7.502c.179 0 .353.07.479.193l5.358 5.236c.095.09.146.204.177.327zm-.787 12.726V8.757H16.02c-.972 0-1.81-.316-2.42-.916-.616-.602-.944-1.428-.944-2.383V2.984H5.839c-.182 0-.4.205-.4.378v17.275c0 .188.201.378.4.378h12.325c.207 0 .4-.185.4-.378zm-5.09-17.474v2.292c0 .728.24 1.347.695 1.79.456.445 1.098.683 1.851.683h2.33l-4.876-4.765zm2.386 9.813h-1.109l.448-1.3.662 1.3zm-1.395.829h1.261l-2.412 3.347 1.152-3.347zm-6.187 0h1.3l1.165 3.39-2.465-3.39zm1.734-1.258l-.518-1.504H11.2l-1.187 1.504zm4.017.006l-1.205-1.51h1.726l-.521 1.51zm-3.309.423l1.289-1.633 1.305 1.633h-2.594zm-.277.829h3.157l-1.58 4.585-1.577-4.585zM8.84 11.662l.454 1.314H8.15l.69-1.314zm8.1 1.728a.412.412 0 00-.041-.179c0-.003 0-.008-.003-.008L15.49 10.44l-.006-.007a.027.027 0 01-.005-.007.346.346 0 00-.118-.13.3.3 0 00-.05-.03.19.19 0 01-.02-.013.104.104 0 00-.03-.018.321.321 0 00-.083-.012l-.021-.002a.039.039 0 01-.016-.004.039.039 0 00-.015-.004H8.918a.039.039 0 00-.016.004.042.042 0 01-.015.004l-.022.002a.322.322 0 00-.082.012c-.012.004-.02.01-.03.016a.129.129 0 01-.018.012.214.214 0 00-.039.024l-.011.007a.4.4 0 00-.122.132l-.007.008-1.448 2.762-.001.005-.002.006a.447.447 0 00-.045.182l.002.009.001.008c0 .011.003.02.005.029a.168.168 0 01.004.013c.008.059.025.11.056.157l.005.014c.002.005.003.01.006.014l4.552 6.258a.168.168 0 00.043.04.33.33 0 01.024.019l.016.014a.386.386 0 00.247.097.41.41 0 00.213-.07.379.379 0 00.05-.044l.024-.019a.168.168 0 00.044-.04l4.51-6.258c.004-.005.005-.01.007-.016a.02.02 0 01.004-.012.393.393 0 00.056-.151l.003-.013a.122.122 0 00.005-.032c0-.003 0-.005.002-.008v-.009z"
            />
        </svg>
    );
};

export default IconFileSketchLight;
