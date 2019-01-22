var width = window.innerWidth;

class Comment {
    /**
     * コンストラクタ
     *
     * エレメントをラップ
     */
    constructor(child) {
        var self = document.createElement("marquee");
        self.append(child);
        self.loop = 1;
        self.style.position = "position:absolute";
        self.style.top = (Math.floor( Math.random() * 50 )).toString() + "%";

        setTimeout(() => {
            self.remove();
        }, 10000 );
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
