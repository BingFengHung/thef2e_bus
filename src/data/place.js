const placeName = 
`臺北市:Taipei
新北市:NewTaipei
桃園市:Taoyuan
臺中市:Taichung
臺南市:Tainan
高雄市:Kaohsiung
基隆市:Keelung
新竹市:Hsinchu
新竹縣:HsinchuCounty
苗栗縣:MiaoliCounty
彰化縣:ChanghuaCounty
南投縣:NantouCounty
雲林縣:YunlinCounty
嘉義縣:ChiayiCounty
嘉義市:Chiayi
屏東縣:PingtungCounty
宜蘭縣:YilanCounty
花蓮縣:HualienCounty
臺東縣:TaitungCounty
金門縣:KinmenCounty
澎湖縣:PenghuCounty
連江縣:LienchiangCounty`;

let places = placeName.split(/\r?\n/);
export const placeList = places.map(i => i.split(':'))


// 取得市區所有公車路線
// /v2/Bus/Route/City/{City}
// 全縣市

// 取得預估到站資料[批次更新]
// /v2/Bus/EstimatedTimeOfArrival/City/{City}/{RouteName}
// 全縣市

// 取得路線的站序資料 (座標)
// /v2/Bus/StopOfRoute/City/{City}/{RouteName}
// 全縣市

// 取得路線資訊 (營運業者、車牌號碼、票價)
// /v2/Bus/Route/City/{City}/{RouteName}
// 全縣市

// 取得指定[縣市],[路線名稱] 的市區公車路線班表資料
// /v2/Bus/Schedule/City/{City}/{RouteName}
