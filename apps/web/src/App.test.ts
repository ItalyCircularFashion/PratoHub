import { describe, expect, it } from 'vitest';
import { App } from './App';
describe('scaffold', () => { it('exports a component', () => expect(App).toBeTypeOf('function')); });
