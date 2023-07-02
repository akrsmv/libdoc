import { IClaims, IIdentity, IDdbCommand, staticImplements } from "@incta/ddb-model";
import { GenerateAirtoursPublicTestDataCommandDomain } from "../domains/GenerateAirtoursPublicTestDataCommandDomain";
import { GenerateAirtoursPublicTestData } from "../items/commandItems/GenerateAirtoursPublicTestData";
import { logdebug } from "@incta/common-utils";

@staticImplements<IDdbCommand<GenerateAirtoursPublicTestData>>()
export class GenerateAirtoursPublicTestDataCommand extends GenerateAirtoursPublicTestDataCommandDomain {
    public static async start(generateAirtoursPublicTestData: GenerateAirtoursPublicTestData, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        await this.validateStart(generateAirtoursPublicTestData, identity)
        const generateAirtoursPublicTestDataImpl = require('../../domain-context-impl/commands-impl/GenerateAirtoursPublicTestDataCommandImpl')
        if (generateAirtoursPublicTestDataImpl && generateAirtoursPublicTestDataImpl.start && typeof generateAirtoursPublicTestDataImpl.start === 'function') {
            try {
                await generateAirtoursPublicTestDataImpl.start(generateAirtoursPublicTestData, identity)
            } catch (error){
                await this.onCommandErrored(generateAirtoursPublicTestData, identity, error)
                throw error
            }
            await this.onCommandCompleted(generateAirtoursPublicTestData, identity)
        } else {
            throw new Error('Command implementation not found for GenerateAirtoursPublicTestData')
        }
    }
    public static async validateStart(generateAirtoursPublicTestData: GenerateAirtoursPublicTestData, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        const generateAirtoursPublicTestDataImpl = require('../../domain-context-impl/commands-impl/GenerateAirtoursPublicTestDataCommandImpl')
        if (generateAirtoursPublicTestDataImpl && generateAirtoursPublicTestDataImpl.validateStart && typeof generateAirtoursPublicTestDataImpl.validateStart === 'function') {
            await generateAirtoursPublicTestDataImpl.validateStart(generateAirtoursPublicTestData, identity)
        } else {
            logdebug('No validateStart implementation found for GenerateAirtoursPublicTestData')
        }
    }
    
    public static async onCommandCompleted(generateAirtoursPublicTestData: GenerateAirtoursPublicTestData, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        const generateAirtoursPublicTestDataImpl = require('../../domain-context-impl/commands-impl/GenerateAirtoursPublicTestDataCommandImpl')
        if (generateAirtoursPublicTestDataImpl && generateAirtoursPublicTestDataImpl.onCommandCompleted && typeof generateAirtoursPublicTestDataImpl.onCommandCompleted === 'function') {
            await generateAirtoursPublicTestDataImpl.onCommandCompleted(generateAirtoursPublicTestData, identity)
        } else {
            logdebug('No onCommandCompleted implementation found for GenerateAirtoursPublicTestData')
        }
    }

    public static async onCommandErrored(generateAirtoursPublicTestData: GenerateAirtoursPublicTestData, identity: Partial<IIdentity<Partial<IClaims>>> | null, error?: any): Promise<void> {
        const generateAirtoursPublicTestDataImpl = require('../../domain-context-impl/commands-impl/GenerateAirtoursPublicTestDataCommandImpl')
        if (generateAirtoursPublicTestDataImpl && generateAirtoursPublicTestDataImpl.onCommandErrored && typeof generateAirtoursPublicTestDataImpl.onCommandErrored === 'function') {
            await generateAirtoursPublicTestDataImpl.onCommandErrored(generateAirtoursPublicTestData, identity)
        } else {
            logdebug('No onCommandErrored implementation found for GenerateAirtoursPublicTestData')
        }
    }
}