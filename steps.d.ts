/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type api = typeof import('./pages/api/api.page.js');
type register = typeof import('./pages/api/register.page.js');
type web = typeof import('./pages/web/web.page.js');
type gmail = typeof import('./pages/web/gmail.page.js');
type PupHelper = import('./core/helpers/pup_helper.js');
type HookHelper = import('./core/helpers/hook_helper.js');
type ResembleHelper = import('codeceptjs-resemblehelper');
type ChaiWrapper = import('codeceptjs-chai');
type MockRequestHelper = import('@codeceptjs/mock-request');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, api: api, register: register, web: web, gmail: gmail }
  interface Methods extends Puppeteer, REST, JSONResponse, PupHelper, HookHelper, ResembleHelper, ChaiWrapper, MockRequestHelper {}
  interface I extends ReturnType<steps_file>, WithTranslation<JSONResponse>, WithTranslation<PupHelper>, WithTranslation<HookHelper>, WithTranslation<ResembleHelper>, WithTranslation<ChaiWrapper>, WithTranslation<MockRequestHelper> {}
  namespace Translation {
    interface Actions {}
  }
}
