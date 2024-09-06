export type Product = {
  id: string;
  name: string;
  category_id: string;
  image: string;
  link: string;
  price: {
    discount_price: number;
    actual_price: number;
  };
  ratings: {
    value: number;
    no_of_ratings: number;
  };
};

export type Specs = {
  [key: string]: {
    title: string;
    values: {
      [key in string]: {
        title: string;
        value: string;
      };
    };
  };
};

export type ProductMetadata = {
  productDescription: string;
  specification: Specs;
  manufacturerDetails: {
    manufactureName: string;
    address: string;
    countryOfOrigin: string;
  };
  company: {
    name: string;
    address: string;
    contact: {
      email: string;
      tel: {
        mobileNumber: number;
        countryCode: string;
      };
    };
  };
};
