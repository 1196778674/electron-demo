import fs from "fs";
import path from 'path';
import os from 'os'
import { ipcRenderer } from 'electron'
import apiConfig from '../myConfig/api.config'
const hosts_url = os.platform() === 'darwin' ? '/etc/' : 'C:/Windows/System32/drivers/etc/'
class SetHosts {
    constructor(args) {
    }
    // 获取hosts
    GET_HOSTS () {
        return new Promise((resolve, reject) => {
            fs.readdir(`${hosts_url}`, function (err, files) {
                if (err) {
                    // console.log('readdir:', err);
                    alert(JSON.stringify(err))
                    return;
                } else {
                    let filedir = path.join(`${hosts_url}`, 'hosts');
                    fs.readFile(filedir, 'utf8', function (err, data) {
                        resolve(data)
                    })
                }
            })
        });
    }
    // 设置hosts
    SET_HOSTS(ip) {
        fs.readdir(`${hosts_url}`, function (err, files) {
            if (err) {
                // console.log('readdir:', err);
                alert(JSON.stringify(err))
                return;
            } else {
                let filedir = path.join(`${hosts_url}`, 'hosts');
                fs.readFile(filedir, 'utf8', function (err, data) {
                    if (err) {
                        // console.log('readFile:', err);
                        alert(JSON.stringify(err))
                    } else {
                        let newContent = '';
                        // console.log(data);
                        let domain = `${apiConfig.domain}`
                        if (!data.includes('47.52.165.55') && !data.includes('47.52.28.46')) {
                            newContent = `${data}\n47.52.165.55 api.${domain}\n47.52.165.55 swapapi.${domain}\n47.52.165.55 usdtfuture.${domain}\n47.52.165.55 www.${domain}`
                        } else {
                            let oldIp = data.includes('47.52.165.55') ? '47.52.165.55' : '47.52.28.46'
                            newContent = data.replace(new RegExp(`${oldIp}`,"g"), ip);
                        }
                        !!newContent && fs.writeFile(filedir, newContent, 'utf8', (err) => {
                            if (err) throw err;
                            console.log('域名修改成功！！');
                            ipcRenderer.send('message', 'changeIp')
                        });
                    }
                })
            }
        })
    }
}
export default SetHosts;