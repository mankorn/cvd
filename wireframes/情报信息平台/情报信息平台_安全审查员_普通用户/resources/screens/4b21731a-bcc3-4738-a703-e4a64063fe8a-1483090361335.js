jQuery("#simulation")
  .on("click", ".s-4b21731a-bcc3-4738-a703-e4a64063fe8a .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is(".s-Label_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Text_30",
                    "value": "编辑"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_13",
                    "value": {
                      "datatype": "property",
                      "target": ".s-Input_1",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_14",
                    "value": {
                      "datatype": "property",
                      "target": ".s-Input_2",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_1",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is(".s-Label_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimDeleteData",
                  "parameter": {
                    "datatype": "datarow",
                    "datamaster": "managerinfo",
                    "element": "#s-managerdatabase"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Text_27",
                    "value": {
                      "action": "jimMinus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Text_27",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/4b21731a-bcc3-4738-a703-e4a64063fe8a"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_1",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Text_30",
                    "value": "新增"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_14",
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimEnable",
                  "parameter": {
                    "target": "#s-Input_14"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_15",
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_16",
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_18",
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_13",
                    "value": {
                      "datatype": "property",
                      "target": "#s-Text_27",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_31")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Text_30",
                  "property": "jimGetValue"
                },"新增" ]
              },
              "actions": [
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "managerinfo",
                    "fields": {
                      "用户 ID": {
                        "datatype": "property",
                        "target": "#s-Input_13",
                        "property": "jimGetValue"
                      },
                      "用户名": {
                        "datatype": "property",
                        "target": "#s-Input_14",
                        "property": "jimGetValue"
                      },
                      "操作权限": {
                        "datatype": "property",
                        "target": "#s-Category_2",
                        "property": "jimGetSelectedValue"
                      },
                      "密码": {
                        "datatype": "property",
                        "target": "#s-Input_15",
                        "property": "jimGetValue"
                      },
                      "姓名": {
                        "datatype": "property",
                        "target": "#s-Input_16",
                        "property": "jimGetValue"
                      },
                      "性别": {
                        "datatype": "property",
                        "target": "#s-Input_17",
                        "property": "jimGetValue"
                      },
                      "部门": {
                        "datatype": "property",
                        "target": "#s-Input_18",
                        "property": "jimGetValue"
                      },
                      "职位": {
                        "datatype": "property",
                        "target": "#s-Input_19",
                        "property": "jimGetValue"
                      },
                      "邮箱": {
                        "datatype": "property",
                        "target": "#s-Input_20",
                        "property": "jimGetValue"
                      },
                      "手机号": {
                        "datatype": "property",
                        "target": "#s-Input_21",
                        "property": "jimGetValue"
                      },
                      "公司名称": {
                        "datatype": "property",
                        "target": "#s-Input_22",
                        "property": "jimGetValue"
                      },
                      "注册时间": null,
                      "授权状态": null,
                      "最后登录时间": null
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_1",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/4b21731a-bcc3-4738-a703-e4a64063fe8a"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Text_30",
                  "property": "jimGetValue"
                },"编辑" ]
              },
              "actions": [
                {
                  "action": "jimUpdateData",
                  "parameter": {
                    "fields": {
                      "用户 ID": null,
                      "用户名": null,
                      "操作权限": {
                        "datatype": "property",
                        "target": "#s-Category_2",
                        "property": "jimGetSelectedValue"
                      },
                      "密码": {
                        "datatype": "property",
                        "target": "#s-Input_15",
                        "property": "jimGetValue"
                      },
                      "姓名": {
                        "datatype": "property",
                        "target": "#s-Input_16",
                        "property": "jimGetValue"
                      },
                      "性别": {
                        "datatype": "property",
                        "target": "#s-Input_17",
                        "property": "jimGetSelectedValue"
                      },
                      "部门": {
                        "datatype": "property",
                        "target": "#s-Input_18",
                        "property": "jimGetValue"
                      },
                      "职位": {
                        "datatype": "property",
                        "target": "#s-Input_19",
                        "property": "jimGetValue"
                      },
                      "邮箱": {
                        "datatype": "property",
                        "target": "#s-Input_20",
                        "property": "jimGetValue"
                      },
                      "手机号": {
                        "datatype": "property",
                        "target": "#s-Input_21",
                        "property": "jimGetValue"
                      },
                      "公司名称": {
                        "datatype": "property",
                        "target": "#s-Input_22",
                        "property": "jimGetValue"
                      },
                      "注册时间": null,
                      "授权状态": null,
                      "最后登录时间": null
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_1",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/4b21731a-bcc3-4738-a703-e4a64063fe8a"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_32")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_1",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
    jFirer.parents("tr.datarow").trigger("click", true);
  })
  .on("pageload", ".s-4b21731a-bcc3-4738-a703-e4a64063fe8a .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-4b21731a-bcc3-4738-a703-e4a64063fe8a")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Text_27",
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "action": "jimMaxData",
                        "parameter": {
                          "datatype": "datamaster",
                          "datamaster": "managerinfo",
                          "value": {
                            "field": "用户 ID"
                          }
                        }
                      },"1" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_13",
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Text_27",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });