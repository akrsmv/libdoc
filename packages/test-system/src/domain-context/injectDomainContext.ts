import { loginfo, logwarn } from "@incta/common-utils";
import { __domain } from "@incta/ddb-model";
import { _injectCommandItems } from "./items/commandItems/_injectCommandItems";
import { _injectCommands } from "./commands/_injectCommands";
import { _injectDomains } from "./domains/_injectDomains";
import { _injectDataItems } from "./items/dataItems/_injectDataItems";
import { _injectQueryItems } from "./items/queryItems/_injectQueryItems";
import { _injectQueries } from "./queries/_injectQueries";

export const injectDomainContext = () => {

    // ----------- INJECT DOMAIN CONTEXT INTO CURRENT PROCESS
    _injectCommandItems()
    if (__domain().commandItemsMap?.size) {
        loginfo(`Loaded ${__domain().commandItemsMap?.size} command payload definitions`)
    } else {
        logwarn(`No Command Items loaded`)
    }

    _injectCommands()
    if (__domain().commandsMap?.size) {
        loginfo(`Loaded ${__domain().commandsMap?.size} commands`)
    } else {
        logwarn(`No Commands loaded`)
    }

    _injectQueryItems()
    if (__domain().queryItemsMap?.size) {
        loginfo(`Loaded ${__domain().queryItemsMap?.size} query payload definitions`)
    } else {
        logwarn(`No Query Items loaded`)
    }

    _injectQueries()
    if (__domain().queriesMap?.size) {
        loginfo(`Loaded ${__domain().queriesMap?.size} queries`)
    } else {
        logwarn(`No Queries loaded`)
    }

    _injectDataItems()
    if (__domain().dataItemsMap?.size) {
        loginfo(`Loaded ${__domain().dataItemsMap?.size} data items`)
    } else {
        logwarn(`No Data Items loaded`)
    }

    _injectDomains()
    if (__domain().domainsMap?.size) {
        loginfo(`Loaded ${__domain().domainsMap?.size} domains`)
    } else {
        logwarn(`No Domains loaded`)
    }
    // -----------------
}
