import axios from 'axios';
import { getBootstrap } from './api/getBootstrap';
import { apiClientFactory } from '@vue-storefront/core';
import { getProduct } from './api/getProduct';

const onCreate = (settings) => {
  const client = axios.create({
    baseURL: settings.api.url
  });

  return {
    config: settings,
    client
  };
};

const { createApiClient } = apiClientFactory<any, any>({
  onCreate,
  api: {
    getBootstrap,
    getProduct
  }
});

export {
  createApiClient
};
