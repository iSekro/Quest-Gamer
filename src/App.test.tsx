import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it('renders a retro quiz window with four answer buttons and a timer', () => {
    render(<App />);

    expect(screen.getByText('QUEST GAMER.EXE')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /super mario 64/i })).toBeInTheDocument();
    expect(screen.getByText('10s')).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(5); // 4 answers + next button
  });

  it('shows correct feedback and enables next button after selecting the correct answer', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    render(<App />);

    await user.click(screen.getByRole('button', { name: /a nintendo 64/i }));

    expect(screen.getByText(/correcto \+100/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /siguiente/i })).toBeEnabled();
  });

  it('locks the question and enables next button when time runs out', () => {
    render(<App />);

    act(() => {
      vi.advanceTimersByTime(10_000);
    });

    expect(screen.getByText(/tiempo agotado/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /a nintendo 64/i })).toBeDisabled();
    expect(screen.getByRole('button', { name: /siguiente/i })).toBeEnabled();
    expect(screen.getByText('0s')).toBeInTheDocument();
  });

  it('resets the timer when moving to the next question', () => {
    render(<App />);

    act(() => {
      vi.advanceTimersByTime(10_000);
    });

    screen.getByRole('button', { name: /siguiente/i }).click();

    expect(screen.getByText('10s')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /doom/i })).toBeInTheDocument();
  });
});
