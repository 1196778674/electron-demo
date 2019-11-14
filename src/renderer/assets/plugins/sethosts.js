import fs from "fs";
import path from 'path';
class SetHosts {
    constructor(args) {
    }
    // 设置hosts
    SET_HOSTS() {
        // 替换ip mac
        fs.readdir(`/etc`, function (err, files) {
            if (err) {
                console.log('readdir:', err);
                return;
            } else {
                let filedir = path.join('/etc/', 'hosts');
                fs.readFile(filedir, 'utf8', function (err, data) {
                    if (err) {
                        console.log('readFile:', err);
                    } else {
                        let newContent = '';
                        // console.log(data);
                        if (data.indexOf('47.52.165.55') === -1) {
                            newContent = `${data}\n47.52.165.55 api.58coin.com\n47.52.165.55 swapapi.58coin.com\n47.52.165.55 usdtfuture.58coin.com\n47.52.165.55 www.58coin.com`
                        } else if (data.indexOf('47.52.165.55') > -1 && false) {
                            newContent = data.replace(/47.52.165.55/g, `47.52.28.55`);
                        }
                        !!newContent && fs.writeFile(filedir, newContent, 'utf8', (err) => {
                            if (err) throw err;
                            console.log('域名修改成功！！');
                        });
                    }
                })
            }
        })
    }
}
export default SetHosts;