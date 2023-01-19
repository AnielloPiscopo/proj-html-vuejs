import { reactive } from 'vue'

export const store = reactive({
    moviesList: [],
    tvSeriesList: [],
    notFoundImgPath: "https://lets-be-smart.eu/data/img/shoppro/no.png",

    getImgPath(imgPath) {
        return new URL('./assets/img/' + imgPath, import.meta.url).href
    },
})