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

const IconTargetRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M12.473 18.373c1.692-.11 5.597-.922 5.92-5.928h-.457a.602.602 0 010-1.204h.462c-.275-5.067-4.194-5.936-5.925-6.062v.603a.598.598 0 01-.633.568.6.6 0 01-.568-.568v-.625c-1.566.047-5.801.692-6.06 6.087h.598a.602.602 0 010 1.204h-.59c.348 5.171 4.448 5.869 6.05 5.936v-.476a.598.598 0 01.634-.57.6.6 0 01.568.57v.465zm8.67-7.132a.602.602 0 010 1.204H19.59c-.345 6.177-5.429 7.028-7.118 7.132v1.538a.598.598 0 01-.633.568.6.6 0 01-.568-.568v-1.53c-1.527-.061-6.877-.756-7.25-7.14H2.6a.602.602 0 010-1.204h1.41c.277-6.633 5.8-7.247 7.26-7.289v-1.38a.598.598 0 01.633-.57.6.6 0 01.569.57v1.403c1.728.12 6.831 1.028 7.126 7.269l1.546-.003zM10.969 8.798c-.204.2-.25.575-.25.852 0 .28.043.653.247.849.202.193.566.235.835.235.272 0 .636-.042.84-.235.166-.16.25-.446.25-.85 0-.405-.084-.691-.252-.85-.202-.197-.569-.239-.838-.239s-.63.042-.832.238zm.832 2.978c-.672 0-1.196-.177-1.557-.524-.378-.364-.569-.902-.569-1.602 0-.7.19-1.238.569-1.602.361-.35.888-.53 1.557-.53.672 0 1.196.18 1.563.53.378.364.572.904.572 1.602 0 .7-.19 1.238-.572 1.602-.364.347-.89.524-1.563.524zM9.07 14.98h5.47c-.01-.269-.08-.607-.319-.854-.297-.308-.773-.375-1.12-.375h-2.594c-.347 0-.82.064-1.118.372-.238.247-.308.588-.319.857zm4.028-2.271c.79 0 1.437.238 1.874.692.4.417.613.994.613 1.672v.708a.24.24 0 01-.24.241H8.266a.24.24 0 01-.24-.24v-.71c0-.677.21-1.254.607-1.671.437-.454 1.084-.695 1.871-.695l2.594.003z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconTargetRegular;