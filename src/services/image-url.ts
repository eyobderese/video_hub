import placeholder from "../assets/img-placeholder.webp";
const getCroppedImageUrl = (url: string) => {
  if (url) {
    const target = "media/";
    const index = url.indexOf(target) + target.length;

    return url.slice(0, index) + "crop/600/400/" + url.slice(index);
  }

  return placeholder;
};

export default getCroppedImageUrl;
