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

const IconMoneyDropLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M2.907 7.232c0-.235.188-.426.42-.426h.6c-.014-.174-.037-.339-.037-.527 0-.075.014-.142.014-.218h-.577a.423.423 0 01-.42-.426c0-.235.188-.426.42-.426h.664c.35-1.918 1.692-2.969 3.877-2.969.787 0 1.473.135 2.039.4.21.102.302.354.204.567a.419.419 0 01-.557.207c-.454-.213-1.022-.322-1.686-.322-1.72 0-2.706.703-3.02 2.117H7.23c.233 0 .42.19.42.426a.423.423 0 01-.42.426H4.742c-.003.076-.014.14-.014.218 0 .188.016.356.033.527H7.23c.233 0 .42.19.42.426a.423.423 0 01-.42.426H4.92c.38 1.21 1.355 1.806 2.949 1.806.672 0 1.246-.112 1.703-.33a.416.416 0 01.557.204.428.428 0 01-.201.566c-.57.272-1.264.412-2.062.412-2.064 0-3.364-.941-3.801-2.658h-.74a.422.422 0 01-.417-.426zm17.322 13.51c.23-.07.77-.266.77-.54v-1.189c-.16.084-.333.16-.523.219-.597.182-1.373.283-2.19.283-.816 0-1.595-.101-2.191-.283a3.378 3.378 0 01-.535-.216v1.182c0 .275.537.47.77.54 1.045.32 2.851.32 3.9.004zm-6.28 0c.415-.126.67-.314.767-.46v-1.31c-.16.08-.333.159-.523.218-.597.182-1.376.283-2.19.283-.816 0-1.595-.101-2.191-.283a3.273 3.273 0 01-.535-.216v1.317c.087.134.341.316.778.448 1.034.32 2.86.32 3.894.003zm-6.283 0c.415-.126.67-.311.768-.46v-1.291a3.325 3.325 0 01-.527.21c-.597.182-1.373.283-2.19.283-.816 0-1.594-.1-2.191-.283a3.325 3.325 0 01-.535-.213v1.306c.081.128.32.308.776.448 1.04.316 2.865.316 3.9 0zm-3.902-3.163c-.468.143-.65.297-.723.398.062.098.23.258.729.409 1.042.316 2.86.316 3.896 0 .482-.149.656-.303.72-.398-.132-.207-.532-.353-.726-.412-1.039-.313-2.854-.313-3.896.003zm6.283-2.367c-.37.112-.622.258-.717.404.064.1.24.255.723.403 1.042.317 2.854.317 3.896 0 .479-.148.653-.303.72-.4-.132-.205-.532-.35-.726-.41-1.033-.313-2.86-.313-3.896.003zm6.283-2.325c-.468.143-.65.297-.723.398.062.098.23.258.729.412 1.039.316 2.857.316 3.896 0 .479-.146.653-.303.72-.4-.132-.205-.532-.35-.726-.41-1.039-.316-2.854-.316-3.896 0zm-.77 3.762v1.32c.086.137.341.316.776.448 1.042.316 2.86.316 3.896 0 .412-.126.67-.314.767-.46v-1.31c-.16.083-.333.16-.523.218-.597.182-1.376.283-2.19.283-.816 0-1.595-.101-2.191-.283a3.041 3.041 0 01-.535-.216zm.535-2.137a3.325 3.325 0 01-.535-.213v1.305c.08.13.319.306.776.449 1.042.316 2.857.316 3.899 0 .411-.126.666-.311.764-.46v-1.291a3.325 3.325 0 01-.526.21c-.597.182-1.376.283-2.19.283-.816 0-1.595-.1-2.188-.283zm-6.818 2.11v1.307c.084.13.322.306.778.446 1.04.316 2.858.316 3.897 0 .412-.126.67-.314.767-.46v-1.288a3.047 3.047 0 01-.524.207c-.599.182-1.375.283-2.19.283s-1.591-.1-2.19-.283a2.908 2.908 0 01-.538-.213zm11.193-4.55c1.132.348 1.37.93 1.37 1.359v6.77c0 .429-.238 1.011-1.37 1.356-.602.182-1.378.283-2.19.283-.813 0-1.592-.101-2.191-.28-.445-.138-.75-.311-.958-.496-.24.204-.555.378-.938.496-.597.182-1.373.283-2.19.283-.819 0-1.597-.101-2.191-.283a2.702 2.702 0 01-.964-.496c-.24.204-.554.378-.938.496-.594.182-1.373.283-2.19.283-.819 0-1.597-.101-2.191-.283-.555-.168-.953-.42-1.185-.729a.415.415 0 01-.188-.347v-2.359c0-.1.014-.201.04-.296v-.003c.134-.474.582-.83 1.327-1.06 1.196-.363 3.188-.363 4.381 0 .21.065.381.138.532.217v-1.225c0-.1.014-.201.04-.296v-.003c.134-.474.58-.832 1.327-1.056 1.188-.364 3.194-.364 4.384 0 .21.064.378.137.53.215v-1.184c0-.101.013-.202.039-.3.134-.474.582-.83 1.327-1.059 1.2-.367 3.19-.367 4.387-.003zm-3.975-5.921l-1.045.008 2.535 2.605 2.547-2.605-1.031-.008a.584.584 0 01-.569-.603l-.003-2.476a.066.066 0 00-.064-.067h-1.75a.066.066 0 00-.065.067l.003 2.488a.582.582 0 01-.558.59zm1.048 3.37l-3.126-3.21c-.171-.21-.2-.46-.101-.665a.565.565 0 01.515-.33l1.381-.011-.003-2.23c0-.507.407-.919.905-.919h1.75c.5 0 .906.412.906.919l.002 2.23 1.384.01a.57.57 0 01.513.334.61.61 0 01-.076.633l-3.196 3.272a.507.507 0 01-.403.185.58.58 0 01-.359-.123 2.835 2.835 0 01-.092-.096z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconMoneyDropLight;