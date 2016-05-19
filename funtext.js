window.onload = function() {
	console.log("hi!");

	//window.addEventListener('orientationchange', updateOrientation);
	//updateOrientation();

	var input = document.getElementById("input");
	var output = document.getElementById("output");
	var copy_button = document.getElementById("copy_button");

	var mirror_option = document.getElementById("mirror");
	var abc_option = document.getElementById("abc");
	var gray_option = document.getElementById("gray");

	var copyright_notice = document.getElementById("copyright_notice");
	copyright_notice.innerHTML = "Copyright &copy;" + new Date().getFullYear() + " Adriel Dinelli";

	var Funtext = Mirror;

	input.addEventListener("keyup", function(event) {
		UpdateOutput(Funtext(input.value));
	});

	input.addEventListener("keydown", function(event) {
		UpdateOutput(Funtext(input.value));
	});

	mirror_option.addEventListener("click", function(event) {
		Funtext = Mirror;
		UpdateOutput(Funtext(input.value));
		mirror_option.className = "option_button selected";
		abc_option.className = "option_button";
		gray_option.className = "option_button";
	});

	abc_option.addEventListener("click", function(event) {
		Funtext = AbcToZyx;
		UpdateOutput(Funtext(input.value));
		mirror_option.className = "option_button";
		abc_option.className = "option_button selected";
		gray_option.className = "option_button";
	});

	gray_option.addEventListener("click", function(event) {
		Funtext = GrayScale;
		UpdateOutput(Funtext(input.value));
		mirror_option.className = "option_button";
		abc_option.className = "option_button";
		gray_option.className = "option_button selected";
	});

};

function not_blank(object) {
	return !(object === null || object === undefined || object.trim() === "");
}

function updateOrientation() {
	var viewport = document.querySelector("meta[name=viewport]");
	viewport.setAttribute('content', 'width=' + window.screen.width + ', initial-scale=1.0;');
}

function UpdateOutput(text) {
	output.innerHTML = text;
}

function Mirror(text) {
	if(not_blank(text)) {
		return text.split("").reduce(function(acc, val) { return val + acc; });
	} else return "";
}

function AbcToZyx(text) {
	if(not_blank(text)) {
		return text.split("").reduce(function(acc, val) { 
			return ((acc.length == 1) ? toChart(acc) : acc) + toChart(val);
		});
	} else return "";
}

function GrayScale(text) {
	if(not_blank(text)) {
		return text.split("").reduce(function(acc, val) { 
			return ((acc.length == 1) ? htmlCubes(toGrayChart(acc)) : acc) + htmlCubes(toGrayChart(val));
		});
	} else return "";
}

function htmlCubes(color) {
	return "<div style='background-color:" + color + "; width:35px; height:35px; display:inline-block;'></div>";
}

function toChart(key) {
	return (charChart[key] !== undefined) ? charChart[key] : key;
}

function toGrayChart(key) {
	return (charGrayChart[key] !== undefined) ? charGrayChart[key] : charGrayChart["null"];
}

var charChart = {
	"a": "z", "A": "Z",
	"b": "y", "B": "Y",
	"c": "x", "C": "X",
	"d": "w", "D": "W",
	"e": "v", "E": "V",
	"f": "u", "F": "U",
	"g": "t", "G": "T",
	"h": "s", "H": "S",
	"i": "r", "I": "R",
	"j": "q", "J": "Q",
	"k": "p", "K": "P",
	"l": "o", "L": "O",
	"m": "n", "M": "N",
	"n": "m", "N": "M",
	"o": "l", "O": "L",
	"p": "k", "P": "K",
	"q": "j", "Q": "J",
	"r": "i", "R": "I",
	"s": "h", "S": "H",
	"t": "g", "T": "G",
	"u": "f", "U": "F",
	"v": "e", "V": "E",
	"w": "d", "W": "D",
	"x": "c", "X": "C",
	"y": "b", "Y": "B",
	"z": "a", "Z": "A"
};

var charGrayChart = {
	"a": "#010101", "A": "#999999",
	"b": "#101010", "B": "#a9a9a9",
	"c": "#111111", "C": "#9a9a9a",
	"d": "#121212", "D": "#aaaaaa",
	"e": "#212121", "E": "#ababab",
	"f": "#222222", "F": "#bababa",
	"g": "#232323", "G": "#bbbbbb",
	"h": "#323232", "H": "#bcbcbc",
	"i": "#333333", "I": "#cbcbcb",
	"j": "#343434", "J": "#cccccc",
	"k": "#434343", "K": "#cdcdcd",
	"l": "#444444", "L": "#dcdcdc",
	"m": "#454545", "M": "#dddddd",
	"n": "#545454", "N": "#dedede",
	"o": "#555555", "O": "#ededed",
	"p": "#565656", "P": "#eeeeee",
	"q": "#656565", "Q": "#efefef",
	"r": "#666666", "R": "#fefefe",
	"s": "#676767", "S": "#ffffff",
	"t": "#767676", "T": "#010101",
	"u": "#777777", "U": "#101010",
	"v": "#787878", "V": "#111111",
	"w": "#878787", "W": "#121212",
	"x": "#888888", "X": "#212121",
	"y": "#898989", "Y": "#222222",
	"z": "#989898", "Z": "#232323",
	"null": "#000000"
};
