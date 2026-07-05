const SendMessageCommand = jest.fn(),
    send = jest.fn(),
    SQSClient = jest.fn()

module.exports = {
    SendMessageCommand, SQSClient, send
}