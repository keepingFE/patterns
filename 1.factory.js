// 工厂构造函数
function Factory(name, device, date) {
  this.name = name
  this.device = device
  this.date = date
}

/**
 * 创建手机工厂类
 * 抽象工厂（抽象类，它不能被用于生成具体实例） 每一个抽象工厂对应的这一类的产品，被称为“产品族”
 */
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

/**
 * 创建一个具体工厂，具体工厂继承自抽象工厂
 * 继承自抽象工厂、实现了抽象工厂里声明的那些方法，用于创建具体的产品的类
 */
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

/**
 * 创建操作系统类
 * 抽象产品（抽象类，它不能被用于生成具体实例）
 */
class OS {
  controlHardWare() {
    throw new Error('抽象产品方法不允许直接调用，你需要将我重写！')
  }
}

/**
 * 定义具体操作系统里面的具体产品类
 * 具体产品（用于生成产品族里的一个具体的产品所依赖的更细粒度的产品）
 */
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
