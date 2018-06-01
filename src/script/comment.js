class Screen {
    /**
     * コンストラクタ
     *
     * エレメントを取得
     */
    constructor(id) {
        this.element = document.getElementById(id);
    }
    
    /**
     * messageをコメントとして流す
     */
    send(message) {
        var comment = document.createElement("div");
        comment.innerHTML = message;
        comment.setAttribute('class', 'marquee');
        this.element.append(comment);
    }
}

var screen = new Screen("screen");

// コンストラクタの引数に設定した、
// element内でhelloって文字が流れる
screen.send("hello");