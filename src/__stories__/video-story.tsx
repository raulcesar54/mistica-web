import * as React from 'react';
import {Stack, ButtonPrimary, Inline, SectionTitle, Video} from '..';

export default {
    title: 'Components/Others/Video',
    component: Video,
};

const VIDEO_SRC = 'https://fr-cert1-es.mytelco.io/2O4-xBJqiMlAfLkseq8RkXs_mv2ACV7Hnt20HqXxNl-mK7KLI3M2dAw';
const POSTER_SRC = 'https://i.imgur.com/Fu7RiuY.jpg';

export const Default: StoryComponent = () => {
    const videoRef = React.useRef<HTMLVideoElement | null>(null);
    const videoRefWithPoster = React.useRef<HTMLVideoElement | null>(null);

    return (
        <Stack space={64} data-testid="video">
            <Stack space={16}>
                <SectionTitle>Auto Play</SectionTitle>
                <Video width={480} height={480 / 2.4} src={VIDEO_SRC} />
            </Stack>

            <Stack space={16}>
                <SectionTitle>Manual Play</SectionTitle>
                <Video
                    width={480}
                    height={480 / 2.4}
                    ref={videoRef}
                    autoPlay={false}
                    src={{src: VIDEO_SRC, type: 'video/mp4'}}
                />
                <Inline space={16}>
                    <ButtonPrimary
                        small
                        onPress={() => {
                            videoRef.current?.play();
                        }}
                    >
                        Play
                    </ButtonPrimary>
                    <ButtonPrimary
                        small
                        onPress={() => {
                            videoRef.current?.pause();
                        }}
                    >
                        Pause
                    </ButtonPrimary>
                </Inline>
            </Stack>

            <Stack space={16}>
                <SectionTitle>Manual Play with Poster</SectionTitle>
                <Video
                    poster={POSTER_SRC}
                    width={480}
                    height={480 / 2.4}
                    ref={videoRefWithPoster}
                    autoPlay={false}
                    src={{src: VIDEO_SRC, type: 'video/mp4'}}
                />
                <Inline space={16}>
                    <ButtonPrimary
                        small
                        onPress={() => {
                            if (videoRefWithPoster.current) {
                                videoRefWithPoster.current.currentTime = 0; // play from the beginning
                                videoRefWithPoster.current.play();
                            }
                        }}
                    >
                        Play
                    </ButtonPrimary>
                    <ButtonPrimary
                        small
                        onPress={() => {
                            videoRefWithPoster.current?.pause();
                            videoRefWithPoster.current?.load(); // to force showing the poster again
                        }}
                    >
                        Stop
                    </ButtonPrimary>
                </Inline>
            </Stack>
        </Stack>
    );
};

Default.storyName = 'Video';