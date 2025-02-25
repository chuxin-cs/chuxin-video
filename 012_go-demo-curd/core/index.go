package core

import (
	"demo-crud/database"
	"demo-crud/initialize"
)

type server interface {
	ListenAndServe() error
}

func InitCore() {
	// 连接数据库
	database.Connect()

	Router := initialize.Routers()
	initServer("http://localhost:9000", Router)

	// routers/router 中的 package 文件中指定了 包名为 routers 所以用 routers. 调用里面的方法
	//routers.InitRouter()
}
