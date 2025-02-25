package main

import (
	"demo-crud/database"
	"demo-crud/routers"
)

func main() {
	// 连接数据库
	database.Connect()
	// routers/router 中的 package 文件中指定了 包名为 routers 所以用 routers. 调用里面的方法
	routers.InitRouter()
}
