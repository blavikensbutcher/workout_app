import { SafeAreaView, View, Button } from 'react-native';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  onPress: () => void;
  className?: string;
}

export const ProfileBtn: React.FC<Props> = ({ children, onPress }) => {
  return (
    <SafeAreaView>
      <View className="bg-slate-900/90 rounded-lg m-2">
        <Button
          title={typeof children === 'string' ? children : 'error'}
          color={'cyan'}
          onPress={onPress}
        ></Button>
      </View>
    </SafeAreaView>
  );
};
