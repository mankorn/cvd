function initData() {
  jimData.variables["n"] = "0";
  jimData.datamasters["scan"] = [
    {
      "id": 1,
      "datamaster": "scan",
      "userdata": {
        "设备厂商": "微软",
        "设备型号": "windows",
        "固件号": "10",
        "是否发现漏洞": ""
      }
    },
    {
      "id": 2,
      "datamaster": "scan",
      "userdata": {
        "设备厂商": "甲骨文",
        "设备型号": "mysql",
        "固件号": "5.0",
        "是否发现漏洞": ""
      }
    },
    {
      "id": 3,
      "datamaster": "scan",
      "userdata": {
        "设备厂商": "西门子",
        "设备型号": "s7",
        "固件号": "1500",
        "是否发现漏洞": ""
      }
    },
    {
      "id": 4,
      "datamaster": "scan",
      "userdata": {
        "设备厂商": "亚控科技",
        "设备型号": "kingview",
        "固件号": "7.5",
        "是否发现漏洞": ""
      }
    }
  ];
  jimData.datamasters["scan"].category = {
    "是否发现漏洞": [""]
  };

  jimData.datamasters["漏洞"] = [
    {
      "id": 1,
      "datamaster": "漏洞",
      "userdata": {
        "作用设备": "windows",
        "名称": "ftp漏洞"
      }
    },
    {
      "id": 2,
      "datamaster": "漏洞",
      "userdata": {
        "作用设备": "windows",
        "名称": "mysql 漏洞"
      }
    },
    {
      "id": 3,
      "datamaster": "漏洞",
      "userdata": {
        "作用设备": "windows",
        "名称": "tcp漏洞"
      }
    },
    {
      "id": 4,
      "datamaster": "漏洞",
      "userdata": {
        "作用设备": "windows",
        "名称": "smtp漏洞"
      }
    }
  ];

  jimData.isInitialized = true;
}