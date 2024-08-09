import { View, Text } from 'react-native';
import React, { ReactNode } from 'react';
import Modal from 'react-native-modal';

interface Props {
  children: ReactNode;
  isModalOpen: boolean;
}

export const OpenModal: React.FC<Props> = ({ children, isModalOpen }) => {
  return (
    <Modal isVisible={isModalOpen}>
      <View style={{ flex: 1 }}>{children}</View>
    </Modal>
  );
};
