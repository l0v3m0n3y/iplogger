class iplogger{
    constructor(){
        this.api = "https://iplogger.org"
        this.headers={"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/73.0.3683.86 Chrome/73.0.3683.86 Safari/537.36","x-requested-with": "xmlhttprequest","content-type":"application/x-www-form-urlencoded"}
    }
    async create_url(url){
        let req=await fetch(`${this.api}/check/destination`,{method:"POST",headers: this.headers,body:`destination=${url}`});
        this.headers["cookie"]=req.headers.get("set-cookie");
        return req.json();
    }
    async check_url(){
        let req=await fetch(`${this.api}/ru/logger/`,{method:"POST",headers: this.headers});
        return req.json();
    }
}
module.exports = {iplogger};