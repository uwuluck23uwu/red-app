import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { COLORS, FONTS, SIZES } from "../common";

interface Props {
  title: string;
  onPress: () => void;
  isValid: boolean;
  loading?: boolean;
}

const FormButton = ({ title, onPress, isValid, loading = false }: Props) => {
  const backgroundColor = !isValid ? COLORS.gray : COLORS.primary;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btnBase, { backgroundColor }]}
      disabled={!isValid || loading}
    >
      {!loading ? (
        <Text style={styles.btnTxt}>{title}</Text>
      ) : (
        <ActivityIndicator color={COLORS.white} />
      )}
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  btnBase: {
    height: 40,
    width: "100%",
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  btnTxt: {
    fontFamily: FONTS.bold,
    color: COLORS.white,
    fontSize: SIZES.medium,
    paddingHorizontal: 5,
  },
});
