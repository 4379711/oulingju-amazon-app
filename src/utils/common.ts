// 获取assets静态资源，图片随项目一起打包托管
export const getAmazonAssetsFile = (url: String) => {
    return new URL(`../assets/amazon/${url}`, import.meta.url).href;
}

export const getSystemAssetsFile = (url: String) => {
    return new URL(`../assets/system/${url}`, import.meta.url).href;
}
