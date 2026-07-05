// import { expect, test } from '@jest/globals';
// import { AgentDataDomain } from '@incta/ddb-cqd-model/dist/__testdata__/generated/domains/AgentDataDomain'
// import { Agent } from '@incta/ddb-cqd-model/dist/__testdata__/generated/items/dataItems/Agent';
// import { UserDataDomain } from '@incta/ddb-cqd-model/dist/__testdata__/generated/domains/UserDataDomain'
// import { User } from '@incta/ddb-cqd-model/dist/__testdata__/generated/items/dataItems/User';
// import { dispatchAction } from '.';
// import { DdbItem, IDdbDomain, __domain, setDomainContext } from '@incta/ddb-cqd-model';

// // uncomment when debugging tests
// jest.setTimeout(3000000)

// // injectDomainContext() is used to populate several lookup maps, one of them is the below, and only it is needed for dispatchAction
// setDomainContext({
//     domainsMap: new Map<string, IDdbDomain<DdbItem>>(
//         [
//             [Agent.__typename, AgentDataDomain],
//             [User.__typename, UserDataDomain],
//             //... as many as needed in a real app
//         ])
// })

// const genericActions = ["create", "update", "patch", "get", "del"]
// describe('generic actions with default implementation', () => {

//     for (const [__typename, domainObj] of __domain().domainsMap!) {
//         genericActions.forEach((action) => {
//             test(`{meta: {action: "${action}", __typename: "${__typename}"} calls ${__typename}.${action} if no ${__typename}DomainImpl.${action} is present`,
//                 async () => {

//                     const spy = jest.spyOn(domainObj, action as keyof AgentDataDomain)

//                     await dispatchAction(
//                         // input event
//                         {
//                             meta: {
//                                 action,
//                                 __typename,
//                                 graphqlResolverFieldName: 'some_field_TODO_make_optional'
//                             },
//                             arguments: {

//                             }
//                         },
//                         // identity of caller
//                         {
//                             sub: 'some_user_sub', claims: { active_agent: 'some_active_agent_for_user' }
//                         }
//                     );

//                     expect(spy).toHaveBeenCalled();
//                 });
//         });
//     }
// })

// describe('Not generic actions without default implementaton', () => {
//     const not_implemented_action = 'not_implemented_action'
//     test(`{meta: {action: "${not_implemented_action}", __typename: "XYZ"} will throw if XYZDomainImpl does not implement it`, async () => {
//         await expect(dispatchAction({
//             meta: {
//                 action: not_implemented_action,
//                 __typename: "Agent",
//                 graphqlResolverFieldName: 'code'
//             },
//             arguments: {  }
//         }, { sub: 'some_user_sub', claims: { active_agent: 'some_active_agent_for_user' } }))
//         .rejects.toThrowError("No implmentation found for Agent.not_implemented_action at '../../domain-context-impl/domains-impl/AgentDomainImpl'");

//     });
// })
