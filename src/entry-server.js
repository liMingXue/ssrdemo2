import createApp from './app.js'

export default ({req, res})=>{
    return new Promise((resolve, reject)=>{
        const { app, router } = createApp();
        console.log(req.url);
        if(req.url === '/favicon.ico') {
            res.status(404);
            return reject({code:404});
        }
        router.push(req.url);
        router.onReady(()=>{
            let matchedComponents = router.getMatchedComponents();
            if(!matchedComponents.length) {
                return reject({code:404})
            }
            resolve(app)
        }, reject)
    })
}
