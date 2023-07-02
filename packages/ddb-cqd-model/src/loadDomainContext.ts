import { loginfo, logwarn } from "@incta/common-utils"
import { __domain } from "@incta/ddb-model"

/**
 * EXPERIMENTAL
 * probably will be deleted as this lib is not to be refenced directly by operational apps
 * Also genereated is injectDomainContext method directly into the client app
 * @param cwd 
 */
export function loadDomainContext(cwd?: string) {
    cwd = cwd || ''
    // ----------- INJECT DOMAIN CONTEXT INTO CURRENT PROCESS
    const injectorCommandItems: { _injectCommandItems: Function } = require(`${cwd}/items/commandItems/_injectCommandItems`)
    if (injectorCommandItems && injectorCommandItems._injectCommandItems) {
        injectorCommandItems._injectCommandItems();
    }
    if (__domain().commandItemsMap?.size) {
        loginfo(`Loaded ${__domain().commandItemsMap?.size} command payload definitions`)
    } else {
        logwarn(`No Command Items loaded`)
    }

    const injectorCommands: { _injectCommands: Function } = require(`${cwd}/commands/_injectCommands`)
    if (injectorCommands && injectorCommands._injectCommands) {
        injectorCommands._injectCommands();
    }
    if (__domain().commandsMap?.size) {
        loginfo(`Loaded ${__domain().commandsMap?.size} commands`)
    } else {
        logwarn(`No Commands loaded`)
    }

    const injectorQueryItems: { injectorQueryItems: Function } = require(`${cwd}/items/queryItems/_injectQueryItems`)
    if (injectorQueryItems && injectorQueryItems.injectorQueryItems) {
        injectorQueryItems.injectorQueryItems();
    }
    if (__domain().queryItemsMap?.size) {
        loginfo(`Loaded ${__domain().queryItemsMap?.size} query payload definitions`)
    } else {
        logwarn(`No Query Items loaded`)
    }

    const injectorQueries: { _injectQueries: Function } = require(`${cwd}/queries/_injectQueries`)
    if (injectorQueries && injectorQueries._injectQueries) {
        injectorQueries._injectQueries();
    }
    if (__domain().queriesMap?.size) {
        loginfo(`Loaded ${__domain().queriesMap?.size} queries`)
    } else {
        logwarn(`No Queries loaded`)
    }

    const injectorDataItems: { _injectDataItems: Function } = require(`${cwd}/items/dataItems/_injectDataItems`)
    if (injectorDataItems && injectorDataItems._injectDataItems) {
        injectorDataItems._injectDataItems();
    }
    if (__domain().dataItemsMap?.size) {
        loginfo(`Loaded ${__domain().dataItemsMap?.size} data items`)
    } else {
        logwarn(`No Data Items loaded`)
    }

    const injectorDomainItems: { _injectDomains: Function } = require(`${cwd}/domains/_injectDomains`)
    if (injectorDomainItems && injectorDomainItems._injectDomains) {
        injectorDomainItems._injectDomains();
    }
    if (__domain().domainsMap?.size) {
        loginfo(`Loaded ${__domain().domainsMap?.size} domains`)
    } else {
        logwarn(`No Domains loaded`)
    }
    // -----------------
}