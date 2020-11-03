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

const IconRatingRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M20.23 18.105a.222.222 0 00.227-.218V8.842H3.23v9.042c0 .12.1.218.227.218H20.23v.003zM3.457 5.707a.222.222 0 00-.227.219v1.73h17.227v-1.73a.223.223 0 00-.227-.219H3.457zM20.23 4.522c.804 0 1.456.63 1.456 1.404v11.958c0 .773-.652 1.403-1.456 1.403H3.457c-.804 0-1.457-.63-1.457-1.403V5.926c0-.773.653-1.404 1.457-1.404H20.23zM6.17 7.15a.56.56 0 01-.568-.55.56.56 0 01.569-.548c.316 0 .568.246.568.549a.558.558 0 01-.568.549zm1.712 0a.558.558 0 01-.568-.55.56.56 0 01.568-.548c.317 0 .569.246.569.549a.56.56 0 01-.569.549zm-3.42 0a.558.558 0 01-.568-.55.56.56 0 01.568-.548c.317 0 .569.246.569.549a.56.56 0 01-.569.549zm8.33 5.98l.415-.406-.546-.078a.81.81 0 01-.597-.426l-.22-.454-.222.448a.808.808 0 01-.602.432l-.541.078.415.403c.176.171.26.435.218.67l-.092.535.445-.233a.806.806 0 01.74-.008l.462.244-.093-.535a.782.782 0 01.219-.67zm1.004-1.078a.519.519 0 01.29.885l-.736.72c-.005.005-.008.014-.005.02l.173 1.016a.52.52 0 01-.759.546l-.91-.478c-.003 0-.003-.003-.006-.003s-.003 0-.005.003l-.91.478a.541.541 0 01-.544-.03.512.512 0 01-.219-.516l.174-1.017c.003-.008 0-.014-.006-.02l-.736-.719a.519.519 0 01.291-.885l1.017-.149c.003 0 .008-.005.011-.008l.457-.924a.515.515 0 01.467-.292c.202 0 .381.112.468.292l.454.924c.003.003.006.008.011.008l1.023.149zM18.4 13.13l.414-.406-.546-.078a.81.81 0 01-.602-.437l-.219-.443-.221.448a.808.808 0 01-.602.432l-.541.078.415.403a.78.78 0 01.218.67l-.092.535.445-.233a.814.814 0 01.378-.095.83.83 0 01.364.087l.463.244-.093-.535a.782.782 0 01.219-.67zm1.002-1.078a.519.519 0 01.292.885l-.737.72c-.006.005-.008.014-.006.02l.174 1.016a.52.52 0 01-.76.546l-.91-.478c-.002 0-.002-.003-.005-.003s-.003 0-.003.003l-.91.478a.543.543 0 01-.543-.03.512.512 0 01-.22-.516l.175-1.017c.002-.008 0-.014-.006-.02l-.737-.719a.519.519 0 01.291-.885l1.017-.149c.003 0 .009-.005.012-.008l.453-.924a.523.523 0 01.938 0l.455.924c.002.003.005.008.01.008l1.02.149zM7.185 13.13l.414-.406-.546-.078a.81.81 0 01-.596-.426l-.222-.454-.221.448a.808.808 0 01-.602.432l-.544.078.415.403c.174.171.26.435.218.67l-.09.535.446-.233a.814.814 0 01.378-.095.82.82 0 01.364.087l.463.244-.093-.535a.772.772 0 01.216-.67zm1.003-1.078a.519.519 0 01.288.885l-.737.72c-.005.005-.008.014-.005.02l.174 1.016a.516.516 0 01-.516.605.55.55 0 01-.246-.059l-.91-.478c-.004 0-.004-.003-.006-.003-.003 0-.003 0-.003.003l-.91.478a.541.541 0 01-.544-.03.512.512 0 01-.218-.516l.173-1.017c0-.008 0-.014-.005-.02l-.737-.719a.519.519 0 01.291-.885l1.017-.149c.003 0 .009-.005.011-.008l.454-.924a.523.523 0 01.938 0l.454.924c.003.003.006.008.011.008l1.026.149z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconRatingRegular;