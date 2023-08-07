import React from 'react'
import ReactApexcharts from '../@core/components/react-apexcharts'


const CompaignLine = () => {
    const options ={
        "chart": {
            "animations": {
                "enabled": false,
                "easing": "swing"
            },
            "dropShadow": {
                "top": -11,
                "left": 7
            },
            "foreColor": "#333",
            "fontFamily": "Roboto",
            "height": 298,
            "id": "bEubC",
            "stackType": "100%",
            "toolbar": {
                "show": false,
                "tools": {
                    "selection": true,
                    "zoom": true,
                    "zoomin": true,
                    "zoomout": true,
                    "pan": true,
                    "reset": true
                }
            },
            "width": 500
        },
        "plotOptions": {
            "bar": {
                "borderRadius": 10
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
            "#28C76F",
            "#4C966B"
        ],
        "dataLabels": {
            "enabled": false,
            "style": {
                "fontWeight": 700
            }
        },
        "grid": {
            "padding": {
                "right": 25,
                "left": 15
            }
        },
        "legend": {
            "position": "top",
            "fontSize": 14,
            "offsetY": 0,
            "itemMargin": {
                "vertical": 0
            }
        },
        "markers": {
            "hover": {
                "sizeOffset": 6
            }
        },
        "series": [
            {
                "name": "Likes",
                "data": [
                    {
                        "x": "01 / Mon",
                        "y": "25",
                        "fillColor": "#CBBBBB"
                    },
                    {
                        "x": "02 / Tue",
                        "y": "18"
                    },
                    {
                        "x": "03 / Wed",
                        "y": "30"
                    },
                    {
                        "x": "04 / Thu",
                        "y": "35"
                    },
                    {
                        "x": "05 / Fri",
                        "y": "20"
                    },
                    {
                        "x": "06 / Sat",
                        "y": "30"
                    },
                    {
                        "x": "07 / Sun",
                        "y": 22
                    }
                ]
            },
            {
                "name": "Reviews",
                "data": [
                    {
                        "x": "01 / Mon",
                        "y": "25"
                    },
                    {
                        "x": "02 / Tue",
                        "y": "25"
                    },
                    {
                        "x": "03 / Wed",
                        "y": "25"
                    },
                    {
                        "x": "04 / Thu",
                        "y": "25"
                    },
                    {
                        "x": "05 / Fri",
                        "y": "25"
                    },
                    {
                        "x": "06 / Sat",
                        "y": "25"
                    },
                    {
                        "x": "07 / Sun",
                        "y": "25"
                    }
                ]
            }
        ],
        "stroke": {
            "width": 3
        },
        "tooltip": {},
        "xaxis": {
            "labels": {
                "trim": true,
                "style": {}
            },
            "tickAmount": "dataPoints",
            "title": {
                "style": {
                    "fontWeight": 700
                }
            }
        },
        "yaxis": {
            "tickAmount": 5,
            "max": 60,
            "min": 0,
            "labels": {
                "style": {
                    "colors": [
                        null,
                        null,
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
                "id": "vby2M",
                "chart": {
                    "opts": {
                        "series": [
                            18,
                            29,
                            42,
                            58,
                            69
                        ],
                        "annotations": {
                            "position": "front",
                            "yaxis": [],
                            "xaxis": [],
                            "points": []
                        },
                        "chart": {
                            "type": "donut",
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
                                "top": 0,
                                "left": 0,
                                "blur": 0,
                                "color": "#000",
                                "opacity": 0.35
                            },
                            "fontFamily": "Roboto",
                            "height": 250,
                            "width": 300,
                            "id": "vby2M"
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
                                            "offsetY": -10,
                                            "fontWeight": 600
                                        },
                                        "value": {
                                            "show": true,
                                            "fontSize": 20,
                                            "offsetY": 10,
                                            "fontWeight": 400
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
                            "#28C76F",
                            "#1C4881",
                            "#B21072",
                            "#F93F00",
                            "#CDB008"
                        ],
                        "theme": {
                            "mode": "light",
                            "palette": "palette4"
                        },
                        "dataLabels": {
                            "enabled": false,
                            "textAnchor": "middle",
                            "offsetX": -1,
                            "offsetY": -1,
                            "style": {
                                "fontSize": 15,
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
                            "convertedCatToNumeric": true
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
                                "right": 10,
                                "bottom": 12,
                                "left": 10
                            }
                        },
                        "stroke": {
                            "show": true,
                            "curve": "smooth",
                            "lineCap": "butt",
                            "colors": [
                                "#fff"
                            ],
                            "width": 2,
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
                            "show": true,
                            "showForSingleSeries": false,
                            "floating": false,
                            "position": "right",
                            "horizontalAlign": "center",
                            "fontSize": 15,
                            "fontWeight": 500,
                            "offsetX": 16,
                            "offsetY": 0,
                            "labels": {
                                "useSeriesColors": false
                            },
                            "markers": {
                                "width": 13,
                                "height": 12,
                                "strokeWidth": 0,
                                "strokeColor": "#fff",
                                "radius": 50
                            },
                            "itemMargin": {
                                "horizontal": 5,
                                "vertical": 5
                            },
                            "onItemClick": {
                                "toggleDataSeries": true
                            },
                            "onItemHover": {
                                "highlightDataSeries": true
                            }
                        },
                        "labels": [
                            "5/30",
                            "4/30",
                            "3/30",
                            "2/5",
                            "1/5"
                        ]
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
                                    "top": 0,
                                    "left": 0,
                                    "blur": 0,
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
                                "id": "vby2M",
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
                                "type": "donut",
                                "width": 300,
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
                                "offsetX": -1,
                                "offsetY": -1,
                                "style": {
                                    "fontSize": 15,
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
                                    "right": 10,
                                    "bottom": 12,
                                    "left": 10
                                }
                            },
                            "legend": {
                                "show": true,
                                "showForSingleSeries": false,
                                "showForNullSeries": true,
                                "showForZeroSeries": true,
                                "floating": false,
                                "position": "right",
                                "horizontalAlign": "center",
                                "inverseOrder": false,
                                "fontSize": 15,
                                "fontWeight": 500,
                                "offsetX": 16,
                                "offsetY": 0,
                                "customLegendItems": [],
                                "labels": {
                                    "useSeriesColors": false
                                },
                                "markers": {
                                    "width": 13,
                                    "height": 12,
                                    "strokeWidth": 0,
                                    "strokeColor": "#fff",
                                    "radius": 50,
                                    "offsetX": 0,
                                    "offsetY": 0
                                },
                                "itemMargin": {
                                    "horizontal": 5,
                                    "vertical": 5
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
                                "shared": true,
                                "followCursor": false,
                                "intersect": false,
                                "inverseOrder": false,
                                "fillSeriesColor": true,
                                "theme": "dark",
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
                            "chartID": "vby2M",
                            "cuid": "ngrj2nck",
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
                            "clientX": 1143,
                            "clientY": 359,
                            "fill": {
                                "colors": [
                                    "#28C76F",
                                    "#1C4881",
                                    "#B21072",
                                    "#F93F00",
                                    "#CDB008",
                                    "#28C76F",
                                    "#1C4881",
                                    "#B21072",
                                    "#F93F00",
                                    "#CDB008",
                                    "#28C76F",
                                    "#1C4881",
                                    "#B21072",
                                    "#F93F00",
                                    "#CDB008",
                                    "#28C76F",
                                    "#1C4881",
                                    "#B21072",
                                    "#F93F00",
                                    "#CDB008",
                                    "#28C76F",
                                    "#1C4881",
                                    "#B21072",
                                    "#F93F00",
                                    "#CDB008",
                                    "#28C76F",
                                    "#1C4881",
                                    "#B21072",
                                    "#F93F00",
                                    "#CDB008",
                                    "#28C76F",
                                    "#1C4881",
                                    "#B21072",
                                    "#F93F00",
                                    "#CDB008",
                                    "#28C76F",
                                    "#1C4881",
                                    "#B21072",
                                    "#F93F00",
                                    "#CDB008",
                                    "#28C76F",
                                    "#1C4881",
                                    "#B21072",
                                    "#F93F00",
                                    "#CDB008",
                                    "#28C76F",
                                    "#1C4881",
                                    "#B21072",
                                    "#F93F00",
                                    "#CDB008"
                                ]
                            },
                            "stroke": {
                                "colors": [
                                    "#fff",
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
                                11,
                                24,
                                32,
                                13,
                                32
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
                                "5/30",
                                "4/30",
                                "3/30",
                                "2/5",
                                "1/5"
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
                            "maxValsInArrayIndex": -1,
                            "radialSize": 114.09756097560977,
                            "zoomEnabled": true,
                            "panEnabled": false,
                            "selectionEnabled": false,
                            "yaxis": null,
                            "mousedown": false,
                            "lastClientPosition": {},
                            "yValueDecimal": 0,
                            "total": 0,
                            "SVGNS": "http://www.w3.org/2000/svg",
                            "svgWidth": 300,
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
                                    "_prevClass": "vby2M"
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
                            "gridWidth": 255,
                            "gridHeight": 238,
                            "rotateXLabels": false,
                            "defaultLabels": false,
                            "yLabelFormatters": [
                                null
                            ],
                            "LINE_HEIGHT_RATIO": 1.618,
                            "xAxisLabelsHeight": 0,
                            "xAxisLabelsWidth": 0,
                            "yAxisLabelsWidth": 0,
                            "scaleX": 1,
                            "scaleY": 1,
                            "translateX": 20,
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
                                "intersect": {},
                                "axesTooltip": {},
                                "showOnIntersect": false,
                                "showTooltipTitle": false,
                                "fixedTooltip": false,
                                "xaxisTooltip": null,
                                "yaxisTTEls": null,
                                "isBarShared": true,
                                "lastHoverTime": 1684147511237,
                                "xyRatios": null,
                                "isXAxisTooltipEnabled": false,
                                "yaxisTooltips": [
                                    false
                                ],
                                "allTooltipSeriesGroups": [],
                                "dataPointsDividedHeight": null,
                                "dataPointsDividedWidth": null,
                                "legendLabels": {
                                    "0": {},
                                    "1": {},
                                    "2": {},
                                    "3": {},
                                    "4": {}
                                },
                                "ttItems": [
                                    {},
                                    {},
                                    {},
                                    {},
                                    {}
                                ]
                            },
                            "series": [
                                11,
                                24,
                                32,
                                13,
                                32
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
                                    9.821428571428571
                                ],
                                [
                                    21.428571428571427
                                ],
                                [
                                    28.571428571428573
                                ],
                                [
                                    11.607142857142858
                                ],
                                [
                                    28.571428571428573
                                ]
                            ],
                            "seriesGoals": [],
                            "seriesX": [],
                            "seriesZ": [],
                            "seriesNames": [
                                "5/30",
                                "4/30",
                                "3/30",
                                "2/5",
                                "1/5"
                            ],
                            "seriesTotals": [
                                11,
                                24,
                                32,
                                13,
                                32
                            ],
                            "seriesLog": [],
                            "seriesColors": [],
                            "stackedSeriesTotals": [],
                            "seriesXvalues": [
                                [],
                                [],
                                [],
                                [],
                                []
                            ],
                            "seriesYvalues": [
                                [],
                                [],
                                [],
                                [],
                                []
                            ],
                            "categoryLabels": [],
                            "selectionResizeTimer": null,
                            "isXNumeric": false,
                            "xaxisLabelsCount": 0,
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
                            "chartClass": ".apexchartsvby2M",
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
                            "5/30",
                            "4/30",
                            "3/30",
                            "2/5",
                            "1/5"
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
                        "chartType": "donut",
                        "initialAnim": false,
                        "dynamicAnim": false,
                        "animBeginArr": [
                            0,
                            0,
                            0,
                            0,
                            0,
                            0
                        ],
                        "animDur": 0,
                        "defaultSize": 238,
                        "centerY": 119,
                        "centerX": 127.5,
                        "fullAngle": 360,
                        "initialAngle": 0,
                        "donutSize": 74.16341463414635,
                        "maxY": 32,
                        "sliceLabels": [],
                        "sliceSizes": [
                            114.09756097560977,
                            114.09756097560977,
                            114.09756097560977,
                            114.09756097560977,
                            114.09756097560977
                        ],
                        "prevSectorAngleArr": [],
                        "ret": {
                            "_stroke": "#000000",
                            "_event": null,
                            "dom": {},
                            "node": {},
                            "type": "g"
                        },
                        "strokeWidth": 2
                    },
                    "rangeBar": {
                        "isHorizontal": false,
                        "strokeWidth": 2,
                        "isNullValue": false,
                        "isRangeBar": 0,
                        "xyRatios": null,
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
                        "xDivision": null
                    }
                }
            },
            {
                "id": "fdWGA",
                "chart": {
                    "opts": {
                        "series": [
                            {
                                "name": "Line",
                                "data": [
                                    {
                                        "x": "01 Monday",
                                        "y": "35"
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
                                    },
                                    {
                                        "x": "",
                                        "y": 10
                                    },
                                    {
                                        "x": "",
                                        "y": 10
                                    },
                                    {
                                        "x": "",
                                        "y": 10
                                    },
                                    {
                                        "x": "",
                                        "y": 10
                                    },
                                    {
                                        "x": "",
                                        "y": 10
                                    },
                                    {
                                        "x": "",
                                        "y": 10
                                    },
                                    {
                                        "x": "",
                                        "y": 10
                                    },
                                    {
                                        "x": "",
                                        "y": 10
                                    },
                                    {
                                        "x": "",
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
                            "id": "fdWGA"
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
                                "id": "fdWGA",
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
                                "curve": "smooth",
                                "lineCap": "butt",
                                "width": 2,
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
                            "chartID": "fdWGA",
                            "cuid": "a4uuvpod",
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
                            "clientX": 1242,
                            "clientY": 407,
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
                                            "x": "01 Monday",
                                            "y": "35"
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
                                        },
                                        {
                                            "x": "",
                                            "y": 10
                                        },
                                        {
                                            "x": "",
                                            "y": 10
                                        },
                                        {
                                            "x": "",
                                            "y": 10
                                        },
                                        {
                                            "x": "",
                                            "y": 10
                                        },
                                        {
                                            "x": "",
                                            "y": 10
                                        },
                                        {
                                            "x": "",
                                            "y": 10
                                        },
                                        {
                                            "x": "",
                                            "y": 10
                                        },
                                        {
                                            "x": "",
                                            "y": 10
                                        },
                                        {
                                            "x": "",
                                            "y": 10
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
                                5,
                                6,
                                7,
                                8,
                                9,
                                10,
                                11,
                                12,
                                13,
                                14
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
                                    "_prevClass": "fdWGA"
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
                                        102.5
                                    ],
                                    [
                                        32.69230769230769,
                                        82
                                    ],
                                    [
                                        65.38461538461539,
                                        131.2
                                    ],
                                    [
                                        98.07692307692307,
                                        36.900000000000006
                                    ],
                                    [
                                        130.76923076923077,
                                        73.79999999999998
                                    ],
                                    [
                                        163.46153846153845,
                                        205
                                    ],
                                    [
                                        196.15384615384613,
                                        205
                                    ],
                                    [
                                        228.84615384615384,
                                        205
                                    ],
                                    [
                                        261.53846153846155,
                                        205
                                    ],
                                    [
                                        294.2307692307692,
                                        205
                                    ],
                                    [
                                        326.9230769230769,
                                        205
                                    ],
                                    [
                                        359.6153846153846,
                                        205
                                    ],
                                    [
                                        392.30769230769226,
                                        205
                                    ],
                                    [
                                        425,
                                        205
                                    ]
                                ]
                            ],
                            "dataLabelsRects": [
                                [
                                    {
                                        "x": 0,
                                        "y": 104.5,
                                        "width": 0,
                                        "height": 0
                                    },
                                    {
                                        "x": 32.69230769230769,
                                        "y": 84,
                                        "width": 0,
                                        "height": 0
                                    },
                                    {
                                        "x": 65.38461538461539,
                                        "y": 133.2,
                                        "width": 0,
                                        "height": 0
                                    },
                                    {
                                        "x": 98.07692307692307,
                                        "y": 38.900000000000006,
                                        "width": 0,
                                        "height": 0
                                    },
                                    {
                                        "x": 130.76923076923077,
                                        "y": 75.79999999999998,
                                        "width": 0,
                                        "height": 0
                                    },
                                    {
                                        "x": 163.46153846153845,
                                        "y": 205,
                                        "width": 0,
                                        "height": 0
                                    },
                                    {
                                        "x": 196.15384615384613,
                                        "y": 205,
                                        "width": 0,
                                        "height": 0
                                    },
                                    {
                                        "x": 228.84615384615384,
                                        "y": 205,
                                        "width": 0,
                                        "height": 0
                                    },
                                    {
                                        "x": 261.53846153846155,
                                        "y": 205,
                                        "width": 0,
                                        "height": 0
                                    },
                                    {
                                        "x": 294.2307692307692,
                                        "y": 205,
                                        "width": 0,
                                        "height": 0
                                    },
                                    {
                                        "x": 326.9230769230769,
                                        "y": 205,
                                        "width": 0,
                                        "height": 0
                                    },
                                    {
                                        "x": 359.6153846153846,
                                        "y": 205,
                                        "width": 0,
                                        "height": 0
                                    },
                                    {
                                        "x": 392.30769230769226,
                                        "y": 205,
                                        "width": 0,
                                        "height": 0
                                    },
                                    {
                                        "x": 425,
                                        "y": 205,
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
                                    5,
                                    6,
                                    7,
                                    8,
                                    9,
                                    10,
                                    11,
                                    12,
                                    13,
                                    0,
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    6,
                                    7,
                                    8,
                                    9,
                                    10,
                                    11,
                                    12,
                                    13
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
                                "lastHoverTime": 1684147826624,
                                "xyRatios": {
                                    "yRatio": [
                                        0.24390243902439024
                                    ],
                                    "invertedYRatio": 0.11764705882352941,
                                    "zRatio": null,
                                    "xRatio": 0.03058823529411765,
                                    "initialXRatio": 0.03058823529411765,
                                    "invertedXRatio": 0.06341463414634146,
                                    "baseLineInvertedY": -85,
                                    "baseLineY": [
                                        -41
                                    ],
                                    "baseLineX": 32.69230769230769
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
                                    32.69230769230769,
                                    65.38461538461539,
                                    98.07692307692308,
                                    130.76923076923077,
                                    163.46153846153845,
                                    196.15384615384613,
                                    228.8461538461538,
                                    261.5384615384615,
                                    294.23076923076917,
                                    326.92307692307685,
                                    359.6153846153845,
                                    392.3076923076922,
                                    424.9999999999999,
                                    457.69230769230757
                                ],
                                "dataPointsDividedHeight": 14.642857142857142,
                                "dataPointsDividedWidth": 30.357142857142858,
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
                                    35,
                                    40,
                                    28,
                                    51,
                                    42,
                                    10,
                                    10,
                                    10,
                                    10,
                                    10,
                                    10,
                                    10,
                                    10,
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
                                    100,
                                    100,
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
                                    7,
                                    8,
                                    9,
                                    10,
                                    11,
                                    12,
                                    13,
                                    14
                                ]
                            ],
                            "seriesZ": [
                                []
                            ],
                            "seriesNames": [
                                "Line"
                            ],
                            "seriesTotals": [
                                286
                            ],
                            "seriesLog": [
                                null
                            ],
                            "seriesColors": [
                                null
                            ],
                            "stackedSeriesTotals": [
                                35,
                                40,
                                28,
                                51,
                                42,
                                10,
                                10,
                                10,
                                10,
                                10,
                                10,
                                10,
                                10,
                                10
                            ],
                            "seriesXvalues": [
                                [
                                    0,
                                    32.69230769230769,
                                    65.38461538461539,
                                    98.07692307692307,
                                    130.76923076923077,
                                    163.46153846153845,
                                    196.15384615384613,
                                    228.84615384615384,
                                    261.53846153846155,
                                    294.2307692307692,
                                    326.9230769230769,
                                    359.6153846153846,
                                    392.30769230769226,
                                    425
                                ]
                            ],
                            "seriesYvalues": [
                                [
                                    102.5,
                                    82,
                                    131.2,
                                    36.900000000000006,
                                    73.79999999999998,
                                    205,
                                    205,
                                    205,
                                    205,
                                    205,
                                    205,
                                    205,
                                    205,
                                    205
                                ]
                            ],
                            "categoryLabels": [
                                "01 Monday",
                                "Item 2",
                                "Item 3",
                                "Item 4",
                                "Item 5",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                ""
                            ],
                            "selectionResizeTimer": null,
                            "isXNumeric": true,
                            "xaxisLabelsCount": 5,
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
                            "maxX": 14,
                            "minX": 1,
                            "initialMaxX": 14,
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
                                    7,
                                    8,
                                    9,
                                    10,
                                    11,
                                    12,
                                    13,
                                    14
                                ],
                                "niceMin": 1,
                                "niceMax": 14
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
                            "xRange": 13,
                            "yRange": [
                                50
                            ],
                            "zRange": null,
                            "dataPoints": 14,
                            "xTickAmount": 12,
                            "xyCharts": true,
                            "isBarHorizontal": false,
                            "chartClass": ".apexchartsfdWGA",
                            "comboBarCount": 0,
                            "isRangeBar": false,
                            "xAxisHeight": 10,
                            "hasNegs": true,
                            "yLogRatio": [
                                0.24390243902439024
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
                            "01 Monday",
                            "Item 2",
                            "Item 3",
                            "Item 4",
                            "Item 5",
                            "",
                            "",
                            "",
                            "",
                            "",
                            "",
                            "",
                            "",
                            ""
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
                            7,
                            8,
                            9,
                            10,
                            11,
                            12,
                            13,
                            14
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
                        "maxX": 14
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
                        "maxX": 14,
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
                        "xRatio": 0.03058823529411765,
                        "initialXRatio": 0.03058823529411765,
                        "invertedXRatio": 0.06341463414634146,
                        "invertedYRatio": 0.11764705882352941,
                        "baseLineInvertedY": -85,
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
                        "xDivision": 30.357142857142858
                    }
                }
            },
            {
                "id": "6qJVF",
                "chart": {
                    "opts": {
                        "series": [
                            {
                                "name": "Likes",
                                "data": [
                                    {
                                        "x": "1/11",
                                        "y": "4"
                                    },
                                    {
                                        "x": "2/11",
                                        "y": 3
                                    },
                                    {
                                        "x": "3/11",
                                        "y": 10
                                    },
                                    {
                                        "x": "4/11",
                                        "y": 9
                                    },
                                    {
                                        "x": "5/11",
                                        "y": 29
                                    },
                                    {
                                        "x": "6/11",
                                        "y": 19
                                    },
                                    {
                                        "x": "7/11",
                                        "y": 22
                                    },
                                    {
                                        "x": "8/11",
                                        "y": 9
                                    },
                                    {
                                        "x": "9/11",
                                        "y": 12
                                    },
                                    {
                                        "x": "10/11",
                                        "y": 7
                                    },
                                    {
                                        "x": "11/11",
                                        "y": 19
                                    },
                                    {
                                        "x": "12/11",
                                        "y": 5
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
                            "width": 500,
                            "id": "6qJVF"
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
                            "width": 5,
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
                                "height": 392,
                                "parentHeightOffset": 15,
                                "redrawOnParentResize": true,
                                "redrawOnWindowResize": true,
                                "id": "6qJVF",
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
                                "width": 500,
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
                                    "name": "Likes"
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
                                "width": 5,
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
                            "chartID": "6qJVF",
                            "cuid": "a247o6m5",
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
                            "clientX": 1186,
                            "clientY": 577,
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
                                    "name": "Likes",
                                    "data": [
                                        {
                                            "x": "1/11",
                                            "y": "4"
                                        },
                                        {
                                            "x": "2/11",
                                            "y": 3
                                        },
                                        {
                                            "x": "3/11",
                                            "y": 10
                                        },
                                        {
                                            "x": "4/11",
                                            "y": 9
                                        },
                                        {
                                            "x": "5/11",
                                            "y": 29
                                        },
                                        {
                                            "x": "6/11",
                                            "y": 19
                                        },
                                        {
                                            "x": "7/11",
                                            "y": 22
                                        },
                                        {
                                            "x": "8/11",
                                            "y": 9
                                        },
                                        {
                                            "x": "9/11",
                                            "y": 12
                                        },
                                        {
                                            "x": "10/11",
                                            "y": 7
                                        },
                                        {
                                            "x": "11/11",
                                            "y": 19
                                        },
                                        {
                                            "x": "12/11",
                                            "y": 5
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
                                7,
                                8,
                                9,
                                10,
                                11,
                                12
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
                            "radialSize": 160.26829268292684,
                            "zoomEnabled": true,
                            "panEnabled": false,
                            "selectionEnabled": false,
                            "yaxis": null,
                            "mousedown": false,
                            "lastClientPosition": {},
                            "yValueDecimal": 0,
                            "total": 0,
                            "SVGNS": "http://www.w3.org/2000/svg",
                            "svgWidth": 500,
                            "svgHeight": 392,
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
                                    "_prevClass": "6qJVF"
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
                            "previousPaths": [
                                {
                                    "type": "line",
                                    "paths": [
                                        {
                                            "d": "M 0 48.65219999999999C 13.765838068181816 48.65219999999999 25.565127840909092 300.0219 39.33096590909091 300.0219C 53.09680397727272 300.0219 64.89609374999999 243.26100000000002 78.66193181818181 243.26100000000002C 92.42776988636363 243.26100000000002 104.2270596590909 251.36970000000002 117.99289772727272 251.36970000000002C 131.75873579545453 251.36970000000002 143.55802556818182 89.19569999999999 157.32386363636363 89.19569999999999C 171.08970170454543 89.19569999999999 182.88899147727273 170.2827 196.65482954545453 170.2827C 210.42066761363634 170.2827 222.21995738636363 145.9566 235.98579545454544 145.9566C 249.75163352272727 145.9566 261.55092329545454 251.36970000000002 275.3167613636364 251.36970000000002C 289.08259943181815 251.36970000000002 300.8818892045455 227.04360000000003 314.64772727272725 227.04360000000003C 328.4135653409091 227.04360000000003 340.21285511363635 267.5871 353.9786931818182 267.5871C 367.74453125 267.5871 379.54382102272723 170.2827 393.30965909090907 170.2827C 407.0754971590909 170.2827 418.87478693181816 283.8045 432.640625 283.8045"
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
                                        307.34285714285716
                                    ],
                                    [
                                        40.45454545454545,
                                        317.25714285714287
                                    ],
                                    [
                                        80.9090909090909,
                                        247.85714285714286
                                    ],
                                    [
                                        121.36363636363636,
                                        257.7714285714286
                                    ],
                                    [
                                        161.8181818181818,
                                        59.48571428571432
                                    ],
                                    [
                                        202.27272727272728,
                                        158.62857142857143
                                    ],
                                    [
                                        242.72727272727272,
                                        128.8857142857143
                                    ],
                                    [
                                        283.1818181818182,
                                        257.7714285714286
                                    ],
                                    [
                                        323.6363636363636,
                                        228.02857142857144
                                    ],
                                    [
                                        364.09090909090907,
                                        277.6
                                    ],
                                    [
                                        404.54545454545456,
                                        158.62857142857143
                                    ],
                                    [
                                        445,
                                        297.42857142857144
                                    ]
                                ]
                            ],
                            "dataLabelsRects": [],
                            "lastDrawnDataLabelsIndexes": [],
                            "hasNullValues": false,
                            "zoomed": false,
                            "gridWidth": 445,
                            "gridHeight": 347,
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
                                "lastHoverTime": 1684147822535,
                                "xyRatios": {
                                    "yRatio": [
                                        0.10086455331412104
                                    ],
                                    "invertedYRatio": 0.07865168539325842,
                                    "zRatio": null,
                                    "xRatio": 0.024719101123595506,
                                    "initialXRatio": 0.024719101123595506,
                                    "invertedXRatio": 0.03170028818443804,
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
                                "xaxisOffY": 348,
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
                                    40.45454545454545,
                                    80.9090909090909,
                                    121.36363636363636,
                                    161.8181818181818,
                                    202.27272727272725,
                                    242.7272727272727,
                                    283.18181818181813,
                                    323.63636363636357,
                                    364.090909090909,
                                    404.54545454545445,
                                    444.9999999999999,
                                    485.4545454545453
                                ],
                                "dataPointsDividedHeight": 28.916666666666668,
                                "dataPointsDividedWidth": 37.083333333333336,
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
                                    4,
                                    3,
                                    10,
                                    9,
                                    29,
                                    19,
                                    22,
                                    9,
                                    12,
                                    7,
                                    19,
                                    5
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
                                    7,
                                    8,
                                    9,
                                    10,
                                    11,
                                    12
                                ]
                            ],
                            "seriesZ": [
                                []
                            ],
                            "seriesNames": [
                                "Likes"
                            ],
                            "seriesTotals": [
                                148
                            ],
                            "seriesLog": [
                                null
                            ],
                            "seriesColors": [
                                null
                            ],
                            "stackedSeriesTotals": [
                                4,
                                3,
                                10,
                                9,
                                29,
                                19,
                                22,
                                9,
                                12,
                                7,
                                19,
                                5
                            ],
                            "seriesXvalues": [
                                [
                                    0,
                                    40.45454545454545,
                                    80.9090909090909,
                                    121.36363636363636,
                                    161.8181818181818,
                                    202.27272727272728,
                                    242.72727272727272,
                                    283.1818181818182,
                                    323.6363636363636,
                                    364.09090909090907,
                                    404.54545454545456,
                                    445
                                ]
                            ],
                            "seriesYvalues": [
                                [
                                    307.34285714285716,
                                    317.25714285714287,
                                    247.85714285714286,
                                    257.7714285714286,
                                    59.48571428571432,
                                    158.62857142857143,
                                    128.8857142857143,
                                    257.7714285714286,
                                    228.02857142857144,
                                    277.6,
                                    158.62857142857143,
                                    297.42857142857144
                                ]
                            ],
                            "categoryLabels": [
                                "1/11",
                                "2/11",
                                "3/11",
                                "4/11",
                                "5/11",
                                "6/11",
                                "7/11",
                                "8/11",
                                "9/11",
                                "10/11",
                                "11/11",
                                "12/11"
                            ],
                            "selectionResizeTimer": null,
                            "isXNumeric": true,
                            "xaxisLabelsCount": 12,
                            "isMultiLineX": false,
                            "isMultipleYAxis": false,
                            "maxY": 35,
                            "minY": 0,
                            "minYArr": [
                                0
                            ],
                            "maxYArr": [
                                35
                            ],
                            "maxX": 12,
                            "minX": 1,
                            "initialMaxX": 12,
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
                                        7,
                                        14,
                                        21,
                                        28,
                                        35
                                    ],
                                    "niceMin": 0,
                                    "niceMax": 35
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
                                    7,
                                    8,
                                    9,
                                    10,
                                    11,
                                    12
                                ],
                                "niceMin": 1,
                                "niceMax": 12
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
                            "xRange": 11,
                            "yRange": [
                                35
                            ],
                            "zRange": null,
                            "dataPoints": 12,
                            "xTickAmount": 10,
                            "xyCharts": true,
                            "isBarHorizontal": false,
                            "chartClass": ".apexcharts6qJVF",
                            "comboBarCount": 0,
                            "isRangeBar": false,
                            "xAxisHeight": 10,
                            "yLogRatio": [
                                0.10086455331412104
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
                            "1/11",
                            "2/11",
                            "3/11",
                            "4/11",
                            "5/11",
                            "6/11",
                            "7/11",
                            "8/11",
                            "9/11",
                            "10/11",
                            "11/11",
                            "12/11"
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
                            7,
                            8,
                            9,
                            10,
                            11,
                            12
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
                        "maxX": 12
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
                        "maxX": 12,
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
                                        "maxX": 445,
                                        "maxY": 347
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
                        "defaultSize": 347,
                        "centerY": 173.5,
                        "centerX": 222.5,
                        "fullAngle": 360,
                        "initialAngle": 0,
                        "donutSize": 104.17439024390245,
                        "maxY": 0,
                        "sliceLabels": [],
                        "sliceSizes": [],
                        "prevSectorAngleArr": []
                    },
                    "rangeBar": {
                        "isHorizontal": false,
                        "strokeWidth": 5,
                        "isNullValue": false,
                        "isRangeBar": 0,
                        "xRatio": 0.024719101123595506,
                        "initialXRatio": 0.024719101123595506,
                        "invertedXRatio": 0.03170028818443804,
                        "invertedYRatio": 0.07865168539325842,
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
                        "xDivision": 37.083333333333336
                    }
                }
            },
            {
                "id": "6Q7mM",
                "chart": {
                    "opts": {
                        "series": [],
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
                            "width": 500,
                            "id": "6Q7mM"
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
                            "width": 5,
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
                                "id": "6Q7mM",
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
                                "width": 500,
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
                                    "data": []
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
                                "width": 5,
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
                            "chartID": "6Q7mM",
                            "cuid": "brfo0yp9",
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
                            "initialConfig": {
                                "labels": []
                            },
                            "initialSeries": [
                                {
                                    "data": []
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
                            "labels": [],
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
                            "radialSize": 91.00000000000001,
                            "zoomEnabled": true,
                            "panEnabled": false,
                            "selectionEnabled": false,
                            "yaxis": null,
                            "mousedown": false,
                            "lastClientPosition": {},
                            "yValueDecimal": 0,
                            "total": 0,
                            "SVGNS": "http://www.w3.org/2000/svg",
                            "svgWidth": 500,
                            "svgHeight": 250,
                            "noData": true,
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
                                    "_prevClass": "6Q7mM"
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
                                    "paths": [],
                                    "realIndex": "0"
                                }
                            ],
                            "allSeriesHasEqualX": true,
                            "pointsArray": [],
                            "dataLabelsRects": [],
                            "lastDrawnDataLabelsIndexes": [],
                            "hasNullValues": true,
                            "zoomed": false,
                            "gridWidth": 445,
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
                                "xaxisTooltip": null,
                                "yaxisTTEls": null,
                                "isBarShared": true,
                                "lastHoverTime": 1684147857590
                            },
                            "series": [
                                []
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
                                []
                            ],
                            "seriesGoals": [],
                            "seriesX": [
                                [],
                                []
                            ],
                            "seriesZ": [
                                []
                            ],
                            "seriesNames": [
                                "series-1"
                            ],
                            "seriesTotals": [
                                0
                            ],
                            "seriesLog": [
                                null
                            ],
                            "seriesColors": [
                                null
                            ],
                            "stackedSeriesTotals": [],
                            "seriesXvalues": [
                                [
                                    null
                                ]
                            ],
                            "seriesYvalues": [
                                [
                                    205
                                ]
                            ],
                            "categoryLabels": [],
                            "selectionResizeTimer": null,
                            "isXNumeric": true,
                            "xaxisLabelsCount": 0,
                            "isMultiLineX": false,
                            "isMultipleYAxis": false,
                            "maxY": 5,
                            "minY": 0,
                            "minYArr": [
                                0
                            ],
                            "maxYArr": [
                                5
                            ],
                            "minX": 1,
                            "initialMinX": 1,
                            "maxDate": 0,
                            "minDate": 1.7976931348623157e+308,
                            "minZ": 1.7976931348623157e+308,
                            "maxZ": -1.7976931348623157e+308,
                            "minXDiff": 1.7976931348623157e+308,
                            "yAxisScale": [
                                {
                                    "result": [
                                        0,
                                        1,
                                        2,
                                        3,
                                        4,
                                        5
                                    ],
                                    "niceMin": 0,
                                    "niceMax": 5
                                }
                            ],
                            "xAxisScale": {
                                "result": []
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
                            "xRange": null,
                            "yRange": [
                                5
                            ],
                            "zRange": null,
                            "dataPoints": 0,
                            "xTickAmount": null,
                            "xyCharts": true,
                            "isBarHorizontal": false,
                            "chartClass": ".apexcharts6Q7mM",
                            "comboBarCount": 0,
                            "isRangeBar": false,
                            "xAxisHeight": 10,
                            "yLogRatio": [
                                0.024390243902439025
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
                        "twoDSeries": [],
                        "twoDSeriesX": [],
                        "seriesGoals": [],
                        "coreUtils": {},
                        "fallbackToCategory": false,
                        "activeSeriesIndex": 0
                    },
                    "grid": {
                        "xaxisLabels": [],
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
                        "minX": 1
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
                        "centerX": 222.5,
                        "fullAngle": 360,
                        "initialAngle": 0,
                        "donutSize": 59.150000000000006,
                        "maxY": 0,
                        "sliceLabels": [],
                        "sliceSizes": [],
                        "prevSectorAngleArr": []
                    },
                    "rangeBar": {
                        "isHorizontal": false,
                        "strokeWidth": 5,
                        "isNullValue": false,
                        "isRangeBar": 0,
                        "xyRatios": {
                            "yRatio": [
                                0.024390243902439025
                            ],
                            "invertedYRatio": 0.011235955056179775,
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
                        "xRatio": null,
                        "initialXRatio": null,
                        "invertedXRatio": null,
                        "invertedYRatio": 0.011235955056179775,
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
                        "xDivision": null
                    }
                }
            },
            {
                "id": "EMi41",
                "chart": {
                    "opts": {
                        "series": [
                            {
                                "name": "Line",
                                "data": [
                                    {
                                        "x": "01 / Mon",
                                        "y": "25"
                                    },
                                    {
                                        "x": "02 / Tue",
                                        "y": "15"
                                    },
                                    {
                                        "x": "03 / Wed",
                                        "y": "35"
                                    },
                                    {
                                        "x": "04 / Thu",
                                        "y": "45"
                                    },
                                    {
                                        "x": "05 / Fri",
                                        "y": "30"
                                    },
                                    {
                                        "x": "06 / Sat",
                                        "y": "18"
                                    },
                                    {
                                        "x": "07 / Sun",
                                        "y": "33"
                                    }
                                ]
                            },
                            {
                                "name": "Reviews",
                                "data": [
                                    {
                                        "x": "01 / Mon",
                                        "y": "25"
                                    },
                                    {
                                        "x": "02 / Tue",
                                        "y": "25"
                                    },
                                    {
                                        "x": "03 / Wed",
                                        "y": "25"
                                    },
                                    {
                                        "x": "04 / Thu",
                                        "y": "25"
                                    },
                                    {
                                        "x": "05 / Fri",
                                        "y": "25"
                                    },
                                    {
                                        "x": "06 / Sat",
                                        "y": "25"
                                    },
                                    {
                                        "x": "07 / Sun",
                                        "y": "25"
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
                            "id": "EMi41"
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
                                "fontFamily": "Ubuntu",
                                "height": 321,
                                "parentHeightOffset": 15,
                                "redrawOnParentResize": true,
                                "redrawOnWindowResize": true,
                                "id": "EMi41",
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
                                "width": 580,
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
                                },
                                "fontUrl": null
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
                            "colors": [
                                "#28C76F",
                                "#28C76F"
                            ],
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
                                "show": false,
                                "showForSingleSeries": false,
                                "showForNullSeries": true,
                                "showForZeroSeries": true,
                                "floating": false,
                                "position": "bottom",
                                "horizontalAlign": "center",
                                "inverseOrder": false,
                                "fontSize": 12,
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
                            "series": [
                                {
                                    "name": "Average Rating"
                                },
                                {
                                    "name": "Average Reviews"
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
                                "width": 3,
                                "dashArray": 1
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
                                            "colors": [
                                                null,
                                                null,
                                                null,
                                                null,
                                                null,
                                                null
                                            ],
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
                            "chartID": "EMi41",
                            "cuid": "suxj1jo7",
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
                            "clientX": 727,
                            "clientY": 379,
                            "fill": {
                                "colors": [
                                    "#28C76F",
                                    "#28C76F",
                                    "#28C76F",
                                    "#28C76F",
                                    "#28C76F",
                                    "#28C76F",
                                    "#28C76F",
                                    "#28C76F",
                                    "#28C76F",
                                    "#28C76F",
                                    "#28C76F",
                                    "#28C76F",
                                    "#28C76F",
                                    "#28C76F",
                                    "#28C76F",
                                    "#28C76F",
                                    "#28C76F",
                                    "#28C76F",
                                    "#28C76F",
                                    "#28C76F",
                                    "#28C76F",
                                    "#28C76F",
                                    "#28C76F",
                                    "#28C76F",
                                    "#28C76F",
                                    "#28C76F",
                                    "#28C76F",
                                    "#28C76F",
                                    "#28C76F",
                                    "#28C76F",
                                    "#28C76F",
                                    "#28C76F",
                                    "#28C76F",
                                    "#28C76F",
                                    "#28C76F",
                                    "#28C76F",
                                    "#28C76F",
                                    "#28C76F",
                                    "#28C76F",
                                    "#28C76F",
                                    "#28C76F",
                                    "#28C76F",
                                    "#28C76F",
                                    "#28C76F",
                                    "#28C76F",
                                    "#28C76F",
                                    "#28C76F",
                                    "#28C76F",
                                    "#28C76F",
                                    "#28C76F"
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
                                    "name": "Average Rating",
                                    "data": [
                                        {
                                            "x": "01 / Mon",
                                            "y": "25"
                                        },
                                        {
                                            "x": "02 / Tue",
                                            "y": "15"
                                        },
                                        {
                                            "x": "03 / Wed",
                                            "y": "35"
                                        },
                                        {
                                            "x": "04 / Thu",
                                            "y": "45"
                                        },
                                        {
                                            "x": "05 / Fri",
                                            "y": "30"
                                        },
                                        {
                                            "x": "06 / Sat",
                                            "y": "18"
                                        },
                                        {
                                            "x": "07 / Sun",
                                            "y": "33"
                                        }
                                    ]
                                },
                                {
                                    "name": "Average Reviews",
                                    "data": [
                                        {
                                            "x": "01 / Mon",
                                            "y": "25"
                                        },
                                        {
                                            "x": "02 / Tue",
                                            "y": "25"
                                        },
                                        {
                                            "x": "03 / Wed",
                                            "y": "25"
                                        },
                                        {
                                            "x": "04 / Thu",
                                            "y": "25"
                                        },
                                        {
                                            "x": "05 / Fri",
                                            "y": "25"
                                        },
                                        {
                                            "x": "06 / Sat",
                                            "y": "25"
                                        },
                                        {
                                            "x": "07 / Sun",
                                            "y": "25"
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
                            "radialSize": 127.63414634146343,
                            "zoomEnabled": true,
                            "panEnabled": false,
                            "selectionEnabled": false,
                            "yaxis": null,
                            "mousedown": false,
                            "lastClientPosition": {},
                            "yValueDecimal": 0,
                            "total": 0,
                            "SVGNS": "http://www.w3.org/2000/svg",
                            "svgWidth": 580,
                            "svgHeight": 321,
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
                                    "_prevClass": "EMi41"
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
                            "previousPaths": [
                                {
                                    "type": "line",
                                    "paths": [
                                        {
                                            "d": "M 0 146.60545000000002C 29.900390624999996 146.60545000000002 55.529296875 210.34695 86.4296875 210.34695"
                                        },
                                        {
                                            "d": "M 85.4296875 210.34695C 115.330078125 210.34695 140.958984375 82.86395000000002 171.859375 82.86395000000002"
                                        },
                                        {
                                            "d": "M 170.859375 82.86395000000002C 200.759765625 82.86395000000002 226.388671875 19.122450000000015 257.2890625 19.122450000000015"
                                        },
                                        {
                                            "d": "M 256.2890625 19.122450000000015C 286.189453125 19.122450000000015 311.818359375 114.7347 342.71875 114.7347"
                                        },
                                        {
                                            "d": "M 341.71875 114.7347C 371.619140625 114.7347 397.248046875 191.22450000000003 428.1484375 191.22450000000003"
                                        },
                                        {
                                            "d": "M 427.1484375 191.22450000000003C 457.048828125 191.22450000000003 482.677734375 95.61225000000002 513.578125 95.61225000000002"
                                        }
                                    ],
                                    "realIndex": "0"
                                },
                                {
                                    "type": "line",
                                    "paths": [
                                        {
                                            "d": "M 0 146.60545000000002C 29.900390624999996 146.60545000000002 55.529296875 146.60545000000002 86.4296875 146.60545000000002"
                                        },
                                        {
                                            "d": "M 85.4296875 146.60545000000002C 115.330078125 146.60545000000002 140.958984375 146.60545000000002 171.859375 146.60545000000002"
                                        },
                                        {
                                            "d": "M 170.859375 146.60545000000002C 200.759765625 146.60545000000002 226.388671875 146.60545000000002 257.2890625 146.60545000000002"
                                        },
                                        {
                                            "d": "M 256.2890625 146.60545000000002C 286.189453125 146.60545000000002 311.818359375 146.60545000000002 342.71875 146.60545000000002"
                                        },
                                        {
                                            "d": "M 341.71875 146.60545000000002C 371.619140625 146.60545000000002 397.248046875 146.60545000000002 428.1484375 146.60545000000002"
                                        },
                                        {
                                            "d": "M 427.1484375 146.60545000000002C 457.048828125 146.60545000000002 482.677734375 146.60545000000002 513.578125 146.60545000000002"
                                        }
                                    ],
                                    "realIndex": "1"
                                }
                            ],
                            "allSeriesHasEqualX": true,
                            "pointsArray": [
                                [
                                    [
                                        0,
                                        158.7
                                    ],
                                    [
                                        87.5,
                                        227.7
                                    ],
                                    [
                                        175,
                                        89.69999999999999
                                    ],
                                    [
                                        262.5,
                                        20.69999999999999
                                    ],
                                    [
                                        350,
                                        124.19999999999999
                                    ],
                                    [
                                        437.5,
                                        207
                                    ],
                                    [
                                        525,
                                        103.5
                                    ]
                                ],
                                [
                                    [
                                        0,
                                        158.7
                                    ],
                                    [
                                        87.5,
                                        158.7
                                    ],
                                    [
                                        175,
                                        158.7
                                    ],
                                    [
                                        262.5,
                                        158.7
                                    ],
                                    [
                                        350,
                                        158.7
                                    ],
                                    [
                                        437.5,
                                        158.7
                                    ],
                                    [
                                        525,
                                        158.7
                                    ]
                                ]
                            ],
                            "dataLabelsRects": [],
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
                                ],
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
                            "hasNullValues": true,
                            "zoomed": false,
                            "gridWidth": 525,
                            "gridHeight": 276,
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
                                "lastHoverTime": 1684149832253,
                                "xyRatios": {
                                    "yRatio": [
                                        0.14492753623188406
                                    ],
                                    "invertedYRatio": 0.0761904761904762,
                                    "zRatio": null,
                                    "xRatio": 0.011428571428571429,
                                    "initialXRatio": 0.011428571428571429,
                                    "invertedXRatio": 0.021739130434782608,
                                    "baseLineInvertedY": -104.99999999999999,
                                    "baseLineY": [
                                        -55.199999999999996
                                    ],
                                    "baseLineX": 87.5
                                },
                                "isXAxisTooltipEnabled": true,
                                "yaxisTooltips": [
                                    false
                                ],
                                "allTooltipSeriesGroups": [],
                                "xaxisOffY": 277,
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
                                    87.5,
                                    175,
                                    262.5,
                                    350,
                                    437.5,
                                    525,
                                    612.5
                                ],
                                "dataPointsDividedHeight": 39.42857142857143,
                                "dataPointsDividedWidth": 75,
                                "tooltipTitle": {},
                                "legendLabels": {},
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
                                    25,
                                    15,
                                    35,
                                    45,
                                    30,
                                    18,
                                    33
                                ],
                                [
                                    25,
                                    25,
                                    25,
                                    25,
                                    25,
                                    25,
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
                            "seriesRangeBar": [],
                            "seriesPercent": [
                                [
                                    50,
                                    37.5,
                                    58.333333333333336,
                                    64.28571428571429,
                                    54.54545454545455,
                                    41.86046511627907,
                                    56.89655172413793
                                ],
                                [
                                    50,
                                    62.5,
                                    41.666666666666664,
                                    35.714285714285715,
                                    45.45454545454545,
                                    58.13953488372093,
                                    43.10344827586207
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
                                ],
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
                                ],
                                null
                            ],
                            "seriesZ": [
                                [],
                                []
                            ],
                            "seriesNames": [
                                "Average Rating",
                                "Average Reviews"
                            ],
                            "seriesTotals": [
                                201,
                                175
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
                                50,
                                40,
                                60,
                                70,
                                55,
                                43,
                                58
                            ],
                            "seriesXvalues": [
                                [
                                    0,
                                    87.5,
                                    175,
                                    262.5,
                                    350,
                                    437.5,
                                    525
                                ],
                                [
                                    0,
                                    87.5,
                                    175,
                                    262.5,
                                    350,
                                    437.5,
                                    525
                                ]
                            ],
                            "seriesYvalues": [
                                [
                                    158.7,
                                    227.7,
                                    89.69999999999999,
                                    20.69999999999999,
                                    124.19999999999999,
                                    207,
                                    103.5
                                ],
                                [
                                    158.7,
                                    158.7,
                                    158.7,
                                    158.7,
                                    158.7,
                                    158.7,
                                    158.7
                                ]
                            ],
                            "categoryLabels": [
                                "01 / Mon",
                                "02 / Tue",
                                "03 / Wed",
                                "04 / Thu",
                                "05 / Fri",
                                "06 / Sat",
                                "07 / Sun"
                            ],
                            "selectionResizeTimer": null,
                            "isXNumeric": true,
                            "xaxisLabelsCount": 7,
                            "isMultiLineX": false,
                            "isMultipleYAxis": false,
                            "maxY": 48,
                            "minY": 8,
                            "minYArr": [
                                8
                            ],
                            "maxYArr": [
                                48
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
                                        8,
                                        16,
                                        24,
                                        32,
                                        40,
                                        48
                                    ],
                                    "niceMin": 8,
                                    "niceMax": 48
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
                                40
                            ],
                            "zRange": null,
                            "dataPoints": 7,
                            "xTickAmount": 5,
                            "xyCharts": true,
                            "isBarHorizontal": false,
                            "chartClass": ".apexchartsEMi41",
                            "comboBarCount": 0,
                            "isRangeBar": false,
                            "xAxisHeight": 10,
                            "hasNegs": true,
                            "yLogRatio": [
                                0.14492753623188406
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
                            "01 / Mon",
                            "02 / Tue",
                            "03 / Wed",
                            "04 / Thu",
                            "05 / Fri",
                            "06 / Sat",
                            "07 / Sun"
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
                        "minX": 1,
                        "maxX": 7
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
                                        "maxX": 525,
                                        "maxY": 276
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
                        "defaultSize": 276,
                        "centerY": 138,
                        "centerX": 262.5,
                        "fullAngle": 360,
                        "initialAngle": 0,
                        "donutSize": 82.96219512195123,
                        "maxY": 0,
                        "sliceLabels": [],
                        "sliceSizes": [],
                        "prevSectorAngleArr": []
                    },
                    "rangeBar": {
                        "isHorizontal": false,
                        "strokeWidth": 3,
                        "isNullValue": false,
                        "isRangeBar": 0,
                        "xRatio": 0.011428571428571429,
                        "initialXRatio": 0.011428571428571429,
                        "invertedXRatio": 0.021739130434782608,
                        "invertedYRatio": 0.0761904761904762,
                        "baseLineInvertedY": -104.99999999999999,
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
                        "xDivision": 75
                    }
                }
            },
            {
                "id": "bEubC",
                "chart": {
                    "opts": {
                        "series": [
                            {
                                "name": "Likes"
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
                            "width": 500,
                            "id": "bEubC"
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
                            "width": 5,
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
                            "chartID": "bEubC",
                            "cuid": "0u3aanmk",
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
                            "clientX": 996,
                            "clientY": 514,
                            "fill": {
                                "colors": [
                                    "#28C76F",
                                    "#4C966B",
                                    "#28C76F",
                                    "#4C966B",
                                    "#28C76F",
                                    "#4C966B",
                                    "#28C76F",
                                    "#4C966B",
                                    "#28C76F",
                                    "#4C966B",
                                    "#28C76F",
                                    "#4C966B",
                                    "#28C76F",
                                    "#4C966B",
                                    "#28C76F",
                                    "#4C966B",
                                    "#28C76F",
                                    "#4C966B",
                                    "#28C76F",
                                    "#4C966B",
                                    "#28C76F",
                                    "#4C966B",
                                    "#28C76F",
                                    "#4C966B",
                                    "#28C76F",
                                    "#4C966B",
                                    "#28C76F",
                                    "#4C966B",
                                    "#28C76F",
                                    "#4C966B",
                                    "#28C76F",
                                    "#4C966B",
                                    "#28C76F",
                                    "#4C966B",
                                    "#28C76F",
                                    "#4C966B",
                                    "#28C76F",
                                    "#4C966B",
                                    "#28C76F",
                                    "#4C966B",
                                    "#28C76F",
                                    "#4C966B",
                                    "#28C76F",
                                    "#4C966B",
                                    "#28C76F",
                                    "#4C966B",
                                    "#28C76F",
                                    "#4C966B",
                                    "#28C76F",
                                    "#4C966B"
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
                                "yaxis": [
                                    null
                                ]
                            },
                            "initialSeries": [
                                {
                                    "name": "Likes",
                                    "data": [
                                        {
                                            "x": "01 / Mon",
                                            "y": "25",
                                            "fillColor": "#CBBBBB"
                                        },
                                        {
                                            "x": "02 / Tue",
                                            "y": "18"
                                        },
                                        {
                                            "x": "03 / Wed",
                                            "y": "30"
                                        },
                                        {
                                            "x": "04 / Thu",
                                            "y": "35"
                                        },
                                        {
                                            "x": "05 / Fri",
                                            "y": "20"
                                        },
                                        {
                                            "x": "06 / Sat",
                                            "y": "30"
                                        },
                                        {
                                            "x": "07 / Sun",
                                            "y": 22
                                        }
                                    ]
                                },
                                {
                                    "name": "Reviews",
                                    "data": [
                                        {
                                            "x": "01 / Mon",
                                            "y": "25"
                                        },
                                        {
                                            "x": "02 / Tue",
                                            "y": "25"
                                        },
                                        {
                                            "x": "03 / Wed",
                                            "y": "25"
                                        },
                                        {
                                            "x": "04 / Thu",
                                            "y": "25"
                                        },
                                        {
                                            "x": "05 / Fri",
                                            "y": "25"
                                        },
                                        {
                                            "x": "06 / Sat",
                                            "y": "25"
                                        },
                                        {
                                            "x": "07 / Sun",
                                            "y": "25"
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
                            "radialSize": 97.07219512195124,
                            "zoomEnabled": true,
                            "panEnabled": false,
                            "selectionEnabled": false,
                            "yaxis": null,
                            "mousedown": false,
                            "lastClientPosition": {},
                            "yValueDecimal": 0,
                            "total": 0,
                            "SVGNS": "http://www.w3.org/2000/svg",
                            "svgWidth": 500,
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
                                    "_prevClass": "bEubC"
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
                                "elLegendForeign": {}
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
                            "dataChanged": true,
                            "previousPaths": [
                                {
                                    "type": "line",
                                    "paths": [
                                        {
                                            "d": "M 0 160.01100000000002C 24.877343749999998 160.01100000000002 46.200781250000006 174.94536 72.078125 174.94536"
                                        },
                                        {
                                            "d": "M 71.078125 174.94536C 95.95546875 174.94536 117.27890625 149.3436 143.15625 149.3436"
                                        },
                                        {
                                            "d": "M 142.15625 149.3436C 167.03359375 149.3436 188.35703125 138.6762 214.234375 138.6762"
                                        },
                                        {
                                            "d": "M 213.234375 138.6762C 238.11171875 138.6762 259.43515625 170.6784 285.3125 170.6784"
                                        },
                                        {
                                            "d": "M 284.3125 170.6784C 309.18984375 170.6784 330.51328125 149.3436 356.390625 149.3436"
                                        },
                                        {
                                            "d": "M 355.390625 149.3436C 380.26796875 149.3436 401.59140625 166.41144000000003 427.46875 166.41144000000003"
                                        }
                                    ],
                                    "realIndex": "0"
                                },
                                {
                                    "type": "line",
                                    "paths": [
                                        {
                                            "d": "M 0 160.01100000000002C 24.877343749999998 160.01100000000002 46.200781250000006 160.01100000000002 72.078125 160.01100000000002"
                                        },
                                        {
                                            "d": "M 71.078125 160.01100000000002C 95.95546875 160.01100000000002 117.27890625 160.01100000000002 143.15625 160.01100000000002"
                                        },
                                        {
                                            "d": "M 142.15625 160.01100000000002C 167.03359375 160.01100000000002 188.35703125 160.01100000000002 214.234375 160.01100000000002"
                                        },
                                        {
                                            "d": "M 213.234375 160.01100000000002C 238.11171875 160.01100000000002 259.43515625 160.01100000000002 285.3125 160.01100000000002"
                                        },
                                        {
                                            "d": "M 284.3125 160.01100000000002C 309.18984375 160.01100000000002 330.51328125 160.01100000000002 356.390625 160.01100000000002"
                                        },
                                        {
                                            "d": "M 355.390625 160.01100000000002C 380.26796875 160.01100000000002 401.59140625 160.01100000000002 427.46875 160.01100000000002"
                                        }
                                    ],
                                    "realIndex": "1"
                                }
                            ],
                            "allSeriesHasEqualX": true,
                            "pointsArray": [
                                [
                                    [
                                        0,
                                        160.01100000000002
                                    ],
                                    [
                                        71.078125,
                                        174.94536
                                    ],
                                    [
                                        142.15625,
                                        149.3436
                                    ],
                                    [
                                        213.234375,
                                        138.6762
                                    ],
                                    [
                                        284.3125,
                                        170.6784
                                    ],
                                    [
                                        355.390625,
                                        149.3436
                                    ],
                                    [
                                        426.46875,
                                        166.41144000000003
                                    ]
                                ],
                                [
                                    [
                                        0,
                                        160.01100000000002
                                    ],
                                    [
                                        71.078125,
                                        160.01100000000002
                                    ],
                                    [
                                        142.15625,
                                        160.01100000000002
                                    ],
                                    [
                                        213.234375,
                                        160.01100000000002
                                    ],
                                    [
                                        284.3125,
                                        160.01100000000002
                                    ],
                                    [
                                        355.390625,
                                        160.01100000000002
                                    ],
                                    [
                                        426.46875,
                                        160.01100000000002
                                    ]
                                ]
                            ],
                            "dataLabelsRects": [],
                            "lastDrawnDataLabelsIndexes": [],
                            "hasNullValues": true,
                            "zoomed": false,
                            "gridWidth": 426.46875,
                            "gridHeight": 213.348,
                            "rotateXLabels": false,
                            "defaultLabels": false,
                            "yLabelFormatters": [
                                null
                            ],
                            "LINE_HEIGHT_RATIO": 1.618,
                            "xAxisLabelsHeight": 32.652,
                            "xAxisLabelsWidth": 45.09765625,
                            "yAxisLabelsWidth": 0,
                            "scaleX": 1,
                            "scaleY": 1,
                            "translateX": 48.53125,
                            "translateY": 47,
                            "translateYAxisX": [
                                15.53125
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
                                "lastHoverTime": 1684151306287,
                                "xyRatios": {
                                    "yRatio": [
                                        0.46871777565292383
                                    ],
                                    "invertedYRatio": 0.23448376932659193,
                                    "zRatio": null,
                                    "xRatio": 0.014069026159595516,
                                    "initialXRatio": 0.014069026159595516,
                                    "invertedXRatio": 0.02812306653917543,
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
                                "xaxisOffY": 214.348,
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
                                    71.078125,
                                    142.15625,
                                    213.234375,
                                    284.3125,
                                    355.390625,
                                    426.46875,
                                    497.546875
                                ],
                                "dataPointsDividedHeight": 30.478285714285715,
                                "dataPointsDividedWidth": 60.924107142857146,
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
                                    "x": 979.53125,
                                    "y": 268,
                                    "width": 426.46875,
                                    "height": 220.3480224609375,
                                    "top": 268,
                                    "right": 1406,
                                    "bottom": 488.3480224609375,
                                    "left": 979.53125
                                }
                            },
                            "series": [
                                [
                                    25,
                                    18,
                                    30,
                                    35,
                                    20,
                                    30,
                                    22
                                ],
                                [
                                    25,
                                    25,
                                    25,
                                    25,
                                    25,
                                    25,
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
                            "seriesRangeBar": [],
                            "seriesPercent": [
                                [
                                    50,
                                    41.86046511627907,
                                    54.54545454545455,
                                    58.333333333333336,
                                    44.44444444444444,
                                    54.54545454545455,
                                    46.808510638297875
                                ],
                                [
                                    50,
                                    58.13953488372093,
                                    45.45454545454545,
                                    41.666666666666664,
                                    55.55555555555556,
                                    45.45454545454545,
                                    53.191489361702125
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
                                ],
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
                                ],
                                null
                            ],
                            "seriesZ": [
                                [],
                                []
                            ],
                            "seriesNames": [
                                "Likes",
                                "Reviews"
                            ],
                            "seriesTotals": [
                                180,
                                175
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
                                50,
                                43,
                                55,
                                60,
                                45,
                                55,
                                47
                            ],
                            "seriesXvalues": [
                                [
                                    0,
                                    71.078125,
                                    142.15625,
                                    213.234375,
                                    284.3125,
                                    355.390625,
                                    426.46875
                                ],
                                [
                                    0,
                                    71.078125,
                                    142.15625,
                                    213.234375,
                                    284.3125,
                                    355.390625,
                                    426.46875
                                ]
                            ],
                            "seriesYvalues": [
                                [
                                    160.01100000000002,
                                    174.94536,
                                    149.3436,
                                    138.6762,
                                    170.6784,
                                    149.3436,
                                    166.41144000000003
                                ],
                                [
                                    160.01100000000002,
                                    160.01100000000002,
                                    160.01100000000002,
                                    160.01100000000002,
                                    160.01100000000002,
                                    160.01100000000002,
                                    160.01100000000002
                                ]
                            ],
                            "categoryLabels": [
                                "01 / Mon",
                                "02 / Tue",
                                "03 / Wed",
                                "04 / Thu",
                                "05 / Fri",
                                "06 / Sat",
                                "07 / Sun"
                            ],
                            "selectionResizeTimer": null,
                            "isXNumeric": true,
                            "xaxisLabelsCount": 7,
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
                                    "width": 28.53125,
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
                                100
                            ],
                            "zRange": null,
                            "dataPoints": 7,
                            "xTickAmount": 5,
                            "xyCharts": true,
                            "isBarHorizontal": false,
                            "chartClass": ".apexchartsbEubC",
                            "comboBarCount": 0,
                            "isRangeBar": false,
                            "xAxisHeight": 32.652,
                            "yLogRatio": [
                                0.46871777565292383
                            ],
                            "logYRange": [
                                null
                            ],
                            "hasNegs": true
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
                            "01 / Mon",
                            "02 / Tue",
                            "03 / Wed",
                            "04 / Thu",
                            "05 / Fri",
                            "06 / Sat",
                            "07 / Sun"
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
                        "minX": 1,
                        "maxX": 7
                    },
                    "dimensions": {
                        "lgRect": {
                            "x": 931,
                            "y": 221,
                            "height": 17,
                            "width": 500
                        },
                        "yAxisWidth": 33.53125,
                        "yAxisWidthLeft": 33.53125,
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
                        "xAxisWidth": 45.09765625
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
                                        "maxX": 426.46875,
                                        "maxY": 213.348
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
                        "defaultSize": 213.348,
                        "centerY": 106.674,
                        "centerX": 213.234375,
                        "fullAngle": 360,
                        "initialAngle": 0,
                        "donutSize": 63.096926829268305,
                        "maxY": 0,
                        "sliceLabels": [],
                        "sliceSizes": [],
                        "prevSectorAngleArr": []
                    },
                    "rangeBar": {
                        "isHorizontal": false,
                        "strokeWidth": 3,
                        "isNullValue": false,
                        "isRangeBar": 0,
                        "xRatio": 0.014069026159595516,
                        "initialXRatio": 0.014069026159595516,
                        "invertedXRatio": 0.02812306653917543,
                        "invertedYRatio": 0.23448376932659193,
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
                        "xDivision": 60.924107142857146
                    }
                }
            }
        ]
    }
  return (
   <>
   <ReactApexcharts type='line' options={options} series={options.series} width={800}  height={300} style={{marginTop:'25px'}} />
   </>
  )
}

export default CompaignLine