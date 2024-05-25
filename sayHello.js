const buildOutputPath = path.join(repositoryRootPath, 'out');
const isEmptyObject = obj => Object.keys(obj).length === 0;
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);