module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/vue-film/dist/'
      : '/',
      devServer:{
        proxy:{
          '/gateway':{
            target:'https://m.maizuo.com',
            changeOrigin:true
          },
          '/ajax':{
            target:'https://m.maoyan.com',
            changeOrigin:true
          }
          
        }
      }
  }