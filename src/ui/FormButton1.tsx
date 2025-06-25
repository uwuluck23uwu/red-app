import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ViewStyle,
  StyleProp,
} from "react-native";
import { COLORS, FONTS, SIZES } from "../common";

interface Props {
  title: string;
  onPress: () => void;
  isValid: boolean;
  loading?: boolean;
  color?: string;
  height?: number;
}

const FormButton1 = ({
  title,
  onPress,
  isValid,
  loading = false,
  color = COLORS.primary,
  height = 40,
}: Props) => {
  const backgroundColor = !isValid ? COLORS.gray : color;

  const dynamicStyle: StyleProp<ViewStyle> = {
    backgroundColor,
    height,
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={!isValid || loading}
      style={[styles.btnBase, dynamicStyle]}
    >
      {!loading ? (
        <Text style={styles.btnTxt}>{title}</Text>
      ) : (
        <ActivityIndicator color={COLORS.white} />
      )}
    </TouchableOpacity>
  );
};

export default FormButton1;

const styles = StyleSheet.create({
  btnBase: {
    width: "auto",
    marginVertical: 5,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    paddingHorizontal: 16,
  },
  btnTxt: {
    fontFamily: FONTS.regular,
    color: COLORS.white,
    fontSize: SIZES.medium,
    paddingHorizontal: 5,
  },
});
