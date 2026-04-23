import type { LumiSection } from '../lumi-types';
import { concepts } from './concepts';
import { villages } from './villages';
import { operations } from './operations';
import { farming } from './farming';
import { underAttack } from './under-attack';
import { endgame } from './endgame';

export const LUMI_SECTIONS: LumiSection[] = [
  concepts,
  villages,
  operations,
  farming,
  underAttack,
  endgame,
];
