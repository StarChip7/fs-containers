import { Todo } from "./List";
import { render, screen } from '@testing-library/react';
import { expect, test, describe, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react';

describe('Todo component', () => {
  test('renders the todo text', () => {
    const todo = { id: 1, text: 'Test Todo', done: false };
    render(<Todo todo={todo} doneInfo={<div>Done</div>} notDoneInfo={<div>Not Done</div>} />);

    expect(screen.getByText('Test Todo')).toBeDefined();
  });

  test('renders done info when todo is done', () => {
    const todo = { id: 1, text: 'Test Todo', done: true };
    render(<Todo todo={todo} doneInfo={<div>Done</div>} notDoneInfo={<div>Not Done</div>} />);
    
    expect(screen.getByText('Done')).toBeDefined();
  });

  test('renders not done info when todo is not done', () => {
    const todo = { id: 1, text: 'Test Todo', done: false };
    render(<Todo todo={todo} doneInfo={<div>Done</div>} notDoneInfo={<div>Not Done</div>} />);
    
    expect(screen.getByText('Not Done')).toBeDefined();
  });
    afterEach(() => cleanup());
  });

