import {useState, useCallback} from 'react';

interface Props {
  method?: 'GET' | 'POST' | 'PUT';
  uri: string;
  headers?: {[key: string]: string};
  body:
    | string
    | Document
    | Blob
    | ArrayBufferView
    | ArrayBuffer
    | FormData
    | URLSearchParams
    | ReadableStream<Uint8Array>
    | null
    | undefined;
}

export function useImageUpload(): [
  number,
  (props: Props) => Promise<boolean>,
  boolean
] {
  // const [ready, setReady] = useState(false);
  const [progress, setProgress] = useState<number>(0);
  const [error, setError] = useState(false);
  const send = useCallback(
    ({uri, method = 'GET', headers = {}, body}: Props): Promise<boolean> => {
      // const formData = new FormData();
      const xhr = new XMLHttpRequest();

      // Return it as a Promise
      return new Promise<boolean>(function (resolve, reject) {
        // Setup our listener to process completed requests
        xhr.onerror = function () {
          setError(true);
        };
        xhr.onloadend = () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            // If successful
            resolve(true);
          } else {
            // If failed
            reject({
              status: xhr.status,
              statusText: xhr.statusText,
            });
          }
        };

        xhr.onprogress = (event) => {
          setProgress(event.loaded);
        };

        // Setup our HTTP request
        xhr.open(method, uri, true);
        Object.entries(headers).forEach(([key, value]) => {
          xhr.setRequestHeader(key, value);
        });

        // formData.append('file', body, 'image.png');

        // Send the request
        xhr.send(body);
      });
    },
    []
  );

  //   if (profilePic !== '' && profilePic.indexOf('http') === -1) {
  //     url = await GenerateImageUploadMutation(Environment, {
  //       input: {
  //         type: 'USER_PROFILE',
  //       },
  //     });
  //     buf = new Buffer(
  //       profilePic.replace(/^data:image\/\w+;base64,/, ''),
  //       'base64'
  //     );

  // if (url) {
  //   await fetch(url.generateImageUpload.putUri, {
  //     method: 'PUT',
  //     mode: 'cors',

  //     headers: {
  //       'Content-Disposition': `attachment; filename=${username}-profile.jpg`,
  //       ContentEncoding: 'base64',
  //       ContentType: 'image/jpg',
  //     },
  //     body: buf,
  //   });

  // const newAuthObject: NewAuthObject = {
  //   image: {
  //     id: user && user.profileImage ? user.profileImage.id : '',
  //     altText: `${username} - Profile`,
  //     uri: url.generateImageUpload.getUri,
  //     title: `${username} - Profile`,
  //   },
  // };

  // handleLoginUpdate(newAuthObject);
  // }

  //   return () => {
  //     if (xhr.status !== XMLHttpRequest.DONE) {
  //       xhr.abort();
  //     }
  //   };

  return [progress, send, error];
}
