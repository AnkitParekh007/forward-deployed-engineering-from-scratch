import {defineConfig} from '@playwright/test';
const base='http://127.0.0.1:4173/forward-deployed-engineering-from-scratch/';
export default defineConfig({testDir:'./tests',use:{baseURL:base,launchOptions:process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{}},webServer:{command:'npm run preview -- --host 127.0.0.1',url:base,reuseExistingServer:!process.env.CI}});
