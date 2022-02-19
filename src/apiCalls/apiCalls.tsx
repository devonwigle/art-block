type Image = {
  id: string;
  download_url: string;
};

const getImage = async (id: number): Promise<Image> => {
  const newImage = fetch(`https://picsum.photos/id/${id}/200/300`)
    .then((response) => response.json())
    .catch((error) => console.log(error));
  return newImage;
};

export default getImage;
