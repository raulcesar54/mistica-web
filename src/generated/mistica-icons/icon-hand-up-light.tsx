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

const IconHandUpLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M19.388 18.678c0 .748-.193 1.33-.58 1.728-.387.398-1.017.62-1.779.62H9.242c-.19 0-.342-.166-.535-.586a184.64 184.64 0 00-1.218-2.496c-.92-1.865-2.062-4.187-2.74-5.636-.235-.5-.168-.988.18-1.266a.986.986 0 01.624-.218c.25 0 .499.09.703.255.26.207.504.52.813 1.047a.81.81 0 00.915.373.823.823 0 00.6-.793V4.331c.078-1.21.787-1.347 1.316-1.347.863 0 1.32.462 1.32 1.338v2.902c0 .451.361.818.812.821a.823.823 0 00.219-.03c.137-.04.294-.06.465-.06.627 0 1.02.255 1.162.76a.819.819 0 001.04.554c.15-.05.327-.075.52-.075.63 0 1.023.257 1.166.767a.82.82 0 00.4.504.806.806 0 00.639.056 1.66 1.66 0 01.518-.075c.812 0 1.224.417 1.224 1.24l.003 6.992zM18.164 9.62c-.283 0-.544.04-.773.118-.238-.857-.942-1.367-1.947-1.367-.283 0-.544.042-.776.118-.24-.849-.941-1.353-1.944-1.353-.247 0-.476.03-.683.09V4.32c0-1.334-.818-2.16-2.135-2.16-1.266 0-2.042.77-2.129 2.118v.042l-.003 7.386c-.339-.577-.644-.98-1.008-1.271a1.934 1.934 0 00-1.207-.432 1.79 1.79 0 00-1.132.398c-.65.52-.81 1.409-.409 2.263.68 1.448 1.826 3.776 2.745 5.647.574 1.166 1.07 2.171 1.21 2.476.146.317.49 1.062 1.272 1.062h7.787c.983 0 1.82-.308 2.361-.865.538-.555.81-1.331.81-2.3v-7c-.003-1.275-.782-2.065-2.04-2.065z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconHandUpLight;