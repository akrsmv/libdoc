import { IClaims, IIdentity, IDdbCommand, staticImplements } from "@incta/ddb-model";
import { GenerateAirtoursTestDataCommandDomain } from "../domains/GenerateAirtoursTestDataCommandDomain";
import { GenerateAirtoursTestData } from "../items/commandItems/GenerateAirtoursTestData";
import { logdebug } from "@incta/common-utils";

@staticImplements<IDdbCommand<GenerateAirtoursTestData>>()
export class GenerateAirtoursTestDataCommand extends GenerateAirtoursTestDataCommandDomain {
    public static async start(generateAirtoursTestData: GenerateAirtoursTestData, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        await this.validateStart(generateAirtoursTestData, identity)
        const generateAirtoursTestDataImpl = require('../../domain-context-impl/commands-impl/GenerateAirtoursTestDataCommandImpl')
        if (generateAirtoursTestDataImpl && generateAirtoursTestDataImpl.start && typeof generateAirtoursTestDataImpl.start === 'function') {
            try {
                await generateAirtoursTestDataImpl.start(generateAirtoursTestData, identity)
            } catch (error){
                await this.onCommandErrored(generateAirtoursTestData, identity, error)
                throw error
            }
            await this.onCommandCompleted(generateAirtoursTestData, identity)
        } else {
            throw new Error('Command implementation not found for GenerateAirtoursTestData')
        }
    }
    public static async validateStart(generateAirtoursTestData: GenerateAirtoursTestData, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        const generateAirtoursTestDataImpl = require('../../domain-context-impl/commands-impl/GenerateAirtoursTestDataCommandImpl')
        if (generateAirtoursTestDataImpl && generateAirtoursTestDataImpl.validateStart && typeof generateAirtoursTestDataImpl.validateStart === 'function') {
            await generateAirtoursTestDataImpl.validateStart(generateAirtoursTestData, identity)
        } else {
            logdebug('No validateStart implementation found for GenerateAirtoursTestData')
        }
    }
    
    public static async onCommandCompleted(generateAirtoursTestData: GenerateAirtoursTestData, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        const generateAirtoursTestDataImpl = require('../../domain-context-impl/commands-impl/GenerateAirtoursTestDataCommandImpl')
        if (generateAirtoursTestDataImpl && generateAirtoursTestDataImpl.onCommandCompleted && typeof generateAirtoursTestDataImpl.onCommandCompleted === 'function') {
            await generateAirtoursTestDataImpl.onCommandCompleted(generateAirtoursTestData, identity)
        } else {
            logdebug('No onCommandCompleted implementation found for GenerateAirtoursTestData')
        }
    }

    public static async onCommandErrored(generateAirtoursTestData: GenerateAirtoursTestData, identity: Partial<IIdentity<Partial<IClaims>>> | null, error?: any): Promise<void> {
        const generateAirtoursTestDataImpl = require('../../domain-context-impl/commands-impl/GenerateAirtoursTestDataCommandImpl')
        if (generateAirtoursTestDataImpl && generateAirtoursTestDataImpl.onCommandErrored && typeof generateAirtoursTestDataImpl.onCommandErrored === 'function') {
            await generateAirtoursTestDataImpl.onCommandErrored(generateAirtoursTestData, identity)
        } else {
            logdebug('No onCommandErrored implementation found for GenerateAirtoursTestData')
        }
    }
}