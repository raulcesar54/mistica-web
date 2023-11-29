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

const IconOfferPercentRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m19.147 12 2.19 2.383a.711.711 0 0 1 .156.706.72.72 0 0 1-.54.481l-3.17.637.371 3.217a.703.703 0 0 1-.288.66.722.722 0 0 1-.718.074L14.21 18.81l-1.587 2.823a.711.711 0 0 1-1.245 0L9.792 18.81l-2.937 1.348a.721.721 0 0 1-.718-.074.723.723 0 0 1-.288-.66l.375-3.217-3.17-.637a.706.706 0 0 1-.54-.481.724.724 0 0 1 .156-.706L4.86 12 2.67 9.617a.711.711 0 0 1-.156-.706.72.72 0 0 1 .54-.481l3.17-.637-.375-3.217a.703.703 0 0 1 .288-.66.712.712 0 0 1 .718-.074L9.792 5.19l1.587-2.823a.712.712 0 0 1 1.245 0L14.21 5.19l2.937-1.348a.713.713 0 0 1 1.006.733l-.37 3.218 3.17.637c.256.05.461.234.54.481a.724.724 0 0 1-.156.706L19.147 12Zm-2.292 2.933 2.57-.513-1.774-1.934a.72.72 0 0 1 0-.972l1.775-1.934-2.571-.518a.717.717 0 0 1-.567-.783l.302-2.608-2.384 1.095a.712.712 0 0 1-.92-.298l-1.284-2.287-1.286 2.283a.715.715 0 0 1-.92.298L7.414 5.666l.302 2.608a.71.71 0 0 1-.567.784l-2.57.518 1.774 1.934a.72.72 0 0 1 0 .971l-1.775 1.934 2.571.518a.717.717 0 0 1 .567.784l-.302 2.607 2.384-1.095a.708.708 0 0 1 .92.303l1.285 2.287 1.285-2.292a.715.715 0 0 1 .92-.298l2.383 1.096-.302-2.608a.71.71 0 0 1 .567-.784Zm-2.621 1.004a.54.54 0 0 0 .005-1.077h-2.951c.06-.17.091-.348.091-.536V12.71h1.61a.534.534 0 0 0 .536-.536.534.534 0 0 0-.535-.536h-1.61v-1.43c0-.591.48-1.072 1.07-1.072.247 0 .48.082.672.238a.536.536 0 1 0 .677-.834 2.155 2.155 0 0 0-1.35-.477 2.15 2.15 0 0 0-2.144 2.15v1.43h-.179a.533.533 0 0 0-.535.536c0 .298.238.536.535.536h.174v1.613a.528.528 0 0 1-.535.536.534.534 0 0 0-.536.536c0 .298.238.537.536.537h4.469Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M8.044 16.335a.562.562 0 0 0 1.003.345l6.781-8.664a.561.561 0 0 0-.882-.692L8.164 15.99a.549.549 0 0 0-.12.344ZM7.786 9.268c0 1.176.703 1.877 1.877 1.877 1.176 0 1.877-.7 1.877-1.877s-.7-1.877-1.877-1.877-1.877.7-1.877 1.877Zm1.877-.754c.557 0 .756.196.756.757 0 .56-.199.756-.756.756-.558 0-.756-.199-.756-.756 0-.558.198-.757.756-.757ZM12.45 14.73c0 1.176.703 1.877 1.877 1.877 1.173 0 1.876-.7 1.876-1.877s-.7-1.877-1.876-1.877c-1.177 0-1.877.7-1.877 1.877Zm1.877-.754c.557 0 .756.196.756.757 0 .56-.199.756-.756.756-.558 0-.757-.196-.757-.756s.2-.757.757-.757Z"
                />
                <path
                    fill={fillColor}
                    d="M11.999 21.808c-.535 0-.87-.43-.98-.57-.194-.25-.364-.558-.527-.855l-.003-.005c-.137-.25-.385-.7-.524-.802-.177.014-.634.29-.89.444l-.007.005c-.672.406-1.366.825-1.974.473-.616-.356-.6-1.174-.582-1.967v-.01c.005-.294.016-.818-.056-.976-.158-.072-.678-.062-.974-.056H5.47c-.79.017-1.608.034-1.967-.583-.346-.605.07-1.296.47-1.965l.006-.01c.154-.254.435-.72.449-.896-.103-.139-.552-.386-.802-.524l-.005-.002c-.297-.163-.605-.334-.854-.527-.572-.445-.572-.849-.572-.98 0-.535.43-.871.571-.98.25-.194.558-.365.855-.527l.005-.003c.25-.138.699-.385.802-.524-.014-.178-.29-.634-.445-.89L3.98 9.07c-.406-.671-.826-1.366-.473-1.973.356-.616 1.174-.6 1.966-.583h.011c.294.006.815.016.973-.056.071-.157.061-.677.056-.974v-.012c-.017-.79-.034-1.608.582-1.966.608-.353 1.302.067 1.974.472l.001.001c.255.154.72.434.896.448.14-.103.387-.551.524-.802l.003-.004c.162-.297.333-.605.527-.855.445-.571.848-.571.98-.571.535 0 .87.43.98.571.194.25.365.558.527.855l.003.004c.137.25.384.7.524.802.177-.013.634-.29.89-.444l.007-.005c.672-.405 1.366-.825 1.974-.472.611.353.597 1.16.583 1.947v.03c-.006.294-.016.815.055.972.158.072.678.062.974.057h.012c.79-.017 1.608-.034 1.967.582.352.608-.067 1.302-.473 1.974-.155.256-.435.72-.449.897.103.14.552.386.802.524l.005.003c.297.162.605.333.854.526.572.446.572.85.572.98 0 .536-.431.872-.571.981-.25.193-.558.364-.855.527l-.005.002c-.25.138-.699.385-.802.525.014.177.29.633.445.89l.004.007c.406.672.826 1.366.473 1.974-.353.61-1.16.596-1.947.583h-.03c-.293-.007-.818-.017-.976.055-.071.158-.062.678-.056.974v.012c.017.79.034 1.608-.582 1.967-.605.351-1.296-.064-1.966-.465l-.009-.006c-.255-.154-.72-.434-.896-.448-.14.103-.387.552-.524.802l-.003.005c-.162.297-.333.605-.527.854-.445.571-.848.571-.98.571Zm-2.014-3.355c.092 0 .185.01.274.036.552.148.874.734 1.213 1.353l.008.014c.136.246.368.666.516.804.147-.133.367-.533.504-.781l.028-.052c.339-.614.657-1.19 1.205-1.338.566-.15 1.174.215 1.762.57l.035.02c.227.137.597.359.791.413.053-.205.045-.672.04-.939l-.001-.018c-.014-.71-.027-1.377.381-1.785.409-.409 1.076-.396 1.786-.382h.018l.017.001c.269.006.721.015.922-.04-.054-.194-.276-.563-.413-.79l-.016-.027c-.358-.592-.726-1.202-.574-1.77.148-.553.734-.875 1.353-1.214l.014-.007c.245-.136.666-.368.804-.517-.134-.146-.533-.366-.782-.503l-.051-.029c-.614-.338-1.191-.657-1.338-1.204-.15-.566.215-1.174.57-1.763l.004-.008.016-.026c.137-.228.359-.598.413-.791-.205-.054-.673-.045-.939-.04h-.018c-.71.015-1.377.028-1.786-.38-.408-.409-.395-1.076-.381-1.786V5.438c.006-.268.016-.72-.039-.92-.194.053-.564.275-.791.412l-.027.016c-.59.358-1.201.725-1.77.574-.552-.149-.874-.734-1.213-1.353l-.008-.014c-.135-.246-.367-.667-.516-.804-.146.133-.367.533-.504.781l-.028.052c-.338.613-.657 1.19-1.205 1.338-.566.15-1.173-.215-1.762-.57l-.008-.004-.027-.016c-.227-.137-.597-.36-.79-.413-.054.205-.046.672-.04.938v.019c.014.71.027 1.377-.38 1.785-.41.409-1.076.396-1.787.382h-.018L5.43 7.64c-.269-.006-.721-.015-.921.04.054.193.276.563.412.79l.016.027c.359.591.726 1.202.575 1.77-.149.553-.734.875-1.353 1.214l-.025.013c-.247.136-.655.361-.793.51.133.147.533.367.781.504l.052.029c.613.338 1.19.657 1.338 1.204.15.566-.216 1.174-.57 1.763l-.005.008-.016.026c-.136.228-.358.598-.412.791.204.054.672.045.938.04h.018c.71-.015 1.378-.028 1.786.38.408.409.395 1.076.381 1.786v.036c-.006.268-.016.72.04.92.193-.053.563-.275.79-.412l.027-.016c.499-.302 1.009-.61 1.496-.61Z"
                />
            </svg>
        );
    }
};

export default IconOfferPercentRegular;
