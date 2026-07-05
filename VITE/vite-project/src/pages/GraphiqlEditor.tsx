import { explorerPlugin } from '@graphiql/plugin-explorer';
import { GraphiQL } from 'graphiql';
// import { useState } from 'react';

import 'graphiql/graphiql.css';
import '@graphiql/plugin-explorer/dist/style.css';
import { API } from 'aws-amplify';

export function GraphiqlEditor() {
    // const [query, setQuery] = useState('');
    const explorer_plugin = explorerPlugin({
        showAttribution: true,
        explorerIsOpen: true,
        checkboxUnchecked: true
        // query,
        // onEdit: setQuery,
        // showAttribution: false
    });
    
    return (
        <GraphiQL
            fetcher={(graphQLParams) => API.graphql(graphQLParams)}
            // query={query}
            // onEditQuery={setQuery}
            plugins={[explorer_plugin]}
        />
    );
}