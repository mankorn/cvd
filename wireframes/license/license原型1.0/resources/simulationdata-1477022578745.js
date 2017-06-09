function initData() {
  jimData.variables["t"] = "";
  jimData.datamasters["模块列表"] = [
    {
      "id": 1,
      "datamaster": "模块列表",
      "userdata": {
        "模块名称": "漏洞挖掘",
        "模块代号": "ldwj",
        "模块类型": "布尔",
        "操作": "修改",
        "opt_del": "删除",
        "id": "1"
      }
    },
    {
      "id": 2,
      "datamaster": "模块列表",
      "userdata": {
        "模块名称": "根源分析",
        "模块代号": "gyfx",
        "模块类型": "字符串",
        "操作": "修改",
        "opt_del": "删除",
        "id": "2"
      }
    },
    {
      "id": 3,
      "datamaster": "模块列表",
      "userdata": {
        "模块名称": "支持协议",
        "模块代号": "zcxy",
        "模块类型": "复选",
        "操作": "修改",
        "opt_del": "删除",
        "id": "3"
      }
    },
    {
      "id": 4,
      "datamaster": "模块列表",
      "userdata": {
        "模块名称": "工控挖掘",
        "模块代号": "gkwj",
        "模块类型": "数字",
        "操作": "修改",
        "opt_del": "删除",
        "id": "4"
      }
    }
  ];
  jimData.datamasters["模块列表"].category = {
    "模块类型": ["数字","字符串","布尔","复选","单选"]
  };

  jimData.datamasters["testcase"] = [
    {
      "id": 1,
      "datamaster": "testcase",
      "userdata": {
        "select": "",
        "name": "modbus0"
      }
    },
    {
      "id": 2,
      "datamaster": "testcase",
      "userdata": {
        "select": "",
        "name": "modbus01"
      }
    },
    {
      "id": 3,
      "datamaster": "testcase",
      "userdata": {
        "select": "",
        "name": "modbus02"
      }
    },
    {
      "id": 4,
      "datamaster": "testcase",
      "userdata": {
        "select": "",
        "name": "modbus03"
      }
    },
    {
      "id": 5,
      "datamaster": "testcase",
      "userdata": {
        "select": "",
        "name": "modbus04"
      }
    },
    {
      "id": 6,
      "datamaster": "testcase",
      "userdata": {
        "select": "",
        "name": "modbus05"
      }
    },
    {
      "id": 7,
      "datamaster": "testcase",
      "userdata": {
        "select": "",
        "name": "modbus06"
      }
    },
    {
      "id": 8,
      "datamaster": "testcase",
      "userdata": {
        "select": "",
        "name": "modbus07"
      }
    },
    {
      "id": 9,
      "datamaster": "testcase",
      "userdata": {
        "select": "",
        "name": "modbus08"
      }
    },
    {
      "id": 10,
      "datamaster": "testcase",
      "userdata": {
        "select": "",
        "name": "modbus09"
      }
    },
    {
      "id": 11,
      "datamaster": "testcase",
      "userdata": {
        "select": "",
        "name": "modbus11"
      }
    },
    {
      "id": 12,
      "datamaster": "testcase",
      "userdata": {
        "select": "",
        "name": "modbus12"
      }
    },
    {
      "id": 13,
      "datamaster": "testcase",
      "userdata": {
        "select": "",
        "name": "modbus13"
      }
    },
    {
      "id": 14,
      "datamaster": "testcase",
      "userdata": {
        "select": "",
        "name": "modbus14"
      }
    },
    {
      "id": 15,
      "datamaster": "testcase",
      "userdata": {
        "select": "",
        "name": "modbus15"
      }
    },
    {
      "id": 16,
      "datamaster": "testcase",
      "userdata": {
        "select": "",
        "name": "modbus16"
      }
    },
    {
      "id": 17,
      "datamaster": "testcase",
      "userdata": {
        "select": "",
        "name": "modbus17"
      }
    },
    {
      "id": 18,
      "datamaster": "testcase",
      "userdata": {
        "select": "",
        "name": "modbus18"
      }
    },
    {
      "id": 19,
      "datamaster": "testcase",
      "userdata": {
        "select": "",
        "name": "modbus19"
      }
    },
    {
      "id": 20,
      "datamaster": "testcase",
      "userdata": {
        "select": "",
        "name": "modbus20"
      }
    }
  ];

  jimData.datamasters["类型"] = [
    {
      "id": 1,
      "datamaster": "类型",
      "userdata": {
        "type": "数字"
      }
    },
    {
      "id": 2,
      "datamaster": "类型",
      "userdata": {
        "type": "布尔"
      }
    },
    {
      "id": 3,
      "datamaster": "类型",
      "userdata": {
        "type": "字符串"
      }
    },
    {
      "id": 4,
      "datamaster": "类型",
      "userdata": {
        "type": "复选"
      }
    },
    {
      "id": 5,
      "datamaster": "类型",
      "userdata": {
        "type": "单选"
      }
    }
  ];

  jimData.datamasters["复选"] = [
    {
      "id": 1,
      "datamaster": "复选",
      "userdata": {
        "名称": "",
        "代码": "",
        "操作": ""
      }
    }
  ];

  jimData.isInitialized = true;
}