var theme = {
color: [
  '#26B99A', '#34495E', '#BDC3C7', '#3498DB',
  '#9B59B6', '#8abb6f', '#759c6a', '#bfd3b7'
],

title: {
  itemGap: 8,
  textStyle: {
    fontWeight: 'normal',
    color: '#408829'
  }
},

dataRange: {
  color: ['#1f610a', '#97b58d']
},

toolbox: {
  color: ['#408829', '#408829', '#408829', '#408829']
},

tooltip: {
  backgroundColor: 'rgba(0,0,0,0.5)',
  axisPointer: {
    type: 'line',
    lineStyle: {
      color: '#408829',
      type: 'dashed'
    },
    crossStyle: {
      color: '#408829'
    },
    shadowStyle: {
      color: 'rgba(200,200,200,0.3)'
    }
  }
},

dataZoom: {
  dataBackgroundColor: '#eee',
  fillerColor: 'rgba(64,136,41,0.2)',
  handleColor: '#408829'
},
grid: {
  borderWidth: 0
},

categoryAxis: {
  axisLine: {
    lineStyle: {
      color: '#408829'
    }
  },
  splitLine: {
    lineStyle: {
      color: ['#eee']
    }
  }
},

valueAxis: {
  axisLine: {
    lineStyle: {
      color: '#408829'
    }
  },
  splitArea: {
    show: true,
    areaStyle: {
      color: ['rgba(250,250,250,0.1)', 'rgba(200,200,200,0.1)']
    }
  },
  splitLine: {
    lineStyle: {
      color: ['#eee']
    }
  }
},
timeline: {
  lineStyle: {
    color: '#408829'
  },
  controlStyle: {
    normal: {color: '#408829'},
    emphasis: {color: '#408829'}
  }
},

k: {
  itemStyle: {
    normal: {
      color: '#68a54a',
      color0: '#a9cba2',
      lineStyle: {
        width: 1,
        color: '#408829',
        color0: '#86b379'
      }
    }
  }
},
map: {
  itemStyle: {
    normal: {
      areaStyle: {
        color: '#ddd'
      },
      label: {
        textStyle: {
          color: '#c12e34'
        }
      }
    },
    emphasis: {
      areaStyle: {
        color: '#99d2dd'
      },
      label: {
        textStyle: {
          color: '#c12e34'
        }
      }
    }
  }
},
force: {
  itemStyle: {
    normal: {
      linkStyle: {
        strokeColor: '#408829'
      }
    }
  }
},
chord: {
  padding: 4,
  itemStyle: {
    normal: {
      lineStyle: {
        width: 1,
        color: 'rgba(128, 128, 128, 0.5)'
      },
      chordStyle: {
        lineStyle: {
          width: 1,
          color: 'rgba(128, 128, 128, 0.5)'
        }
      }
    },
    emphasis: {
      lineStyle: {
        width: 1,
        color: 'rgba(128, 128, 128, 0.5)'
      },
      chordStyle: {
        lineStyle: {
          width: 1,
          color: 'rgba(128, 128, 128, 0.5)'
        }
      }
    }
  }
},
gauge: {
  startAngle: 225,
  endAngle: -45,
  axisLine: {
    show: true,
    lineStyle: {
      color: [[0.2, '#86b379'], [0.8, '#68a54a'], [1, '#408829']],
      width: 8
    }
  },
  axisTick: {
    splitNumber: 10,
    length: 12,
    lineStyle: {
      color: 'auto'
    }
  },
  axisLabel: {
    textStyle: {
      color: 'auto'
    }
  },
  splitLine: {
    length: 18,
    lineStyle: {
      color: 'auto'
    }
  },
  pointer: {
    length: '90%',
    color: 'auto'
  },
  title: {
    textStyle: {
      color: '#333'
    }
  },
  detail: {
    textStyle: {
      color: 'auto'
    }
  }
},
textStyle: {
  fontFamily: 'Arial, Verdana, sans-serif'
}
};

var setTimePerTalker = function(echartPie, response){

    var data = [];
    console.log("member", response.member)
    for(var i=0;i<response.time_per_talker.length;i++){
      data.push({
        value: response.time_per_talker[i][1],
        name: response.member[response.time_per_talker[i][0]].uname
      })
    }

  var settings = {
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      x: 'center',
      y: 'bottom',
      data: []
    },
    toolbox: {
      show: true,
      feature: {
      magicType: {
        show: true,
        type: ['pie', 'funnel'],
        option: {
        funnel: {
          x: '25%',
          width: '50%',
          funnelAlign: 'left',
          max: 1548
        }
        }
      },
      saveAsImage: {
        show: true,
        title: "Save Image"
      }
      }
    },
    calculable: true,
    series: [{
      name: '발언자',
      type: 'pie',
      radius: '55%',
      center: ['50%', '48%'],
      data: data
    }]
  };


  echartPie.setOption(settings);
}

var setTimePerCluster = function(echartBar, response) {

  var data = [response.time_all];
  var data_sub = [0,0];
  var data_name = ['총 소요시간'];
  for(var i=0;i<response.time_per_cluster.length;i++) {
    data.push(response.time_per_cluster[i]);
    if(i == response.time_per_cluster.length-2) continue;
    data_sub.push(response.time_per_cluster[i-1]);
    data_name.push('주제'+(i+1));
  }

  console.log(data);

  var settings = {
    tooltip: {
      trigger: 'axis',
      axisPointer : {
        type : 'shadow'
      },
      formatter: function (params) {
        var tar = params[1];
        return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
      }
    },
    toolbox: {
      show: true,
      feature: {
      saveAsImage: {
        show: true,
        title: "Save Image"
      }
      }
    },
    calculable: true,
    xAxis: [{
      type: 'value',
      boundaryGap: [0, 0.01]
    }],
    yAxis: [{
      type: 'category',
      data: data_name
    }],
    series: [
    {
      name: '보조',
      type: 'bar',
      stack: '총 소요시간',
      itemStyle: {
        normal: {
          barBorderColor: 'rgba(0,0,0,0)',
          color: 'rgba(0,0,0,0)'
        },
        emphasis: {
          barBorderColor: 'rgba(0,0,0,0)',
          color: 'rgba(0,0,0,0)'
        }
      },
      data: data_sub
    },
    {
      name: '소요시간',
      type: 'bar',
      stack: '총 소요시간',
      label: {
        normal: {
          show: true,
          position: 'inside'
        }
      },
      data: data
    }
    ]
  };

  echartBar.setOption(settings);
}