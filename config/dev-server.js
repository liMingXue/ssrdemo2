const serverConf = require('./webpack.server.conf')

const webpack = require('webpack')
const fs = require('fs')
const path = require('path')
const axios = require('axios')
const Mfs = require('memory-fs')



module.exports = (cb) =>{
    const webpackComplier = webpack(serverConf)
    const mfs = new Mfs()
    webpackComplier.outputFileSystem = mfs;
    webpackComplier.watch({}, async (err, status)=>{
        if(err) return console.log(err);

        status = status.toJson();

        status.errors.forEach(err => console.log(err));
        status.warnings.forEach(err => console.log(err));

        // server Bundle json 文件
        let serverBundlePath = path.join(serverConf.output.path, 'vue-ssr-server-bundle.json');

        let serverBundle = JSON.parse(mfs.readFileSync(serverBundlePath, 'utf-8'));

        // client Bundle json 文件
        let clientBundle = await axios.get('http://localhost:8088/vue-ssr-client-manifest.json')
        // console.log(clientBundle);

        // 模板
        let template = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf-8');
        // console.log(template);

        cb(serverBundle, clientBundle, template)
    })
}




