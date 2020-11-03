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

const IconPrepaidLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M17.732 2.156c1.03 0 1.773.244 2.272.745.498.502.739 1.241.739 2.266v13.656c0 1.036-.244 1.781-.745 2.28-.496.493-1.238.731-2.266.731H10.63c-1.028 0-1.77-.238-2.266-.731-.502-.496-.745-1.244-.745-2.28l-.001-4.096-.011.001c-1.341-.048-2.39-.43-3.126-1.138-.817-.787-1.232-1.966-1.232-3.507 0-1.54.415-2.72 1.232-3.507.737-.71 1.791-1.091 3.134-1.138v-.27c0-1.009.245-1.746.743-2.25.51-.512 1.252-.762 2.272-.762h7.1zm0 .56H10.63c-.863 0-1.473.194-1.871.594-.392.395-.583 1.003-.583 1.857v.271h.014c1.34.048 2.392.43 3.126 1.138.818.788 1.233 1.967 1.233 3.507 0 1.541-.415 2.72-1.233 3.507-.737.711-1.792 1.093-3.138 1.139l.001 4.094c0 1.742.711 2.45 2.451 2.45h7.1c1.743 0 2.452-.708 2.452-2.45V5.167c0-.87-.188-1.484-.574-1.87-.387-.387-1.003-.58-1.877-.58zm-3.546 15.11c.504 0 .832.266.832.834 0 .275-.076.477-.21.614-.146.148-.362.221-.622.221s-.477-.073-.622-.221c-.135-.137-.21-.339-.21-.614 0-.568.327-.834.832-.834zM7.9 5.994c-1.33 0-2.35.33-3.031.986-.703.678-1.062 1.722-1.062 3.103 0 1.381.356 2.426 1.06 3.104.677.656 1.697.986 3.03.986 1.333 0 2.35-.33 3.028-.986.703-.678 1.059-1.723 1.059-3.104 0-1.38-.356-2.425-1.059-3.103-.675-.656-1.695-.986-3.025-.986zm0 .812a.28.28 0 01.28.28v.404c.382.038.735.15 1.017.325.12.075.187.179.187.294a.306.306 0 01-.305.305.429.429 0 01-.193-.056l-.003-.003a2.19 2.19 0 00-.703-.248l-.001 1.655.087.014c.664.11 1.401.445 1.401 1.403 0 .835-.561 1.39-1.488 1.496l.001.42a.28.28 0 01-.28.28.28.28 0 01-.28-.28v-.411a2.798 2.798 0 01-1.336-.48.33.33 0 01-.154-.286.316.316 0 01.319-.31.394.394 0 01.213.07c.318.21.638.34.957.388v-1.74l-.06-.008c-1.072-.2-1.303-.846-1.303-1.366 0-.812.526-1.365 1.363-1.461v-.405a.28.28 0 01.28-.28zm.281 3.602l-.001 1.658c.535-.081.857-.394.857-.86 0-.317-.107-.653-.856-.798zM6.883 8.913c0 .28.09.604.737.762V8.104c-.46.077-.737.374-.737.809z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconPrepaidLight;