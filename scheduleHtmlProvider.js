function scheduleHtmlProvider(iframeContent = "", frameContent = "") {
      var sch = document.querySelector('#kblist_table')
      if (!sch) {
            let TriPrompto = `
            没有获取到课表哦
            导入流程：
             >> 输入账号密码 账号是学号
                默认密码: 
                 新生 > 身份证号后六位
                 老生 > zfsoft123
             >> 点击右上角头像旁三条横线
             >> 依次: 选课>学生课表查询
             >> 点击<一键导入>
            `
            alert(TriPrompto)
      }
      return sch.outerHTML
}
