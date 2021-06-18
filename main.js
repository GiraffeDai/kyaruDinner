const jsonStr = `
[
    {
        "img": "./kyaru/kyaru02.png",
        "msg": "好...好燙!!!我可是貓舌頭!\\n什麼!?你說臭鼬應該不那麼怕燙...\\nmmm我生氣啦!!\\n決定了!今晚就吃披薩，你請客"
    },
    {
        "img": "./kyaru/kyaru03.png",
        "msg": "直接開大請你一頓粗飽!"
    },
    {
        "img": "./kyaru/kyaru04.png",
        "msg": "月底了...今天就吃你吧<3\\n貓也是什麼都可以吃的嘛~"
    },
    {
        "img": "./kyaru/kyaru04.png",
        "msg": "嘿嘿嘿~可愛的花花\\n想必你很好吃吧"
    },
    {
        "img": "./kyaru/kyaru05.png",
        "msg": "住...別再那看了!今晚吃三杯青蛙\\n快來幫忙"
    },
    {
        "img": "./kyaru/kyaru06.png",
        "msg": "外面土會發亮欸，我們去外面找點土來吃吧"
    },
    {
        "img": "./kyaru/kyaru06.png",
        "msg": "咚喀!(開門聲)\\n我說我們來吃點@#$%吧!\\n蛤?你說聽不清楚\\n我說來吃點@#$%\\n還是聽不清楚?這肯定是你的問題"
    },
    {
        "img": "./kyaru/kyaru07.png",
        "msg": "哇依~好大的拉力，這一定是湖之王\\n你等等，今晚就吃紅燒魚、清蒸魚、糖醋魚、生魚片"
    },
    {
        "img": "./kyaru/kyaru07.png",
        "msg": "快拿第二把釣竿來!快還要更快!!\\n星爆氣流...\\n今晚吃烤魚囉~"
    },
    {
        "img": "./kyaru/kyaru08.png",
        "msg": "我想說來煮點什麼東西吃\\n一打開瓦斯爐就...\\n今晚就吃披薩吧，你請客"
    }
]
`;

var datas = JSON.parse(jsonStr);
console.log(datas.length);
function headclick(kyaru) {
    var data = datas[Math.floor(Math.random() * datas.length)];
    var textdiv = document.getElementById("textdiv");
    if (data["msg"] == textdiv.innerText){
        headclick(kyaru);
    }
    kyaru.src = data["img"];
    textdiv.innerText = data["msg"];
}
