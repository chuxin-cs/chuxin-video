package main

import (
	"fmt"
)

// 1. 变量声明（对比 JS 的 let/const）
var startNum int = 1 // 显式类型
const endNum int = 2

// 2.关于函数内 变量声明简写
func log() {
	name := "初心"
	fmt.Println("log函数调用=====>", name)
}

// 3. 声明并且直接使用  函数（对比 JS 的 function (){} ）
func add(a, b int) int {
	return a + b
}

// 4. 结构体（类似 JS 的对象）
type User struct {
	Name string
	Age  int
}

// 6. 校验
func main() {
	// 1.打印 “你好，世界” 等价于 console.log("你好，世界")
	fmt.Println("你好，世界")

	// 2.调用函数 和 js 一样
	log()

	// 3.调用 add 函数 求和 并且在函数内部使用到函数外部的参数
	fmt.Println("add函数调用=====>", add(startNum, endNum))

	// 4.创建对象
	// 在js中=> var user = {Name:"初心",Age:28}
	// 在ts中  interface User { Name: string; Age: number;}  使用 const user: User = { Name: "Bob", Age: 30};
	user := User{
		Name: "初心",
		Age:  28,
	}
	fmt.Println("name=====>", user.Name)
	fmt.Println("age=====>", user.Age)
}
