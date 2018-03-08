<template>
  <v-container 
    fluid 
    class="pollResult">
    <v-layout row>
      <v-flex/>
      <v-flex 
        xs8 
        sm6 
        md4>
        <h1> {{ pollQuestion }} </h1>
        {{ results }}
        <!-- chart.js -->
        <canvas 
          id="myChart" 
          width="400" 
          height="400"/>
      </v-flex>
      <v-flex/>
    </v-layout>
  </v-container>
</template>


<script>
  import PollsService from "@/services/PollsService";
  import Chart from "chart.js";
  
  export default {
    data() {
      return {
        pollQuestion: "",
        results: ""
      };
    },
    created() {
      PollsService.getResult(this.$route.params.id).then(data => {
        let ctx = document.getElementById("myChart").getContext("2d"),
          pollOptions = [],
          pollData = [],
          myChart;
        this.pollQuestion = data.data.pollName;
  
        Object.entries(data.data).forEach(([key, value]) => {
          if (typeof value === "number") {
            pollOptions.push(key);
            pollData.push(value)
          }
        });
  
        myChart = new Chart(ctx, {
          type: "bar",
          data: {
            labels: pollOptions,
            datasets: [{
              label: "",
              data: pollData,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)"
              ],
              borderColor: [
                "rgba(255,99,132,1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)"
              ],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });
      });
    }
  };
</script>

<style scoped>
  
</style>
