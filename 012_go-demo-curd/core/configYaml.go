package core

import (
	"demo-crud/config"
	"fmt"
	"gopkg.in/yaml.v3"
	"os"
)

func ReadConfig() {
	byteData, err := os.ReadFile("config.yaml")
	if err != nil {
		panic(err)
	}
	fmt.Println("111111")
	fmt.Println(string(byteData))
	cfg := new(config.Server)
	yaml.Unmarshal(byteData, cfg)
	fmt.Println(cfg)
	fmt.Println(cfg.JWT.BufferTime)
}
