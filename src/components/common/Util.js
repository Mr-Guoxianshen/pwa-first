
const _this = this;
const Util = {
  isPhone(str){ // 是否为手机号
    str = str || ''
    var reg = /^[1][3,4,5,7,8][0-9]{9}$/
    if (!reg.test(str)) {
      return false
    }
    return true
  },

  getNowDate(){
    let date = new Date().toLocaleDateString();
    return date.replace(/\//g, '-');
  },

  getDate(str){
    str = str || this.getNowDate();
    if (str.indexOf('T') > 0) {
      return str.split('T')[0];
    } else {
      return str;
    }
  },

  delSpace(str){
    str = str || '';
    return str.replace(/&nbsp;/g, '');
  },

  delHtmlTag(str) {
    str = str || '';
    return str.replace(/<[^>]+>/g, ""); // 去掉所有的html标记
  },

  strHandle(str){
    str = str || '';
    str = this.delSpace(str);
    str = this.delHtmlTag(str);
    return str;
  },

  changeLine(str){
    if (typeof str == 'string') {
      str = str || '';
      str = this.delSpace(str);
      str = this.delHtmlTag(str);
      return str.split('\n');
    } else {
      return str;
    }
  },

  getStorage(key){
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key))
    } else {
      return false
    }
  },

  setStorage(key, value){
    localStorage.setItem(key, JSON.stringify(value))
  },

  removeStorage(key){
    if (localStorage.getItem(key)) {
      localStorage.removeItem(key)
    }
  },
}


export default Util;
