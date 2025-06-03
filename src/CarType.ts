export interface AttributeType {
  value: string;
  id: string;
  label: string;
  type: string;
  groupId: string;
  order: number;
}

export interface ImageType {
  id: number;
  size: string;
  url: string;
}

export interface CarType {
  _id: number;
  seller: {
    groupId: number[];
    groupKey: string[];
    photo: string;
    commercialName: string;
    logo: string;
    phone: {
      type: "mobile" | "office" | string;
      number: string;
      action: string;
      format: string;
      extension: string;
      nextelId: string;
    }[];
  };
  location: {
    location: {
      neighborhood: {
        name: string;
        id: string;
      };
      city: {
        name: string;
        id: string;
      };
      state: {
        name: string;
        id: string;
      };
      country: {
        name: string;
        id: string;
      };
    };
    geoReference: string;
    zipCode: string;
    numInt: string;
    numExt: string;
    street: string;
  };
  status: string;
  variations: never[];
  attributes: AttributeType[];
  thumbnail: string;
  descriptionId: number;
  sellerId: number;
  categoryId: string;
  title: string;
  price: number;
  currency: string;
  condition: string;
  countryId: string;
  images: ImageType[];
}
