import * as React from 'react';
import {StorySection} from './helpers';
import SectionTitle from '../section-title';
import {Placeholder} from '../placeholder';

export default {
    title: 'Components/Others/SectionTitle',
};

export const Default: StoryComponent = () => (
    <StorySection title="SectionTitle example">
        <Placeholder />
        <SectionTitle>This is a section title</SectionTitle>
        <Placeholder />
    </StorySection>
);

Default.storyName = 'SectionTitle';
