// 工厂构造函数
function Factory(name, device, date) {
  this.name = name
  this.device = device
  this.date = date
}

// 抽象工厂模式。
// 创建手机工厂类 抽象工厂不干活，具体工厂（ConcreteFactory）来干活
class MobileFactory {
  // 提供创建操作系统的接口
  createOS() {
    throw new Error("抽象工厂方法不允许直接调用，你需要将我重写！")
  }
  // 提供创建硬件的接口
  createHardWare() {
    throw new Error("抽象工厂方法不允许直接调用，你需要将我重写！")
  }
}

//创建一个具体工厂，具体工厂继承自抽象工厂
class MiFactory extends MobileFactory {
  createAndroidOS() {
    // 创建安卓系统实例
    return new AndroidOS()
  }
  createIosOS() {
    // 创建ios系统实例
    return new IosOS()
  }
  createHardWare() {
    // 创建通用硬件实例
    return new CommonHardWare()
  }
}

// 创建操作系统类
class OS {
  controlHardWare() {
    throw new Error('抽象产品方法不允许直接调用，你需要将我重写！')
  }
}

// 定义具体操作系统的具体产品类
class AndroidOS extends OS {
  controlHardWare() {
    console.log('用安卓的方式去启动系统')
  }
}

class IosOS extends OS {
  controlHardWare() {
    console.log('用ios的方式去操作硬件')
  }
}

// 定义手机硬件类的抽象产品类
class HardWare {
  // 手机硬件的共性方法，这里提取了“根据命令运转”这个共性
  operateOrder() {
    throw new Error('抽象产品方法不允许直接调用，你需要将我重写！')
  }
}

// 定义具体硬件的具体产品类
class CommonHardWare extends HardWare {
  operateOrder() {
    console.log('用通用的方式去操作')
  }
}

class MiHardWare extends HardWare {
  operateOrder() {
    console.log('用小米的方式去操作')
  }
}

// 创建我的手机实例
const myMobile = new MiFactory()
// 拥有操作系统
const myOS = myMobile.createAndroidOS()
// 拥有硬件
const myHardWare = myMobile.createHardWare()
// 启动系统
myOS.controlHardWare()
// 唤醒硬件
myHardWare.operateOrder()
