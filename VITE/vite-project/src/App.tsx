import './App.css'
import { Amplify, Hub } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';

import * as awsConfig from './aws-exports.json';
import { GraphiqlEditor } from './pages/GraphiqlEditor';
import { useUserVisibleAgentsStore } from './stores/VisibleAgentsStore';
import { UserAgentsBox } from './components/UserAgentsBox';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import UploadFile from './pages/UploadFile';
import ListS3Objects from './pages/S3ListObjects';
import UserEmails from './pages/UserEmails';
import UserAgents from './pages/UserAgents';
import BlurringSpinner from './components/BlurringSpinner';
import { useBackendRequestsStore } from './stores/BackendRequestsStore';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { useBlurringSpinnerStore } from './stores/BlurringSpinnerStore';
import { ToastContainer } from 'react-toastify';


Amplify.configure({
  Auth: {
    identityPoolId: awsConfig.aws_cognito_identity_pool_id,
    region: awsConfig.aws_project_region,
    userPoolId: awsConfig.aws_user_pools_id,
    userPoolWebClientId: awsConfig.aws_user_pools_web_client_id
  },
  aws_appsync_graphqlEndpoint: awsConfig.aws_appsync_graphqlEndpoint,
  // aws_appsync_graphqlEndpoint: 'http://localhost:5000/lambda/invoke/graphql/query',
  aws_appsync_region: awsConfig.aws_project_region,
  aws_appsync_authenticationType: "AMAZON_COGNITO_USER_POOLS",
  Storage: {
    AWSS3: {
      bucket: awsConfig.aws_s3_bucket_operations, //REQUIRED -  Amazon S3 bucket name
      region: awsConfig.aws_project_region, //OPTIONAL -  Amazon service region
      level: 'public',
      customPrefix: {
        public: '',
        protected: '',
        private: ''
      },
    }
  }
});

function App() {
  const userAgentsStore = useUserVisibleAgentsStore()
  const backendStore = useBackendRequestsStore()
  const loadingStore = useBlurringSpinnerStore()

  Hub.listen("auth", async (evnt) => {
    // console.log('-------auh event payload ------------')
    // console.log(evnt)
    // let username
    if (evnt.payload.event === 'signOut') {
      backendStore.setIsSigningOut(true)
      userAgentsStore.resetUserObject()
    }
    if (evnt.payload.event === 'signIn') {
      backendStore.setIsSigningOut(false)
      // username = evnt?.payload?.data?.username
    }
    // if (username) {
    //   await userAgentsStore.setUserObject(username, userAgentsStore.unsuccessfulCognitoLookupAttempts)
    // }
  });

  return (
    <Authenticator>
      {({ signOut, user }) => {
        console.log('cognito user: ', user)
        // if user is not loaded - load user if not already loading it and not already signing out
        if (!userAgentsStore.userObject && !backendStore.isSigningOut && !loadingStore.isLoadingUserObject) {
          console.log('userObject from store was null, reloading')
          loadingStore.setLoading(true)
          loadingStore.setIsLoadingUserObject(true)
          userAgentsStore.setUserObject(String(user?.username), userAgentsStore.unsuccessfulCognitoLookupAttempts)
            .then(() => { loadingStore.setLoading(false); loadingStore.setIsLoadingUserObject(false) })
        }
        console.log('userObject from store: ', userAgentsStore.userObject)

        return (
          <BrowserRouter>
            <BlurringSpinner></BlurringSpinner>
            <div className=" flex h-screen w-screen overflow-y-auto">
              <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
              {/* <!-- Sidebar --> */}
              <aside className="w- p-4 bg-gray-100">
                <ul className="py-4">
                  {/* <!-- Sidebar content goes here --> */}
                  <li className="pl-4 py-2 hover:bg-gray-700 transition-colors duration-300">
                    <NavLink to="graphiql" > graphiql </NavLink>
                  </li>
                  <li className="pl-4 py-2 hover:bg-gray-700 transition-colors duration-300">
                    <NavLink to="documents-upload" > upload </NavLink>
                  </li>
                  <li className="pl-4 py-2 hover:bg-gray-700 transition-colors duration-300">
                    <NavLink to="documents-view" > view </NavLink>
                  </li>
                  <li className="pl-4 py-2 hover:bg-gray-700 transition-colors duration-300">
                    <NavLink to="settings/user-emails" > My Emails </NavLink>
                  </li>
                  <li className="pl-4 py-2 hover:bg-gray-700 transition-colors duration-300">
                    <NavLink to="settings/agents" > My Agents </NavLink>
                  </li>
                </ul>
              </aside>

              {/* <!-- Main Content --> */}
              <div className="flex flex-col flex-1">
                {/* <!-- Horizontal Navbar --> */}
                <nav className="bg-blue-500 text-white p-4 flex justify-between items-center">
                  {/* <!-- Navbar content goes here --> */}
                  <div>
                    {/* <img src={logo} alt="Profile" className="w-8 h-8 p-0 m-0" /> */}
                  </div>
                  <div>
                    {/* <!-- Navigation Links --> */}
                    {/* DEBUG: the user activeagent is: {userAgentsStore.userObject?.active_agent} */}

                    <UserAgentsBox />
                  </div>
                  <div>
                    {/* <img src={profileIcon} onClick={signOut} alt="Profile" className="w-8 h-8 rounded-full" /> */}
                    <button onClick={signOut} className="flex items-center space-x-2 text-white-600 hover:text-red-800">
                      <RiLogoutBoxRLine className="h-5 w-5" />
                      <span>Logout</span>
                    </button>
                  </div>
                </nav>

                {/* <!-- Main Content Area --> */}
                <div className="flex-1 p-4 text-left ">
                  {/* <!-- Main content goes here --> */}
                  {/* <GraphiqlEditor /> */}
                  <Routes>
                    <Route path="/graphiql/*" element={<GraphiqlEditor />} />
                    <Route path="/documents-upload/*" element={<UploadFile />} />
                    <Route path="/documents-view/*" element={<ListS3Objects />} />
                    <Route path="/settings/user-emails/*" element={<UserEmails />} />
                    <Route path="/settings/agents/*" element={<UserAgents />} />
                  </Routes>
                </div>
              </div>
            </div>
          </BrowserRouter>
        )
      }}
    </Authenticator>
  )
}

export default App
