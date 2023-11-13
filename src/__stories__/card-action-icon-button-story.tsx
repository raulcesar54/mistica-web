import * as React from 'react';
import {
    DataCard,
    ButtonPrimary,
    ButtonLink,
    IconMobileDeviceRegular,
    skinVars,
    Circle,
    Tag,
    IconShopRegular,
    CardActionIconButton,
    Text2,
    Stack,
} from '..';

export default {
    title: 'Components/Cards/CardActionIconButton',
};

const MyCustomCardActionComponent = () => {
    const [pressCount, setPressCount] = React.useState(0);

    return (
        <CardActionIconButton
            Icon={IconShopRegular}
            onPress={() => {
                alert(`Custom card action component press: ${pressCount + 1}`);
                setPressCount(pressCount + 1);
            }}
            label="Shop"
        />
    );
};

export const Default: StoryComponent = () => {
    return (
        <Stack space={16}>
            <Text2 regular>
                You can use CardActionIconButton component to add top actions to most mistica cards:
            </Text2>
            <DataCard
                actions={[
                    <CardActionIconButton
                        key="1"
                        Icon={IconMobileDeviceRegular}
                        onPress={() => {
                            alert('icon press');
                        }}
                        label="Device"
                    />,
                    <MyCustomCardActionComponent key="2" />,
                ]}
                icon={
                    <Circle backgroundColor={skinVars.colors.brandLow} size={40}>
                        <IconShopRegular color={skinVars.colors.brand} />
                    </Circle>
                }
                headline={<Tag type="promo">Headline</Tag>}
                title="Title"
                subtitle="Subtitle"
                description="Description"
                button={
                    <ButtonPrimary small onPress={() => {}}>
                        Action
                    </ButtonPrimary>
                }
                buttonLink={<ButtonLink onPress={() => {}}>Link</ButtonLink>}
            />
        </Stack>
    );
};

Default.storyName = 'CardActionIconButton';
