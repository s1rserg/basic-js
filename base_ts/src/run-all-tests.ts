import { readdirSync, statSync } from 'fs';
import { join } from 'path';
import { execSync } from 'child_process';

// Получаем список всех директорий в текущей папке
const baseDir = __dirname;
const folders = readdirSync(baseDir).filter((name) => {
  const fullPath = join(baseDir, name);
  return statSync(fullPath).isDirectory();
});

const testFolders = folders.filter((folder) => !folder.includes('types'));

// Последовательно запускаем тесты по папкам
for (const folder of testFolders) {
  console.log(`\n📁 Running tests in: ${folder}`);
  try {
    execSync(`npm run test --folder=${folder}`, { stdio: 'inherit' });
  } catch (error) {
    console.error(`❌ Tests failed in folder: ${folder}`);
  }
}
