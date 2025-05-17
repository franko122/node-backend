 
  import cloudinary from 'cloudinary';
   import fs from 'fs';
   import path from 'path'
cloudinary.config({
  cloud_name: 'dzowrkbyj',
  api_key: '686495224159795',
  api_secret: 'DKivrMIfCHDRhiii3ooaimEhy9Y'
}); 
const files = fs.readdirSync('./img/elon2.jfif');
console.log(files); // Lists all files in the folder
function uploadToCloudinary(file) {
  try {
    cloudinary.uploader.upload(filePath, { resource_type: 'auto' })
      .then(result => console.log('Uploaded:', result.secure_url))
      .catch(error => console.error('Upload error:', error));
  } catch (err) {
    console.error('Unexpected error:', err);
  }
}

// Example usage:
uploadToCloudinary('backendapp/img/elon.jfif