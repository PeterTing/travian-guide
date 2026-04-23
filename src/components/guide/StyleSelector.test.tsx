import { describe, it, expect } from 'vitest';
import { resolveStrategy } from './StyleSelector';

describe('StyleSelector.resolveStrategy', () => {
  it('returns null when no answers given', () => {
    expect(resolveStrategy(null, null, null)).toBeNull();
  });

  it('lazy base → lazy-decent immediately (ignore Q2/Q3)', () => {
    expect(resolveStrategy('lazy', null, null)).toBe('lazy-decent');
    expect(resolveStrategy('lazy', 'sim', null)).toBe('lazy-decent');
  });

  it('4p + sim → 4p-sim (Q3 not needed)', () => {
    expect(resolveStrategy('4p', 'sim', null)).toBe('4p-sim');
  });

  it('3p + sim → 3p-sim', () => {
    expect(resolveStrategy('3p', 'sim', null)).toBe('3p-sim');
  });

  it('4p + farming + active → 4p-farming', () => {
    expect(resolveStrategy('4p', 'farming', 'active')).toBe('4p-farming');
  });

  it('3p + farming + active → 3p-farming', () => {
    expect(resolveStrategy('3p', 'farming', 'active')).toBe('3p-farming');
  });

  it('4p + farming + casual → 4p-sim (fallback)', () => {
    expect(resolveStrategy('4p', 'farming', 'casual')).toBe('4p-sim');
  });

  it('3p + farming + casual → 3p-sim (fallback)', () => {
    expect(resolveStrategy('3p', 'farming', 'casual')).toBe('3p-sim');
  });

  it('4p + farming + null (Q3 pending) → null', () => {
    expect(resolveStrategy('4p', 'farming', null)).toBeNull();
  });

  it('4p + null → null (Q2 pending)', () => {
    expect(resolveStrategy('4p', null, null)).toBeNull();
  });
});
