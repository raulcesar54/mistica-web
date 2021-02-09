import * as React from 'react';
import {StorySection, useTextField, useSelect} from './helpers';
import {
    Stack,
    DataCard,
    ButtonPrimary,
    ButtonLink,
    Inline,
    Text7,
    createUseStyles,
    ResponsiveLayout,
    IconAcademicLight,
    useTheme,
    Circle,
} from '..';
import {Placeholder} from '../placeholder';

export default {
    title: 'Components/Cards/DataCard',
};

export const Default: StoryComponent = () => {
    const {colors} = useTheme();
    const [asset, assetSelect] = useSelect('asset', 'icon', ['icon', 'image', 'none']);
    const [headline, headlineTextField] = useTextField('headline', 'priority', true);
    const [subtitle, subtitleTextField] = useTextField('subtitle', 'Some subtitle', true);
    const [title, titleTextField] = useTextField('title', 'Some title', true);
    const [description, descriptionTextField] = useTextField(
        'description',
        'This is a description for the card',
        true
    );
    const [actions, actionsSelect] = useSelect('actions', 'button', ['button', 'link', 'button & link']);

    let icon;
    if (asset === 'icon') {
        icon = (
            <Circle size={40} backgroundColor={colors.iconDisabled}>
                <IconAcademicLight />
            </Circle>
        );
    } else if (asset === 'image') {
        icon = <Circle size={40} backgroundImage="https://i.imgur.com/QwNlo5s.png" />;
    }

    const button = actions.includes('button') ? (
        <ButtonPrimary small href="https://google.com">
            Action
        </ButtonPrimary>
    ) : undefined;

    const buttonLink = actions.includes('link') ? (
        <ButtonLink href="https://google.com">Link</ButtonLink>
    ) : undefined;

    return (
        <>
            <Stack space={16}>
                {assetSelect}
                {headlineTextField}
                {titleTextField}
                {subtitleTextField}
                {descriptionTextField}
                {actionsSelect}
            </Stack>
            <div data-testid="data-card">
                <StorySection title="DataCard">
                    <DataCard
                        icon={icon}
                        headline={headline}
                        title={title}
                        subtitle={subtitle}
                        description={description}
                        button={button as any} // button or buttonLink (or both) will be defined
                        buttonLink={buttonLink}
                    />
                </StorySection>
            </div>
        </>
    );
};

Default.storyName = 'DataCard';

export const WithBody: StoryComponent = () => {
    const {colors} = useTheme();
    return (
        <DataCard
            headline="headline"
            title="title"
            subtitle="subtitle"
            description="description"
            body={<Placeholder />}
            icon={
                <Circle backgroundColor={colors.iconDisabled} size={40}>
                    <IconAcademicLight />
                </Circle>
            }
            button={
                <ButtonPrimary small href="https://google.com">
                    Action
                </ButtonPrimary>
            }
            buttonLink={<ButtonLink href="https://google.com">Link</ButtonLink>}
        />
    );
};

WithBody.storyName = 'DataCard with body';

export const WithIconImage: StoryComponent = () => (
    <DataCard
        headline="headline"
        title="title"
        subtitle="subtitle"
        description="description"
        icon={<Circle size={40} backgroundImage="https://i.imgur.com/QwNlo5s.png" />}
        button={
            <ButtonPrimary small href="https://google.com">
                Action
            </ButtonPrimary>
        }
        buttonLink={<ButtonLink href="https://google.com">Link</ButtonLink>}
    />
);

WithIconImage.storyName = 'DataCard with icon image';

const useCardGroupStyles = createUseStyles(() => ({
    group: {
        '& > *': {
            width: 300,
        },
    },
}));

export const Group: StoryComponent = () => {
    const classes = useCardGroupStyles();
    const {colors} = useTheme();
    return (
        <ResponsiveLayout>
            <Stack space={16}>
                <Text7 regular>
                    We can group multiple cards and they adjust to the same height. The card actions are
                    always fixed on bottom:
                </Text7>
                <Inline space={16} className={classes.group}>
                    <DataCard
                        headline="headline"
                        title="title"
                        subtitle="subtitle"
                        description="description"
                        icon={
                            <Circle size={40} backgroundColor={colors.iconDisabled}>
                                <IconAcademicLight />
                            </Circle>
                        }
                        buttonLink={<ButtonLink href="https://google.com">Link</ButtonLink>}
                    />
                    <DataCard
                        title="title"
                        description="description"
                        icon={
                            <Circle size={40} backgroundColor={colors.iconDisabled}>
                                <IconAcademicLight />
                            </Circle>
                        }
                        buttonLink={<ButtonLink href="https://google.com">Link</ButtonLink>}
                    />
                </Inline>
            </Stack>
        </ResponsiveLayout>
    );
};

Group.storyName = 'DataCard group';