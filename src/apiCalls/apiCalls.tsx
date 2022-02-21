export interface PicsumImage {
  id: string;
  download_url: string;
}

const getImage = async (id: number): Promise<PicsumImage> => {
  const newImage = fetch(`https://picsum.photos/id/${id}/info`)
    .then((response) => {
      if (!response.ok) {
        throw `${response.status}`;
      }
      console.log(response);
      return response.json();
    })
    .then((result) => {
      console.log(result);
      return result;
    });

  return newImage;
};

export default getImage;
