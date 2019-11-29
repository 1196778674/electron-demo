import fs from "fs";
import path from 'path';
import apiConfig from '../myConfig/api.config'
class SetHosts {
    constructor(args) {
    }
    // 获取hosts
    GET_HOSTS () {
        return new Promise((resolve, reject) => {
            fs.readdir(`/etc`, function (err, files) {
                if (err) {
                    console.log('readdir:', err);
                    return;
                } else {
                    let filedir = path.join('/etc/', 'hosts');
                    fs.readFile(filedir, 'utf8', function (err, data) {
                        resolve(data)
                    })
                }
            })
        });
    }
    // 设置hosts
    SET_HOSTS(ip) {
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
                        let domain = `${apiConfig.domain}`
                        if (data.indexOf('47.52.165.55') === -1 && data.indexOf('47.52.28.46') === -1) {
                            newContent = `${data}\n47.52.165.55 api.${domain}\n47.52.165.55 swapapi.${domain}\n47.52.165.55 usdtfuture.${domain}\n47.52.165.55 www.${domain}`
                        } else {
                            let oldIp = data.indexOf('47.52.165.55') > -1 ? '47.52.165.55' : '47.52.28.46'
                            newContent = data.replace(new RegExp(`${oldIp}`,"g"), ip);
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