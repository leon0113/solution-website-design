import React from 'react'
import ReactApexcharts from '../@core/components/react-apexcharts'
export default function OrderBarChart() {
    const options ={
        "chart": {
            "animations": {
                "enabled": false,
                "easing": "swing"
            },
            "foreColor": "#333",
            "fontFamily": "Roboto",
            "height": 250,
            "id": "A2Aqm",
            "toolbar": {
                "show": false
            },
            "type": "bar",
            "width": 400
        },
        "plotOptions": {
            "bar": {
                "columnWidth": "16%",
                "borderRadius": 6,
                "colors": {
                    "backgroundBarColors": [
                        "#F1F2F3",
                        "#F1F2F3",
                        "#f1f2f3",
                        "#f1f2f3"
                    ]
                }
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
            "#EDAA03",
            "#c7f464",
            "#81D4FA",
            "#fd6a6a",
            "#546E7A"
        ],
        "dataLabels": {
            "enabled": false,
            "style": {
                "fontWeight": 700
            }
        },
        "grid": {
            "show": false,
            "padding": {
                "right": 25,
                "left": 15
            }
        },
        "legend": {
            "fontSize": 14,
            "offsetY": 0,
            "markers": {
                "shape": "square",
                "size": 8
            },
            "itemMargin": {
                "vertical": 0
            }
        },
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
                        "y": "25"
                    },
                    {
                        "x": "item 5",
                        "y": 10
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
                "style": {}
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
            "show": false,
            "tickAmount": 5,
            "labels": {
                "style": {}
            },
            "title": {
                "style": {
                    "fontWeight": 700
                }
            }
        },
        "theme": {
            "palette": "palette4"
        },
        "_chartInstances": [
            {
                "id": "29EGg",
                "chart": {
                    "opts": {
                        "series": [
                            {
                                "name": "Line",
                                "data": [
                                    {
                                        "x": "Item 1",
                                        "y": 31
                                    },
                                    {
                                        "x": "Item 2",
                                        "y": 40
                                    },
                                    {
                                        "x": "Item 3",
                                        "y": 28
                                    },
                                    {
                                        "x": "Item 4",
                                        "y": 51
                                    },
                                    {
                                        "x": "Item 5",
                                        "y": 42
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
                            "type": "line",
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
                            "width": 480,
                            "id": "29EGg"
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
                            "enabled": true,
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
                            "curve": "straight",
                            "lineCap": "butt",
                            "width": 4,
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
                                "id": "29EGg",
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
                                        "selection": true,
                                        "zoom": true,
                                        "zoomin": true,
                                        "zoomout": true,
                                        "pan": true,
                                        "reset": true,
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
                                "type": "line",
                                "width": 480,
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
                                "enabled": true,
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
                                    "offsetY": 0
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
                                    "sizeOffset": 6
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
                                "curve": "straight",
                                "lineCap": "butt",
                                "width": 4,
                                "dashArray": 0
                            },
                            "tooltip": {
                                "enabled": true,
                                "shared": true,
                                "followCursor": false,
                                "intersect": false,
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
                                "type": "numeric",
                                "categories": [],
                                "convertedCatToNumeric": true,
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
                                "tickAmount": "dataPoints",
                                "tickPlacement": "on",
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
                                    "enabled": true,
                                    "offsetY": 0,
                                    "style": {
                                        "fontSize": "12px"
                                    }
                                }
                            },
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
                            "chartID": "29EGg",
                            "cuid": "yqdpwbxxi",
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
                            "clientX": 1285,
                            "clientY": 456,
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
                            "initialConfig": {
                                "labels": []
                            },
                            "initialSeries": [
                                {
                                    "name": "Line",
                                    "data": [
                                        {
                                            "x": "Item 1",
                                            "y": 31
                                        },
                                        {
                                            "x": "Item 2",
                                            "y": 40
                                        },
                                        {
                                            "x": "Item 3",
                                            "y": 28
                                        },
                                        {
                                            "x": "Item 4",
                                            "y": 51
                                        },
                                        {
                                            "x": "Item 5",
                                            "y": 42
                                        }
                                    ]
                                }
                            ],
                            "lastXAxis": {
                                "type": "category",
                                "categories": [],
                                "convertedCatToNumeric": true,
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
                                "tickPlacement": "on",
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
                                    "enabled": true,
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
                                1,
                                2,
                                3,
                                4,
                                5
                            ],
                            "timescaleLabels": [],
                            "noLabelsProvided": true,
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
                            "radialSize": 92.00000000000001,
                            "zoomEnabled": true,
                            "panEnabled": false,
                            "selectionEnabled": false,
                            "yaxis": null,
                            "mousedown": false,
                            "lastClientPosition": {},
                            "yValueDecimal": 0,
                            "total": 0,
                            "SVGNS": "http://www.w3.org/2000/svg",
                            "svgWidth": 480,
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
                                    "_prevClass": "29EGg"
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
                            "previousPaths": [],
                            "allSeriesHasEqualX": true,
                            "pointsArray": [
                                [
                                    [
                                        0,
                                        157.16666666666666
                                    ],
                                    [
                                        106.25000000000001,
                                        95.66666666666663
                                    ],
                                    [
                                        212.50000000000003,
                                        177.66666666666666
                                    ],
                                    [
                                        318.75,
                                        20.5
                                    ],
                                    [
                                        425.00000000000006,
                                        82
                                    ]
                                ]
                            ],
                            "dataLabelsRects": [
                                [
                                    {
                                        "x": 0,
                                        "y": 159.16666666666666,
                                        "width": 0,
                                        "height": 0
                                    },
                                    {
                                        "x": 106.25000000000001,
                                        "y": 97.66666666666663,
                                        "width": 0,
                                        "height": 0
                                    },
                                    {
                                        "x": 212.50000000000003,
                                        "y": 179.66666666666666,
                                        "width": 0,
                                        "height": 0
                                    },
                                    {
                                        "x": 318.75,
                                        "y": 22.5,
                                        "width": 0,
                                        "height": 0
                                    },
                                    {
                                        "x": 425.00000000000006,
                                        "y": 84,
                                        "width": 0,
                                        "height": 0
                                    }
                                ]
                            ],
                            "lastDrawnDataLabelsIndexes": [
                                [
                                    0,
                                    1,
                                    2,
                                    3,
                                    4,
                                    0,
                                    1,
                                    2,
                                    3,
                                    4
                                ]
                            ],
                            "hasNullValues": false,
                            "zoomed": false,
                            "gridWidth": 425,
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
                                "showOnIntersect": false,
                                "showTooltipTitle": true,
                                "fixedTooltip": false,
                                "xaxisTooltip": {},
                                "yaxisTTEls": null,
                                "isBarShared": true,
                                "lastHoverTime": 1683617665334,
                                "xyRatios": {
                                    "yRatio": [
                                        0.14634146341463414
                                    ],
                                    "invertedYRatio": 0.07058823529411765,
                                    "zRatio": null,
                                    "xRatio": 0.009411764705882352,
                                    "initialXRatio": 0.009411764705882352,
                                    "invertedXRatio": 0.01951219512195122,
                                    "baseLineInvertedY": -340,
                                    "baseLineY": [
                                        -164
                                    ],
                                    "baseLineX": 106.25000000000001
                                },
                                "isXAxisTooltipEnabled": true,
                                "yaxisTooltips": [
                                    false
                                ],
                                "allTooltipSeriesGroups": [],
                                "xaxisOffY": 206,
                                "xaxisTooltipText": {},
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
                                    106.25,
                                    212.5,
                                    318.75,
                                    425,
                                    531.25
                                ],
                                "dataPointsDividedHeight": 41,
                                "dataPointsDividedWidth": 85,
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
                                    31,
                                    40,
                                    28,
                                    51,
                                    42
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
                                    100,
                                    100
                                ]
                            ],
                            "seriesGoals": [
                                [
                                    null,
                                    null,
                                    null,
                                    null,
                                    null
                                ]
                            ],
                            "seriesX": [
                                [
                                    1,
                                    2,
                                    3,
                                    4,
                                    5
                                ]
                            ],
                            "seriesZ": [
                                []
                            ],
                            "seriesNames": [
                                "Line"
                            ],
                            "seriesTotals": [
                                192
                            ],
                            "seriesLog": [
                                null
                            ],
                            "seriesColors": [
                                null
                            ],
                            "stackedSeriesTotals": [
                                31,
                                40,
                                28,
                                51,
                                42
                            ],
                            "seriesXvalues": [
                                [
                                    0,
                                    106.25000000000001,
                                    212.50000000000003,
                                    318.75,
                                    425.00000000000006
                                ]
                            ],
                            "seriesYvalues": [
                                [
                                    157.16666666666666,
                                    95.66666666666663,
                                    177.66666666666666,
                                    20.5,
                                    82
                                ]
                            ],
                            "categoryLabels": [
                                "Item 1",
                                "Item 2",
                                "Item 3",
                                "Item 4",
                                "Item 5"
                            ],
                            "selectionResizeTimer": null,
                            "isXNumeric": true,
                            "xaxisLabelsCount": 5,
                            "isMultiLineX": false,
                            "isMultipleYAxis": false,
                            "maxY": 54,
                            "minY": 24,
                            "minYArr": [
                                24
                            ],
                            "maxYArr": [
                                54
                            ],
                            "maxX": 5,
                            "minX": 1,
                            "initialMaxX": 5,
                            "initialMinX": 1,
                            "maxDate": 0,
                            "minDate": 1.7976931348623157e+308,
                            "minZ": 1.7976931348623157e+308,
                            "maxZ": -1.7976931348623157e+308,
                            "minXDiff": 1,
                            "yAxisScale": [
                                {
                                    "result": [
                                        24,
                                        30,
                                        36,
                                        42,
                                        48,
                                        54
                                    ],
                                    "niceMin": 24,
                                    "niceMax": 54
                                }
                            ],
                            "xAxisScale": {
                                "result": [
                                    1,
                                    2,
                                    3,
                                    4,
                                    5
                                ],
                                "niceMin": 1,
                                "niceMax": 5
                            },
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
                            "xRange": 4,
                            "yRange": [
                                30
                            ],
                            "zRange": null,
                            "dataPoints": 5,
                            "xTickAmount": 3,
                            "xyCharts": true,
                            "isBarHorizontal": false,
                            "chartClass": ".apexcharts29EGg",
                            "comboBarCount": 0,
                            "isRangeBar": false,
                            "xAxisHeight": 10,
                            "hasNegs": true,
                            "yLogRatio": [
                                0.14634146341463414
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
                        "twoDSeriesX": [
                            "Item 1",
                            "Item 2",
                            "Item 3",
                            "Item 4",
                            "Item 5"
                        ],
                        "coreUtils": {},
                        "fallbackToCategory": true,
                        "activeSeriesIndex": 0
                    },
                    "grid": {
                        "xaxisLabels": [
                            1,
                            2,
                            3,
                            4,
                            5
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
                        "minX": 1,
                        "maxX": 5
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
                        "minX": 1,
                        "maxX": 5,
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
                        "moveDirection": "none",
                        "zoomRect": {
                            "_stroke": "none",
                            "_event": null,
                            "dom": {},
                            "node": {},
                            "type": "rect"
                        },
                        "selectionRect": {
                            "_stroke": "none",
                            "_event": null,
                            "dom": {},
                            "node": {},
                            "type": "rect",
                            "_memory": {
                                "_draggable": {
                                    "constraint": {
                                        "minX": 0,
                                        "minY": 0,
                                        "maxX": 425,
                                        "maxY": 205
                                    },
                                    "value": true
                                }
                            }
                        }
                    },
                    "pie": {
                        "chartType": "line",
                        "initialAnim": false,
                        "dynamicAnim": false,
                        "animBeginArr": [
                            0
                        ],
                        "animDur": 0,
                        "defaultSize": 205,
                        "centerY": 102.5,
                        "centerX": 212.5,
                        "fullAngle": 360,
                        "initialAngle": 0,
                        "donutSize": 59.80000000000001,
                        "maxY": 0,
                        "sliceLabels": [],
                        "sliceSizes": [],
                        "prevSectorAngleArr": []
                    },
                    "rangeBar": {
                        "isHorizontal": false,
                        "strokeWidth": 4,
                        "isNullValue": false,
                        "isRangeBar": 0,
                        "xRatio": 0.009411764705882352,
                        "initialXRatio": 0.009411764705882352,
                        "invertedXRatio": 0.01951219512195122,
                        "invertedYRatio": 0.07058823529411765,
                        "baseLineInvertedY": -340,
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
                        "xDivision": 85
                    }
                }
            },
            {
                "id": "VuBCm",
                "chart": {
                    "opts": {
                        "series": [
                            {
                                "name": "Area 1",
                                "data": [
                                    {
                                        "x": "Category 1",
                                        "y": 31
                                    },
                                    {
                                        "x": "Category 2",
                                        "y": 40
                                    },
                                    {
                                        "x": "Category 3",
                                        "y": 28
                                    },
                                    {
                                        "x": "Category 4",
                                        "y": 51
                                    },
                                    {
                                        "x": "Category 5",
                                        "y": 42
                                    }
                                ]
                            },
                            {
                                "name": "Area 2",
                                "data": [
                                    {
                                        "x": "Category 1",
                                        "y": 20
                                    },
                                    {
                                        "x": "Category 2",
                                        "y": 32
                                    },
                                    {
                                        "x": "Category 3",
                                        "y": 38
                                    },
                                    {
                                        "x": "Category 4",
                                        "y": 22
                                    },
                                    {
                                        "x": "Category 5",
                                        "y": 56
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
                            "type": "area",
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
                            "width": 480,
                            "stacked": true,
                            "id": "VuBCm"
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
                            "padding": {
                                "top": 0,
                                "right": 36,
                                "bottom": 0,
                                "left": 15
                            }
                        },
                        "stroke": {
                            "show": true,
                            "curve": "smooth",
                            "lineCap": "butt",
                            "width": 4,
                            "dashArray": 0
                        },
                        "fill": {
                            "type": "solid",
                            "opacity": 0.3,
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
                                    "easing": "easeinout",
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
                                "id": "VuBCm",
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
                                "stacked": true,
                                "stackType": "normal",
                                "toolbar": {
                                    "show": false,
                                    "offsetX": 0,
                                    "offsetY": 0,
                                    "tools": {
                                        "download": true,
                                        "selection": true,
                                        "zoom": true,
                                        "zoomin": true,
                                        "zoomout": true,
                                        "pan": true,
                                        "reset": true,
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
                                "type": "area",
                                "width": 480,
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
                                "opacity": 0.3,
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
                                    "right": 36,
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
                                    "offsetY": 0
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
                                    "sizeOffset": 6
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
                                "width": 4,
                                "dashArray": 0
                            },
                            "tooltip": {
                                "enabled": true,
                                "shared": true,
                                "followCursor": false,
                                "intersect": false,
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
                                "type": "numeric",
                                "categories": [],
                                "convertedCatToNumeric": true,
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
                                "tickAmount": "dataPoints",
                                "tickPlacement": "on",
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
                                    "enabled": true,
                                    "offsetY": 0,
                                    "style": {
                                        "fontSize": "12px"
                                    }
                                }
                            },
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
                            "chartID": "VuBCm",
                            "cuid": "25ea1c2k",
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
                            "clientX": 1149,
                            "clientY": 230,
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
                                    0,
                                    0
                                ],
                                "largestSize": 0
                            },
                            "animationEnded": true,
                            "isDirty": true,
                            "isExecCalled": false,
                            "initialConfig": {
                                "labels": []
                            },
                            "initialSeries": [
                                {
                                    "name": "Area 1",
                                    "data": [
                                        {
                                            "x": "Category 1",
                                            "y": 31
                                        },
                                        {
                                            "x": "Category 2",
                                            "y": 40
                                        },
                                        {
                                            "x": "Category 3",
                                            "y": 28
                                        },
                                        {
                                            "x": "Category 4",
                                            "y": 51
                                        },
                                        {
                                            "x": "Category 5",
                                            "y": 42
                                        }
                                    ]
                                },
                                {
                                    "name": "Area 2",
                                    "data": [
                                        {
                                            "x": "Category 1",
                                            "y": 20
                                        },
                                        {
                                            "x": "Category 2",
                                            "y": 32
                                        },
                                        {
                                            "x": "Category 3",
                                            "y": 38
                                        },
                                        {
                                            "x": "Category 4",
                                            "y": 22
                                        },
                                        {
                                            "x": "Category 5",
                                            "y": 56
                                        }
                                    ]
                                }
                            ],
                            "lastXAxis": {
                                "type": "category",
                                "categories": [],
                                "convertedCatToNumeric": true,
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
                                "tickPlacement": "on",
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
                                    "enabled": true,
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
                                1,
                                2,
                                3,
                                4,
                                5
                            ],
                            "timescaleLabels": [],
                            "noLabelsProvided": true,
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
                            "radialSize": 92.00000000000001,
                            "zoomEnabled": true,
                            "panEnabled": false,
                            "selectionEnabled": false,
                            "yaxis": null,
                            "mousedown": false,
                            "lastClientPosition": {},
                            "yValueDecimal": 0,
                            "total": 0,
                            "SVGNS": "http://www.w3.org/2000/svg",
                            "svgWidth": 480,
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
                                    "_prevClass": "VuBCm"
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
                                    "index": 1
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
                            "previousPaths": [],
                            "allSeriesHasEqualX": true,
                            "pointsArray": [
                                [
                                    [
                                        0,
                                        141.45
                                    ],
                                    [
                                        103.5,
                                        123
                                    ],
                                    [
                                        207,
                                        147.6
                                    ],
                                    [
                                        310.5,
                                        100.45
                                    ],
                                    [
                                        414,
                                        118.89999999999999
                                    ]
                                ],
                                [
                                    [
                                        0,
                                        100.44999999999999
                                    ],
                                    [
                                        103.5,
                                        57.39999999999999
                                    ],
                                    [
                                        207,
                                        69.69999999999999
                                    ],
                                    [
                                        310.5,
                                        55.35
                                    ],
                                    [
                                        414,
                                        4.099999999999994
                                    ]
                                ]
                            ],
                            "dataLabelsRects": [],
                            "lastDrawnDataLabelsIndexes": [],
                            "hasNullValues": false,
                            "easing": "<>",
                            "zoomed": false,
                            "gridWidth": 414,
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
                                "showOnIntersect": false,
                                "showTooltipTitle": true,
                                "fixedTooltip": false,
                                "xaxisTooltip": {},
                                "yaxisTTEls": null,
                                "isBarShared": true,
                                "lastHoverTime": 1683617662478,
                                "xyRatios": {
                                    "yRatio": [
                                        0.4878048780487805
                                    ],
                                    "invertedYRatio": 0.24154589371980675,
                                    "zRatio": null,
                                    "xRatio": 0.00966183574879227,
                                    "initialXRatio": 0.00966183574879227,
                                    "invertedXRatio": 0.01951219512195122,
                                    "baseLineInvertedY": 0.1,
                                    "baseLineY": [
                                        0
                                    ],
                                    "baseLineX": 0
                                },
                                "isXAxisTooltipEnabled": true,
                                "yaxisTooltips": [
                                    false
                                ],
                                "allTooltipSeriesGroups": [],
                                "xaxisOffY": 206,
                                "xaxisTooltipText": {},
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
                                    103.5,
                                    207,
                                    310.5,
                                    414,
                                    517.5
                                ],
                                "dataPointsDividedHeight": 41,
                                "dataPointsDividedWidth": 82.8,
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
                                    31,
                                    40,
                                    28,
                                    51,
                                    42
                                ],
                                [
                                    20,
                                    32,
                                    38,
                                    22,
                                    56
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
                                    60.78431372549019,
                                    55.55555555555556,
                                    42.42424242424242,
                                    69.86301369863014,
                                    42.857142857142854
                                ],
                                [
                                    39.21568627450981,
                                    44.44444444444444,
                                    57.57575757575758,
                                    30.136986301369863,
                                    57.142857142857146
                                ]
                            ],
                            "seriesGoals": [
                                [
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
                                    null
                                ]
                            ],
                            "seriesX": [
                                [
                                    1,
                                    2,
                                    3,
                                    4,
                                    5
                                ],
                                null
                            ],
                            "seriesZ": [
                                [],
                                []
                            ],
                            "seriesNames": [
                                "Area 1",
                                "Area 2"
                            ],
                            "seriesTotals": [
                                192,
                                168
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
                                51,
                                72,
                                66,
                                73,
                                98
                            ],
                            "seriesXvalues": [
                                [
                                    0,
                                    103.5,
                                    207,
                                    310.5,
                                    414
                                ],
                                [
                                    0,
                                    103.5,
                                    207,
                                    310.5,
                                    414
                                ]
                            ],
                            "seriesYvalues": [
                                [
                                    141.45,
                                    123,
                                    147.6,
                                    100.45,
                                    118.89999999999999
                                ],
                                [
                                    100.44999999999999,
                                    57.39999999999999,
                                    69.69999999999999,
                                    55.35,
                                    4.099999999999994
                                ]
                            ],
                            "categoryLabels": [
                                "Category 1",
                                "Category 2",
                                "Category 3",
                                "Category 4",
                                "Category 5"
                            ],
                            "selectionResizeTimer": null,
                            "isXNumeric": true,
                            "xaxisLabelsCount": 5,
                            "isMultiLineX": false,
                            "isMultipleYAxis": false,
                            "maxY": 100,
                            "minY": 0,
                            "minYArr": [
                                0
                            ],
                            "maxYArr": [
                                100
                            ],
                            "maxX": 5,
                            "minX": 1,
                            "initialMaxX": 5,
                            "initialMinX": 1,
                            "maxDate": 0,
                            "minDate": 1.7976931348623157e+308,
                            "minZ": 1.7976931348623157e+308,
                            "maxZ": -1.7976931348623157e+308,
                            "minXDiff": 1,
                            "yAxisScale": [
                                {
                                    "result": [
                                        0,
                                        20,
                                        40,
                                        60,
                                        80,
                                        100
                                    ],
                                    "niceMin": 0,
                                    "niceMax": 100
                                }
                            ],
                            "xAxisScale": {
                                "result": [
                                    1,
                                    2,
                                    3,
                                    4,
                                    5
                                ],
                                "niceMin": 1,
                                "niceMax": 5
                            },
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
                            "xRange": 4,
                            "yRange": [
                                100
                            ],
                            "zRange": null,
                            "dataPoints": 5,
                            "xTickAmount": 3,
                            "xyCharts": true,
                            "isBarHorizontal": false,
                            "chartClass": ".apexchartsVuBCm",
                            "comboBarCount": 0,
                            "isRangeBar": false,
                            "xAxisHeight": 10,
                            "yLogRatio": [
                                0.4878048780487805
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
                        "twoDSeriesX": [
                            "Category 1",
                            "Category 2",
                            "Category 3",
                            "Category 4",
                            "Category 5"
                        ],
                        "coreUtils": {},
                        "fallbackToCategory": true,
                        "activeSeriesIndex": 0
                    },
                    "grid": {
                        "xaxisLabels": [
                            1,
                            2,
                            3,
                            4,
                            5
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
                        "minX": 1,
                        "maxX": 5
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
                        "minX": 1,
                        "maxX": 5,
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
                        "moveDirection": "none",
                        "zoomRect": {
                            "_stroke": "none",
                            "_event": null,
                            "dom": {},
                            "node": {},
                            "type": "rect"
                        },
                        "selectionRect": {
                            "_stroke": "none",
                            "_event": null,
                            "dom": {},
                            "node": {},
                            "type": "rect",
                            "_memory": {
                                "_draggable": {
                                    "constraint": {
                                        "minX": 0,
                                        "minY": 0,
                                        "maxX": 414,
                                        "maxY": 205
                                    },
                                    "value": true
                                }
                            }
                        }
                    },
                    "pie": {
                        "chartType": "area",
                        "initialAnim": false,
                        "dynamicAnim": false,
                        "animBeginArr": [
                            0
                        ],
                        "animDur": 0,
                        "defaultSize": 205,
                        "centerY": 102.5,
                        "centerX": 207,
                        "fullAngle": 360,
                        "initialAngle": 0,
                        "donutSize": 59.80000000000001,
                        "maxY": 0,
                        "sliceLabels": [],
                        "sliceSizes": [],
                        "prevSectorAngleArr": []
                    },
                    "rangeBar": {
                        "isHorizontal": false,
                        "strokeWidth": 4,
                        "isNullValue": false,
                        "isRangeBar": 0,
                        "xRatio": 0.00966183574879227,
                        "initialXRatio": 0.00966183574879227,
                        "invertedXRatio": 0.01951219512195122,
                        "invertedYRatio": 0.24154589371980675,
                        "baseLineInvertedY": 0.1,
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
                        "xDivision": 82.8
                    }
                }
            },
            {
                "id": "X27J9",
                "chart": {
                    "opts": {
                        "series": [
                            {
                                "name": "Line",
                                "data": [
                                    {
                                        "x": "Item 1",
                                        "y": 31
                                    },
                                    {
                                        "x": "Item 2",
                                        "y": 40
                                    },
                                    {
                                        "x": "Item 3",
                                        "y": 28
                                    },
                                    {
                                        "x": "Item 4",
                                        "y": 51
                                    },
                                    {
                                        "x": "Item 5",
                                        "y": "32"
                                    },
                                    {
                                        "x": "Item 6",
                                        "y": "40"
                                    },
                                    {
                                        "x": "Item 7",
                                        "y": "35"
                                    },
                                    {
                                        "x": "Item 8",
                                        "y": "55"
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
                            "type": "line",
                            "background": "transparent",
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
                            "width": 480,
                            "id": "X27J9"
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
                        "colors": [
                            "#34D8F1",
                            "#c7f464",
                            "#81D4FA",
                            "#fd6a6a",
                            "#546E7A"
                        ],
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
                            "hover": {
                                "size": 0
                            }
                        },
                        "xaxis": {
                            "type": "numeric",
                            "offsetX": 0,
                            "offsetY": 0,
                            "position": "bottom",
                            "labels": {
                                "show": false,
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
                            "tickAmount": "dataPoints",
                            "tickPlacement": "on",
                            "floating": false,
                            "tooltip": {
                                "enabled": true,
                                "offsetY": 0,
                                "style": {
                                    "fontSize": "12px"
                                }
                            }
                        },
                        "yaxis": [
                            {
                                "show": false,
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
                            "curve": "straight",
                            "lineCap": "butt",
                            "width": 4,
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
                                "background": "transparent",
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
                                "id": "X27J9",
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
                                "type": "line",
                                "width": 480,
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
                                    "offsetY": 0
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
                                    "size": 0,
                                    "sizeOffset": 6
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
                                "curve": "straight",
                                "lineCap": "butt",
                                "width": 4,
                                "dashArray": 0
                            },
                            "tooltip": {
                                "enabled": true,
                                "shared": true,
                                "followCursor": false,
                                "intersect": false,
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
                                "type": "numeric",
                                "convertedCatToNumeric": false,
                                "offsetX": 0,
                                "offsetY": 0,
                                "labels": {
                                    "show": false,
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
                                "tickAmount": "dataPoints",
                                "tickPlacement": "on",
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
                                    "enabled": true,
                                    "offsetY": 0,
                                    "style": {
                                        "fontSize": "12px"
                                    }
                                }
                            },
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
                            "chartID": "X27J9",
                            "cuid": "r6qn19uz",
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
                            "clientX": 1241,
                            "clientY": 433,
                            "fill": {
                                "colors": [
                                    "#34D8F1",
                                    "#c7f464",
                                    "#81D4FA",
                                    "#fd6a6a",
                                    "#546E7A",
                                    "#34D8F1",
                                    "#c7f464",
                                    "#81D4FA",
                                    "#fd6a6a",
                                    "#546E7A",
                                    "#34D8F1",
                                    "#c7f464",
                                    "#81D4FA",
                                    "#fd6a6a",
                                    "#546E7A",
                                    "#34D8F1",
                                    "#c7f464",
                                    "#81D4FA",
                                    "#fd6a6a",
                                    "#546E7A",
                                    "#34D8F1",
                                    "#c7f464",
                                    "#81D4FA",
                                    "#fd6a6a",
                                    "#546E7A",
                                    "#34D8F1",
                                    "#c7f464",
                                    "#81D4FA",
                                    "#fd6a6a",
                                    "#546E7A",
                                    "#34D8F1",
                                    "#c7f464",
                                    "#81D4FA",
                                    "#fd6a6a",
                                    "#546E7A",
                                    "#34D8F1",
                                    "#c7f464",
                                    "#81D4FA",
                                    "#fd6a6a",
                                    "#546E7A",
                                    "#34D8F1",
                                    "#c7f464",
                                    "#81D4FA",
                                    "#fd6a6a",
                                    "#546E7A",
                                    "#34D8F1",
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
                                    "name": "Line",
                                    "data": [
                                        {
                                            "x": "Item 1",
                                            "y": 31
                                        },
                                        {
                                            "x": "Item 2",
                                            "y": 40
                                        },
                                        {
                                            "x": "Item 3",
                                            "y": 28
                                        },
                                        {
                                            "x": "Item 4",
                                            "y": 51
                                        },
                                        {
                                            "x": "Item 5",
                                            "y": "32"
                                        },
                                        {
                                            "x": "Item 6",
                                            "y": "40"
                                        },
                                        {
                                            "x": "Item 7",
                                            "y": "35"
                                        },
                                        {
                                            "x": "Item 8",
                                            "y": "55"
                                        }
                                    ]
                                }
                            ],
                            "lastXAxis": {
                                "type": "numeric",
                                "categories": [],
                                "convertedCatToNumeric": false,
                                "offsetX": 0,
                                "offsetY": 0,
                                "labels": {
                                    "show": false,
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
                                "tickAmount": "dataPoints",
                                "tickPlacement": "on",
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
                                    "enabled": true,
                                    "offsetY": 0,
                                    "style": {
                                        "fontSize": "12px"
                                    }
                                }
                            },
                            "lastYAxis": [
                                {
                                    "show": false,
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
                                "Item 4",
                                "Item 5",
                                "Item 6",
                                "Item 7",
                                "Item 8"
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
                            "radialSize": 92.00000000000001,
                            "zoomEnabled": true,
                            "panEnabled": false,
                            "selectionEnabled": false,
                            "yaxis": null,
                            "mousedown": false,
                            "lastClientPosition": {},
                            "yValueDecimal": 0,
                            "total": 0,
                            "SVGNS": "http://www.w3.org/2000/svg",
                            "svgWidth": 480,
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
                                    "_prevClass": "X27J9"
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
                            "previousPaths": [],
                            "allSeriesHasEqualX": true,
                            "pointsArray": [
                                [
                                    [
                                        31.428571428571427,
                                        156.19047619047618
                                    ],
                                    [
                                        94.28571428571428,
                                        112.26190476190476
                                    ],
                                    [
                                        157.14285714285714,
                                        170.83333333333331
                                    ],
                                    [
                                        220,
                                        58.571428571428555
                                    ],
                                    [
                                        282.85714285714283,
                                        151.3095238095238
                                    ],
                                    [
                                        345.71428571428567,
                                        112.26190476190476
                                    ],
                                    [
                                        408.5714285714285,
                                        136.66666666666666
                                    ],
                                    [
                                        471.42857142857133,
                                        39.04761904761904
                                    ]
                                ]
                            ],
                            "dataLabelsRects": [],
                            "lastDrawnDataLabelsIndexes": [],
                            "hasNullValues": false,
                            "zoomed": false,
                            "gridWidth": 440,
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
                            "translateX": 15,
                            "translateY": 30,
                            "translateYAxisX": [
                                -18
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
                                "showOnIntersect": false,
                                "showTooltipTitle": true,
                                "fixedTooltip": false,
                                "xaxisTooltip": {},
                                "yaxisTTEls": null,
                                "isBarShared": true,
                                "lastHoverTime": 1683618109849,
                                "xyRatios": {
                                    "yRatio": [
                                        0.2048780487804878
                                    ],
                                    "invertedYRatio": 0.09545454545454546,
                                    "zRatio": null,
                                    "xRatio": null,
                                    "initialXRatio": null,
                                    "invertedXRatio": null,
                                    "baseLineInvertedY": -220,
                                    "baseLineY": [
                                        -102.5
                                    ],
                                    "baseLineX": 0
                                },
                                "isXAxisTooltipEnabled": true,
                                "yaxisTooltips": [
                                    false
                                ],
                                "allTooltipSeriesGroups": [],
                                "xaxisOffY": 206,
                                "xaxisTooltipText": {},
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
                                    55,
                                    110,
                                    165,
                                    220,
                                    275,
                                    330,
                                    385,
                                    440
                                ],
                                "dataPointsDividedHeight": 25.625,
                                "dataPointsDividedWidth": 55,
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
                                    31,
                                    40,
                                    28,
                                    51,
                                    32,
                                    40,
                                    35,
                                    55
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
                                    100,
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
                                    null,
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
                                "Line"
                            ],
                            "seriesTotals": [
                                312
                            ],
                            "seriesLog": [
                                null
                            ],
                            "seriesColors": [
                                null
                            ],
                            "stackedSeriesTotals": [
                                31,
                                40,
                                28,
                                51,
                                32,
                                40,
                                35,
                                55
                            ],
                            "seriesXvalues": [
                                [
                                    31.428571428571427,
                                    94.28571428571428,
                                    157.14285714285714,
                                    220,
                                    282.85714285714283,
                                    345.71428571428567,
                                    408.5714285714285,
                                    471.42857142857133
                                ]
                            ],
                            "seriesYvalues": [
                                [
                                    156.19047619047618,
                                    112.26190476190476,
                                    170.83333333333331,
                                    58.571428571428555,
                                    151.3095238095238,
                                    112.26190476190476,
                                    136.66666666666666,
                                    39.04761904761904
                                ]
                            ],
                            "categoryLabels": [],
                            "selectionResizeTimer": null,
                            "isXNumeric": false,
                            "xaxisLabelsCount": 8,
                            "isMultiLineX": false,
                            "isMultipleYAxis": false,
                            "maxY": 63,
                            "minY": 21,
                            "minYArr": [
                                21
                            ],
                            "maxYArr": [
                                63
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
                                        21,
                                        28,
                                        35,
                                        42,
                                        49,
                                        56,
                                        63
                                    ],
                                    "niceMin": 21,
                                    "niceMax": 63
                                }
                            ],
                            "xAxisScale": null,
                            "xAxisTicksPositions": [],
                            "yLabelsCoords": [
                                {
                                    "width": 0,
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
                                42
                            ],
                            "zRange": null,
                            "dataPoints": 8,
                            "xTickAmount": 0,
                            "xyCharts": true,
                            "isBarHorizontal": false,
                            "chartClass": ".apexchartsX27J9",
                            "comboBarCount": 0,
                            "isRangeBar": false,
                            "xAxisHeight": 10,
                            "hasNegs": true,
                            "yLogRatio": [
                                0.2048780487804878
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
                            "Item 4",
                            "Item 5",
                            "Item 6",
                            "Item 7",
                            "Item 8"
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
                        "yAxisWidth": 0,
                        "yAxisWidthLeft": 0,
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
                        "chartType": "line",
                        "initialAnim": false,
                        "dynamicAnim": false,
                        "animBeginArr": [
                            0
                        ],
                        "animDur": 0,
                        "defaultSize": 205,
                        "centerY": 102.5,
                        "centerX": 220,
                        "fullAngle": 360,
                        "initialAngle": 0,
                        "donutSize": 59.80000000000001,
                        "maxY": 0,
                        "sliceLabels": [],
                        "sliceSizes": [],
                        "prevSectorAngleArr": []
                    },
                    "rangeBar": {
                        "isHorizontal": false,
                        "strokeWidth": 4,
                        "isNullValue": false,
                        "isRangeBar": 0,
                        "xRatio": null,
                        "initialXRatio": null,
                        "invertedXRatio": null,
                        "invertedYRatio": 0.09545454545454546,
                        "baseLineInvertedY": -220,
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
                        "xDivision": 55
                    }
                }
            },
            {
                "id": "Oi8Xu",
                "chart": {
                    "opts": {
                        "series": [
                            {
                                "name": "Column 1",
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
                            },
                            {
                                "name": "Column 2",
                                "data": [
                                    {
                                        "x": "Item 1",
                                        "y": 15
                                    },
                                    {
                                        "x": "Item 2",
                                        "y": 10
                                    },
                                    {
                                        "x": "Item 3",
                                        "y": 25
                                    },
                                    {
                                        "x": "Item 4",
                                        "y": 30
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
                            "stacked": true,
                            "stackType": "100%",
                            "id": "Oi8Xu"
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
                            "enabled": true,
                            "textAnchor": "middle",
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "fontSize": 12,
                                "fontWeight": 700,
                                "colors": [
                                    "#fff"
                                ]
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
                                "max": 100,
                                "min": 0,
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
                                "id": "Oi8Xu",
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
                                "stacked": true,
                                "stackType": "100%",
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
                                        "position": "center",
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
                                "enabled": true,
                                "textAnchor": "middle",
                                "distributed": false,
                                "offsetX": 0,
                                "offsetY": 0,
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
                            "chartID": "Oi8Xu",
                            "cuid": "ourdipdh",
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
                            "clientX": 1225,
                            "clientY": 498,
                            "fill": {
                                "colors": [
                                    "#4ecdc4",
                                    "#c7f464",
                                    "#81D4FA",
                                    "#fd6a6a",
                                    "#546E7A"
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
                            "initialConfig": {},
                            "initialSeries": [
                                {
                                    "name": "Column 1",
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
                                },
                                {
                                    "name": "Column 2",
                                    "data": [
                                        {
                                            "x": "Item 1",
                                            "y": 15
                                        },
                                        {
                                            "x": "Item 2",
                                            "y": 10
                                        },
                                        {
                                            "x": "Item 3",
                                            "y": 25
                                        },
                                        {
                                            "x": "Item 4",
                                            "y": 30
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
                                    "max": 100,
                                    "min": 0,
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
                                    "_prevClass": "Oi8Xu"
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
                            "dataChanged": false,
                            "previousPaths": [],
                            "allSeriesHasEqualX": true,
                            "pointsArray": [],
                            "dataLabelsRects": [
                                [
                                    {
                                        "x": 42.125,
                                        "y": 164,
                                        "width": 0,
                                        "height": 0
                                    },
                                    {
                                        "x": 128.375,
                                        "y": 136.66666666666666,
                                        "width": 0,
                                        "height": 0
                                    },
                                    {
                                        "x": 214.625,
                                        "y": 149.0909090909091,
                                        "width": 0,
                                        "height": 0
                                    },
                                    {
                                        "x": 300.875,
                                        "y": 146.42857142857142,
                                        "width": 0,
                                        "height": 0
                                    }
                                ],
                                [
                                    {
                                        "x": 42.125,
                                        "y": 61.5,
                                        "width": 0,
                                        "height": 0
                                    },
                                    {
                                        "x": 128.375,
                                        "y": 34.16666666666664,
                                        "width": 0,
                                        "height": 0
                                    },
                                    {
                                        "x": 214.625,
                                        "y": 46.59090909090908,
                                        "width": 0,
                                        "height": 0
                                    },
                                    {
                                        "x": 300.875,
                                        "y": 43.92857142857142,
                                        "width": 0,
                                        "height": 0
                                    }
                                ]
                            ],
                            "lastDrawnDataLabelsIndexes": [
                                [
                                    0,
                                    1,
                                    2,
                                    3,
                                    0,
                                    1,
                                    2,
                                    3
                                ],
                                [
                                    0,
                                    1,
                                    2,
                                    3,
                                    0,
                                    1,
                                    2,
                                    3
                                ]
                            ],
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
                                "lastHoverTime": 1683618107712,
                                "xyRatios": {
                                    "yRatio": [
                                        0.4878048780487805
                                    ],
                                    "invertedYRatio": 0.2898550724637681,
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
                                "legendLabels": {
                                    "0": {},
                                    "1": {}
                                },
                                "ttItems": [
                                    {},
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
                                ],
                                [
                                    15,
                                    10,
                                    25,
                                    30
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
                                    40,
                                    66.66666666666667,
                                    54.54545454545455,
                                    57.142857142857146
                                ],
                                [
                                    60,
                                    33.333333333333336,
                                    45.45454545454545,
                                    42.857142857142854
                                ]
                            ],
                            "seriesGoals": [
                                [
                                    null,
                                    null,
                                    null,
                                    null
                                ],
                                [
                                    null,
                                    null,
                                    null,
                                    null
                                ]
                            ],
                            "seriesX": [
                                null,
                                [
                                    "Item 1",
                                    "Item 2",
                                    "Item 3",
                                    "Item 4"
                                ]
                            ],
                            "seriesZ": [
                                [],
                                []
                            ],
                            "seriesNames": [
                                "Column 1",
                                "Column 2"
                            ],
                            "seriesTotals": [
                                100,
                                80
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
                                25,
                                30,
                                55,
                                70
                            ],
                            "seriesXvalues": [
                                [
                                    99.1875,
                                    185.4375,
                                    271.6875,
                                    357.9375
                                ],
                                [
                                    99.1875,
                                    185.4375,
                                    271.6875,
                                    357.9375
                                ]
                            ],
                            "seriesYvalues": [
                                [
                                    123,
                                    68.33333333333331,
                                    93.18181818181817,
                                    87.85714285714285
                                ],
                                [
                                    0,
                                    -2.842170943040401e-14,
                                    -1.4210854715202004e-14,
                                    0
                                ]
                            ],
                            "categoryLabels": [],
                            "selectionResizeTimer": null,
                            "isXNumeric": false,
                            "xaxisLabelsCount": 4,
                            "isMultiLineX": false,
                            "isMultipleYAxis": false,
                            "maxY": 100,
                            "minY": 0,
                            "minYArr": [
                                0
                            ],
                            "maxYArr": [
                                100
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
                                        20,
                                        40,
                                        60,
                                        80,
                                        100
                                    ],
                                    "niceMin": 0,
                                    "niceMax": 100
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
                                100
                            ],
                            "zRange": null,
                            "dataPoints": 4,
                            "xTickAmount": 0,
                            "xyCharts": true,
                            "isBarHorizontal": false,
                            "chartClass": ".apexchartsOi8Xu",
                            "comboBarCount": 0,
                            "isRangeBar": false,
                            "xAxisHeight": 10,
                            "yLogRatio": [
                                0.4878048780487805
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
                        "invertedYRatio": 0.2898550724637681,
                        "baseLineInvertedY": 0.1,
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
                        "xDivision": 86.25
                    }
                }
            },
            {
                "id": "rTE4w",
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
                            "id": "rTE4w"
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
                                "id": "rTE4w",
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
                            "chartID": "rTE4w",
                            "cuid": "cntj7eg8l",
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
                            "clientX": null,
                            "clientY": null,
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
                                    "_prevClass": "rTE4w"
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
                            "previousPaths": [],
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
                                "lastHoverTime": 1683618621118,
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
                            "chartClass": ".apexchartsrTE4w",
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
                "id": "A2Aqm",
                "chart": {
                    "opts": {
                        "annotations": {
                            "position": "front",
                            "yaxis": [],
                            "xaxis": [],
                            "points": []
                        },
                        "chart": {
                            "type": "bar",
                            "background": "transparent",
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
                            "id": "A2Aqm"
                        },
                        "plotOptions": {
                            "bar": {
                                "horizontal": false,
                                "columnWidth": "16%",
                                "barHeight": "70%",
                                "distributed": false,
                                "borderRadius": 6,
                                "colors": {
                                    "ranges": [],
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
                                "show": false,
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
                            null
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
                            "chartID": "A2Aqm",
                            "cuid": "eabz4x3r",
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
                            "clientX": 1216,
                            "clientY": 383,
                            "fill": {
                                "colors": [
                                    "#EDAA03",
                                    "#c7f464",
                                    "#81D4FA",
                                    "#fd6a6a",
                                    "#546E7A",
                                    "#EDAA03",
                                    "#c7f464",
                                    "#81D4FA",
                                    "#fd6a6a",
                                    "#546E7A",
                                    "#EDAA03",
                                    "#c7f464",
                                    "#81D4FA",
                                    "#fd6a6a",
                                    "#546E7A",
                                    "#EDAA03",
                                    "#c7f464",
                                    "#81D4FA",
                                    "#fd6a6a",
                                    "#546E7A",
                                    "#EDAA03",
                                    "#c7f464",
                                    "#81D4FA",
                                    "#fd6a6a",
                                    "#546E7A",
                                    "#EDAA03",
                                    "#c7f464",
                                    "#81D4FA",
                                    "#fd6a6a",
                                    "#546E7A",
                                    "#EDAA03",
                                    "#c7f464",
                                    "#81D4FA",
                                    "#fd6a6a",
                                    "#546E7A",
                                    "#EDAA03",
                                    "#c7f464",
                                    "#81D4FA",
                                    "#fd6a6a",
                                    "#546E7A",
                                    "#EDAA03",
                                    "#c7f464",
                                    "#81D4FA",
                                    "#fd6a6a",
                                    "#546E7A",
                                    "#EDAA03",
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
                            "isDirty": false,
                            "isExecCalled": false,
                            "initialConfig": {
                                "annotations": {
                                    "position": "front",
                                    "texts": [],
                                    "images": [],
                                    "shapes": []
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
                                }
                            },
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
                                            "y": "25"
                                        },
                                        {
                                            "x": "item 5",
                                            "y": 10
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
                                    "show": false,
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
                            "lastYAxis": [
                                {
                                    "show": false,
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
                                "Item 4",
                                "item 5"
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
                                    "_prevClass": "A2Aqm"
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
                            "resized": false,
                            "resizeTimer": null,
                            "comboCharts": false,
                            "dataChanged": false,
                            "previousPaths": [],
                            "allSeriesHasEqualX": true,
                            "pointsArray": [],
                            "dataLabelsRects": [],
                            "lastDrawnDataLabelsIndexes": [],
                            "hasNullValues": false,
                            "zoomed": false,
                            "gridWidth": 360,
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
                            "translateX": 15,
                            "translateY": 30,
                            "translateYAxisX": [
                                -18
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
                                "lastHoverTime": 1683618623493,
                                "xyRatios": {
                                    "yRatio": [
                                        0.15609756097560976
                                    ],
                                    "invertedYRatio": 0.08888888888888889,
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
                                    72,
                                    144,
                                    216,
                                    288,
                                    360
                                ],
                                "dataPointsDividedHeight": 41,
                                "dataPointsDividedWidth": 72,
                                "tooltipTitle": {},
                                "legendLabels": {},
                                "ttItems": [
                                    {}
                                ],
                                "seriesBound": {
                                    "x": 1004,
                                    "y": 282,
                                    "width": 360,
                                    "height": 211,
                                    "top": 282,
                                    "right": 1364,
                                    "bottom": 493,
                                    "left": 1004
                                }
                            },
                            "series": [
                                [
                                    10,
                                    20,
                                    30,
                                    25,
                                    10
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
                                    100,
                                    100
                                ]
                            ],
                            "seriesGoals": [
                                [
                                    null,
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
                                95
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
                                25,
                                10
                            ],
                            "seriesXvalues": [
                                [
                                    36,
                                    180,
                                    252,
                                    324,
                                    396
                                ]
                            ],
                            "seriesYvalues": [
                                [
                                    140.9375,
                                    76.875,
                                    12.8125,
                                    44.84375,
                                    140.9375
                                ]
                            ],
                            "categoryLabels": [],
                            "selectionResizeTimer": null,
                            "isXNumeric": false,
                            "xaxisLabelsCount": 5,
                            "isMultiLineX": false,
                            "isMultipleYAxis": false,
                            "maxY": 32,
                            "minY": 0,
                            "minYArr": [
                                0
                            ],
                            "maxYArr": [
                                32
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
                                        8,
                                        16,
                                        24,
                                        32
                                    ],
                                    "niceMin": 0,
                                    "niceMax": 32
                                }
                            ],
                            "xAxisScale": null,
                            "xAxisTicksPositions": [],
                            "yLabelsCoords": [
                                {
                                    "width": 0,
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
                                32
                            ],
                            "zRange": null,
                            "dataPoints": 5,
                            "xTickAmount": 0,
                            "xyCharts": true,
                            "isBarHorizontal": false,
                            "chartClass": ".apexchartsA2Aqm",
                            "comboBarCount": 0,
                            "isRangeBar": false,
                            "xAxisHeight": 10,
                            "yLogRatio": [
                                0.15609756097560976
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
                            "Item 4",
                            "item 5"
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
                            "x": 989,
                            "y": 505,
                            "height": 0,
                            "width": 0
                        },
                        "yAxisWidth": 0,
                        "yAxisWidthLeft": 0,
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
                        "centerX": 180,
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
                        "invertedYRatio": 0.08888888888888889,
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
                        "invertedYRatio": 0.08888888888888889,
                        "baseLineInvertedY": 0.1,
                        "yaxisIndex": 0,
                        "seriesLen": 1,
                        "barHelpers": {},
                        "totalItems": 5,
                        "visibleI": 0,
                        "visibleItems": 5,
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
                        "xDivision": 72
                    }
                }
            },
            {
                "id": "H4Ldo",
                "chart": {
                    "opts": {
                        "series": [
                            {
                                "name": "Bar",
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
                            "height": 230,
                            "width": 400,
                            "id": "H4Ldo"
                        },
                        "plotOptions": {
                            "bar": {
                                "horizontal": true,
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
                            "enabled": true,
                            "textAnchor": "middle",
                            "offsetX": -2,
                            "offsetY": -3,
                            "style": {
                                "fontSize": 12,
                                "fontWeight": 700,
                                "colors": [
                                    "#fff"
                                ]
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
                        "yaxis": [
                            {
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
                                "height": 230,
                                "parentHeightOffset": 15,
                                "redrawOnParentResize": true,
                                "redrawOnWindowResize": true,
                                "id": "H4Ldo",
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
                                    "enabled": false,
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
                                    "horizontal": true,
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
                                "enabled": true,
                                "textAnchor": "middle",
                                "distributed": false,
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
                            "chartID": "H4Ldo",
                            "cuid": "7e2mqz3m",
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
                            "clientX": null,
                            "clientY": null,
                            "fill": {
                                "colors": [
                                    "#4ecdc4",
                                    "#c7f464",
                                    "#81D4FA",
                                    "#fd6a6a",
                                    "#546E7A"
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
                                    "name": "Bar",
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
                            "radialSize": 84.2439024390244,
                            "zoomEnabled": false,
                            "panEnabled": false,
                            "selectionEnabled": false,
                            "yaxis": null,
                            "mousedown": false,
                            "lastClientPosition": {},
                            "yValueDecimal": 0,
                            "total": 0,
                            "SVGNS": "http://www.w3.org/2000/svg",
                            "svgWidth": 400,
                            "svgHeight": 230,
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
                                    "_prevClass": "H4Ldo"
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
                            "previousPaths": [],
                            "allSeriesHasEqualX": true,
                            "pointsArray": [],
                            "dataLabelsRects": [
                                [
                                    {
                                        "x": 82.35,
                                        "y": 17.125,
                                        "width": 0,
                                        "height": 0
                                    },
                                    {
                                        "x": 168.6,
                                        "y": 63.375,
                                        "width": 0,
                                        "height": 0
                                    },
                                    {
                                        "x": 254.85000000000002,
                                        "y": 109.625,
                                        "width": 0,
                                        "height": 0
                                    },
                                    {
                                        "x": 341.1,
                                        "y": 155.875,
                                        "width": 0,
                                        "height": 0
                                    }
                                ]
                            ],
                            "lastDrawnDataLabelsIndexes": [
                                [
                                    0,
                                    1,
                                    2,
                                    3,
                                    0,
                                    1,
                                    2,
                                    3
                                ]
                            ],
                            "hasNullValues": false,
                            "zoomed": false,
                            "gridWidth": 345,
                            "gridHeight": 185,
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
                            "translateXAxisY": -8,
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
                                "lastHoverTime": 1683618627954,
                                "xyRatios": {
                                    "yRatio": [
                                        0.21621621621621623
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
                                "xaxisOffY": 186,
                                "yaxisOffX": 1,
                                "yaxisTooltip": {},
                                "yaxisTooltipText": [
                                    {}
                                ],
                                "xcrosshairsWidth": 0,
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
                                "dataPointsDividedHeight": 46.25,
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
                                "Bar"
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
                                    null,
                                    258.85,
                                    388.225,
                                    517.6
                                ]
                            ],
                            "seriesYvalues": [
                                [
                                    53.1875,
                                    99.4375,
                                    145.6875,
                                    191.9375
                                ]
                            ],
                            "categoryLabels": [],
                            "selectionResizeTimer": null,
                            "isXNumeric": false,
                            "xaxisLabelsCount": 0,
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
                                    "width": 0,
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
                            "xTickAmount": 4,
                            "xyCharts": true,
                            "isBarHorizontal": true,
                            "chartClass": ".apexchartsH4Ldo",
                            "comboBarCount": 0,
                            "isRangeBar": false,
                            "xAxisHeight": 10,
                            "yLogRatio": [
                                0.21621621621621623
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
                        "yAxisWidthLeft": 10,
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
                        "defaultSize": 185,
                        "centerY": 92.5,
                        "centerX": 172.5,
                        "fullAngle": 360,
                        "initialAngle": 0,
                        "donutSize": 54.75853658536585,
                        "maxY": 0,
                        "sliceLabels": [],
                        "sliceSizes": [],
                        "prevSectorAngleArr": []
                    },
                    "rangeBar": {
                        "isHorizontal": true,
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
                        "isHorizontal": true,
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
                        "invertAxis": true,
                        "helpers": {},
                        "xAxisAnnotations": {
                            "invertAxis": true
                        },
                        "yAxisAnnotations": {},
                        "pointsAnnotations": {},
                        "xDivision": 86.25
                    }
                }
            }
        ]
    }
  return (
   <>
   <ReactApexcharts type='bar' options={options} series={options.series} width={240} />
   </>
  )
}

