class Comment {
    /**
     * コンストラクタ
     *
     * エレメントをラップ
     */
    constructor(child, minute=300) {
        self = document.createElement("div");
        self.setAttribute("class", "marquee");
        self.append(child);

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

