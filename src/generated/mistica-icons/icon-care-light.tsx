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

const IconCareLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M16.42 18.215c.378-.246.378-.406.226-.694a.582.582 0 00-.705-.289L12.88 18.3c-.033.009-.066.009-.1.009-.219.143-.47.23-.731.23H8.23a.418.418 0 01-.421-.424c0-.238.185-.423.42-.423h3.82c.278 0 .564-.288.564-.568 0-.255-.16-.518-.454-.527l-.218.009c-.622.008-1.942.042-3.169-.737-.016-.008-.68-.381-2.778-.431v3.56l3.66 1.77c.27.16.597.23.992.23.337 0 .622-.05.85-.152.019-.02 3.764-1.893 4.924-2.63zm-11.264.992v-3.908a.449.449 0 00-.445-.448H3.442a.45.45 0 00-.445.448v4.807c0 .246.201.448.445.448h1.269a.45.45 0 00.445-.448v-.832a.096.096 0 010-.067zm12.205-2.146c.294.569.411 1.289-.488 1.866-1.201.762-4.862 2.602-5.022 2.678-.345.16-.748.238-1.202.238-.546 0-1.008-.11-1.386-.33l-3.266-1.586v.179c0 .72-.58 1.297-1.286 1.297H3.442a1.292 1.292 0 01-1.286-1.297v-4.807c0-.72.58-1.297 1.286-1.297h1.269c.445 0 .84.23 1.064.586 2.572.025 3.378.518 3.46.577 1 .627 2.1.602 2.686.594.1-.009.185-.009.244-.009.722.017 1.285.62 1.285 1.373 0 .025-.008.059-.008.084l2.218-.779a1.406 1.406 0 011.7.633zM4.568 16.14a.513.513 0 01-.53.526.511.511 0 01-.52-.526.51.51 0 01.52-.527c.303 0 .53.221.53.527zm16.437-7.435V3.893a.449.449 0 00-.445-.448h-1.27a.45.45 0 00-.445.448v.832c0 .025.009.042 0 .067v3.916c0 .247.202.448.446.448h1.269a.451.451 0 00.445-.45zm-2.997-.142V5.01l-3.664-1.779c-.269-.151-.597-.23-.992-.23-.336 0-.622.05-.848.16-.026.008-3.765 1.89-4.922 2.627-.378.239-.378.398-.227.695a.592.592 0 00.706.289l3.056-1.068c.034-.016.076-.016.118-.016.21-.135.453-.23.714-.23v.008h3.823c.236 0 .42.188.42.423 0 .23-.184.423-.42.423h-3.82v-.008c-.278 0-.563.288-.563.569 0 .263.16.526.454.526.058.009.134 0 .218 0 .63-.017 1.938-.042 3.165.728.017.009.681.393 2.782.435zm2.552-5.967c.705 0 1.285.586 1.285 1.297v4.815c0 .712-.58 1.297-1.285 1.297h-1.27c-.445 0-.84-.238-1.067-.585-2.568-.025-3.375-.518-3.459-.577-.997-.636-2.1-.61-2.686-.594h-.252c-.715-.009-1.275-.61-1.275-1.373 0-.025.009-.05.009-.075l-2.219.77a1.388 1.388 0 01-1.697-.636c-.294-.568-.412-1.288.487-1.865 1.202-.762 4.863-2.603 5.014-2.678.773-.348 1.908-.306 2.594.092l3.269 1.586v-.18c0-.711.58-1.297 1.286-1.297h1.266v.003zm-.101 5.264a.511.511 0 01-.521.526.506.506 0 01-.521-.526.51.51 0 01.52-.527c.295 0 .522.23.522.527zm-6.745 3.16c.033-.144.092-.485-.068-.628a.602.602 0 00-.319-.11h-.042c-.202 0-.344.06-.504.143-.1.05-.202.118-.32.188 0 0-.008 0-.025.008-.042.017-.134.06-.176.076a1.13 1.13 0 01-.252.042h-.017a.96.96 0 01-.454-.118c-.126-.075-.235-.142-.336-.196a1.045 1.045 0 00-.504-.143c-.168.009-.286.05-.353.11-.168.143-.11.482-.076.627.118.482.345.992.673 1.51.277.431.487.695.865 1.092.067.068.151.143.193.177h.009a1.25 1.25 0 01.151-.151v-.009l.025-.025a6.1 6.1 0 00.857-1.084c.34-.527.563-1.034.673-1.51zm.479-1.273c.37.323.487.84.344 1.465a5.897 5.897 0 01-.79 1.77 6.93 6.93 0 01-.958 1.214c0 .008-.008.008-.008.016-.042.042-.185.188-.303.272a.866.866 0 01-.336.151.396.396 0 01-.109.017h-.084a.381.381 0 01-.1-.017.866.866 0 01-.337-.15 1.755 1.755 0 01-.303-.273 7.254 7.254 0 01-.974-1.23c-.378-.601-.647-1.195-.782-1.77-.151-.627-.025-1.145.345-1.465.21-.187.504-.296.815-.313h.084c.31 0 .622.084.916.246.11.06.218.126.344.205.009 0 .026.008.034.008.017 0 .034-.008.042-.008a6.75 6.75 0 01.345-.205 1.89 1.89 0 01.907-.246h.084c.32.017.608.129.824.313z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCareLight;