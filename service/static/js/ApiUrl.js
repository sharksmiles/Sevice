/*var ApiUrl = 'http://192.168.1.126';*/
var ApiUrl = 'http://192.168.222.100:8010';
var userID = "0745A6E9-E935-48CF-87A3-5F3642CDA268";

function getListUrl(statucode) {
	return ApiUrl + "/MobileService.aspx?FunName=GetMyProposal&userID=" + userID + "&AuditStatus=" + statucode
}

function getContentUrl(pageID) {
	return ApiUrl + "/MobileService.aspx?FunName=GetProposalInfo&ProposalID=" + pageID + "&UserID=" + userID;
}

function urlResolve() {
	let statuCode, pageID
	let href = location.href,
		pageidLocation = href.indexOf("pageid") + 7;
	statuCodeLocation = href.indexOf("statucode") + 10;

	pageID = href.substring(pageidLocation, pageidLocation + 36)
	statuCode = href.substring(statuCodeLocation, statuCodeLocation + 1)

	return {
		statuCode,
		pageID
	}
}