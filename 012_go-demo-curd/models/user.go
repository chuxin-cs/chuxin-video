package models

import "demo-crud/global"

type User struct {
	global.G_MODEL
	Name string `gorm:"not null" json:"name"`
	// unique 这里是唯一的 为了好测试先改成不是唯一的
	// Email string `gorm:"unique;not null" json:"email"`
	Email string `gorm:"not null" json:"email"`
}
