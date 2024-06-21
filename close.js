const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');
const resultingPromises = urls.map((url) => makHttpRequest(url));