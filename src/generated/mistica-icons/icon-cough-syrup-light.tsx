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

const IconCoughSyrupLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M17.732 18.165l.008-7.866H6.261v7.866c0 .106.017.196.02.297h11.431c.006-.101.02-.194.02-.297zm-2.855 2.862c1.451 0 2.364-.605 2.703-1.75H6.418c.126.42.32.776.602 1.047.488.465 1.199.703 2.118.703h5.74zM7.026 7.915c-.395.379-.633.905-.723 1.566h11.398c-.137-1.059-.656-1.75-1.546-2.067-.202.14-.449.221-.712.221H8.488c-.247 0-.473-.073-.667-.196-.305.118-.58.27-.795.476zm1.03-4.512v2.986c0 .238.194.431.435.431h6.955a.434.434 0 00.434-.431V3.403a.432.432 0 00-.434-.432H8.488a.432.432 0 00-.431.432zm8.589 3.33c1.238.535 1.919 1.703 1.919 3.345l-.009 8.09c0 2.336-1.342 3.677-3.678 3.677h-5.74c-1.14 0-2.041-.313-2.688-.932-.67-.645-1.011-1.57-1.011-2.748v-8.087c0-1.18.341-2.104 1.016-2.748.241-.23.533-.403.849-.55a1.229 1.229 0 01-.07-.391V3.403c0-.69.563-1.247 1.255-1.247h6.955c.692 0 1.255.56 1.255 1.247v2.986c0 .12-.022.232-.053.344zm-7.32-.476a.41.41 0 01-.411-.409V3.943a.41.41 0 01.411-.409.41.41 0 01.412.41v1.904a.412.412 0 01-.412.41zm1.762 0a.41.41 0 01-.411-.409V3.943a.41.41 0 01.411-.409.41.41 0 01.412.41v1.904a.414.414 0 01-.412.41zm1.76 0a.41.41 0 01-.412-.409V3.943a.41.41 0 01.411-.409.41.41 0 01.412.41v1.904a.414.414 0 01-.412.41zm1.759 0a.41.41 0 01-.412-.409V3.943a.41.41 0 01.412-.409.41.41 0 01.411.41v1.904a.412.412 0 01-.411.41zm-5.359 7.35v1.233s.034.022.084.022h1.93v1.902c0 .05.025.081.034.09h1.24c0-.017.026-.04.026-.082l-.009-1.918h1.922c.042 0 .081-.034.09-.042l-.009-1.224c0-.017-.042-.026-.073-.026h-1.93V11.66c0-.042-.025-.08-.042-.09l-1.232.01c0 .008-.025.047-.025.08v1.91H9.328a.12.12 0 00-.081.037zm.081 2.073c-.493 0-.905-.375-.905-.84v-1.25c0-.456.412-.832.905-.832h1.101v-1.092c0-.49.387-.896.846-.896h1.258c.45 0 .84.409.84.896v1.087h1.11c.484 0 .896.384.896.84v1.25c0 .448-.412.831-.905.831h-1.1l.007 1.101c0 .49-.378.897-.845.897l-1.258-.009c-.46 0-.838-.4-.838-.899v-1.087H9.328v.003z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCoughSyrupLight;