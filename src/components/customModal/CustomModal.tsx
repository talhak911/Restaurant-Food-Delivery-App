import {Animated, Modal, View} from 'react-native';
import {useCustomModal} from './useCustomModal';
import {styles} from './CustomModalStyles';
import {CustomModalProps} from '../../types/types';

export const CustomModal = ({visible, element, onClose}: CustomModalProps) => {
  const {panResponder, translateX} = useCustomModal({visible, onClose});
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="none"
      onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <Animated.View
          style={[styles.modalContent, {transform: [{translateX}]}]}>
          <View
            style={styles.closeModalContainer}
            {...panResponder.panHandlers}>
            <View style={styles.closeModal} />
          </View>
          <View style={{flex: 1, width: '100%'}}>{element}</View>
        </Animated.View>
      </View>
    </Modal>
  );
};
