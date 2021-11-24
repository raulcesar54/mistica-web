/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconGroupLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M9.71 5.743c-.522.51-.785 1.306-.785 2.365 0 1.056.263 1.851.784 2.358.501.493 1.266.742 2.269.742 1.003 0 1.767-.249 2.274-.742.524-.51.788-1.302.788-2.358s-.264-1.852-.788-2.365c-.507-.495-1.271-.745-2.271-.745-1.006 0-1.77.25-2.272.745zm2.268 6.26c-1.213 0-2.16-.324-2.812-.963-.678-.664-1.023-1.65-1.023-2.932 0-1.28.345-2.272 1.023-2.936.655-.644 1.602-.972 2.812-.972 1.21 0 2.16.328 2.818.97.683.666 1.03 1.655 1.03 2.938 0 1.282-.347 2.268-1.03 2.932-.658.642-1.605.964-2.818.964zm-6.709-1.316c-.21.205-.316.55-.316 1.02s.106.812.313 1.017c.202.199.533.3.978.3.448 0 .779-.101.983-.3.21-.205.317-.546.317-1.014 0-.47-.107-.813-.317-1.017-.204-.199-.535-.303-.983-.303-.443-.002-.77.099-.975.297zm.978 3.132c-.656 0-1.168-.176-1.524-.521-.367-.361-.555-.896-.555-1.591s.188-1.23.555-1.591c.356-.347.868-.527 1.524-.527.658 0 1.17.177 1.526.524.37.362.558.9.558 1.591 0 .695-.188 1.23-.558 1.591-.352.348-.868.524-1.526.524zm10.532-3.146c-.21.205-.316.55-.316 1.02 0 .468.106.81.316 1.014.205.199.535.3.983.3.448 0 .776-.101.98-.3.208-.204.314-.546.314-1.014 0-.47-.106-.812-.316-1.02-.202-.198-.532-.3-.978-.3-.448 0-.778.102-.983.3zm-.543 2.611c-.37-.361-.558-.896-.558-1.591s.188-1.23.558-1.591c.355-.35.868-.527 1.526-.527.659 0 1.171.177 1.527.524.367.362.555.9.555 1.594 0 .692-.185 1.227-.555 1.588-.356.348-.868.521-1.527.521-.658.003-1.17-.173-1.526-.518zm4.826 4.342v-.55c0-.565-.165-1.044-.487-1.38-.353-.376-.888-.566-1.547-.566h-1.207c.563.653.894 1.507.966 2.496h2.275zm-3.045 1.361v-.941c0-1.028-.305-1.896-.885-2.513-.636-.67-1.61-1.028-2.818-1.028H9.636c-1.207 0-2.173.359-2.81 1.028-.58.614-.884 1.482-.884 2.513v.941h12.075zM5.174 17.643c.07-.99.395-1.844.958-2.496H4.978c-.658 0-1.193.193-1.546.566-.314.333-.488.812-.488 1.378v.552h2.23zm15.966-2.496c.463.487.706 1.157.706 1.93v.708a.634.634 0 01-.627.64H18.8v.923c0 .244-.196.44-.44.44H5.598a.442.442 0 01-.44-.44v-.91H2.796a.638.638 0 01-.636-.641v-.706c0-.773.244-1.443.706-1.939.504-.523 1.232-.804 2.112-.804h2.095c.698-.423 1.569-.638 2.566-.638h4.678c.989 0 1.851.207 2.549.622h2.165c.877.002 1.605.28 2.11.815z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconGroupLight;
