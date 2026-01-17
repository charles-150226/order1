// Firebase配置文件
// 注意：这是演示配置，请在实际使用时替换为您自己的Firebase项目配置
const firebaseConfig = {
    apiKey: "AIzaSyC9XnL5vQj3w8J5R5X6Z7V8B9N0M1K2A3",
    authDomain: "huangnet-order-system.firebaseapp.com",
    databaseURL: "https://huangnet-order-system-default-rtdb.firebaseio.com",
    projectId: "huangnet-order-system",
    storageBucket: "huangnet-order-system.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abcdef1234567890abcdef"
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { firebaseConfig };
}