import { useStyledUtils } from '../index';

test('useStyledUtils', () => {
  const utils = useStyledUtils();

  expect(utils.breakpoints).toBeDefined();
});
