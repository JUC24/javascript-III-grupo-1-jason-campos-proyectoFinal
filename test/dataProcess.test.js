import { sendForm } from '../src/modules/handleBtn';

test('Submit form and verify recommendation', () => {
  const formData = {
    place: 'Inside with some indirect light',
    directSunlight: 'No',
    pets: 'Yes',
    water: 'Underwater',
    style: 'I like minimalism and material colors',
    extraElements: 'Pebbles'
  };

  const recommendation = sendForm(formData);

  expect(recommendation).toContain('Boston Fern');
  expect(recommendation).toContain('Premium fertilized soil');
  expect(recommendation).toContain('Ceramic pot simple');
  expect(recommendation).toContain('Unpainted');
  expect(recommendation).toContain('Pebbles');
});
