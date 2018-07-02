/**
 * file:全局变量
 * author:ToT
 * date:2018-05-17
*/

(function(window) {
	if (typeof Base === "undefined") {
		Base = {};
	}
	//正式URL端口号为21290,测试URL端口号为8008
	var urlPort = 21290;
	//蒙版效果等待时间
	var maskTimeOut = 1000;
	//跳转延迟
	var eventDelay = 100;
	//用户名
	var userName = "";
	//用户手机号
	var phoneNumber = "";

	//请求服务地址
	var serverUrl = "http://www.mijson.com/proxy/api/";//

	
	
	Base.userName = userName;
	Base.phoneNumber = phoneNumber;
	Base.urlPort = urlPort;
	Base.maskTimeOut = maskTimeOut;
	Base.serverUrl = serverUrl;
}(window));












