const vision = require('@google-cloud/vision');

const projectId = 'adoptme-276812';
const location = 'us-west1';
const productSetId = 'shelter';
const keyFilename = `..\\..\\AdoptMe-8e15d11cf1fc.json`;
const productCategory = 'general-v1';

async function getSimilarProductsFile(_content) {
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

module.exports = {
  getSimilarProductsFile
}