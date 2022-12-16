
let base64Strings = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/+=";
let unko64Words=[
	"くそ",
	"クソ",
	"糞",
	"うんち",
	"ウンチ",
	"うんこ",
	"ウンコ",
	"うんにょ",
	"うんにゃ",
	"うんぴ",
	"ゲリ",
	"下痢",
	"便",
	"大便",
	"フン",
	"💩",
	"ばば",
	"ババ",
	"おしっこ",
	"しょんべん",
	"シッコ",
	"尿",
	"失禁",
	"道糞",
	"野糞",
	"下痢便",
	"脱糞",
	"浣腸",
	"大腸菌",
	"排泄物",
	"血便",
	"食糞",
	"おもらし",
	"果肉",
	"果汁",
	"放屁",
	"屁",
	"おなら",
	"糞便",
	"糞尿",
	"鼻くそ",
	"耳糞",
	"目糞",
	"お尻",
	"穴",
	"牛糞",
	"馬糞",
	"トイレ",
	"おねしょ",
	"お花",
	"巻き糞",
	"おまる",
	"汚物",
	"排便",
	"公衆便所",
	"便所",
	"排泄",
	"コピ・ルアク",
	"スカラベ",
	"ガス",
	"すかしっぺ",
	"便秘",
	"消化物",
	"小便",
	"おむつ",
];

let splitChar="と";


function encode(str){
	let base64str = btoa(encodeURIComponent(str));
	let encodedText = "";
	[].forEach.call(base64str,e=>{
		encodedText+=unko64Words[base64Strings.indexOf(e)];
		encodedText += splitChar;
	})
	encodedText = encodedText.slice(0, encodedText.length - 1);
	return encodedText;
}


function decode(str) {
	let base64str = "";
	let decodedText = "";
	let temp=str.replace(/\r?\n/g, "").replace(/\r? /g, "").split(splitChar);
	for(let i=0;i<temp.length;i++){
		let index = unko64Words.indexOf(temp[i]);
		if(index==-1){
			return "unko64エラー.うまく排泄できません.うんこが途切れている可能性があります.";
		}
		base64str += base64Strings[index];
	}
	decodedText =decodeURIComponent(atob(base64str));
	return decodedText;
}



window.onload = function () {
	let encodeButton = document.getElementById("encodeButton");
	encodeButton.addEventListener("click", () => {
		let beforeEncodeText = document.getElementById("beforeEncodeText").value;
		let encodedText = "";
		console.log(beforeEncodeText);
		encodedText = encode(beforeEncodeText);
		console.log(encodedText);
		let afterEncodeForm = document.getElementById("afterEncodeText");
		afterEncodeForm.value = encodedText;
	});

	let decodeButton = document.getElementById("decodeButton");
	decodeButton.addEventListener("click", () => {
		let beforeDecodeText = document.getElementById("beforeDecodeText").value;
		let decodedText="";
		console.log(beforeDecodeText);
		decodedText = decode(beforeDecodeText)
		console.log(decodedText);
		let afterDecodeForm = document.getElementById("afterDecodeText");
		afterDecodeForm.value = decodedText;
	});
};

//トイレと馬糞とコピ・ルアクと排泄物と牛糞と汚物とお尻と食糞と放屁と馬糞と馬糞と下痢便と放屁と牛糞とウンコと道糞と放屁と馬糞と血便と便所と放屁と馬糞と馬糞と下痢便と放屁と牛糞とウンコと道糞と放屁と牛糞とゲリとコピ・ルアクと放屁と馬糞と馬糞と下痢便と放屁と牛糞とウンコと道糞と放屁と馬糞と放屁とおもらしと放屁と馬糞と馬糞と下痢便と放屁と牛糞とウンコと道糞と放屁と馬糞と放屁と食糞と放屁と馬糞と馬糞と下痢便と放屁と牛糞とウンコと道糞と放屁と牛糞と下痢と大腸菌と放屁と馬糞と馬糞と下痢便と放屁と牛糞とウンコと野糞と放屁と牛糞とゲリと下痢便と放屁と馬糞と馬糞と排泄と放屁と馬糞と血便と排泄と放屁と馬糞と果汁と道糞と放屁と馬糞と馬糞と下痢便と放屁と牛糞とウンコと道糞と放屁と牛糞とゲリと便所と放屁と馬糞と馬糞と下痢便と放屁と牛糞とウンコと道糞と放屁と馬糞と血便と公衆便所と放屁と馬糞と馬糞と下痢便と放屁と牛糞とウンコと道糞と放屁と牛糞とうんにょとおもらしと放屁と馬糞と馬糞と下痢便と放屁と牛糞とウンコと道糞と放屁と馬糞と血便と失禁と放屁と馬糞と馬糞と下痢便と放屁と牛糞とウンコと道糞と放屁と牛糞とゲリと排便と放屁と馬糞と馬糞と下痢便と放屁と牛糞とウンコと道糞と放屁と牛糞とウンコと汚物と放屁と馬糞とトイレとおもらしと放屁と馬糞と放屁と排泄物と放屁と牛糞とうんにょと食糞と放屁と牛糞と浣腸と浣腸と放屁と馬糞と馬糞と下痢便と放屁と牛糞とウンコと道糞と放屁と牛糞とゲリと下痢便と放屁と馬糞と馬糞と下痢便と放屁と牛糞とウンコと道糞と放屁と馬糞と食糞と食糞とトイレと馬糞とコピ・ルアクと排泄物と牛糞と汚物とお尻と食糞と放屁と馬糞と馬糞と下痢便と放屁と牛糞とウンコと道糞と放屁と馬糞と食糞とおもらしと放屁と馬糞と馬糞と排便と放屁と牛糞とうんにょとおもらしと放屁と馬糞と血便と汚物と放屁と馬糞と馬糞と汚物と放屁と馬糞と放屁と大腸菌と放屁と馬糞と血便と下痢便と放屁と馬糞と馬糞と下痢便と放屁と牛糞とウンコと道糞と放屁と牛糞とうんにょと大腸菌と放屁と馬糞と馬糞と下痢便と放屁と牛糞とウンコと野糞と放屁と牛糞とウンコとコピ・ルアクと放屁と馬糞と馬糞と汚物と放屁と馬糞と放屁と排泄物と放屁と牛糞と下痢と血便と放屁と馬糞と馬糞と下痢便と放屁と牛糞とウンコと野糞と放屁と牛糞とうんにょとおもらしと放屁と馬糞と馬糞と下痢便と放屁と牛糞とウンコと野糞と放屁と牛糞とうんにょと大腸菌とトイレと馬糞とコピ・ルアクと排泄物と牛糞と汚物とお尻と食糞と放屁と馬糞と馬糞と下痢便と放屁と牛糞とウンコと道糞と放屁と馬糞と食糞と浣腸と放屁と馬糞と馬糞と下痢便と放屁と牛糞とウンコと野糞と放屁と牛糞とゲリと下痢便と放屁と馬糞と馬糞と下痢便と放屁と牛糞とウンコと道糞と放屁と馬糞と血便と便所と放屁と馬糞と馬糞と下痢便と放屁と牛糞とウンコと道糞と放屁と牛糞とゲリとコピ・ルアクと放屁と馬糞とトイレとおもらしと放屁と馬糞と放屁と排泄物と放屁と牛糞とうんにょと食糞
