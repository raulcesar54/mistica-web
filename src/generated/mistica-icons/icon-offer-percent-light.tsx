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

const IconOfferPercentLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M12.003 2.16c.572 0 .939.672 1.297 1.32.213.389.507.924.723.983.235.061.75-.25 1.162-.5.647-.391 1.26-.761 1.737-.484.484.28.468 1.003.45 1.768-.008.454-.022 1.073.144 1.238.165.165.787.151 1.238.143.765-.017 1.487-.031 1.767.45.275.477-.095 1.09-.484 1.737-.25.415-.563.93-.499 1.163.059.216.594.51.983.723l.278.153c.55.312 1.042.654 1.042 1.144 0 .571-.673.938-1.32 1.296-.389.213-.924.507-.983.723-.061.235.25.75.499 1.163.392.647.762 1.26.484 1.736-.28.485-1.002.468-1.767.451-.454-.008-1.073-.022-1.238.143-.166.165-.152.787-.143 1.238.017.765.03 1.488-.451 1.768-.476.274-1.09-.095-1.737-.485-.414-.25-.93-.563-1.162-.498-.194.052-.452.491-.657.862l-.066.12c-.358.653-.725 1.323-1.297 1.323-.571 0-.938-.672-1.297-1.32-.213-.389-.507-.924-.722-.983-.236-.061-.751.25-1.166.499-.647.392-1.26.762-1.736.485-.485-.28-.468-1.003-.451-1.768.008-.454.022-1.073-.143-1.238-.166-.165-.787-.151-1.238-.143-.765.017-1.488.03-1.768-.45-.274-.477.095-1.09.485-1.738.249-.414.563-.93.498-1.162-.053-.194-.491-.452-.862-.657l-.12-.066C2.832 12.94 2.16 12.572 2.16 12c0-.571.672-.938 1.32-1.297.389-.212.924-.507.983-.722.061-.236-.25-.751-.5-1.166-.391-.647-.761-1.26-.484-1.736.28-.485 1.003-.468 1.768-.451.454.008 1.073.022 1.238-.143.165-.165.151-.787.143-1.238-.017-.765-.031-1.488.45-1.768.477-.274 1.09.096 1.737.485.415.25.93.563 1.163.499.216-.06.51-.594.723-.984.361-.647.73-1.319 1.302-1.319zm0 .566c-.238 0-.566.594-.804 1.03-.32.583-.624 1.135-1.07 1.256a.745.745 0 01-.21.025c-.417 0-.89-.286-1.39-.588-.389-.236-.977-.592-1.167-.482-.196.115-.182.81-.171 1.269.014.675.028 1.313-.306 1.647-.333.333-.971.319-1.647.305-.459-.011-1.156-.025-1.268.17-.11.191.246.78.481 1.169.353.583.687 1.134.56 1.6-.12.448-.669.75-1.254 1.07-.435.238-1.031.565-1.031.803 0 .238.594.566 1.03.804.583.32 1.135.625 1.256 1.07.123.465-.208 1.014-.56 1.6-.236.392-.592.98-.482 1.168.114.196.809.182 1.268.173.676-.014 1.314-.028 1.647.306.334.333.32.972.306 1.647-.011.46-.025 1.157.17 1.269.191.109.78-.247 1.169-.482.496-.3.972-.585 1.39-.585.07 0 .14.008.21.028.447.12.75.669 1.07 1.254.237.435.565 1.031.803 1.031.238 0 .566-.594.804-1.03.32-.583.625-1.135 1.07-1.255.465-.124 1.014.21 1.6.56.389.235.977.59 1.168.482.196-.115.182-.81.173-1.27-.014-.674-.028-1.313.306-1.646.333-.334.972-.323 1.647-.306.459.009 1.157.025 1.269-.173.109-.19-.247-.78-.482-1.168-.353-.583-.687-1.135-.56-1.6.12-.448.669-.75 1.254-1.07.435-.238 1.031-.566 1.031-.804 0-.238-.594-.566-1.03-.804-.583-.32-1.135-.624-1.255-1.07-.124-.465.21-1.014.56-1.6.235-.389.59-.977.482-1.167-.115-.196-.81-.182-1.27-.171-.674.014-1.313.028-1.646-.306-.334-.333-.323-.971-.306-1.647.009-.459.025-1.156-.173-1.268-.19-.11-.78.246-1.168.481-.583.353-1.135.687-1.6.56-.448-.12-.75-.669-1.07-1.254-.238-.435-.566-1.031-.804-1.031zm3.56 4.72a.28.28 0 01.048.392l-6.779 8.667a.276.276 0 01-.221.109.28.28 0 01-.221-.454l6.781-8.667a.28.28 0 01.392-.047zm-1.232 5.686c.498 0 .89.134 1.165.4.286.275.432.678.432 1.197 0 .518-.146.921-.432 1.196-.272.266-.664.4-1.162.4-.499 0-.891-.134-1.166-.4-.285-.275-.431-.678-.431-1.196 0-.519.146-.922.429-1.196.274-.267.666-.401 1.165-.401zm.003.563c-.717 0-1.037.32-1.037 1.036 0 .718.32 1.037 1.037 1.037.717 0 1.036-.32 1.036-1.037 0-.717-.32-1.036-1.036-1.036zM9.67 7.67c.498 0 .89.134 1.165.4.286.275.431.678.431 1.196 0 .519-.145.922-.43 1.197-.275.266-.668.4-1.166.4-.499 0-.891-.134-1.165-.4-.286-.275-.432-.678-.432-1.197 0-.518.146-.921.432-1.196.274-.266.666-.4 1.165-.4zm0 .563c-.717 0-1.037.32-1.037 1.036 0 .717.32 1.037 1.037 1.037.717 0 1.036-.32 1.036-1.037 0-.717-.32-1.036-1.036-1.036z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconOfferPercentLight;