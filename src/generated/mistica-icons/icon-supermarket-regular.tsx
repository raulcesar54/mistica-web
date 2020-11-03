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

const IconSupermarketRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M11.587 11.567c-.087.087-.134.3-.134.583s.047.493.134.583c.084.084.283.134.546.134.263 0 .462-.05.55-.137.086-.087.134-.297.134-.58s-.05-.493-.138-.58c-.086-.09-.285-.137-.546-.137-.26 0-.462.048-.546.134zm.546 2.566c-.594 0-1.061-.162-1.38-.49-.334-.336-.502-.838-.502-1.49 0-.65.168-1.154.501-1.49.32-.328.787-.493 1.381-.493s1.059.165 1.381.493c.336.339.504.84.504 1.49 0 .652-.17 1.154-.504 1.49-.322.325-.787.49-1.38.49zm1.112-9.722h-2.187l.154.927c.008.061.078.347.201.347h1.373c.09 0 .143-.132.176-.244.076-.28.19-.697.283-1.03zM9.523 2.993a.412.412 0 01-.395-.428.41.41 0 01.4-.415h.37c.409 0 .756.289.868.72.037.143.087.398.143.695h2.868a.39.39 0 01.32.168c.075.106.1.24.064.37 0 0-.28 1.033-.434 1.574-.146.529-.501.848-.944.848H11.41c-.582 0-.921-.551-.991-1.058-.048-.292-.14-.866-.233-1.39-.002-.008-.002-.017-.005-.028a16.769 16.769 0 00-.188-.958c-.025-.092-.084-.098-.098-.098-.199.003-.372 0-.372 0zm1.944 3.902h.028c.075.003.37.034.37.406 0 .376-.295.406-.368.406h-.033c-.079-.002-.367-.03-.367-.409 0-.375.288-.403.364-.406h.006v.003zm1.232 0h.028c.076.003.37.034.37.406 0 .376-.294.406-.367.406h-.037c-.078-.002-.367-.03-.367-.409 0-.375.289-.403.367-.406h.006v.003zm5.947 13.628h1.989v-7.74h-1.99v7.74zm-8.897.03l4.734-.016v-4.18H9.75v4.196zM6.761 9.27v11.295l1.784-.006v-4.835c0-.35.269-.633.602-.633h5.936c.33 0 .602.283.602.633v4.807l1.762-.006V9.27a.235.235 0 00-.09-.022H6.85a.222.222 0 00-.09.022zM3.35 20.523h1.99v-7.74H3.35v7.74zm17.883-9.006c.333 0 .602.283.602.633v9.006c0 .347-.274.68-.605.68H2.755c-.33 0-.605-.333-.605-.68V12.15c0-.35.269-.633.602-.633H5.56V9.144c0-.619.605-1.16 1.291-1.16h10.507c.69 0 1.292.544 1.292 1.163v2.373h2.585v-.003z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconSupermarketRegular;