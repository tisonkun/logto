// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import { z } from 'zod';

import {
  CompanyInfo,
  companyInfoGuard,
  Branding,
  brandingGuard,
  TermsOfUse,
  termsOfUseGuard,
  Localization,
  localizationGuard,
  SignInMethodSettings,
  signInMethodSettingsGuard,
  GeneratedSchema,
  Guard,
} from '../foundations';

export type CreateSignInExperience = {
  id: string;
  companyInfo: CompanyInfo;
  branding: Branding;
  termsOfUse: TermsOfUse;
  forgetPasswordEnabled?: boolean;
  localization: Localization;
  signInMethods: SignInMethodSettings;
};

export type SignInExperience = {
  id: string;
  companyInfo: CompanyInfo;
  branding: Branding;
  termsOfUse: TermsOfUse;
  forgetPasswordEnabled: boolean;
  localization: Localization;
  signInMethods: SignInMethodSettings;
};

const createGuard: Guard<CreateSignInExperience> = z.object({
  id: z.string(),
  companyInfo: companyInfoGuard,
  branding: brandingGuard,
  termsOfUse: termsOfUseGuard,
  forgetPasswordEnabled: z.boolean().optional(),
  localization: localizationGuard,
  signInMethods: signInMethodSettingsGuard,
});

export const SignInExperiences: GeneratedSchema<CreateSignInExperience> = Object.freeze({
  table: 'sign_in_experiences',
  tableSingular: 'sign_in_experience',
  fields: {
    id: 'id',
    companyInfo: 'company_info',
    branding: 'branding',
    termsOfUse: 'terms_of_use',
    forgetPasswordEnabled: 'forget_password_enabled',
    localization: 'localization',
    signInMethods: 'sign_in_methods',
  },
  fieldKeys: [
    'id',
    'companyInfo',
    'branding',
    'termsOfUse',
    'forgetPasswordEnabled',
    'localization',
    'signInMethods',
  ],
  createGuard,
});
