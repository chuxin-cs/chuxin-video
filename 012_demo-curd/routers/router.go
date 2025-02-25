package routers

import (
	"demo-crud/handlers"
	"github.com/gin-gonic/gin"
)

func InitRouter() *gin.Engine {
	router := gin.New()
	user := router.Group("/user")
	{
		// 获取用户列表
		user.GET("/", handlers.GetUsers)
		// 获取单个用户
		user.GET("/:id", handlers.GetUser)
		// 本来是post请求 但是为了好验证就先走get了
		user.POST("/add", handlers.CreateUsers)
	}

	// 类似 Express 的 app.listen()
	router.Run(":9000")
	return router
}
