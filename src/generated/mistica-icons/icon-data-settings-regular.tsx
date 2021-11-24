/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconDataSettingsRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M9.255 16.527c1.328 0 1.975-.636 1.975-1.942 0-1.305-.647-1.94-1.975-1.94s-1.975.635-1.975 1.94c0 1.308.647 1.942 1.975 1.942zm0-5.087c2.005 0 3.204 1.176 3.204 3.148 0 1.972-1.199 3.149-3.204 3.149-2.006 0-3.205-1.177-3.205-3.149s1.2-3.148 3.205-3.148zm11.23-1.967V6.375a6.15 6.15 0 01-1.42.597c-1.214.359-2.799.555-4.471.555-1.67 0-3.258-.196-4.468-.555a5.962 5.962 0 01-1.44-.613v1.134c.023-.003.042-.006.065-.006h1.01c.704 0 1.275.56 1.275 1.252v.732c.233.056.451.123.664.207l.625-.614a1.304 1.304 0 011.815 0l.74.729c.24.235.375.552.375.89 0 .124-.023.241-.056.356 1.314-.042 2.557-.204 3.515-.487 1.009-.306 1.569-.754 1.77-1.079zm0 4.754v-3.143c-.401.246-.877.46-1.418.619-1.216.359-2.804.555-4.47.555-.107 0-.213-.003-.32-.003.07.188.135.38.185.582h.745c.703 0 1.275.56 1.275 1.253v.994c0 .232-.07.448-.182.636.896-.081 1.728-.219 2.414-.423 1.009-.297 1.569-.745 1.77-1.07zm0 4.414v-2.804c-.404.247-.877.46-1.418.62-1.216.358-2.801.554-4.47.554-.11 0-.216-.005-.325-.005l.607.599a1.242 1.242 0 010 1.782l-.739.725c-.199.193-.46.288-.725.325.383.025.773.04 1.168.04 1.549 0 3.014-.18 4.12-.505.812-.244 1.782-.67 1.782-1.33zm-8.21-.288l.921.905.815-.726-.921-.98a.593.593 0 01-.118-.695c.18-.353.308-.765.384-1.221a.612.612 0 01.608-.507h1.246l.045-1.04-1.291-.044a.612.612 0 01-.608-.507 4.222 4.222 0 00-.384-1.222.593.593 0 01.118-.694l.921-.905-.74-.801-.997.905a.624.624 0 01-.703.115 4.47 4.47 0 00-1.246-.379.607.607 0 01-.518-.596V8.737L8.75 8.692l-.045 1.266a.607.607 0 01-.518.597c-.463.072-.88.198-1.244.375a.628.628 0 01-.709-.115l-.921-.905-.815.726.918.977c.196.19.236.488.101.723-.162.283-.3.804-.364 1.196a.614.614 0 01-.608.507H3.3l-.045 1.04 1.291.044c.3 0 .558.213.608.507.064.395.205.916.364 1.196a.595.595 0 01-.1.723l-.92.905.74.8.997-.904a.622.622 0 01.706-.115 4.36 4.36 0 001.244.376c.297.047.515.3.515.596v1.224l1.056.045c.023 0 .045-.02.045-.045v-1.224c0-.297.219-.549.518-.596a4.407 4.407 0 001.247-.379.637.637 0 01.708.12zm-1.239 1.753c.521.12 1.096.21 1.71.272a1.22 1.22 0 01-.418-.266l-.625-.613a5.221 5.221 0 01-.664.207v.4h-.003zm-.568-16.395c-.939.278-1.527.648-1.706 1.048.17.403.77.776 1.717 1.059 1.1.325 2.56.504 4.115.504 1.554 0 3.017-.18 4.115-.504.935-.277 1.535-.647 1.714-1.045-.219-.513-1.025-.854-1.723-1.062-1.1-.324-2.563-.504-4.117-.504-1.552 0-3.014.18-4.115.504zm8.588-1.156c1.762.52 2.658 1.358 2.658 2.484v13.602c0 1.126-.893 1.964-2.658 2.485-1.219.359-2.807.555-4.473.555-1.407 0-2.757-.149-3.883-.412a1.269 1.269 0 01-.94.417H8.75c-.702 0-1.274-.56-1.274-1.252v-.731a5.969 5.969 0 01-.666-.204l-.625.613c-.485.476-1.328.476-1.815 0l-.74-.726a1.246 1.246 0 01.003-1.784l.616-.608a5.799 5.799 0 01-.204-.658H3.3a1.266 1.266 0 01-1.275-1.252v-.994c0-.69.572-1.253 1.275-1.253h.745c.05-.201.117-.434.204-.66l-.619-.608a1.248 1.248 0 01.003-1.785l.737-.725a1.304 1.304 0 011.815 0l.625.616c.21-.081.434-.148.666-.204v-.617c-.005-.028-.017-.056-.017-.084V5.04c0-.183.026-.362.076-.53.252-.863 1.12-1.521 2.583-1.953 1.212-.358 2.8-.554 4.47-.554 1.667-.003 3.255.193 4.468.552z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDataSettingsRegular;
