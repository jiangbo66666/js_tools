/**
 * @description: 将数字转换成货币字符串
 * @param {*} num
 * @param {*} separate
 * @param {*} separateLen
 * @return {*}
 */
function currencyStr(num, separate =",", separateLen = 3){
  let separateNum,
    strList = []
  if(!num){
    return 0
  }
  // 转换成字符串计算长度
  let str = String(num)
  // 取余判断间隔符的长度
  if(str.length % separateLen){
    separateNum = parseInt(str.length / separateLen)
  }else{
    separateNum = ((str.length / separateLen) - 1)  
  }
  //循环截取三位字符串 
  for(var i = 0; i < separateNum ; i++ ){
    let last = -separateLen*i,
      start = -separateLen* (i+1)
      if(last === 0){
        // 末位为0不传参
        strList.unshift(str.slice(start))
      }else{
        strList.unshift(str.slice(start,last))
      }
  }
  // 最后一次长度不定，直接从头开始截取
  // 无间隔符的时候直接保留原有数据
  if(separateNum == 0){
    strList.unshift(str)
  }else{
    strList.unshift(str.slice(0,-separateLen*i))
  }
  // 按照需要的字符串拼接
  return strList.join(separate)
}



export {
  currencyStr
}