console.log("파일이 임포트 되었습니다");

let num = 123
let str = "456"
let bit = true
console.log("=========Note===========")
console.log(`${typeof (num)} 타입 ${num}의 자료형을 변환하면`)
console.log(String(num), typeof String(num))
console.log(Boolean(num), typeof Boolean(num))
console.log(`${typeof (str)}타입 ${str}의 자료형을 반환하면`)
console.log(Number(str), typeof Number(str))
console.log(Boolean(str), typeof Boolean(str))
console.log(`${typeof (bit)}타입 ${bit}의 자료형을 변환하면`)
console.log(String(bit), typeof String(bit))
console.log(Number(bit), typeof Number(bit))
console.log("===========================")
console.log("num+str", num + str, typeof (num + str))
console.log("num+bit", num + bit, typeof (num + bit))
console.log("bit+str", bit + str, typeof (bit + str))
console.log("===========================")
console.log('num+"":', num + "", typeof (num + ""))
console.log('!!num:', !!num, typeof (!!num))
console.log('str*1:', str * 1, typeof (str * 1))
console.log('+str:', +str, typeof (+str))
console.log('!!str:', !!str, typeof (!!str))
console.log('bit+"":', bit + "", typeof (bit + ""))
console.log('bit*1:', bit * 1, typeof (bit * 1))
console.log('+bit:', +bit, typeof (+bit))
