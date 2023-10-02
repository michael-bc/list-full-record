import "flowbite";

import './assets/styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import type {ApiCore} from "./infrastructure/api/ApiCore";
import {publicContext} from "./infrastructure/context";
import {initPublicContext} from "./infrastructure/context";
import {initBrandContext} from "./brand/infrastructure/context";

initPublicContext();
initBrandContext();

const apiCore = publicContext.get<ApiCore>("ApiCore");

apiCore.init(process.env.REACT_APP_API_BASE_URL || "");

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <MainLayout />
  </BrowserRouter>
);

