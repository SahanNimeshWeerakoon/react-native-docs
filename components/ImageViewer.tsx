import { StyleSheet } from "react-native";
import { Image, type ImageSource  } from "expo-image";

type Props = {
    imageSource: ImageSource,
    selectedImage?: string,
}

export default function ImageViewer({ imageSource, selectedImage }: Props) {
    const selectedImageOrDefault = selectedImage ? { uri: selectedImage } : imageSource
    return <Image source={selectedImageOrDefault} style={styles.image} />
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
});