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

const IconAddMoreLocationFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M14.712 10.717c1.322 0 2.143-.81 2.143-2.112s-.821-2.112-2.143-2.112c-1.325 0-2.146.81-2.146 2.112 0 1.303.824 2.112 2.146 2.112zm-7.034 8.519c1.434-.026 3.857-.58 3.857-4.003s-2.44-3.995-3.89-4.034h-.457c-1.426.014-3.807.546-3.807 4 0 3.47 2.415 4.017 3.849 4.042h.157c.095 0 .202 0 .291-.005zM19.967 4.048c1.232 1.23 1.885 3.028 1.877 5.216-.009 4.613-5.928 11.58-6.77 12.406a.61.61 0 01-.432.176.592.592 0 01-.432-.176c-.423-.41-1.37-1.51-2.47-3.037-1.272 1.614-3.353 1.802-4.037 1.807-.098.009-.21.009-.316.009h-.171c-1.062-.014-5.056-.395-5.056-5.247 0-4.838 3.955-5.199 5.014-5.207h.367a5 5 0 01-.048-.782c0-2.176.661-3.977 1.908-5.199 1.25-1.22 3.09-1.848 5.294-1.854 2.207.008 4.034.658 5.272 1.888zM8.065 14.603h2.033c.34 0 .611.268.611.602a.607.607 0 01-.61.602H8.064v2.008a.607.607 0 01-.61.603.605.605 0 01-.612-.603v-2.008H4.815a.605.605 0 01-.61-.602c0-.334.274-.602.61-.602h2.028v-1.98c0-.334.275-.603.611-.603.34 0 .61.269.61.602v1.98z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconAddMoreLocationFilled;