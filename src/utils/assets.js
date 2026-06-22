const baseUrl = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export function imagePath(path) {
  return `${baseUrl}images/${path.replace(/^\/?images\/?/, "")}`;
}
