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

const IconLungsRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M20.218 19.154c-.008.006-.179.174-.459.185-.63.034-1-.28-1.322-.554l-.09-.076c-.353-.297-.72-.602-1.501-.602h-.009a17.72 17.72 0 01-1.327-.096c-.359-.095-.726-.305-.729-1.204-.137-3.115-.193-6.787.006-7.487a2.36 2.36 0 01.16-.435c.016-.033.033-.067.044-.103.056-.171.188-.566 1.031-.566.524 0 .846.174 1.118.597.02.028.042.058.064.084.026.028 2.608 2.902 3.163 6.179.47 2.759.176 3.745-.149 4.078m-8.467-7.706l-1.177.594c0-.285 0-.563-.006-.832l.768-.386a.55.55 0 00.297-.488v-5.88h.74v5.894c0 .208.114.395.296.488l.762.386c-.003.27-.005.547-.005.832l-1.202-.608a.522.522 0 00-.473 0m-2.533 5.359c0 .854-.367 1.067-.686 1.151-.12.02-.986.104-1.367.104h-.008c-.779 0-1.146.305-1.499.602l-.09.076c-.319.274-.683.588-1.322.554-.28-.01-.45-.179-.453-.179-.328-.339-.622-1.322-.157-4.084.554-3.277 3.134-6.151 3.162-6.182a.664.664 0 00.065-.084c.269-.423.593-.597 1.117-.597.846 0 .975.398 1.031.566a.616.616 0 00.048.11c.05.092.1.23.16.43.195.704.14 4.376 0 7.533m12.366-1.944c-.588-3.47-3.092-6.392-3.437-6.779-.498-.756-1.193-1.123-2.12-1.123-1.454 0-1.989.832-2.182 1.367-.087.17-.165.378-.241.644-.062.219-.107.591-.132 1.06l-.033-.018V4.317a.94.94 0 00-.93-.947h-1.014a.94.94 0 00-.93.947V10l-.034.017c-.028-.482-.07-.865-.134-1.09v-.002a3.503 3.503 0 00-.241-.642c-.19-.535-.726-1.367-2.18-1.367-.927 0-1.621.367-2.12 1.123-.345.39-2.849 3.309-3.437 6.782-.465 2.75-.31 4.347.499 5.18a1.962 1.962 0 001.406.551c1.039 0 1.68-.549 2.033-.849l.079-.067c.3-.25.38-.316.717-.316.409.002 1.485-.09 1.647-.135 1.064-.28 1.65-1.123 1.65-2.361.03-.695.087-2.107.112-3.56l1.428-.72 1.454.734c.025 1.462.081 2.882.112 3.577 0 1.252.586 2.095 1.645 2.372.17.048 1.254.137 1.644.137h.005c.34 0 .42.068.717.317l.079.067c.353.3.994.849 2.034.849.042 0 .086-.003.131-.003a1.96 1.96 0 001.277-.552c.81-.834.961-2.431.496-5.179"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconLungsRegular;