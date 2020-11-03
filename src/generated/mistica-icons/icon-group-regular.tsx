/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant, useTheme} from '../..';

type Props = {
    color?: string;
    size?: number;
};

const IconGroupRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M10.107 6.11c-.41.412-.614 1.084-.614 1.998 0 .91.208 1.58.611 1.988.395.398 1.025.597 1.871.597.846 0 1.48-.202 1.877-.597.409-.409.616-1.078.616-1.988 0-.914-.207-1.583-.619-1.995-.398-.4-1.028-.602-1.874-.602-.843 0-1.47.202-1.868.6zm1.87 5.894c-1.184 0-2.106-.325-2.741-.964-.664-.664-.998-1.652-.998-2.932 0-1.283.337-2.27.998-2.939.638-.644 1.56-.969 2.745-.969 1.182 0 2.106.328 2.745.97.664.669 1.003 1.657 1.003 2.938 0 1.28-.337 2.266-1.003 2.932-.644.639-1.566.964-2.748.964zM5.67 10.29c-.151.15-.174.504-.174.7 0 .193.023.543.171.695.112.112.345.17.661.17.317 0 .552-.061.664-.173.151-.151.174-.502.174-.695 0-.196-.023-.546-.177-.7-.112-.112-.347-.174-.66-.174-.317.003-.55.065-.66.177zm.658 2.876c-.661 0-1.176-.179-1.532-.537-.37-.373-.558-.925-.558-1.64 0-.716.188-1.268.558-1.64.356-.36.871-.541 1.532-.541s1.177.182 1.535.54c.373.376.56.928.56 1.645 0 .714-.187 1.266-.56 1.641-.358.353-.877.532-1.535.532zm10.68-2.823c-.145.146-.165.482-.165.67 0 .184.023.52.166.663.103.104.336.165.638.165.3 0 .53-.058.633-.162.104-.104.163-.347.163-.667 0-.187-.022-.526-.165-.672-.104-.104-.33-.162-.63-.162-.309-.003-.533.056-.64.165zm-.873 2.28c-.367-.364-.552-.908-.552-1.61 0-.707.185-1.247.552-1.614.35-.353.857-.532 1.51-.532.647 0 1.156.179 1.507.532.36.367.546.91.546 1.613s-.185 1.247-.55 1.611c-.35.353-.856.53-1.506.53-.647 0-1.154-.18-1.507-.53zm4.454 4.74v-.286c0-.499-.14-.916-.407-1.208-.294-.319-.753-.487-1.327-.487l-.824-.003c.314.569.493 1.244.56 1.983h1.998zm-3.216 1.112v-.536c0-.983-.26-1.8-.75-2.366-.662-.76-1.65-.92-2.365-.92H9.692c-.714 0-1.7.16-2.358.917-.488.563-.745 1.38-.745 2.367v.535c0 .003 10.784.003 10.784.003zM5.37 17.379c.065-.74.241-1.414.552-1.986l-.768.003c-.577 0-1.036.168-1.327.487-.266.289-.41.706-.41 1.205v.288c0 .003 1.953.003 1.953.003zm15.72-2.417c.496.538.756 1.269.756 2.115v.703c0 .493-.386.893-.86.893h-2.355v.642c0 .26-.19.47-.426.47H5.757c-.236 0-.426-.21-.426-.47v-.625H3.02c-.473 0-.86-.403-.86-.896v-.703c0-.846.26-1.574.756-2.112.535-.583 1.308-.894 2.238-.894h1.933c.703-.484 1.586-.742 2.605-.742h4.563c1.011 0 1.883.252 2.583.725h2.014c.93.003 1.703.311 2.238.894z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconGroupRegular;