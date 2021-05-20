import React from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import LoginArea from './components/LoginArea/LoginArea';
import './App.css'
import wallyRequest from './wallyRequests';



export default function app() {
  return (
    <>
      <body className="body">
        <div className="container-fluid">
          <div className="row">
            <div class="col">
              <LoginArea />
            </div>
            <div class="col">
              <LoginForm />
            </div>
          </div>
        </div>
      </body>
    </>
  );
}