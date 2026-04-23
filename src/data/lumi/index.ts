import type { LumiSection } from '../lumi-types';
import { concepts } from './concepts';
import { villages } from './villages';
import { mapZones } from './map-zones';
import { operations } from './operations';
import { farming } from './farming';
import { underAttack } from './under-attack';
import { endgame } from './endgame';

export const LUMI_SECTIONS: LumiSection[] = [
  concepts,
  villages,
  mapZones,
  operations,
  farming,
  underAttack,
  endgame,
];
