import React from 'react'
import ReactApexcharts from '../@core/components/react-apexcharts'

export default function RevenueBarChart() {
const options ={
    "chart": {
        "animations": {
            "enabled": false,
            "easing": "swing"
        },
        "foreColor": "#FFFFFF",
        "fontFamily": "Roboto",
        "height": 411,
        "id": "mMYn1",
        "stacked": true,
        "toolbar": {
            "show": false
        },
        "type": "bar",
        "width": 575
    },
    "plotOptions": {
        "bar": {
            "columnWidth": "16%",
            "barHeight": "86%",
            "borderRadius": 5
        },
        "radialBar": {
            "hollow": {
                "background": "#fff"
            },
            "dataLabels": {
                "name": {},
                "value": {},
                "total": {}
            }
        },
        "pie": {
            "donut": {
                "labels": {
                    "name": {},
                    "value": {},
                    "total": {}
                }
            }
        }
    },
    "colors": [
        "#5E28F1",
        "#E7930C",
        "#81D4FA",
        "#fd6a6a",
        "#546E7A",
        "#5E28F1",
        "#E7930C",
        "#81D4FA",
        "#fd6a6a",
        "#546E7A",
        "#5E28F1",
        "#E7930C",
        "#81D4FA",
        "#fd6a6a",
        "#546E7A",
        "#5E28F1",
        "#E7930C",
        "#81D4FA",
        "#fd6a6a",
        "#546E7A",
        "#5E28F1",
        "#E7930C",
        "#81D4FA",
        "#fd6a6a",
        "#546E7A",
        "#5E28F1",
        "#E7930C",
        "#81D4FA",
        "#fd6a6a",
        "#546E7A",
        "#5E28F1",
        "#E7930C",
        "#81D4FA",
        "#fd6a6a",
        "#546E7A",
        "#5E28F1"
    ],
    "dataLabels": {
        "enabled": false,
        "offsetX": -2,
        "offsetY": -3,
        "style": {
            "fontWeight": 700,
            "colors": [
                "#fff"
            ]
        },
        "background": {
            "enabled": false
        }
    },
    "fill": {
        "opacity": 1
    },
    "grid": {
        "show": false,
        "padding": {
            "right": 25,
            "left": 15
        }
    },
    "legend": {
        "position": "top",
        "fontSize": 13,
        "offsetY": 0,
        "markers": {
            "strokeColor": "#FFFFFF.",
            "shape": "square",
            "size": 8
        },
        "itemMargin": {
            "vertical": 0
        }
    },
    "series": [
        {
            "name": "Males",
            "data": [
                {
                    "x": "60-64",
                    "y": 2.1
                },
                {
                    "x": "50-54",
                    "y": 3.8
                },
                {
                    "x": "45-49",
                    "y": 3.9
                },
                {
                    "x": "40-44",
                    "y": "3.2"
                },
                {
                    "x": "35-39",
                    "y": "2"
                },
                {
                    "x": "30-34",
                    "y": "2.8"
                },
                {
                    "x": "25-29",
                    "y": 4.1
                },
                {
                    "x": "20-24",
                    "y": "3.2"
                },
                {
                    "x": "15-19",
                    "y": 4.5
                }
            ]
        },
        {
            "name": "Females",
            "data": [
                {
                    "x": "60-64",
                    "y": -2.2
                },
                {
                    "x": "50-54",
                    "y": -3.7
                },
                {
                    "x": "45-49",
                    "y": -3.96
                },
                {
                    "x": "40-44",
                    "y": "-3.22"
                },
                {
                    "x": "35-39",
                    "y": "-2"
                },
                {
                    "x": "30-34",
                    "y": "-2.8"
                },
                {
                    "x": "25-29",
                    "y": -4.1
                },
                {
                    "x": "20-24",
                    "y": "-3"
                },
                {
                    "x": "15-19",
                    "y": -4.1
                }
            ]
        }
    ],
    "tooltip": {
        "shared": false,
        "intersect": true
    },
    "xaxis": {
        "labels": {
            "show": false,
            "trim": true,
            "style": {
                "colors": "#000000"
            }
        },
        "axisBorder": {
            "show": false
        },
        "axisTicks": {
            "show": false
        },
        "tickPlacement": "between",
        "title": {
            "style": {
                "fontWeight": 700
            }
        },
        "tooltip": {
            "enabled": false
        }
    },
    "yaxis": {
        "tickAmount": 5,
        "labels": {
            "style": {
                "colors": "#000000"
            }
        },
        "title": {
            "style": {}
        }
    },
    "theme": {
        "palette": "palette4"
    },
    "_chartInstances": [
        {
            "id": "JhynT",
            "chart": {
                "opts": {
                    "series": [
                        {
                            "name": "Column",
                            "data": [
                                {
                                    "x": "Item 1",
                                    "y": 10,
                                    "fillColor": null
                                },
                                {
                                    "x": "Item 2",
                                    "y": 20
                                },
                                {
                                    "x": "Item 3",
                                    "y": 30
                                },
                                {
                                    "x": "Item 4",
                                    "y": 40
                                }
                            ]
                        }
                    ],
                    "annotations": {
                        "position": "front",
                        "yaxis": [],
                        "xaxis": [],
                        "points": []
                    },
                    "chart": {
                        "type": "bar",
                        "background": "",
                        "foreColor": "#333",
                        "offsetX": 0,
                        "offsetY": 0,
                        "toolbar": {
                            "show": false
                        },
                        "animations": {
                            "enabled": false
                        },
                        "dropShadow": {
                            "enabled": false,
                            "top": 2,
                            "left": 2,
                            "blur": 4,
                            "color": "#000",
                            "opacity": 0.35
                        },
                        "fontFamily": "Roboto",
                        "height": 250,
                        "width": 400,
                        "id": "JhynT"
                    },
                    "plotOptions": {
                        "bar": {
                            "horizontal": false,
                            "columnWidth": "70%",
                            "barHeight": "70%",
                            "distributed": false,
                            "borderRadius": 10,
                            "colors": {
                                "ranges": [],
                                "backgroundBarColors": [],
                                "backgroundBarOpacity": 1
                            },
                            "dataLabels": {
                                "position": "top"
                            }
                        },
                        "heatmap": {
                            "radius": 2,
                            "enableShades": true,
                            "shadeIntensity": 0.5
                        },
                        "radialBar": {
                            "startAngle": 0,
                            "endAngle": 360,
                            "offsetX": 0,
                            "offsetY": 0,
                            "hollow": {
                                "margin": 5,
                                "size": "50%",
                                "background": "#fff",
                                "position": "front",
                                "dropShadow": {
                                    "enabled": false,
                                    "top": 0,
                                    "left": 0,
                                    "blur": 3,
                                    "color": "#000",
                                    "opacity": 0.5
                                }
                            },
                            "track": {
                                "show": true,
                                "background": "#f2f2f2",
                                "strokeWidth": "97%",
                                "opacity": 1,
                                "margin": 5,
                                "dropShadow": {
                                    "enabled": false,
                                    "top": 0,
                                    "left": 0,
                                    "blur": 3,
                                    "color": "#000",
                                    "opacity": 0.5
                                }
                            },
                            "dataLabels": {
                                "show": true,
                                "name": {
                                    "show": true,
                                    "fontSize": 16,
                                    "offsetY": 0
                                },
                                "value": {
                                    "show": true,
                                    "fontSize": 14,
                                    "offsetY": 16
                                },
                                "total": {
                                    "show": false,
                                    "label": "Total",
                                    "fontSize": 16
                                }
                            }
                        },
                        "pie": {
                            "offsetX": 0,
                            "offsetY": 0,
                            "dataLabels": {
                                "offset": 0
                            },
                            "donut": {
                                "size": "65%",
                                "labels": {
                                    "show": false,
                                    "name": {
                                        "show": true,
                                        "fontSize": 16,
                                        "offsetY": -10
                                    },
                                    "value": {
                                        "show": true,
                                        "fontSize": 20,
                                        "offsetY": 10
                                    },
                                    "total": {
                                        "show": false,
                                        "showAlways": false,
                                        "label": "Total",
                                        "fontSize": 16
                                    }
                                }
                            }
                        },
                        "radar": {
                            "offsetX": 0,
                            "offsetY": 0,
                            "polygons": {
                                "strokeColors": "#e8e8e8",
                                "connectorColors": "#e8e8e8",
                                "fill": {}
                            }
                        }
                    },
                    "theme": {
                        "mode": "light",
                        "palette": "palette4"
                    },
                    "dataLabels": {
                        "enabled": false,
                        "textAnchor": "middle",
                        "offsetX": 0,
                        "offsetY": 0,
                        "style": {
                            "fontSize": 12,
                            "fontWeight": 700
                        },
                        "background": {
                            "enabled": true,
                            "foreColor": "#fff",
                            "borderRadius": 2,
                            "padding": 4,
                            "opacity": 0.9,
                            "borderWidth": 1,
                            "borderColor": "#fff"
                        },
                        "dropShadow": {
                            "enabled": false,
                            "top": 1,
                            "left": 1,
                            "blur": 1,
                            "color": "#000",
                            "opacity": 0.45
                        }
                    },
                    "markers": {
                        "size": 0,
                        "strokeColors": "#fff",
                        "strokeWidth": 2,
                        "strokeOpacity": 0.9,
                        "strokeDashArray": 0,
                        "fillOpacity": 1,
                        "shape": "circle",
                        "radius": 2,
                        "offsetX": 0,
                        "offsetY": 0,
                        "hover": {}
                    },
                    "xaxis": {
                        "type": "category",
                        "offsetX": 0,
                        "offsetY": 0,
                        "position": "bottom",
                        "labels": {
                            "show": true,
                            "rotate": -45,
                            "rotateAlways": false,
                            "trim": true,
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "fontSize": 12,
                                "fontWeight": 400
                            }
                        },
                        "axisBorder": {
                            "show": true,
                            "color": "#e0e0e0"
                        },
                        "axisTicks": {
                            "show": true,
                            "color": "#e0e0e0"
                        },
                        "title": {
                            "style": {
                                "fontSize": 12,
                                "fontWeight": 700
                            }
                        },
                        "crosshairs": {
                            "show": true,
                            "width": 1,
                            "position": "back",
                            "opacity": 0.9,
                            "stroke": {
                                "color": "#b6b6b6",
                                "width": 1
                            },
                            "fill": {
                                "type": "solid",
                                "color": "#B1B9C4",
                                "gradient": {
                                    "colorFrom": "#D8E3F0",
                                    "colorTo": "#BED1E6",
                                    "opacityFrom": 0.4,
                                    "opacityTo": 0.5
                                }
                            },
                            "dropShadow": {
                                "enabled": false,
                                "left": 0,
                                "top": 0,
                                "blur": 1,
                                "opacity": 0.4
                            }
                        },
                        "convertedCatToNumeric": false
                    },
                    "yaxis": [
                        {
                            "show": true,
                            "showAlways": false,
                            "showForNullSeries": true,
                            "opposite": false,
                            "reversed": false,
                            "logarithmic": false,
                            "logBase": 10,
                            "tickAmount": 5,
                            "forceNiceScale": false,
                            "floating": false,
                            "labels": {
                                "show": true,
                                "minWidth": 0,
                                "maxWidth": 160,
                                "offsetX": 0,
                                "offsetY": 0,
                                "rotate": 0,
                                "padding": 20,
                                "style": {
                                    "fontSize": 11,
                                    "fontWeight": 400,
                                    "cssClass": ""
                                }
                            },
                            "axisBorder": {
                                "show": false,
                                "color": "#e0e0e0",
                                "width": 1,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "axisTicks": {
                                "show": false,
                                "color": "#e0e0e0",
                                "width": 6,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "title": {
                                "rotate": -90,
                                "offsetY": 0,
                                "offsetX": 0,
                                "style": {
                                    "fontSize": 11,
                                    "fontWeight": 700,
                                    "cssClass": ""
                                }
                            },
                            "tooltip": {
                                "enabled": false,
                                "offsetX": 0
                            },
                            "crosshairs": {
                                "show": true,
                                "position": "front",
                                "stroke": {
                                    "color": "#b6b6b6",
                                    "width": 1,
                                    "dashArray": 0
                                }
                            }
                        }
                    ],
                    "grid": {
                        "show": true,
                        "borderColor": "#e0e0e0",
                        "strokeDashArray": 0,
                        "position": "back",
                        "xaxis": {
                            "lines": {
                                "show": false
                            }
                        },
                        "yaxis": {
                            "lines": {
                                "show": true
                            }
                        },
                        "row": {
                            "opacity": 0.5
                        },
                        "column": {
                            "opacity": 0.5
                        },
                        "padding": {
                            "top": 0,
                            "right": 25,
                            "bottom": 0,
                            "left": 15
                        }
                    },
                    "stroke": {
                        "show": true,
                        "curve": "smooth",
                        "lineCap": "butt",
                        "width": 2,
                        "dashArray": 0
                    },
                    "fill": {
                        "type": "solid",
                        "opacity": 0.85,
                        "gradient": {
                            "shade": "dark",
                            "type": "horizontal",
                            "shadeIntensity": 0.5,
                            "inverseColors": true,
                            "opacityFrom": 1,
                            "opacityTo": 1,
                            "stops": [
                                0,
                                50,
                                100
                            ],
                            "colorStops": []
                        },
                        "pattern": {
                            "style": "squares",
                            "width": 6,
                            "height": 6,
                            "strokeWidth": 2
                        }
                    },
                    "legend": {
                        "show": true,
                        "showForSingleSeries": false,
                        "floating": false,
                        "position": "bottom",
                        "horizontalAlign": "center",
                        "fontSize": 14,
                        "fontWeight": 400,
                        "offsetX": -20,
                        "offsetY": 0,
                        "labels": {
                            "useSeriesColors": false
                        },
                        "markers": {
                            "width": 12,
                            "height": 12,
                            "strokeWidth": 0,
                            "strokeColor": "#fff",
                            "radius": 12
                        },
                        "itemMargin": {
                            "horizontal": 5,
                            "vertical": 0
                        },
                        "onItemClick": {
                            "toggleDataSeries": true
                        },
                        "onItemHover": {
                            "highlightDataSeries": true
                        }
                    }
                },
                "w": {
                    "config": {
                        "annotations": {
                            "position": "front",
                            "texts": [],
                            "images": [],
                            "shapes": []
                        },
                        "chart": {
                            "animations": {
                                "enabled": false,
                                "easing": "swing",
                                "speed": 800,
                                "animateGradually": {
                                    "delay": 150,
                                    "enabled": true
                                },
                                "dynamicAnimation": {
                                    "enabled": true,
                                    "speed": 350
                                }
                            },
                            "background": "",
                            "locales": [
                                {
                                    "name": "en",
                                    "options": {
                                        "months": [
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
                                            "December"
                                        ],
                                        "shortMonths": [
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
                                            "Dec"
                                        ],
                                        "days": [
                                            "Sunday",
                                            "Monday",
                                            "Tuesday",
                                            "Wednesday",
                                            "Thursday",
                                            "Friday",
                                            "Saturday"
                                        ],
                                        "shortDays": [
                                            "Sun",
                                            "Mon",
                                            "Tue",
                                            "Wed",
                                            "Thu",
                                            "Fri",
                                            "Sat"
                                        ],
                                        "toolbar": {
                                            "exportToSVG": "Download SVG",
                                            "exportToPNG": "Download PNG",
                                            "exportToCSV": "Download CSV",
                                            "menu": "Menu",
                                            "selection": "Selection",
                                            "selectionZoom": "Selection Zoom",
                                            "zoomIn": "Zoom In",
                                            "zoomOut": "Zoom Out",
                                            "pan": "Panning",
                                            "reset": "Reset Zoom"
                                        }
                                    }
                                }
                            ],
                            "defaultLocale": "en",
                            "dropShadow": {
                                "enabled": false,
                                "top": 2,
                                "left": 2,
                                "blur": 4,
                                "color": "#000",
                                "opacity": 0.35
                            },
                            "events": {},
                            "foreColor": "#333",
                            "fontFamily": "Roboto",
                            "height": 250,
                            "parentHeightOffset": 15,
                            "redrawOnParentResize": true,
                            "redrawOnWindowResize": true,
                            "id": "JhynT",
                            "offsetX": 0,
                            "offsetY": 0,
                            "selection": {
                                "enabled": false,
                                "type": "x",
                                "fill": {
                                    "color": "#24292e",
                                    "opacity": 0.1
                                },
                                "stroke": {
                                    "width": 1,
                                    "color": "#24292e",
                                    "opacity": 0.4,
                                    "dashArray": 3
                                },
                                "xaxis": {},
                                "yaxis": {}
                            },
                            "sparkline": {
                                "enabled": false
                            },
                            "brush": {
                                "enabled": false,
                                "autoScaleYaxis": true
                            },
                            "stacked": false,
                            "stackType": "normal",
                            "toolbar": {
                                "show": false,
                                "offsetX": 0,
                                "offsetY": 0,
                                "tools": {
                                    "download": true,
                                    "selection": false,
                                    "zoom": false,
                                    "zoomin": false,
                                    "zoomout": false,
                                    "pan": false,
                                    "reset": false,
                                    "customIcons": []
                                },
                                "export": {
                                    "csv": {
                                        "columnDelimiter": ",",
                                        "headerCategory": "category",
                                        "headerValue": "value"
                                    },
                                    "png": {},
                                    "svg": {}
                                },
                                "autoSelected": "zoom"
                            },
                            "type": "bar",
                            "width": 400,
                            "zoom": {
                                "enabled": true,
                                "type": "x",
                                "autoScaleYaxis": false,
                                "zoomedArea": {
                                    "fill": {
                                        "color": "#90CAF9",
                                        "opacity": 0.4
                                    },
                                    "stroke": {
                                        "color": "#0D47A1",
                                        "opacity": 0.4,
                                        "width": 1
                                    }
                                }
                            }
                        },
                        "plotOptions": {
                            "area": {
                                "fillTo": "origin"
                            },
                            "bar": {
                                "horizontal": false,
                                "columnWidth": "70%",
                                "barHeight": "70%",
                                "distributed": false,
                                "borderRadius": 10,
                                "rangeBarOverlap": true,
                                "rangeBarGroupRows": false,
                                "colors": {
                                    "backgroundBarOpacity": 1,
                                    "backgroundBarRadius": 0
                                },
                                "dataLabels": {
                                    "position": "top",
                                    "maxItems": 100,
                                    "hideOverflowingLabels": true,
                                    "orientation": "horizontal"
                                }
                            },
                            "bubble": {},
                            "candlestick": {
                                "colors": {
                                    "upward": "#00B746",
                                    "downward": "#EF403C"
                                },
                                "wick": {
                                    "useFillColor": true
                                }
                            },
                            "boxPlot": {
                                "colors": {
                                    "upper": "#00E396",
                                    "lower": "#008FFB"
                                }
                            },
                            "heatmap": {
                                "radius": 2,
                                "enableShades": true,
                                "shadeIntensity": 0.5,
                                "reverseNegativeShade": false,
                                "distributed": false,
                                "useFillColorAsStroke": false,
                                "colorScale": {
                                    "inverse": false,
                                    "ranges": []
                                }
                            },
                            "treemap": {
                                "enableShades": true,
                                "shadeIntensity": 0.5,
                                "distributed": false,
                                "reverseNegativeShade": false,
                                "useFillColorAsStroke": false,
                                "colorScale": {
                                    "inverse": false,
                                    "ranges": []
                                }
                            },
                            "radialBar": {
                                "inverseOrder": false,
                                "startAngle": 0,
                                "endAngle": 360,
                                "offsetX": 0,
                                "offsetY": 0,
                                "hollow": {
                                    "margin": 5,
                                    "size": "50%",
                                    "background": "#fff",
                                    "imageWidth": 150,
                                    "imageHeight": 150,
                                    "imageOffsetX": 0,
                                    "imageOffsetY": 0,
                                    "imageClipped": true,
                                    "position": "front",
                                    "dropShadow": {
                                        "enabled": false,
                                        "top": 0,
                                        "left": 0,
                                        "blur": 3,
                                        "color": "#000",
                                        "opacity": 0.5
                                    }
                                },
                                "track": {
                                    "show": true,
                                    "background": "#f2f2f2",
                                    "strokeWidth": "97%",
                                    "opacity": 1,
                                    "margin": 5,
                                    "dropShadow": {
                                        "enabled": false,
                                        "top": 0,
                                        "left": 0,
                                        "blur": 3,
                                        "color": "#000",
                                        "opacity": 0.5
                                    }
                                },
                                "dataLabels": {
                                    "show": true,
                                    "name": {
                                        "show": true,
                                        "fontSize": 16,
                                        "fontWeight": 600,
                                        "offsetY": 0
                                    },
                                    "value": {
                                        "show": true,
                                        "fontSize": 14,
                                        "fontWeight": 400,
                                        "offsetY": 16
                                    },
                                    "total": {
                                        "show": false,
                                        "label": "Total",
                                        "fontSize": 16,
                                        "fontWeight": 600
                                    }
                                }
                            },
                            "pie": {
                                "customScale": 1,
                                "offsetX": 0,
                                "offsetY": 0,
                                "startAngle": 0,
                                "endAngle": 360,
                                "expandOnClick": true,
                                "dataLabels": {
                                    "offset": 0,
                                    "minAngleToShowLabel": 10
                                },
                                "donut": {
                                    "size": "65%",
                                    "labels": {
                                        "show": false,
                                        "name": {
                                            "show": true,
                                            "fontSize": 16,
                                            "fontWeight": 600,
                                            "offsetY": -10
                                        },
                                        "value": {
                                            "show": true,
                                            "fontSize": 20,
                                            "fontWeight": 400,
                                            "offsetY": 10
                                        },
                                        "total": {
                                            "show": false,
                                            "showAlways": false,
                                            "label": "Total",
                                            "fontSize": 16,
                                            "fontWeight": 400
                                        }
                                    }
                                }
                            },
                            "polarArea": {
                                "rings": {
                                    "strokeWidth": 1,
                                    "strokeColor": "#e8e8e8"
                                },
                                "spokes": {
                                    "strokeWidth": 1,
                                    "connectorColors": "#e8e8e8"
                                }
                            },
                            "radar": {
                                "offsetX": 0,
                                "offsetY": 0,
                                "polygons": {
                                    "strokeWidth": 1,
                                    "strokeColors": "#e8e8e8",
                                    "connectorColors": "#e8e8e8",
                                    "fill": {}
                                }
                            }
                        },
                        "dataLabels": {
                            "enabled": false,
                            "textAnchor": "middle",
                            "distributed": false,
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "fontSize": 12,
                                "fontWeight": 700
                            },
                            "background": {
                                "enabled": true,
                                "foreColor": "#fff",
                                "borderRadius": 2,
                                "padding": 4,
                                "opacity": 0.9,
                                "borderWidth": 1,
                                "borderColor": "#fff",
                                "dropShadow": {
                                    "enabled": false,
                                    "top": 1,
                                    "left": 1,
                                    "blur": 1,
                                    "color": "#000",
                                    "opacity": 0.45
                                }
                            },
                            "dropShadow": {
                                "enabled": false,
                                "top": 1,
                                "left": 1,
                                "blur": 1,
                                "color": "#000",
                                "opacity": 0.45
                            }
                        },
                        "fill": {
                            "type": "solid",
                            "opacity": 0.85,
                            "gradient": {
                                "shade": "dark",
                                "type": "horizontal",
                                "shadeIntensity": 0.5,
                                "inverseColors": true,
                                "opacityFrom": 1,
                                "opacityTo": 1
                            },
                            "image": {
                                "src": []
                            },
                            "pattern": {
                                "style": "squares",
                                "width": 6,
                                "height": 6,
                                "strokeWidth": 2
                            }
                        },
                        "forecastDataPoints": {
                            "count": 0,
                            "fillOpacity": 0.5,
                            "dashArray": 4
                        },
                        "grid": {
                            "show": true,
                            "borderColor": "#e0e0e0",
                            "strokeDashArray": 0,
                            "position": "back",
                            "xaxis": {
                                "lines": {
                                    "show": false
                                }
                            },
                            "yaxis": {
                                "lines": {
                                    "show": true
                                }
                            },
                            "row": {
                                "opacity": 0.5
                            },
                            "column": {
                                "opacity": 0.5
                            },
                            "padding": {
                                "top": 0,
                                "right": 25,
                                "bottom": 0,
                                "left": 15
                            }
                        },
                        "labels": [],
                        "legend": {
                            "show": true,
                            "showForSingleSeries": false,
                            "showForNullSeries": true,
                            "showForZeroSeries": true,
                            "floating": false,
                            "position": "bottom",
                            "horizontalAlign": "center",
                            "inverseOrder": false,
                            "fontSize": 14,
                            "fontWeight": 400,
                            "offsetX": -20,
                            "offsetY": 0,
                            "customLegendItems": [],
                            "labels": {
                                "useSeriesColors": false
                            },
                            "markers": {
                                "width": 12,
                                "height": 12,
                                "strokeWidth": 0,
                                "strokeColor": "#fff",
                                "radius": 12,
                                "offsetX": 0,
                                "offsetY": 0,
                                "shape": "square",
                                "size": 8
                            },
                            "itemMargin": {
                                "horizontal": 5,
                                "vertical": 0
                            },
                            "onItemClick": {
                                "toggleDataSeries": true
                            },
                            "onItemHover": {
                                "highlightDataSeries": true
                            }
                        },
                        "markers": {
                            "discrete": [],
                            "size": 0,
                            "strokeColors": "#fff",
                            "strokeWidth": 2,
                            "strokeOpacity": 0.9,
                            "strokeDashArray": 0,
                            "fillOpacity": 1,
                            "shape": "circle",
                            "width": 8,
                            "height": 8,
                            "radius": 2,
                            "offsetX": 0,
                            "offsetY": 0,
                            "showNullDataPoints": true,
                            "hover": {
                                "sizeOffset": 3
                            }
                        },
                        "noData": {
                            "align": "center",
                            "verticalAlign": "middle",
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "fontSize": "14px"
                            }
                        },
                        "responsive": [],
                        "series": [
                            {
                                "name": "Column"
                            }
                        ],
                        "states": {
                            "normal": {
                                "filter": {
                                    "type": "none",
                                    "value": 0
                                }
                            },
                            "hover": {
                                "filter": {
                                    "type": "lighten",
                                    "value": 0.1
                                }
                            },
                            "active": {
                                "allowMultipleDataPointsSelection": false,
                                "filter": {
                                    "type": "darken",
                                    "value": 0.5
                                }
                            }
                        },
                        "title": {
                            "align": "left",
                            "margin": 5,
                            "offsetX": 0,
                            "offsetY": 0,
                            "floating": false,
                            "style": {
                                "fontSize": "14px",
                                "fontWeight": 900
                            }
                        },
                        "subtitle": {
                            "align": "left",
                            "margin": 5,
                            "offsetX": 0,
                            "offsetY": 30,
                            "floating": false,
                            "style": {
                                "fontSize": "12px",
                                "fontWeight": 400
                            }
                        },
                        "stroke": {
                            "show": true,
                            "curve": "smooth",
                            "lineCap": "butt",
                            "width": 2,
                            "dashArray": 0
                        },
                        "tooltip": {
                            "enabled": true,
                            "shared": false,
                            "followCursor": false,
                            "intersect": true,
                            "inverseOrder": false,
                            "fillSeriesColor": false,
                            "theme": "light",
                            "style": {
                                "fontSize": "12px"
                            },
                            "onDatasetHover": {
                                "highlightDataSeries": false
                            },
                            "x": {
                                "show": true,
                                "format": "dd MMM"
                            },
                            "y": {
                                "title": {}
                            },
                            "z": {
                                "title": "Size: "
                            },
                            "marker": {
                                "show": true
                            },
                            "items": {
                                "display": "flex"
                            },
                            "fixed": {
                                "enabled": false,
                                "position": "topRight",
                                "offsetX": 0,
                                "offsetY": 0
                            }
                        },
                        "xaxis": {
                            "type": "category",
                            "categories": [],
                            "convertedCatToNumeric": false,
                            "offsetX": 0,
                            "offsetY": 0,
                            "labels": {
                                "show": true,
                                "rotate": -45,
                                "rotateAlways": false,
                                "hideOverlappingLabels": true,
                                "trim": true,
                                "maxHeight": 120,
                                "showDuplicates": true,
                                "style": {
                                    "fontSize": 12,
                                    "fontWeight": 400,
                                    "cssClass": ""
                                },
                                "offsetX": 0,
                                "offsetY": 0,
                                "datetimeUTC": true,
                                "datetimeFormatter": {
                                    "year": "yyyy",
                                    "month": "MMM 'yy",
                                    "day": "dd MMM",
                                    "hour": "HH:mm",
                                    "minute": "HH:mm:ss",
                                    "second": "HH:mm:ss"
                                }
                            },
                            "axisBorder": {
                                "show": true,
                                "color": "#e0e0e0",
                                "width": "100%",
                                "height": 1,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "axisTicks": {
                                "show": true,
                                "color": "#e0e0e0",
                                "height": 6,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "tickPlacement": "between",
                            "floating": false,
                            "position": "bottom",
                            "title": {
                                "offsetX": 0,
                                "offsetY": 0,
                                "style": {
                                    "fontSize": 12,
                                    "fontWeight": 700,
                                    "cssClass": ""
                                }
                            },
                            "crosshairs": {
                                "show": true,
                                "width": 1,
                                "position": "back",
                                "opacity": 0.9,
                                "stroke": {
                                    "color": "#b6b6b6",
                                    "width": 1,
                                    "dashArray": 3
                                },
                                "fill": {
                                    "type": "solid",
                                    "color": "#B1B9C4",
                                    "gradient": {
                                        "colorFrom": "#D8E3F0",
                                        "colorTo": "#BED1E6",
                                        "stops": [
                                            0,
                                            100
                                        ],
                                        "opacityFrom": 0.4,
                                        "opacityTo": 0.5
                                    }
                                },
                                "dropShadow": {
                                    "enabled": false,
                                    "left": 0,
                                    "top": 0,
                                    "blur": 1,
                                    "opacity": 0.4
                                }
                            },
                            "tooltip": {
                                "enabled": false,
                                "offsetY": 0,
                                "style": {
                                    "fontSize": "12px"
                                }
                            }
                        },
                        "yaxis": [
                            {
                                "show": true,
                                "showAlways": false,
                                "showForNullSeries": true,
                                "opposite": false,
                                "reversed": false,
                                "logarithmic": false,
                                "logBase": 10,
                                "tickAmount": 5,
                                "forceNiceScale": false,
                                "floating": false,
                                "labels": {
                                    "show": true,
                                    "minWidth": 0,
                                    "maxWidth": 160,
                                    "offsetX": 0,
                                    "offsetY": 0,
                                    "rotate": 0,
                                    "padding": 20,
                                    "style": {
                                        "fontSize": 11,
                                        "fontWeight": 400,
                                        "cssClass": ""
                                    }
                                },
                                "axisBorder": {
                                    "show": false,
                                    "color": "#e0e0e0",
                                    "width": 1,
                                    "offsetX": 0,
                                    "offsetY": 0
                                },
                                "axisTicks": {
                                    "show": false,
                                    "color": "#e0e0e0",
                                    "width": 6,
                                    "offsetX": 0,
                                    "offsetY": 0
                                },
                                "title": {
                                    "rotate": -90,
                                    "offsetY": 0,
                                    "offsetX": 0,
                                    "style": {
                                        "fontSize": 11,
                                        "fontWeight": 700,
                                        "cssClass": ""
                                    }
                                },
                                "tooltip": {
                                    "enabled": false,
                                    "offsetX": 0
                                },
                                "crosshairs": {
                                    "show": true,
                                    "position": "front",
                                    "stroke": {
                                        "color": "#b6b6b6",
                                        "width": 1,
                                        "dashArray": 0
                                    }
                                }
                            }
                        ],
                        "theme": {
                            "mode": "light",
                            "palette": "palette4",
                            "monochrome": {
                                "enabled": false,
                                "color": "#008FFB",
                                "shadeTo": "light",
                                "shadeIntensity": 0.65
                            }
                        }
                    },
                    "globals": {
                        "chartID": "JhynT",
                        "cuid": "zxedwy12",
                        "events": {
                            "beforeMount": [],
                            "mounted": [],
                            "updated": [],
                            "clicked": [],
                            "selection": [],
                            "dataPointSelection": [],
                            "zoomed": [],
                            "scrolled": []
                        },
                        "colors": [
                            "#4ecdc4",
                            "#c7f464",
                            "#81D4FA",
                            "#fd6a6a",
                            "#546E7A"
                        ],
                        "clientX": 1155,
                        "clientY": 498,
                        "fill": {
                            "colors": [
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A"
                            ]
                        },
                        "stroke": {},
                        "dataLabels": {
                            "style": {}
                        },
                        "radarPolygons": {
                            "fill": {
                                "colors": [
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
                                    "none"
                                ]
                            }
                        },
                        "markers": {
                            "size": [
                                0,
                                0
                            ],
                            "largestSize": 0
                        },
                        "animationEnded": true,
                        "isDirty": true,
                        "isExecCalled": false,
                        "initialConfig": {},
                        "initialSeries": [
                            {
                                "name": "Column",
                                "data": [
                                    {
                                        "x": "Item 1",
                                        "y": 10,
                                        "fillColor": null
                                    },
                                    {
                                        "x": "Item 2",
                                        "y": 20
                                    },
                                    {
                                        "x": "Item 3",
                                        "y": 30
                                    },
                                    {
                                        "x": "Item 4",
                                        "y": 40
                                    }
                                ]
                            }
                        ],
                        "lastXAxis": [],
                        "lastYAxis": [],
                        "columnSeries": null,
                        "labels": [
                            "Item 1",
                            "Item 2",
                            "Item 3",
                            "Item 4"
                        ],
                        "timescaleLabels": [],
                        "noLabelsProvided": false,
                        "allSeriesCollapsed": false,
                        "collapsedSeries": [],
                        "collapsedSeriesIndices": [],
                        "ancillaryCollapsedSeries": [],
                        "ancillaryCollapsedSeriesIndices": [],
                        "risingSeries": [],
                        "dataFormatXNumeric": false,
                        "capturedSeriesIndex": -1,
                        "capturedDataPointIndex": -1,
                        "selectedDataPoints": [],
                        "goldenPadding": 35,
                        "invalidLogScale": false,
                        "ignoreYAxisIndexes": [],
                        "yAxisSameScaleIndices": [],
                        "maxValsInArrayIndex": 0,
                        "radialSize": 94.00000000000001,
                        "zoomEnabled": true,
                        "panEnabled": false,
                        "selectionEnabled": false,
                        "yaxis": null,
                        "mousedown": false,
                        "lastClientPosition": {},
                        "yValueDecimal": 0,
                        "total": 0,
                        "SVGNS": "http://www.w3.org/2000/svg",
                        "svgWidth": 400,
                        "svgHeight": 250,
                        "noData": false,
                        "locale": {
                            "toolbar": {
                                "exportToSVG": "Download SVG",
                                "exportToPNG": "Download PNG",
                                "exportToCSV": "Download CSV",
                                "menu": "Menu",
                                "selection": "Selection",
                                "selectionZoom": "Selection Zoom",
                                "zoomIn": "Zoom In",
                                "zoomOut": "Zoom Out",
                                "pan": "Panning",
                                "reset": "Reset Zoom"
                            }
                        },
                        "dom": {
                            "baseEl": {
                                "_prevClass": "JhynT"
                            },
                            "elWrap": {},
                            "Paper": {
                                "_stroke": "#000000",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "svg",
                                "_defs": {
                                    "_stroke": "#000000",
                                    "_event": null,
                                    "dom": {},
                                    "node": {},
                                    "type": "defs"
                                }
                            },
                            "elGraphical": {
                                "_stroke": "#000000",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "g"
                            },
                            "elAnnotations": {
                                "_stroke": "#000000",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "g"
                            },
                            "elLegendWrap": {},
                            "elGridRectMask": {},
                            "elGridRectMarkerMask": {},
                            "elForecastMask": {},
                            "elNonForecastMask": {},
                            "elGridRect": {
                                "_stroke": "none",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "rect"
                            },
                            "elGridRectMarker": {
                                "_stroke": "none",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "rect"
                            },
                            "elLegendForeign": {
                                "instance": {
                                    "_stroke": "#000000",
                                    "_event": null,
                                    "dom": {},
                                    "type": "foreignObject"
                                }
                            }
                        },
                        "memory": {
                            "methodsToExec": []
                        },
                        "shouldAnimate": true,
                        "skipLastTimelinelabel": false,
                        "skipFirstTimelinelabel": false,
                        "delayedElements": [
                            {
                                "el": {
                                    "instance": {
                                        "_stroke": "#000000",
                                        "_event": null,
                                        "dom": {},
                                        "type": "g"
                                    }
                                },
                                "index": 0
                            },
                            {
                                "el": {
                                    "instance": {
                                        "_stroke": "#000000",
                                        "_event": null,
                                        "dom": {},
                                        "type": "g"
                                    }
                                },
                                "index": 0
                            },
                            {
                                "el": {
                                    "instance": {
                                        "_stroke": "#000000",
                                        "_event": null,
                                        "dom": {},
                                        "type": "g"
                                    }
                                },
                                "index": 0
                            }
                        ],
                        "axisCharts": true,
                        "isDataXYZ": false,
                        "resized": true,
                        "resizeTimer": null,
                        "comboCharts": false,
                        "dataChanged": false,
                        "previousPaths": [
                            {
                                "type": "bar",
                                "paths": [
                                    {
                                        "d": "M 0.1 6.838050000000001L 68.40578613281251 6.838050000000001Q 78.40578613281251 6.838050000000001 78.40578613281251 16.838050000000003L 78.40578613281251 26.74895Q 78.40578613281251 36.74895 68.40578613281251 36.74895L 68.40578613281251 36.74895L 0.1 36.74895L 0.1 36.74895z"
                                    },
                                    {
                                        "d": "M 0.1 52.425050000000006L 146.71157226562502 52.425050000000006Q 156.71157226562502 52.425050000000006 156.71157226562502 62.425050000000006L 156.71157226562502 72.33595000000001Q 156.71157226562502 82.33595000000001 146.71157226562502 82.33595000000001L 146.71157226562502 82.33595000000001L 0.1 82.33595000000001L 0.1 82.33595000000001z"
                                    },
                                    {
                                        "d": "M 0.1 98.01205000000002L 225.01735839843752 98.01205000000002Q 235.01735839843752 98.01205000000002 235.01735839843752 108.01205000000002L 235.01735839843752 117.92295000000001Q 235.01735839843752 127.92295000000001 225.01735839843752 127.92295000000001L 225.01735839843752 127.92295000000001L 0.1 127.92295000000001L 0.1 127.92295000000001z"
                                    },
                                    {
                                        "d": "M 0.1 143.59905000000003L 303.3231445312501 143.59905000000003Q 313.3231445312501 143.59905000000003 313.3231445312501 153.59905000000003L 313.3231445312501 163.50995000000003Q 313.3231445312501 173.50995000000003 303.3231445312501 173.50995000000003L 303.3231445312501 173.50995000000003L 0.1 173.50995000000003L 0.1 173.50995000000003z"
                                    }
                                ],
                                "realIndex": "0"
                            }
                        ],
                        "allSeriesHasEqualX": true,
                        "pointsArray": [],
                        "dataLabelsRects": [],
                        "lastDrawnDataLabelsIndexes": [],
                        "hasNullValues": false,
                        "zoomed": false,
                        "gridWidth": 345,
                        "gridHeight": 205,
                        "rotateXLabels": false,
                        "defaultLabels": false,
                        "yLabelFormatters": [
                            null
                        ],
                        "LINE_HEIGHT_RATIO": 1.618,
                        "xAxisLabelsHeight": 10,
                        "xAxisLabelsWidth": 0,
                        "yAxisLabelsWidth": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "translateX": 30,
                        "translateY": 30,
                        "translateYAxisX": [
                            -3
                        ],
                        "yAxisWidths": [],
                        "translateXAxisY": -4,
                        "translateXAxisX": 0,
                        "tooltip": {
                            "tooltipUtil": {},
                            "tooltipLabels": {
                                "tooltipUtil": {}
                            },
                            "tooltipPosition": {},
                            "marker": {
                                "tooltipPosition": {}
                            },
                            "intersect": {},
                            "axesTooltip": {},
                            "showOnIntersect": true,
                            "showTooltipTitle": true,
                            "fixedTooltip": false,
                            "xaxisTooltip": null,
                            "yaxisTTEls": null,
                            "isBarShared": false,
                            "lastHoverTime": 1683634318596,
                            "xyRatios": {
                                "yRatio": [
                                    0.1951219512195122
                                ],
                                "invertedYRatio": 0.11594202898550725,
                                "zRatio": null,
                                "xRatio": null,
                                "initialXRatio": null,
                                "invertedXRatio": null,
                                "baseLineInvertedY": 0.1,
                                "baseLineY": [
                                    0
                                ],
                                "baseLineX": 0
                            },
                            "isXAxisTooltipEnabled": false,
                            "yaxisTooltips": [
                                false
                            ],
                            "allTooltipSeriesGroups": [],
                            "xaxisOffY": 206,
                            "yaxisOffX": 1,
                            "yaxisTooltip": {},
                            "yaxisTooltipText": [
                                {}
                            ],
                            "xcrosshairsWidth": 1,
                            "ycrosshairs": {
                                "instance": {
                                    "_stroke": "#b6b6b6",
                                    "_event": null,
                                    "dom": {},
                                    "type": "line"
                                }
                            },
                            "ycrosshairsHidden": {
                                "instance": {
                                    "_stroke": "#b6b6b6",
                                    "_event": null,
                                    "dom": {},
                                    "type": "line"
                                }
                            },
                            "xAxisTicksPositions": [
                                86.25,
                                172.5,
                                258.75,
                                345
                            ],
                            "dataPointsDividedHeight": 51.25,
                            "dataPointsDividedWidth": 86.25,
                            "tooltipTitle": {},
                            "legendLabels": {},
                            "ttItems": [
                                {}
                            ],
                            "seriesBound": {
                                "x": 0,
                                "y": 0,
                                "width": 0,
                                "height": 0,
                                "top": 0,
                                "right": 0,
                                "bottom": 0,
                                "left": 0
                            }
                        },
                        "series": [
                            [
                                10,
                                20,
                                30,
                                40
                            ]
                        ],
                        "seriesCandleO": [],
                        "seriesCandleH": [],
                        "seriesCandleM": [],
                        "seriesCandleL": [],
                        "seriesCandleC": [],
                        "seriesRangeStart": [],
                        "seriesRangeEnd": [],
                        "seriesRangeBar": [],
                        "seriesPercent": [
                            [
                                100,
                                100,
                                100,
                                100
                            ]
                        ],
                        "seriesGoals": [
                            [
                                null,
                                null,
                                null,
                                null
                            ]
                        ],
                        "seriesX": [
                            null
                        ],
                        "seriesZ": [
                            []
                        ],
                        "seriesNames": [
                            "Column"
                        ],
                        "seriesTotals": [
                            100
                        ],
                        "seriesLog": [
                            null
                        ],
                        "seriesColors": [
                            null
                        ],
                        "stackedSeriesTotals": [
                            10,
                            20,
                            30,
                            40
                        ],
                        "seriesXvalues": [
                            [
                                43.125,
                                215.625,
                                301.875,
                                388.125
                            ]
                        ],
                        "seriesYvalues": [
                            [
                                153.75,
                                102.5,
                                51.25,
                                0
                            ]
                        ],
                        "categoryLabels": [],
                        "selectionResizeTimer": null,
                        "isXNumeric": false,
                        "xaxisLabelsCount": 4,
                        "isMultiLineX": false,
                        "isMultipleYAxis": false,
                        "maxY": 40,
                        "minY": 0,
                        "minYArr": [
                            0
                        ],
                        "maxYArr": [
                            40
                        ],
                        "maxX": -1.7976931348623157e+308,
                        "minX": 1.7976931348623157e+308,
                        "initialMaxX": -1.7976931348623157e+308,
                        "initialMinX": 1.7976931348623157e+308,
                        "maxDate": 0,
                        "minDate": 1.7976931348623157e+308,
                        "minZ": 1.7976931348623157e+308,
                        "maxZ": -1.7976931348623157e+308,
                        "minXDiff": 1.7976931348623157e+308,
                        "yAxisScale": [
                            {
                                "result": [
                                    0,
                                    10,
                                    20,
                                    30,
                                    40
                                ],
                                "niceMin": 0,
                                "niceMax": 40
                            }
                        ],
                        "xAxisScale": null,
                        "xAxisTicksPositions": [],
                        "yLabelsCoords": [
                            {
                                "width": 10,
                                "index": 0
                            }
                        ],
                        "yTitleCoords": [
                            {
                                "width": 0,
                                "index": 0
                            }
                        ],
                        "barPadForNumericAxis": 0,
                        "padHorizontal": 0,
                        "xRange": null,
                        "yRange": [
                            40
                        ],
                        "zRange": null,
                        "dataPoints": 4,
                        "xTickAmount": 0,
                        "xyCharts": true,
                        "isBarHorizontal": false,
                        "chartClass": ".apexchartsJhynT",
                        "comboBarCount": 0,
                        "isRangeBar": false,
                        "xAxisHeight": 10,
                        "yLogRatio": [
                            0.1951219512195122
                        ],
                        "logYRange": [
                            null
                        ]
                    }
                },
                "publicMethods": [
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
                    "addXaxisAnnotation",
                    "addYaxisAnnotation",
                    "addPointAnnotation",
                    "clearAnnotations",
                    "removeAnnotation",
                    "paper",
                    "destroy"
                ],
                "eventList": [
                    "click",
                    "mousedown",
                    "mousemove",
                    "mouseleave",
                    "touchstart",
                    "touchmove",
                    "touchleave",
                    "mouseup",
                    "touchend"
                ],
                "animations": {},
                "axes": {},
                "core": {},
                "config": {
                    "opts": {}
                },
                "data": {
                    "coreUtils": {},
                    "fallbackToCategory": true,
                    "activeSeriesIndex": 0
                },
                "grid": {
                    "xaxisLabels": [
                        "Item 1",
                        "Item 2",
                        "Item 3",
                        "Item 4"
                    ],
                    "axesUtils": {},
                    "isRangeBar": 0,
                    "elg": {
                        "_stroke": "#000000",
                        "_event": null,
                        "dom": {},
                        "node": {},
                        "type": "g"
                    },
                    "elgridLinesH": {
                        "_stroke": "#000000",
                        "_event": null,
                        "dom": {},
                        "node": {},
                        "type": "g"
                    },
                    "elgridLinesV": {
                        "_stroke": "#000000",
                        "_event": null,
                        "dom": {},
                        "node": {},
                        "type": "g"
                    }
                },
                "graphics": {},
                "coreUtils": {},
                "crosshairs": {},
                "events": {},
                "exports": {},
                "localization": {},
                "options": {
                    "yAxis": {
                        "show": true,
                        "showAlways": false,
                        "showForNullSeries": true,
                        "opposite": false,
                        "reversed": false,
                        "logarithmic": false,
                        "logBase": 10,
                        "forceNiceScale": false,
                        "floating": false,
                        "labels": {
                            "show": true,
                            "minWidth": 0,
                            "maxWidth": 160,
                            "offsetX": 0,
                            "offsetY": 0,
                            "rotate": 0,
                            "padding": 20,
                            "style": {
                                "colors": [],
                                "fontSize": "11px",
                                "fontWeight": 400,
                                "cssClass": ""
                            }
                        },
                        "axisBorder": {
                            "show": false,
                            "color": "#e0e0e0",
                            "width": 1,
                            "offsetX": 0,
                            "offsetY": 0
                        },
                        "axisTicks": {
                            "show": false,
                            "color": "#e0e0e0",
                            "width": 6,
                            "offsetX": 0,
                            "offsetY": 0
                        },
                        "title": {
                            "rotate": -90,
                            "offsetY": 0,
                            "offsetX": 0,
                            "style": {
                                "fontSize": "11px",
                                "fontWeight": 900,
                                "cssClass": ""
                            }
                        },
                        "tooltip": {
                            "enabled": false,
                            "offsetX": 0
                        },
                        "crosshairs": {
                            "show": true,
                            "position": "front",
                            "stroke": {
                                "color": "#b6b6b6",
                                "width": 1,
                                "dashArray": 0
                            }
                        }
                    },
                    "pointAnnotation": {
                        "x": 0,
                        "y": null,
                        "yAxisIndex": 0,
                        "seriesIndex": 0,
                        "marker": {
                            "size": 4,
                            "fillColor": "#fff",
                            "strokeWidth": 2,
                            "strokeColor": "#333",
                            "shape": "circle",
                            "offsetX": 0,
                            "offsetY": 0,
                            "radius": 2,
                            "cssClass": ""
                        },
                        "label": {
                            "borderColor": "#c2c2c2",
                            "borderWidth": 1,
                            "borderRadius": 2,
                            "textAnchor": "middle",
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "background": "#fff",
                                "fontSize": "11px",
                                "fontWeight": 400,
                                "cssClass": "",
                                "padding": {
                                    "left": 5,
                                    "right": 5,
                                    "top": 2,
                                    "bottom": 2
                                }
                            }
                        },
                        "customSVG": {
                            "offsetX": 0,
                            "offsetY": 0
                        },
                        "image": {
                            "width": 20,
                            "height": 20,
                            "offsetX": 0,
                            "offsetY": 0
                        }
                    },
                    "yAxisAnnotation": {
                        "y": 0,
                        "y2": null,
                        "strokeDashArray": 1,
                        "fillColor": "#c2c2c2",
                        "borderColor": "#c2c2c2",
                        "borderWidth": 1,
                        "opacity": 0.3,
                        "offsetX": 0,
                        "offsetY": 0,
                        "width": "100%",
                        "yAxisIndex": 0,
                        "label": {
                            "borderColor": "#c2c2c2",
                            "borderWidth": 1,
                            "borderRadius": 2,
                            "textAnchor": "end",
                            "position": "right",
                            "offsetX": 0,
                            "offsetY": -3,
                            "style": {
                                "background": "#fff",
                                "fontSize": "11px",
                                "fontWeight": 400,
                                "cssClass": "",
                                "padding": {
                                    "left": 5,
                                    "right": 5,
                                    "top": 2,
                                    "bottom": 2
                                }
                            }
                        }
                    },
                    "xAxisAnnotation": {
                        "x": 0,
                        "x2": null,
                        "strokeDashArray": 1,
                        "fillColor": "#c2c2c2",
                        "borderColor": "#c2c2c2",
                        "borderWidth": 1,
                        "opacity": 0.3,
                        "offsetX": 0,
                        "offsetY": 0,
                        "label": {
                            "borderColor": "#c2c2c2",
                            "borderWidth": 1,
                            "borderRadius": 2,
                            "textAnchor": "middle",
                            "orientation": "vertical",
                            "position": "top",
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "background": "#fff",
                                "fontSize": "11px",
                                "fontWeight": 400,
                                "cssClass": "",
                                "padding": {
                                    "left": 5,
                                    "right": 5,
                                    "top": 2,
                                    "bottom": 2
                                }
                            }
                        }
                    },
                    "text": {
                        "x": 0,
                        "y": 0,
                        "text": "",
                        "textAnchor": "start",
                        "fontSize": "13px",
                        "fontWeight": 400,
                        "appendTo": ".apexcharts-annotations",
                        "backgroundColor": "transparent",
                        "borderColor": "#c2c2c2",
                        "borderRadius": 0,
                        "borderWidth": 0,
                        "paddingLeft": 4,
                        "paddingRight": 4,
                        "paddingTop": 2,
                        "paddingBottom": 2
                    }
                },
                "responsive": {},
                "series": {
                    "legendInactiveClass": "legend-mouseover-inactive"
                },
                "theme": {
                    "isColorFn": false,
                    "isHeatmapDistributed": false,
                    "isBarDistributed": false
                },
                "formatters": {
                    "tooltipKeyFormat": "dd MMM"
                },
                "titleSubtitle": {},
                "legend": {
                    "isBarsDistributed": false,
                    "legendHelpers": {}
                },
                "toolbar": {
                    "selectedClass": "apexcharts-selected",
                    "minX": 1.7976931348623157e+308,
                    "maxX": -1.7976931348623157e+308
                },
                "dimensions": {
                    "lgRect": {
                        "x": 0,
                        "y": 0,
                        "height": 0,
                        "width": 0
                    },
                    "yAxisWidth": 15,
                    "yAxisWidthLeft": 15,
                    "yAxisWidthRight": 0,
                    "xAxisHeight": 10,
                    "isSparkline": false,
                    "dimHelpers": {},
                    "dimYAxis": {},
                    "dimXAxis": {},
                    "dimGrid": {},
                    "lgWidthForSideLegends": 0,
                    "xPadRight": 0,
                    "xPadLeft": 0,
                    "xAxisWidth": 0
                },
                "updateHelpers": {},
                "zoomPanSelection": {
                    "selectedClass": "apexcharts-selected",
                    "minX": 1.7976931348623157e+308,
                    "maxX": -1.7976931348623157e+308,
                    "dragged": false,
                    "graphics": {},
                    "eventList": [
                        "mousedown",
                        "mouseleave",
                        "mousemove",
                        "touchstart",
                        "touchmove",
                        "mouseup",
                        "touchend"
                    ],
                    "clientX": 0,
                    "clientY": 0,
                    "startX": 0,
                    "endX": 0,
                    "dragX": 0,
                    "startY": 0,
                    "endY": 0,
                    "dragY": 0,
                    "moveDirection": "none"
                },
                "pie": {
                    "chartType": "bar",
                    "initialAnim": false,
                    "dynamicAnim": false,
                    "animBeginArr": [
                        0
                    ],
                    "animDur": 0,
                    "defaultSize": 205,
                    "centerY": 102.5,
                    "centerX": 172.5,
                    "fullAngle": 360,
                    "initialAngle": 0,
                    "donutSize": 61.10000000000001,
                    "maxY": 0,
                    "sliceLabels": [],
                    "sliceSizes": [],
                    "prevSectorAngleArr": []
                },
                "rangeBar": {
                    "isHorizontal": false,
                    "strokeWidth": 2,
                    "isNullValue": false,
                    "isRangeBar": 0,
                    "xRatio": null,
                    "initialXRatio": null,
                    "invertedXRatio": null,
                    "invertedYRatio": 0.11594202898550725,
                    "baseLineInvertedY": 0.1,
                    "yaxisIndex": 0,
                    "seriesLen": 0,
                    "barHelpers": {}
                },
                "bar": {
                    "isHorizontal": false,
                    "strokeWidth": 2,
                    "isNullValue": false,
                    "isRangeBar": 0,
                    "xRatio": null,
                    "initialXRatio": null,
                    "invertedXRatio": null,
                    "invertedYRatio": 0.11594202898550725,
                    "baseLineInvertedY": 0.1,
                    "yaxisIndex": 0,
                    "seriesLen": 1,
                    "barHelpers": {},
                    "totalItems": 4,
                    "visibleI": 0,
                    "visibleItems": 4,
                    "zeroSerieses": [],
                    "radiusOnSeriesNumber": 0,
                    "isReversed": false
                },
                "annotations": {
                    "graphics": {},
                    "helpers": {},
                    "xAxisAnnotations": {},
                    "yAxisAnnotations": {},
                    "pointsAnnotations": {},
                    "xDivision": 86.25
                }
            }
        },
        {
            "id": "k2wWe",
            "chart": {
                "opts": {
                    "series": [
                        {
                            "name": "Column",
                            "data": [
                                {
                                    "x": "Item 1",
                                    "y": 10
                                },
                                {
                                    "x": "Item 2",
                                    "y": 20
                                },
                                {
                                    "x": "Item 3",
                                    "y": 30
                                },
                                {
                                    "x": "Item 4",
                                    "y": 40
                                }
                            ]
                        }
                    ],
                    "annotations": {
                        "position": "front",
                        "yaxis": [],
                        "xaxis": [],
                        "points": []
                    },
                    "chart": {
                        "type": "bar",
                        "background": "",
                        "foreColor": "#333",
                        "offsetX": 0,
                        "offsetY": 0,
                        "toolbar": {
                            "show": false
                        },
                        "animations": {
                            "enabled": false
                        },
                        "dropShadow": {
                            "enabled": false,
                            "top": 2,
                            "left": 2,
                            "blur": 4,
                            "color": "#000",
                            "opacity": 0.35
                        },
                        "fontFamily": "Roboto",
                        "height": 250,
                        "width": 400,
                        "id": "k2wWe"
                    },
                    "plotOptions": {
                        "bar": {
                            "horizontal": false,
                            "columnWidth": "70%",
                            "barHeight": "70%",
                            "distributed": false,
                            "borderRadius": 10,
                            "colors": {
                                "ranges": [],
                                "backgroundBarColors": [],
                                "backgroundBarOpacity": 1
                            },
                            "dataLabels": {
                                "position": "top"
                            }
                        },
                        "heatmap": {
                            "radius": 2,
                            "enableShades": true,
                            "shadeIntensity": 0.5
                        },
                        "radialBar": {
                            "startAngle": 0,
                            "endAngle": 360,
                            "offsetX": 0,
                            "offsetY": 0,
                            "hollow": {
                                "margin": 5,
                                "size": "50%",
                                "background": "#fff",
                                "position": "front",
                                "dropShadow": {
                                    "enabled": false,
                                    "top": 0,
                                    "left": 0,
                                    "blur": 3,
                                    "color": "#000",
                                    "opacity": 0.5
                                }
                            },
                            "track": {
                                "show": true,
                                "background": "#f2f2f2",
                                "strokeWidth": "97%",
                                "opacity": 1,
                                "margin": 5,
                                "dropShadow": {
                                    "enabled": false,
                                    "top": 0,
                                    "left": 0,
                                    "blur": 3,
                                    "color": "#000",
                                    "opacity": 0.5
                                }
                            },
                            "dataLabels": {
                                "show": true,
                                "name": {
                                    "show": true,
                                    "fontSize": 16,
                                    "offsetY": 0
                                },
                                "value": {
                                    "show": true,
                                    "fontSize": 14,
                                    "offsetY": 16
                                },
                                "total": {
                                    "show": false,
                                    "label": "Total",
                                    "fontSize": 16
                                }
                            }
                        },
                        "pie": {
                            "offsetX": 0,
                            "offsetY": 0,
                            "dataLabels": {
                                "offset": 0
                            },
                            "donut": {
                                "size": "65%",
                                "labels": {
                                    "show": false,
                                    "name": {
                                        "show": true,
                                        "fontSize": 16,
                                        "offsetY": -10
                                    },
                                    "value": {
                                        "show": true,
                                        "fontSize": 20,
                                        "offsetY": 10
                                    },
                                    "total": {
                                        "show": false,
                                        "showAlways": false,
                                        "label": "Total",
                                        "fontSize": 16
                                    }
                                }
                            }
                        },
                        "radar": {
                            "offsetX": 0,
                            "offsetY": 0,
                            "polygons": {
                                "strokeColors": "#e8e8e8",
                                "connectorColors": "#e8e8e8",
                                "fill": {}
                            }
                        }
                    },
                    "theme": {
                        "mode": "light",
                        "palette": "palette4"
                    },
                    "dataLabels": {
                        "enabled": false,
                        "textAnchor": "middle",
                        "offsetX": 0,
                        "offsetY": 0,
                        "style": {
                            "fontSize": 12,
                            "fontWeight": 700
                        },
                        "background": {
                            "enabled": true,
                            "foreColor": "#fff",
                            "borderRadius": 2,
                            "padding": 4,
                            "opacity": 0.9,
                            "borderWidth": 1,
                            "borderColor": "#fff"
                        },
                        "dropShadow": {
                            "enabled": false,
                            "top": 1,
                            "left": 1,
                            "blur": 1,
                            "color": "#000",
                            "opacity": 0.45
                        }
                    },
                    "markers": {
                        "size": 0,
                        "strokeColors": "#fff",
                        "strokeWidth": 2,
                        "strokeOpacity": 0.9,
                        "strokeDashArray": 0,
                        "fillOpacity": 1,
                        "shape": "circle",
                        "radius": 2,
                        "offsetX": 0,
                        "offsetY": 0,
                        "hover": {}
                    },
                    "yaxis": [
                        {
                            "show": true,
                            "showAlways": false,
                            "showForNullSeries": true,
                            "opposite": false,
                            "reversed": false,
                            "logarithmic": false,
                            "logBase": 10,
                            "tickAmount": 5,
                            "forceNiceScale": false,
                            "floating": false,
                            "labels": {
                                "show": true,
                                "minWidth": 0,
                                "maxWidth": 160,
                                "offsetX": 0,
                                "offsetY": 0,
                                "rotate": 0,
                                "padding": 20,
                                "style": {
                                    "fontSize": 11,
                                    "fontWeight": 400,
                                    "cssClass": ""
                                }
                            },
                            "axisBorder": {
                                "show": false,
                                "color": "#e0e0e0",
                                "width": 1,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "axisTicks": {
                                "show": false,
                                "color": "#e0e0e0",
                                "width": 6,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "title": {
                                "rotate": -90,
                                "offsetY": 0,
                                "offsetX": 0,
                                "style": {
                                    "fontSize": 11,
                                    "fontWeight": 700,
                                    "cssClass": ""
                                }
                            },
                            "tooltip": {
                                "enabled": false,
                                "offsetX": 0
                            },
                            "crosshairs": {
                                "show": true,
                                "position": "front",
                                "stroke": {
                                    "color": "#b6b6b6",
                                    "width": 1,
                                    "dashArray": 0
                                }
                            }
                        }
                    ],
                    "stroke": {
                        "show": true,
                        "curve": "smooth",
                        "lineCap": "butt",
                        "width": 2,
                        "dashArray": 0
                    },
                    "fill": {
                        "type": "solid",
                        "opacity": 0.85,
                        "gradient": {
                            "shade": "dark",
                            "type": "horizontal",
                            "shadeIntensity": 0.5,
                            "inverseColors": true,
                            "opacityFrom": 1,
                            "opacityTo": 1,
                            "stops": [
                                0,
                                50,
                                100
                            ],
                            "colorStops": []
                        },
                        "pattern": {
                            "style": "squares",
                            "width": 6,
                            "height": 6,
                            "strokeWidth": 2
                        }
                    },
                    "legend": {
                        "show": true,
                        "showForSingleSeries": false,
                        "floating": false,
                        "position": "bottom",
                        "horizontalAlign": "center",
                        "fontSize": 14,
                        "fontWeight": 400,
                        "offsetX": -20,
                        "offsetY": 0,
                        "labels": {
                            "useSeriesColors": false
                        },
                        "markers": {
                            "width": 12,
                            "height": 12,
                            "strokeWidth": 0,
                            "strokeColor": "#fff",
                            "radius": 12
                        },
                        "itemMargin": {
                            "horizontal": 5,
                            "vertical": 0
                        },
                        "onItemClick": {
                            "toggleDataSeries": true
                        },
                        "onItemHover": {
                            "highlightDataSeries": true
                        }
                    }
                },
                "w": {
                    "config": {
                        "annotations": {
                            "position": "front",
                            "texts": [],
                            "images": [],
                            "shapes": []
                        },
                        "chart": {
                            "animations": {
                                "enabled": false,
                                "easing": "swing",
                                "speed": 800,
                                "animateGradually": {
                                    "delay": 150,
                                    "enabled": true
                                },
                                "dynamicAnimation": {
                                    "enabled": true,
                                    "speed": 350
                                }
                            },
                            "background": "",
                            "locales": [
                                null
                            ],
                            "defaultLocale": "en",
                            "dropShadow": {
                                "enabled": false,
                                "top": 2,
                                "left": 2,
                                "blur": 4,
                                "color": "#000",
                                "opacity": 0.35
                            },
                            "events": {},
                            "foreColor": "#333",
                            "fontFamily": "Roboto",
                            "height": 250,
                            "parentHeightOffset": 15,
                            "redrawOnParentResize": true,
                            "redrawOnWindowResize": true,
                            "id": "k2wWe",
                            "offsetX": 0,
                            "offsetY": 0,
                            "selection": {
                                "enabled": false,
                                "type": "x",
                                "fill": {
                                    "color": "#24292e",
                                    "opacity": 0.1
                                },
                                "stroke": {
                                    "width": 1,
                                    "color": "#24292e",
                                    "opacity": 0.4,
                                    "dashArray": 3
                                },
                                "xaxis": {},
                                "yaxis": {}
                            },
                            "sparkline": {
                                "enabled": false
                            },
                            "brush": {
                                "enabled": false,
                                "autoScaleYaxis": true
                            },
                            "stacked": false,
                            "stackType": "normal",
                            "toolbar": {
                                "show": false,
                                "offsetX": 0,
                                "offsetY": 0,
                                "tools": {
                                    "download": true,
                                    "selection": false,
                                    "zoom": false,
                                    "zoomin": false,
                                    "zoomout": false,
                                    "pan": false,
                                    "reset": false,
                                    "customIcons": []
                                },
                                "export": {
                                    "csv": {
                                        "columnDelimiter": ",",
                                        "headerCategory": "category",
                                        "headerValue": "value"
                                    },
                                    "png": {},
                                    "svg": {}
                                },
                                "autoSelected": "zoom"
                            },
                            "type": "bar",
                            "width": 400,
                            "zoom": {
                                "enabled": true,
                                "type": "x",
                                "autoScaleYaxis": false,
                                "zoomedArea": {
                                    "fill": {
                                        "color": "#90CAF9",
                                        "opacity": 0.4
                                    },
                                    "stroke": {
                                        "color": "#0D47A1",
                                        "opacity": 0.4,
                                        "width": 1
                                    }
                                }
                            }
                        },
                        "plotOptions": {
                            "area": {
                                "fillTo": "origin"
                            },
                            "bar": {
                                "horizontal": false,
                                "columnWidth": "70%",
                                "barHeight": "70%",
                                "distributed": false,
                                "borderRadius": 10,
                                "rangeBarOverlap": true,
                                "rangeBarGroupRows": false,
                                "colors": {
                                    "backgroundBarOpacity": 1,
                                    "backgroundBarRadius": 0
                                },
                                "dataLabels": {
                                    "position": "top",
                                    "maxItems": 100,
                                    "hideOverflowingLabels": true,
                                    "orientation": "horizontal"
                                }
                            },
                            "bubble": {},
                            "candlestick": {
                                "colors": {
                                    "upward": "#00B746",
                                    "downward": "#EF403C"
                                },
                                "wick": {
                                    "useFillColor": true
                                }
                            },
                            "boxPlot": {
                                "colors": {
                                    "upper": "#00E396",
                                    "lower": "#008FFB"
                                }
                            },
                            "heatmap": {
                                "radius": 2,
                                "enableShades": true,
                                "shadeIntensity": 0.5,
                                "reverseNegativeShade": false,
                                "distributed": false,
                                "useFillColorAsStroke": false,
                                "colorScale": {
                                    "inverse": false,
                                    "ranges": []
                                }
                            },
                            "treemap": {
                                "enableShades": true,
                                "shadeIntensity": 0.5,
                                "distributed": false,
                                "reverseNegativeShade": false,
                                "useFillColorAsStroke": false,
                                "colorScale": {
                                    "inverse": false,
                                    "ranges": []
                                }
                            },
                            "radialBar": {
                                "inverseOrder": false,
                                "startAngle": 0,
                                "endAngle": 360,
                                "offsetX": 0,
                                "offsetY": 0,
                                "hollow": {
                                    "margin": 5,
                                    "size": "50%",
                                    "background": "#fff",
                                    "imageWidth": 150,
                                    "imageHeight": 150,
                                    "imageOffsetX": 0,
                                    "imageOffsetY": 0,
                                    "imageClipped": true,
                                    "position": "front",
                                    "dropShadow": {
                                        "enabled": false,
                                        "top": 0,
                                        "left": 0,
                                        "blur": 3,
                                        "color": "#000",
                                        "opacity": 0.5
                                    }
                                },
                                "track": {
                                    "show": true,
                                    "background": "#f2f2f2",
                                    "strokeWidth": "97%",
                                    "opacity": 1,
                                    "margin": 5,
                                    "dropShadow": {
                                        "enabled": false,
                                        "top": 0,
                                        "left": 0,
                                        "blur": 3,
                                        "color": "#000",
                                        "opacity": 0.5
                                    }
                                },
                                "dataLabels": {
                                    "show": true,
                                    "name": {
                                        "show": true,
                                        "fontSize": 16,
                                        "fontWeight": 600,
                                        "offsetY": 0
                                    },
                                    "value": {
                                        "show": true,
                                        "fontSize": 14,
                                        "fontWeight": 400,
                                        "offsetY": 16
                                    },
                                    "total": {
                                        "show": false,
                                        "label": "Total",
                                        "fontSize": 16,
                                        "fontWeight": 600
                                    }
                                }
                            },
                            "pie": {
                                "customScale": 1,
                                "offsetX": 0,
                                "offsetY": 0,
                                "startAngle": 0,
                                "endAngle": 360,
                                "expandOnClick": true,
                                "dataLabels": {
                                    "offset": 0,
                                    "minAngleToShowLabel": 10
                                },
                                "donut": {
                                    "size": "65%",
                                    "labels": {
                                        "show": false,
                                        "name": {
                                            "show": true,
                                            "fontSize": 16,
                                            "fontWeight": 600,
                                            "offsetY": -10
                                        },
                                        "value": {
                                            "show": true,
                                            "fontSize": 20,
                                            "fontWeight": 400,
                                            "offsetY": 10
                                        },
                                        "total": {
                                            "show": false,
                                            "showAlways": false,
                                            "label": "Total",
                                            "fontSize": 16,
                                            "fontWeight": 400
                                        }
                                    }
                                }
                            },
                            "polarArea": {
                                "rings": {
                                    "strokeWidth": 1,
                                    "strokeColor": "#e8e8e8"
                                },
                                "spokes": {
                                    "strokeWidth": 1,
                                    "connectorColors": "#e8e8e8"
                                }
                            },
                            "radar": {
                                "offsetX": 0,
                                "offsetY": 0,
                                "polygons": {
                                    "strokeWidth": 1,
                                    "strokeColors": "#e8e8e8",
                                    "connectorColors": "#e8e8e8",
                                    "fill": {}
                                }
                            }
                        },
                        "dataLabels": {
                            "enabled": false,
                            "textAnchor": "middle",
                            "distributed": false,
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "fontSize": 12,
                                "fontWeight": 700
                            },
                            "background": {
                                "enabled": true,
                                "foreColor": "#fff",
                                "borderRadius": 2,
                                "padding": 4,
                                "opacity": 0.9,
                                "borderWidth": 1,
                                "borderColor": "#fff",
                                "dropShadow": {
                                    "enabled": false,
                                    "top": 1,
                                    "left": 1,
                                    "blur": 1,
                                    "color": "#000",
                                    "opacity": 0.45
                                }
                            },
                            "dropShadow": {
                                "enabled": false,
                                "top": 1,
                                "left": 1,
                                "blur": 1,
                                "color": "#000",
                                "opacity": 0.45
                            }
                        },
                        "fill": {
                            "type": "solid",
                            "opacity": 0.85,
                            "gradient": {
                                "shade": "dark",
                                "type": "horizontal",
                                "shadeIntensity": 0.5,
                                "inverseColors": true,
                                "opacityFrom": 1,
                                "opacityTo": 1
                            },
                            "image": {
                                "src": []
                            },
                            "pattern": {
                                "style": "squares",
                                "width": 6,
                                "height": 6,
                                "strokeWidth": 2
                            }
                        },
                        "forecastDataPoints": {
                            "count": 0,
                            "fillOpacity": 0.5,
                            "dashArray": 4
                        },
                        "grid": {
                            "show": true,
                            "borderColor": "#e0e0e0",
                            "strokeDashArray": 0,
                            "position": "back",
                            "xaxis": {
                                "lines": {
                                    "show": false
                                }
                            },
                            "yaxis": {
                                "lines": {
                                    "show": true
                                }
                            },
                            "row": {
                                "opacity": 0.5
                            },
                            "column": {
                                "opacity": 0.5
                            },
                            "padding": {
                                "top": 0,
                                "right": 25,
                                "bottom": 0,
                                "left": 15
                            }
                        },
                        "labels": [],
                        "legend": {
                            "show": true,
                            "showForSingleSeries": false,
                            "showForNullSeries": true,
                            "showForZeroSeries": true,
                            "floating": false,
                            "position": "bottom",
                            "horizontalAlign": "center",
                            "inverseOrder": false,
                            "fontSize": 14,
                            "fontWeight": 400,
                            "offsetX": -20,
                            "offsetY": 0,
                            "customLegendItems": [],
                            "labels": {
                                "useSeriesColors": false
                            },
                            "markers": {
                                "width": 12,
                                "height": 12,
                                "strokeWidth": 0,
                                "strokeColor": "#fff",
                                "radius": 12,
                                "offsetX": 0,
                                "offsetY": 0,
                                "shape": "square",
                                "size": 8
                            },
                            "itemMargin": {
                                "horizontal": 5,
                                "vertical": 0
                            },
                            "onItemClick": {
                                "toggleDataSeries": true
                            },
                            "onItemHover": {
                                "highlightDataSeries": true
                            }
                        },
                        "markers": {
                            "discrete": [],
                            "size": 0,
                            "strokeColors": "#fff",
                            "strokeWidth": 2,
                            "strokeOpacity": 0.9,
                            "strokeDashArray": 0,
                            "fillOpacity": 1,
                            "shape": "circle",
                            "width": 8,
                            "height": 8,
                            "radius": 2,
                            "offsetX": 0,
                            "offsetY": 0,
                            "showNullDataPoints": true,
                            "hover": {
                                "sizeOffset": 3
                            }
                        },
                        "noData": {
                            "align": "center",
                            "verticalAlign": "middle",
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "fontSize": "14px"
                            }
                        },
                        "responsive": [],
                        "states": {
                            "normal": {
                                "filter": {
                                    "type": "none",
                                    "value": 0
                                }
                            },
                            "hover": {
                                "filter": {
                                    "type": "lighten",
                                    "value": 0.1
                                }
                            },
                            "active": {
                                "allowMultipleDataPointsSelection": false,
                                "filter": {
                                    "type": "darken",
                                    "value": 0.5
                                }
                            }
                        },
                        "title": {
                            "align": "left",
                            "margin": 5,
                            "offsetX": 0,
                            "offsetY": 0,
                            "floating": false,
                            "style": {
                                "fontSize": "14px",
                                "fontWeight": 900
                            }
                        },
                        "subtitle": {
                            "align": "left",
                            "margin": 5,
                            "offsetX": 0,
                            "offsetY": 30,
                            "floating": false,
                            "style": {
                                "fontSize": "12px",
                                "fontWeight": 400
                            }
                        },
                        "stroke": {
                            "show": true,
                            "curve": "smooth",
                            "lineCap": "butt",
                            "width": 2,
                            "dashArray": 0
                        },
                        "tooltip": {
                            "enabled": true,
                            "shared": false,
                            "followCursor": false,
                            "intersect": true,
                            "inverseOrder": false,
                            "fillSeriesColor": false,
                            "theme": "light",
                            "style": {
                                "fontSize": "12px"
                            },
                            "onDatasetHover": {
                                "highlightDataSeries": false
                            },
                            "x": {
                                "show": true,
                                "format": "dd MMM"
                            },
                            "y": {
                                "title": {}
                            },
                            "z": {
                                "title": "Size: "
                            },
                            "marker": {
                                "show": true
                            },
                            "items": {
                                "display": "flex"
                            },
                            "fixed": {
                                "enabled": false,
                                "position": "topRight",
                                "offsetX": 0,
                                "offsetY": 0
                            }
                        },
                        "xaxis": {
                            "type": "category",
                            "categories": [],
                            "convertedCatToNumeric": false,
                            "offsetX": 0,
                            "offsetY": 0,
                            "labels": {
                                "show": true,
                                "rotate": -45,
                                "rotateAlways": false,
                                "hideOverlappingLabels": true,
                                "trim": true,
                                "maxHeight": 120,
                                "showDuplicates": true,
                                "style": {
                                    "colors": "#DA3030",
                                    "fontSize": 12,
                                    "fontWeight": 400,
                                    "cssClass": ""
                                },
                                "offsetX": 0,
                                "offsetY": 0,
                                "datetimeUTC": true,
                                "datetimeFormatter": {
                                    "year": "yyyy",
                                    "month": "MMM 'yy",
                                    "day": "dd MMM",
                                    "hour": "HH:mm",
                                    "minute": "HH:mm:ss",
                                    "second": "HH:mm:ss"
                                }
                            },
                            "axisBorder": {
                                "show": true,
                                "color": "#e0e0e0",
                                "width": "100%",
                                "height": 1,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "axisTicks": {
                                "show": true,
                                "color": "#e0e0e0",
                                "height": 6,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "tickPlacement": "between",
                            "floating": false,
                            "position": "bottom",
                            "title": {
                                "offsetX": 0,
                                "offsetY": 0,
                                "style": {
                                    "fontSize": 12,
                                    "fontWeight": 700,
                                    "cssClass": ""
                                }
                            },
                            "crosshairs": {
                                "show": true,
                                "width": 1,
                                "position": "back",
                                "opacity": 0.9,
                                "stroke": {
                                    "color": "#b6b6b6",
                                    "width": 1,
                                    "dashArray": 3
                                },
                                "fill": {
                                    "type": "solid",
                                    "color": "#B1B9C4",
                                    "gradient": {
                                        "colorFrom": "#D8E3F0",
                                        "colorTo": "#BED1E6",
                                        "stops": [
                                            0,
                                            100
                                        ],
                                        "opacityFrom": 0.4,
                                        "opacityTo": 0.5
                                    }
                                },
                                "dropShadow": {
                                    "enabled": false,
                                    "left": 0,
                                    "top": 0,
                                    "blur": 1,
                                    "opacity": 0.4
                                }
                            },
                            "tooltip": {
                                "enabled": false,
                                "offsetY": 0,
                                "style": {
                                    "fontSize": "12px"
                                }
                            }
                        },
                        "yaxis": [
                            {
                                "show": true,
                                "showAlways": false,
                                "showForNullSeries": true,
                                "opposite": false,
                                "reversed": false,
                                "logarithmic": false,
                                "logBase": 10,
                                "tickAmount": 5,
                                "forceNiceScale": false,
                                "floating": false,
                                "labels": {
                                    "show": true,
                                    "minWidth": 0,
                                    "maxWidth": 160,
                                    "offsetX": 0,
                                    "offsetY": 0,
                                    "rotate": 0,
                                    "padding": 20,
                                    "style": {
                                        "fontSize": 11,
                                        "fontWeight": 400,
                                        "cssClass": ""
                                    }
                                },
                                "axisBorder": {
                                    "show": false,
                                    "color": "#e0e0e0",
                                    "width": 1,
                                    "offsetX": 0,
                                    "offsetY": 0
                                },
                                "axisTicks": {
                                    "show": false,
                                    "color": "#e0e0e0",
                                    "width": 6,
                                    "offsetX": 0,
                                    "offsetY": 0
                                },
                                "title": {
                                    "rotate": -90,
                                    "offsetY": 0,
                                    "offsetX": 0,
                                    "style": {
                                        "fontSize": 11,
                                        "fontWeight": 700,
                                        "cssClass": ""
                                    }
                                },
                                "tooltip": {
                                    "enabled": false,
                                    "offsetX": 0
                                },
                                "crosshairs": {
                                    "show": true,
                                    "position": "front",
                                    "stroke": {
                                        "color": "#b6b6b6",
                                        "width": 1,
                                        "dashArray": 0
                                    }
                                }
                            }
                        ],
                        "theme": {
                            "mode": "light",
                            "palette": "palette4",
                            "monochrome": {
                                "enabled": false,
                                "color": "#008FFB",
                                "shadeTo": "light",
                                "shadeIntensity": 0.65
                            }
                        }
                    },
                    "globals": {
                        "chartID": "k2wWe",
                        "cuid": "xy9mjqmb",
                        "events": {
                            "beforeMount": [],
                            "mounted": [],
                            "updated": [],
                            "clicked": [],
                            "selection": [],
                            "dataPointSelection": [],
                            "zoomed": [],
                            "scrolled": []
                        },
                        "colors": [
                            "#4ecdc4",
                            "#c7f464",
                            "#81D4FA",
                            "#fd6a6a",
                            "#546E7A"
                        ],
                        "clientX": 1217,
                        "clientY": 497,
                        "fill": {
                            "colors": [
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A"
                            ]
                        },
                        "stroke": {},
                        "dataLabels": {
                            "style": {}
                        },
                        "radarPolygons": {
                            "fill": {
                                "colors": [
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
                                    "none"
                                ]
                            }
                        },
                        "markers": {
                            "size": [
                                0,
                                0
                            ],
                            "largestSize": 0
                        },
                        "animationEnded": true,
                        "isDirty": true,
                        "isExecCalled": false,
                        "initialConfig": {},
                        "initialSeries": [
                            {
                                "name": "Column",
                                "data": [
                                    {
                                        "x": "Item 1",
                                        "y": 10
                                    },
                                    {
                                        "x": "Item 2",
                                        "y": 20
                                    },
                                    {
                                        "x": "Item 3",
                                        "y": 30
                                    },
                                    {
                                        "x": "Item 4",
                                        "y": 40
                                    }
                                ]
                            }
                        ],
                        "lastXAxis": {
                            "type": "category",
                            "categories": [],
                            "convertedCatToNumeric": false,
                            "offsetX": 0,
                            "offsetY": 0,
                            "labels": {
                                "show": true,
                                "rotate": -45,
                                "rotateAlways": false,
                                "hideOverlappingLabels": true,
                                "trim": true,
                                "maxHeight": 120,
                                "showDuplicates": true,
                                "style": {
                                    "colors": "#DA3030",
                                    "fontSize": 12,
                                    "fontWeight": 400,
                                    "cssClass": ""
                                },
                                "offsetX": 0,
                                "offsetY": 0,
                                "datetimeUTC": true,
                                "datetimeFormatter": {
                                    "year": "yyyy",
                                    "month": "MMM 'yy",
                                    "day": "dd MMM",
                                    "hour": "HH:mm",
                                    "minute": "HH:mm:ss",
                                    "second": "HH:mm:ss"
                                }
                            },
                            "axisBorder": {
                                "show": true,
                                "color": "#e0e0e0",
                                "width": "100%",
                                "height": 1,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "axisTicks": {
                                "show": true,
                                "color": "#e0e0e0",
                                "height": 6,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "tickPlacement": "between",
                            "floating": false,
                            "position": "bottom",
                            "title": {
                                "offsetX": 0,
                                "offsetY": 0,
                                "style": {
                                    "fontSize": 12,
                                    "fontWeight": 700,
                                    "cssClass": ""
                                }
                            },
                            "crosshairs": {
                                "show": true,
                                "width": 1,
                                "position": "back",
                                "opacity": 0.9,
                                "stroke": {
                                    "color": "#b6b6b6",
                                    "width": 1,
                                    "dashArray": 3
                                },
                                "fill": {
                                    "type": "solid",
                                    "color": "#B1B9C4",
                                    "gradient": {
                                        "colorFrom": "#D8E3F0",
                                        "colorTo": "#BED1E6",
                                        "stops": [
                                            0,
                                            100
                                        ],
                                        "opacityFrom": 0.4,
                                        "opacityTo": 0.5
                                    }
                                },
                                "dropShadow": {
                                    "enabled": false,
                                    "left": 0,
                                    "top": 0,
                                    "blur": 1,
                                    "opacity": 0.4
                                }
                            },
                            "tooltip": {
                                "enabled": false,
                                "offsetY": 0,
                                "style": {
                                    "fontSize": "12px"
                                }
                            }
                        },
                        "lastYAxis": [
                            {
                                "show": true,
                                "showAlways": false,
                                "showForNullSeries": true,
                                "opposite": false,
                                "reversed": false,
                                "logarithmic": false,
                                "logBase": 10,
                                "tickAmount": 5,
                                "forceNiceScale": false,
                                "floating": false,
                                "labels": {
                                    "show": true,
                                    "minWidth": 0,
                                    "maxWidth": 160,
                                    "offsetX": 0,
                                    "offsetY": 0,
                                    "rotate": 0,
                                    "padding": 20,
                                    "style": {
                                        "fontSize": 11,
                                        "fontWeight": 400,
                                        "cssClass": ""
                                    }
                                },
                                "axisBorder": {
                                    "show": false,
                                    "color": "#e0e0e0",
                                    "width": 1,
                                    "offsetX": 0,
                                    "offsetY": 0
                                },
                                "axisTicks": {
                                    "show": false,
                                    "color": "#e0e0e0",
                                    "width": 6,
                                    "offsetX": 0,
                                    "offsetY": 0
                                },
                                "title": {
                                    "rotate": -90,
                                    "offsetY": 0,
                                    "offsetX": 0,
                                    "style": {
                                        "fontSize": 11,
                                        "fontWeight": 700,
                                        "cssClass": ""
                                    }
                                },
                                "tooltip": {
                                    "enabled": false,
                                    "offsetX": 0
                                },
                                "crosshairs": {
                                    "show": true,
                                    "position": "front",
                                    "stroke": {
                                        "color": "#b6b6b6",
                                        "width": 1,
                                        "dashArray": 0
                                    }
                                }
                            }
                        ],
                        "columnSeries": null,
                        "labels": [
                            "Item 1",
                            "Item 2",
                            "Item 3",
                            "Item 4"
                        ],
                        "timescaleLabels": [],
                        "noLabelsProvided": false,
                        "allSeriesCollapsed": false,
                        "collapsedSeries": [],
                        "collapsedSeriesIndices": [],
                        "ancillaryCollapsedSeries": [],
                        "ancillaryCollapsedSeriesIndices": [],
                        "risingSeries": [],
                        "dataFormatXNumeric": false,
                        "capturedSeriesIndex": -1,
                        "capturedDataPointIndex": -1,
                        "selectedDataPoints": [],
                        "goldenPadding": 35,
                        "invalidLogScale": false,
                        "ignoreYAxisIndexes": [],
                        "yAxisSameScaleIndices": [],
                        "maxValsInArrayIndex": 0,
                        "radialSize": 94.00000000000001,
                        "zoomEnabled": true,
                        "panEnabled": false,
                        "selectionEnabled": false,
                        "yaxis": null,
                        "mousedown": false,
                        "lastClientPosition": {},
                        "yValueDecimal": 0,
                        "total": 0,
                        "SVGNS": "http://www.w3.org/2000/svg",
                        "svgWidth": 400,
                        "svgHeight": 250,
                        "noData": false,
                        "locale": {
                            "toolbar": {
                                "exportToSVG": "Download SVG",
                                "exportToPNG": "Download PNG",
                                "exportToCSV": "Download CSV",
                                "menu": "Menu",
                                "selection": "Selection",
                                "selectionZoom": "Selection Zoom",
                                "zoomIn": "Zoom In",
                                "zoomOut": "Zoom Out",
                                "pan": "Panning",
                                "reset": "Reset Zoom"
                            }
                        },
                        "dom": {
                            "baseEl": {
                                "_prevClass": "k2wWe"
                            },
                            "elWrap": {},
                            "Paper": {
                                "_stroke": "#000000",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "svg",
                                "_defs": {
                                    "_stroke": "#000000",
                                    "_event": null,
                                    "dom": {},
                                    "node": {},
                                    "type": "defs"
                                }
                            },
                            "elGraphical": {
                                "_stroke": "#000000",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "g"
                            },
                            "elAnnotations": {
                                "_stroke": "#000000",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "g"
                            },
                            "elLegendWrap": {},
                            "elGridRectMask": {},
                            "elGridRectMarkerMask": {},
                            "elForecastMask": {},
                            "elNonForecastMask": {},
                            "elGridRect": {
                                "_stroke": "none",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "rect"
                            },
                            "elGridRectMarker": {
                                "_stroke": "none",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "rect"
                            }
                        },
                        "memory": {
                            "methodsToExec": []
                        },
                        "shouldAnimate": true,
                        "skipLastTimelinelabel": false,
                        "skipFirstTimelinelabel": false,
                        "delayedElements": [
                            {
                                "el": {
                                    "instance": {
                                        "_stroke": "#000000",
                                        "_event": null,
                                        "dom": {},
                                        "type": "g"
                                    }
                                },
                                "index": 0
                            },
                            {
                                "el": {
                                    "instance": {
                                        "_stroke": "#000000",
                                        "_event": null,
                                        "dom": {},
                                        "type": "g"
                                    }
                                },
                                "index": 0
                            },
                            {
                                "el": {
                                    "instance": {
                                        "_stroke": "#000000",
                                        "_event": null,
                                        "dom": {},
                                        "type": "g"
                                    }
                                },
                                "index": 0
                            }
                        ],
                        "axisCharts": true,
                        "isDataXYZ": false,
                        "resized": true,
                        "resizeTimer": null,
                        "comboCharts": false,
                        "dataChanged": false,
                        "previousPaths": [
                            {
                                "type": "bar",
                                "paths": [
                                    {
                                        "d": "M 12.474023437500001 182.348L 12.474023437500001 146.76100000000002Q 12.474023437500001 136.76100000000002 22.4740234375 136.76100000000002L 58.686132812500006 136.76100000000002Q 68.6861328125 136.76100000000002 68.6861328125 146.76100000000002L 68.6861328125 146.76100000000002L 68.6861328125 182.348L 68.6861328125 182.348z"
                                    },
                                    {
                                        "d": "M 95.6341796875 182.348L 95.6341796875 101.174Q 95.6341796875 91.174 105.6341796875 91.174L 141.84628906249998 91.174Q 151.84628906249998 91.174 151.84628906249998 101.174L 151.84628906249998 101.174L 151.84628906249998 182.348L 151.84628906249998 182.348z"
                                    },
                                    {
                                        "d": "M 178.7943359375 182.348L 178.7943359375 55.58700000000002Q 178.7943359375 45.58700000000002 188.7943359375 45.58700000000002L 225.00644531249998 45.58700000000002Q 235.00644531249998 45.58700000000002 235.00644531249998 55.58700000000002L 235.00644531249998 55.58700000000002L 235.00644531249998 182.348L 235.00644531249998 182.348z"
                                    },
                                    {
                                        "d": "M 261.9544921875 182.348L 261.9544921875 10Q 261.9544921875 0 271.9544921875 0L 308.16660156250003 0Q 318.16660156250003 0 318.16660156250003 10L 318.16660156250003 10L 318.16660156250003 182.348L 318.16660156250003 182.348z"
                                    }
                                ],
                                "realIndex": "0"
                            }
                        ],
                        "allSeriesHasEqualX": true,
                        "pointsArray": [],
                        "dataLabelsRects": [],
                        "lastDrawnDataLabelsIndexes": [],
                        "hasNullValues": false,
                        "zoomed": false,
                        "gridWidth": 345,
                        "gridHeight": 205,
                        "rotateXLabels": false,
                        "defaultLabels": false,
                        "yLabelFormatters": [
                            null
                        ],
                        "LINE_HEIGHT_RATIO": 1.618,
                        "xAxisLabelsHeight": 10,
                        "xAxisLabelsWidth": 0,
                        "yAxisLabelsWidth": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "translateX": 30,
                        "translateY": 30,
                        "translateYAxisX": [
                            -3
                        ],
                        "yAxisWidths": [],
                        "translateXAxisY": -4,
                        "translateXAxisX": 0,
                        "tooltip": {
                            "tooltipUtil": {},
                            "tooltipLabels": {
                                "tooltipUtil": {}
                            },
                            "tooltipPosition": {},
                            "marker": {
                                "tooltipPosition": {}
                            },
                            "intersect": {},
                            "axesTooltip": {},
                            "showOnIntersect": true,
                            "showTooltipTitle": true,
                            "fixedTooltip": false,
                            "xaxisTooltip": null,
                            "yaxisTTEls": null,
                            "isBarShared": false,
                            "lastHoverTime": 1683634629725,
                            "xyRatios": {
                                "yRatio": [
                                    0.1951219512195122
                                ],
                                "invertedYRatio": 0.11594202898550725,
                                "zRatio": null,
                                "xRatio": null,
                                "initialXRatio": null,
                                "invertedXRatio": null,
                                "baseLineInvertedY": 0.1,
                                "baseLineY": [
                                    0
                                ],
                                "baseLineX": 0
                            },
                            "isXAxisTooltipEnabled": false,
                            "yaxisTooltips": [
                                false
                            ],
                            "allTooltipSeriesGroups": [],
                            "xaxisOffY": 206,
                            "yaxisOffX": 1,
                            "yaxisTooltip": {},
                            "yaxisTooltipText": [
                                {}
                            ],
                            "xcrosshairsWidth": 1,
                            "ycrosshairs": {
                                "instance": {
                                    "_stroke": "#b6b6b6",
                                    "_event": null,
                                    "dom": {},
                                    "type": "line"
                                }
                            },
                            "ycrosshairsHidden": {
                                "instance": {
                                    "_stroke": "#b6b6b6",
                                    "_event": null,
                                    "dom": {},
                                    "type": "line"
                                }
                            },
                            "xAxisTicksPositions": [
                                86.25,
                                172.5,
                                258.75,
                                345
                            ],
                            "dataPointsDividedHeight": 51.25,
                            "dataPointsDividedWidth": 86.25,
                            "tooltipTitle": {},
                            "legendLabels": {},
                            "ttItems": [
                                {}
                            ],
                            "seriesBound": {
                                "x": 0,
                                "y": 0,
                                "width": 0,
                                "height": 0,
                                "top": 0,
                                "right": 0,
                                "bottom": 0,
                                "left": 0
                            }
                        },
                        "series": [
                            [
                                10,
                                20,
                                30,
                                40
                            ]
                        ],
                        "seriesCandleO": [],
                        "seriesCandleH": [],
                        "seriesCandleM": [],
                        "seriesCandleL": [],
                        "seriesCandleC": [],
                        "seriesRangeStart": [],
                        "seriesRangeEnd": [],
                        "seriesRangeBar": [],
                        "seriesPercent": [
                            [
                                100,
                                100,
                                100,
                                100
                            ]
                        ],
                        "seriesGoals": [
                            [
                                null,
                                null,
                                null,
                                null
                            ]
                        ],
                        "seriesX": [
                            null
                        ],
                        "seriesZ": [
                            []
                        ],
                        "seriesNames": [
                            "Column"
                        ],
                        "seriesTotals": [
                            100
                        ],
                        "seriesLog": [
                            null
                        ],
                        "seriesColors": [
                            null
                        ],
                        "stackedSeriesTotals": [
                            10,
                            20,
                            30,
                            40
                        ],
                        "seriesXvalues": [
                            [
                                43.125,
                                215.625,
                                301.875,
                                388.125
                            ]
                        ],
                        "seriesYvalues": [
                            [
                                153.75,
                                102.5,
                                51.25,
                                0
                            ]
                        ],
                        "categoryLabels": [],
                        "selectionResizeTimer": null,
                        "isXNumeric": false,
                        "xaxisLabelsCount": 4,
                        "isMultiLineX": false,
                        "isMultipleYAxis": false,
                        "maxY": 40,
                        "minY": 0,
                        "minYArr": [
                            0
                        ],
                        "maxYArr": [
                            40
                        ],
                        "maxX": -1.7976931348623157e+308,
                        "minX": 1.7976931348623157e+308,
                        "initialMaxX": -1.7976931348623157e+308,
                        "initialMinX": 1.7976931348623157e+308,
                        "maxDate": 0,
                        "minDate": 1.7976931348623157e+308,
                        "minZ": 1.7976931348623157e+308,
                        "maxZ": -1.7976931348623157e+308,
                        "minXDiff": 1.7976931348623157e+308,
                        "yAxisScale": [
                            {
                                "result": [
                                    0,
                                    10,
                                    20,
                                    30,
                                    40
                                ],
                                "niceMin": 0,
                                "niceMax": 40
                            }
                        ],
                        "xAxisScale": null,
                        "xAxisTicksPositions": [],
                        "yLabelsCoords": [
                            {
                                "width": 10,
                                "index": 0
                            }
                        ],
                        "yTitleCoords": [
                            {
                                "width": 0,
                                "index": 0
                            }
                        ],
                        "barPadForNumericAxis": 0,
                        "padHorizontal": 0,
                        "xRange": null,
                        "yRange": [
                            40
                        ],
                        "zRange": null,
                        "dataPoints": 4,
                        "xTickAmount": 0,
                        "xyCharts": true,
                        "isBarHorizontal": false,
                        "chartClass": ".apexchartsk2wWe",
                        "comboBarCount": 0,
                        "isRangeBar": false,
                        "xAxisHeight": 10,
                        "yLogRatio": [
                            0.1951219512195122
                        ],
                        "logYRange": [
                            null
                        ]
                    }
                },
                "publicMethods": [
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
                    "addXaxisAnnotation",
                    "addYaxisAnnotation",
                    "addPointAnnotation",
                    "clearAnnotations",
                    "removeAnnotation",
                    "paper",
                    "destroy"
                ],
                "eventList": [
                    "click",
                    "mousedown",
                    "mousemove",
                    "mouseleave",
                    "touchstart",
                    "touchmove",
                    "touchleave",
                    "mouseup",
                    "touchend"
                ],
                "animations": {},
                "axes": {},
                "core": {},
                "config": {
                    "opts": {}
                },
                "data": {
                    "coreUtils": {},
                    "fallbackToCategory": true,
                    "activeSeriesIndex": 0
                },
                "grid": {
                    "xaxisLabels": [
                        "Item 1",
                        "Item 2",
                        "Item 3",
                        "Item 4"
                    ],
                    "axesUtils": {},
                    "isRangeBar": 0,
                    "elg": {
                        "_stroke": "#000000",
                        "_event": null,
                        "dom": {},
                        "node": {},
                        "type": "g"
                    },
                    "elgridLinesH": {
                        "_stroke": "#000000",
                        "_event": null,
                        "dom": {},
                        "node": {},
                        "type": "g"
                    },
                    "elgridLinesV": {
                        "_stroke": "#000000",
                        "_event": null,
                        "dom": {},
                        "node": {},
                        "type": "g"
                    }
                },
                "graphics": {},
                "coreUtils": {},
                "crosshairs": {},
                "events": {},
                "exports": {},
                "localization": {},
                "options": {
                    "yAxis": {
                        "show": true,
                        "showAlways": false,
                        "showForNullSeries": true,
                        "opposite": false,
                        "reversed": false,
                        "logarithmic": false,
                        "logBase": 10,
                        "forceNiceScale": false,
                        "floating": false,
                        "labels": {
                            "show": true,
                            "minWidth": 0,
                            "maxWidth": 160,
                            "offsetX": 0,
                            "offsetY": 0,
                            "rotate": 0,
                            "padding": 20,
                            "style": {
                                "colors": [],
                                "fontSize": "11px",
                                "fontWeight": 400,
                                "cssClass": ""
                            }
                        },
                        "axisBorder": {
                            "show": false,
                            "color": "#e0e0e0",
                            "width": 1,
                            "offsetX": 0,
                            "offsetY": 0
                        },
                        "axisTicks": {
                            "show": false,
                            "color": "#e0e0e0",
                            "width": 6,
                            "offsetX": 0,
                            "offsetY": 0
                        },
                        "title": {
                            "rotate": -90,
                            "offsetY": 0,
                            "offsetX": 0,
                            "style": {
                                "fontSize": "11px",
                                "fontWeight": 900,
                                "cssClass": ""
                            }
                        },
                        "tooltip": {
                            "enabled": false,
                            "offsetX": 0
                        },
                        "crosshairs": {
                            "show": true,
                            "position": "front",
                            "stroke": {
                                "color": "#b6b6b6",
                                "width": 1,
                                "dashArray": 0
                            }
                        }
                    },
                    "pointAnnotation": {
                        "x": 0,
                        "y": null,
                        "yAxisIndex": 0,
                        "seriesIndex": 0,
                        "marker": {
                            "size": 4,
                            "fillColor": "#fff",
                            "strokeWidth": 2,
                            "strokeColor": "#333",
                            "shape": "circle",
                            "offsetX": 0,
                            "offsetY": 0,
                            "radius": 2,
                            "cssClass": ""
                        },
                        "label": {
                            "borderColor": "#c2c2c2",
                            "borderWidth": 1,
                            "borderRadius": 2,
                            "textAnchor": "middle",
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "background": "#fff",
                                "fontSize": "11px",
                                "fontWeight": 400,
                                "cssClass": "",
                                "padding": {
                                    "left": 5,
                                    "right": 5,
                                    "top": 2,
                                    "bottom": 2
                                }
                            }
                        },
                        "customSVG": {
                            "offsetX": 0,
                            "offsetY": 0
                        },
                        "image": {
                            "width": 20,
                            "height": 20,
                            "offsetX": 0,
                            "offsetY": 0
                        }
                    },
                    "yAxisAnnotation": {
                        "y": 0,
                        "y2": null,
                        "strokeDashArray": 1,
                        "fillColor": "#c2c2c2",
                        "borderColor": "#c2c2c2",
                        "borderWidth": 1,
                        "opacity": 0.3,
                        "offsetX": 0,
                        "offsetY": 0,
                        "width": "100%",
                        "yAxisIndex": 0,
                        "label": {
                            "borderColor": "#c2c2c2",
                            "borderWidth": 1,
                            "borderRadius": 2,
                            "textAnchor": "end",
                            "position": "right",
                            "offsetX": 0,
                            "offsetY": -3,
                            "style": {
                                "background": "#fff",
                                "fontSize": "11px",
                                "fontWeight": 400,
                                "cssClass": "",
                                "padding": {
                                    "left": 5,
                                    "right": 5,
                                    "top": 2,
                                    "bottom": 2
                                }
                            }
                        }
                    },
                    "xAxisAnnotation": {
                        "x": 0,
                        "x2": null,
                        "strokeDashArray": 1,
                        "fillColor": "#c2c2c2",
                        "borderColor": "#c2c2c2",
                        "borderWidth": 1,
                        "opacity": 0.3,
                        "offsetX": 0,
                        "offsetY": 0,
                        "label": {
                            "borderColor": "#c2c2c2",
                            "borderWidth": 1,
                            "borderRadius": 2,
                            "textAnchor": "middle",
                            "orientation": "vertical",
                            "position": "top",
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "background": "#fff",
                                "fontSize": "11px",
                                "fontWeight": 400,
                                "cssClass": "",
                                "padding": {
                                    "left": 5,
                                    "right": 5,
                                    "top": 2,
                                    "bottom": 2
                                }
                            }
                        }
                    },
                    "text": {
                        "x": 0,
                        "y": 0,
                        "text": "",
                        "textAnchor": "start",
                        "fontSize": "13px",
                        "fontWeight": 400,
                        "appendTo": ".apexcharts-annotations",
                        "backgroundColor": "transparent",
                        "borderColor": "#c2c2c2",
                        "borderRadius": 0,
                        "borderWidth": 0,
                        "paddingLeft": 4,
                        "paddingRight": 4,
                        "paddingTop": 2,
                        "paddingBottom": 2
                    }
                },
                "responsive": {},
                "series": {
                    "legendInactiveClass": "legend-mouseover-inactive"
                },
                "theme": {
                    "isColorFn": false,
                    "isHeatmapDistributed": false,
                    "isBarDistributed": false
                },
                "formatters": {
                    "tooltipKeyFormat": "dd MMM"
                },
                "titleSubtitle": {},
                "legend": {
                    "isBarsDistributed": false,
                    "legendHelpers": {}
                },
                "toolbar": {
                    "selectedClass": "apexcharts-selected",
                    "minX": 1.7976931348623157e+308,
                    "maxX": -1.7976931348623157e+308
                },
                "dimensions": {
                    "lgRect": {
                        "x": 0,
                        "y": 0,
                        "height": 0,
                        "width": 0
                    },
                    "yAxisWidth": 15,
                    "yAxisWidthLeft": 15,
                    "yAxisWidthRight": 0,
                    "xAxisHeight": 10,
                    "isSparkline": false,
                    "dimHelpers": {},
                    "dimYAxis": {},
                    "dimXAxis": {},
                    "dimGrid": {},
                    "lgWidthForSideLegends": 0,
                    "xPadRight": 0,
                    "xPadLeft": 0,
                    "xAxisWidth": 0
                },
                "updateHelpers": {},
                "zoomPanSelection": {
                    "selectedClass": "apexcharts-selected",
                    "minX": 1.7976931348623157e+308,
                    "maxX": -1.7976931348623157e+308,
                    "dragged": false,
                    "graphics": {},
                    "eventList": [
                        "mousedown",
                        "mouseleave",
                        "mousemove",
                        "touchstart",
                        "touchmove",
                        "mouseup",
                        "touchend"
                    ],
                    "clientX": 0,
                    "clientY": 0,
                    "startX": 0,
                    "endX": 0,
                    "dragX": 0,
                    "startY": 0,
                    "endY": 0,
                    "dragY": 0,
                    "moveDirection": "none"
                },
                "pie": {
                    "chartType": "bar",
                    "initialAnim": false,
                    "dynamicAnim": false,
                    "animBeginArr": [
                        0
                    ],
                    "animDur": 0,
                    "defaultSize": 205,
                    "centerY": 102.5,
                    "centerX": 172.5,
                    "fullAngle": 360,
                    "initialAngle": 0,
                    "donutSize": 61.10000000000001,
                    "maxY": 0,
                    "sliceLabels": [],
                    "sliceSizes": [],
                    "prevSectorAngleArr": []
                },
                "rangeBar": {
                    "isHorizontal": false,
                    "strokeWidth": 2,
                    "isNullValue": false,
                    "isRangeBar": 0,
                    "xRatio": null,
                    "initialXRatio": null,
                    "invertedXRatio": null,
                    "invertedYRatio": 0.11594202898550725,
                    "baseLineInvertedY": 0.1,
                    "yaxisIndex": 0,
                    "seriesLen": 0,
                    "barHelpers": {}
                },
                "bar": {
                    "isHorizontal": false,
                    "strokeWidth": 2,
                    "isNullValue": false,
                    "isRangeBar": 0,
                    "xRatio": null,
                    "initialXRatio": null,
                    "invertedXRatio": null,
                    "invertedYRatio": 0.11594202898550725,
                    "baseLineInvertedY": 0.1,
                    "yaxisIndex": 0,
                    "seriesLen": 1,
                    "barHelpers": {},
                    "totalItems": 4,
                    "visibleI": 0,
                    "visibleItems": 4,
                    "zeroSerieses": [],
                    "radiusOnSeriesNumber": 0,
                    "isReversed": false
                },
                "annotations": {
                    "graphics": {},
                    "helpers": {},
                    "xAxisAnnotations": {},
                    "yAxisAnnotations": {},
                    "pointsAnnotations": {},
                    "xDivision": 86.25
                }
            }
        },
        {
            "id": "mMYn1",
            "chart": {
                "opts": {
                    "series": [
                        {
                            "name": "Males"
                        },
                        {
                            "name": "Females"
                        }
                    ],
                    "annotations": {
                        "position": "front",
                        "yaxis": [],
                        "xaxis": [],
                        "points": []
                    },
                    "chart": {
                        "type": "bar",
                        "background": "transparent",
                        "foreColor": "#FFFFFF",
                        "offsetX": 0,
                        "offsetY": 0,
                        "toolbar": {
                            "show": false
                        },
                        "animations": {
                            "enabled": false
                        },
                        "dropShadow": {
                            "enabled": false,
                            "top": 2,
                            "left": 2,
                            "blur": 4,
                            "color": "#000",
                            "opacity": 0.35
                        },
                        "fontFamily": "Roboto",
                        "height": 411,
                        "width": 575,
                        "stacked": true,
                        "id": "mMYn1"
                    },
                    "plotOptions": {
                        "bar": {
                            "horizontal": false,
                            "columnWidth": "27%",
                            "barHeight": "86%",
                            "distributed": false,
                            "borderRadius": 6,
                            "colors": {
                                "ranges": [],
                                "backgroundBarColors": [],
                                "backgroundBarOpacity": 1
                            },
                            "dataLabels": {
                                "position": "center"
                            }
                        },
                        "heatmap": {
                            "radius": 2,
                            "enableShades": true,
                            "shadeIntensity": 0.5
                        },
                        "radialBar": {
                            "startAngle": 0,
                            "endAngle": 360,
                            "offsetX": 0,
                            "offsetY": 0,
                            "hollow": {
                                "margin": 5,
                                "size": "50%",
                                "background": "#fff",
                                "position": "front",
                                "dropShadow": {
                                    "enabled": false,
                                    "top": 0,
                                    "left": 0,
                                    "blur": 3,
                                    "color": "#000",
                                    "opacity": 0.5
                                }
                            },
                            "track": {
                                "show": true,
                                "background": "#f2f2f2",
                                "strokeWidth": "97%",
                                "opacity": 1,
                                "margin": 5,
                                "dropShadow": {
                                    "enabled": false,
                                    "top": 0,
                                    "left": 0,
                                    "blur": 3,
                                    "color": "#000",
                                    "opacity": 0.5
                                }
                            },
                            "dataLabels": {
                                "show": true,
                                "name": {
                                    "show": true,
                                    "fontSize": 16,
                                    "offsetY": 0
                                },
                                "value": {
                                    "show": true,
                                    "fontSize": 14,
                                    "offsetY": 16
                                },
                                "total": {
                                    "show": false,
                                    "label": "Total",
                                    "fontSize": 16
                                }
                            }
                        },
                        "pie": {
                            "offsetX": 0,
                            "offsetY": 0,
                            "dataLabels": {
                                "offset": 0
                            },
                            "donut": {
                                "size": "65%",
                                "labels": {
                                    "show": false,
                                    "name": {
                                        "show": true,
                                        "fontSize": 16,
                                        "offsetY": -10
                                    },
                                    "value": {
                                        "show": true,
                                        "fontSize": 20,
                                        "offsetY": 10
                                    },
                                    "total": {
                                        "show": false,
                                        "showAlways": false,
                                        "label": "Total",
                                        "fontSize": 16
                                    }
                                }
                            }
                        },
                        "radar": {
                            "offsetX": 0,
                            "offsetY": 0,
                            "polygons": {
                                "strokeColors": "#e8e8e8",
                                "connectorColors": "#e8e8e8",
                                "fill": {}
                            }
                        }
                    },
                    "theme": {
                        "mode": "light",
                        "palette": "palette4"
                    },
                    "dataLabels": {
                        "enabled": false,
                        "textAnchor": "middle",
                        "offsetX": -2,
                        "offsetY": -3,
                        "style": {
                            "fontSize": 12,
                            "fontWeight": 700
                        },
                        "background": {
                            "enabled": false,
                            "foreColor": "#fff",
                            "borderRadius": 2,
                            "padding": 4,
                            "opacity": 0.9,
                            "borderWidth": 1,
                            "borderColor": "#fff"
                        },
                        "dropShadow": {
                            "enabled": false,
                            "top": 1,
                            "left": 1,
                            "blur": 1,
                            "color": "#000",
                            "opacity": 0.45
                        }
                    },
                    "markers": {
                        "size": 0,
                        "strokeColors": "#fff",
                        "strokeWidth": 2,
                        "strokeOpacity": 0.9,
                        "strokeDashArray": 0,
                        "fillOpacity": 1,
                        "shape": "circle",
                        "radius": 2,
                        "offsetX": 0,
                        "offsetY": 0,
                        "hover": {}
                    },
                    "xaxis": {
                        "type": "category",
                        "offsetX": 0,
                        "offsetY": 0,
                        "position": "bottom",
                        "labels": {
                            "show": true,
                            "rotate": -45,
                            "rotateAlways": false,
                            "trim": true,
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "fontSize": 12,
                                "fontWeight": 400,
                                "cssClass": ""
                            },
                            "hideOverlappingLabels": true,
                            "maxHeight": 120,
                            "showDuplicates": true,
                            "datetimeUTC": true,
                            "datetimeFormatter": {
                                "year": "yyyy",
                                "month": "MMM 'yy",
                                "day": "dd MMM",
                                "hour": "HH:mm",
                                "minute": "HH:mm:ss",
                                "second": "HH:mm:ss"
                            }
                        },
                        "axisBorder": {
                            "show": false,
                            "color": "#e0e0e0",
                            "width": "100%",
                            "height": 1,
                            "offsetX": 0,
                            "offsetY": 0
                        },
                        "axisTicks": {
                            "show": true,
                            "color": "#e0e0e0",
                            "height": 6,
                            "offsetX": 0,
                            "offsetY": 0
                        },
                        "title": {
                            "style": {
                                "fontSize": 12,
                                "fontWeight": 700,
                                "cssClass": ""
                            },
                            "offsetX": 0,
                            "offsetY": 0
                        },
                        "crosshairs": {
                            "show": true,
                            "width": 1,
                            "position": "back",
                            "opacity": 0.9,
                            "stroke": {
                                "color": "#b6b6b6",
                                "width": 1,
                                "dashArray": 3
                            },
                            "fill": {
                                "type": "solid",
                                "color": "#B1B9C4",
                                "gradient": {
                                    "colorFrom": "#D8E3F0",
                                    "colorTo": "#BED1E6",
                                    "opacityFrom": 0.4,
                                    "opacityTo": 0.5,
                                    "stops": [
                                        0,
                                        100
                                    ]
                                }
                            },
                            "dropShadow": {
                                "enabled": false,
                                "left": 0,
                                "top": 0,
                                "blur": 1,
                                "opacity": 0.4
                            }
                        },
                        "convertedCatToNumeric": false,
                        "categories": [],
                        "tickPlacement": "between",
                        "floating": false,
                        "tooltip": {
                            "enabled": false,
                            "offsetY": 0,
                            "style": {
                                "fontSize": "12px"
                            }
                        }
                    },
                    "yaxis": [
                        {
                            "show": true,
                            "showAlways": false,
                            "showForNullSeries": true,
                            "opposite": false,
                            "reversed": false,
                            "logarithmic": false,
                            "logBase": 10,
                            "tickAmount": 5,
                            "forceNiceScale": false,
                            "floating": false,
                            "labels": {
                                "show": true,
                                "minWidth": 0,
                                "maxWidth": 160,
                                "offsetX": 0,
                                "offsetY": 0,
                                "rotate": 0,
                                "padding": 20,
                                "style": {
                                    "fontSize": 11,
                                    "fontWeight": 400,
                                    "cssClass": ""
                                }
                            },
                            "axisBorder": {
                                "show": false,
                                "color": "#e0e0e0",
                                "width": 1,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "axisTicks": {
                                "show": false,
                                "color": "#e0e0e0",
                                "width": 6,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "title": {
                                "rotate": 90,
                                "offsetY": 0,
                                "offsetX": 0,
                                "style": {
                                    "fontSize": 11,
                                    "fontWeight": 700,
                                    "cssClass": ""
                                }
                            },
                            "tooltip": {
                                "enabled": false,
                                "offsetX": 0
                            },
                            "crosshairs": {
                                "show": true,
                                "position": "front",
                                "stroke": {
                                    "color": "#b6b6b6",
                                    "width": 1,
                                    "dashArray": 0
                                }
                            }
                        }
                    ],
                    "grid": {
                        "show": false,
                        "borderColor": "#e0e0e0",
                        "strokeDashArray": 0,
                        "position": "back",
                        "xaxis": {
                            "lines": {
                                "show": false
                            }
                        },
                        "yaxis": {
                            "lines": {
                                "show": true
                            }
                        },
                        "row": {
                            "opacity": 0.5
                        },
                        "column": {
                            "opacity": 0.5
                        },
                        "padding": {
                            "top": 0,
                            "right": 25,
                            "bottom": 0,
                            "left": 15
                        }
                    },
                    "stroke": {
                        "show": true,
                        "curve": "smooth",
                        "lineCap": "butt",
                        "width": 2,
                        "dashArray": 0
                    },
                    "fill": {
                        "type": "solid",
                        "opacity": 0.85,
                        "gradient": {
                            "shade": "dark",
                            "type": "horizontal",
                            "shadeIntensity": 0.5,
                            "inverseColors": true,
                            "opacityFrom": 1,
                            "opacityTo": 1,
                            "stops": [
                                0,
                                50,
                                100
                            ],
                            "colorStops": []
                        },
                        "pattern": {
                            "style": "squares",
                            "width": 6,
                            "height": 6,
                            "strokeWidth": 2
                        }
                    },
                    "legend": {
                        "show": true,
                        "showForSingleSeries": false,
                        "floating": false,
                        "position": "bottom",
                        "horizontalAlign": "center",
                        "fontSize": 14,
                        "fontWeight": 400,
                        "offsetX": -20,
                        "offsetY": 0,
                        "labels": {
                            "useSeriesColors": false
                        },
                        "markers": {
                            "width": 12,
                            "height": 12,
                            "strokeWidth": 0,
                            "strokeColor": "#fff",
                            "radius": 12
                        },
                        "itemMargin": {
                            "horizontal": 5,
                            "vertical": 0
                        },
                        "onItemClick": {
                            "toggleDataSeries": true
                        },
                        "onItemHover": {
                            "highlightDataSeries": true
                        }
                    }
                },
                "w": {
                    "globals": {
                        "chartID": "mMYn1",
                        "cuid": "6s6ybovzh",
                        "events": {
                            "beforeMount": [],
                            "mounted": [],
                            "updated": [],
                            "clicked": [],
                            "selection": [],
                            "dataPointSelection": [],
                            "zoomed": [],
                            "scrolled": []
                        },
                        "clientX": 1103,
                        "clientY": 597,
                        "fill": {
                            "colors": [
                                "#5E28F1",
                                "#E7930C",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#5E28F1",
                                "#E7930C",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#5E28F1",
                                "#E7930C",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#5E28F1",
                                "#E7930C",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#5E28F1",
                                "#E7930C",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#5E28F1",
                                "#E7930C",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#5E28F1",
                                "#E7930C",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#5E28F1"
                            ]
                        },
                        "stroke": {},
                        "dataLabels": {
                            "style": {
                                "colors": [
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff"
                                ]
                            }
                        },
                        "radarPolygons": {
                            "fill": {
                                "colors": [
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
                                    "none"
                                ]
                            }
                        },
                        "markers": {
                            "size": [
                                0,
                                0,
                                0
                            ],
                            "largestSize": 0
                        },
                        "animationEnded": true,
                        "isDirty": true,
                        "isExecCalled": false,
                        "initialConfig": {
                            "annotations": {
                                "position": "front",
                                "texts": [],
                                "images": [],
                                "shapes": []
                            },
                            "forecastDataPoints": {
                                "count": 0,
                                "fillOpacity": 0.5,
                                "dashArray": 4
                            },
                            "labels": [],
                            "markers": {
                                "discrete": [],
                                "size": 0,
                                "strokeColors": "#fff",
                                "strokeWidth": 2,
                                "strokeOpacity": 0.9,
                                "strokeDashArray": 0,
                                "fillOpacity": 1,
                                "shape": "circle",
                                "width": 8,
                                "height": 8,
                                "radius": 2,
                                "offsetX": 0,
                                "offsetY": 0,
                                "showNullDataPoints": true,
                                "hover": {
                                    "sizeOffset": 3
                                }
                            },
                            "noData": {
                                "align": "center",
                                "verticalAlign": "middle",
                                "offsetX": 0,
                                "offsetY": 0,
                                "style": {
                                    "fontSize": "14px"
                                }
                            },
                            "responsive": [],
                            "states": {
                                "normal": {
                                    "filter": {
                                        "type": "none",
                                        "value": 0
                                    }
                                },
                                "hover": {
                                    "filter": {
                                        "type": "lighten",
                                        "value": 0.1
                                    }
                                },
                                "active": {
                                    "allowMultipleDataPointsSelection": false,
                                    "filter": {
                                        "type": "darken",
                                        "value": 0.5
                                    }
                                }
                            },
                            "title": {
                                "align": "left",
                                "margin": 5,
                                "offsetX": 0,
                                "offsetY": 0,
                                "floating": false,
                                "style": {
                                    "fontSize": "14px",
                                    "fontWeight": 900
                                }
                            },
                            "subtitle": {
                                "align": "left",
                                "margin": 5,
                                "offsetX": 0,
                                "offsetY": 30,
                                "floating": false,
                                "style": {
                                    "fontSize": "12px",
                                    "fontWeight": 400
                                }
                            },
                            "stroke": {
                                "show": true,
                                "curve": "smooth",
                                "lineCap": "butt",
                                "width": 2,
                                "dashArray": 0
                            },
                            "yaxis": [
                                null
                            ]
                        },
                        "initialSeries": [
                            {
                                "name": "Males",
                                "data": [
                                    {
                                        "x": "60-64",
                                        "y": 2.1
                                    },
                                    {
                                        "x": "50-54",
                                        "y": 3.8
                                    },
                                    {
                                        "x": "45-49",
                                        "y": 3.9
                                    },
                                    {
                                        "x": "40-44",
                                        "y": "3.2"
                                    },
                                    {
                                        "x": "35-39",
                                        "y": "2"
                                    },
                                    {
                                        "x": "30-34",
                                        "y": "2.8"
                                    },
                                    {
                                        "x": "25-29",
                                        "y": 4.1
                                    },
                                    {
                                        "x": "20-24",
                                        "y": "3.2"
                                    },
                                    {
                                        "x": "15-19",
                                        "y": 4.5
                                    }
                                ]
                            },
                            {
                                "name": "Females",
                                "data": [
                                    {
                                        "x": "60-64",
                                        "y": -2.2
                                    },
                                    {
                                        "x": "50-54",
                                        "y": -3.7
                                    },
                                    {
                                        "x": "45-49",
                                        "y": -3.96
                                    },
                                    {
                                        "x": "40-44",
                                        "y": "-3.22"
                                    },
                                    {
                                        "x": "35-39",
                                        "y": "-2"
                                    },
                                    {
                                        "x": "30-34",
                                        "y": "-2.8"
                                    },
                                    {
                                        "x": "25-29",
                                        "y": -4.1
                                    },
                                    {
                                        "x": "20-24",
                                        "y": "-3"
                                    },
                                    {
                                        "x": "15-19",
                                        "y": -4.1
                                    }
                                ]
                            }
                        ],
                        "lastXAxis": [],
                        "lastYAxis": [],
                        "columnSeries": null,
                        "labels": [
                            "60-64",
                            "50-54",
                            "45-49",
                            "40-44",
                            "35-39",
                            "30-34",
                            "25-29",
                            "20-24",
                            "15-19"
                        ],
                        "timescaleLabels": [],
                        "noLabelsProvided": false,
                        "allSeriesCollapsed": false,
                        "collapsedSeries": [],
                        "collapsedSeriesIndices": [],
                        "ancillaryCollapsedSeries": [],
                        "ancillaryCollapsedSeriesIndices": [],
                        "risingSeries": [],
                        "dataFormatXNumeric": false,
                        "capturedSeriesIndex": -1,
                        "capturedDataPointIndex": -1,
                        "selectedDataPoints": [],
                        "goldenPadding": 35,
                        "invalidLogScale": false,
                        "ignoreYAxisIndexes": [],
                        "yAxisSameScaleIndices": [],
                        "maxValsInArrayIndex": 0,
                        "radialSize": 165.21951219512198,
                        "zoomEnabled": true,
                        "panEnabled": false,
                        "selectionEnabled": false,
                        "yaxis": null,
                        "mousedown": false,
                        "lastClientPosition": {},
                        "yValueDecimal": 2,
                        "total": 0,
                        "SVGNS": "http://www.w3.org/2000/svg",
                        "svgWidth": 575,
                        "svgHeight": 411,
                        "noData": false,
                        "locale": {
                            "toolbar": {
                                "exportToSVG": "Download SVG",
                                "exportToPNG": "Download PNG",
                                "exportToCSV": "Download CSV",
                                "menu": "Menu",
                                "selection": "Selection",
                                "selectionZoom": "Selection Zoom",
                                "zoomIn": "Zoom In",
                                "zoomOut": "Zoom Out",
                                "pan": "Panning",
                                "reset": "Reset Zoom"
                            }
                        },
                        "dom": {
                            "baseEl": {
                                "_prevClass": "mMYn1"
                            },
                            "elWrap": {},
                            "Paper": {
                                "_stroke": "#000000",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "svg",
                                "_defs": {
                                    "_stroke": "#000000",
                                    "_event": null,
                                    "dom": {},
                                    "node": {},
                                    "type": "defs"
                                }
                            },
                            "elGraphical": {
                                "_stroke": "#000000",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "g"
                            },
                            "elAnnotations": {
                                "_stroke": "#000000",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "g"
                            },
                            "elLegendWrap": {},
                            "elLegendForeign": {},
                            "elGridRectMask": {},
                            "elGridRectMarkerMask": {},
                            "elForecastMask": {},
                            "elNonForecastMask": {},
                            "elGridRect": {
                                "_stroke": "none",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "rect"
                            },
                            "elGridRectMarker": {
                                "_stroke": "none",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "rect"
                            }
                        },
                        "memory": {
                            "methodsToExec": []
                        },
                        "shouldAnimate": true,
                        "skipLastTimelinelabel": false,
                        "skipFirstTimelinelabel": false,
                        "delayedElements": [
                            {
                                "el": {
                                    "instance": {
                                        "_stroke": "#000000",
                                        "_event": null,
                                        "dom": {},
                                        "type": "g"
                                    }
                                },
                                "index": 0
                            },
                            {
                                "el": {
                                    "instance": {
                                        "_stroke": "#000000",
                                        "_event": null,
                                        "dom": {},
                                        "type": "g"
                                    }
                                },
                                "index": 0
                            },
                            {
                                "el": {
                                    "instance": {
                                        "_stroke": "#000000",
                                        "_event": null,
                                        "dom": {},
                                        "type": "g"
                                    }
                                },
                                "index": 0
                            }
                        ],
                        "axisCharts": true,
                        "isDataXYZ": false,
                        "resized": true,
                        "resizeTimer": null,
                        "comboCharts": false,
                        "dataChanged": true,
                        "previousPaths": [
                            {
                                "type": "bar",
                                "paths": [
                                    {
                                        "d": "M 23.078125 175.50000000000003L 23.078125 114.07500000000003Q 23.078125 114.07500000000003 23.078125 114.07500000000003L 29.869791666666664 114.07500000000003Q 29.869791666666664 114.07500000000003 29.869791666666664 114.07500000000003L 29.869791666666664 114.07500000000003L 29.869791666666664 175.50000000000003L 29.869791666666664 175.50000000000003z"
                                    },
                                    {
                                        "d": "M 78.02604166666666 175.50000000000003L 78.02604166666666 64.35000000000005Q 78.02604166666666 64.35000000000005 78.02604166666666 64.35000000000005L 84.81770833333333 64.35000000000005Q 84.81770833333333 64.35000000000005 84.81770833333333 64.35000000000005L 84.81770833333333 64.35000000000005L 84.81770833333333 175.50000000000003L 84.81770833333333 175.50000000000003z"
                                    },
                                    {
                                        "d": "M 132.97395833333331 175.50000000000003L 132.97395833333331 61.42500000000004Q 132.97395833333331 61.42500000000004 132.97395833333331 61.42500000000004L 139.76562499999997 61.42500000000004Q 139.76562499999997 61.42500000000004 139.76562499999997 61.42500000000004L 139.76562499999997 61.42500000000004L 139.76562499999997 175.50000000000003L 139.76562499999997 175.50000000000003z"
                                    },
                                    {
                                        "d": "M 187.92187499999997 175.50000000000003L 187.92187499999997 81.90000000000003Q 187.92187499999997 81.90000000000003 187.92187499999997 81.90000000000003L 194.71354166666663 81.90000000000003Q 194.71354166666663 81.90000000000003 194.71354166666663 81.90000000000003L 194.71354166666663 81.90000000000003L 194.71354166666663 175.50000000000003L 194.71354166666663 175.50000000000003z"
                                    },
                                    {
                                        "d": "M 242.86979166666663 175.50000000000003L 242.86979166666663 117.00000000000003Q 242.86979166666663 117.00000000000003 242.86979166666663 117.00000000000003L 249.6614583333333 117.00000000000003Q 249.6614583333333 117.00000000000003 249.6614583333333 117.00000000000003L 249.6614583333333 117.00000000000003L 249.6614583333333 175.50000000000003L 249.6614583333333 175.50000000000003z"
                                    },
                                    {
                                        "d": "M 297.8177083333333 175.50000000000003L 297.8177083333333 93.60000000000004Q 297.8177083333333 93.60000000000004 297.8177083333333 93.60000000000004L 304.609375 93.60000000000004Q 304.609375 93.60000000000004 304.609375 93.60000000000004L 304.609375 93.60000000000004L 304.609375 175.50000000000003L 304.609375 175.50000000000003z"
                                    },
                                    {
                                        "d": "M 352.765625 175.50000000000003L 352.765625 55.575000000000045Q 352.765625 55.575000000000045 352.765625 55.575000000000045L 359.5572916666667 55.575000000000045Q 359.5572916666667 55.575000000000045 359.5572916666667 55.575000000000045L 359.5572916666667 55.575000000000045L 359.5572916666667 175.50000000000003L 359.5572916666667 175.50000000000003z"
                                    },
                                    {
                                        "d": "M 407.7135416666667 175.50000000000003L 407.7135416666667 81.90000000000003Q 407.7135416666667 81.90000000000003 407.7135416666667 81.90000000000003L 414.50520833333337 81.90000000000003Q 414.50520833333337 81.90000000000003 414.50520833333337 81.90000000000003L 414.50520833333337 81.90000000000003L 414.50520833333337 175.50000000000003L 414.50520833333337 175.50000000000003z"
                                    },
                                    {
                                        "d": "M 462.66145833333337 175.50000000000003L 462.66145833333337 43.87500000000003Q 462.66145833333337 43.87500000000003 462.66145833333337 43.87500000000003L 469.45312500000006 43.87500000000003Q 469.45312500000006 43.87500000000003 469.45312500000006 43.87500000000003L 469.45312500000006 43.87500000000003L 469.45312500000006 175.50000000000003L 469.45312500000006 175.50000000000003z"
                                    }
                                ],
                                "realIndex": "0"
                            },
                            {
                                "type": "bar",
                                "paths": [
                                    {
                                        "d": "M 23.078125 175.50000000000003L 23.078125 234.85000000000002Q 23.078125 239.85000000000002 28.078125 239.85000000000002L 24.869791666666664 239.85000000000002Q 29.869791666666664 239.85000000000002 29.869791666666664 234.85000000000002L 29.869791666666664 234.85000000000002L 29.869791666666664 175.50000000000003L 29.869791666666664 175.50000000000003z"
                                    },
                                    {
                                        "d": "M 78.02604166666666 175.50000000000003L 78.02604166666666 278.725Q 78.02604166666666 283.725 83.02604166666666 283.725L 79.81770833333333 283.725Q 84.81770833333333 283.725 84.81770833333333 278.725L 84.81770833333333 278.725L 84.81770833333333 175.50000000000003L 84.81770833333333 175.50000000000003z"
                                    },
                                    {
                                        "d": "M 132.97395833333331 175.50000000000003L 132.97395833333331 286.33000000000004Q 132.97395833333331 291.33000000000004 137.97395833333331 291.33000000000004L 134.76562499999997 291.33000000000004Q 139.76562499999997 291.33000000000004 139.76562499999997 286.33000000000004L 139.76562499999997 286.33000000000004L 139.76562499999997 175.50000000000003L 139.76562499999997 175.50000000000003z"
                                    },
                                    {
                                        "d": "M 187.92187499999997 175.50000000000003L 187.92187499999997 264.68500000000006Q 187.92187499999997 269.68500000000006 192.92187499999997 269.68500000000006L 189.71354166666663 269.68500000000006Q 194.71354166666663 269.68500000000006 194.71354166666663 264.68500000000006L 194.71354166666663 264.68500000000006L 194.71354166666663 175.50000000000003L 194.71354166666663 175.50000000000003z"
                                    },
                                    {
                                        "d": "M 242.86979166666663 175.50000000000003L 242.86979166666663 229.00000000000003Q 242.86979166666663 234.00000000000003 247.86979166666663 234.00000000000003L 244.6614583333333 234.00000000000003Q 249.6614583333333 234.00000000000003 249.6614583333333 229.00000000000003L 249.6614583333333 229.00000000000003L 249.6614583333333 175.50000000000003L 249.6614583333333 175.50000000000003z"
                                    },
                                    {
                                        "d": "M 297.8177083333333 175.50000000000003L 297.8177083333333 252.40000000000003Q 297.8177083333333 257.40000000000003 302.8177083333333 257.40000000000003L 299.609375 257.40000000000003Q 304.609375 257.40000000000003 304.609375 252.40000000000003L 304.609375 252.40000000000003L 304.609375 175.50000000000003L 304.609375 175.50000000000003z"
                                    },
                                    {
                                        "d": "M 352.765625 175.50000000000003L 352.765625 290.425Q 352.765625 295.425 357.765625 295.425L 354.5572916666667 295.425Q 359.5572916666667 295.425 359.5572916666667 290.425L 359.5572916666667 290.425L 359.5572916666667 175.50000000000003L 359.5572916666667 175.50000000000003z"
                                    },
                                    {
                                        "d": "M 407.7135416666667 175.50000000000003L 407.7135416666667 287.5Q 407.7135416666667 292.5 412.7135416666667 292.5L 409.50520833333337 292.5Q 414.50520833333337 292.5 414.50520833333337 287.5L 414.50520833333337 287.5L 414.50520833333337 175.50000000000003L 414.50520833333337 175.50000000000003z"
                                    },
                                    {
                                        "d": "M 462.66145833333337 175.50000000000003L 462.66145833333337 290.425Q 462.66145833333337 295.425 467.66145833333337 295.425L 464.45312500000006 295.425Q 469.45312500000006 295.425 469.45312500000006 290.425L 469.45312500000006 290.425L 469.45312500000006 175.50000000000003L 469.45312500000006 175.50000000000003z"
                                    }
                                ],
                                "realIndex": "1"
                            }
                        ],
                        "allSeriesHasEqualX": true,
                        "pointsArray": [],
                        "dataLabelsRects": [],
                        "lastDrawnDataLabelsIndexes": [
                            [
                                0,
                                1,
                                2,
                                3,
                                4,
                                5,
                                6,
                                7,
                                8
                            ],
                            [
                                0,
                                1,
                                2,
                                3,
                                4,
                                5,
                                6,
                                7,
                                8
                            ]
                        ],
                        "hasNullValues": false,
                        "zoomed": false,
                        "gridWidth": 494.53125,
                        "gridHeight": 351,
                        "rotateXLabels": false,
                        "defaultLabels": false,
                        "yLabelFormatters": [
                            null
                        ],
                        "LINE_HEIGHT_RATIO": 1.618,
                        "xAxisLabelsHeight": 10,
                        "xAxisLabelsWidth": 0,
                        "yAxisLabelsWidth": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "translateX": 55.46875,
                        "translateY": 45,
                        "translateYAxisX": [
                            22.46875
                        ],
                        "yAxisWidths": [],
                        "translateXAxisY": -4,
                        "translateXAxisX": 0,
                        "tooltip": {
                            "tooltipUtil": {},
                            "tooltipLabels": {
                                "tooltipUtil": {}
                            },
                            "tooltipPosition": {},
                            "marker": {
                                "tooltipPosition": {}
                            },
                            "intersect": {},
                            "axesTooltip": {},
                            "showOnIntersect": true,
                            "showTooltipTitle": true,
                            "fixedTooltip": false,
                            "xaxisTooltip": null,
                            "yaxisTTEls": null,
                            "isBarShared": false,
                            "lastHoverTime": 1683635606621,
                            "xyRatios": {
                                "yRatio": [
                                    0.03418803418803419
                                ],
                                "invertedYRatio": 0.024265402843601895,
                                "zRatio": null,
                                "xRatio": null,
                                "initialXRatio": null,
                                "invertedXRatio": null,
                                "baseLineInvertedY": 247.265625,
                                "baseLineY": [
                                    175.49999999999997
                                ],
                                "baseLineX": 0
                            },
                            "isXAxisTooltipEnabled": false,
                            "yaxisTooltips": [
                                false
                            ],
                            "allTooltipSeriesGroups": [],
                            "xaxisOffY": 352,
                            "yaxisOffX": 1,
                            "yaxisTooltip": {},
                            "yaxisTooltipText": [
                                {}
                            ],
                            "xcrosshairsWidth": 1,
                            "ycrosshairs": {
                                "instance": {
                                    "_stroke": "#b6b6b6",
                                    "_event": null,
                                    "dom": {},
                                    "type": "line"
                                }
                            },
                            "ycrosshairsHidden": {
                                "instance": {
                                    "_stroke": "#b6b6b6",
                                    "_event": null,
                                    "dom": {},
                                    "type": "line"
                                }
                            },
                            "xAxisTicksPositions": [
                                54.947916666666664,
                                109.89583333333333,
                                164.84375,
                                219.79166666666666,
                                274.7395833333333,
                                329.6875,
                                384.6354166666667,
                                439.58333333333337,
                                494.53125000000006
                            ],
                            "dataPointsDividedHeight": 39,
                            "dataPointsDividedWidth": 54.947916666666664,
                            "tooltipTitle": {},
                            "legendLabels": {
                                "0": {},
                                "1": {}
                            },
                            "ttItems": [
                                {},
                                {}
                            ],
                            "seriesBound": {
                                "x": 954.46875,
                                "y": 238,
                                "width": 494.53125,
                                "height": 350,
                                "top": 238,
                                "right": 1449,
                                "bottom": 588,
                                "left": 954.46875
                            }
                        },
                        "series": [
                            [
                                2.1,
                                3.8,
                                3.9,
                                3.2,
                                2,
                                2.8,
                                4.1,
                                3.2,
                                4.5
                            ],
                            [
                                -2.2,
                                -3.7,
                                -3.96,
                                -3.22,
                                -2,
                                -2.8,
                                -4.1,
                                -3,
                                -4.1
                            ]
                        ],
                        "seriesCandleO": [],
                        "seriesCandleH": [],
                        "seriesCandleM": [],
                        "seriesCandleL": [],
                        "seriesCandleC": [],
                        "seriesRangeStart": [],
                        "seriesRangeEnd": [],
                        "seriesRangeBar": [],
                        "seriesPercent": [
                            [
                                -2099.999999999998,
                                3800.0000000000136,
                                -6499.9999999999945,
                                -15999.999999999985,
                                0,
                                0,
                                0,
                                1599.9999999999986,
                                1124.999999999999
                            ],
                            [
                                2199.999999999998,
                                -3700.000000000013,
                                6599.9999999999945,
                                16099.999999999985,
                                0,
                                0,
                                0,
                                -1499.9999999999986,
                                -1024.9999999999989
                            ]
                        ],
                        "seriesGoals": [
                            [
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null
                            ],
                            [
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null
                            ]
                        ],
                        "seriesX": [
                            null,
                            [
                                "60-64",
                                "50-54",
                                "45-49",
                                "40-44",
                                "35-39",
                                "30-34",
                                "25-29",
                                "20-24",
                                "15-19"
                            ]
                        ],
                        "seriesZ": [
                            [],
                            []
                        ],
                        "seriesNames": [
                            "Males",
                            "Females"
                        ],
                        "seriesTotals": [
                            29.599999999999998,
                            -29.08
                        ],
                        "seriesLog": [
                            null,
                            null
                        ],
                        "seriesColors": [
                            null,
                            null
                        ],
                        "stackedSeriesTotals": [
                            -0.10000000000000009,
                            0.09999999999999964,
                            -0.06000000000000005,
                            -0.020000000000000018,
                            0,
                            0,
                            0,
                            0.20000000000000018,
                            0.40000000000000036
                        ],
                        "seriesXvalues": [
                            [
                                78.02604166666666,
                                132.97395833333331,
                                187.92187499999997,
                                242.86979166666663,
                                297.8177083333333,
                                352.765625,
                                407.7135416666667,
                                462.66145833333337,
                                517.609375
                            ],
                            [
                                78.02604166666666,
                                132.97395833333331,
                                187.92187499999997,
                                242.86979166666663,
                                297.8177083333333,
                                352.765625,
                                407.7135416666667,
                                462.66145833333337,
                                517.609375
                            ]
                        ],
                        "seriesYvalues": [
                            [
                                114.07500000000003,
                                64.35000000000005,
                                61.42500000000004,
                                81.90000000000003,
                                117.00000000000003,
                                93.60000000000004,
                                55.575000000000045,
                                81.90000000000003,
                                43.87500000000003
                            ],
                            [
                                239.85000000000002,
                                283.725,
                                291.33000000000004,
                                269.68500000000006,
                                234.00000000000003,
                                257.40000000000003,
                                295.425,
                                263.25,
                                295.425
                            ]
                        ],
                        "categoryLabels": [],
                        "selectionResizeTimer": null,
                        "isXNumeric": false,
                        "xaxisLabelsCount": 9,
                        "isMultiLineX": false,
                        "isMultipleYAxis": false,
                        "maxY": 6,
                        "minY": -6,
                        "minYArr": [
                            -6
                        ],
                        "maxYArr": [
                            6
                        ],
                        "maxX": -1.7976931348623157e+308,
                        "minX": 1.7976931348623157e+308,
                        "initialMaxX": -1.7976931348623157e+308,
                        "initialMinX": 1.7976931348623157e+308,
                        "maxDate": 0,
                        "minDate": 1.7976931348623157e+308,
                        "minZ": 1.7976931348623157e+308,
                        "maxZ": -1.7976931348623157e+308,
                        "minXDiff": 1.7976931348623157e+308,
                        "yAxisScale": [
                            {
                                "result": [
                                    -6,
                                    -4,
                                    -2,
                                    0,
                                    2,
                                    4,
                                    6
                                ],
                                "niceMin": -6,
                                "niceMax": 6
                            }
                        ],
                        "xAxisScale": null,
                        "xAxisTicksPositions": [],
                        "yLabelsCoords": [
                            {
                                "width": 35.46875,
                                "index": 0
                            }
                        ],
                        "yTitleCoords": [
                            {
                                "width": 0,
                                "index": 0
                            }
                        ],
                        "barPadForNumericAxis": 0,
                        "padHorizontal": 0,
                        "xRange": null,
                        "yRange": [
                            12
                        ],
                        "zRange": null,
                        "dataPoints": 9,
                        "xTickAmount": 0,
                        "xyCharts": true,
                        "isBarHorizontal": false,
                        "chartClass": ".apexchartsmMYn1",
                        "comboBarCount": 0,
                        "isRangeBar": false,
                        "xAxisHeight": 10,
                        "hasNegs": true,
                        "yLogRatio": [
                            0.03418803418803419
                        ],
                        "logYRange": [
                            null
                        ]
                    }
                },
                "publicMethods": [
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
                    "addXaxisAnnotation",
                    "addYaxisAnnotation",
                    "addPointAnnotation",
                    "clearAnnotations",
                    "removeAnnotation",
                    "paper",
                    "destroy"
                ],
                "eventList": [
                    "click",
                    "mousedown",
                    "mousemove",
                    "mouseleave",
                    "touchstart",
                    "touchmove",
                    "touchleave",
                    "mouseup",
                    "touchend"
                ],
                "animations": {},
                "axes": {},
                "core": {},
                "config": {
                    "opts": {}
                },
                "data": {
                    "coreUtils": {},
                    "fallbackToCategory": true,
                    "activeSeriesIndex": 0
                },
                "grid": {
                    "xaxisLabels": [
                        "60-64",
                        "50-54",
                        "45-49",
                        "40-44",
                        "35-39",
                        "30-34",
                        "25-29",
                        "20-24",
                        "15-19"
                    ],
                    "axesUtils": {},
                    "isRangeBar": 0,
                    "elg": {
                        "_stroke": "#000000",
                        "_event": null,
                        "dom": {},
                        "node": {},
                        "type": "g"
                    },
                    "elgridLinesH": {
                        "_stroke": "#000000",
                        "_event": null,
                        "dom": {},
                        "node": {},
                        "type": "g"
                    },
                    "elgridLinesV": {
                        "_stroke": "#000000",
                        "_event": null,
                        "dom": {},
                        "node": {},
                        "type": "g"
                    }
                },
                "graphics": {},
                "coreUtils": {},
                "crosshairs": {},
                "events": {},
                "exports": {},
                "localization": {},
                "options": {
                    "yAxis": {
                        "show": true,
                        "showAlways": false,
                        "showForNullSeries": true,
                        "opposite": false,
                        "reversed": false,
                        "logarithmic": false,
                        "logBase": 10,
                        "forceNiceScale": false,
                        "floating": false,
                        "labels": {
                            "show": true,
                            "minWidth": 0,
                            "maxWidth": 160,
                            "offsetX": 0,
                            "offsetY": 0,
                            "rotate": 0,
                            "padding": 20,
                            "style": {
                                "colors": [],
                                "fontSize": "11px",
                                "fontWeight": 400,
                                "cssClass": ""
                            }
                        },
                        "axisBorder": {
                            "show": false,
                            "color": "#e0e0e0",
                            "width": 1,
                            "offsetX": 0,
                            "offsetY": 0
                        },
                        "axisTicks": {
                            "show": false,
                            "color": "#e0e0e0",
                            "width": 6,
                            "offsetX": 0,
                            "offsetY": 0
                        },
                        "title": {
                            "rotate": -90,
                            "offsetY": 0,
                            "offsetX": 0,
                            "style": {
                                "fontSize": "11px",
                                "fontWeight": 900,
                                "cssClass": ""
                            }
                        },
                        "tooltip": {
                            "enabled": false,
                            "offsetX": 0
                        },
                        "crosshairs": {
                            "show": true,
                            "position": "front",
                            "stroke": {
                                "color": "#b6b6b6",
                                "width": 1,
                                "dashArray": 0
                            }
                        }
                    },
                    "pointAnnotation": {
                        "x": 0,
                        "y": null,
                        "yAxisIndex": 0,
                        "seriesIndex": 0,
                        "marker": {
                            "size": 4,
                            "fillColor": "#fff",
                            "strokeWidth": 2,
                            "strokeColor": "#333",
                            "shape": "circle",
                            "offsetX": 0,
                            "offsetY": 0,
                            "radius": 2,
                            "cssClass": ""
                        },
                        "label": {
                            "borderColor": "#c2c2c2",
                            "borderWidth": 1,
                            "borderRadius": 2,
                            "textAnchor": "middle",
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "background": "#fff",
                                "fontSize": "11px",
                                "fontWeight": 400,
                                "cssClass": "",
                                "padding": {
                                    "left": 5,
                                    "right": 5,
                                    "top": 2,
                                    "bottom": 2
                                }
                            }
                        },
                        "customSVG": {
                            "offsetX": 0,
                            "offsetY": 0
                        },
                        "image": {
                            "width": 20,
                            "height": 20,
                            "offsetX": 0,
                            "offsetY": 0
                        }
                    },
                    "yAxisAnnotation": {
                        "y": 0,
                        "y2": null,
                        "strokeDashArray": 1,
                        "fillColor": "#c2c2c2",
                        "borderColor": "#c2c2c2",
                        "borderWidth": 1,
                        "opacity": 0.3,
                        "offsetX": 0,
                        "offsetY": 0,
                        "width": "100%",
                        "yAxisIndex": 0,
                        "label": {
                            "borderColor": "#c2c2c2",
                            "borderWidth": 1,
                            "borderRadius": 2,
                            "textAnchor": "end",
                            "position": "right",
                            "offsetX": 0,
                            "offsetY": -3,
                            "style": {
                                "background": "#fff",
                                "fontSize": "11px",
                                "fontWeight": 400,
                                "cssClass": "",
                                "padding": {
                                    "left": 5,
                                    "right": 5,
                                    "top": 2,
                                    "bottom": 2
                                }
                            }
                        }
                    },
                    "xAxisAnnotation": {
                        "x": 0,
                        "x2": null,
                        "strokeDashArray": 1,
                        "fillColor": "#c2c2c2",
                        "borderColor": "#c2c2c2",
                        "borderWidth": 1,
                        "opacity": 0.3,
                        "offsetX": 0,
                        "offsetY": 0,
                        "label": {
                            "borderColor": "#c2c2c2",
                            "borderWidth": 1,
                            "borderRadius": 2,
                            "textAnchor": "middle",
                            "orientation": "vertical",
                            "position": "top",
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "background": "#fff",
                                "fontSize": "11px",
                                "fontWeight": 400,
                                "cssClass": "",
                                "padding": {
                                    "left": 5,
                                    "right": 5,
                                    "top": 2,
                                    "bottom": 2
                                }
                            }
                        }
                    },
                    "text": {
                        "x": 0,
                        "y": 0,
                        "text": "",
                        "textAnchor": "start",
                        "fontSize": "13px",
                        "fontWeight": 400,
                        "appendTo": ".apexcharts-annotations",
                        "backgroundColor": "transparent",
                        "borderColor": "#c2c2c2",
                        "borderRadius": 0,
                        "borderWidth": 0,
                        "paddingLeft": 4,
                        "paddingRight": 4,
                        "paddingTop": 2,
                        "paddingBottom": 2
                    }
                },
                "responsive": {},
                "series": {
                    "legendInactiveClass": "legend-mouseover-inactive"
                },
                "theme": {
                    "colors": [],
                    "isColorFn": false,
                    "isHeatmapDistributed": false,
                    "isBarDistributed": false
                },
                "formatters": {
                    "tooltipKeyFormat": "dd MMM"
                },
                "titleSubtitle": {},
                "legend": {
                    "isBarsDistributed": false,
                    "legendHelpers": {}
                },
                "toolbar": {
                    "ev": {},
                    "selectedClass": "apexcharts-selected",
                    "minX": 1.7976931348623157e+308,
                    "maxX": -1.7976931348623157e+308
                },
                "dimensions": {
                    "lgRect": {
                        "x": 899,
                        "y": 192,
                        "height": 15,
                        "width": 575
                    },
                    "yAxisWidth": 40.46875,
                    "yAxisWidthLeft": 40.46875,
                    "yAxisWidthRight": 0,
                    "xAxisHeight": 10,
                    "isSparkline": false,
                    "dimHelpers": {},
                    "dimYAxis": {},
                    "dimXAxis": {},
                    "dimGrid": {},
                    "lgWidthForSideLegends": 0,
                    "xPadRight": 0,
                    "xPadLeft": 0,
                    "xAxisWidth": 0
                },
                "updateHelpers": {},
                "zoomPanSelection": {
                    "selectedClass": "apexcharts-selected",
                    "minX": 1.7976931348623157e+308,
                    "maxX": -1.7976931348623157e+308,
                    "dragged": false,
                    "graphics": {},
                    "eventList": [
                        "mousedown",
                        "mouseleave",
                        "mousemove",
                        "touchstart",
                        "touchmove",
                        "mouseup",
                        "touchend"
                    ],
                    "clientX": 0,
                    "clientY": 0,
                    "startX": 0,
                    "endX": 0,
                    "dragX": 0,
                    "startY": 0,
                    "endY": 0,
                    "dragY": 0,
                    "moveDirection": "none"
                },
                "pie": {
                    "chartType": "bar",
                    "initialAnim": false,
                    "dynamicAnim": false,
                    "animBeginArr": [
                        0
                    ],
                    "animDur": 0,
                    "defaultSize": 351,
                    "centerY": 175.5,
                    "centerX": 247.265625,
                    "fullAngle": 360,
                    "initialAngle": 0,
                    "donutSize": 107.3926829268293,
                    "maxY": 0,
                    "sliceLabels": [],
                    "sliceSizes": [],
                    "prevSectorAngleArr": []
                },
                "rangeBar": {
                    "isHorizontal": false,
                    "strokeWidth": 2,
                    "isNullValue": false,
                    "isRangeBar": 0,
                    "xRatio": null,
                    "initialXRatio": null,
                    "invertedXRatio": null,
                    "invertedYRatio": 0.024265402843601895,
                    "baseLineInvertedY": 247.265625,
                    "yaxisIndex": 0,
                    "seriesLen": 0,
                    "barHelpers": {}
                },
                "annotations": {
                    "graphics": {},
                    "helpers": {},
                    "xAxisAnnotations": {},
                    "yAxisAnnotations": {},
                    "pointsAnnotations": {},
                    "xDivision": 54.947916666666664
                },
                "bar": {
                    "barOptions": {
                        "horizontal": false,
                        "columnWidth": "16%",
                        "barHeight": "86%",
                        "distributed": false,
                        "borderRadius": 5,
                        "rangeBarOverlap": true,
                        "rangeBarGroupRows": false,
                        "colors": {
                            "backgroundBarOpacity": 1,
                            "backgroundBarRadius": 0
                        },
                        "dataLabels": {
                            "position": "top",
                            "maxItems": 100,
                            "hideOverflowingLabels": true,
                            "orientation": "horizontal"
                        }
                    },
                    "isHorizontal": false,
                    "strokeWidth": 2,
                    "isNullValue": false,
                    "isRangeBar": 0,
                    "xyRatios": {
                        "yRatio": [
                            0.03677056393788226
                        ],
                        "invertedYRatio": 0.024265402843601895,
                        "zRatio": null,
                        "xRatio": null,
                        "initialXRatio": null,
                        "invertedXRatio": null,
                        "baseLineInvertedY": 247.265625,
                        "baseLineY": [
                            163.174
                        ],
                        "baseLineX": 0
                    },
                    "xRatio": null,
                    "initialXRatio": null,
                    "yRatio": [
                        0.03677056393788226
                    ],
                    "invertedXRatio": null,
                    "invertedYRatio": 0.024265402843601895,
                    "baseLineInvertedY": 247.265625,
                    "yaxisIndex": 0,
                    "seriesLen": 2,
                    "barHelpers": {},
                    "series": [
                        [
                            2.1,
                            3.8,
                            3.9,
                            4.2,
                            4,
                            4.3,
                            4.1,
                            4.2,
                            4.5
                        ],
                        [
                            -2.2,
                            -3.7,
                            -3.96,
                            -4.22,
                            -4.3,
                            -4.4,
                            -4.1,
                            -4,
                            -4.1
                        ]
                    ],
                    "totalItems": 18,
                    "visibleI": 1,
                    "visibleItems": 9,
                    "zeroSerieses": [],
                    "radiusOnSeriesNumber": 1,
                    "isReversed": false
                }
            }
        }
    ]
}
  return (
   <>
   <ReactApexcharts type='bar'  options={options} series={options.series} style={{height:"400px"}} />
   
   </>
  )
}
