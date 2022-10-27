// 桌面设备最小宽度
const DESKTOP_DEVICE_WIDTH: number = 1280

// category 本地构建数据
const ALL_CATEGORY_ITEM = {
  id: "all",
  name: "全部"
}
// category 初始化数据
const INIT_CATAGORY_ITEM = [
  ALL_CATEGORY_ITEM,
  {
    id: "web_app_icon",
    name: "UI/UX",
    col: 1,
    urlname: "web_app_icon"
  },
  { id: "design", name: "平面", col: 1, urlname: "design" },
  {
    id: "illustration",
    name: "插画/漫画",
    col: 1,
    urlname: "illustration"
  },
  {
    id: "photography",
    name: "摄影",
    col: 2,
    urlname: "photography"
  },
  { id: "games", name: "游戏", urlname: "games" },
  { id: "anime", name: "动漫", urlname: "anime" },
  {
    id: "industrial_design",
    name: "工业设计",
    col: 2,
    urlname: "industrial_design"
  },
  { id: "architecture", name: "建筑设计", urlname: "architecture" },
  { id: "art", name: "人文艺术", urlname: "art" },
  { id: "home", name: "家居/家装", col: 1, urlname: "home" }
]

const THEME_LIGHT = "THEME_LIGHT"
const THEME_DARK = "THEME_DARK"
const THEME_SYSTEM = "THEME_SYSTEM"

export {
  DESKTOP_DEVICE_WIDTH,
  INIT_CATAGORY_ITEM,
  THEME_LIGHT,
  THEME_DARK,
  THEME_SYSTEM
}
