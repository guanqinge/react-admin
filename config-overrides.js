//根目录创建config-overrides.js, 修改默认配置
const {
    override,
    fixBabelImports,
    addLessLoader
} = require("customize-cra");

module.exports = override(
    fixBabelImports("import", { //antd按需加载
        libraryName: "antd",
        libraryDirectory: "es",
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {'@primary-color': '#1DA57A'},
    }),
);