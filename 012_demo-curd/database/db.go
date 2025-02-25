package database

import (
	"demo-crud/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	dsn := "root:123456@tcp(127.0.0.1:3306)/go-demo?charset=utf8mb4&parseTime=True&loc=Local"

	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil {
		panic("数据库连接失败: " + err.Error())
	}

	DB = db

	// 自动创建表
	err = DB.AutoMigrate(&models.User{})
	if err != nil {
		panic("failed to auto migrate database: " + err.Error())
	}
}
