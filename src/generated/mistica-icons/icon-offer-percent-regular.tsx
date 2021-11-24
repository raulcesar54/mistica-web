/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconOfferPercentRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M19.5 12.5l2.3-2.502a.76.76 0 00.164-.741.74.74 0 00-.567-.506l-3.328-.669.389-3.378a.749.749 0 00-1.057-.77L14.317 5.35l-1.666-2.964a.747.747 0 00-1.306 0L9.677 5.349 6.594 3.934a.747.747 0 00-.754.077.739.739 0 00-.302.693l.393 3.378-3.328.67a.756.756 0 00-.567.505.747.747 0 00.163.74L4.5 12.5l-2.3 2.502a.76.76 0 00-.164.741.74.74 0 00.567.506l3.328.669-.393 3.378a.76.76 0 00.302.693c.216.158.51.187.754.077l3.084-1.415 1.666 2.964a.747.747 0 001.306 0l1.667-2.964 3.084 1.415c.245.11.533.081.754-.077a.739.739 0 00.303-.693l-.39-3.378 3.33-.67a.756.756 0 00.566-.505.747.747 0 00-.163-.74L19.5 12.5zm-2.406 3.08a.745.745 0 00-.596.823l.317 2.738-2.502-1.15a.75.75 0 00-.966.312l-1.35 2.406-1.349-2.4a.743.743 0 00-.965-.318L7.18 19.14l.317-2.738a.753.753 0 00-.595-.823l-2.7-.544 1.864-2.03a.756.756 0 000-1.02L4.202 9.953l2.7-.543a.745.745 0 00.595-.823L7.18 5.85 9.683 7a.75.75 0 00.965-.313l1.35-2.396 1.35 2.4a.748.748 0 00.965.314l2.502-1.15-.317 2.738a.753.753 0 00.596.822l2.699.544-1.864 2.03a.756.756 0 000 1.021l1.864 2.03-2.7.54zm-2.19.49a.56.56 0 01-.563.564H9.65a.56.56 0 01-.562-.563.56.56 0 01.562-.563.554.554 0 00.562-.563V13.25h-.183a.56.56 0 01-.562-.563.56.56 0 01.562-.563h.188v-1.502a2.258 2.258 0 012.252-2.257c.514 0 1.019.178 1.417.5.24.198.279.554.082.795a.563.563 0 01-.793.082 1.11 1.11 0 00-.706-.25c-.62 0-1.124.505-1.124 1.125v1.502h1.691a.56.56 0 01.562.563.56.56 0 01-.562.563h-1.69v1.694c0 .197-.034.385-.097.563h3.098a.566.566 0 01.557.568z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M11.964 2.16c.535 0 .871.431.98.571.194.25.364.558.527.855.137.25.386.703.527.806.179-.014.641-.294.896-.448l.27-.161c.586-.343 1.178-.618 1.705-.312.616.356.596 1.174.582 1.966-.005.292-.016.824.056.984.16.072.692.061.986.056.79-.017 1.608-.034 1.967.582.353.608-.068 1.303-.474 1.975-.154.255-.434.72-.448.896.104.14.558.39.807.527.297.162.605.333.854.527.572.445.572.848.572.98 0 .535-.432.871-.572.98-.25.194-.557.364-.854.527-.25.137-.703.386-.807.527.014.179.294.641.448.896.406.672.827 1.367.474 1.975-.356.616-1.174.596-1.967.582-.291-.005-.826-.016-.986.056-.072.16-.061.692-.056.986.017.79.034 1.608-.582 1.967-.527.306-1.12.03-1.705-.31l-.27-.16c-.255-.155-.72-.435-.896-.449-.14.104-.39.557-.527.807-.163.297-.333.605-.527.854-.445.571-.848.571-.98.571-.535 0-.871-.43-.98-.571-.194-.25-.365-.557-.527-.854-.137-.25-.387-.703-.527-.807-.179.014-.641.294-.896.448-.672.406-1.367.826-1.975.474-.616-.356-.6-1.174-.582-1.967.005-.291.016-.826-.056-.986-.16-.073-.692-.061-.986-.056-.79.017-1.608.034-1.967-.583-.347-.607.073-1.302.476-1.974.154-.255.434-.72.448-.897-.103-.14-.557-.389-.806-.526-.297-.163-.605-.334-.855-.527-.571-.445-.571-.849-.571-.98 0-.535.431-.871.571-.98.25-.194.558-.365.855-.527.25-.138.703-.387.806-.527-.014-.18-.294-.641-.448-.896-.406-.673-.826-1.367-.473-1.975.356-.616 1.174-.6 1.966-.583.292.006.824.017.984-.056.072-.16.061-.692.056-.986-.017-.79-.034-1.608.582-1.966.608-.353 1.303.067 1.975.473.255.154.72.434.896.448.14-.103.39-.557.527-.806.162-.297.333-.605.527-.855.445-.571.848-.571.98-.571zm-.003 1.154c-.154.14-.39.574-.524.818-.341.619-.66 1.204-1.213 1.353-.568.151-1.179-.219-1.77-.574-.224-.135-.616-.373-.818-.429-.053.205-.045.672-.039.939.014.717.03 1.392-.381 1.803-.412.412-1.087.395-1.804.381-.266-.005-.734-.016-.938.04.056.201.294.593.428.818.359.59.726 1.201.575 1.77-.149.552-.734.874-1.353 1.213-.244.134-.675.37-.818.524.14.154.574.389.818.523.619.342 1.204.661 1.353 1.213.15.569-.219 1.18-.575 1.77-.134.225-.372.617-.428.818.204.054.672.045.938.04.717-.014 1.392-.031 1.804.38.412.412.395 1.087.381 1.805-.006.266-.017.733.04.938.2-.056.593-.294.817-.429.499-.302 1.009-.61 1.496-.61.092 0 .185.01.274.036.552.149.874.734 1.213 1.353.135.244.373.678.524.818.154-.14.39-.574.524-.818.342-.619.661-1.204 1.213-1.353.568-.151 1.18.219 1.77.574.224.135.616.373.818.429.053-.205.045-.672.04-.938-.015-.718-.032-1.393.38-1.804.412-.412 1.087-.395 1.804-.381.266.005.734.016.939-.04-.057-.201-.295-.593-.43-.817-.358-.592-.725-1.202-.573-1.77.148-.553.734-.875 1.353-1.214.243-.134.678-.372.818-.523-.14-.155-.575-.39-.818-.524-.62-.342-1.205-.661-1.353-1.213-.152-.569.218-1.18.574-1.77.134-.225.372-.617.429-.818-.205-.054-.673-.045-.939-.04-.717.014-1.392.031-1.804-.38-.412-.412-.395-1.087-.38-1.804.005-.267.016-.734-.04-.939-.202.056-.594.294-.818.429-.59.358-1.202.725-1.77.574-.552-.149-.874-.734-1.213-1.353-.135-.244-.373-.678-.524-.818zm3.737 3.88a.56.56 0 01.095.787l-6.781 8.664a.562.562 0 01-1.003-.345.55.55 0 01.12-.344l6.782-8.667a.561.561 0 01.787-.095zm-1.406 5.624c1.176 0 1.876.7 1.876 1.877 0 1.176-.703 1.877-1.876 1.877-1.174 0-1.877-.7-1.877-1.877 0-1.176.7-1.877 1.877-1.877zm0 1.124c-.558 0-.757.196-.757.756s.2.756.757.756c.557 0 .756-.196.756-.756s-.199-.756-.756-.756zM9.628 7.356c1.176 0 1.877.7 1.877 1.877 0 1.176-.7 1.877-1.877 1.877-1.174 0-1.877-.7-1.877-1.877s.7-1.877 1.877-1.877zm0 1.123c-.558 0-.757.2-.757.757 0 .557.2.756.757.756.557 0 .756-.196.756-.756s-.199-.757-.756-.757z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconOfferPercentRegular;
