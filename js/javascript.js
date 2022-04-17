
var btn_mp3 = document.getElementById("mp3");
btn_mp3.addEventListener("click", function () {
    convert("mp3");
});

var btn_mp4 = document.getElementById("mp4");
btn_mp4.addEventListener("click", function () {
    convert("mp4");
});

function convert(filetype) {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
        var tab = tabs[0];
        document.getElementById("i_frame").src = "https://yt-download.org/api/button/" + filetype + "?url=" + tab.url;
    });
}