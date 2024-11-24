import { toast } from "react-toastify";
const ImageToBase64 = async (image) => {
    return new Promise((resolve, reject) => {
        if (!image.type.match('image/jpeg') && !image.type.match('image/png')) {
            return reject(toast.error('please upload image in jpg or png format'))
            // return reject(new Error('Only JPG and PNG image formats are supported.'));
        }

        const reader = new FileReader();
        reader.readAsDataURL(image);
        
        reader.onload = () => {
            resolve(reader.result);
        };

        reader.onerror = error => {
            reject(error);
        };
    });
};

export default ImageToBase64;

// const ImageToBase64 = async (image) => {
//     const reader = await  new FileReader();
//     reader.readAsDataURL(image)
    
//     const data = await new Promise ((resolve,reject) => {
//         if (!image.type.match('image/jpeg') && !image.type.match('image/png')) {
//             reject(toast.error('please upload image in jpg or png format'))
//                  }
//         reader.onload = () => resolve(reader.result)
//         reader.onerror = error => reject(error)
//     })

//     return data
// }

// export default ImageToBase64