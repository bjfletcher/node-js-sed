var sed = function (text) {
	/* PUT YOUR "SED" TEXT REPLACEMENT LOGIC IN THIS */
	return text.replace(/e/g, "E"); // just an example
};

var stdin = process.openStdin();
stdin.setEncoding("utf8");
stdin.on("data", function (chunk) {
	process.stdout.write(sed(chunk));
});
