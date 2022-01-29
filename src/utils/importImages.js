function importAll(r) {
    let images = {};
    r.keys().forEach(item => {images[item.replace('./', '')] = r(item)});
    return images;
}


export const ImportAllImages = (callback) => {
    const ImagesObj = importAll(callback);
    const ImagesArr = Object.entries(ImagesObj);
    return ImagesArr.map(obj => obj[1].default);
}