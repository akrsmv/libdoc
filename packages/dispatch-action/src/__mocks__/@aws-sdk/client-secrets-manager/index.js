const 
    send = jest.fn(),
    SecretsManagerClient = jest.fn(),
    GetSecretValueCommand = jest.fn()

module.exports = { SecretsManagerClient, GetSecretValueCommand, send }
