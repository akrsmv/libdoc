import './App.css'
import { Amplify, Hub, Storage } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';

import * as awsConfig from './aws-exports.json';
import { GraphiqlEditor } from './components/GraphiqlEditor';
import profileIcon from './assets/react.svg';
import { useUserVisibleAgentsStore } from './stores/VisibleAgentsStore';
import { UserAgentsBox } from './components/UserAgentsBox';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import UploadFile from './components/UploadFile';
import ListS3Objects from './components/S3ListObjects';

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
    }
  }
});
Storage.configure({ level: 'private' });

function App() {
  const userAgentsStore = useUserVisibleAgentsStore()

  Hub.listen("auth", async (evnt) => {
    console.log('-------auh event payload ------------')
    console.log(evnt)
    let username
    if (evnt.payload.event === 'signOut') {
      userAgentsStore.resetUserObject()
    }
    if (evnt.payload.event === 'signIn') {
      username = evnt?.payload?.data?.username
    }
    if (username) {
      await userAgentsStore.setUserObject(username)
    }
  });

  return (
    <Authenticator>
      {({ signOut, user }) => {
        console.log('cognito user: ', user)
        if (!userAgentsStore.userObject) {
          console.log('userObject from store was null, reloading')
          userAgentsStore.setUserObject(String(user?.username))
        }
        console.log('userObject from store: ', userAgentsStore.userObject)

        return (
          <BrowserRouter>
            <div className=" flex h-screen w-screen overflow-y-auto">
              {/* <!-- Sidebar --> */}
              <div className="w-10 p-4 bg-gray-100">
                {/* <!-- Sidebar content goes here --> */}
                <NavLink to="graphiql" > graphiql </NavLink>
                <NavLink to="documents-upload" > upload </NavLink>
                <NavLink to="documents-view" > view </NavLink>
              </div>

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
                    the user activeagent is: {userAgentsStore.userObject?.active_agent}
                    <UserAgentsBox />
                  </div>
                  <div>
                    <img src={profileIcon} onClick={signOut} alt="Profile" className="w-8 h-8 rounded-full" />
                  </div>
                </nav>

                {/* <!-- Main Content Area --> */}
                <div className="flex-1 p-4 text-left ">
                  {/* <!-- Main content goes here --> */}
                  {/* <GraphiqlEditor /> */}
                  <Routes>
                    <Route path="/graphiql/*" element={<GraphiqlEditor />} />
                    <Route path="/documents-upload/*" element={<UploadFile />} />
                    <Route path="/documents-view/*" element={<ListS3Objects/>} />
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
