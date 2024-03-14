
module.exports = {
  plugins: {
    'autoprefixer': {
      overrideBrowserslist: [
        "Android 4.1",
        "iOS 7.1",
        "Chrome > 31",
        "ff > 31",
        "ie >= 8"
      ]
    },
// Non responsive layouts can be deleted
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*']
    }
  }
}

// or     
// const PxToRem=require("postcss-pxtorem")
// module.exports={
//     plugins:[
//         PxToRem({
//             rootValue:37.5,
//             propList:["*"],
//             ...剩余属性参考官网配置
//         })
//     ]
// }