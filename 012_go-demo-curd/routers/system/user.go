package system

import "github.com/gin-gonic/gin"

type UserRouter struct{}

func (s *UserRouter) InitUserRouter(Router *gin.RouterGroup) {
	// 这个是给未来可能会要加一些中间件使用的变量
	userRouter := Router.Group("user1")
	// 这个是给不是中间件使用的
	userRouterWithoutRecord := Router.Group("user1")
	{
		userRouter.GET("ref", func(c *gin.Context) {
			c.JSON(200, gin.H{
				"code": 200,
			})
		})
	}
	{
		userRouterWithoutRecord.GET("get", func(c *gin.Context) {
			c.JSON(200, "高效")
		})
	}
}
