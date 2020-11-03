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

const IconSearchDatabaseLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M19.088 20.502c-1.132.339-2.62.524-4.19.524-1.57 0-3.06-.185-4.189-.524-1.282-.387-1.935-.91-1.935-1.555v-1.3a4.78 4.78 0 003.297-.815.411.411 0 00.16.062c.84.12 1.739.182 2.677.182 1.659 0 3.23-.196 4.426-.557.678-.202 1.25-.49 1.69-.827v3.255c-.004.647-.654 1.168-1.936 1.555zM9.328 8.773a4.05 4.05 0 014.045 4.045 4.05 4.05 0 01-4.045 4.045 4.05 4.05 0 01-4.044-4.045 4.05 4.05 0 014.044-4.045zM8.771 6.01c.415.327.983.605 1.712.826 1.198.359 2.77.557 4.423.557 1.655 0 3.226-.198 4.425-.557.726-.218 1.28-.485 1.69-.804v3.61c-.208.387-.81.903-1.925 1.239-1.123.339-2.61.524-4.199.524-.123-.003-.594 0-.921-.02a4.874 4.874 0 00-4.648-3.428c-.187 0-.375.014-.557.033V6.01zm1.936-2.504c1.12-.34 2.61-.524 4.187-.524 1.583 0 3.07.185 4.19.524 1.11.333 1.746.77 1.897 1.3-.003.008-.011.013-.017.024-.185.485-.834.908-1.874 1.222-1.123.336-2.61.524-4.187.524-1.577 0-3.065-.185-4.188-.524-1.067-.322-1.72-.76-1.888-1.26-.003-.01-.008-.015-.011-.023.17-.504.82-.941 1.89-1.263zm3.487 9.31c0-.204-.017-.406-.042-.605.297.009.616.012.748.012h.011c1.658 0 3.227-.2 4.426-.558.678-.204 1.252-.49 1.689-.826v3.658c-.207.384-.812.902-1.924 1.235-1.12.337-2.608.524-4.188.524a18.89 18.89 0 01-2.034-.117 4.888 4.888 0 001.314-3.323zm5.129-10.098c-1.193-.358-2.768-.557-4.429-.557-1.658 0-3.23.199-4.425.557-1.393.42-2.216 1.042-2.449 1.852v.003a1.775 1.775 0 00-.067.484v3.098a4.87 4.87 0 00-3.487 4.661c0 1.258.484 2.401 1.271 3.264l-3.462 3.46a.408.408 0 00.011.579.41.41 0 00.57 0l3.478-3.476c.482.378 1.03.664 1.62.837v1.468c0 1.05.845 1.838 2.517 2.342 1.208.358 2.779.557 4.426.557 1.65 0 3.221-.199 4.429-.56 1.672-.504 2.518-1.291 2.518-2.339V5.06c-.003-1.05-.849-1.837-2.521-2.342z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconSearchDatabaseLight;