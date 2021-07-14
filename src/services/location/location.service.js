import camelize from "camelize";
import {locations} from './location.mock';
//import { host } from "../../utils/env";

// export const locationRequest = (searchTerm) => {
//   return fetch(`${host}/geocode?city=${searchTerm}`).then((res) => {
//     console.log(res);

//     return res.json();
//   });
// };

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject("not found");
    }
    resolve(locationMock);
  });
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  console.log(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
