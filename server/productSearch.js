const vision = require('@google-cloud/vision');
// const fs = require('fs');

const projectId = 'adoptme-276812';
const location = 'us-west1';
const productSetId = 'shelter';
const keyFilename = `E:\\UNIVERSITY\\Diploma\\diploma\\AdoptMe-8e15d11cf1fc.json`;
const productCategory = 'general-v1';

// const filepath = 'E:\\UNIVERSITY\\Diploma\\diploma\\assets\\images\\cat1.jpg'

// getSimilarProductsFile(content);

async function getSimilarProductsFile(_content) {
  // return;
  // const _content = fs.readFileSync(filepath, 'base64');
  // console.log(_content)
  const _filter = '';
  const productSearchClient = new vision.ProductSearchClient({projectId, keyFilename});
  const imageAnnotatorClient = new vision.ImageAnnotatorClient({projectId, keyFilename});

  const productSetPath = productSearchClient.productSetPath(
    projectId,
    location,
    productSetId
  );
  let request
  request = {
    image: {content: _content},
    features: [{type: 'PRODUCT_SEARCH'}],
    imageContext: {
      productSearchParams: {
        productSet: productSetPath,
        productCategories: [productCategory],
        filter: _filter,
      },
    },
  };

  const [response] = await imageAnnotatorClient.batchAnnotateImages({
    requests: [request],
  });
  const results = response['responses'][0]['productSearchResults']['results'];
  return results
}

// function base64_decode(base64str, file) {
  
//   // create buffer object from base64 encoded string, it is important to tell the constructor that the string is base64 encoded
//   var bitmap = new Buffer(base64str, 'base64');
//   // write buffer to file
//   fs.writeFileSync(file, bitmap);
//   console.log('******** File created from base64 encoded string ********');
// }

module.exports = {
  getSimilarProductsFile
}
  // export default {
  //   getSimilarProductsFile
  // }