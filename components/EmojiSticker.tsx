import { View } from 'react-native';
import { type ImageSource } from 'expo-image';
import Animated, { useSharedValue, withSpring, useAnimatedStyle } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

type Props = {
    imageSize: number;
    stickerSource: ImageSource
}

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
    const scaleImage = useSharedValue(imageSize);
    const doubleTap = Gesture.Tap()
        .numberOfTaps(2)
        .onStart(() => {
            if(scaleImage.value !== imageSize * 2) scaleImage.value = scaleImage.value * 2;
            else scaleImage.value = Math.round(scaleImage.value / 2)
        });
    const imageStyle = useAnimatedStyle(() => {
        return {
            width: withSpring(scaleImage.value),
            height: withSpring(scaleImage.value)
        }
    })
    return (
        <View style={{ top: -350 }}>
            <Animated.Image source={stickerSource} style={{  width: imageSize, height: imageSize }} />
        </View>
    );
}
