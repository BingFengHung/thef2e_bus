import axios from 'axios'
import jsSHA from 'jssha'

function getAuthorizationHeader() {
  //  填入自己 ID、KEY 開始
  let AppID = "83fc39f9c29946578ee26c17b458f970";
  let AppKey = "0o53fh7JHKpoZBW2kIM8SM7GW4Y";
  //  填入自己 ID、KEY 結束
  let GMTString = new Date().toGMTString();
  let ShaObj = new jsSHA("SHA-1", "TEXT");
  ShaObj.setHMACKey(AppKey, "TEXT");
  ShaObj.update("x-date: " + GMTString);
  let HMAC = ShaObj.getHMAC("B64");
  let Authorization =
    'hmac username="' +
    AppID +
    '", algorithm="hmac-sha1", headers="x-date", signature="' +
    HMAC +
    '"';
  return { Authorization: Authorization, "X-Date": GMTString };
}

async function getData(query) {
	try {
		axios.defaults.baseURL = 'https://ptx.transportdata.tw/MOTC'
		axios.defaults.headers = getAuthorizationHeader();
		let res = await axios.get(query) 
		if (res.status === 200) {
			return res.data
		}
	}
	catch (err) {
		console.log(err);
	}

	return null;
}

export default getData;