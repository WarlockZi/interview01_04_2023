export default async function ajaxDecorator(url, data, method = "POST") {
  return new Promise(async function (resolve, reject) {

      let req = new XMLHttpRequest();
      req.open(method, url, true);
      req.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      if (data instanceof FormData) {
        req.send(data);
      } else {
        req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        req.send('param=' + JSON.stringify(data));
      }
      req.onerror = function (e) {
        reject(Error("Network Error" + e.message));
      };
      req.onload = function () {
        const res = JSON.parse(req.response)
        resolve(res);
      }
    }
  )
}