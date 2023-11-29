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

const IconPacifierLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="m18.321 10.3.017.022c.415.538.636 1.252.633 2.143 0 .893-.221 1.605-.636 2.143-.007.007-.012.015-.018.024-.006.008-.011.016-.018.023a1.715 1.715 0 0 1-.154.168.685.685 0 0 1-.151.127c-.286.249-.611.456-.961.63l-.017 1.266c-.02 2.409-1.347 4.98-5.003 4.991h-.022c-3.656-.014-4.98-2.582-5.003-4.991l-.017-1.266a4.574 4.574 0 0 1-.963-.63c-.062-.037-.107-.082-.152-.127l-.04-.04c-.04-.041-.073-.076-.114-.128-.007-.007-.012-.015-.018-.023a.152.152 0 0 0-.018-.024c-.415-.538-.636-1.252-.636-2.143 0-.894.221-1.605.636-2.143l.017-.022a.036.036 0 0 0 .01-.014 1.34 1.34 0 0 1 .114-.131l.035-.037c.042-.042.107-.104.163-.14.767-.661 1.762-1.054 2.93-1.152-.499-.67-.768-1.552-.768-2.655 0-1.3.35-2.311 1.04-3.009.66-.666 1.596-1.005 2.781-1.01h.022c1.185.002 2.12.344 2.782 1.01.689.698 1.04 1.712 1.04 3.009 0 1.1-.267 1.986-.766 2.655 1.168.098 2.163.49 2.928 1.152.058.036.123.098.165.14.062.061.087.086.14.154.007.007.009.01.011.014.002.003.004.007.011.014ZM9.772 3.765c-.53.535-.795 1.344-.804 2.406 0 .983.238 1.737.692 2.266a.98.98 0 0 1 .04.054c.02.029.04.057.064.08.01.012.02.024.028.036l.022.029c.053.04.086.08.124.123l.047.053c.01.008.014.018.02.028a.084.084 0 0 0 .014.023c.098.145.064.361.045.417l-.146.364c-.09.289-.137.614-.137.992 0 .781.196 1.375.58 1.762.37.372.921.557 1.635.56.717-.003 1.27-.188 1.636-.56.387-.387.58-.98.58-1.762 0-.375-.047-.703-.134-.992l-.146-.364c-.02-.056-.053-.272.045-.417l.01-.018a.156.156 0 0 1 .023-.033l.042-.046c.04-.046.076-.086.13-.13l.025-.033a.408.408 0 0 1 .025-.032c.022-.022.04-.048.059-.075.014-.02.028-.04.044-.059.451-.53.69-1.283.69-2.266 0-1.065-.264-1.871-.793-2.406-.507-.513-1.258-.773-2.23-.773-.975.002-1.726.263-2.23.773Zm7.961 10.291c.283-.386.434-.913.437-1.588 0-.675-.151-1.205-.434-1.591-.672-.712-1.644-1.11-2.818-1.194.064.295.11.606.11.956 0 1.016-.278 1.815-.827 2.367-.521.526-1.258.79-2.185.795v.003h-.022V13.8c-.93-.005-1.664-.272-2.185-.795-.55-.55-.827-1.348-.827-2.367 0-.348.045-.661.11-.956-1.171.084-2.143.482-2.816 1.194-.282.386-.434.913-.434 1.59 0 .679.152 1.205.435 1.592.285.3.635.535 1.016.725.021.008.048.024.073.04a.377.377 0 0 0 .056.03c.075.029.126.054.189.084l.1.048c.47.17 1.002.258 1.574.283.017 0 .033.001.048.003a2.46 2.46 0 0 1 .193.014h4.958c.046 0 .09-.005.133-.01.035-.005.071-.009.108-.01.571-.025 1.103-.112 1.574-.283.114-.043.218-.098.323-.152l.094-.05a3.65 3.65 0 0 0 1.017-.725Zm-5.731 4.728c1.975-.008 2.204-1.526 2.207-2.185l.006-.473H9.786l.006.473c.006.659.235 2.177 2.21 2.185Zm0 2.21c3.868-.005 4.199-3.182 4.207-4.157l.017-.946a6.22 6.22 0 0 1-1.199.213l-.005.504c-.012 1.45-.81 3.003-3.006 3.014v.003h-.022v-.003c-2.194-.011-2.992-1.563-3.006-3.014l-.008-.504a5.95 5.95 0 0 1-1.197-.213l.012.946c.008.975.339 4.149 4.207 4.157Z"
            />
        </svg>
    );
};

export default IconPacifierLight;
