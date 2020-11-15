// media resize
export const resizeImg = (imageURL, size) => {
    // using a regex expression to match the words media and screenshot
    const image = imageURL.match(/media\/screenshot/)
    ? imageURL.replace('media/screenshots', `media/resize/${size}/-/screenshots`)
    : imageURL.replace('/media/games', `/media/resize/${size}/-/games/`);
    return image;
}