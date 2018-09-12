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
        }, 1000 * minute);
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
