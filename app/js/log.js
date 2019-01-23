const FILE_NAME = "log.json"

function get_now_str() {
    var date = new Date()

    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    hour = ('0' + hour).slice(-2);
    minute = ('0' + minute).slice(-2);
    second = ('0' + second).slice(-2);

    format = 'hh:mm:ss';
    format = format.replace(/hh/g, hour);
    format = format.replace(/mm/g, minute);
    format = format.replace(/ss/g, second);

    return format;
}


class Log {
    constructor() {
        this.log = [];
        var self = this

        setInterval(() => {
            var fs = require('fs');
            fs.writeFileSync(FILE_NAME + '.backup', self.toString())
        }, 60 * 1000);
    }

    add(name, message) {
        this.log.push({
            time: get_now_str(),
            name: name,
            message: message
        })
    }

    toString() {
        return JSON.stringify(this.log, null, '    ');    
    }

    save() {
        var fs = require('fs');
        fs.writeFileSync(FILE_NAME, this.toString())
    }
}
