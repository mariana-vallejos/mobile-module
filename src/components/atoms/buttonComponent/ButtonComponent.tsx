import { TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { TextComp } from '../textComponent/TextComponent';

interface ButtonComponentProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export const ButtonComponent = ({
  title,
  onPress,
  variant = 'primary',
  disabled = false
}: ButtonComponentProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === 'primary' ? styles.primary : styles.secondary,
        disabled && styles.disabled,
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <TextComp
        style={variant === 'primary' ? styles.primaryText : styles.secondaryText}
      >
        {title}
      </TextComp>
    </TouchableOpacity>
  );
};