const saludar = require('./app');

test('Saludar debe decir: Hola, mundo!', () => {
    expect(saludar()).toBe("Hola, mundo!");
})