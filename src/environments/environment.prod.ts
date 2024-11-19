import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

const oAuthConfig = {
  issuer: 'https://localhost:44312/',
  redirectUri: baseUrl,
  clientId: '_App',
  responseType: 'code',
  scope: 'offline_access ',
  requireHttps: true,
};

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: '',
  },
  oAuthConfig,
  apis: {
    default: {
      url: 'https://localhost:44348',
      rootNamespace: '',
    },
    AbpAccountPublic: {
      url: oAuthConfig.issuer,
      rootNamespace: 'AbpAccountPublic',
    },
  },
  remoteEnv: {
    url: '/getEnvConfig',
    mergeStrategy: 'deepmerge'
  }
} as Environment;
