(function(window, undefined) {
  var dictionary = {
    "a17b4030-a70e-4f8b-8e1a-41e83ffb9348": "日志_user",
    "4b21731a-bcc3-4738-a703-e4a64063fe8a": "管理员信息",
    "2fbc54ed-1a06-46ec-bc84-4b29385c270b": "总览_review",
    "17455ed7-49cd-471f-9589-20cbb2234eae": "日志",
    "8d8ab8c1-2856-4cfc-af45-3d6c147484c0": "总览_user",
    "0c69b140-a189-4a68-881f-de40f8f3730e": "日志_review",
    "e9d10b41-68b5-431f-8056-ea384d831a59": "数据库信息_user",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "总览",
    "9224dea7-6505-43db-bd0d-2c9f2525d398": "数据库信息_review",
    "76a5168d-ae8e-4ca3-9f55-2fc5089563b7": "用户信息",
    "26c63113-634b-4e7d-9a8c-1116c6b4e8ff": "数据库信息",
    "5aebe8ec-2a5b-4543-87c5-3f9c9d0959c0": "用户信息_review",
    "ef1f936d-f83e-4dd6-afc5-ac697b025144": "数据库信息_新增_user",
    "451ddfbc-1bc9-4720-9560-bbad95f165c1": "登录",
    "87db3cf7-6bd4-40c3-b29c-45680fb11462": "960 grid - 16 columns",
    "e5f958a4-53ae-426e-8c05-2f7d8e00b762": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "cc937713-d6fe-4123-84b2-40e85945bf13": "left_superadmin",
    "45f15936-a12a-49c3-b88f-3d64175583c7": "left_review",
    "c3f64b60-0502-4c9a-8a96-b1ecdaec5a83": "head",
    "81ab12d0-0d05-498e-8704-0eead8700482": "main_bg",
    "522572d4-e9f8-4fe6-8fec-8653d4ac7fc6": "left_user",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);