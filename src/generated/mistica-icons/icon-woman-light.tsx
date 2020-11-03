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

const IconWomanLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M10.898 3.336c-.252.243-.381.63-.381 1.148 0 1.022.479 1.501 1.507 1.501 1.033 0 1.515-.476 1.515-1.501 0-.515-.129-.905-.383-1.148-.247-.239-.628-.356-1.132-.356-.502 0-.882.117-1.126.356zm1.126 3.47c-1.485 0-2.336-.846-2.336-2.322 0-.748.213-1.333.633-1.74.406-.392.977-.588 1.703-.588.725 0 1.3.2 1.706.586.423.406.636.991.636 1.742 0 1.476-.855 2.322-2.342 2.322zm4.45 7.737a.524.524 0 00.029-.4l-1.583-4.48a1.92 1.92 0 00-1.804-1.266h-2.179c-.762 0-1.454.454-1.756 1.157a1.724 1.724 0 00-.045.1L7.55 14.146c-.092.269.05.56.32.656a.508.508 0 00.395-.017.525.525 0 00.271-.297l.824-2.446a.412.412 0 01.535-.235.416.416 0 01.252.49l-.375 1.166-.754 2.795h.49c.227 0 .412.185.415.41l.02 3.831a.518.518 0 101.036 0l-.02-3.83c0-.226.183-.41.41-.414h1.313c.227 0 .412.185.415.412l-.017 3.832c0 .289.232.524.518.524a.52.52 0 00.518-.524l.02-3.832a.414.414 0 01.414-.409h.493l-.764-2.812-.373-1.151a.409.409 0 01.266-.516.415.415 0 01.521.263l.827 2.449a.52.52 0 00.658.31.509.509 0 00.297-.257zm.81-.672c.118.347.093.711-.07 1.036-.16.32-.431.557-.767.67-.233.083-.485.1-.726.044l.252.936a.412.412 0 01-.4.518h-.622l-.017 3.42a1.35 1.35 0 01-1.347 1.345 1.35 1.35 0 01-1.347-1.348l.016-3.42h-.479l.017 3.418c0 .745-.602 1.35-1.344 1.35a1.347 1.347 0 01-1.345-1.348l-.017-3.42h-.622a.413.413 0 01-.397-.518l.252-.936a1.327 1.327 0 01-.731-.047 1.311 1.311 0 01-.76-.667 1.327 1.327 0 01-.07-1.033l1.586-4.485c.02-.059.042-.115.076-.182a2.73 2.73 0 012.507-1.633h2.179c1.095 0 2.084.647 2.515 1.652a.966.966 0 01.07.174l1.591 4.474z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconWomanLight;