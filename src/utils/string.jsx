import { isString } from "lodash/fp";

export const truncate = (input, length, ellipses = true, strip_html = true) => {
  //strip tags, if desired
  if (!input) {
    return input;
  }
  if (strip_html) {
    input = input.replace(/(<([^>]+)>)/gi, "");
  }

  //no need to trim, already shorter than trim length
  if (input.length <= length) {
    return input;
  }
  //find last space within length
  var sub = input.substring(0, length);
  var last_space = sub.lastIndexOf(" ");
  var trimmed_text = input.substr(0, last_space);

  //add ellipses (...)
  if (ellipses) {
    trimmed_text += "...";
  }
  return trimmed_text;
};

export const getFriendlyName = (str) => {
  if (!str || !isString(str)) {
    return str;
  }

  str = str.trim();
  str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, "a");
  str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, "e");
  str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, "i");
  str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, "o");
  str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, "u");
  str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, "y");
  str = str.replace(/(đ)/g, "d");
  str = str.replace(/(À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ)/g, "A");
  str = str.replace(/(È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ)/g, "E");
  str = str.replace(/(Ì|Í|Ị|Ỉ|Ĩ)/g, "I");
  str = str.replace(/(Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ)/g, "O");
  str = str.replace(/(Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ)/g, "U");
  str = str.replace(/(Ỳ|Ý|Ỵ|Ỷ|Ỹ)/g, "Y");
  str = str.replace(/(Đ)/g, "D");
  str = str.replace("(", "");
  str = str.replace(")", "");
  str = str.replace("?", "");
  str = str.replace("%", "pt");
  str = str.replace("/", "-");
  str = str.replace(",", "");
  str = str.replace(":", "");
  str = str.replace("+", "");
  str = str.replace('"', "");
  str = str.replace("'", "");
  str = str.replace("&*#34;", "");
  str = str.replace("*", "-sao-");
  str = str.replace("&", "va");

  str = str.replace(".", "", str.replace("&*#39;", "", str));
  str = str.replace(" ", "-", str.replace("&*#39;", "", str));
  str = str.replace("---", "-");
  str = str.replace("--", "-");
  str = str.replace("[", "-");
  str = str.replace("]", "-");
  str = str.replace('"', "-");
  str = str.replace("'", "-");
  str = str.replace("'", "-");
  str = str.replace(/\s+/g, "-");
  return str.toLowerCase();
};

export const removeUnicodeText = (str) => {
  if (!str) {
    return "";
  }
  str = str.trim();
  str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, "a");
  str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, "e");
  str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, "i");
  str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, "o");
  str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, "u");
  str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, "y");
  str = str.replace(/(đ)/g, "d");
  str = str.replace(/(À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ)/g, "A");
  str = str.replace(/(È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ)/g, "E");
  str = str.replace(/(Ì|Í|Ị|Ỉ|Ĩ)/g, "I");
  str = str.replace(/(Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ)/g, "O");
  str = str.replace(/(Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ)/g, "U");
  str = str.replace(/(Ỳ|Ý|Ỵ|Ỷ|Ỹ)/g, "Y");
  str = str.replace(/(Đ)/g, "D");
  return str.toLowerCase();
};
