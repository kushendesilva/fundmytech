import React from "react";
import ScreenVariant from "../components/ScreenVariant";
import { Text, useTheme } from "@ui-kitten/components";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { ThemeContext } from "../theme";
import RenderIf from "../components/RenderIf";

function InsightDetails(props) {
  const { votes } = props.route.params;
  const theme = useTheme();
  const themeContext = React.useContext(ThemeContext);

  const chartConfigDark = {
    backgroundGradientFrom: theme["#color-success-600"],
    backgroundGradientFromOpacity: 0.4,
    backgroundGradientTo: theme["#color-success-900"],
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    decimalPlaces: 0,
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  const chartConfigLight = {
    backgroundColor: theme["color-primary-default"],
    backgroundGradientFrom: theme["color-primary-700"],
    backgroundGradientTo: theme["color-primary-400"],
    decimalPlaces: 0, // optional, defaults to 2dp
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
        category="h5"
        style={{
          fontWeight: "bold",
          textAlign: "center",
          marginVertical: "2%",
          marginHorizontal: "3%",
        }}
      >
        Votes
      </Text>
      {RenderIf(
        themeContext.theme == "light",
        <LineChart
          data={{
            datasets: [
              {
                data: [0, votes, 0],
              },
            ],
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
        <LineChart
          data={{
            datasets: [
              {
                data: [0, votes, 0],
              },
            ],
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

export default InsightDetails;
