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

const IconVirusLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M7.025 19.778c.729-.239 1.867-.904 1.318-2.66-.324-1.058-.942-1.57-1.881-1.57-.325 0-.598.06-.737.094-.077.026-.162.051-.24.077-.882.281-1.82.964-1.3 2.654.333 1.067.94 1.587 1.856 1.587.333 0 .606-.06.742-.102.08-.029.174-.054.242-.08zm2.935-3.615a.427.427 0 01.53.281c.067.23-.06.47-.283.538l-.942.29c.128.623.086 1.135-.051 1.553l.78.418c.213.103.29.367.18.572a.427.427 0 01-.38.23.397.397 0 01-.196-.05l-.797-.419a3.227 3.227 0 01-1.258.922l.3.947a.426.426 0 01-.283.53.343.343 0 01-.128.025.437.437 0 01-.41-.307l-.29-.948a3.78 3.78 0 01-.691.069c-.268 0-.558-.034-.857-.128l-.427.793a.427.427 0 01-.378.23.397.397 0 01-.197-.05.415.415 0 01-.18-.572l.428-.802c-.35-.273-.67-.675-.908-1.246l-.974.298a.66.66 0 01-.128.017.429.429 0 01-.12-.836l.969-.299c-.137-.614-.103-1.126.034-1.544l-.789-.41a.427.427 0 01-.179-.58.418.418 0 01.572-.18l.788.419c.385-.495.908-.777 1.258-.922l-.29-.947a.426.426 0 01.282-.53.426.426 0 01.538.282l.29.956c.188-.043.418-.068.686-.068.273 0 .564.034.865.128l.419-.803a.43.43 0 01.583-.179c.205.111.29.367.18.572l-.419.794c.35.273.677.674.916 1.254l.957-.298zm8.925-.41c1.156-1.152 1.787-2.595-3.122-7.493-3.003-3.004-4.716-3.926-5.855-3.926-.72 0-1.215.367-1.659.81-1.155 1.161-1.796 2.604 3.114 7.5 4.912 4.898 6.358 4.267 7.522 3.109zM21.7 14.46a.44.44 0 01.282.538.427.427 0 01-.41.299c-.043 0-.086 0-.128-.017l-1.045-.325a3.32 3.32 0 01-.615 1.067l.789.785c.17.162.17.436 0 .598a.414.414 0 01-.3.128.433.433 0 01-.306-.128l-.789-.785a3.36 3.36 0 01-1.061.623l.324 1.04a.42.42 0 01-.282.53.343.343 0 01-.128.025.425.425 0 01-.404-.298l-.359-1.135c-.017 0-.034.008-.05.008-.505 0-1.045-.145-1.634-.41l-.111.93a.439.439 0 01-.427.376c-.017 0-.034 0-.052-.008a.426.426 0 01-.375-.478l.162-1.238a14.183 14.183 0 01-1.471-1.032l-.547 1.092a.439.439 0 01-.384.23.41.41 0 01-.196-.042.43.43 0 01-.188-.572l.643-1.271a34.036 34.036 0 01-1.574-1.46l-1.002.99a.414.414 0 01-.299.128.427.427 0 01-.307-.725l1.002-.999a32.747 32.747 0 01-1.463-1.579l-1.275.64a.39.39 0 01-.188.052.419.419 0 01-.384-.24.423.423 0 01.188-.571l1.095-.546a14.86 14.86 0 01-1.036-1.468l-1.24.153c-.026 0-.043.009-.06.009a.424.424 0 01-.419-.376.42.42 0 01.367-.477l.934-.12c-.265-.606-.384-1.16-.376-1.673L5.437 6.37a.422.422 0 01-.276-.538.43.43 0 01.532-.281l1.07.332c.129-.358.334-.708.624-1.04l-.814-.812a.422.422 0 010-.605.428.428 0 01.598 0l.814.81c.333-.273.685-.47 1.044-.597l-.333-1.084a.427.427 0 01.273-.538c.23-.068.47.06.538.282l.37 1.195c.512-.009 1.062.11 1.668.375l.12-.964a.423.423 0 01.478-.367.42.42 0 01.37.47l-.163 1.288c.453.265.94.615 1.463 1.024l.564-1.126a.42.42 0 01.572-.188.416.416 0 01.188.572l-.65 1.305a33.26 33.26 0 011.566 1.451l1.028-1.024a.439.439 0 01.606 0 .438.438 0 010 .606L16.659 7.94a28.83 28.83 0 011.455 1.562l1.309-.657a.431.431 0 01.572.188.416.416 0 01-.188.571l-1.13.572c.419.512.763.999 1.036 1.451l1.284-.162a.417.417 0 01.47.375.43.43 0 01-.368.478l-.95.111c.273.606.401 1.16.392 1.673l1.159.358z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconVirusLight;