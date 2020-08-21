exports.handler = async function http(req){
  let { word } = req.pathParameters
  return {
    statusCode: 200,
    headers: {
      'content-type':'application/json; charset=utf-8'
    },
    body: JSON.stringify({echo: word})
  }
}