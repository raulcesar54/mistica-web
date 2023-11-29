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

const IconWinnerLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M18.951 12.715a.705.705 0 0 1-.696.713.705.705 0 0 1-.696-.713c0-.393.312-.713.696-.713.384 0 .696.32.696.713Zm.67 6.292a.357.357 0 0 1-.375.123l-3.186-.968-.955 3.573a.352.352 0 0 1-.29.26c-.018 0-.031.005-.045.005a.345.345 0 0 1-.299-.174l-2.557-4.423-2.418 4.414a.346.346 0 0 1-.303.183c-.014 0-.027 0-.045-.005a.357.357 0 0 1-.294-.26l-.95-3.573-3.147.964a.34.34 0 0 1-.37-.119.359.359 0 0 1-.031-.397l2.213-4.08a7.55 7.55 0 0 1-1.91-5.032C4.66 5.363 7.943 2 11.981 2c4.039 0 7.322 3.363 7.322 7.498 0 .375-.026.754-.08 1.124a.35.35 0 0 1-.397.302.356.356 0 0 1-.294-.407c.049-.333.075-.676.075-1.019 0-3.737-2.971-6.78-6.621-6.78-3.65 0-6.622 3.043-6.622 6.78 0 3.738 2.967 6.79 6.617 6.79a6.508 6.508 0 0 0 4.685-1.987c.005-.005.112-.128.273-.128.102 0 .187.013.258.118l2.45 4.323a.352.352 0 0 1-.027.393Zm-8.269-2.038a7.174 7.174 0 0 1-4.27-1.91l-1.7 3.135 2.664-.818a.325.325 0 0 1 .268.032c.08.045.142.123.165.22l.82 3.083 2.053-3.742Zm7.255 1.22-1.749-3.102a7.171 7.171 0 0 1-4.381 1.891l2.173 3.756.83-3.111a.385.385 0 0 1 .165-.22.343.343 0 0 1 .267-.032l2.695.818Zm-6.278-3.866c0-2.522 1.794-4.286 4.36-4.286.192 0 .348-.16.348-.356a.353.353 0 0 0-.348-.356c-2.445 0-4.36-2.038-4.36-4.643a.353.353 0 0 0-.348-.356.353.353 0 0 0-.348.356c0 2.6-1.914 4.643-4.359 4.643a.353.353 0 0 0-.348.356c0 .197.156.357.348.357 2.566 0 4.36 1.763 4.36 4.285 0 .197.155.357.347.357.192 0 .348-.16.348-.357Zm-.348-7.649c.5 1.367 1.508 2.44 2.794 2.98a4.7 4.7 0 0 0-2.794 2.737 4.699 4.699 0 0 0-2.793-2.737c1.285-.54 2.294-1.613 2.793-2.98Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20.42 19.714a.791.791 0 0 0 .11-.846l-2.821-6.028c.728-1.03 1.123-2.417 1.123-4.185 0-4.428-2.431-6.504-6.6-6.504-4.168 0-6.596 2.073-6.596 6.507 0 1.527.294 2.765.843 3.742l-3.025 6.471a.802.802 0 0 0 .109.846c.199.241.513.345.868.263l2.205-.818.854 2.247a.81.81 0 0 0 .723.428h.022a.823.823 0 0 0 .723-.47l2.91-6.227.08.003c.055.003.11.005.167.005l2.907 6.219c.132.28.412.462.723.468h.023c.305 0 .58-.163.745-.477l.81-2.187 2.282.823c.303.07.62-.039.815-.28ZM12.232 2.978c3.877 0 5.762 1.857 5.762 5.677 0 3.818-1.882 5.673-5.761 5.673-3.877 0-5.76-1.857-5.76-5.675 0-3.818 1.886-5.675 5.76-5.675Zm-1.254 12.1L8.252 21.07l-.832-2.199a.83.83 0 0 0-1.05-.473l-2.154.818 2.81-6.02c.91 1.07 2.249 1.686 3.952 1.882Zm8.862 4.124-2.227-.807a.83.83 0 0 0-1.053.476l-.776 2.151-2.756-5.896c1.726-.12 3.11-.641 4.092-1.588l2.72 5.664ZM9.874 8.078a.17.17 0 0 1 .154-.126l1.19-.179a.451.451 0 0 0 .323-.24l.53-1.102a.202.202 0 0 1 .083-.084.19.19 0 0 1 .252.084l.524 1.087c.062.135.185.23.333.255l1.185.177c.07.01.13.061.152.131a.21.21 0 0 1-.051.222l-.854.854c-.101.1-.146.244-.126.384l.201 1.21a.202.202 0 0 1-.08.207.176.176 0 0 1-.189.011l-1.044-.563a.44.44 0 0 0-.429-.008l-1.056.571a.175.175 0 0 1-.188-.011.207.207 0 0 1-.084-.21l.202-1.202a.46.46 0 0 0-.12-.39L9.923 8.3a.208.208 0 0 1-.05-.222Zm-.55.802.718.717s-.17 1.016-.168 1.02a1.026 1.026 0 0 0 1.499 1.078l.86-.468.868.468a1.03 1.03 0 0 0 1.07-.062c.33-.23.493-.622.426-1.017L14.426 9.6l.717-.72c.28-.28.372-.686.246-1.061a1.02 1.02 0 0 0-.82-.69l-.972-.145-.44-.913a1.024 1.024 0 0 0-1.849 0l-.437.913-.972.146a1.032 1.032 0 0 0-.574 1.75Z"
                />
            </svg>
        );
    }
};

export default IconWinnerLight;
