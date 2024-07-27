# 数据准备
项目目录中的`data`文件夹为项目启动的数据文件，文件为压缩包，需要解压使用
1. **neo4j数据库导入**<br>
`data.rar`文neo4j数据库，在解压过后的文件夹中包含一个`graph.db.dump`格式的文件，通过neo4j命令行工具导入数据库。注意：使用网页端neo4j需要在neo4j的安装目录下，如‘D:/neo4j/bin’下通过cmd运行下面的指令。
```
neo4j-admin load --from=D:/data/neo4j_graph.db.dump --database=graph.db --force
```
其中`from`就代表了数据库存在的位置，由于data.rar解压后就在data文件夹下，所以`from`就为`D:(...)/data/neo4j_graph.db.dump`
2. **mongodb数据库导入**<br>
在解压了`wdata`压缩包后，压缩包内存在一个名为`WineData`的文件夹，该文件夹名就是Mongodb的数据库名，不可以更改。否则导致读取数据库失败
在cmd中执行以下指令：
```angular2html
mongorestore --drop D:\wdata\
```
这里需要注意三点：<br>
1 D:\wdata\ 目录下放的就是以数据库名命名的文件夹，最好不要再放其他文件夹或文件。<br>
2 数据库必须已经存在这个库。<br>
3 需要在授权时导入：如果执行失败，可以在服务里先关闭MongoDB服务，暂时用命令行启动MongoDB服务，再执行命令就可以啦。<br>
# 运行
安装依赖
```
npm install
```
启动项目
```
npm start
```
