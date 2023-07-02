import { describe, expect, test, beforeAll } from '@jest/globals';
// import { generateDataModel } from './generateDataModel'; // in case you want generate models from the test, see option 1) below
import { __createItem } from './interfaces/DdbItem';

beforeAll(() => {
    /**
     * CAUTION I:
     * _injectDomainContext is the method which loads all the generated items into the current process
     * These items are generated from THIS same library(!)
     * So in order to test there are two options
     * 1) generate them based on JSONs each time before tests runs (slow and also problematic because of egg-chicken situation. For ex. VS Code spins tests all the time because each test execution creates new files, and utotest runs loops indefinatley)
     * 2) maintain a generated version of them in the repo, and if needed - manually regenerate them, see testrun.sh. 
     *
     * 
     * CAUTION II:
     *  Either of option chosen, make sure always dynamic imports are being used for any generated code,
     *  so that code can compile even withoutanything generated
    */
    // // option 1)
    // first regenerate model:
    // const dataModelFilesOutDir = resolve('packages/ddb-model/src/__testdata__/generated')
    // const dataModelsDir = resolve('packages/ddb-model/src/__testdata__/domain-context-definition')
    // generateDataModel({ dataModelFilesOutDir, dataModelsDir, importLibraryToUseInGeneratedFiles: '../../../interfaces/DdbItem' })
    // // then inject generated domain context:

    // // option 2) - rely on already existing generated code and directly inject the domain context
    // // If new generated files needed - may uncomment option 1) above temporarily and then again comment it
    // import('./__testdata__/generated/items/_injectItems')
    //     .then((setter: { _injectItems: Function }) => {
    //         if (setter && setter._injectItems) {
    //             setter._injectItems();
    //         }
    //     })
    const injector: { _injectDataItems: Function } = require('./__testdata__/generated/items/dataItems/_injectDataItems')
    if (injector && injector._injectDataItems) {
        injector._injectDataItems();
    }
})

describe('__createItem(dto) throws if dto.__typename property is bad', () => {

    test('atempt to prepare dynamo item without specifying __typename', () => {
        expect(() => __createItem({}, null))
            .toThrow("atempt to prepare dynamo item without specifying __typename");
    })
    test('Bad __typename', () => {
        expect(() => __createItem({ __typename: "abc" }, null))
            .toThrow("[__createItem] invalid __typename");
    })
});

describe('__createItem creates domain object based on __typename', () => {
    test('when passed json with {__typename: "User"} User instance is returned', () => {
        const userDefinition: { User: Function } = require('./__testdata__/generated/items/dataItems/User')
        const user = __createItem({ __typename: "User" }, null)
        expect(user).toBeInstanceOf(userDefinition.User)
    })
    test('when passed json with {__typename: "Person"} Person instance is returned', () => {
        const personDefinition: { Person: Function } = require('./__testdata__/generated/items/dataItems/Person')
        const person = __createItem({ __typename: "Person" }, null)
        expect(person).toBeInstanceOf(personDefinition.Person)

    })
});