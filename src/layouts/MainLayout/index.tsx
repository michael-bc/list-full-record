import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import CriteriaView from "../../brand/views/CriteriaView";
import PartnersView from "../../partners/views/PartnersView";
import AccountView from "../../user/views/AccountView";
import Header from "../../common/components/AppHeader";
import AppSidebar from "../../common/components/AppSidebar";

import "./index.scss";

export default function() {
  return (
    <div>
      <header className="sticky bg-gray-50 dark:bg-gray-800 top-0 z-40 flex items-center w-full border-b border-gray-200 main-layout__header">
        <Header />
      </header>
      <div className="container px-4 mx-auto max-w-8xl main-layout__main">
        <div className="md:flex h-full">
          <aside
            id="left-sidebar"
            className="fixed pt-16 inset-0 z-20 flex-none h-full w-64 md:static transition-transform -translate-x-full md:translate-x-0 md:h-auto md:overflow-y-visible md:pt-0 md:w-48 md:block"
          >
            <AppSidebar />
          </aside>

          <main className="flex-auto w-full min-w-0 md:static md:max-h-full md:overflow-visible">
            <Routes>
              <Route path="criteria" element={ <CriteriaView /> } />
              <Route path="partners" element={ <PartnersView /> } />
              <Route path="account" element={ <AccountView /> } />
              <Route path="*" element={ <Navigate to="/criteria" /> } />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
}
