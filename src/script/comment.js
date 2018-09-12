class Comment {
    /**
     * コンストラクタ
     *
     * エレメントをラップ
     */
    constructor(child) {
        var self = document.createElement("div");
        self.setAttribute("class", "marquee");
        self.append(child);
        
        ////////////////////////////////////////////

        //innerTextの文字数を取得
        var word = self.innerText.length;
        
        //追加ピクセル数
        var px = word*9.8;
        
        var style = "width:" + px + "px";
        console.log(word);

        //cssに適応させる
        self.setAttribute( "style", style ) ;
       ////////////////////////////////////////////
        
        setTimeout(() => {
            self.remove();
        }, 10000);
        return self;
    }
    /**
     * 要素自体を消去
     */
    remove() {
        this.parentNode.removeChild(this);
    }
}


class Screen {
    /**
     * コンストラクタ
     *
     * エレメントを取得
     */
    constructor(id) {
        this.screen = document.getElementById(id);
    }

    /**
     * messageをコメントとして流す
     */
    send(element) {
        var comment = new Comment(element);
        this.screen.appendChild(comment);
    }

}

var screen = new Screen("screen");

function send(msg) {
    /* 文字を打ち込むと流れる */
    var p = document.createElement("p");
    p.innerText = msg;

    screen.send(p);
}

// コンストラクタの引数に設定した、
// element内でhelloって文字が流れる
var p = document.createElement("p");
p.innerText = "hello";

screen.send(p);
