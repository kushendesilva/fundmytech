import React from "react";
import ScreenVariant from "../components/ScreenVariant";
import { Text, useTheme } from "@ui-kitten/components";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { ThemeContext } from "../theme";
import RenderIf from "../components/RenderIf";

function Insights(props) {
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
        category="h5"
        style={{
          fontWeight: "bold",
          textAlign: "center",
          marginVertical: "2%",
          marginHorizontal: "3%",
        }}
      >
        Views
      </Text>

      {RenderIf(
        themeContext.theme == "light",
        <LineChart
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get("window").width - 20}
          height={220}
          yAxisSuffix="k"
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
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get("window").width - 20}
          height={220}
          yAxisSuffix="k"
          yAxisInterval={1}
          chartConfig={chartConfigDark}
          bezier
          style={{
            borderRadius: 16,
            alignSelf: "center",
          }}
        />
      )}

      <Text
        category="h5"
        style={{
          fontWeight: "bold",
          textAlign: "center",
          marginVertical: "2%",
          marginHorizontal: "3%",
        }}
      >
        Likes
      </Text>
      {RenderIf(
        themeContext.theme == "light",
        <LineChart
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get("window").width - 20}
          height={220}
          yAxisSuffix="k"
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
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get("window").width - 20}
          height={220}
          yAxisSuffix="k"
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

export default Insights;
