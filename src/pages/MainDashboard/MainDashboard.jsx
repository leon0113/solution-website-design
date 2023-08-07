import React, { useState, useEffect } from "react";

// ** MUI Imports
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

// ** Styled Component Import
import ApexChartWrapper from "../../@core/styles/libs/react-apexcharts";
import Donut from "@/charts/Donut";
import ReachBarChart from "@/charts/ReachBarChart";
import ResultLineChart from "@/charts/ResultLineChart";
import ImpressionBarChart from "@/charts/ImpressionBarChart";
import CostResultChart from "@/charts/CostResultChart";
import PlacementBarChart from "@/charts/PlacementBarChart";
import CountryPieCharts from "@/charts/CountryPieCharts";
import GenderChart from "@/charts/GenderChart";
import AgeCharts from "@/charts/AgeCharts";
import axios from "axios";

const MainDashboard = () => {
  const Data = [
    {
      id: 1,
      title: "campaign 1",
    },
    {
      id: 2,
      title: "campaign 2",
    },
  ];
  useEffect(() => {
    const apiUrl = "http://localhost:4000/getcampaign";
    axios
      .get(apiUrl)
      .then((result) => {
        console.log(result, "data");
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const [selectedCampaign, setSelectedCampaign] = useState(Data[0].title);

  // Handle the change when a new campaign is selected from the dropdown
  const handleCampaignChange = (event) => {
    setSelectedCampaign(event.target.value);
  };

  return (
    <div className="d">
      <div style={{ textAlign: "right", padding: "10px" }}>
        <span className="fs-4 pe-3">Choose Campaign:</span>
        <Select
          value={selectedCampaign}
          onChange={handleCampaignChange}
          className="px-4"
        >
          {Data.map((campaign) => (
            <MenuItem key={campaign.id} value={campaign.title}>
              {campaign.title}
            </MenuItem>
          ))}
        </Select>
      </div>
      <ApexChartWrapper className="mt-5">
        <Grid container spacing={6}>
          <Grid item xs={12} md={5}>
            <Donut />
          </Grid>
          <Grid item xs={12} md={7}>
            <ReachBarChart />
          </Grid>
        </Grid>

        <Grid container spacing={6} style={{ marginTop: "10px" }}>
          <Grid item xs={12} md={7}>
            <ImpressionBarChart />
          </Grid>
          <Grid item xs={12} md={5}>
            <ResultLineChart />
          </Grid>
        </Grid>

        <Grid container spacing={6} style={{ marginTop: "10px" }}>
          <Grid item xs={12} md={5}>
            <CostResultChart />
          </Grid>
          <Grid item xs={12} md={7}>
            <PlacementBarChart />
          </Grid>
        </Grid>

        <Grid container spacing={6} style={{ marginTop: "10px" }}>
          <Grid item xs={12} md={4}>
            <AgeCharts />
          </Grid>
          <Grid item xs={12} md={4}>
            <GenderChart />
          </Grid>
          <Grid item xs={12} md={4}>
            <CountryPieCharts />
          </Grid>
        </Grid>
      </ApexChartWrapper>
    </div>
  );
};

export default MainDashboard;
