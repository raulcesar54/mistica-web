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

const IconDiamondRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M16.83 7.661l1.153-3.566 2.045 3.566h-3.199zm-.39 1.205h3.456l-6.28 8.717 2.824-8.717zm-9.194 0l2.824 8.717-6.277-8.717h3.453zm.662-1.914L6.695 3.204h3.991L7.908 6.952zM13 3.204h3.992l-1.213 3.748L13 3.204zM8.894 7.661l2.95-3.978 2.949 3.978h-5.9zm6.266 1.205l-3.317 10.243L8.527 8.866h6.633zm-9.457-4.77L6.857 7.66H3.655l2.048-3.566zm15.98 4.178l.003-.01c0-.012-.005-.02-.005-.032a.688.688 0 00-.056-.224c-.006-.014-.009-.028-.017-.039l-3.25-5.66c-.005-.012-.02-.018-.028-.029a.547.547 0 00-.165-.165 2.607 2.607 0 00-.078-.045c-.025-.014-.045-.03-.073-.04-.045-.013-.087-.01-.129-.013-.02-.003-.036-.014-.056-.014H5.86c-.019 0-.035.014-.052.014-.045.003-.087 0-.132.014-.028.008-.048.028-.073.039-.028.014-.053.025-.078.045a.58.58 0 00-.165.165c-.009.009-.023.014-.028.028L2.08 7.97c-.008.014-.008.028-.017.04l-.022.055a.578.578 0 00-.034.168c0 .012-.005.023-.005.034l.003.011a.65.65 0 00.042.208l.022.044c.014.028.025.06.045.087l9.232 12.82.003.004a.63.63 0 00.19.162c.02.009.037.02.057.028.075.034.16.059.246.059a.626.626 0 00.303-.087.626.626 0 00.19-.162l.003-.003 9.232-12.82c.02-.029.031-.06.045-.088a.555.555 0 00.067-.255z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDiamondRegular;