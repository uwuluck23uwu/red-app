import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigates/typeRootStack";
import { StripeProvider } from "@stripe/stripe-react-native";
import { PaymentForm } from "../components/payment";
import { OrderSummary } from "../components/order";

type Props = NativeStackScreenProps<RootStackParamList, "PaymentScreen">;

export default function PaymentScreen({ route }: Props) {
  const { state } = route.params;
  const [publishableKey, setPublishableKey] = useState("");

  const fetchPublishableKey = async () => {
    const key =
      "pk_test_51P8zpUJDEspePZjo73Y0CF0vnLNm4em25JMvdXDYvGxCpUC5YL0CHTcTvx5Mo93MiKlzaWJIYUUmgCnGf6J2nH2M00DAUzDZYs";
    setPublishableKey(key);
  };

  useEffect(() => {
    fetchPublishableKey();
  }, []);

  return (
    <StripeProvider publishableKey={publishableKey}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.8 }}>
          <OrderSummary />
        </View>
        <View style={{ flex: 0.2 }}>
          <PaymentForm />
        </View>
      </View>
    </StripeProvider>
  );
}
