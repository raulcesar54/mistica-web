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

const IconPackageTrolleyLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M9.96 20.216c-.581.112-1.057.022-1.41-.259-.355-.278-.58-.745-.683-1.386-.193-1.294.321-2.092 1.491-2.312.16-.03.314-.037.453-.037.383 0 .701.097.956.303.353.28.58.747.683 1.388.194 1.292-.323 2.09-1.49 2.303zm.56-9.36c-.02-.103.026-.183.065-.193l2.088-.382.3 1.986c.027.177.166.31.328.31.02 0 .04-.007.052-.007l1.612-.296a.384.384 0 00.22-.154.34.34 0 00.053-.274l-.294-1.988 1.82-.332h.013c.052 0 .1.088.107.148l.76 4.993c.014.104-.034.184-.073.193l-6.175 1.137c-.06.022-.114-.082-.119-.147l-.758-4.993zm4.01.746l-.956.177-.24-1.619.95-.176c-.002 0 .246 1.618.246 1.618zM9.704 5.588l1.377-.244.214 1.396c.014.096.06.184.135.237a.337.337 0 00.193.067h.052l1.205-.222a.37.37 0 00.273-.428l-.207-1.374 1.363-.245.642 4.33-4.58.813-.667-4.33zm2.58-.457l.152 1.02-.542.105-.152-1.028c0-.003.541-.097.541-.097zm6.323 11.258l-6.545 1.205a3.397 3.397 0 00-.3-.917l5.92-1.093c.415-.073.688-.54.615-1.036l-.753-4.995a.986.986 0 00-.3-.583c-.167-.147-.38-.222-.588-.177l-1.042.192c0-.015.006-.03 0-.037l-.65-4.298a.784.784 0 00-.254-.487.591.591 0 00-.508-.154l-4.605.856a.605.605 0 00-.407.28.835.835 0 00-.12.598l.648 4.294a.73.73 0 00.207.42c-.06.163-.093.332-.066.518l.701 4.643a2.445 2.445 0 00-.981-.119L8.068 5.477a.374.374 0 00-.267-.302l-2.408-.496c-.182-.034-.355.096-.387.29v.005c-.034.196.084.387.266.428l2.172.45L8.92 15.62c-1.309.385-1.95 1.507-1.71 3.075.121.827.454 1.47.95 1.862.366.295.828.443 1.35.443.182 0 .368-.015.555-.053.756-.14 1.336-.501 1.691-1.055.276-.423.41-.96.394-1.56l6.57-1.22c.182-.028.302-.222.275-.423-.036-.203-.21-.343-.39-.3z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconPackageTrolleyLight;