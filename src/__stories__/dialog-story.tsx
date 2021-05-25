import * as React from 'react';
import {ButtonPrimary} from '../button';
import {confirm, alert} from '../dialog';
import ButtonLayout from '../button-layout';
import IcnInfo from '../icons/icon-info';

export default {
    title: 'Components/Dialogs/Alert',
};

export const Default: StoryComponent = () => (
    <>
        <ButtonLayout>
            <ButtonPrimary onPress={() => alert({title: 'title', message: 'message'})}>
                Open one button
            </ButtonPrimary>
        </ButtonLayout>
        <ButtonLayout>
            <ButtonPrimary onPress={() => confirm({message: 'Hello', title: 'title'})}>
                Open two buttons
            </ButtonPrimary>
        </ButtonLayout>
        <ButtonLayout>
            <ButtonPrimary
                onPress={() =>
                    confirm({
                        title: 'Introduce tu numero de linea',
                        message:
                            'Esta cuenta ya está asociada a una cuenta Movistar. Si ya te has registrado antes, debes iniciar sesión.',
                        icon: <IcnInfo />,
                    })
                }
            >
                Open two buttons (with icon)
            </ButtonPrimary>
        </ButtonLayout>
        <ButtonLayout>
            <ButtonPrimary onPress={() => confirm({message: 'Hello', destructive: true})}>
                Open two buttons destructive
            </ButtonPrimary>
        </ButtonLayout>
    </>
);

Default.storyName = 'alert() and confirm()';
