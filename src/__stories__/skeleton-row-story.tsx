import * as React from 'react';
import {ThemeVariant, skinVars} from '..';
import {SkeletonRow} from '../skeletons';

export default {
    title: 'Components/Skeletons/Skeleton Row',
    parameters: {
        fullScreen: true,
    },
};

type Args = {
    inverse: boolean;
    ariaLabel: string;
};

export const Default: StoryComponent<Args> = ({inverse, ariaLabel}) => {
    return (
        <ThemeVariant isInverse={inverse}>
            <div
                style={{
                    background: inverse ? skinVars.colors.backgroundBrand : skinVars.colors.background,
                    padding: 16,
                }}
            >
                <SkeletonRow ariaLabel={ariaLabel} dataAttributes={{testid: 'skeleton-row'}} />
            </div>
        </ThemeVariant>
    );
};

Default.storyName = 'Skeleton Row';

Default.args = {
    inverse: false,
    ariaLabel: '',
};
