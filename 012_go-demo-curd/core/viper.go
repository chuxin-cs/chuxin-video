package core

import (
	"demo-crud/global"
	"fmt"
	"github.com/spf13/viper"
)

func Viper() *viper.Viper {

	config := "config"

	v := viper.New()
	v.SetConfigName(config)
	v.SetConfigType("yaml")
	v.AddConfigPath("./")
	err := v.ReadInConfig()

	if err != nil {
		panic(fmt.Errorf("文件读取: %s \n", err))
	}

	if err = v.Unmarshal(&global.G_CONFIG); err != nil {
		panic(fmt.Errorf("配置没有读取的到: %s \n", err))
	}

	return v
}
