import React, { FC } from 'react';
import { Image, View, Text } from 'react-native';
import PrimaryButton from '../PrimaryButton';
import { IImageSelectorComponentProps } from './types';

const ImageSelectorComponent: FC<IImageSelectorComponentProps> = ({
  pickImage,
  image,
  text,
}) => {
  return (
    <View className="items-center justify-center">
      <View className="mb-14 w-80">
        {!image && <Text className="text-xl font-bold ">{text}</Text>}
      </View>

      {!image ? (
        <PrimaryButton
          label={'Choose image '}
          type={'filled'}
          textSize={16}
          color={'primary'}
          size={'small'}
          bordered={true}
          onPress={pickImage}
        />
      ) : (
        <Image
          source={{ uri: image }}
          style={{ width: 500, height: 400, resizeMode: 'contain' }}
        />
      )}
    </View>
  );
};
export default ImageSelectorComponent;
