import colors from 'colors'

function describe(obj: any): string{
    let obj_string: string[] = []

    Object.entries(obj).forEach(e => {obj_string.push(`${colors.grey(`${e[0]}: `)} ${colors.green(`${e[1]}`)}`)})
    return `{${obj_string.join(", ")}}`
}

export function showRequest(type: String, req: any) {
    let body: string[] = []
    // saco cosas no interesantes
    let reqa = {...req};
    delete req.headers["user-agent"]
    delete req.headers["accept"]
    delete req.headers["postman-token"]
    delete req.headers["host"]
    delete req.headers["connection"]
    delete req.headers["accept-encoding"]
    delete req.headers["content-type"]
    delete req.headers["content-length"]


    Object.entries(req.body).forEach(e => {body.push(`${colors.grey(`${e[0]}: `)} ${colors.blue(`${e[1]}`)}`)})
    console.log(`${colors.blue("===============")}`)
    console.log(colors.magenta(`[REQ DESCRIPTION] ----- ${type} `))
    console.log(colors.blue(`req -> ${describe(req.body)}`))
    console.log(colors.blue(`params -> ${describe(req.params)}`))
    console.log(colors.blue(`headers -> ${describe(reqa.headers)}`))
    console.log(`${colors.blue("===============")}`)

}

