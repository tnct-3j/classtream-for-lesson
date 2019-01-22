
class Comment {
    /**
     * コンストラクタ
     *
     * エレメントをラップ
     */
    constructor(child) {
        var self = document.createElement("marquee");

        self.loop = 1;
        self.scrolldelay = 10000;
        self.truespeed = true;

        self.append(child);
        self.style.position = "absolute";
        
        var position = Math.random() * (window.innerHeight / 2);
        position = Math.floor(position).toString() + "px";
        
        if (Math.random() < 0.5) {
            self.style.top = position;

        } else {
            self.style.bottom = position;
        }

        setTimeout(() => {
            self.remove();
        }, 50000);

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
