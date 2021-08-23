import React from "react";
import ScreenVariant from "../components/ScreenVariant";
import {
  Text,
  useTheme,
  Datepicker,
  NativeDateService,
} from "@ui-kitten/components";
import { BarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { ThemeContext } from "../theme";
import RenderIf from "../components/RenderIf";
import { EarningsData } from "../database";

function Earnings(props) {
  const MyDate = new Date();

  MyDate.setDate(MyDate.getDate());

  const MyDateString =
    ("0" + (MyDate.getMonth() + 1)).slice(-2) +
    "/" +
    ("0" + MyDate.getDate()).slice(-2) +
    "/" +
    MyDate.getFullYear().toString().substr(-2);

  const formatDateService = new NativeDateService("en", {
    format: "MM/DD/YYYY",
  });
  const [date, setDate] = React.useState(new Date());
  const selectedDate = date.toLocaleDateString("en-GB");
  const theme = useTheme();
  const themeContext = React.useContext(ThemeContext);

  const chartConfigDark = {
    backgroundGradientFrom: theme["#color-success-600"],
    backgroundGradientFromOpacity: 0.4,
    backgroundGradientTo: theme["#color-success-900"],
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  const chartConfigLight = {
    backgroundColor: theme["color-primary-default"],
    backgroundGradientFrom: theme["color-primary-700"],
    backgroundGradientTo: theme["color-primary-400"],
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: theme["color-warning-500"],
    },
  };

  return (
    <ScreenVariant>
      <Text
        style={{
          textAlign: "center",
          marginTop: "5%",
          fontWeight: "bold",
        }}
        category="h6"
      >
        Today: {MyDateString}
      </Text>
      <Text
        style={{ textAlign: "center", marginTop: "5%", fontWeight: "bold" }}
        category="h6"
      >
        Selected date: {selectedDate}
      </Text>
      <Datepicker
        style={{ margin: "2%" }}
        date={date}
        onSelect={(nextDate) => setDate(nextDate)}
        dateService={formatDateService}
      />

      {RenderIf(
        themeContext.theme == "light",
        <BarChart
          data={{
            labels: EarningsData.Labels,
            datasets: EarningsData.Datasets,
          }}
          width={Dimensions.get("window").width - 20}
          height={220}
          yAxisInterval={1}
          chartConfig={chartConfigLight}
          bezier
          style={{
            borderRadius: 16,
            alignSelf: "center",
          }}
        />
      )}
      {RenderIf(
        themeContext.theme == "dark",
        <BarChart
          data={{
            labels: EarningsData.Labels,
            datasets: EarningsData.Datasets,
          }}
          width={Dimensions.get("window").width - 20}
          height={220}
          yAxisInterval={1}
          chartConfig={chartConfigDark}
          bezier
          style={{
            borderRadius: 16,
            alignSelf: "center",
          }}
        />
      )}
    </ScreenVariant>
  );
}

export default Earnings;
