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

const IconTachometerRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M20.231 18.084c.244-.919.367-1.96.367-3.1 0-5.611-2.902-8.457-8.622-8.457S3.357 9.37 3.357 14.983c0 1.143.124 2.185.364 3.101h16.51zm-8.257-12.74c6.43 0 9.829 3.334 9.829 9.64 0 1.417-.177 2.702-.53 3.823a.474.474 0 01-.036.087l-.02.042a.602.602 0 01-.54.33H3.265a.602.602 0 01-.577-.414c-.356-1.132-.538-2.432-.538-3.869 0-6.305 3.398-9.638 9.824-9.638zm.002 9.44c.345 0 .653.138.88.356l6.372-1.832a.602.602 0 01.748.4c.09.312-.09.64-.4.732l-.009.003-6.364 1.829a1.248 1.248 0 01-1.224.972 1.24 1.24 0 01-1.252-1.23c-.003-.678.557-1.227 1.25-1.23zm-.014-4.991a.595.595 0 01-.602-.591v-.799c0-.325.269-.59.602-.59.334 0 .603.265.603.59v.799a.595.595 0 01-.603.59zm-4.577-.205l.577.566c.23.224.236.591.014.824l-.014.014a.607.607 0 01-.851 0l-.58-.569a.583.583 0 01-.011-.824l.011-.01a.616.616 0 01.854 0zm-1.44 4.157c.334 0 .603.263.603.591a.597.597 0 01-.602.591H5.13a.597.597 0 01-.602-.59c0-.329.27-.592.602-.592h.816zm10.437-2.583a.602.602 0 01-.425-.173.586.586 0 01-.014-.824l.014-.014.577-.566a.612.612 0 01.851 0c.23.225.236.594.011.824l-.01.011-.578.566a.593.593 0 01-.426.176z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconTachometerRegular;