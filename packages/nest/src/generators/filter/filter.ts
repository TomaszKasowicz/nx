import type { Tree } from '@nx/devkit';
import type {
  NestGeneratorWithLanguageOption,
  NestGeneratorWithTestOption,
  NormalizedOptions,
} from '../utils';
import {
  normalizeOptions,
  runNestSchematic,
  unitTestRunnerToSpec,
} from '../utils';

export type FilterGeneratorOptions = NestGeneratorWithLanguageOption &
  NestGeneratorWithTestOption;

export function filterGenerator(
  tree: Tree,
  rawOptions: FilterGeneratorOptions
): Promise<any> {
  const options = normalizeFilterOptions(tree, rawOptions);

  return runNestSchematic(tree, 'filter', options);
}

export default filterGenerator;

function normalizeFilterOptions(
  tree: Tree,
  options: FilterGeneratorOptions
): NormalizedOptions {
  return {
    ...normalizeOptions(tree, options),
    language: options.language,
    spec: unitTestRunnerToSpec(options.unitTestRunner),
  };
}
