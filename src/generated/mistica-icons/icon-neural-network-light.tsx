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

const IconNeuralNetworkLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M17.02 7.12a.357.357 0 01-.365-.353c0-.193.162-.353.361-.353.2 0 .362.16.362.353a.353.353 0 01-.359.353m1.149 8.24c.199 0 .361.158.361.354a.36.36 0 01-.364.353.359.359 0 01-.362-.353.36.36 0 01.365-.353m-3.947-2.885c.199 0 .361.16.361.353a.357.357 0 01-.361.352.353.353 0 110-.706m.325 4.328c0-.193.165-.353.364-.353.199 0 .361.16.361.353a.359.359 0 01-.361.353.36.36 0 01-.364-.353m5.627-1.666c0 .935-.255 3.969-3.52 4.025h-.006c-.25.025-.53-.081-.83-.272a1.8 1.8 0 01-.168-.118.433.433 0 00-.59.068.401.401 0 00.058.566c.003.002.009.005.011.008a2.823 2.823 0 00.877.47c-.339.754-.991 1.138-1.95 1.138-1.153 0-1.568-1.18-1.644-1.432a27.1 27.1 0 000-.988v-1.39h1.37a1.2 1.2 0 001.126.762c.664 0 1.205-.526 1.205-1.173 0-.648-.541-1.174-1.205-1.174-.515 0-.952.32-1.126.762H12.41V9.677h1.316v2.081a1.179 1.179 0 00-.709 1.07c0 .648.541 1.174 1.205 1.174.515 0 .955-.32 1.126-.765h2.403v1.381a1.174 1.174 0 00-.787 1.096c0 .647.54 1.173 1.205 1.173.663 0 1.204-.523 1.204-1.173a1.169 1.169 0 00-.781-1.093v-1.795a.414.414 0 00-.423-.41h-2.824a1.19 1.19 0 00-.776-.705V9.677h2.448a.413.413 0 00.42-.409V7.865c.457-.165.788-.594.788-1.098 0-.647-.541-1.174-1.205-1.174s-1.204.524-1.204 1.174c0 .501.327.927.781 1.095v.995h-4.185v-3.46c0-.19.006-.91.009-1.14.103-.25.588-1.28 1.638-1.28.956 0 1.608.384 1.947 1.134-.776.239-1.26.858-1.482 1.471l-.064.188a.41.41 0 00.274.515.427.427 0 00.53-.269l.053-.16c.112-.313.501-1.025 1.336-1.025 3.266.006 3.521 3.084 3.521 4.028 0 .37-.05 1.535-.616 2.516a3.431 3.431 0 00-.398-.255c.516-.653.286-1.328-.115-1.74l-.078-.075c-.165-.154-.409-.126-.569.036-.16.165-.129.448.04.605.375.387.064.686-.042.784-.014.014-.023.034-.034.05a4.306 4.306 0 00-.706-.136.417.417 0 00-.465.361.416.416 0 00.37.454h.003c.733.078 1.319.35 1.747.804.799 1.033.863 2.462.863 2.874M6.11 16.263a.36.36 0 01-.364-.353.36.36 0 01.364-.353c.199 0 .361.157.361.353a.355.355 0 01-.361.353m3.109-2.196c.199 0 .361.16.361.353a.36.36 0 01-.361.355.357.357 0 01-.361-.353.357.357 0 01.361-.355M6.355 9.26a.357.357 0 01-.364.353.359.359 0 01-.361-.353c0-.196.162-.353.361-.353a.36.36 0 01.364.353m3.2-2.465a.36.36 0 01-.365.353.357.357 0 01-.361-.353c0-.196.162-.353.361-.353a.36.36 0 01.364.353m.37 14.227c-.947 0-1.594-.378-1.936-1.115.244-.064.49-.17.74-.33a.402.402 0 00.132-.555c-.003-.003-.006-.009-.009-.011a.425.425 0 00-.583-.118c-.294.188-.571.297-.826.269-.025 0-.045.008-.07.011-.011 0-.022-.003-.034-.003-3.274 0-3.529-3.087-3.529-4.03 0-.379.056-1.589.661-2.583.076.039.157.07.238.098-.117.717.328 1.23.888 1.442l.093.034a.422.422 0 00.537-.25.408.408 0 00-.249-.52c-.003 0-.005-.003-.008-.003l-.073-.025c-.345-.13-.387-.353-.361-.524.039 0 .08.006.12.006.429 0 .801-.093 1.115-.28a.404.404 0 00.148-.552c-.002-.006-.005-.009-.008-.014a.424.424 0 00-.577-.138c-.221.132-.516.182-.871.152-.359-.031-.63-.13-.821-.289-.765-1.03-.83-2.42-.83-2.83 0-.943.256-4.03 3.612-4.03h.002c.25-.008.474.045.673.163a.426.426 0 00.577-.143.404.404 0 00-.146-.56 2.01 2.01 0 00-.53-.21c.345-.729.992-1.101 1.933-1.101 1.152 0 1.569 1.179 1.645 1.431a28.9 28.9 0 000 .986v.986h-1.253a1.2 1.2 0 00-1.123-.762c-.664 0-1.204.524-1.204 1.174 0 .65.54 1.173 1.204 1.173a1.2 1.2 0 001.123-.764h1.255V8.85H7.126a1.2 1.2 0 00-1.124-.762c-.664 0-1.204.527-1.204 1.174 0 .647.54 1.173 1.204 1.173.516 0 .953-.319 1.126-.764h4.451v1.45H9.226a.415.415 0 00-.42.41v1.792a1.171 1.171 0 00-.781 1.096c0 .647.54 1.173 1.204 1.173.664 0 1.205-.526 1.205-1.173 0-.505-.328-.928-.785-1.096V11.94h1.933v5.336H6.54v-.272c.457-.168.784-.594.784-1.098 0-.647-.54-1.174-1.204-1.174-.664 0-1.204.527-1.204 1.174 0 .504.327.93.784 1.098v.683c0 .227.188.41.42.41h5.462v.504c0 .193-.005.91-.008 1.142-.115.255-.597 1.278-1.65 1.278m11.09-12.16c0-.79-.2-4.647-4.138-4.837-.431-1.208-1.423-1.869-2.818-1.869-1.064 0-1.714.639-2.078 1.177-.398-.603-1.059-1.177-2.056-1.177-1.395 0-2.384.659-2.818 1.86-3.936.146-4.137 4.05-4.137 4.846 0 .448.064 1.933.86 3.135-.796 1.204-.86 2.691-.86 3.142 0 .79.199 4.65 4.137 4.838.431 1.207 1.423 1.868 2.82 1.868 1.065 0 1.715-.638 2.08-1.176.394.602 1.058 1.176 2.055 1.176 1.395 0 2.384-.655 2.818-1.857 3.936-.148 4.137-4.053 4.137-4.849 0-.448-.064-1.932-.86-3.134.793-1.207.858-2.695.858-3.143"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconNeuralNetworkLight;