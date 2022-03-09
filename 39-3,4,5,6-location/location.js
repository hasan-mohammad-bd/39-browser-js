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
//***location.hash = "#hash"

//39-4 History api to navigate back, forward, go, history length
//======================
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
/*************************************** */

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


//event loop

/* প্রথমত, এটা বুঝতে হবে, জাবাস্ক্রিপ্ট single threaded, synchronised language। মানে হচ্ছে, আমাদের কোড যখন ব্রাউজারে রান হয় তখন ব্রাউজার ইঞ্জিন ফাইলের একবারে উপর থেকে কোড রিড করতে করতে নিচের দিকে নামে। যতক্ষণ না প্রথম লাইন কমপ্লিট হচ্ছে ততক্ষণ পরবর্তী লাইনে যাচ্ছে না। এতে দেখা যায় পারফরম্যান্সে সমস্যা হয়৷ কেননা কোনো লুপ বা জটিল কোনো কোড ফাইলের শুরুতে পড়ে বসলে নিচের কোড তখন অপেক্ষার প্রহর গুনতে থাকে আর দোয়া-দরুদ পড়তে থাকে, কখন উপরের কোড কমপ্লিট হবে, কখন তার কাছে আসবে- এই ভেবে। এই সমস্যা থেকে উত্তোলনের জন্য উদ্ভব হলো asynchronous function এর।
যখন কোনো async ফাংশন কল করা হয় তখন ব্রাউজারের কাজ সাধারণের থেকে একটু বেড়ে যায়।
ব্রাউজার ইঞ্জিন তখন তিনটি প্রধান ভাগে ভাগ হয়ে যায়৷
প্রথম, call stack,
দ্বিতীয়, webapi,
এবং সর্বশেষ, callback queue.
call stack এর কাজ হচ্ছে যখন এখানে কোনো নরমাল function কল হবে তখন তাকে সরাসরি কনসোলে প্রিন্ট করে দিবে। কিন্তু যখন কোনো async function এখানে আসবে তখন সেই function কে web api এর কাছে পাঠিয়ে দিবে। web api তার কাজ শেষ করে পাঠিয়ে দিবে callback queue এর কাছে। তারপর callback queue এই function গুলোকে নিয়ে বসে থাকবে (কারণ সে একটু লেজি টাইপের)। ঠিক এখানেই event loop এর কাজ। event loop এর অবস্থান call stack আর callback queue এর মধ্যবর্তী স্থানে। সে কি করে, প্রথমে দেখে call stack এ কোনো চলমান বা নরমাল বা sync task আছে কিনা যদি থাকে তাহলে সে অপেক্ষায় থাকবে কিন্তু যদি না থাকে তাহলে সে callback queue এর কাছে যাবে এবং তারকাছে যে যে task বা function আছে সেগুলোকে সিরিয়াল ওয়াইজ callback queue থেকে call stack এর কাছে পাঠিয়ে দিবে। এবং যতগুলো task আছে সবগুলোকে loop করে করে call stack এর কাছে পাঠাবে এজন্যই মুলত এটাকে event loop বলা হয়। আর শেষে call stack তার ডিউটি অনুযায়ী আউটপুট প্রিন্ট করবে। দ্যাসট ইট। */