import fs from "fs"
import pool from '../'

try {
    getText("index.txt")
        .then(lastIndexS => {
            let lastIndex = isNaN(Number(lastIndexS)) ? 0 :  Number(lastIndexS)
            let dir = fs.readdirSync("./src/server/database/sql/")
            dir.forEach((fstring) => {
                if(fstring.includes(".sql")) {
                    let thisIndex = Number(fstring.substr(0, 5))
                    if(thisIndex > lastIndex) {
                        getText(fstring)
                            .then((text) => {
                                pool.query(text, (err, res) => {
                                    if(err) console.log(err);
                                })
                                lastIndex = thisIndex;
                                fs.writeFileSync("./src/server/database/sql/index.txt", lastIndex.toString())
                            })
                    }
                }
            })
        })


} catch (error) {
    console.log(error)
}

async function getText(file: string): Promise<string>{
    return new Promise<string>((resolve, reject) => {
        try{
            let f = fs.readFileSync(`./src/server/database/sql/${file}`)
            // console.log(f.toString())
            resolve(f.toString())
        }
        catch(err){
            resolve("0")
        }
    })
}
