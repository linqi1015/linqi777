//  把可以、提取出来
// 一般来做 不改变的常量用大写 常见的地方是key
const TOKENKEY = 'mmtoken'
// 保存
export function setToken(token) {
    window.localStorage.setItem(TOKENKEY,token)
}

// 获取
export function getToken() {
    window.localStorage.getItem(TOKENKEY)
}

// 删除
export function removeToken(token) {
    window.localStorage.removeItem(TOKENKEY)
}
