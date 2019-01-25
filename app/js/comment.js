var id = 0;
var size = {
    marquee: 30,
    fixed: 40
};


class FixedComment {
    /**
     * コンストラクタ
     *
     * エレメントをラップ
     */
    constructor(child) {
        var self = document.createElement("div");

        
        var add_line = (src) => {
            var dest = "";
            var n = window.innerWidth / (size.fixed);
            n = parseInt(n);
            var a = [];
            var r = new RegExp(".{1," + n + "}","g");
            
            src.replace(r, (e) => {
                return a.push(e), ""
            })
            
            for (var line of a) {
                dest += line + "\n";
            }
            
            console.log(dest);
            return dest;
        };

        
        child.innerText = add_line(child.innerText);

        self.className = "fixed";
        self.append(child);

        return self;
    }

    remove() {
       this.parentNode.removeChild(this);
    }
}

class MarqueeComment {
    /**
     * コンストラクタ
     *
     * エレメントをラップ
     */
    constructor(child) {
        var self = document.createElement("marquee");

        child.innerHTML += "　　　　　　　";

        var speed = null;
        if (child.innerText.length < 40) {
            speed = 10 * Math.sqrt(Math.sqrt(child.innerText.length));
        }
        else {
            speed = 10 * Math.sqrt(child.innerText.length);
        }

        console.log(speed);
        id ++;

        self.child = child;
        self.id = "comment" + id;
        self.loop = 1;
        self.setAttribute("scrollamount", speed);
        //self.setAttribute("scrolldelay", speed);
        self.setAttribute("truespeed", "truespeed");

        self.append(child);
        
        self.className = "marquee";
        
        var position = Math.random() * (window.innerHeight / 2);
        position = Math.floor(position).toString() + "px";
        
        if (Math.random() < 0.5) {
            self.style.top = position;

        } else {
            self.style.bottom = position;
        }

        setTimeout(() => {
            self.remove();
        }, 30000);
        

        return self;
    }
    /**
     * 要素自体を消去
     */
    remove() {
       this.parentNode.removeChild(this);
    }
}

class FixedController {
    constructor(element) {
        this.list = [];
        return;
    }
    add(element) {
        this.list.push(element);
    }
    find(f) {
        return this.list.find(f);
    }
    findIndex(f) {
        return this.list.findIndex(f);
    }
    remove(f) {
        var index = this.findIndex(f);
        this.list[index].comment.remove();

        if(index != -1) {
            return this.list.splice(index, 1);
        }

        return null;
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
        this.fixed = new FixedController();
    }

    /**
     * messageをコメントとして流す
     */
    send(element, use_fixed=false, option={}) {
        var comment = null;

        if (use_fixed) {
            comment = new FixedComment(element);
            comment.option = element;
            this.fixed.add({
                comment: comment,
                child: element,
                option: option
            });
        }
        else {
            comment = new MarqueeComment(element);
        }

        
        this.screen.appendChild(comment);
        return comment;
    }
}

var screen = new Screen("screen");
