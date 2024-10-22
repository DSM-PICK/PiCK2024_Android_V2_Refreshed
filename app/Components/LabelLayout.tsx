import { StyleSheet } from "react-native";
import { Text, View } from "./Common";

interface IProp {
  label: string;
  subLabel?: React.ReactElement;
  padding?: boolean;
  onlyLabelPadding?: boolean;
  noGap?: boolean;
  children: React.ReactElement | React.ReactElement[];
}

export const LabelLayout = ({
  label,
  subLabel,
  padding,
  onlyLabelPadding,
  noGap,
  children,
}: IProp) => {
  return (
    <View style={[styles.container, padding && { paddingHorizontal: 24 }, noGap && { gap: 0 }]}>
      <View
        style={[
          styles.labelContainer,
          onlyLabelPadding && !padding && { paddingHorizontal: 24 },
          noGap && { marginBottom: 12 },
        ]}
      >
        <Text colorType="gray" colorLevel={600} fontType="label" fontLevel={1}>
          {label}
        </Text>
        {subLabel}
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { gap: 12, width: "100%" },
  labelContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
});
