import { CUUID2Service } from '@shared/cuid/implementations/cuid2.service';

describe('CUID2Service', () => {
  describe('generate', () => {
    it('should generate a CUID matching the length', () => {
      const service = new CUUID2Service();
      const length = 8;

      const result = service.generate({ length });

      expect(result).toHaveLength(length);
    });
  });
});
