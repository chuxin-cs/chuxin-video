package global

import (
	"demo-crud/config"
	"gorm.io/gorm"
)

var (
	G_DB     *gorm.DB
	G_CONFIG config.Server
)
