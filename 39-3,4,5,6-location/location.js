//39-3

//going to any website > got to console > type: location will show the location derails.


//location.reload: will reload the page.
const refreshPage = () => {
    location.reload();
}

//to go any page 
const visitPH = () => {
    location.assign("https://www.facebook.com/hasan.md.007")
}

//to get any page full page location.
//location.href 

//or going to any website: location.href = "https://www.facebook.com/hasan.md.007";

// to change the location of hash
//location.hash = "#hash"

//39-4 History api to navigate back, forward, go, history length
//==================================
//history or window.history (in browser console)
//to show history of a website.(navigation)
//======================
//history.back = to go back to previous page.
//history.forward to go next page
//history.go(-1). to go previous page.
//history.go (-3). to go 3 step previous page.
//history.go(0) (refresh the page)
//

//history.length: shows, how many history are their. or history length.

//39-5 (advanced) Cookies, dev tool application tab, get cookie value
//cookies are stored as "key: value, pair"
//cookies can be seen in application tab.
//document.cookie(in console) to see any cookies of any website

//39-6 local storage, session storage, storage info in browser storage
//=====================================================
//session storage
//===================
//session storage: keeps the data as "key: value, pair",
//session storage keeps the data for short period of time.
//local storage keeps the data for long period of time.
//=============================================
/**************************************** */
//local storage vs session storage
//*************************************** */

//window.sessionStorage(in console)

//window.localStorage.getItem("def") to bring any value of a localStorage.
//localStorage.setItem("def", 777) to set any value of a localStorage.
//normally value are formed as json, need to perse the json file to access. JSON.parse() need no use.
//after accessing the data, you can stringify the data. 
//JSON.stringify(nextId) to stringify the data again.
//find web api from mdn docs.

//document.body.contentEditable = true : which allow to edit web page content.

//chrome://newtab(IN SEARCH FIELD) , which will open in a new tab
//shortCut: in chrome: shirt + esc , will show which is take memory 
//shortCut: in chrome: chrome://restart , will restart the chrome.
//shortCut: ctrl + L ,will select the url.