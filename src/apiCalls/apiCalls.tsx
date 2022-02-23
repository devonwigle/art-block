export interface PicsumImage {
  id: string;
  download_url: string;
}

export interface Word {
  id: number;
  word: string;
}

export const getImage = async (id: number): Promise<PicsumImage> => {
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

export const fetchWord = async (id: number): Promise<Word> => {
  const newWord = fetch(`https://art-block-word-api.herokuapp.com/api/v1/words/id/${id}`)
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

  return newWord
}
