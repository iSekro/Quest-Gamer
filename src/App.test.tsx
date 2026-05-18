import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders a retro quiz window with four answer buttons', () => {
    render(<App />);

    expect(screen.getByText('QUEST GAMER.EXE')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /super mario 64/i })).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(5); // 4 answers + next button
  });

  it('shows correct feedback and enables next button after selecting the correct answer', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: /a nintendo 64/i }));

    expect(screen.getByText(/correcto \+100/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /siguiente/i })).toBeEnabled();
  });
});
