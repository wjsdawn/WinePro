//导入数据库
const neo4jDriver = require('../db_neo4j');
const query = "match(n:poem) -[r]- (m:author) return n,r,m"
const getJson = async() =>{
    return new Promise((resolve,reject) => {
        let node = []
        let edge = []
        let tem = {}
        let count = 0
        let json={}
        neo4jDriver.session().run(query)
            // .subscribe({
            //     // onKeys:keys=>{
            //     //     console.log(keys)
            //     // },
            //     onNext:record=>{
            //         node.push({'name':record.get('n').properties.title})
            //         node.push({'name':record.get('m').properties.author})
            //         edge.push({'start':record.get('n').properties.title,'end':record.get('m').properties.author})
            //         json = {'node':node,'edge':edge}
            //     },
            //     onCompleted:()=>{
            //         return json
            //     },
            //     onError:error=>{
            //         console.log(error)
            //     }
            // })
            .then(result=>{
                //设置节点
                result.records.forEach(record=>{
                    if((JSON.stringify(node).indexOf(JSON.stringify({'name':record.get('n').properties.title})))==-1){
                        node.push({'name':record.get('n').properties.title})
                    }
                    if((JSON.stringify(node).indexOf(JSON.stringify({'name':record.get('m').properties.author})))==-1){
                        node.push({'name':record.get('m').properties.author})
                    }
                    // node.push({'name':record.get('n').properties.title})
                    // node.push({'name':record.get('m').properties.author})
                    // edge.push({'source':record.get('n').properties.title,'target':record.get('m').properties.author})
                    // json = {'node':node,'edge':edge}
                    // console.log(json)
                    // edge.push(record.get("r").start.low)
                })
                //设置边
                result.records.forEach(record=>{
                    let source,target;
                    let option_source = {name:record.get('m').properties.author}
                    let option_target = {name:record.get('n').properties.title}
                    for (let i=0;i<node.length;i++){
                        if(node[i].name==option_source.name){
                            source = i
                        }
                        if(node[i].name==option_target.name){
                            target = i
                        }
                    }
                    edge.push({source:source,target:target})
                    // console.log(node[17])
                    // console.log(JSON.stringify(node).indexOf(JSON.stringify(option)))
                    // edge.push(record.get("r").start.low)
                })
            })
            .catch(error=>{
                console.log(error)
            })
            .then(()=>{
                json = {node:node,edge:edge}
                resolve(json)
            })
    })
}
// getJson()
module.exports = {getJson}


