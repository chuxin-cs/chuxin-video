package initialize

import (
	"demo-crud/routers"
	"github.com/gin-gonic/gin"
	"net/http"
)

func Routers() *gin.Engine {
	// 相当于 koa 的 new实例
	Router := gin.Default()
	Router.Use(gin.Recovery())

	if gin.Mode() == gin.DebugMode {
		Router.Use(gin.Logger())
	}

	// 创建一个共有的路由
	systemRouter := routers.RouterGroupApp.System

	PublicGroup := Router.Group("")
	PrivateGroup := Router.Group("")

	{
		PublicGroup.GET("/health", func(c *gin.Context) {
			c.JSON(http.StatusOK, "ok")
		})
	}
	{
		systemRouter.InitUserRouter(PrivateGroup) // 注册用户路由
	}

	return Router
}
