import React from 'react'
import ReactApexcharts from 'react-apexcharts'


const ComapaignDonut = () => {
  const options = {
    "chart": {
        "animations": {
            "enabled": false
        },
        "dropShadow": {
            "top": 0,
            "left": 0,
            "blur": 0
        },
        "foreColor": "#333",
        "fontFamily": "Roboto",
        "height": 250,
        "id": "vby2M",
        "toolbar": {
            "show": false
        },
        "type": "donut",
        "width": 300
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
        "#1C4881",
        "#B21072",
        "#F93F00",
        "#CDB008"
    ],
    "dataLabels": {
        "enabled": false,
        "offsetX": -1,
        "offsetY": -1,
        "style": {
            "fontSize": 15,
            "fontWeight": 700
        }
    },
    "fill": {
        "opacity": 1
    },
    "grid": {
        "padding": {
            "bottom": 12,
            "left": 1,
            "right":35
        },
       
    },
    "labels": [
        "5/30",
        "4/30",
        "3/30",
        "2/5",
        "1/5"
    ],
    "legend": {
        "position": "right",
        "fontSize": 15,
        "fontWeight": 500,
        "offsetX": 16,
        "offsetY": 0,
        "markers": {
            "width": 13,
            "radius": 50
        },
        "itemMargin": {
            "vertical": 5
        }
    },
    "series": [
        11,
        24,
        32,
        13,
        32
    ],
    "stroke": {
        "colors": [
            "#fff"
        ]
    },
    "tooltip": {
        "fillSeriesColor": true
    },
    "xaxis": {
        "labels": {
            "trim": true,
            "style": {}
        },
        "title": {
            "style": {
                "fontWeight": 700
            }
        }
    },
    "yaxis": {
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
    }
}
  return (
    <ReactApexcharts type='donut'  options={options} series={options.series} height={200} style={{paddingRight:'0px'}}/>
  )
}

export default ComapaignDonut