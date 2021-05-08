const express = require('express')
const devServer = require('./config/dev-server')
const app = express();
const vueRenderer  = require('vue-server-renderer')


app.get('*', async (req, res)=>{
    res.status(200);
    res.setHeader("Content-Type", "text/html;charset=utf-8")
    devServer((serverBundle, clientBundle, template)=>{
        let renderer = vueRenderer.createBundleRenderer(serverBundle, {
            template,
            clientManifest: clientBundle.data,
            runInNewContext: false
        })

        renderer.renderToString({req, res}).then((html)=>{
            res.end(html)
        }).catch(()=>{
            res.end('页面被谁偷走了')
        })
    })
})


app.listen(9000, ()=>{
    console.log('服务启动成功');
})