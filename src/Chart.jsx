import React, {useState, useEffect, } from "react";
import { useParams } from "react-router-dom";

import * as am5 from "@amcharts/amcharts5";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

import * as am5percent from "@amcharts/amcharts5/percent";

function Chart(props) {

  const [data, setData] = useState([]);
  let { id } = useParams();
  const chartID = props.chartID;
  console.log({ chartID });

  useEffect(() => {
    getTodos();
  },[]);

  useEffect(() => {
    const root = am5.Root.new("pieChart");
    root.setThemes([am5themes_Animated.new(root)]);
    let chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        endAngle: 270
      })
    );

    let series = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: "value",
        categoryField: "category",
        endAngle: 270
      })
    );

    series.states.create("hidden", {
      endAngle: -90
    });

    series.data.setAll(data);

    series.appear(1000, 100);

    return () => {root.dispose();};

  }, [chartID,data]);

  const getTodos = async () => {
   const res =  await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`);
  const todos = await res.json();
     let result = todos.reduce((acc, current) => {
       acc[current.completed ? "completed" : "inComplete"] = (acc[current.completed ? "completed" : "inComplete"] || 0) + 1;
       return acc;
     },{});
    let data = [
       {value: result.completed, category: "completed"},
       {value: result.inComplete, category: "inComplete"}
     ]  
    setData(data);

  }
console.log("data",data);
  return <div className="flex-container" id="pieChart" ></div>;
}

export default Chart;