export type Image = {
  id: string;
  download_url: string;
};

const getImage = async (id: number): Promise<Image> => {
  const newImage = fetch(`https://picsum.photos/id/10/info`)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => console.log(error));
  return newImage;
};

export default getImage;
