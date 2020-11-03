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

const IconApiRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M20.224 4.525c.807 0 1.462.63 1.462 1.406v11.95c0 .776-.655 1.406-1.462 1.406H3.462c-.807 0-1.462-.63-1.462-1.406V5.931c0-.776.655-1.406 1.462-1.406h16.762zM18.19 12.1h-.512v.732c0 .252-.19.467-.448.51-.308.047-.58.128-.81.24a.546.546 0 01-.616-.098l-.569-.546-.386.373.568.546a.503.503 0 01.087.616c-.087.148-.182.462-.232.76a.528.528 0 01-.527.43h-.759v.493h.76a.53.53 0 01.526.432c.05.297.145.61.232.759a.499.499 0 01-.087.619l-.142.137h4.952a.229.229 0 00.227-.221v-4.768l-.384.37a.551.551 0 01-.613.098 2.886 2.886 0 00-.816-.24.523.523 0 01-.45-.51V12.1zm2.264-3.254H3.232v9.036c0 .12.101.218.227.218h10.39a.943.943 0 01.182-.263l.37-.353a5.151 5.151 0 01-.096-.297h-.414c-.54 0-.983-.423-.983-.947v-.66c0-.522.44-.947.983-.947h.414a4.07 4.07 0 01.096-.297l-.37-.356a.93.93 0 010-1.347l.501-.482a1.017 1.017 0 011.398 0l.37.356c.098-.034.201-.065.305-.093v-.398c0-.52.44-.946.983-.946h.687c.54 0 .983.425.983.946v.398c.103.028.204.059.305.093l.37-.356a1.06 1.06 0 01.52-.255v-3.05zm-2.48 5.098c1.244 0 2.018.745 2.018 1.94 0 1.197-.774 1.942-2.017 1.942-1.244 0-2.017-.745-2.017-1.941 0-1.196.773-1.941 2.017-1.941zm0 1.03c-.663 0-.946.272-.946.914 0 .638.283.91.947.91.664 0 .947-.272.947-.91 0-.64-.283-.914-.947-.914zm-8.758-3.89c.566 0 .924.078 1.157.297.196.179.29.459.29.845 0 .387-.089.676-.268.877-.21.238-.538.348-1.014.348h-.58v1.246h-.823v-3.613h1.238zm-2.964 0l1.303 3.61h-.883l-.3-.907h-1.17l-.28.907h-.785l1.208-3.61h.907zm5.826 0v3.61h-.823v-3.61h.823zm-6.3.902h-.01l-.376 1.204h.782l-.395-1.204zm3.404-.306h-.386v1.152h.408c.264 0 .376-.037.48-.138.095-.095.142-.249.142-.46 0-.195-.042-.338-.137-.428-.1-.09-.252-.126-.507-.126zm11.045-5.97H3.462a.222.222 0 00-.227.219v1.728h17.219V5.929a.223.223 0 00-.227-.219zM6.16 6.127a.56.56 0 01.571.55.563.563 0 01-.571.551.563.563 0 01-.572-.552.56.56 0 01.572-.549zm1.717 0a.56.56 0 01.571.55.563.563 0 01-.571.551.563.563 0 01-.572-.552.557.557 0 01.572-.549zm-3.432 0a.56.56 0 01.572.55.563.563 0 01-.572.551.563.563 0 01-.571-.552.56.56 0 01.571-.549z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconApiRegular;