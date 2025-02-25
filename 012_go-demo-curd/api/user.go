package api

import (
	"demo-crud/common"
	"demo-crud/database"
	"demo-crud/models"
	"errors"
	"fmt"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
	"net/http"
)

func GetUsers(c *gin.Context) {
	page := c.DefaultQuery("page", "1")
	pageSize := c.DefaultQuery("pageSize", "10")
	fmt.Println("page========>", page)
	fmt.Println("pageSize========>", pageSize)

	var users []models.User
	database.DB.Find(&users)
	common.OkWithData(users, c)
}

func GetUser(c *gin.Context) {
	// 第一步取出字段
	id := c.Param("id")
	// 创建一个对象的模型
	var user models.User
	result := database.DB.First(&user, id)
	// go中 如果不等于 nil 则代表当前是有问题
	if result.Error != nil {
		// 当然要判断是否没有这个用户 所以还要再判断一下
		if errors.Is(result.Error, gorm.ErrRecordNotFound) {
			c.JSON(http.StatusOK, gin.H{
				"code":    200,
				"data":    nil,
				"message": "系统中查询不到用户",
			})
		} else {
			// 参数乱传时会进入
			c.JSON(http.StatusOK, gin.H{
				"code":    200,
				"data":    nil,
				"message": "用户查询失败",
			})
		}
	} else {
		c.JSON(http.StatusOK, gin.H{
			"code":    200,
			"message": "查询成功",
			"data":    user,
		})
	}
}

func CreateUsers(c *gin.Context) {
	var user models.User
	if err := c.ShouldBindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	database.DB.Create(&user)
	c.JSON(http.StatusOK, gin.H{
		"code": 200,
	})
}
