/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconHardDiskRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M20.269 20.442a.203.203 0 00.202-.204v-4.683l-.009-.056a.199.199 0 00-.196-.188H3.468a.203.203 0 00-.202.204v4.723c0 .112.093.204.202.204h16.8zM4.87 3.448L3.457 14.07c.005 0 .008-.003.014-.003h16.798c.005 0 .011.003.017.003L18.964 3.577c-.031-.168-.16-.317-.297-.317L5.076 3.246a.202.202 0 00-.205.202zm16.84 12.009c.002.022.005.039.005.061v4.723c0 .798-.647 1.448-1.445 1.448H3.47a1.45 1.45 0 01-1.446-1.448v-4.723c0-.03.009-.061.011-.092 0-.02-.005-.037-.002-.054L3.636 3.367C3.63 2.653 4.28 2 5.076 2l13.59.014c.748 0 1.376.563 1.524 1.37l1.49 11.826c.009.034.009.07.015.106l.014.12c.002.01 0 .012 0 .02zM11.87 7.95c-.893 0-.893.372-.893.532 0 .16 0 .53.893.53.894 0 .894-.37.894-.53 0-.16 0-.532-.894-.532zm0 1.89c-1.552 0-1.72-.95-1.72-1.358 0-.41.168-1.362 1.72-1.362 1.555 0 1.723.953 1.723 1.362-.003.409-.171 1.358-1.723 1.358zm6.053 8.869c.505 0 .703-.196.703-.706 0-.507-.198-.703-.703-.703-.504 0-.703.199-.703.703 0 .51.196.706.703.706zm0-2.238c.958 0 1.53.574 1.53 1.532 0 .96-.572 1.535-1.53 1.535-.958 0-1.53-.574-1.53-1.535-.002-.958.572-1.532 1.53-1.532zM6.07 4.765c-.473 0-.748-.174-.748-.54 0-.37.275-.542.748-.542.47 0 .748.174.748.541 0 .37-.275.54-.748.54zm11.221 0c-.473 0-.748-.174-.748-.54 0-.37.275-.542.748-.542.47 0 .748.174.748.541 0 .37-.277.54-.748.54zm1.602 8.84c-.473 0-.747-.174-.747-.54 0-.37.274-.541.747-.541.474 0 .748.17.748.54s-.274.541-.748.541zM5.09 12.065c-.135.123-.208.24-.202.324.008.093.118.216.291.33.297.194.748.34 1.196-.07 1.003-.918 2.168-2.355 2.101-2.722-.011-.003-.025-.003-.04-.003-.492 0-2.548 1.41-3.346 2.14zm2.266-3.583c0 .347.053.664.134.952.588-.266 1.129-.38 1.468-.16a.756.756 0 01.344.589c.026.327-.154.742-.425 1.168l.02.008c.736.353 1.739.532 2.971.532 4.516 0 4.516-2.327 4.516-3.09 0-.764 0-3.094-4.516-3.094-4.512.002-4.512 2.33-4.512 3.095zM4.73 13.417c-.513-.333-.644-.706-.667-.958-.02-.246.045-.619.468-1.008.017-.014.866-.756 1.846-1.395 0-.003-.003-.003-.003-.006a4.6 4.6 0 01-.26-1.571c0-1.622.748-4.339 5.753-4.339 5.011 0 5.76 2.717 5.76 4.339 0 1.619-.749 4.336-5.76 4.336-1.42 0-2.602-.218-3.51-.655l-.148-.073c-.034-.017-.053-.045-.081-.067a15.636 15.636 0 01-1.196 1.238c-.348.319-.754.482-1.174.482a1.855 1.855 0 01-1.028-.323z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconHardDiskRegular;
