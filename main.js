const jsonStr = `[
    {
        "img": "./kyaru/kyaru02.png",
        "msg": "好...好燙!!!我可是貓舌頭!\\n什麼!?你說臭鼬應該不那麼怕燙...\\nmmm我生氣啦!!\\n決定了!今晚就吃披薩，你請客"
    }
]`;
var data = JSON.parse(jsonStr);
function headclick(kyaru) {
    kyaru.src = data[0]["img"];
    var textdiv = document.getElementById("textdiv");
    textdiv.innerText = data[0]["msg"];
}
