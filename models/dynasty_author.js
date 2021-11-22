//导入数据库
const neo4jDriver = require('../db_neo4j');
const query = "match(n:author) -[r]- (m:dynasty) return n,m,r"
const getJson = async() =>{
    return new Promise((resolve,reject) => {
        let node = []
        let edge = []
        let tem = {}
        let count = 0
        let json={}
        neo4jDriver.session().run(query)
            .then(result=>{
                //设置节点
                result.records.forEach(record=>{
                    if((JSON.stringify(node).indexOf(JSON.stringify({'name':record.get('n').properties.author,type:'author'})))==-1){
                        node.push({'name':record.get('n').properties.author,type:'author'})
                    }
                    if((JSON.stringify(node).indexOf(JSON.stringify({'name':record.get('m').properties.dynasty,type:'dynasty'})))==-1){
                        node.push({'name':record.get('m').properties.dynasty,type:'dynasty'})
                    }
                })
                //设置边
                result.records.forEach(record=>{
                    let source,target;
                    let option_source = {name:record.get('m').properties.dynasty}
                    let option_target = {name:record.get('n').properties.author}
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
getJson()
module.exports = {getJson}


