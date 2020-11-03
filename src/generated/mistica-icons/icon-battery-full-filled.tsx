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

const IconBatteryFullFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M16.542 18.499V7.639c0-.742-.165-1.266-.507-1.602-.342-.34-.874-.502-1.63-.502H8.898c-.745 0-1.278.168-1.625.516-.344.341-.513.862-.513 1.59v10.86c0 .751.166 1.278.51 1.611.34.334.871.493 1.628.493h5.51c.753 0 1.288-.162 1.627-.493.342-.336.507-.862.507-1.613zM10.217 3.49c-.073.072-.09.232-.09.355v.443h3.048v-.446c0-.103-.011-.285-.084-.358-.073-.073-.26-.084-.364-.084h-2.149c-.126.003-.288.017-.36.09zm6.712 1.666c.588.583.873 1.392.873 2.482v10.86c0 1.098-.288 1.913-.882 2.493-.588.577-1.412.854-2.515.854H8.898c-1.104 0-1.927-.28-2.516-.854-.593-.58-.882-1.395-.882-2.496V7.64c0-1.07.286-1.877.874-2.465.591-.588 1.409-.877 2.493-.882v-.449c0-.515.151-.93.454-1.226.302-.303.725-.457 1.255-.457h2.148c.532 0 .955.151 1.258.451.3.297.45.714.45 1.235v.448c1.096.003 1.914.286 2.497.863zM15.164 6.52c.347 0 .63.28.63.622v10.731c0 1.219-1.006 2.207-2.24 2.207H9.748c-1.235 0-2.24-.988-2.24-2.207V7.144c0-.343.282-.623.63-.623h7.025z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconBatteryFullFilled;