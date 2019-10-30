let parseCSV = (file) => {
    let fileArray =  file.split('\n')
    if(!fileArray[0].includes("STATUS")){
        return [];
    }
    else{
        let headers = fileArray.shift().split(',')
        let returnArray = []
        for(let i = 0; i < fileArray.length; i++){
            let headersIndex = 0
            let obj = {}
            let lineArray = fileArray[i].split(',')
            if(lineArray.length === headers.length){
                lineArray.forEach(item => {
                    obj[headers[headersIndex]] = item
                    headersIndex = headersIndex + 1
                });
                if(obj.STATUS === "ACTIVE" || obj.STATUS === "CLOSED" || obj.STATUS === "ISSUED"){
                    returnArray.push(obj)
                }
            }
        }
        return returnArray
    }
}