// 获取assets静态资源
export const getAmazonAssetsFile = (url:String) => {
    if (import.meta.env.VITE_ASSETS_PATH_PREFIX) {
        return import.meta.env.VITE_ASSETS_PATH_PREFIX + url
    } else {
        return new URL(`../assets/amazon/${url}`, import.meta.url).href;
    }
}

export const getSystemAssetsFile = (url:String) => {
    if (import.meta.env.VITE_ASSETS_PATH_PREFIX) {
        return import.meta.env.VITE_ASSETS_PATH_PREFIX + url
    } else {
        return new URL(`../assets/system/${url}`, import.meta.url).href;
    }
}
