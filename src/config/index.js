/**
 * 环境配置封装
 */
const env = import.meta.env.MODE || 'prod'
const EnvConfig = {
  dev: {
    baseApi: '/',
    mockApi: 'https://www.fastmock.site/mock/811183845320cf0a4b67ca2f815157c4/api'
  },
  test: {
    baseApi: '/',
    mockApi: 'https://www.fastmock.site/mock/811183845320cf0a4b67ca2f815157c4/api'
  },
  prod: {
    baseApi: '/',
    mockApi: 'https://www.fastmock.site/mock/811183845320cf0a4b67ca2f815157c4/api'
  }
}
export default {
  env: 'dev',
  mock: true,
  ...EnvConfig[env]
}