import {Animated, Modal, StatusBar, View} from 'react-native';
import {useCustomModal} from './useCustomModal';
import {styles} from './CustomModalStyles';

export const CustomModal = ({
  visible,
  element,
  onClose,
}: {
  visible: boolean;
  element: React.JSX.Element;
  onClose: () => void;
}) => {
  const {panResponder, translateX} = useCustomModal({visible, onClose});

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="none"
      onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <Animated.View
          style={[styles.modalContent, {transform: [{translateX}]}]}
          {...panResponder.panHandlers}>
          <View style={{flex: 1, width: '100%'}}>{element}</View>
        </Animated.View>
      </View>
    </Modal>
  );
};
