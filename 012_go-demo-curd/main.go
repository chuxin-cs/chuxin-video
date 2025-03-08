package main

import (
	"demo-crud/core"
	"demo-crud/global"
	"fmt"
)

func main() {
	core.Viper()
	// 打印
	fmt.Println("==========>", global.G_CONFIG.JWT)
	// 暂时把数据库连接和路由初始化放这个里面
	core.InitCore()
	// ====
	core.ReadConfig()
}
