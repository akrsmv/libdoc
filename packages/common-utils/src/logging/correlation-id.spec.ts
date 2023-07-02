import {describe, jest, expect, test} from '@jest/globals';
import {set_correlation_token, get_correlation_token} from './correlation-id';
const expectedCorrelationToken = 'THE COREL ID WE HAVE'
describe('setting correlation id', () => {
  test('by passing plain string', () => {
    set_correlation_token(expectedCorrelationToken)
    expect(get_correlation_token()).toBe(expectedCorrelationToken);
  });

  test('by passing String(\'...\')', () => {
    set_correlation_token(String(expectedCorrelationToken))
    expect(get_correlation_token()).toBe(expectedCorrelationToken);
  });
  
  test('by passing new String(\'...\')', () => {
    set_correlation_token(new String(expectedCorrelationToken))
    expect(get_correlation_token()).toBe(expectedCorrelationToken);
  });
});