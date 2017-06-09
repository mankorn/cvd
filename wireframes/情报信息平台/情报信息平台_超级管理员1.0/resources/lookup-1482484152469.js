(function(window, undefined) {
  var dictionary = {
    "26c63113-634b-4e7d-9a8c-1116c6b4e8ff": "数据库信息",
    "76a5168d-ae8e-4ca3-9f55-2fc5089563b7": "用户信息",
    "4b21731a-bcc3-4738-a703-e4a64063fe8a": "管理员信息",
    "17455ed7-49cd-471f-9589-20cbb2234eae": "日志",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "总览",
    "87db3cf7-6bd4-40c3-b29c-45680fb11462": "960 grid - 16 columns",
    "e5f958a4-53ae-426e-8c05-2f7d8e00b762": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "cc937713-d6fe-4123-84b2-40e85945bf13": "left_superadmin",
    "c3f64b60-0502-4c9a-8a96-b1ecdaec5a83": "head",
    "81ab12d0-0d05-498e-8704-0eead8700482": "main_bg",
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