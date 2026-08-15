<template>
  <div class="page-content">
    <h3>統計資料</h3>
    <el-divider></el-divider>
    <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="疫苗接種人次統計" name="first">
        <h4 class="vaccine-title">疫苗累計至 12/5 接種人次-第1劑</h4>
        <el-col :span="24">
          <div class="chart-style" id="vaccineFirstDose" style="border-bottom:1px solid #ddd;margin-bottom:15px;"></div>
        </el-col>
        <h4 class="vaccine-title">疫苗累計至 12/5 接種人次-第2劑</h4>
        <el-col :span="24">
          <div class="chart-style" id="vaccineSecondDose"></div>
        </el-col>
      </el-tab-pane>
      <el-tab-pane label="各縣市疫苗涵蓋率" name="second">
        <div v-loading="loadingCity">
          <el-col :span="24">
            <h4 class="vaccine-title">各縣市疫苗涵蓋率(%) 2021-11-29</h4>
          </el-col>
          <el-col :span="12">
            <div class="city-chart" id="cityVaccineFirstDose"></div>
          </el-col>
          <el-col :span="12">
            <div class="city-chart" id="cityVaccineSecondDose" style="margin-left: -36px;"></div>
          </el-col>
        </div>
      </el-tab-pane>
      <el-tab-pane label="各年齡疫苗涵蓋率" name="third">
        <div v-loading="loadingYear">
          <el-col :span="24">
            <h4 class="vaccine-title">各年齡疫苗涵蓋率(%) 2021-11-29</h4>
          </el-col>
          <el-col :span="12">
            <div class="year-chart" id="yearVaccineFirstDose"></div>
          </el-col>
          <el-col :span="12">
            <div class="year-chart" id="yearVaccineSecondDose" style="margin-left: -49px"></div>
          </el-col>
        </div>
      </el-tab-pane>
    </el-tabs>
    <div style="margin:20px 0;">
      參考資料&nbsp;
      <a href="https://covid-19.nchc.org.tw/dt_002-csse_covid_19_daily_reports_vaccine_city2.php" target="_blank">疫苗接種 -
        COVID-19全球疫情地圖</a>

    </div>
  </div>
</template>

<script>
  import * as echarts from 'echarts';
  export default {
    name: "Statistics",
    data() {
      return {
        activeName: 'first',
        loadingCity: true,
        loadingYear: true
      };
    },
    mounted() {
      this.loadVaccineFirstDose();
      this.loadVaccineSecondDose();
    },
    methods: {
      loadVaccineFirstDose() {
        var chartDom = document.getElementById('vaccineFirstDose');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'vertical',
            left: 'left'
          },
          toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'top',
            feature: {
              saveAsImage: { show: true }
            }
          },
          series: [
            {
              type: 'pie',
              radius: '70%',
              data: [
                { value: 8002872, name: 'AZ' },
                { value: 5746116, name: 'BNT' },
                { value: 3777527, name: 'Moderna' },
                { value: 775808, name: '高端' },
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        };
        option && myChart.setOption(option);
      },
      loadVaccineSecondDose() {
        var chartDom = document.getElementById('vaccineSecondDose');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'vertical',
            left: 'left'
          },
          toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'top',
            feature: {
              saveAsImage: { show: true }
            }
          },
          series: [
            {
              type: 'pie',
              radius: '70%',
              data: [
                { value: 6875453, name: 'AZ' },
                { value: 3074052, name: 'BNT' },
                { value: 3553321, name: 'Moderna' },
                { value: 666472, name: '高端' },
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        };
        option && myChart.setOption(option);
      },
      loadCityVaccineFirstDose() {
        var chartDom = document.getElementById('cityVaccineFirstDose');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            data: ['第1劑']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'value',
              inverse: true
            }
          ],
          yAxis: [
            {
              type: 'category',
              axisTick: {
                show: false
              },
              data: ['南投縣', '嘉義市', '嘉義縣', '基隆市', '宜蘭縣', '屏東縣', '彰化縣', '新北市', '新竹市', '新竹縣', '桃園市', '澎湖縣', '臺中市', '臺北市', '臺南市', '臺東縣', '花蓮縣', '苗栗縣', '連江縣', '金門縣', '雲林縣', '高雄市']
            }
          ],
          series: [
            {
              name: '第1劑',
              type: 'bar',
              stack: 'Total',
              //顏色  
              itemStyle: {
                normal: {
                  color: '#e95050',
                }
              },
              label: {
                show: true
              },
              emphasis: {
                focus: 'series'
              },
              data: [77.3, 77.1, 76.8, 80.8, 78.8, 74.8, 79.2, 79.5, 77.6, 77.3, 80.0, 79.8, 77.4, 77.8, 75.4, 69.0, 72.5, 76.4, 85.4, 81.7, 77.2, 77.1]
            },
          ]
        };
        option && myChart.setOption(option);
      },
      loadCityVaccineSecondDose() {
        var chartDom = document.getElementById('cityVaccineSecondDose');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            data: ['第2劑']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'value',
            }
          ],
          yAxis: [
            {
              type: 'category',
              show: false,
              data: ['南投縣', '嘉義市', '嘉義縣', '基隆市', '宜蘭縣', '屏東縣', '彰化縣', '新北市', '新竹市', '新竹縣', '桃園市', '澎湖縣', '臺中市', '臺北市', '臺南市', '臺東縣', '花蓮縣', '苗栗縣', '連江縣', '金門縣', '雲林縣', '高雄市']
            }
          ],
          series: [
            {
              name: '第2劑',
              type: 'bar',
              stack: 'Total',
              label: {
                show: true
              },
              emphasis: {
                focus: 'series'
              },
              data: [55.0, 56.8, 54.8, 60.3, 58.6, 54.5, 56.2, 57.8, 53.2, 51.1, 54.7, 63.8, 53.5, 60.3, 51.9, 47.4, 51.2, 50.9, 73.9, 63.7, 54.3, 56.1]
            },
          ]
        };
        option && myChart.setOption(option);
      },
      loadYearVaccineFirstDose() {
        var chartDom = document.getElementById('yearVaccineFirstDose');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            data: ['第1劑']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'value',
              inverse: true
            }
          ],
          yAxis: [
            {
              type: 'category',
              axisTick: {
                show: false
              },
              data: ['12-17歲', '18-29歲', '30-49歲', '50-64歲', '65-74歲', '75歲以上']
            }
          ],
          series: [
            {
              name: '第1劑',
              type: 'bar',
              stack: 'Total',
              //顏色  
              itemStyle: {
                normal: {
                  color: '#e95050',
                }
              },
              label: {
                show: true
              },
              emphasis: {
                focus: 'series'
              },
              data: [89.3, 93.0, 89.5, 81.8, 83.3, 72.8]
            },
          ]
        };
        option && myChart.setOption(option);
      },
      loadYearVaccineSecondDose() {
        var chartDom = document.getElementById('yearVaccineSecondDose');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            data: ['第2劑']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'value',
            }
          ],
          yAxis: [
            {
              type: 'category',
              show: false,
              data: ['12-17歲', '18-29歲', '30-49歲', '50-64歲', '65-74歲', '75歲以上']
            }
          ],
          series: [
            {
              name: '第2劑',
              type: 'bar',
              stack: 'Total',
              barMinHeight: 30,
              label: {
                show: true
              },
              emphasis: {
                focus: 'series'
              },
              data: [0.4, 55.3, 64.6, 67.9, 77.8, 65.6]
            },
          ]
        };
        option && myChart.setOption(option);
      },
      handleClick(tab) {
        switch (tab.name) {
          case "first":
            this.loadVaccineFirstDose();
            this.loadVaccineSecondDose();
            break;
          case "second":
            setTimeout(() => {
              this.loadCityVaccineFirstDose();
              this.loadCityVaccineSecondDose();
              this.loadingCity = false;
            }, 500);
            break;
          case "third":
            setTimeout(() => {
              this.loadYearVaccineFirstDose();
              this.loadYearVaccineSecondDose();
              this.loadingYear = false;
            }, 500);
            break;
        }
        console.log(tab.name);
      }
    },
  };
</script>

<style>
  .chart-style {
    width: 650px;
    height: 320px;
    margin: 0 auto;
  }

  .city-chart {
    height: 500px;
    width: 109%;
  }

  .year-chart {
    height: 300px;
    width: 109%;
  }

  .vaccine-title {
    text-align: center;
  }
</style>