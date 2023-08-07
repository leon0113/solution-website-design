import React from 'react'
import ReactApexcharts from 'react-apexcharts'

const ReachBarChart = () => {
    const options ={
        "annotations": {},
        "chart": {
            "animations": {
                "enabled": false,
                "easing": "swing"
            },
            "foreColor": "#333",
            "fontFamily": "Roboto",
            "height": 230,
            "id": "Fh5Sn",
            "toolbar": {
                "show": false
            },
            "type": "bar",
            "width": 400,
            "zoom": {
                "enabled": false
            }
        },
        "plotOptions": {
            "bar": {
                "borderRadius": 10,
                "borderRadiusApplication": "end",
                "borderRadiusWhenStacked": "last",
                "hideZeroBarsWhenGrouped": false,
                "isDumbbell": false,
                "isFunnel": false,
                "isFunnel3d": true,
                "dataLabels": {
                    "total": {
                        "enabled": false,
                        "offsetX": 0,
                        "offsetY": 0,
                        "style": {
                            "color": "#373d3f",
                            "fontSize": "12px",
                            "fontWeight": 600
                        }
                    }
                }
            },
            "bubble": {
                "zScaling": true
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
        "dataLabels": {
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
        "grid": {
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
                "name": "Bar",
                "data": [
                    {
                        "x": "Mon",
                        "y": 10
                    },
                    {
                        "x": "Tue",
                        "y": 20
                    },
                    {
                        "x": "Wed",
                        "y": 30
                    },
                    {
                        "x": "Thus",
                        "y": 40
                    },
                    {
                        "x": "Fri",
                        "y": 10
                    },
                    {
                        "x": "Sat",
                        "y": "15"
                    },
                    {
                        "x": "Sun",
                        "y": "60"
                    }
                ]
            }
        ],
        "stroke": {
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
                }
            }
        },
        "tooltip": {
            "shared": false,
            "intersect": true
        },
        "xaxis": {
            "labels": {
                "trim": true,
                "style": {}
            },
            "group": {
                "groups": [],
                "style": {
                    "colors": [],
                    "fontSize": "12px",
                    "fontWeight": 400,
                    "cssClass": ""
                }
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
                "style": {}
            },
            "title": {
                "style": {
                    "fontWeight": 700
                }
            }
        },
        "_chartInstances": [
            {
                "id": "y8Y6G",
                "chart": {
                    "opts": {
                        "series": [
                            8,
                            25,
                            20,
                            10
                        ],
                        "annotations": {
                            "position": "front",
                            "yaxis": [],
                            "xaxis": [],
                            "points": []
                        },
                        "chart": {
                            "type": "pie",
                            "background": "transparent",
                            "foreColor": "#F4F4F4",
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
                            "height": 382,
                            "width": 622,
                            "id": "y8Y6G"
                        },
                        "plotOptions": {
                            "bar": {
                                "horizontal": false,
                                "columnWidth": "70%",
                                "barHeight": "70%",
                                "distributed": false,
                                "borderRadius": 10,
                                "borderRadiusApplication": "end",
                                "borderRadiusWhenStacked": "last",
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
                                "startAngle": 0,
                                "endAngle": 360,
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
                            "palette": "palette2"
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
                            "show": false,
                            "curve": "smooth",
                            "lineCap": "butt",
                            "colors": [
                                "#fff"
                            ],
                            "width": 1,
                            "dashArray": 0
                        },
                        "fill": {
                            "type": "solid",
                            "opacity": 1,
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
                            "show": false,
                            "showForSingleSeries": false,
                            "floating": false,
                            "position": "right",
                            "horizontalAlign": "center",
                            "fontSize": 16,
                            "fontWeight": 900,
                            "offsetX": -20,
                            "offsetY": -4,
                            "labels": {
                                "useSeriesColors": false
                            },
                            "markers": {
                                "width": 12,
                                "height": 12,
                                "strokeWidth": 0,
                                "strokeColor": "#A93434",
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
                        },
                        "labels": [
                            "Africa",
                            "Asia",
                            "america",
                            "europe"
                        ]
                    },
                    "w": {
                        "config": {
                            "annotations": {
                                "texts": [],
                                "images": [],
                                "shapes": [],
                                "position": "front"
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
                                "background": "transparent",
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
                                "foreColor": "#F4F4F4",
                                "fontFamily": "Roboto",
                                "height": 382,
                                "parentHeightOffset": 15,
                                "redrawOnParentResize": true,
                                "redrawOnWindowResize": true,
                                "id": "y8Y6G",
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
                                "type": "pie",
                                "width": 622,
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
                                    "borderRadiusApplication": "end",
                                    "borderRadiusWhenStacked": "last",
                                    "rangeBarOverlap": true,
                                    "rangeBarGroupRows": false,
                                    "hideZeroBarsWhenGrouped": false,
                                    "isDumbbell": false,
                                    "isFunnel": false,
                                    "isFunnel3d": true,
                                    "colors": {
                                        "backgroundBarOpacity": 1,
                                        "backgroundBarRadius": 0
                                    },
                                    "dataLabels": {
                                        "position": "top",
                                        "maxItems": 100,
                                        "hideOverflowingLabels": true,
                                        "orientation": "horizontal",
                                        "total": {
                                            "enabled": false,
                                            "offsetX": 0,
                                            "offsetY": 0,
                                            "style": {
                                                "color": "#373d3f",
                                                "fontSize": "12px",
                                                "fontWeight": 600
                                            }
                                        }
                                    }
                                },
                                "bubble": {
                                    "zScaling": true
                                },
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
                                "opacity": 1,
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
                            "legend": {
                                "show": false,
                                "showForSingleSeries": false,
                                "showForNullSeries": true,
                                "showForZeroSeries": true,
                                "floating": false,
                                "position": "right",
                                "horizontalAlign": "center",
                                "inverseOrder": false,
                                "fontSize": 16,
                                "fontWeight": 900,
                                "offsetX": -20,
                                "offsetY": -4,
                                "customLegendItems": [],
                                "labels": {
                                    "useSeriesColors": false
                                },
                                "markers": {
                                    "width": 12,
                                    "height": 12,
                                    "strokeWidth": 0,
                                    "strokeColor": "#A93434",
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
                                "show": false,
                                "curve": "smooth",
                                "lineCap": "butt",
                                "width": 1,
                                "dashArray": 0,
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
                                    }
                                }
                            },
                            "tooltip": {
                                "enabled": true,
                                "shared": true,
                                "followCursor": false,
                                "intersect": false,
                                "inverseOrder": false,
                                "fillSeriesColor": true,
                                "theme": "dark",
                                "cssClass": "",
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
                                "group": {
                                    "groups": [],
                                    "style": {
                                        "colors": [],
                                        "fontSize": "12px",
                                        "fontWeight": 400,
                                        "cssClass": ""
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
                            "theme": {
                                "mode": "light",
                                "palette": "palette2",
                                "monochrome": {
                                    "enabled": false,
                                    "color": "#008FFB",
                                    "shadeTo": "light",
                                    "shadeIntensity": 0.65
                                }
                            }
                        },
                        "globals": {
                            "chartID": "y8Y6G",
                            "cuid": "47dfjili",
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
                                "#3f51b5",
                                "#03a9f4",
                                "#4caf50",
                                "#f9ce1d",
                                "#FF9800"
                            ],
                            "clientX": 1015,
                            "clientY": 286,
                            "fill": {
                                "colors": [
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
                                    "#FF9800"
                                ]
                            },
                            "stroke": {
                                "colors": [
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff"
                                ]
                            },
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
                                8,
                                25,
                                20,
                                10
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
                                "group": {
                                    "groups": [],
                                    "style": {
                                        "colors": [],
                                        "fontSize": "12px",
                                        "fontWeight": 400,
                                        "cssClass": ""
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
                                "Africa",
                                "Asia",
                                "america",
                                "europe"
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
                            "radialSize": 166.70731707317074,
                            "zoomEnabled": true,
                            "panEnabled": false,
                            "selectionEnabled": false,
                            "yaxis": null,
                            "mousedown": false,
                            "lastClientPosition": {},
                            "yValueDecimal": 0,
                            "total": 0,
                            "SVGNS": "http://www.w3.org/2000/svg",
                            "svgWidth": 622,
                            "svgHeight": 382,
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
                                    "_prevClass": "y8Y6G"
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
                                "elLegendForeign": {},
                                "elLegendWrap": {},
                                "elGraphical": {
                                    "_stroke": "#000000",
                                    "_event": null,
                                    "dom": {},
                                    "node": {},
                                    "type": "g"
                                },
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
                            "delayedElements": [],
                            "axisCharts": false,
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
                            "easing": "<>",
                            "zoomed": false,
                            "gridWidth": 352,
                            "gridHeight": 392,
                            "rotateXLabels": false,
                            "defaultLabels": false,
                            "yLabelFormatters": [
                                null
                            ],
                            "LINE_HEIGHT_RATIO": 1.618,
                            "xAxisLabelsHeight": 0,
                            "xAxisGroupLabelsHeight": 0,
                            "xAxisLabelsWidth": 0,
                            "yAxisLabelsWidth": 0,
                            "scaleX": 1,
                            "scaleY": 1,
                            "translateX": 130,
                            "translateY": 0,
                            "translateYAxisX": [],
                            "yAxisWidths": [],
                            "translateXAxisY": 0,
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
                                "intersect": {
                                    "isVerticalGroupedRangeBar": false
                                },
                                "axesTooltip": {},
                                "showOnIntersect": false,
                                "showTooltipTitle": false,
                                "fixedTooltip": false,
                                "xaxisTooltip": null,
                                "yaxisTTEls": null,
                                "isBarShared": true,
                                "lastHoverTime": 1690362106592,
                                "xyRatios": null,
                                "isXAxisTooltipEnabled": false,
                                "yaxisTooltips": [
                                    false
                                ],
                                "allTooltipSeriesGroups": [],
                                "dataPointsDividedHeight": null,
                                "dataPointsDividedWidth": null,
                                "legendLabels": {},
                                "ttItems": [
                                    {},
                                    {},
                                    {},
                                    {}
                                ]
                            },
                            "series": [
                                8,
                                25,
                                20,
                                10
                            ],
                            "seriesCandleO": [],
                            "seriesCandleH": [],
                            "seriesCandleM": [],
                            "seriesCandleL": [],
                            "seriesCandleC": [],
                            "seriesRangeStart": [],
                            "seriesRangeEnd": [],
                            "seriesRange": [],
                            "seriesPercent": [
                                [
                                    12.698412698412698
                                ],
                                [
                                    39.682539682539684
                                ],
                                [
                                    31.746031746031747
                                ],
                                [
                                    15.873015873015873
                                ]
                            ],
                            "seriesGoals": [],
                            "seriesX": [],
                            "seriesZ": [],
                            "seriesNames": [
                                "Africa",
                                "Asia",
                                "america",
                                "europe"
                            ],
                            "seriesTotals": [
                                8,
                                25,
                                20,
                                10
                            ],
                            "seriesLog": [],
                            "seriesColors": [],
                            "stackedSeriesTotals": [],
                            "seriesXvalues": [
                                [],
                                [],
                                [],
                                []
                            ],
                            "seriesYvalues": [
                                [],
                                [],
                                [],
                                []
                            ],
                            "hasXaxisGroups": false,
                            "groups": [],
                            "hasSeriesGroups": false,
                            "seriesGroups": [],
                            "categoryLabels": [],
                            "selectionResizeTimer": null,
                            "isXNumeric": false,
                            "isMultiLineX": false,
                            "isMultipleYAxis": false,
                            "maxY": -1.7976931348623157e+308,
                            "minY": 5e-324,
                            "minYArr": [],
                            "maxYArr": [],
                            "maxX": -1.7976931348623157e+308,
                            "minX": 1.7976931348623157e+308,
                            "initialMaxX": -1.7976931348623157e+308,
                            "initialMinX": 1.7976931348623157e+308,
                            "maxDate": 0,
                            "minDate": 1.7976931348623157e+308,
                            "minZ": 1.7976931348623157e+308,
                            "maxZ": -1.7976931348623157e+308,
                            "minXDiff": 1.7976931348623157e+308,
                            "yAxisScale": [],
                            "xAxisScale": null,
                            "xAxisTicksPositions": [],
                            "yLabelsCoords": [],
                            "yTitleCoords": [],
                            "barPadForNumericAxis": 0,
                            "padHorizontal": 0,
                            "xRange": 0,
                            "yRange": [],
                            "zRange": 0,
                            "dataPoints": 0,
                            "xTickAmount": 0,
                            "xyCharts": false,
                            "isBarHorizontal": false,
                            "chartClass": ".apexchartsy8Y6G",
                            "comboBarCount": 0
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
                        "exportToCSV",
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
                        "twoDSeries": [],
                        "threeDSeries": [],
                        "twoDSeriesX": [],
                        "seriesGoals": [],
                        "coreUtils": {},
                        "fallbackToCategory": false
                    },
                    "grid": {
                        "xaxisLabels": [
                            "Africa",
                            "Asia",
                            "america",
                            "europe"
                        ],
                        "axesUtils": {},
                        "isRangeBar": 0
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
                    "tooltip": {
                        "tooltipUtil": {},
                        "tooltipLabels": {
                            "tooltipUtil": {}
                        },
                        "tooltipPosition": {},
                        "marker": {
                            "tooltipPosition": {}
                        },
                        "intersect": {
                            "isVerticalGroupedRangeBar": false
                        },
                        "axesTooltip": {},
                        "showOnIntersect": false,
                        "showTooltipTitle": true,
                        "fixedTooltip": false,
                        "xaxisTooltip": null,
                        "yaxisTTEls": null,
                        "isBarShared": true,
                        "lastHoverTime": 1690362106591
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
                        "xAxisHeight": 0,
                        "isSparkline": false,
                        "dimHelpers": {},
                        "dimYAxis": {},
                        "dimXAxis": {},
                        "dimGrid": {},
                        "lgWidthForSideLegends": 0,
                        "xPadRight": 0,
                        "xPadLeft": 0
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
                        "chartType": "pie",
                        "initialAnim": false,
                        "dynamicAnim": false,
                        "animBeginArr": [
                            0,
                            0,
                            0,
                            0,
                            0
                        ],
                        "animDur": 0,
                        "defaultSize": 352,
                        "centerY": 176,
                        "centerX": 176,
                        "fullAngle": 360,
                        "initialAngle": 0,
                        "donutSize": 108.35975609756099,
                        "maxY": 25,
                        "sliceLabels": [],
                        "sliceSizes": [
                            166.70731707317074,
                            166.70731707317074,
                            166.70731707317074,
                            166.70731707317074
                        ],
                        "prevSectorAngleArr": [],
                        "ret": {
                            "_stroke": "#000000",
                            "_event": null,
                            "dom": {},
                            "node": {},
                            "type": "g"
                        },
                        "strokeWidth": 0
                    },
                    "rangeBar": {
                        "isHorizontal": false,
                        "strokeWidth": 1,
                        "isNullValue": false,
                        "isRangeBar": 0,
                        "isVerticalGroupedRangeBar": 0,
                        "isFunnel": false,
                        "xyRatios": null,
                        "yaxisIndex": 0,
                        "seriesLen": 0,
                        "pathArr": [],
                        "lastActiveBarSerieIndex": 0,
                        "stackedSeriesTotals": [],
                        "barHelpers": {}
                    },
                    "annotations": {
                        "graphics": {},
                        "helpers": {},
                        "xAxisAnnotations": {
                            "helpers": {}
                        },
                        "yAxisAnnotations": {
                            "helpers": {}
                        },
                        "pointsAnnotations": {
                            "helpers": {}
                        },
                        "xDivision": null
                    }
                }
            },
            {
                "id": "6LKYg",
                "chart": {
                    "opts": {
                        "series": [
                            {
                                "name": "Bar 1",
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
                                "name": "Bar 2",
                                "data": [
                                    {
                                        "x": "Item 1",
                                        "y": 20
                                    },
                                    {
                                        "x": "Item 2",
                                        "y": 10
                                    },
                                    {
                                        "x": "Item 3",
                                        "y": 15
                                    },
                                    {
                                        "x": "Item 4",
                                        "y": 25
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
                            "stacked": true,
                            "id": "6LKYg"
                        },
                        "plotOptions": {
                            "bar": {
                                "horizontal": true,
                                "columnWidth": "70%",
                                "barHeight": "70%",
                                "distributed": false,
                                "borderRadius": 10,
                                "borderRadiusApplication": "end",
                                "borderRadiusWhenStacked": "last",
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
                                "startAngle": 0,
                                "endAngle": 360,
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
                                "texts": [],
                                "images": [],
                                "shapes": [],
                                "position": "front"
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
                                "id": "6LKYg",
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
                                    "borderRadiusApplication": "end",
                                    "borderRadiusWhenStacked": "last",
                                    "rangeBarOverlap": true,
                                    "rangeBarGroupRows": false,
                                    "hideZeroBarsWhenGrouped": false,
                                    "isDumbbell": false,
                                    "isFunnel": false,
                                    "isFunnel3d": true,
                                    "colors": {
                                        "backgroundBarOpacity": 1,
                                        "backgroundBarRadius": 0
                                    },
                                    "dataLabels": {
                                        "position": "center",
                                        "maxItems": 100,
                                        "hideOverflowingLabels": true,
                                        "orientation": "horizontal",
                                        "total": {
                                            "enabled": false,
                                            "offsetX": 0,
                                            "offsetY": 0,
                                            "style": {
                                                "color": "#373d3f",
                                                "fontSize": "12px",
                                                "fontWeight": 600
                                            }
                                        }
                                    }
                                },
                                "bubble": {
                                    "zScaling": true
                                },
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
                                "dashArray": 0,
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
                                    }
                                }
                            },
                            "tooltip": {
                                "enabled": true,
                                "shared": false,
                                "followCursor": false,
                                "intersect": true,
                                "inverseOrder": false,
                                "fillSeriesColor": false,
                                "theme": "light",
                                "cssClass": "",
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
                                "group": {
                                    "groups": [],
                                    "style": {
                                        "colors": [],
                                        "fontSize": "12px",
                                        "fontWeight": 400,
                                        "cssClass": ""
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
                            "chartID": "6LKYg",
                            "cuid": "yic7qj9d",
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
                            "clientX": 1341,
                            "clientY": 368,
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
                                    "name": "Bar 1",
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
                                    "name": "Bar 2",
                                    "data": [
                                        {
                                            "x": "Item 1",
                                            "y": 20
                                        },
                                        {
                                            "x": "Item 2",
                                            "y": 10
                                        },
                                        {
                                            "x": "Item 3",
                                            "y": 15
                                        },
                                        {
                                            "x": "Item 4",
                                            "y": 25
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
                                "group": {
                                    "groups": [],
                                    "style": {
                                        "colors": [],
                                        "fontSize": "12px",
                                        "fontWeight": 400,
                                        "cssClass": ""
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
                                    "_prevClass": "6LKYg"
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
                                "elLegendForeign": {},
                                "elLegendWrap": {},
                                "elGraphical": {
                                    "_stroke": "#000000",
                                    "_event": null,
                                    "dom": {},
                                    "node": {},
                                    "type": "g"
                                },
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
                                    }
                                },
                                {
                                    "el": {
                                        "instance": {
                                            "_stroke": "#000000",
                                            "_event": null,
                                            "dom": {},
                                            "type": "g"
                                        }
                                    }
                                },
                                {
                                    "el": {
                                        "instance": {
                                            "_stroke": "#000000",
                                            "_event": null,
                                            "dom": {},
                                            "type": "g"
                                        }
                                    }
                                },
                                {
                                    "el": {
                                        "instance": {
                                            "_stroke": "#000000",
                                            "_event": null,
                                            "dom": {},
                                            "type": "g"
                                        }
                                    }
                                },
                                {
                                    "el": {
                                        "instance": {
                                            "_stroke": "#000000",
                                            "_event": null,
                                            "dom": {},
                                            "type": "g"
                                        }
                                    }
                                },
                                {
                                    "el": {
                                        "instance": {
                                            "_stroke": "#000000",
                                            "_event": null,
                                            "dom": {},
                                            "type": "g"
                                        }
                                    }
                                },
                                {
                                    "el": {
                                        "instance": {
                                            "_stroke": "#000000",
                                            "_event": null,
                                            "dom": {},
                                            "type": "g"
                                        }
                                    }
                                },
                                {
                                    "el": {
                                        "instance": {
                                            "_stroke": "#000000",
                                            "_event": null,
                                            "dom": {},
                                            "type": "g"
                                        }
                                    }
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
                            "pointsArray": [],
                            "dataLabelsRects": [
                                [
                                    {
                                        "x": 21.6625,
                                        "y": 17.125,
                                        "width": 0,
                                        "height": 0
                                    },
                                    {
                                        "x": 43.224999999999994,
                                        "y": 63.375,
                                        "width": 0,
                                        "height": 0
                                    },
                                    {
                                        "x": 64.7875,
                                        "y": 109.625,
                                        "width": 0,
                                        "height": 0
                                    },
                                    {
                                        "x": 86.35,
                                        "y": 155.875,
                                        "width": 0,
                                        "height": 0
                                    }
                                ],
                                [
                                    {
                                        "x": 86.351,
                                        "y": 17.125,
                                        "width": 0,
                                        "height": 0
                                    },
                                    {
                                        "x": 107.9135,
                                        "y": 63.375,
                                        "width": 0,
                                        "height": 0
                                    },
                                    {
                                        "x": 161.81975,
                                        "y": 109.625,
                                        "width": 0,
                                        "height": 0
                                    },
                                    {
                                        "x": 226.50725,
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
                            "gridHeight": 185,
                            "rotateXLabels": false,
                            "defaultLabels": false,
                            "yLabelFormatters": [
                                null
                            ],
                            "LINE_HEIGHT_RATIO": 1.618,
                            "xAxisLabelsHeight": 10,
                            "xAxisGroupLabelsHeight": 10,
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
                                "intersect": {
                                    "isVerticalGroupedRangeBar": false
                                },
                                "axesTooltip": {},
                                "showOnIntersect": true,
                                "showTooltipTitle": true,
                                "fixedTooltip": false,
                                "xaxisTooltip": null,
                                "yaxisTTEls": null,
                                "isBarShared": false,
                                "lastHoverTime": 1690362114369,
                                "xyRatios": {
                                    "yRatio": [
                                        0.43243243243243246
                                    ],
                                    "invertedYRatio": 0.2318840579710145,
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
                                    20,
                                    10,
                                    15,
                                    25
                                ]
                            ],
                            "seriesCandleO": [],
                            "seriesCandleH": [],
                            "seriesCandleM": [],
                            "seriesCandleL": [],
                            "seriesCandleC": [],
                            "seriesRangeStart": [],
                            "seriesRangeEnd": [],
                            "seriesRange": [],
                            "seriesPercent": [
                                [
                                    33.333333333333336,
                                    66.66666666666667,
                                    66.66666666666667,
                                    61.53846153846154
                                ],
                                [
                                    66.66666666666667,
                                    33.333333333333336,
                                    33.333333333333336,
                                    38.46153846153846
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
                                "Bar 1",
                                "Bar 2"
                            ],
                            "seriesTotals": [
                                100,
                                70
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
                                30,
                                30,
                                45,
                                65
                            ],
                            "seriesXvalues": [
                                [
                                    43.225,
                                    86.35,
                                    129.475,
                                    172.6
                                ],
                                [
                                    129.476,
                                    129.476,
                                    194.1635,
                                    280.4135
                                ]
                            ],
                            "seriesYvalues": [
                                [
                                    53.1875,
                                    99.4375,
                                    145.6875,
                                    191.9375
                                ],
                                [
                                    53.1875,
                                    99.4375,
                                    145.6875,
                                    191.9375
                                ]
                            ],
                            "hasXaxisGroups": false,
                            "groups": [],
                            "seriesGroups": [],
                            "categoryLabels": [],
                            "selectionResizeTimer": null,
                            "isXNumeric": false,
                            "isMultiLineX": false,
                            "isMultipleYAxis": false,
                            "maxY": 80,
                            "minY": 0,
                            "minYArr": [
                                0
                            ],
                            "maxYArr": [
                                80
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
                                        80
                                    ],
                                    "niceMin": 0,
                                    "niceMax": 80
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
                                80
                            ],
                            "zRange": null,
                            "dataPoints": 4,
                            "xTickAmount": 4,
                            "xyCharts": true,
                            "isBarHorizontal": true,
                            "chartClass": ".apexcharts6LKYg",
                            "comboBarCount": 0,
                            "isRangeBar": false,
                            "xAxisHeight": 10,
                            "yLogRatio": [
                                0.43243243243243246
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
                        "exportToCSV",
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
                        },
                        "elGridBorders": {
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
                    "tooltip": {
                        "tooltipUtil": {},
                        "tooltipLabels": {
                            "tooltipUtil": {}
                        },
                        "tooltipPosition": {},
                        "marker": {
                            "tooltipPosition": {}
                        },
                        "intersect": {
                            "isVerticalGroupedRangeBar": false
                        },
                        "axesTooltip": {},
                        "showOnIntersect": true,
                        "showTooltipTitle": true,
                        "fixedTooltip": false,
                        "xaxisTooltip": null,
                        "yaxisTTEls": null,
                        "isBarShared": false,
                        "lastHoverTime": 1690362114369
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
                        "isVerticalGroupedRangeBar": false,
                        "isFunnel": false,
                        "xRatio": null,
                        "initialXRatio": null,
                        "invertedXRatio": null,
                        "invertedYRatio": 0.2318840579710145,
                        "baseLineInvertedY": 0.1,
                        "yaxisIndex": 0,
                        "seriesLen": 0,
                        "pathArr": [],
                        "lastActiveBarSerieIndex": 1,
                        "stackedSeriesTotals": [
                            30,
                            30,
                            45,
                            65
                        ],
                        "barHelpers": {}
                    },
                    "annotations": {
                        "graphics": {},
                        "invertAxis": true,
                        "helpers": {},
                        "xAxisAnnotations": {
                            "invertAxis": true,
                            "helpers": {}
                        },
                        "yAxisAnnotations": {
                            "helpers": {}
                        },
                        "pointsAnnotations": {
                            "helpers": {}
                        },
                        "xDivision": 86.25
                    }
                }
            },
            {
                "id": "Q6Hvv",
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
                                    },
                                    {
                                        "x": "item 5",
                                        "y": 10
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
                            "height": 364,
                            "width": 567,
                            "id": "Q6Hvv"
                        },
                        "plotOptions": {
                            "bar": {
                                "horizontal": false,
                                "columnWidth": "70%",
                                "barHeight": "70%",
                                "distributed": false,
                                "borderRadius": 10,
                                "borderRadiusApplication": "end",
                                "borderRadiusWhenStacked": "last",
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
                                "startAngle": 0,
                                "endAngle": 360,
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
                            "#5171FF",
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
                                "texts": [],
                                "images": [],
                                "shapes": [],
                                "position": "front"
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
                                "height": 364,
                                "parentHeightOffset": 15,
                                "redrawOnParentResize": true,
                                "redrawOnWindowResize": true,
                                "id": "Q6Hvv",
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
                                "width": 567,
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
                                    "borderRadiusApplication": "end",
                                    "borderRadiusWhenStacked": "last",
                                    "rangeBarOverlap": true,
                                    "rangeBarGroupRows": false,
                                    "hideZeroBarsWhenGrouped": false,
                                    "isDumbbell": false,
                                    "isFunnel": false,
                                    "isFunnel3d": true,
                                    "colors": {
                                        "backgroundBarOpacity": 1,
                                        "backgroundBarRadius": 0
                                    },
                                    "dataLabels": {
                                        "position": "top",
                                        "maxItems": 100,
                                        "hideOverflowingLabels": true,
                                        "orientation": "horizontal",
                                        "total": {
                                            "enabled": false,
                                            "offsetX": 0,
                                            "offsetY": 0,
                                            "style": {
                                                "color": "#373d3f",
                                                "fontSize": "12px",
                                                "fontWeight": 600
                                            }
                                        }
                                    }
                                },
                                "bubble": {
                                    "zScaling": true
                                },
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
                                "dashArray": 0,
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
                                    }
                                }
                            },
                            "tooltip": {
                                "enabled": true,
                                "shared": false,
                                "followCursor": false,
                                "intersect": true,
                                "inverseOrder": false,
                                "fillSeriesColor": false,
                                "theme": "light",
                                "cssClass": "",
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
                                "group": {
                                    "groups": [],
                                    "style": {
                                        "colors": [],
                                        "fontSize": "12px",
                                        "fontWeight": 400,
                                        "cssClass": ""
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
                            "chartID": "Q6Hvv",
                            "cuid": "4zub2rvg",
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
                            "clientX": 1107,
                            "clientY": 604,
                            "fill": {
                                "colors": [
                                    "#5171FF",
                                    "#c7f464",
                                    "#81D4FA",
                                    "#fd6a6a",
                                    "#546E7A",
                                    "#5171FF",
                                    "#c7f464",
                                    "#81D4FA",
                                    "#fd6a6a",
                                    "#546E7A",
                                    "#5171FF",
                                    "#c7f464",
                                    "#81D4FA",
                                    "#fd6a6a",
                                    "#546E7A",
                                    "#5171FF",
                                    "#c7f464",
                                    "#81D4FA",
                                    "#fd6a6a",
                                    "#546E7A",
                                    "#5171FF",
                                    "#c7f464",
                                    "#81D4FA",
                                    "#fd6a6a",
                                    "#546E7A",
                                    "#5171FF",
                                    "#c7f464",
                                    "#81D4FA",
                                    "#fd6a6a",
                                    "#546E7A",
                                    "#5171FF",
                                    "#c7f464",
                                    "#81D4FA",
                                    "#fd6a6a",
                                    "#546E7A",
                                    "#5171FF",
                                    "#c7f464",
                                    "#81D4FA",
                                    "#fd6a6a",
                                    "#546E7A",
                                    "#5171FF",
                                    "#c7f464",
                                    "#81D4FA",
                                    "#fd6a6a",
                                    "#546E7A",
                                    "#5171FF",
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
                                "group": {
                                    "groups": [],
                                    "style": {
                                        "colors": [],
                                        "fontSize": "12px",
                                        "fontWeight": 400,
                                        "cssClass": ""
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
                            "radialSize": 149.609756097561,
                            "zoomEnabled": true,
                            "panEnabled": false,
                            "selectionEnabled": false,
                            "yaxis": null,
                            "mousedown": false,
                            "lastClientPosition": {},
                            "yValueDecimal": 0,
                            "total": 0,
                            "SVGNS": "http://www.w3.org/2000/svg",
                            "svgWidth": 567,
                            "svgHeight": 364,
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
                                    "_prevClass": "Q6Hvv"
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
                                "elLegendForeign": {
                                    "instance": {
                                        "_stroke": "#000000",
                                        "_event": null,
                                        "dom": {},
                                        "type": "foreignObject"
                                    }
                                },
                                "elLegendWrap": {},
                                "elGraphical": {
                                    "_stroke": "#000000",
                                    "_event": null,
                                    "dom": {},
                                    "node": {},
                                    "type": "g"
                                },
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
                                    }
                                },
                                {
                                    "el": {
                                        "instance": {
                                            "_stroke": "#000000",
                                            "_event": null,
                                            "dom": {},
                                            "type": "g"
                                        }
                                    }
                                },
                                {
                                    "el": {
                                        "instance": {
                                            "_stroke": "#000000",
                                            "_event": null,
                                            "dom": {},
                                            "type": "g"
                                        }
                                    }
                                },
                                {
                                    "el": {
                                        "instance": {
                                            "_stroke": "#000000",
                                            "_event": null,
                                            "dom": {},
                                            "type": "g"
                                        }
                                    }
                                },
                                {
                                    "el": {
                                        "instance": {
                                            "_stroke": "#000000",
                                            "_event": null,
                                            "dom": {},
                                            "type": "g"
                                        }
                                    }
                                },
                                {
                                    "el": {
                                        "instance": {
                                            "_stroke": "#000000",
                                            "_event": null,
                                            "dom": {},
                                            "type": "g"
                                        }
                                    }
                                },
                                {
                                    "el": {
                                        "instance": {
                                            "_stroke": "#000000",
                                            "_event": null,
                                            "dom": {},
                                            "type": "g"
                                        }
                                    }
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
                            "pointsArray": [],
                            "dataLabelsRects": [],
                            "lastDrawnDataLabelsIndexes": [],
                            "hasNullValues": false,
                            "zoomed": false,
                            "gridWidth": 512,
                            "gridHeight": 319,
                            "rotateXLabels": false,
                            "defaultLabels": false,
                            "yLabelFormatters": [
                                null
                            ],
                            "LINE_HEIGHT_RATIO": 1.618,
                            "xAxisLabelsHeight": 10,
                            "xAxisGroupLabelsHeight": 10,
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
                                "intersect": {
                                    "isVerticalGroupedRangeBar": false
                                },
                                "axesTooltip": {},
                                "showOnIntersect": true,
                                "showTooltipTitle": true,
                                "fixedTooltip": false,
                                "xaxisTooltip": null,
                                "yaxisTTEls": null,
                                "isBarShared": false,
                                "lastHoverTime": 1690362576911,
                                "xyRatios": {
                                    "yRatio": [
                                        0.12539184952978055
                                    ],
                                    "invertedYRatio": 0.078125,
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
                                "xaxisOffY": 320,
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
                                    102.4,
                                    204.8,
                                    307.20000000000005,
                                    409.6,
                                    512
                                ],
                                "dataPointsDividedHeight": 63.8,
                                "dataPointsDividedWidth": 102.4,
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
                                    40,
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
                            "seriesRange": [],
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
                                110
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
                                40,
                                10
                            ],
                            "seriesXvalues": [
                                [
                                    51.2,
                                    256,
                                    358.4000000000001,
                                    460.80000000000007,
                                    563.2
                                ]
                            ],
                            "seriesYvalues": [
                                [
                                    239.25,
                                    159.49999999999997,
                                    79.74999999999997,
                                    -5.684341886080802e-14,
                                    239.25
                                ]
                            ],
                            "hasXaxisGroups": false,
                            "groups": [],
                            "seriesGroups": [],
                            "categoryLabels": [],
                            "selectionResizeTimer": null,
                            "isXNumeric": false,
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
                            "dataPoints": 5,
                            "xTickAmount": 0,
                            "xyCharts": true,
                            "isBarHorizontal": false,
                            "chartClass": ".apexchartsQ6Hvv",
                            "comboBarCount": 0,
                            "isRangeBar": false,
                            "xAxisHeight": 10,
                            "yLogRatio": [
                                0.12539184952978055
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
                        "exportToCSV",
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
                        },
                        "elGridBorders": {
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
                    "tooltip": {
                        "tooltipUtil": {},
                        "tooltipLabels": {
                            "tooltipUtil": {}
                        },
                        "tooltipPosition": {},
                        "marker": {
                            "tooltipPosition": {}
                        },
                        "intersect": {
                            "isVerticalGroupedRangeBar": false
                        },
                        "axesTooltip": {},
                        "showOnIntersect": true,
                        "showTooltipTitle": true,
                        "fixedTooltip": false,
                        "xaxisTooltip": null,
                        "yaxisTTEls": null,
                        "isBarShared": false,
                        "lastHoverTime": 1690362576911
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
                        "defaultSize": 319,
                        "centerY": 159.5,
                        "centerX": 256,
                        "fullAngle": 360,
                        "initialAngle": 0,
                        "donutSize": 97.24634146341465,
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
                        "isVerticalGroupedRangeBar": 0,
                        "isFunnel": false,
                        "xRatio": null,
                        "initialXRatio": null,
                        "invertedXRatio": null,
                        "invertedYRatio": 0.078125,
                        "baseLineInvertedY": 0.1,
                        "yaxisIndex": 0,
                        "seriesLen": 0,
                        "pathArr": [],
                        "lastActiveBarSerieIndex": 0,
                        "stackedSeriesTotals": [
                            10,
                            20,
                            30,
                            40,
                            10
                        ],
                        "barHelpers": {}
                    },
                    "bar": {
                        "isHorizontal": false,
                        "strokeWidth": 2,
                        "isNullValue": false,
                        "isRangeBar": 0,
                        "isVerticalGroupedRangeBar": 0,
                        "isFunnel": false,
                        "xRatio": null,
                        "initialXRatio": null,
                        "invertedXRatio": null,
                        "invertedYRatio": 0.078125,
                        "baseLineInvertedY": 0.1,
                        "yaxisIndex": 0,
                        "seriesLen": 1,
                        "pathArr": [
                            {
                                "pathTo": "M 15.36 319.001 L 15.36 249.251 C 15.36 244.251 20.36 239.251 25.36 239.251 L 75.04 239.251 C 80.04 239.251 85.04 244.251 85.04 249.251 L 85.04 319.001 z ",
                                "pathFrom": "M 15.36 319.001 L 15.36 319.001 L 85.04 319.001 L 85.04 319.001 L 85.04 319.001 L 85.04 319.001 L 85.04 319.001 L 15.36 319.001 z",
                                "x": 117.76,
                                "y": 239.25,
                                "goalY": [],
                                "barXPosition": 15.36,
                                "barWidth": 71.68
                            },
                            {
                                "pathTo": "M 117.76 319.001 L 117.76 169.50099999999998 C 117.76 164.50099999999998 122.76 159.50099999999998 127.76 159.50099999999998 L 177.44 159.50099999999998 C 182.44 159.50099999999998 187.44 164.50099999999998 187.44 169.50099999999998 L 187.44 319.001 z ",
                                "pathFrom": "M 117.76 319.001 L 117.76 319.001 L 187.44 319.001 L 187.44 319.001 L 187.44 319.001 L 187.44 319.001 L 187.44 319.001 L 117.76 319.001 z",
                                "x": 220.16000000000003,
                                "y": 159.49999999999997,
                                "goalY": [],
                                "barXPosition": 117.76,
                                "barWidth": 71.68
                            },
                            {
                                "pathTo": "M 220.16000000000003 319.001 L 220.16000000000003 89.75099999999998 C 220.16000000000003 84.75099999999998 225.16000000000003 79.75099999999998 230.16000000000003 79.75099999999998 L 279.84000000000003 79.75099999999998 C 284.84000000000003 79.75099999999998 289.84000000000003 84.75099999999998 289.84000000000003 89.75099999999998 L 289.84000000000003 319.001 z ",
                                "pathFrom": "M 220.16000000000003 319.001 L 220.16000000000003 319.001 L 289.84000000000003 319.001 L 289.84000000000003 319.001 L 289.84000000000003 319.001 L 289.84000000000003 319.001 L 289.84000000000003 319.001 L 220.16000000000003 319.001 z",
                                "x": 322.56000000000006,
                                "y": 79.74999999999997,
                                "goalY": [],
                                "barXPosition": 220.16000000000003,
                                "barWidth": 71.68
                            },
                            {
                                "pathTo": "M 322.56000000000006 319.001 L 322.56000000000006 10.000999999999943 C 322.56000000000006 5.000999999999943 327.56000000000006 0.0009999999999431566 332.56000000000006 0.0009999999999431566 L 382.24000000000007 0.0009999999999431566 C 387.24000000000007 0.0009999999999431566 392.24000000000007 5.0009999999999435 392.24000000000007 10.000999999999943 L 392.24000000000007 319.001 z ",
                                "pathFrom": "M 322.56000000000006 319.001 L 322.56000000000006 319.001 L 392.24000000000007 319.001 L 392.24000000000007 319.001 L 392.24000000000007 319.001 L 392.24000000000007 319.001 L 392.24000000000007 319.001 L 322.56000000000006 319.001 z",
                                "x": 424.96000000000004,
                                "y": -5.684341886080802e-14,
                                "goalY": [],
                                "barXPosition": 322.56000000000006,
                                "barWidth": 71.68
                            },
                            {
                                "pathTo": "M 424.96000000000004 319.001 L 424.96000000000004 249.251 C 424.96000000000004 244.251 429.96000000000004 239.251 434.96000000000004 239.251 L 484.64000000000004 239.251 C 489.64000000000004 239.251 494.64000000000004 244.251 494.64000000000004 249.251 L 494.64000000000004 319.001 z ",
                                "pathFrom": "M 424.96000000000004 319.001 L 424.96000000000004 319.001 L 494.64000000000004 319.001 L 494.64000000000004 319.001 L 494.64000000000004 319.001 L 494.64000000000004 319.001 L 494.64000000000004 319.001 L 424.96000000000004 319.001 z",
                                "x": 527.36,
                                "y": 239.25,
                                "goalY": [],
                                "barXPosition": 424.96000000000004,
                                "barWidth": 71.68
                            }
                        ],
                        "lastActiveBarSerieIndex": 0,
                        "stackedSeriesTotals": [
                            10,
                            20,
                            30,
                            40,
                            10
                        ],
                        "barHelpers": {},
                        "totalItems": 5,
                        "visibleI": 0,
                        "visibleItems": 5,
                        "zeroSerieses": [],
                        "isReversed": false
                    },
                    "annotations": {
                        "graphics": {},
                        "helpers": {},
                        "xAxisAnnotations": {
                            "helpers": {}
                        },
                        "yAxisAnnotations": {
                            "helpers": {}
                        },
                        "pointsAnnotations": {
                            "helpers": {}
                        },
                        "xDivision": 102.4
                    }
                }
            },
            {
                "id": "crkvr",
                "chart": {
                    "opts": {
                        "series": [
                            {
                                "name": "Column",
                                "data": [
                                    {
                                        "x": "Jan",
                                        "y": 10
                                    },
                                    {
                                        "x": "Feb",
                                        "y": 20
                                    },
                                    {
                                        "x": "Mar",
                                        "y": 30
                                    },
                                    {
                                        "x": "Apr",
                                        "y": 40
                                    },
                                    {
                                        "x": "May",
                                        "y": "50"
                                    },
                                    {
                                        "x": "Jun",
                                        "y": "30"
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
                            "height": 298,
                            "width": 391,
                            "id": "crkvr"
                        },
                        "plotOptions": {
                            "bar": {
                                "horizontal": false,
                                "columnWidth": "70%",
                                "barHeight": "70%",
                                "distributed": false,
                                "borderRadius": 10,
                                "borderRadiusApplication": "end",
                                "borderRadiusWhenStacked": "last",
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
                                "startAngle": 0,
                                "endAngle": 360,
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
                            "palette": "palette2"
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
                                    "fontSize": 11,
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
                            "group": {
                                "groups": [],
                                "style": {
                                    "colors": [],
                                    "fontSize": "12px",
                                    "fontWeight": 400,
                                    "cssClass": ""
                                }
                            },
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
                                "texts": [],
                                "images": [],
                                "shapes": [],
                                "position": "front"
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
                                "height": 298,
                                "parentHeightOffset": 15,
                                "redrawOnParentResize": true,
                                "redrawOnWindowResize": true,
                                "id": "crkvr",
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
                                "width": 391,
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
                                    "borderRadiusApplication": "end",
                                    "borderRadiusWhenStacked": "last",
                                    "rangeBarOverlap": true,
                                    "rangeBarGroupRows": false,
                                    "hideZeroBarsWhenGrouped": false,
                                    "isDumbbell": false,
                                    "isFunnel": false,
                                    "isFunnel3d": true,
                                    "colors": {
                                        "backgroundBarOpacity": 1,
                                        "backgroundBarRadius": 0
                                    },
                                    "dataLabels": {
                                        "position": "top",
                                        "maxItems": 100,
                                        "hideOverflowingLabels": true,
                                        "orientation": "horizontal",
                                        "total": {
                                            "enabled": false,
                                            "offsetX": 0,
                                            "offsetY": 0,
                                            "style": {
                                                "color": "#373d3f",
                                                "fontSize": "12px",
                                                "fontWeight": 600
                                            }
                                        }
                                    }
                                },
                                "bubble": {
                                    "zScaling": true
                                },
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
                                "dashArray": 0,
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
                                    }
                                }
                            },
                            "tooltip": {
                                "enabled": true,
                                "shared": false,
                                "followCursor": false,
                                "intersect": true,
                                "inverseOrder": false,
                                "fillSeriesColor": false,
                                "theme": "light",
                                "cssClass": "",
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
                                        "fontSize": 11,
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
                                "group": {
                                    "style": {
                                        "fontSize": "12px",
                                        "fontWeight": 400,
                                        "cssClass": ""
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
                                "palette": "palette2",
                                "monochrome": {
                                    "enabled": false,
                                    "color": "#008FFB",
                                    "shadeTo": "light",
                                    "shadeIntensity": 0.65
                                }
                            }
                        },
                        "globals": {
                            "chartID": "crkvr",
                            "cuid": "kvh0p2qa",
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
                                "#3f51b5",
                                "#03a9f4",
                                "#4caf50",
                                "#f9ce1d",
                                "#FF9800"
                            ],
                            "clientX": 1157,
                            "clientY": 433,
                            "fill": {
                                "colors": [
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
                                    "#FF9800"
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
                                            "x": "Jan",
                                            "y": 10
                                        },
                                        {
                                            "x": "Feb",
                                            "y": 20
                                        },
                                        {
                                            "x": "Mar",
                                            "y": 30
                                        },
                                        {
                                            "x": "Apr",
                                            "y": 40
                                        },
                                        {
                                            "x": "May",
                                            "y": "50"
                                        },
                                        {
                                            "x": "Jun",
                                            "y": "30"
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
                                        "fontSize": 11,
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
                                "group": {
                                    "groups": [],
                                    "style": {
                                        "colors": [],
                                        "fontSize": "12px",
                                        "fontWeight": 400,
                                        "cssClass": ""
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
                                "Jan",
                                "Feb",
                                "Mar",
                                "Apr",
                                "May",
                                "Jun"
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
                            "radialSize": 117.41463414634147,
                            "zoomEnabled": true,
                            "panEnabled": false,
                            "selectionEnabled": false,
                            "yaxis": null,
                            "mousedown": false,
                            "lastClientPosition": {},
                            "yValueDecimal": 0,
                            "total": 0,
                            "SVGNS": "http://www.w3.org/2000/svg",
                            "svgWidth": 391,
                            "svgHeight": 298,
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
                                    "_prevClass": "crkvr"
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
                                "elLegendForeign": {
                                    "instance": {
                                        "_stroke": "#000000",
                                        "_event": null,
                                        "dom": {},
                                        "type": "foreignObject"
                                    }
                                },
                                "elLegendWrap": {},
                                "elGraphical": {
                                    "_stroke": "#000000",
                                    "_event": null,
                                    "dom": {},
                                    "node": {},
                                    "type": "g"
                                },
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
                                    }
                                },
                                {
                                    "el": {
                                        "instance": {
                                            "_stroke": "#000000",
                                            "_event": null,
                                            "dom": {},
                                            "type": "g"
                                        }
                                    }
                                },
                                {
                                    "el": {
                                        "instance": {
                                            "_stroke": "#000000",
                                            "_event": null,
                                            "dom": {},
                                            "type": "g"
                                        }
                                    }
                                },
                                {
                                    "el": {
                                        "instance": {
                                            "_stroke": "#000000",
                                            "_event": null,
                                            "dom": {},
                                            "type": "g"
                                        }
                                    }
                                },
                                {
                                    "el": {
                                        "instance": {
                                            "_stroke": "#000000",
                                            "_event": null,
                                            "dom": {},
                                            "type": "g"
                                        }
                                    }
                                },
                                {
                                    "el": {
                                        "instance": {
                                            "_stroke": "#000000",
                                            "_event": null,
                                            "dom": {},
                                            "type": "g"
                                        }
                                    }
                                },
                                {
                                    "el": {
                                        "instance": {
                                            "_stroke": "#000000",
                                            "_event": null,
                                            "dom": {},
                                            "type": "g"
                                        }
                                    }
                                },
                                {
                                    "el": {
                                        "instance": {
                                            "_stroke": "#000000",
                                            "_event": null,
                                            "dom": {},
                                            "type": "g"
                                        }
                                    }
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
                            "pointsArray": [],
                            "dataLabelsRects": [],
                            "lastDrawnDataLabelsIndexes": [],
                            "hasNullValues": false,
                            "zoomed": false,
                            "gridWidth": 336,
                            "gridHeight": 253,
                            "rotateXLabels": false,
                            "defaultLabels": false,
                            "yLabelFormatters": [
                                null
                            ],
                            "LINE_HEIGHT_RATIO": 1.618,
                            "xAxisLabelsHeight": 10,
                            "xAxisGroupLabelsHeight": 10,
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
                                "intersect": {
                                    "isVerticalGroupedRangeBar": false
                                },
                                "axesTooltip": {},
                                "showOnIntersect": true,
                                "showTooltipTitle": true,
                                "fixedTooltip": false,
                                "xaxisTooltip": null,
                                "yaxisTTEls": null,
                                "isBarShared": false,
                                "lastHoverTime": 1690365014539,
                                "xyRatios": {
                                    "yRatio": [
                                        0.1976284584980237
                                    ],
                                    "invertedYRatio": 0.1488095238095238,
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
                                "xaxisOffY": 254,
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
                                    56,
                                    112,
                                    168,
                                    224,
                                    280,
                                    336
                                ],
                                "dataPointsDividedHeight": 42.166666666666664,
                                "dataPointsDividedWidth": 56,
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
                                    40,
                                    50,
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
                            "seriesRange": [],
                            "seriesPercent": [
                                [
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
                                180
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
                                40,
                                50,
                                30
                            ],
                            "seriesXvalues": [
                                [
                                    28,
                                    140,
                                    196,
                                    252,
                                    308,
                                    364
                                ]
                            ],
                            "seriesYvalues": [
                                [
                                    202.4,
                                    151.8,
                                    101.19999999999999,
                                    50.599999999999994,
                                    0,
                                    101.19999999999999
                                ]
                            ],
                            "hasXaxisGroups": false,
                            "groups": [],
                            "seriesGroups": [],
                            "categoryLabels": [],
                            "selectionResizeTimer": null,
                            "isXNumeric": false,
                            "isMultiLineX": false,
                            "isMultipleYAxis": false,
                            "maxY": 50,
                            "minY": 0,
                            "minYArr": [
                                0
                            ],
                            "maxYArr": [
                                50
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
                                        40,
                                        50
                                    ],
                                    "niceMin": 0,
                                    "niceMax": 50
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
                                50
                            ],
                            "zRange": null,
                            "dataPoints": 6,
                            "xTickAmount": 0,
                            "xyCharts": true,
                            "isBarHorizontal": false,
                            "chartClass": ".apexchartscrkvr",
                            "comboBarCount": 0,
                            "isRangeBar": false,
                            "xAxisHeight": 10,
                            "yLogRatio": [
                                0.1976284584980237
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
                        "exportToCSV",
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
                            "Jan",
                            "Feb",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun"
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
                        },
                        "elGridBorders": {
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
                    "tooltip": {
                        "tooltipUtil": {},
                        "tooltipLabels": {
                            "tooltipUtil": {}
                        },
                        "tooltipPosition": {},
                        "marker": {
                            "tooltipPosition": {}
                        },
                        "intersect": {
                            "isVerticalGroupedRangeBar": false
                        },
                        "axesTooltip": {},
                        "showOnIntersect": true,
                        "showTooltipTitle": true,
                        "fixedTooltip": false,
                        "xaxisTooltip": null,
                        "yaxisTTEls": null,
                        "isBarShared": false,
                        "lastHoverTime": 1690365014538
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
                        "defaultSize": 253,
                        "centerY": 126.5,
                        "centerX": 168,
                        "fullAngle": 360,
                        "initialAngle": 0,
                        "donutSize": 76.31951219512194,
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
                        "isVerticalGroupedRangeBar": 0,
                        "isFunnel": false,
                        "xRatio": null,
                        "initialXRatio": null,
                        "invertedXRatio": null,
                        "invertedYRatio": 0.1488095238095238,
                        "baseLineInvertedY": 0.1,
                        "yaxisIndex": 0,
                        "seriesLen": 0,
                        "pathArr": [],
                        "lastActiveBarSerieIndex": 0,
                        "stackedSeriesTotals": [
                            10,
                            20,
                            30,
                            40,
                            50,
                            30
                        ],
                        "barHelpers": {}
                    },
                    "bar": {
                        "isHorizontal": false,
                        "strokeWidth": 2,
                        "isNullValue": false,
                        "isRangeBar": 0,
                        "isVerticalGroupedRangeBar": 0,
                        "isFunnel": false,
                        "xRatio": null,
                        "initialXRatio": null,
                        "invertedXRatio": null,
                        "invertedYRatio": 0.1488095238095238,
                        "baseLineInvertedY": 0.1,
                        "yaxisIndex": 0,
                        "seriesLen": 1,
                        "pathArr": [
                            {
                                "pathTo": "M 8.399999999999999 253.001 L 8.399999999999999 212.401 C 8.399999999999999 207.401 13.399999999999999 202.401 18.4 202.401 L 35.6 202.401 C 40.6 202.401 45.6 207.401 45.6 212.401 L 45.6 253.001 z ",
                                "pathFrom": "M 8.399999999999999 253.001 L 8.399999999999999 253.001 L 45.6 253.001 L 45.6 253.001 L 45.6 253.001 L 45.6 253.001 L 45.6 253.001 L 8.399999999999999 253.001 z",
                                "x": 64.4,
                                "y": 202.4,
                                "goalY": [],
                                "barXPosition": 8.399999999999999,
                                "barWidth": 39.2
                            },
                            {
                                "pathTo": "M 64.4 253.001 L 64.4 161.80100000000002 C 64.4 156.80100000000002 69.4 151.80100000000002 74.4 151.80100000000002 L 91.60000000000001 151.80100000000002 C 96.60000000000001 151.80100000000002 101.60000000000001 156.80100000000002 101.60000000000001 161.80100000000002 L 101.60000000000001 253.001 z ",
                                "pathFrom": "M 64.4 253.001 L 64.4 253.001 L 101.60000000000001 253.001 L 101.60000000000001 253.001 L 101.60000000000001 253.001 L 101.60000000000001 253.001 L 101.60000000000001 253.001 L 64.4 253.001 z",
                                "x": 120.4,
                                "y": 151.8,
                                "goalY": [],
                                "barXPosition": 64.4,
                                "barWidth": 39.2
                            },
                            {
                                "pathTo": "M 120.4 253.001 L 120.4 111.201 C 120.4 106.201 125.4 101.201 130.4 101.201 L 147.60000000000002 101.201 C 152.60000000000002 101.201 157.60000000000002 106.201 157.60000000000002 111.201 L 157.60000000000002 253.001 z ",
                                "pathFrom": "M 120.4 253.001 L 120.4 253.001 L 157.60000000000002 253.001 L 157.60000000000002 253.001 L 157.60000000000002 253.001 L 157.60000000000002 253.001 L 157.60000000000002 253.001 L 120.4 253.001 z",
                                "x": 176.4,
                                "y": 101.19999999999999,
                                "goalY": [],
                                "barXPosition": 120.4,
                                "barWidth": 39.2
                            },
                            {
                                "pathTo": "M 176.4 253.001 L 176.4 60.60099999999999 C 176.4 55.60099999999999 181.4 50.60099999999999 186.4 50.60099999999999 L 203.60000000000002 50.60099999999999 C 208.60000000000002 50.60099999999999 213.60000000000002 55.60099999999999 213.60000000000002 60.60099999999999 L 213.60000000000002 253.001 z ",
                                "pathFrom": "M 176.4 253.001 L 176.4 253.001 L 213.60000000000002 253.001 L 213.60000000000002 253.001 L 213.60000000000002 253.001 L 213.60000000000002 253.001 L 213.60000000000002 253.001 L 176.4 253.001 z",
                                "x": 232.4,
                                "y": 50.599999999999994,
                                "goalY": [],
                                "barXPosition": 176.4,
                                "barWidth": 39.2
                            },
                            {
                                "pathTo": "M 232.4 253.001 L 232.4 10.001 C 232.4 5.0009999999999994 237.4 0.001 242.4 0.001 L 259.6 0.001 C 264.6 0.001 269.6 5.001 269.6 10.001 L 269.6 253.001 z ",
                                "pathFrom": "M 232.4 253.001 L 232.4 253.001 L 269.6 253.001 L 269.6 253.001 L 269.6 253.001 L 269.6 253.001 L 269.6 253.001 L 232.4 253.001 z",
                                "x": 288.4,
                                "y": 0,
                                "goalY": [],
                                "barXPosition": 232.4,
                                "barWidth": 39.2
                            },
                            {
                                "pathTo": "M 288.4 253.001 L 288.4 111.201 C 288.4 106.201 293.4 101.201 298.4 101.201 L 315.59999999999997 101.201 C 320.59999999999997 101.201 325.59999999999997 106.201 325.59999999999997 111.201 L 325.59999999999997 253.001 z ",
                                "pathFrom": "M 288.4 253.001 L 288.4 253.001 L 325.59999999999997 253.001 L 325.59999999999997 253.001 L 325.59999999999997 253.001 L 325.59999999999997 253.001 L 325.59999999999997 253.001 L 288.4 253.001 z",
                                "x": 344.4,
                                "y": 101.19999999999999,
                                "goalY": [],
                                "barXPosition": 288.4,
                                "barWidth": 39.2
                            }
                        ],
                        "lastActiveBarSerieIndex": 0,
                        "stackedSeriesTotals": [
                            10,
                            20,
                            30,
                            40,
                            50,
                            30
                        ],
                        "barHelpers": {},
                        "totalItems": 6,
                        "visibleI": 0,
                        "visibleItems": 6,
                        "zeroSerieses": [],
                        "isReversed": false
                    },
                    "annotations": {
                        "graphics": {},
                        "helpers": {},
                        "xAxisAnnotations": {
                            "helpers": {}
                        },
                        "yAxisAnnotations": {
                            "helpers": {}
                        },
                        "pointsAnnotations": {
                            "helpers": {}
                        },
                        "xDivision": 56
                    }
                }
            },
            {
                "id": "NXwI0",
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
                            "height": 335,
                            "width": 504,
                            "id": "NXwI0"
                        },
                        "plotOptions": {
                            "bar": {
                                "horizontal": false,
                                "columnWidth": "70%",
                                "barHeight": "70%",
                                "distributed": false,
                                "borderRadius": 10,
                                "borderRadiusApplication": "end",
                                "borderRadiusWhenStacked": "last",
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
                                "startAngle": 0,
                                "endAngle": 360,
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
                                "texts": [],
                                "images": [],
                                "shapes": [],
                                "position": "front"
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
                                "height": 335,
                                "parentHeightOffset": 15,
                                "redrawOnParentResize": true,
                                "redrawOnWindowResize": true,
                                "id": "NXwI0",
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
                                "width": 504,
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
                                    "borderRadiusApplication": "end",
                                    "borderRadiusWhenStacked": "last",
                                    "rangeBarOverlap": true,
                                    "rangeBarGroupRows": false,
                                    "hideZeroBarsWhenGrouped": false,
                                    "isDumbbell": false,
                                    "isFunnel": false,
                                    "isFunnel3d": true,
                                    "colors": {
                                        "backgroundBarOpacity": 1,
                                        "backgroundBarRadius": 0
                                    },
                                    "dataLabels": {
                                        "position": "top",
                                        "maxItems": 100,
                                        "hideOverflowingLabels": true,
                                        "orientation": "horizontal",
                                        "total": {
                                            "enabled": false,
                                            "offsetX": 0,
                                            "offsetY": 0,
                                            "style": {
                                                "color": "#373d3f",
                                                "fontSize": "12px",
                                                "fontWeight": 600
                                            }
                                        }
                                    }
                                },
                                "bubble": {
                                    "zScaling": true
                                },
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
                                "dashArray": 0,
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
                                    }
                                }
                            },
                            "tooltip": {
                                "enabled": true,
                                "shared": true,
                                "followCursor": false,
                                "intersect": false,
                                "inverseOrder": false,
                                "fillSeriesColor": false,
                                "theme": "light",
                                "cssClass": "",
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
                                "group": {
                                    "groups": [],
                                    "style": {
                                        "colors": [],
                                        "fontSize": "12px",
                                        "fontWeight": 400,
                                        "cssClass": ""
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
                            "chartID": "NXwI0",
                            "cuid": "fp8y5jvq",
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
                            "clientX": 1017,
                            "clientY": 549,
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
                                "group": {
                                    "groups": [],
                                    "style": {
                                        "colors": [],
                                        "fontSize": "12px",
                                        "fontWeight": 400,
                                        "cssClass": ""
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
                            "radialSize": 133.46341463414635,
                            "zoomEnabled": true,
                            "panEnabled": false,
                            "selectionEnabled": false,
                            "yaxis": null,
                            "mousedown": false,
                            "lastClientPosition": {},
                            "yValueDecimal": 0,
                            "total": 0,
                            "SVGNS": "http://www.w3.org/2000/svg",
                            "svgWidth": 504,
                            "svgHeight": 335,
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
                                    "_prevClass": "NXwI0"
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
                                "elLegendForeign": {
                                    "instance": {
                                        "_stroke": "#000000",
                                        "_event": null,
                                        "dom": {},
                                        "type": "foreignObject"
                                    }
                                },
                                "elLegendWrap": {},
                                "elGraphical": {
                                    "_stroke": "#000000",
                                    "_event": null,
                                    "dom": {},
                                    "node": {},
                                    "type": "g"
                                },
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
                                        222.33333333333331
                                    ],
                                    [
                                        112.25,
                                        135.33333333333331
                                    ],
                                    [
                                        224.5,
                                        251.33333333333331
                                    ],
                                    [
                                        336.75,
                                        29
                                    ],
                                    [
                                        449,
                                        116
                                    ]
                                ]
                            ],
                            "dataLabelsRects": [
                                [
                                    {
                                        "x": 0,
                                        "y": 224.33333333333331,
                                        "width": 0,
                                        "height": 0
                                    },
                                    {
                                        "x": 112.25,
                                        "y": 137.33333333333331,
                                        "width": 0,
                                        "height": 0
                                    },
                                    {
                                        "x": 224.5,
                                        "y": 253.33333333333331,
                                        "width": 0,
                                        "height": 0
                                    },
                                    {
                                        "x": 336.75,
                                        "y": 31,
                                        "width": 0,
                                        "height": 0
                                    },
                                    {
                                        "x": 449,
                                        "y": 118,
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
                            "gridWidth": 449,
                            "gridHeight": 290,
                            "rotateXLabels": false,
                            "defaultLabels": false,
                            "yLabelFormatters": [
                                null
                            ],
                            "LINE_HEIGHT_RATIO": 1.618,
                            "xAxisLabelsHeight": 10,
                            "xAxisGroupLabelsHeight": 10,
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
                                "intersect": {
                                    "isVerticalGroupedRangeBar": false
                                },
                                "axesTooltip": {},
                                "showOnIntersect": false,
                                "showTooltipTitle": true,
                                "fixedTooltip": false,
                                "xaxisTooltip": {},
                                "yaxisTTEls": null,
                                "isBarShared": true,
                                "lastHoverTime": 1690365032218,
                                "xyRatios": {
                                    "yRatio": [
                                        0.10344827586206896
                                    ],
                                    "invertedYRatio": 0.066815144766147,
                                    "zRatio": null,
                                    "xRatio": 0.008908685968819599,
                                    "initialXRatio": 0.008908685968819599,
                                    "invertedXRatio": 0.013793103448275862,
                                    "baseLineInvertedY": -359.2,
                                    "baseLineY": [
                                        -232
                                    ],
                                    "baseLineX": 112.25
                                },
                                "isXAxisTooltipEnabled": true,
                                "yaxisTooltips": [
                                    false
                                ],
                                "allTooltipSeriesGroups": [],
                                "xaxisOffY": 291,
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
                                    112.25,
                                    224.5,
                                    336.75,
                                    449,
                                    561.25
                                ],
                                "dataPointsDividedHeight": 58,
                                "dataPointsDividedWidth": 89.8,
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
                            "seriesRange": [],
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
                                    112.25,
                                    224.5,
                                    336.75,
                                    449
                                ]
                            ],
                            "seriesYvalues": [
                                [
                                    222.33333333333331,
                                    135.33333333333331,
                                    251.33333333333331,
                                    29,
                                    116
                                ]
                            ],
                            "hasXaxisGroups": false,
                            "groups": [],
                            "seriesGroups": [],
                            "categoryLabels": [
                                "Item 1",
                                "Item 2",
                                "Item 3",
                                "Item 4",
                                "Item 5"
                            ],
                            "selectionResizeTimer": null,
                            "isXNumeric": true,
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
                            "chartClass": ".apexchartsNXwI0",
                            "comboBarCount": 0,
                            "isRangeBar": false,
                            "xAxisHeight": 10,
                            "hasNegs": true,
                            "yLogRatio": [
                                0.10344827586206896
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
                        "exportToCSV",
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
                        },
                        "elGridBorders": {
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
                    "tooltip": {
                        "tooltipUtil": {},
                        "tooltipLabels": {
                            "tooltipUtil": {}
                        },
                        "tooltipPosition": {},
                        "marker": {
                            "tooltipPosition": {}
                        },
                        "intersect": {
                            "isVerticalGroupedRangeBar": false
                        },
                        "axesTooltip": {},
                        "showOnIntersect": false,
                        "showTooltipTitle": true,
                        "fixedTooltip": false,
                        "xaxisTooltip": null,
                        "yaxisTTEls": null,
                        "isBarShared": true,
                        "lastHoverTime": 1690365032218
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
                                        "maxX": 449,
                                        "maxY": 290
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
                        "defaultSize": 290,
                        "centerY": 145,
                        "centerX": 224.5,
                        "fullAngle": 360,
                        "initialAngle": 0,
                        "donutSize": 86.75121951219514,
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
                        "isVerticalGroupedRangeBar": 0,
                        "isFunnel": false,
                        "xRatio": 0.008908685968819599,
                        "initialXRatio": 0.008908685968819599,
                        "invertedXRatio": 0.013793103448275862,
                        "invertedYRatio": 0.066815144766147,
                        "baseLineInvertedY": -359.2,
                        "yaxisIndex": 0,
                        "seriesLen": 0,
                        "pathArr": [],
                        "lastActiveBarSerieIndex": 0,
                        "stackedSeriesTotals": [
                            31,
                            40,
                            28,
                            51,
                            42
                        ],
                        "barHelpers": {}
                    },
                    "annotations": {
                        "graphics": {},
                        "helpers": {},
                        "xAxisAnnotations": {
                            "helpers": {}
                        },
                        "yAxisAnnotations": {
                            "helpers": {}
                        },
                        "pointsAnnotations": {
                            "helpers": {}
                        },
                        "xDivision": 89.8
                    }
                }
            },
            {
                "id": "3bqOz",
                "chart": {
                    "opts": {
                        "series": [
                            {
                                "name": "Line",
                                "data": [
                                    {
                                        "x": "Mon",
                                        "y": 31
                                    },
                                    {
                                        "x": "Tue",
                                        "y": 40
                                    },
                                    {
                                        "x": "Wed",
                                        "y": 28
                                    },
                                    {
                                        "x": "Thus",
                                        "y": 51
                                    },
                                    {
                                        "x": "Fri",
                                        "y": 42
                                    },
                                    {
                                        "x": "Sat",
                                        "y": 10
                                    },
                                    {
                                        "x": "Sun",
                                        "y": "20"
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
                            "height": 335,
                            "width": 504,
                            "id": "3bqOz"
                        },
                        "plotOptions": {
                            "bar": {
                                "horizontal": false,
                                "columnWidth": "70%",
                                "barHeight": "70%",
                                "distributed": false,
                                "borderRadius": 10,
                                "borderRadiusApplication": "end",
                                "borderRadiusWhenStacked": "last",
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
                                "startAngle": 0,
                                "endAngle": 360,
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
                                "texts": [],
                                "images": [],
                                "shapes": [],
                                "position": "front"
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
                                "height": 335,
                                "parentHeightOffset": 15,
                                "redrawOnParentResize": true,
                                "redrawOnWindowResize": true,
                                "id": "3bqOz",
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
                                "width": 504,
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
                                    "borderRadiusApplication": "end",
                                    "borderRadiusWhenStacked": "last",
                                    "rangeBarOverlap": true,
                                    "rangeBarGroupRows": false,
                                    "hideZeroBarsWhenGrouped": false,
                                    "isDumbbell": false,
                                    "isFunnel": false,
                                    "isFunnel3d": true,
                                    "colors": {
                                        "backgroundBarOpacity": 1,
                                        "backgroundBarRadius": 0
                                    },
                                    "dataLabels": {
                                        "position": "top",
                                        "maxItems": 100,
                                        "hideOverflowingLabels": true,
                                        "orientation": "horizontal",
                                        "total": {
                                            "enabled": false,
                                            "offsetX": 0,
                                            "offsetY": 0,
                                            "style": {
                                                "color": "#373d3f",
                                                "fontSize": "12px",
                                                "fontWeight": 600
                                            }
                                        }
                                    }
                                },
                                "bubble": {
                                    "zScaling": true
                                },
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
                            "series": [
                                {
                                    "name": "Line"
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
                                "curve": "straight",
                                "lineCap": "butt",
                                "width": 4,
                                "dashArray": 0,
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
                                    }
                                }
                            },
                            "tooltip": {
                                "enabled": true,
                                "shared": true,
                                "followCursor": false,
                                "intersect": false,
                                "inverseOrder": false,
                                "fillSeriesColor": false,
                                "theme": "light",
                                "cssClass": "",
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
                                "group": {
                                    "groups": [],
                                    "style": {
                                        "colors": [],
                                        "fontSize": "12px",
                                        "fontWeight": 400,
                                        "cssClass": ""
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
                                "palette": "palette1",
                                "monochrome": {
                                    "enabled": false,
                                    "color": "#008FFB",
                                    "shadeTo": "light",
                                    "shadeIntensity": 0.65
                                }
                            }
                        },
                        "globals": {
                            "chartID": "3bqOz",
                            "cuid": "3qim0dt9",
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
                                "#008FFB",
                                "#00E396",
                                "#FEB019",
                                "#FF4560",
                                "#775DD0"
                            ],
                            "clientX": 971,
                            "clientY": 650,
                            "fill": {
                                "colors": [
                                    "#008FFB",
                                    "#00E396",
                                    "#FEB019",
                                    "#FF4560",
                                    "#775DD0",
                                    "#008FFB",
                                    "#00E396",
                                    "#FEB019",
                                    "#FF4560",
                                    "#775DD0",
                                    "#008FFB",
                                    "#00E396",
                                    "#FEB019",
                                    "#FF4560",
                                    "#775DD0",
                                    "#008FFB",
                                    "#00E396",
                                    "#FEB019",
                                    "#FF4560",
                                    "#775DD0",
                                    "#008FFB",
                                    "#00E396",
                                    "#FEB019",
                                    "#FF4560",
                                    "#775DD0",
                                    "#008FFB",
                                    "#00E396",
                                    "#FEB019",
                                    "#FF4560",
                                    "#775DD0",
                                    "#008FFB",
                                    "#00E396",
                                    "#FEB019",
                                    "#FF4560",
                                    "#775DD0",
                                    "#008FFB",
                                    "#00E396",
                                    "#FEB019",
                                    "#FF4560",
                                    "#775DD0",
                                    "#008FFB",
                                    "#00E396",
                                    "#FEB019",
                                    "#FF4560",
                                    "#775DD0",
                                    "#008FFB",
                                    "#00E396",
                                    "#FEB019",
                                    "#FF4560",
                                    "#775DD0"
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
                                            "x": "Mon",
                                            "y": 31
                                        },
                                        {
                                            "x": "Tue",
                                            "y": 40
                                        },
                                        {
                                            "x": "Wed",
                                            "y": 28
                                        },
                                        {
                                            "x": "Thus",
                                            "y": 51
                                        },
                                        {
                                            "x": "Fri",
                                            "y": 42
                                        },
                                        {
                                            "x": "Sat",
                                            "y": 10
                                        },
                                        {
                                            "x": "Sun",
                                            "y": "20"
                                        }
                                    ]
                                }
                            ],
                            "lastXAxis": [],
                            "lastYAxis": [],
                            "columnSeries": null,
                            "labels": [
                                1,
                                2,
                                3,
                                4,
                                5,
                                6,
                                7
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
                            "radialSize": 133.46341463414635,
                            "zoomEnabled": true,
                            "panEnabled": false,
                            "selectionEnabled": false,
                            "yaxis": null,
                            "mousedown": false,
                            "lastClientPosition": {},
                            "yValueDecimal": 0,
                            "total": 0,
                            "SVGNS": "http://www.w3.org/2000/svg",
                            "svgWidth": 504,
                            "svgHeight": 335,
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
                                    "_prevClass": "3bqOz"
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
                                "elLegendForeign": {
                                    "instance": {
                                        "_stroke": "#000000",
                                        "_event": null,
                                        "dom": {},
                                        "type": "foreignObject"
                                    }
                                },
                                "elLegendWrap": {},
                                "elGraphical": {
                                    "_stroke": "#000000",
                                    "_event": null,
                                    "dom": {},
                                    "node": {},
                                    "type": "g"
                                },
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
                            "previousPaths": [
                                {
                                    "type": "line",
                                    "paths": [
                                        {
                                            "d": "M 0 155.06184000000002 L 72.7734375 106.93920000000003 L 145.546875 171.10272000000003 L 218.3203125 48.12264000000005 L 291.09375 96.24528000000001 L 363.8671875 267.348 L 436.640625 213.87840000000003"
                                        }
                                    ],
                                    "realIndex": "0"
                                }
                            ],
                            "allSeriesHasEqualX": true,
                            "pointsArray": [
                                [
                                    [
                                        0,
                                        168.20000000000002
                                    ],
                                    [
                                        74.83333333333333,
                                        116.00000000000003
                                    ],
                                    [
                                        149.66666666666666,
                                        185.60000000000002
                                    ],
                                    [
                                        224.5,
                                        52.200000000000045
                                    ],
                                    [
                                        299.3333333333333,
                                        104.4
                                    ],
                                    [
                                        374.1666666666667,
                                        290
                                    ],
                                    [
                                        449,
                                        232
                                    ]
                                ]
                            ],
                            "dataLabelsRects": [
                                [
                                    {
                                        "x": 0,
                                        "y": 170.20000000000002,
                                        "width": 0,
                                        "height": 0
                                    },
                                    {
                                        "x": 74.83333333333333,
                                        "y": 118.00000000000003,
                                        "width": 0,
                                        "height": 0
                                    },
                                    {
                                        "x": 149.66666666666666,
                                        "y": 187.60000000000002,
                                        "width": 0,
                                        "height": 0
                                    },
                                    {
                                        "x": 224.5,
                                        "y": 54.200000000000045,
                                        "width": 0,
                                        "height": 0
                                    },
                                    {
                                        "x": 299.3333333333333,
                                        "y": 106.4,
                                        "width": 0,
                                        "height": 0
                                    },
                                    {
                                        "x": 374.1666666666667,
                                        "y": 290,
                                        "width": 0,
                                        "height": 0
                                    },
                                    {
                                        "x": 449,
                                        "y": 234,
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
                                    4,
                                    0,
                                    1,
                                    2,
                                    3,
                                    4,
                                    0,
                                    1,
                                    2,
                                    3,
                                    4,
                                    0,
                                    1,
                                    2,
                                    3,
                                    4,
                                    0,
                                    1,
                                    2,
                                    3,
                                    4,
                                    0,
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    0,
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    0,
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    6,
                                    0,
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    6,
                                    0,
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    6,
                                    0,
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    6,
                                    0,
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ]
                            ],
                            "hasNullValues": false,
                            "zoomed": false,
                            "gridWidth": 449,
                            "gridHeight": 290,
                            "rotateXLabels": false,
                            "defaultLabels": false,
                            "yLabelFormatters": [
                                null
                            ],
                            "LINE_HEIGHT_RATIO": 1.618,
                            "xAxisLabelsHeight": 10,
                            "xAxisGroupLabelsHeight": 10,
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
                                "intersect": {
                                    "isVerticalGroupedRangeBar": false
                                },
                                "axesTooltip": {},
                                "showOnIntersect": false,
                                "showTooltipTitle": true,
                                "fixedTooltip": false,
                                "xaxisTooltip": {},
                                "yaxisTTEls": null,
                                "isBarShared": true,
                                "lastHoverTime": 1690367803109,
                                "xyRatios": {
                                    "yRatio": [
                                        0.1724137931034483
                                    ],
                                    "invertedYRatio": 0.111358574610245,
                                    "zRatio": null,
                                    "xRatio": 0.013363028953229399,
                                    "initialXRatio": 0.013363028953229399,
                                    "invertedXRatio": 0.020689655172413793,
                                    "baseLineInvertedY": -89.8,
                                    "baseLineY": [
                                        -57.99999999999999
                                    ],
                                    "baseLineX": 74.83333333333333
                                },
                                "isXAxisTooltipEnabled": true,
                                "yaxisTooltips": [
                                    false
                                ],
                                "allTooltipSeriesGroups": [],
                                "xaxisOffY": 291,
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
                                    74.83333333333333,
                                    149.66666666666666,
                                    224.5,
                                    299.3333333333333,
                                    374.16666666666663,
                                    448.99999999999994,
                                    523.8333333333333
                                ],
                                "dataPointsDividedHeight": 41.42857142857143,
                                "dataPointsDividedWidth": 64.14285714285714,
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
                                    42,
                                    10,
                                    20
                                ]
                            ],
                            "seriesCandleO": [],
                            "seriesCandleH": [],
                            "seriesCandleM": [],
                            "seriesCandleL": [],
                            "seriesCandleC": [],
                            "seriesRangeStart": [],
                            "seriesRangeEnd": [],
                            "seriesRange": [],
                            "seriesPercent": [
                                [
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
                                    null
                                ]
                            ],
                            "seriesX": [
                                [
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    6,
                                    7
                                ]
                            ],
                            "seriesZ": [
                                []
                            ],
                            "seriesNames": [
                                "Line"
                            ],
                            "seriesTotals": [
                                222
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
                                42,
                                10,
                                20
                            ],
                            "seriesXvalues": [
                                [
                                    0,
                                    74.83333333333333,
                                    149.66666666666666,
                                    224.5,
                                    299.3333333333333,
                                    374.1666666666667,
                                    449
                                ]
                            ],
                            "seriesYvalues": [
                                [
                                    168.20000000000002,
                                    116.00000000000003,
                                    185.60000000000002,
                                    52.200000000000045,
                                    104.4,
                                    290,
                                    232
                                ]
                            ],
                            "hasXaxisGroups": false,
                            "groups": [],
                            "seriesGroups": [],
                            "categoryLabels": [
                                "Mon",
                                "Tue",
                                "Wed",
                                "Thus",
                                "Fri",
                                "Sat",
                                "Sun"
                            ],
                            "selectionResizeTimer": null,
                            "isXNumeric": true,
                            "isMultiLineX": false,
                            "isMultipleYAxis": false,
                            "maxY": 60,
                            "minY": 10,
                            "minYArr": [
                                10
                            ],
                            "maxYArr": [
                                60
                            ],
                            "maxX": 7,
                            "minX": 1,
                            "initialMaxX": 7,
                            "initialMinX": 1,
                            "maxDate": 0,
                            "minDate": 1.7976931348623157e+308,
                            "minZ": 1.7976931348623157e+308,
                            "maxZ": -1.7976931348623157e+308,
                            "minXDiff": 1,
                            "yAxisScale": [
                                {
                                    "result": [
                                        10,
                                        20,
                                        30,
                                        40,
                                        50,
                                        60
                                    ],
                                    "niceMin": 10,
                                    "niceMax": 60
                                }
                            ],
                            "xAxisScale": {
                                "result": [
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    6,
                                    7
                                ],
                                "niceMin": 1,
                                "niceMax": 7
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
                            "xRange": 6,
                            "yRange": [
                                50
                            ],
                            "zRange": null,
                            "dataPoints": 7,
                            "xTickAmount": 5,
                            "xyCharts": true,
                            "isBarHorizontal": false,
                            "chartClass": ".apexcharts3bqOz",
                            "comboBarCount": 0,
                            "isRangeBar": false,
                            "xAxisHeight": 10,
                            "hasNegs": true,
                            "yLogRatio": [
                                0.1724137931034483
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
                        "exportToCSV",
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
                            "Mon",
                            "Tue",
                            "Wed",
                            "Thus",
                            "Fri",
                            "Sat",
                            "Sun"
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
                            5,
                            6,
                            7
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
                        },
                        "elGridBorders": {
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
                        "maxX": 7
                    },
                    "tooltip": {
                        "tooltipUtil": {},
                        "tooltipLabels": {
                            "tooltipUtil": {}
                        },
                        "tooltipPosition": {},
                        "marker": {
                            "tooltipPosition": {}
                        },
                        "intersect": {
                            "isVerticalGroupedRangeBar": false
                        },
                        "axesTooltip": {},
                        "showOnIntersect": false,
                        "showTooltipTitle": true,
                        "fixedTooltip": false,
                        "xaxisTooltip": null,
                        "yaxisTTEls": null,
                        "isBarShared": true,
                        "lastHoverTime": 1690367803109
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
                        "maxX": 7,
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
                                        "maxX": 449,
                                        "maxY": 290
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
                        "defaultSize": 290,
                        "centerY": 145,
                        "centerX": 224.5,
                        "fullAngle": 360,
                        "initialAngle": 0,
                        "donutSize": 86.75121951219514,
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
                        "isVerticalGroupedRangeBar": 0,
                        "isFunnel": false,
                        "xRatio": 0.013363028953229399,
                        "initialXRatio": 0.013363028953229399,
                        "invertedXRatio": 0.020689655172413793,
                        "invertedYRatio": 0.111358574610245,
                        "baseLineInvertedY": -89.8,
                        "yaxisIndex": 0,
                        "seriesLen": 0,
                        "pathArr": [],
                        "lastActiveBarSerieIndex": 0,
                        "stackedSeriesTotals": [
                            31,
                            40,
                            28,
                            51,
                            42,
                            10,
                            20
                        ],
                        "barHelpers": {}
                    },
                    "annotations": {
                        "graphics": {},
                        "helpers": {},
                        "xAxisAnnotations": {
                            "helpers": {}
                        },
                        "yAxisAnnotations": {
                            "helpers": {}
                        },
                        "pointsAnnotations": {
                            "helpers": {}
                        },
                        "xDivision": 64.14285714285714
                    }
                }
            },
            {
                "id": "Fh5Sn",
                "chart": {
                    "opts": {
                        "series": [
                            {
                                "name": "Bar"
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
                            "id": "Fh5Sn"
                        },
                        "plotOptions": {
                            "bar": {
                                "horizontal": true,
                                "columnWidth": "70%",
                                "barHeight": "70%",
                                "distributed": false,
                                "borderRadius": 10,
                                "borderRadiusApplication": "end",
                                "borderRadiusWhenStacked": "last",
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
                                "startAngle": 0,
                                "endAngle": 360,
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
                        "globals": {
                            "chartID": "Fh5Sn",
                            "cuid": "ukagace6k",
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
                                "#008FFB",
                                "#00E396",
                                "#FEB019",
                                "#FF4560",
                                "#775DD0"
                            ],
                            "clientX": 1081,
                            "clientY": 427,
                            "fill": {
                                "colors": [
                                    "#008FFB",
                                    "#00E396",
                                    "#FEB019",
                                    "#FF4560",
                                    "#775DD0"
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
                            "initialConfig": {
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
                                "series": [
                                    {
                                        "name": "Bar",
                                        "data": [
                                            {
                                                "x": "Mon",
                                                "y": 10
                                            },
                                            {
                                                "x": "Tue",
                                                "y": 20
                                            },
                                            {
                                                "x": "Wed",
                                                "y": 30
                                            },
                                            {
                                                "x": "Thus",
                                                "y": 40
                                            },
                                            {
                                                "x": "Fri",
                                                "y": 10
                                            },
                                            {
                                                "x": "Sat",
                                                "y": "15"
                                            },
                                            {
                                                "x": "Sun",
                                                "y": "60"
                                            }
                                        ]
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
                                "yaxis": [
                                    null
                                ],
                                "theme": {
                                    "mode": "light",
                                    "palette": "palette1",
                                    "monochrome": {
                                        "enabled": false,
                                        "color": "#008FFB",
                                        "shadeTo": "light",
                                        "shadeIntensity": 0.65
                                    }
                                }
                            },
                            "initialSeries": [
                                {
                                    "name": "Bar",
                                    "data": [
                                        {
                                            "x": "Mon",
                                            "y": 10
                                        },
                                        {
                                            "x": "Tue",
                                            "y": 20
                                        },
                                        {
                                            "x": "Wed",
                                            "y": 30
                                        },
                                        {
                                            "x": "Thus",
                                            "y": 40
                                        },
                                        {
                                            "x": "Fri",
                                            "y": 10
                                        },
                                        {
                                            "x": "Sat",
                                            "y": "15"
                                        },
                                        {
                                            "x": "Sun",
                                            "y": "60"
                                        }
                                    ]
                                }
                            ],
                            "lastXAxis": [],
                            "lastYAxis": [],
                            "columnSeries": null,
                            "labels": [
                                "Mon",
                                "Tue",
                                "Wed",
                                "Thus",
                                "Fri",
                                "Sat",
                                "Sun"
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
                            "radialSize": 73.19414634146342,
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
                                    "_prevClass": "Fh5Sn"
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
                                "elLegendForeign": {
                                    "instance": {
                                        "_stroke": "#000000",
                                        "_event": null,
                                        "dom": {},
                                        "type": "foreignObject"
                                    }
                                },
                                "elLegendWrap": {},
                                "elGraphical": {
                                    "_stroke": "#000000",
                                    "_event": null,
                                    "dom": {},
                                    "node": {},
                                    "type": "g"
                                },
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
                                    }
                                },
                                {
                                    "el": {
                                        "instance": {
                                            "_stroke": "#000000",
                                            "_event": null,
                                            "dom": {},
                                            "type": "g"
                                        }
                                    }
                                },
                                {
                                    "el": {
                                        "instance": {
                                            "_stroke": "#000000",
                                            "_event": null,
                                            "dom": {},
                                            "type": "g"
                                        }
                                    }
                                },
                                {
                                    "el": {
                                        "instance": {
                                            "_stroke": "#000000",
                                            "_event": null,
                                            "dom": {},
                                            "type": "g"
                                        }
                                    }
                                },
                                {
                                    "el": {
                                        "instance": {
                                            "_stroke": "#000000",
                                            "_event": null,
                                            "dom": {},
                                            "type": "g"
                                        }
                                    }
                                },
                                {
                                    "el": {
                                        "instance": {
                                            "_stroke": "#000000",
                                            "_event": null,
                                            "dom": {},
                                            "type": "g"
                                        }
                                    }
                                },
                                {
                                    "el": {
                                        "instance": {
                                            "_stroke": "#000000",
                                            "_event": null,
                                            "dom": {},
                                            "type": "g"
                                        }
                                    }
                                },
                                {
                                    "el": {
                                        "instance": {
                                            "_stroke": "#000000",
                                            "_event": null,
                                            "dom": {},
                                            "type": "g"
                                        }
                                    }
                                },
                                {
                                    "el": {
                                        "instance": {
                                            "_stroke": "#000000",
                                            "_event": null,
                                            "dom": {},
                                            "type": "g"
                                        }
                                    }
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
                            "dataChanged": true,
                            "previousPaths": [
                                {
                                    "type": "bar",
                                    "paths": [
                                        {
                                            "d": "M 7.128013392857142 162.34900000000002 L 7.128013392857142 131.762 C 7.128013392857142 126.762 12.128013392857142 121.76200000000001 17.12801339285714 121.76200000000001 L 28.392075892857143 121.76200000000001 C 33.39207589285714 121.76200000000001 38.39207589285714 126.762 38.39207589285714 131.762 L 38.39207589285714 162.34900000000002 z "
                                        },
                                        {
                                            "d": "M 54.648102678571426 162.34900000000002 L 54.648102678571426 91.17500000000001 C 54.648102678571426 86.17500000000001 59.64810267857143 81.17500000000001 64.64810267857143 81.17500000000001 L 75.91216517857143 81.17500000000001 C 80.91216517857143 81.17500000000001 85.91216517857143 86.17500000000001 85.91216517857143 91.17500000000001 L 85.91216517857143 162.34900000000002 z "
                                        },
                                        {
                                            "d": "M 102.16819196428571 162.34900000000002 L 102.16819196428571 50.588 C 102.16819196428571 45.588 107.16819196428571 40.588 112.16819196428571 40.588 L 123.4322544642857 40.588 C 128.4322544642857 40.588 133.4322544642857 45.588 133.4322544642857 50.588 L 133.4322544642857 162.34900000000002 z "
                                        },
                                        {
                                            "d": "M 149.68828125 162.34900000000002 L 149.68828125 10.001 C 149.68828125 5.0009999999999994 154.68828125 0.001 159.68828125 0.001 L 170.95234374999998 0.001 C 175.95234374999998 0.001 180.95234374999998 5.001 180.95234374999998 10.001 L 180.95234374999998 162.34900000000002 z "
                                        },
                                        {
                                            "d": "M 197.20837053571427 162.34900000000002 L 197.20837053571427 131.762 C 197.20837053571427 126.762 202.20837053571427 121.76200000000001 207.20837053571427 121.76200000000001 L 218.47243303571426 121.76200000000001 C 223.47243303571426 121.76200000000001 228.47243303571426 126.762 228.47243303571426 131.762 L 228.47243303571426 162.34900000000002 z "
                                        },
                                        {
                                            "d": "M 244.72845982142854 162.34900000000002 L 244.72845982142854 111.4685 C 244.72845982142854 106.4685 249.72845982142854 101.4685 254.72845982142854 101.4685 L 265.99252232142857 101.4685 C 270.99252232142857 101.4685 275.99252232142857 106.4685 275.99252232142857 111.4685 L 275.99252232142857 162.34900000000002 z "
                                        },
                                        {
                                            "d": "M 292.2485491071428 162.34900000000002 L 292.2485491071428 131.762 C 292.2485491071428 126.762 297.2485491071428 121.76200000000001 302.2485491071428 121.76200000000001 L 313.51261160714284 121.76200000000001 C 318.51261160714284 121.76200000000001 323.51261160714284 126.762 323.51261160714284 131.762 L 323.51261160714284 162.34900000000002 z "
                                        }
                                    ],
                                    "realIndex": "0"
                                }
                            ],
                            "allSeriesHasEqualX": true,
                            "pointsArray": [],
                            "dataLabelsRects": [
                                [
                                    {
                                        "x": 20.760044642857142,
                                        "y": 146.29000000000002,
                                        "width": 13.73828125,
                                        "height": 14
                                    },
                                    {
                                        "x": 68.28013392857143,
                                        "y": 119.232,
                                        "width": 13.73828125,
                                        "height": 14
                                    },
                                    {
                                        "x": 115.80022321428571,
                                        "y": 92.174,
                                        "width": 13.73828125,
                                        "height": 14
                                    },
                                    {
                                        "x": 163.3203125,
                                        "y": 65.116,
                                        "width": 13.73828125,
                                        "height": 14
                                    },
                                    {
                                        "x": 210.84040178571428,
                                        "y": 146.29000000000002,
                                        "width": 13.73828125,
                                        "height": 14
                                    },
                                    {
                                        "x": 258.36049107142856,
                                        "y": 132.76100000000002,
                                        "width": 13.73828125,
                                        "height": 14
                                    },
                                    {
                                        "x": 305.88058035714283,
                                        "y": 11,
                                        "width": 13.73828125,
                                        "height": 14
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
                                    3,
                                    0,
                                    1,
                                    2,
                                    3,
                                    0,
                                    1,
                                    2,
                                    3,
                                    0,
                                    1,
                                    2,
                                    3,
                                    0,
                                    1,
                                    2,
                                    3,
                                    0,
                                    1,
                                    2,
                                    3,
                                    0,
                                    1,
                                    2,
                                    3,
                                    0,
                                    1,
                                    2,
                                    3,
                                    0,
                                    1,
                                    2,
                                    3,
                                    4,
                                    0,
                                    1,
                                    2,
                                    3,
                                    4,
                                    0,
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    0,
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    0,
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    6,
                                    0,
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    6,
                                    0,
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    6,
                                    0,
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ]
                            ],
                            "hasNullValues": false,
                            "zoomed": false,
                            "gridWidth": 332.640625,
                            "gridHeight": 162.348,
                            "rotateXLabels": false,
                            "defaultLabels": false,
                            "yLabelFormatters": [
                                null
                            ],
                            "LINE_HEIGHT_RATIO": 1.618,
                            "xAxisLabelsHeight": 32.652,
                            "xAxisGroupLabelsHeight": 18.652,
                            "xAxisLabelsWidth": 26.578125,
                            "yAxisLabelsWidth": 0,
                            "scaleX": 1,
                            "scaleY": 1,
                            "translateX": 42.359375,
                            "translateY": 30,
                            "translateYAxisX": [
                                9.359375
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
                                "intersect": {
                                    "isVerticalGroupedRangeBar": false
                                },
                                "axesTooltip": {},
                                "showOnIntersect": true,
                                "showTooltipTitle": true,
                                "fixedTooltip": false,
                                "xaxisTooltip": null,
                                "yaxisTTEls": null,
                                "isBarShared": false,
                                "lastHoverTime": 1690368397095,
                                "xyRatios": {
                                    "yRatio": [
                                        0.36957646537068517
                                    ],
                                    "invertedYRatio": 0.1803748414674245,
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
                                "xaxisOffY": 163.348,
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
                                    47.520089285714285,
                                    95.04017857142857,
                                    142.56026785714286,
                                    190.08035714285714,
                                    237.60044642857142,
                                    285.1205357142857,
                                    332.640625
                                ],
                                "dataPointsDividedHeight": 23.19257142857143,
                                "dataPointsDividedWidth": 47.520089285714285,
                                "tooltipTitle": {},
                                "legendLabels": {},
                                "ttItems": [
                                    {}
                                ],
                                "seriesBound": {
                                    "x": 1030.359375,
                                    "y": 378,
                                    "width": 332.640625,
                                    "height": 161.3480224609375,
                                    "top": 378,
                                    "right": 1363,
                                    "bottom": 539.3480224609375,
                                    "left": 1030.359375
                                }
                            },
                            "series": [
                                [
                                    10,
                                    20,
                                    30,
                                    40,
                                    10,
                                    15,
                                    60
                                ]
                            ],
                            "seriesCandleO": [],
                            "seriesCandleH": [],
                            "seriesCandleM": [],
                            "seriesCandleL": [],
                            "seriesCandleC": [],
                            "seriesRangeStart": [],
                            "seriesRangeEnd": [],
                            "seriesRange": [],
                            "seriesPercent": [
                                [
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
                                185
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
                                40,
                                10,
                                15,
                                60
                            ],
                            "seriesXvalues": [
                                [
                                    23.760044642857142,
                                    118.80022321428571,
                                    166.3203125,
                                    213.84040178571428,
                                    261.36049107142856,
                                    308.88058035714283,
                                    356.4006696428571
                                ]
                            ],
                            "seriesYvalues": [
                                [
                                    135.29000000000002,
                                    108.232,
                                    81.174,
                                    54.116,
                                    135.29000000000002,
                                    121.76100000000001,
                                    0
                                ]
                            ],
                            "hasXaxisGroups": false,
                            "groups": [],
                            "seriesGroups": [],
                            "categoryLabels": [],
                            "selectionResizeTimer": null,
                            "isXNumeric": false,
                            "isMultiLineX": false,
                            "isMultipleYAxis": false,
                            "maxY": 60,
                            "minY": 0,
                            "minYArr": [
                                0
                            ],
                            "maxYArr": [
                                60
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
                                        60
                                    ],
                                    "niceMin": 0,
                                    "niceMax": 60
                                }
                            ],
                            "xAxisScale": null,
                            "xAxisTicksPositions": [],
                            "yLabelsCoords": [
                                {
                                    "width": 22.359375,
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
                                60
                            ],
                            "zRange": null,
                            "dataPoints": 7,
                            "xTickAmount": 0,
                            "xyCharts": true,
                            "isBarHorizontal": false,
                            "chartClass": ".apexchartsFh5Sn",
                            "comboBarCount": 0,
                            "isRangeBar": false,
                            "xAxisHeight": 32.652,
                            "yLogRatio": [
                                0.36957646537068517
                            ],
                            "logYRange": [
                                null
                            ],
                            "disableZoomIn": true,
                            "disableZoomOut": false
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
                        "exportToCSV",
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
                            "Mon",
                            "Tue",
                            "Wed",
                            "Thus",
                            "Fri",
                            "Sat",
                            "Sun"
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
                        },
                        "elGridBorders": {
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
                        "ev": {},
                        "selectedClass": "apexcharts-selected",
                        "minX": 1.7976931348623157e+308,
                        "maxX": -1.7976931348623157e+308
                    },
                    "tooltip": {
                        "tooltipUtil": {},
                        "tooltipLabels": {
                            "tooltipUtil": {}
                        },
                        "tooltipPosition": {},
                        "marker": {
                            "tooltipPosition": {}
                        },
                        "intersect": {
                            "isVerticalGroupedRangeBar": false
                        },
                        "axesTooltip": {},
                        "showOnIntersect": true,
                        "showTooltipTitle": true,
                        "fixedTooltip": false,
                        "xaxisTooltip": null,
                        "yaxisTTEls": null,
                        "isBarShared": false,
                        "lastHoverTime": 1690368397095
                    },
                    "dimensions": {
                        "lgRect": {
                            "x": 988,
                            "y": 347,
                            "height": 0,
                            "width": 0
                        },
                        "yAxisWidth": 27.359375,
                        "yAxisWidthLeft": 27.359375,
                        "yAxisWidthRight": 0,
                        "xAxisHeight": 32.652,
                        "isSparkline": false,
                        "dimHelpers": {},
                        "dimYAxis": {},
                        "dimXAxis": {},
                        "dimGrid": {},
                        "lgWidthForSideLegends": 0,
                        "xPadRight": 0,
                        "xPadLeft": 0,
                        "xAxisWidth": 26.578125
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
                        "defaultSize": 162.348,
                        "centerY": 81.174,
                        "centerX": 166.3203125,
                        "fullAngle": 360,
                        "initialAngle": 0,
                        "donutSize": 47.57619512195122,
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
                        "isVerticalGroupedRangeBar": 0,
                        "isFunnel": false,
                        "xRatio": null,
                        "initialXRatio": null,
                        "invertedXRatio": null,
                        "invertedYRatio": 0.1803748414674245,
                        "baseLineInvertedY": 0.1,
                        "yaxisIndex": 0,
                        "seriesLen": 0,
                        "pathArr": [],
                        "lastActiveBarSerieIndex": 0,
                        "stackedSeriesTotals": [
                            10,
                            20,
                            30,
                            40,
                            10,
                            15,
                            60
                        ],
                        "barHelpers": {}
                    },
                    "bar": {
                        "isHorizontal": false,
                        "strokeWidth": 2,
                        "isNullValue": false,
                        "isRangeBar": 0,
                        "isVerticalGroupedRangeBar": 0,
                        "isFunnel": false,
                        "xRatio": null,
                        "initialXRatio": null,
                        "invertedXRatio": null,
                        "invertedYRatio": 0.1803748414674245,
                        "baseLineInvertedY": 0.1,
                        "yaxisIndex": 0,
                        "seriesLen": 1,
                        "pathArr": [
                            {
                                "pathTo": "M 7.128013392857142 162.34900000000002 L 7.128013392857142 145.29100000000003 C 7.128013392857142 140.29100000000003 12.128013392857142 135.29100000000003 17.12801339285714 135.29100000000003 L 28.392075892857143 135.29100000000003 C 33.39207589285714 135.29100000000003 38.39207589285714 140.29100000000003 38.39207589285714 145.29100000000003 L 38.39207589285714 162.34900000000002 z ",
                                "pathFrom": "M 7.128013392857142 162.34900000000002 L 7.128013392857142 131.762 C 7.128013392857142 126.762 12.128013392857142 121.76200000000001 17.12801339285714 121.76200000000001 L 28.392075892857143 121.76200000000001 C 33.39207589285714 121.76200000000001 38.39207589285714 126.762 38.39207589285714 131.762 L 38.39207589285714 162.34900000000002 z  L 7.128013392857142 162.34900000000002 L 38.39207589285714 162.34900000000002 L 38.39207589285714 162.34900000000002 L 38.39207589285714 162.34900000000002 L 38.39207589285714 162.34900000000002 L 38.39207589285714 162.34900000000002 L 7.128013392857142 162.34900000000002 z",
                                "x": 54.648102678571426,
                                "y": 135.29000000000002,
                                "goalY": [],
                                "barXPosition": 7.128013392857142,
                                "barWidth": 33.2640625
                            },
                            {
                                "pathTo": "M 54.648102678571426 162.34900000000002 L 54.648102678571426 118.233 C 54.648102678571426 113.233 59.64810267857143 108.233 64.64810267857143 108.233 L 75.91216517857143 108.233 C 80.91216517857143 108.233 85.91216517857143 113.233 85.91216517857143 118.233 L 85.91216517857143 162.34900000000002 z ",
                                "pathFrom": "M 54.648102678571426 162.34900000000002 L 54.648102678571426 91.17500000000001 C 54.648102678571426 86.17500000000001 59.64810267857143 81.17500000000001 64.64810267857143 81.17500000000001 L 75.91216517857143 81.17500000000001 C 80.91216517857143 81.17500000000001 85.91216517857143 86.17500000000001 85.91216517857143 91.17500000000001 L 85.91216517857143 162.34900000000002 z  L 54.648102678571426 162.34900000000002 L 85.91216517857143 162.34900000000002 L 85.91216517857143 162.34900000000002 L 85.91216517857143 162.34900000000002 L 85.91216517857143 162.34900000000002 L 85.91216517857143 162.34900000000002 L 54.648102678571426 162.34900000000002 z",
                                "x": 102.16819196428571,
                                "y": 108.232,
                                "goalY": [],
                                "barXPosition": 54.648102678571426,
                                "barWidth": 33.2640625
                            },
                            {
                                "pathTo": "M 102.16819196428571 162.34900000000002 L 102.16819196428571 91.17500000000001 C 102.16819196428571 86.17500000000001 107.16819196428571 81.17500000000001 112.16819196428571 81.17500000000001 L 123.4322544642857 81.17500000000001 C 128.4322544642857 81.17500000000001 133.4322544642857 86.17500000000001 133.4322544642857 91.17500000000001 L 133.4322544642857 162.34900000000002 z ",
                                "pathFrom": "M 102.16819196428571 162.34900000000002 L 102.16819196428571 50.588 C 102.16819196428571 45.588 107.16819196428571 40.588 112.16819196428571 40.588 L 123.4322544642857 40.588 C 128.4322544642857 40.588 133.4322544642857 45.588 133.4322544642857 50.588 L 133.4322544642857 162.34900000000002 z  L 102.16819196428571 162.34900000000002 L 133.4322544642857 162.34900000000002 L 133.4322544642857 162.34900000000002 L 133.4322544642857 162.34900000000002 L 133.4322544642857 162.34900000000002 L 133.4322544642857 162.34900000000002 L 102.16819196428571 162.34900000000002 z",
                                "x": 149.68828125,
                                "y": 81.174,
                                "goalY": [],
                                "barXPosition": 102.16819196428571,
                                "barWidth": 33.2640625
                            },
                            {
                                "pathTo": "M 149.68828125 162.34900000000002 L 149.68828125 64.11699999999999 C 149.68828125 59.11699999999999 154.68828125 54.117 159.68828125 54.117 L 170.95234374999998 54.117 C 175.95234374999998 54.117 180.95234374999998 59.11699999999999 180.95234374999998 64.11699999999999 L 180.95234374999998 162.34900000000002 z ",
                                "pathFrom": "M 149.68828125 162.34900000000002 L 149.68828125 10.001 C 149.68828125 5.0009999999999994 154.68828125 0.001 159.68828125 0.001 L 170.95234374999998 0.001 C 175.95234374999998 0.001 180.95234374999998 5.001 180.95234374999998 10.001 L 180.95234374999998 162.34900000000002 z  L 149.68828125 162.34900000000002 L 180.95234374999998 162.34900000000002 L 180.95234374999998 162.34900000000002 L 180.95234374999998 162.34900000000002 L 180.95234374999998 162.34900000000002 L 180.95234374999998 162.34900000000002 L 149.68828125 162.34900000000002 z",
                                "x": 197.20837053571427,
                                "y": 54.116,
                                "goalY": [],
                                "barXPosition": 149.68828125,
                                "barWidth": 33.2640625
                            },
                            {
                                "pathTo": "M 197.20837053571427 162.34900000000002 L 197.20837053571427 145.29100000000003 C 197.20837053571427 140.29100000000003 202.20837053571427 135.29100000000003 207.20837053571427 135.29100000000003 L 218.47243303571426 135.29100000000003 C 223.47243303571426 135.29100000000003 228.47243303571426 140.29100000000003 228.47243303571426 145.29100000000003 L 228.47243303571426 162.34900000000002 z ",
                                "pathFrom": "M 197.20837053571427 162.34900000000002 L 197.20837053571427 131.762 C 197.20837053571427 126.762 202.20837053571427 121.76200000000001 207.20837053571427 121.76200000000001 L 218.47243303571426 121.76200000000001 C 223.47243303571426 121.76200000000001 228.47243303571426 126.762 228.47243303571426 131.762 L 228.47243303571426 162.34900000000002 z  L 197.20837053571427 162.34900000000002 L 228.47243303571426 162.34900000000002 L 228.47243303571426 162.34900000000002 L 228.47243303571426 162.34900000000002 L 228.47243303571426 162.34900000000002 L 228.47243303571426 162.34900000000002 L 197.20837053571427 162.34900000000002 z",
                                "x": 244.72845982142854,
                                "y": 135.29000000000002,
                                "goalY": [],
                                "barXPosition": 197.20837053571427,
                                "barWidth": 33.2640625
                            },
                            {
                                "pathTo": "M 244.72845982142854 162.34900000000002 L 244.72845982142854 131.762 C 244.72845982142854 126.762 249.72845982142854 121.76200000000001 254.72845982142854 121.76200000000001 L 265.99252232142857 121.76200000000001 C 270.99252232142857 121.76200000000001 275.99252232142857 126.762 275.99252232142857 131.762 L 275.99252232142857 162.34900000000002 z ",
                                "pathFrom": "M 244.72845982142854 162.34900000000002 L 244.72845982142854 111.4685 C 244.72845982142854 106.4685 249.72845982142854 101.4685 254.72845982142854 101.4685 L 265.99252232142857 101.4685 C 270.99252232142857 101.4685 275.99252232142857 106.4685 275.99252232142857 111.4685 L 275.99252232142857 162.34900000000002 z  L 244.72845982142854 162.34900000000002 L 275.99252232142857 162.34900000000002 L 275.99252232142857 162.34900000000002 L 275.99252232142857 162.34900000000002 L 275.99252232142857 162.34900000000002 L 275.99252232142857 162.34900000000002 L 244.72845982142854 162.34900000000002 z",
                                "x": 292.2485491071428,
                                "y": 121.76100000000001,
                                "goalY": [],
                                "barXPosition": 244.72845982142854,
                                "barWidth": 33.2640625
                            },
                            {
                                "pathTo": "M 292.2485491071428 162.34900000000002 L 292.2485491071428 10.001 C 292.2485491071428 5.0009999999999994 297.2485491071428 0.001 302.2485491071428 0.001 L 313.51261160714284 0.001 C 318.51261160714284 0.001 323.51261160714284 5.001 323.51261160714284 10.001 L 323.51261160714284 162.34900000000002 z ",
                                "pathFrom": "M 292.2485491071428 162.34900000000002 L 292.2485491071428 131.762 C 292.2485491071428 126.762 297.2485491071428 121.76200000000001 302.2485491071428 121.76200000000001 L 313.51261160714284 121.76200000000001 C 318.51261160714284 121.76200000000001 323.51261160714284 126.762 323.51261160714284 131.762 L 323.51261160714284 162.34900000000002 z  L 292.2485491071428 162.34900000000002 L 323.51261160714284 162.34900000000002 L 323.51261160714284 162.34900000000002 L 323.51261160714284 162.34900000000002 L 323.51261160714284 162.34900000000002 L 323.51261160714284 162.34900000000002 L 292.2485491071428 162.34900000000002 z",
                                "x": 339.7686383928571,
                                "y": 0,
                                "goalY": [],
                                "barXPosition": 292.2485491071428,
                                "barWidth": 33.2640625
                            }
                        ],
                        "lastActiveBarSerieIndex": 0,
                        "stackedSeriesTotals": [
                            10,
                            20,
                            30,
                            40,
                            10,
                            15,
                            60
                        ],
                        "barHelpers": {},
                        "totalItems": 7,
                        "visibleI": 0,
                        "visibleItems": 7,
                        "zeroSerieses": [],
                        "isReversed": false
                    },
                    "annotations": {
                        "graphics": {},
                        "helpers": {},
                        "xAxisAnnotations": {
                            "helpers": {}
                        },
                        "yAxisAnnotations": {
                            "helpers": {}
                        },
                        "pointsAnnotations": {
                            "helpers": {}
                        },
                        "xDivision": 47.520089285714285
                    },
                    "timeScale": {
                        "timeScaleArray": [],
                        "utc": true,
                        "tickInterval": "seconds"
                    }
                }
            }
        ]
    }
    
  return (
    <div className="card">
              <h2 style={{ color: '#828282', fontSize: '24px', textAlign: 'left', marginLeft: '30px' }}>Reach</h2>
        <div className="card-body">
        <ReactApexcharts type='bar'  options={options} series={options.series} height={300}/>

        </div>
    </div>
  )
}

export default ReachBarChart