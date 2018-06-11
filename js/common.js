/*
 * 2017-9-4 接口更新 V2.0
 * by 钟达
 * 共20个接口
 */
var Route = 'http://218.104.185.197:19090'; //服务器地址
	//route:"http://120.86.121.185:19090"
	//route:"http://172.29.135.17:8080"
	//route:"http://192.168.1.8:8080"
var config={
	
	getAllCompany : Route + '/secsev/rs/secCompanyName/findAll', //GET-查询所有公司信息
	
	getAllCheckType : Route + '/syWeb/rs/syNameCode/6401', //GET-查询检查类型
	
	getLineByCompanyId : Route + '/secsev/rs/secLine/findLineByCompanyId/', // +companyId  GET-根据公司id查询线路
	
	getCheckItem : Route + '/secsev/rs/secCarcheckItem', //参数：checktype   GET-根据检查类型查询检查项
	
	getCheckedItemDetail : Route + '/secsev/rs/secCarcheckView', //参数：scrguid GET-根据巡检记录表ID查询巡检项明细
	
	getCheckPlanByNum : Route + '/secsev/rs/secCarcheckPlan', //参数：planno  GET-根据计划编号查询巡检计划
	
	getCheckRecordById: Route + '/secsev/rs/secCarcheckrecord/', //+scpguid 拼接在地址后面  GET-根据巡检计划id查询巡检记录
	
	SubmitRecord : Route + '/secsev/rs/secCarcheckdetail', //参数：scpguid巡检计划id,scrguid巡检记录ID PUT-提交已保存车次
	
	getAllBusLine : Route + '/basicdata/rs/line/forAutoComplete/findAll', //GET-获取所有公交线路
	
	getCheckPlan : Route + '/secsev/rs/v2/secCarcheckPlan', //参数：iscomplete 0/1  PUT-查询待检计划 并返回是否临时巡检
	
	TempCheckPlanOperation : Route + '/secsev/rs/v2/secCarcheckdetail', // POST-临时巡检新接口,可提交多个项目
	
	getCheckedPlan : Route + '/secsev/rs/v2/secCarcheckPlan', //参数：starttime,endtime,istemp, GET-查询已检查车次列表
	
	//参数：checkline,starttime ,endtime ,istemp  GET-统计该线路下每个检查类型的完成次数 
	getCheckRecordByline : Route + '/secsev/rs/v2/secCarcheckrecord', 
	
	//参数：checkline,starttime ,endtime ,istemp  PUT-根据线路和时间段查询已检查信息 (时间段)
	secCheckRecordByTime : Route + '/secsev/rs/v2/secCarcheckrecord',
	
	//参数：checkline,checktime,istemp  GET-查询该线路该时间段内每一天的已检查信息 (某个时间)
	secCheckRecordByOneTime : Route + '/secsev/rs/v2/secCarcheckrecordDetail',
	
	//参数：busno,checktime GET-查看检查详情，包括多个检查类型
	getCheckedDetail : Route + '/secsev/rs/v2/secCarcheckdetail', 
	
	getLineByuser : Route + '/secsev/rs/secLine/v2/findLines', //GET-根据登录人信息查询线路
	
	//参数：checkline,planno   PUT-待检查计划全部新增
	createAllCheckPlan : Route + '/secsev/rs/v2/secCarcheckrecordDetail',
	
	imageUpload : Route + '/secsev/rs/workflowUpload/upload/check', //POST-多图上传
	
	imageShow: Route + '/upload/secsev/secsev',
	
	//以下为任务进度新接口
	getUnitByUser : Route + '/secsev/rs/v2/secCarcheckLoginfo', //GET  -- 无请求参数
	
	getRoutesByTime : Route + '/secsev/rs/v2/secCarTaskProgress', //PUT  --参数：time(传空默认为当月) deptid单位id checkline线路
	
	getRoutesByCheckType : Route + '/secsev/rs/v2/secCarTaskProgress', //GET --参数 time deptid checkline
	
	getLinesByTime : Route + '/secsev/rs/secLine/v2/findLines', //PUT  --参数time deptid
	
	//以下为分管人员任务进度展示接口
	getCheckedByDeptid : Route + '/secsev/rs/v2/secCarTaskProgressBranch', //GET --参数 time deptid checkline
	
	getRoutesOrderByType : Route + '/secsev/rs/v2/secCarTaskProgressBranch', //PUT --参数 time deptid checkline userid(人员id)
	
	weatherData : [{
						value: "overcast",
						text: "阴天"
					}, {
						value: "blustery",
						text: "大风"
					}, {
						value: "sunny",
						text: "晴天"
					}, {
						value: "haze",
						text: "雾霾"
					}, {
						value: "shower",
						text: "阵雨"
					}, {
						value: "rainstorm",
						text: "暴雨"
					}],
}

String.prototype.trim = function (char, type) {
	if (char) {
		if (type == 'left') {
			  return this.replace(new RegExp('^\\'+char+'+', 'g'), '');
			} else if (type == 'right') {
			   return this.replace(new RegExp('\\'+char+'+$', 'g'), '');
			}
			   return this.replace(new RegExp('^\\'+char+'+|\\'+char+'+$', 'g'), '');
			}
			  return this.replace(/^\s+|\s+$/g, '');
};

HTMLElement.prototype.rmac = function(){
	while(this.firstChild){
		this.removeChild(this.firstChild);
	}
};


function checkStr(str){ 
var temp="";
for(var i=0;i<str.length;i++) {
	var charCode = str.charCodeAt(i);
     if((charCode>47&&charCode<58)||(charCode>64&&charCode<91)||(charCode>96&&charCode<123)) 
        	temp+=str.charAt(i); 	
}
return temp; 
}

//let Config = (function(){
//	let config = {
//		a : '1',
//		b : '2'
//	};
//	return {
//		get : function (name){
//			return config[name] ? config[name] : null;
//		}
//	}
//})();
//
//Config.get('a');
//Config.a = null;
