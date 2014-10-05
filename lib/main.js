const pageMod = require("sdk/page-mod");
const data = require("sdk/self").data;

exports.main = function() {
    pageMod.PageMod({
        include: ["*"],
        contentScriptFile: data.url("utm.js"),
        contentScriptWhen: "start",
        attachTo: ["existing", "top"]
    })
}
