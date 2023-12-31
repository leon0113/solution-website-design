import React from "react";
import ReactApexcharts from "react-apexcharts";
const Donut = () => {
  var options = {
    annotations: {},
    chart: {
      animations: {
        enabled: false,
      },
      foreColor: "#F4F4F4",
      fontFamily: "Roboto",
      height: 382,
      id: "y8Y6G",
      toolbar: {
        show: false,
      },
      type: "pie",
      width: 622,
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "last",
        hideZeroBarsWhenGrouped: false,
        isDumbbell: false,
        isFunnel: false,
        isFunnel3d: true,
        dataLabels: {
          total: {
            enabled: false,
            offsetX: 0,
            offsetY: 0,
            style: {
              color: "#373d3f",
              fontSize: "12px",
              fontWeight: 600,
            },
          },
        },
      },
      bubble: {
        zScaling: true,
      },
      radialBar: {
        hollow: {
          background: "#fff",
        },
        dataLabels: {
          name: {},
          value: {},
          total: {},
        },
      },
      pie: {
        donut: {
          labels: {
            name: {},
            value: {},
            total: {},
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
      style: {
        fontWeight: 700,
      },
    },
    fill: {
      opacity: 1,
    },
    grid: {
      padding: {
        right: 25,
        left: 15,
      },
    },
    labels: ["Africa", "Asia", "america", "europe"],
    legend: {
      show: false,
      position: "right",
      fontSize: 16,
      fontWeight: 900,
      offsetY: -4,
      markers: {
        strokeColor: "#A93434",
      },
      itemMargin: {
        vertical: 0,
      },
    },
    series: [8, 25, 20, 10],
    stroke: {
      show: false,
      width: 1,
      colors: ["#fff"],
      fill: {
        type: "solid",
        opacity: 0.85,
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 100],
          colorStops: [],
        },
      },
    },
    tooltip: {
      fillSeriesColor: true,
    },
    xaxis: {
      labels: {
        trim: true,
        style: {},
      },
      group: {
        groups: [],
        style: {
          colors: [],
          fontSize: "12px",
          fontWeight: 400,
          cssClass: "",
        },
      },
      title: {
        style: {
          fontWeight: 700,
        },
      },
    },
    yaxis: {
      labels: {
        style: {},
      },
      title: {
        style: {
          fontWeight: 700,
        },
      },
    },
    theme: {
      palette: "palette2",
    },
    _chartInstances: [
      {
        id: "y8Y6G",
        chart: {
          opts: {
            annotations: {
              position: "front",
              yaxis: [],
              xaxis: [],
              points: [],
            },
            chart: {
              type: "pie",
              background: "",
              foreColor: "#F4F4F4",
              offsetX: 0,
              offsetY: 0,
              toolbar: {
                show: false,
              },
              animations: {
                enabled: false,
              },
              dropShadow: {
                enabled: true,
                top: 2,
                left: 2,
                blur: 4,
                color: "#000",
                opacity: 0.35,
              },
              fontFamily: "Roboto",
              height: 382,
              width: 622,
              id: "y8Y6G",
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: "70%",
                barHeight: "70%",
                distributed: false,
                borderRadius: 10,
                borderRadiusApplication: "end",
                borderRadiusWhenStacked: "last",
                colors: {
                  ranges: [],
                  backgroundBarColors: [],
                  backgroundBarOpacity: 1,
                },
                dataLabels: {
                  position: "top",
                },
              },
              heatmap: {
                radius: 2,
                enableShades: true,
                shadeIntensity: 0.5,
              },
              radialBar: {
                startAngle: 0,
                endAngle: 360,
                offsetX: 0,
                offsetY: 0,
                hollow: {
                  margin: 5,
                  size: "50%",
                  background: "#fff",
                  position: "front",
                  dropShadow: {
                    enabled: false,
                    top: 0,
                    left: 0,
                    blur: 3,
                    color: "#000",
                    opacity: 0.5,
                  },
                },
                track: {
                  show: true,
                  background: "#f2f2f2",
                  strokeWidth: "97%",
                  opacity: 1,
                  margin: 5,
                  dropShadow: {
                    enabled: false,
                    top: 0,
                    left: 0,
                    blur: 3,
                    color: "#000",
                    opacity: 0.5,
                  },
                },
                dataLabels: {
                  show: true,
                  name: {
                    show: true,
                    fontSize: 16,
                    offsetY: 0,
                  },
                  value: {
                    show: true,
                    fontSize: 14,
                    offsetY: 16,
                  },
                  total: {
                    show: false,
                    label: "Total",
                    fontSize: 16,
                  },
                },
              },
              pie: {
                startAngle: 0,
                endAngle: 360,
                offsetX: 0,
                offsetY: 0,
                dataLabels: {
                  offset: 0,
                },
                donut: {
                  size: "65%",
                  labels: {
                    show: false,
                    name: {
                      show: true,
                      fontSize: 16,
                      offsetY: -10,
                    },
                    value: {
                      show: true,
                      fontSize: 20,
                      offsetY: 10,
                    },
                    total: {
                      show: false,
                      showAlways: false,
                      label: "Total",
                      fontSize: 16,
                    },
                  },
                },
              },
              radar: {
                offsetX: 0,
                offsetY: 0,
                polygons: {
                  strokeColors: "#e8e8e8",
                  connectorColors: "#e8e8e8",
                  fill: {},
                },
              },
            },
            theme: {
              mode: "light",
              palette: "palette3",
            },
            dataLabels: {
              enabled: true,
              textAnchor: "middle",
              offsetX: 0,
              offsetY: 0,
              style: {
                fontSize: 12,
                fontWeight: 700,
              },
              background: {
                enabled: true,
                foreColor: "#fff",
                borderRadius: 2,
                padding: 4,
                opacity: 0.9,
                borderWidth: 1,
                borderColor: "#fff",
              },
              dropShadow: {
                enabled: false,
                top: 1,
                left: 1,
                blur: 1,
                color: "#000",
                opacity: 0.45,
              },
            },
            markers: {
              size: 0,
              strokeColors: "#fff",
              strokeWidth: 2,
              strokeOpacity: 0.9,
              strokeDashArray: 0,
              fillOpacity: 1,
              shape: "circle",
              radius: 2,
              offsetX: 0,
              offsetY: 0,
              hover: {},
            },
            xaxis: {
              type: "category",
              offsetX: 0,
              offsetY: 0,
              position: "bottom",
              labels: {
                show: true,
                rotate: -45,
                rotateAlways: false,
                trim: true,
                offsetX: 0,
                offsetY: 0,
                style: {
                  fontSize: 12,
                  fontWeight: 400,
                },
              },
              axisBorder: {
                show: true,
                color: "#e0e0e0",
              },
              axisTicks: {
                show: true,
                color: "#e0e0e0",
              },
              title: {
                style: {
                  fontSize: 12,
                  fontWeight: 700,
                },
              },
              crosshairs: {
                show: true,
                width: 1,
                position: "back",
                opacity: 0.9,
                stroke: {
                  color: "#b6b6b6",
                  width: 1,
                },
                fill: {
                  type: "solid",
                  color: "#B1B9C4",
                  gradient: {
                    colorFrom: "#D8E3F0",
                    colorTo: "#BED1E6",
                    opacityFrom: 0.4,
                    opacityTo: 0.5,
                  },
                },
                dropShadow: {
                  enabled: false,
                  left: 0,
                  top: 0,
                  blur: 1,
                  opacity: 0.4,
                },
              },
              convertedCatToNumeric: false,
            },
            yaxis: [null],
            grid: {
              show: true,
              borderColor: "#e0e0e0",
              strokeDashArray: 0,
              position: "back",
              xaxis: {
                lines: {
                  show: false,
                },
              },
              yaxis: {
                lines: {
                  show: true,
                },
              },
              row: {
                opacity: 0.5,
              },
              column: {
                opacity: 0.5,
              },
              padding: {
                top: 0,
                right: 25,
                bottom: 0,
                left: 15,
              },
            },
            stroke: {
              show: true,
              curve: "smooth",
              lineCap: "butt",
              width: 1,
              dashArray: 0,
            },
            fill: {
              type: "solid",
              opacity: 1,
              gradient: {
                shade: "dark",
                type: "horizontal",
                shadeIntensity: 0.5,
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 100],
                colorStops: [],
              },
              pattern: {
                style: "squares",
                width: 6,
                height: 6,
                strokeWidth: 2,
              },
            },
            legend: {
              show: true,
              showForSingleSeries: false,
              floating: false,
              position: "bottom",
              horizontalAlign: "center",
              fontSize: 16,
              fontWeight: 900,
              offsetX: -20,
              offsetY: -4,
              labels: {
                useSeriesColors: false,
              },
              markers: {
                width: 12,
                height: 12,
                strokeWidth: 0,
                strokeColor: "#fff",
                radius: 12,
              },
              itemMargin: {
                horizontal: 5,
                vertical: 0,
              },
              onItemClick: {
                toggleDataSeries: true,
              },
              onItemHover: {
                highlightDataSeries: true,
              },
            },
          },
          w: {
            globals: {
              chartID: "y8Y6G",
              cuid: "9r8ila3a",
              events: {
                beforeMount: [],
                mounted: [],
                updated: [],
                clicked: [],
                selection: [],
                dataPointSelection: [],
                zoomed: [],
                scrolled: [],
              },
              colors: ["#3f51b5", "#03a9f4", "#4caf50", "#f9ce1d", "#FF9800"],
              clientX: 1159,
              clientY: 332,
              fill: {
                colors: [
                  "#3f51b5",
                  "#03a9f4",
                  "#4caf50",
                  "#f9ce1d",
                  "#FF9800",
                  "#3f51b5",
                  "#03a9f4",
                  "#4caf50",
                  "#f9ce1d",
                  "#FF9800",
                  "#3f51b5",
                  "#03a9f4",
                  "#4caf50",
                  "#f9ce1d",
                  "#FF9800",
                  "#3f51b5",
                  "#03a9f4",
                  "#4caf50",
                  "#f9ce1d",
                  "#FF9800",
                  "#3f51b5",
                  "#03a9f4",
                  "#4caf50",
                  "#f9ce1d",
                  "#FF9800",
                  "#3f51b5",
                  "#03a9f4",
                  "#4caf50",
                  "#f9ce1d",
                  "#FF9800",
                  "#3f51b5",
                  "#03a9f4",
                  "#4caf50",
                  "#f9ce1d",
                  "#FF9800",
                  "#3f51b5",
                  "#03a9f4",
                  "#4caf50",
                  "#f9ce1d",
                  "#FF9800",
                  "#3f51b5",
                  "#03a9f4",
                  "#4caf50",
                  "#f9ce1d",
                  "#FF9800",
                  "#3f51b5",
                  "#03a9f4",
                  "#4caf50",
                  "#f9ce1d",
                  "#FF9800",
                ],
              },
              stroke: {
                colors: ["#fff", "#fff", "#fff", "#fff"],
              },
              dataLabels: {
                style: {},
              },
              radarPolygons: {
                fill: {
                  colors: [
                    "none",
                    "none",
                    "none",
                    "none",
                    "none",
                    "none",
                    "none",
                    "none",
                    "none",
                    "none",
                    "none",
                    "none",
                    "none",
                    "none",
                    "none",
                    "none",
                    "none",
                    "none",
                    "none",
                    "none",
                  ],
                },
              },
              markers: {
                size: [0, 0, 0, 0, 0],
                largestSize: 0,
              },
              animationEnded: true,
              isDirty: true,
              isExecCalled: false,
              initialConfig: {
                forecastDataPoints: {
                  count: 0,
                  fillOpacity: 0.5,
                  dashArray: 4,
                },
                markers: {
                  discrete: [],
                  size: 0,
                  strokeColors: "#fff",
                  strokeWidth: 2,
                  strokeOpacity: 0.9,
                  strokeDashArray: 0,
                  fillOpacity: 1,
                  shape: "circle",
                  width: 8,
                  height: 8,
                  radius: 2,
                  offsetX: 0,
                  offsetY: 0,
                  showNullDataPoints: true,
                  hover: {
                    sizeOffset: 3,
                  },
                },
                noData: {
                  align: "center",
                  verticalAlign: "middle",
                  offsetX: 0,
                  offsetY: 0,
                  style: {
                    fontSize: "14px",
                  },
                },
                responsive: [],
                states: {
                  normal: {
                    filter: {
                      type: "none",
                      value: 0,
                    },
                  },
                  hover: {
                    filter: {
                      type: "lighten",
                      value: 0.1,
                    },
                  },
                  active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                      type: "darken",
                      value: 0.5,
                    },
                  },
                },
                title: {
                  align: "left",
                  margin: 5,
                  offsetX: 0,
                  offsetY: 0,
                  floating: false,
                  style: {
                    fontSize: "14px",
                    fontWeight: 900,
                  },
                },
                subtitle: {
                  align: "left",
                  margin: 5,
                  offsetX: 0,
                  offsetY: 30,
                  floating: false,
                  style: {
                    fontSize: "12px",
                    fontWeight: 400,
                  },
                },
              },
              initialSeries: [8, 25, 20, 10],
              lastXAxis: [],
              lastYAxis: [],
              columnSeries: null,
              labels: ["Africa", "Asia", "america", "europe"],
              timescaleLabels: [],
              noLabelsProvided: false,
              allSeriesCollapsed: false,
              collapsedSeries: [],
              collapsedSeriesIndices: [],
              ancillaryCollapsedSeries: [],
              ancillaryCollapsedSeriesIndices: [],
              risingSeries: [],
              dataFormatXNumeric: false,
              capturedSeriesIndex: -1,
              capturedDataPointIndex: -1,
              selectedDataPoints: [],
              goldenPadding: 35,
              invalidLogScale: false,
              ignoreYAxisIndexes: [],
              yAxisSameScaleIndices: [],
              maxValsInArrayIndex: 0,
              radialSize: 166.70731707317074,
              zoomEnabled: true,
              panEnabled: false,
              selectionEnabled: false,
              yaxis: null,
              mousedown: false,
              lastClientPosition: {},
              yValueDecimal: 0,
              total: 0,
              SVGNS: "http://www.w3.org/2000/svg",
              svgWidth: 622,
              svgHeight: 382,
              noData: false,
              locale: {
                months: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ],
                shortMonths: [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ],
                days: [
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                toolbar: {
                  exportToSVG: "Download SVG",
                  exportToPNG: "Download PNG",
                  exportToCSV: "Download CSV",
                  menu: "Menu",
                  selection: "Selection",
                  selectionZoom: "Selection Zoom",
                  zoomIn: "Zoom In",
                  zoomOut: "Zoom Out",
                  pan: "Panning",
                  reset: "Reset Zoom",
                },
              },
              dom: {
                baseEl: {
                  _prevClass: "y8Y6G",
                },
                elWrap: {},
                Paper: {
                  _stroke: "#000000",
                  _event: null,
                  dom: {},
                  node: {},
                  type: "svg",
                  _defs: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    node: {},
                    type: "defs",
                  },
                },
                elLegendForeign: {},
                elLegendWrap: {},
                elGraphical: {
                  _stroke: "#000000",
                  _event: null,
                  dom: {},
                  node: {},
                  type: "g",
                },
                elGridRectMask: {},
                elGridRectMarkerMask: {},
                elForecastMask: {},
                elNonForecastMask: {},
                elGridRect: {
                  _stroke: "none",
                  _event: null,
                  dom: {},
                  node: {},
                  type: "rect",
                },
                elGridRectMarker: {
                  _stroke: "none",
                  _event: null,
                  dom: {},
                  node: {},
                  type: "rect",
                },
              },
              memory: {
                methodsToExec: [],
              },
              shouldAnimate: true,
              skipLastTimelinelabel: false,
              skipFirstTimelinelabel: false,
              delayedElements: [],
              axisCharts: false,
              isDataXYZ: false,
              resized: true,
              resizeTimer: null,
              comboCharts: false,
              dataChanged: false,
              previousPaths: [8, 25, 20, 10],
              allSeriesHasEqualX: true,
              pointsArray: [],
              dataLabelsRects: [],
              lastDrawnDataLabelsIndexes: [],
              hasNullValues: false,
              easing: "<>",
              zoomed: false,
              gridWidth: 352,
              gridHeight: 392,
              rotateXLabels: false,
              defaultLabels: false,
              yLabelFormatters: [null],
              LINE_HEIGHT_RATIO: 1.618,
              xAxisLabelsHeight: 0,
              xAxisGroupLabelsHeight: 0,
              xAxisLabelsWidth: 0,
              yAxisLabelsWidth: 0,
              scaleX: 1,
              scaleY: 1,
              translateX: 130,
              translateY: 0,
              translateYAxisX: [],
              yAxisWidths: [],
              translateXAxisY: 0,
              translateXAxisX: 0,
              tooltip: {
                tooltipUtil: {},
                tooltipLabels: {
                  tooltipUtil: {},
                },
                tooltipPosition: {},
                marker: {
                  tooltipPosition: {},
                },
                intersect: {
                  isVerticalGroupedRangeBar: false,
                },
                axesTooltip: {},
                showOnIntersect: false,
                showTooltipTitle: false,
                fixedTooltip: false,
                xaxisTooltip: null,
                yaxisTTEls: null,
                isBarShared: true,
                lastHoverTime: 1690360741356,
                xyRatios: null,
                isXAxisTooltipEnabled: false,
                yaxisTooltips: [false],
                allTooltipSeriesGroups: [],
                dataPointsDividedHeight: null,
                dataPointsDividedWidth: null,
                legendLabels: {},
                ttItems: [{}, {}, {}, {}],
              },
              series: [8, 25, 20, 10],
              seriesCandleO: [],
              seriesCandleH: [],
              seriesCandleM: [],
              seriesCandleL: [],
              seriesCandleC: [],
              seriesRangeStart: [],
              seriesRangeEnd: [],
              seriesRange: [],
              seriesPercent: [
                [12.698412698412698],
                [39.682539682539684],
                [31.746031746031747],
                [15.873015873015873],
              ],
              seriesGoals: [],
              seriesX: [],
              seriesZ: [],
              seriesNames: ["Africa", "Asia", "america", "europe"],
              seriesTotals: [8, 25, 20, 10],
              seriesLog: [],
              seriesColors: [],
              stackedSeriesTotals: [],
              seriesXvalues: [[], [], [], []],
              seriesYvalues: [[], [], [], []],
              hasXaxisGroups: false,
              groups: [],
              hasSeriesGroups: false,
              seriesGroups: [],
              categoryLabels: [],
              selectionResizeTimer: null,
              isXNumeric: false,
              isMultiLineX: false,
              isMultipleYAxis: false,
              maxY: -1.7976931348623157e308,
              minY: 5e-324,
              minYArr: [],
              maxYArr: [],
              maxX: -1.7976931348623157e308,
              minX: 1.7976931348623157e308,
              initialMaxX: -1.7976931348623157e308,
              initialMinX: 1.7976931348623157e308,
              maxDate: 0,
              minDate: 1.7976931348623157e308,
              minZ: 1.7976931348623157e308,
              maxZ: -1.7976931348623157e308,
              minXDiff: 1.7976931348623157e308,
              yAxisScale: [],
              xAxisScale: null,
              xAxisTicksPositions: [],
              yLabelsCoords: [],
              yTitleCoords: [],
              barPadForNumericAxis: 0,
              padHorizontal: 0,
              xRange: 0,
              yRange: [],
              zRange: 0,
              dataPoints: 0,
              xTickAmount: 0,
              xyCharts: false,
              isBarHorizontal: false,
              chartClass: ".apexchartsy8Y6G",
              comboBarCount: 0,
            },
          },
          publicMethods: [
            "updateOptions",
            "updateSeries",
            "appendData",
            "appendSeries",
            "toggleSeries",
            "showSeries",
            "hideSeries",
            "setLocale",
            "resetSeries",
            "zoomX",
            "toggleDataPointSelection",
            "dataURI",
            "exportToCSV",
            "addXaxisAnnotation",
            "addYaxisAnnotation",
            "addPointAnnotation",
            "clearAnnotations",
            "removeAnnotation",
            "paper",
            "destroy",
          ],
          eventList: [
            "click",
            "mousedown",
            "mousemove",
            "mouseleave",
            "touchstart",
            "touchmove",
            "touchleave",
            "mouseup",
            "touchend",
          ],
          animations: {},
          axes: {},
          core: {},
          config: {
            opts: {},
          },
          data: {
            twoDSeries: [],
            threeDSeries: [],
            twoDSeriesX: [],
            seriesGoals: [],
            coreUtils: {},
            fallbackToCategory: false,
          },
          grid: {
            xaxisLabels: ["Africa", "Asia", "america", "europe"],
            axesUtils: {},
            isRangeBar: 0,
          },
          graphics: {},
          coreUtils: {},
          crosshairs: {},
          events: {},
          exports: {},
          localization: {},
          options: {
            yAxis: {
              show: true,
              showAlways: false,
              showForNullSeries: true,
              opposite: false,
              reversed: false,
              logarithmic: false,
              logBase: 10,
              forceNiceScale: false,
              floating: false,
              labels: {
                show: true,
                minWidth: 0,
                maxWidth: 160,
                offsetX: 0,
                offsetY: 0,
                rotate: 0,
                padding: 20,
                style: {
                  colors: [],
                  fontSize: "11px",
                  fontWeight: 400,
                  cssClass: "",
                },
              },
              axisBorder: {
                show: false,
                color: "#e0e0e0",
                width: 1,
                offsetX: 0,
                offsetY: 0,
              },
              axisTicks: {
                show: false,
                color: "#e0e0e0",
                width: 6,
                offsetX: 0,
                offsetY: 0,
              },
              title: {
                rotate: -90,
                offsetY: 0,
                offsetX: 0,
                style: {
                  fontSize: "11px",
                  fontWeight: 900,
                  cssClass: "",
                },
              },
              tooltip: {
                enabled: false,
                offsetX: 0,
              },
              crosshairs: {
                show: true,
                position: "front",
                stroke: {
                  color: "#b6b6b6",
                  width: 1,
                  dashArray: 0,
                },
              },
            },
            pointAnnotation: {
              x: 0,
              y: null,
              yAxisIndex: 0,
              seriesIndex: 0,
              marker: {
                size: 4,
                fillColor: "#fff",
                strokeWidth: 2,
                strokeColor: "#333",
                shape: "circle",
                offsetX: 0,
                offsetY: 0,
                radius: 2,
                cssClass: "",
              },
              label: {
                borderColor: "#c2c2c2",
                borderWidth: 1,
                borderRadius: 2,
                textAnchor: "middle",
                offsetX: 0,
                offsetY: 0,
                style: {
                  background: "#fff",
                  fontSize: "11px",
                  fontWeight: 400,
                  cssClass: "",
                  padding: {
                    left: 5,
                    right: 5,
                    top: 2,
                    bottom: 2,
                  },
                },
              },
              customSVG: {
                offsetX: 0,
                offsetY: 0,
              },
              image: {
                width: 20,
                height: 20,
                offsetX: 0,
                offsetY: 0,
              },
            },
            yAxisAnnotation: {
              y: 0,
              y2: null,
              strokeDashArray: 1,
              fillColor: "#c2c2c2",
              borderColor: "#c2c2c2",
              borderWidth: 1,
              opacity: 0.3,
              offsetX: 0,
              offsetY: 0,
              width: "100%",
              yAxisIndex: 0,
              label: {
                borderColor: "#c2c2c2",
                borderWidth: 1,
                borderRadius: 2,
                textAnchor: "end",
                position: "right",
                offsetX: 0,
                offsetY: -3,
                style: {
                  background: "#fff",
                  fontSize: "11px",
                  fontWeight: 400,
                  cssClass: "",
                  padding: {
                    left: 5,
                    right: 5,
                    top: 2,
                    bottom: 2,
                  },
                },
              },
            },
            xAxisAnnotation: {
              x: 0,
              x2: null,
              strokeDashArray: 1,
              fillColor: "#c2c2c2",
              borderColor: "#c2c2c2",
              borderWidth: 1,
              opacity: 0.3,
              offsetX: 0,
              offsetY: 0,
              label: {
                borderColor: "#c2c2c2",
                borderWidth: 1,
                borderRadius: 2,
                textAnchor: "middle",
                orientation: "vertical",
                position: "top",
                offsetX: 0,
                offsetY: 0,
                style: {
                  background: "#fff",
                  fontSize: "11px",
                  fontWeight: 400,
                  cssClass: "",
                  padding: {
                    left: 5,
                    right: 5,
                    top: 2,
                    bottom: 2,
                  },
                },
              },
            },
            text: {
              x: 0,
              y: 0,
              text: "",
              textAnchor: "start",
              fontSize: "13px",
              fontWeight: 400,
              appendTo: ".apexcharts-annotations",
              backgroundColor: "transparent",
              borderColor: "#c2c2c2",
              borderRadius: 0,
              borderWidth: 0,
              paddingLeft: 4,
              paddingRight: 4,
              paddingTop: 2,
              paddingBottom: 2,
            },
          },
          responsive: {},
          series: {
            legendInactiveClass: "legend-mouseover-inactive",
          },
          theme: {
            isColorFn: false,
            isHeatmapDistributed: false,
            isBarDistributed: false,
          },
          formatters: {
            tooltipKeyFormat: "dd MMM",
          },
          titleSubtitle: {},
          legend: {
            isBarsDistributed: false,
            legendHelpers: {},
          },
          toolbar: {
            ev: {},
            selectedClass: "apexcharts-selected",
            minX: 1.7976931348623157e308,
            maxX: -1.7976931348623157e308,
          },
          tooltip: {
            tooltipUtil: {},
            tooltipLabels: {
              tooltipUtil: {},
            },
            tooltipPosition: {},
            marker: {
              tooltipPosition: {},
            },
            intersect: {
              isVerticalGroupedRangeBar: false,
            },
            axesTooltip: {},
            showOnIntersect: false,
            showTooltipTitle: true,
            fixedTooltip: false,
            xaxisTooltip: null,
            yaxisTTEls: null,
            isBarShared: true,
            lastHoverTime: 1690360741355,
          },
          dimensions: {
            lgRect: {
              x: 0,
              y: 0,
              height: 0,
              width: 0,
            },
            yAxisWidth: 0,
            yAxisWidthLeft: 0,
            yAxisWidthRight: 0,
            xAxisHeight: 0,
            isSparkline: false,
            dimHelpers: {},
            dimYAxis: {},
            dimXAxis: {},
            dimGrid: {},
            lgWidthForSideLegends: 0,
            xPadRight: 0,
            xPadLeft: 0,
          },
          updateHelpers: {},
          zoomPanSelection: {
            selectedClass: "apexcharts-selected",
            minX: 1.7976931348623157e308,
            maxX: -1.7976931348623157e308,
            dragged: false,
            graphics: {},
            eventList: [
              "mousedown",
              "mouseleave",
              "mousemove",
              "touchstart",
              "touchmove",
              "mouseup",
              "touchend",
            ],
            clientX: 0,
            clientY: 0,
            startX: 0,
            endX: 0,
            dragX: 0,
            startY: 0,
            endY: 0,
            dragY: 0,
            moveDirection: "none",
          },
          pie: {
            chartType: "pie",
            initialAnim: false,
            dynamicAnim: false,
            animBeginArr: [0, 0, 0, 0, 0],
            animDur: 0,
            defaultSize: 352,
            centerY: 176,
            centerX: 176,
            fullAngle: 360,
            initialAngle: 0,
            donutSize: 108.35975609756099,
            maxY: 25,
            sliceLabels: [],
            sliceSizes: [
              166.70731707317074, 166.70731707317074, 166.70731707317074,
              166.70731707317074,
            ],
            prevSectorAngleArr: [],
            ret: {
              _stroke: "#000000",
              _event: null,
              dom: {},
              node: {},
              type: "g",
            },
            strokeWidth: 0,
          },
          rangeBar: {
            isHorizontal: false,
            strokeWidth: 1,
            isNullValue: false,
            isRangeBar: 0,
            isVerticalGroupedRangeBar: 0,
            isFunnel: false,
            xyRatios: null,
            yaxisIndex: 0,
            seriesLen: 0,
            pathArr: [],
            lastActiveBarSerieIndex: 0,
            stackedSeriesTotals: [],
            barHelpers: {},
          },
          annotations: {
            graphics: {},
            helpers: {},
            xAxisAnnotations: {
              helpers: {},
            },
            yAxisAnnotations: {
              helpers: {},
            },
            pointsAnnotations: {
              helpers: {},
            },
            xDivision: null,
          },
        },
      },
    ],
  };
  return (
    <div className="card">
      <h2
        style={{
          color: "#828282",
          fontSize: "24px",
          textAlign: "left",
          marginLeft: "30px",
        }}
      >
        Budget
      </h2>
      <div className="card-body">
        <ReactApexcharts
          type="pie"
          options={options}
          series={options.series}
          height={340}
        />
      </div>
    </div>
  );
};

export default Donut;
