const vision = require('@google-cloud/vision');

const projectId = 'adoptme-276812';
const location = 'us-west1';
const productSetId = 'shelter';
const keyFilename = `..\\..\\AdoptMe-8e15d11cf1fc.json`;
// Creates a client
const client = new vision.ProductSearchClient({projectId, keyFilename});

const dataByProductId = {
  'cat-1': {
    path: 'gs://adoptme-276812.appspot.com/cat1.jpg',
    imgId: '745119b5-67d2-40ec-aa70-4f8bf516482b'
  },
  'cat-2': {
    path: 'gs://adoptme-276812.appspot.com/cat2.jpg',
    imgId: 'b4ef6cf2-68fd-4947-bed1-1a053f8e06e6'
  },
  'cat-3': {
    path: 'gs://adoptme-276812.appspot.com/cat3.jpg',
    imgId: 'ef22f3fc-b6c2-40dd-bd18-1fde8dc33862'
  },
  'cat-4': {
    path: 'gs://adoptme-276812.appspot.com/cat4.jpg',
    imgId: 'a909981a-5659-4c7e-a7ed-ca05d1201a0d'
  },
  'cat-5': {
    path: 'gs://adoptme-276812.appspot.com/cat5.jpg',
    imgId: '8ca0971e-0c15-4d5e-9a11-f3ae93b21486'
  },
  'cat-6': {
    path: 'gs://adoptme-276812.appspot.com/cat6.jpg',
    imgId: '0ff4a5d4-2e19-4368-b0c5-252e144f96a7'
  },
  'cat-7': {
    path: 'gs://adoptme-276812.appspot.com/cat7.jpg',
    imgId: 'bb08637c-247f-4f98-8f5b-e946757fec4a'
  },
  'cat-8': {
    path: 'gs://adoptme-276812.appspot.com/cat8.jpg',
    imgId: 'cbc210aa-b014-460e-803c-a64afb870c04'
  },
  'cat-9': {
    path: 'gs://adoptme-276812.appspot.com/cat9.jpg',
    imgId: '38e056e4-74a1-4b92-8622-8fcc3fd4991d'
  },
  'cat-10': {
    path: 'gs://adoptme-276812.appspot.com/cat10.jpg',
    imgId: '71e513fc-8ce1-4ff7-b5d4-e2c66dcc30a0'
  },
  'cat-11': {
    path: 'gs://adoptme-276812.appspot.com/cat11.jpg',
    imgId: '1d7a21b7-5728-47b7-822b-ac01aee1ff63'
  },
  'cat-12': {
    path: 'gs://adoptme-276812.appspot.com/cat12.jpg',
    imgId: '390f7812-f795-40b0-8e8c-4f00f40a177f'
  },
  'cat-13': {
    path: 'gs://adoptme-276812.appspot.com/cat13.jpg',
    imgId: 'b3a39873-ed26-4f74-aa4d-5f38e5ab96d4'
  },
  'cat-14': {
    path: 'gs://adoptme-276812.appspot.com/cat14.png',
    imgId: '71f63742-7c48-4bc2-a04d-9a94067280ff'
  },
  'cat-15': {
    path: 'gs://adoptme-276812.appspot.com/cat15.jpg',
    imgId: 'c533e288-cd86-4382-a07e-37b871788c6e'
  },
  'cat-16': {
    path: 'gs://adoptme-276812.appspot.com/cat16.jpg',
    imgId: '945a9751-bedb-4112-b797-822f69c844d3'
  },
  'cat-17': {
    path: 'gs://adoptme-276812.appspot.com/cat17.jpg',
    imgId: 'ec834999-c53c-47b4-916c-cc83fc090a5a'
  },
  'cat-18': {
    path: 'gs://adoptme-276812.appspot.com/cat18.jpg',
    imgId: '66f86df1-8221-45c1-9382-3786a09d0ddc'
  },
  'cat-19': {
    path: 'gs://adoptme-276812.appspot.com/cat19.jpg',
    imgId: '259afc81-d3ee-456f-aa7b-656d73069905'
  },
  'cat-20': {
    path: 'gs://adoptme-276812.appspot.com/cat20.jpg',
    imgId: 'bda8589a-5be2-42eb-b36c-0d7b72e715e2'
  },
  'cat-21': {
    path: 'gs://adoptme-276812.appspot.com/cat21.jpg',
    imgId: '4b5d36e7-7fa2-4e65-9068-71e144499981'
  },
  'cat-22': {
    path: 'gs://adoptme-276812.appspot.com/cat22.jpg',
    imgId: '95b51151-67f3-4ddf-aba4-b6f1d8370cd5'
  },
  'cat-23': {
    path: 'gs://adoptme-276812.appspot.com/cat23.jpg',
    imgId: '6ef808be-5728-48c9-a8b8-e20922228fd3'
  },
  'cat-24': {
    path: 'gs://adoptme-276812.appspot.com/cat24.jpg',
    imgId: '18640a66-3027-45d3-878e-68b072d07bb9'
  },
  'cat-25': {
    path: 'gs://adoptme-276812.appspot.com/cat25.jpg',
    imgId: '30c323ad-41c1-48a1-a2aa-2848d6854cbe'
  },
  'cat-26': {
    path: 'gs://adoptme-276812.appspot.com/cat26.jpg',
    imgId: 'dcf8de7d-e00f-407a-baea-1d4b4c96ea43'
  },
  'cat-27': {
    path: 'gs://adoptme-276812.appspot.com/cat27.jpg',
    imgId: 'd06e8aab-e576-4dfd-9b55-e18f58a9614d'
  },
  'cat-28': {
    path: 'gs://adoptme-276812.appspot.com/cat28.jpg',
    imgId: 'a479bb38-a037-45b0-919a-578d8f52e079'
  },
  'cat-29': {
    path: 'gs://adoptme-276812.appspot.com/cat29.jpg',
    imgId: '6c8751ca-092c-42a1-9c68-0b79532298e4'
  },
  'cat-30': {
    path: 'gs://adoptme-276812.appspot.com/cat30.jpg',
    imgId: '4eaa0bfc-9617-4405-baa5-a2a800fb61f4'
  },
  'cat-31': {
    path: 'gs://adoptme-276812.appspot.com/cat31.jpg',
    imgId: '7328e165-192d-414e-89bf-bacea706c746'
  },
  'dog-1': {
    path: 'gs://adoptme-276812.appspot.com/dog1.jpg',
    imgId: 'd70cd2a7-ca70-40f6-b635-32b936597a98'
  },
  'dog-2': {
    path: 'gs://adoptme-276812.appspot.com/dog2.jpg',
    imgId: '1aaeb9c3-2947-4ade-886f-748447cd5a41'
  },
  'dog-3': {
    path: 'gs://adoptme-276812.appspot.com/dog3.jpg',
    imgId: 'ca3969ab-3382-4b02-91b8-a25a2ec723df'
  },
  'dog-4': {
    path: 'gs://adoptme-276812.appspot.com/dog4.jpg',
    imgId: '8a503b2e-72bd-4c87-af1c-6c522e0ac3b6'
  },
  'dog-5': {
    path: 'gs://adoptme-276812.appspot.com/dog5.jpg',
    imgId: '393d10a5-af83-4eaf-a864-6152b0dbdef2'
  },
  'dog-6': {
    path: 'gs://adoptme-276812.appspot.com/dog6.jpg',
    imgId: '62c98226-f7a2-4dcc-87f5-d45ebea99e92'
  },
  'dog-7': {
    path: 'gs://adoptme-276812.appspot.com/dog7.png',
    imgId: '16a4e1a3-54c0-4623-9eae-8f2fed3819c5'
  },
  'dog-8': {
    path: 'gs://adoptme-276812.appspot.com/dog8.jpg',
    imgId: '593fad24-7dc8-440e-9d5d-96615a2b0e8e'
  },
  'dog-9': {
    path: 'gs://adoptme-276812.appspot.com/dog9.jpg',
    imgId: '11d18afb-1463-47db-9abd-107584942629'
  },
  'dog-10': {
    path: 'gs://adoptme-276812.appspot.com/dog10.jpg',
    imgId: '12bcb54c-72bd-4f55-b3a0-f450adb931c1'
  },
  'parrot-1': {
    path: 'gs://adoptme-276812.appspot.com/parrot1.jpg',
    imgId: '673d9c63-a94f-45f5-85bf-300339e036ab'
  },
  'parrot-2': {
    path: 'gs://adoptme-276812.appspot.com/parrot2.jpg',
    imgId: 'b798ebb8-4fae-4310-b91d-966b5797ff88'
  },
  'parrot-3': {
    path: 'gs://adoptme-276812.appspot.com/parrot3.jpg',
    imgId: '95f959ba-8d61-4f56-bc37-3807e6d94778'
  },
  'parrot-4': {
    path: 'gs://adoptme-276812.appspot.com/parrot4.jpg',
    imgId: '7eec6143-dab4-42de-83e6-6167f4941f80'
  },
  'hamster-1': {
    path: 'gs://adoptme-276812.appspot.com/hamster1.jpg',
    imgId: '3ceccbb4-68ae-4a6c-8258-e0d43e09cfbe'
  },
  'hamster-2': {
    path: 'gs://adoptme-276812.appspot.com/hamster2.jpg',
    imgId: '416e246c-5b48-48a0-a906-8d648ef367e5'
  },
  'hamster-3': {
    path: 'gs://adoptme-276812.appspot.com/hamster3.jpg',
    imgId: '29228ddf-a217-4414-84a8-c1cfff29799b'
  },
  'hamster-4': {
    path: 'gs://adoptme-276812.appspot.com/hamster4.jpg',
    imgId: '6dcf8f85-b761-46f6-bc4b-1d6908ed7171'
  },
  'hamster-5': {
    path: 'gs://adoptme-276812.appspot.com/hamster5.jpg',
    imgId: '6dcf8f85-b761-46f6-bc4b-1d6908ed7171'
  }
};
async function init() {
  await createProductSet();
  await createProduct();
  Object.keys(dataByProductId).forEach(id => {
    addProductToProductSet(id);
  });
  Object.keys(dataByProductId).forEach(id => {
    const productId = id;
    const gcsUri = dataByProductId[id].path;
    const referenceImageId =dataByProductId[id].imgId;
    createReferenceImage(productId, gcsUri, referenceImageId);
  });
}

async function createProductSet() {

  // Resource path that represents Google Cloud Platform location.
  const locationPath = client.locationPath(projectId, location);

  const productSet = {
    displayName: 'shelter',
  };

  const request = {
    parent: locationPath,
    productSet: productSet,
    productSetId: productSetId,
  };

  const [createdProductSet] = await client.createProductSet(request);
  console.log(`Product Set name: ${createdProductSet.name}`);
}

async function createProduct() {
  const projectId = 'Your Google Cloud project Id';
  const location = '';

  // Resource path that represents Google Cloud Platform location.
  const locationPath = client.locationPath(projectId, location);

  const product = {
    displayName: 'hamster-5',
    productCategory: 'general-v1',
  };

  const request = {
    parent: locationPath,
    product: product,
    productId: 'hamster-5',
  };

  const [createdProduct] = await client.createProduct(request);
  console.log(`Product name: ${createdProduct.name}`);
}

async function addProductToProductSet(productId) {
  const productPath = client.productPath(projectId, location, productId);
  const productSetPath = client.productSetPath(
    projectId,
    location,
    productSetId
  );

  const request = {
    name: productSetPath,
    product: productPath,
  };

  await client.addProductToProductSet(request);
  console.log(`Product added to product set.`);
}


export default {
  init
}
