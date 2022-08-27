export default async (req, res, next) => {
  let url = req._parsedUrl.pathname.replace(/^\/+|\/+$|\.+/g, "")
  url = url.split('/')
  console.log('url: \n', url)
  const method = url.pop()
  console.log('method: \n', method)
  const controller = url.slice(1).join('/')
  console.log('controller: \n', controller)
  const api = require('../api/' + controller)
  console.log('api: \n', api[method])
  const result = await api[method](req.params)
  res.end(JSON.stringify(result))
}