import jsonServer from 'json-server';
import path from 'path';
import { readdirSync, readFileSync } from 'fs';
import { fileURLToPath } from 'url';

// 獲取當前模組的檔案名和目錄名
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

// 函數：讀取 JSON 文件
const loadJsonFiles = (dirPath) => {
  const data = {};
  console.log(`正在讀取目錄: ${dirPath}`);
  const files = readdirSync(dirPath).filter((file) => file.endsWith('.json'));
  console.log(`發現的 JSON 文件: ${files}`);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    console.log(`載入 JSON 檔案: ${filePath}`);
    const fileContent = readFileSync(filePath, 'utf8');
    console.log(`文件內容: ${fileContent}`);
    try {
      const jsonData = JSON.parse(fileContent);
      console.log(`解析自 ${filePath} 的 JSON 資料:`, jsonData);
      const key = file.replace('.json', '');
      console.log(`生成的鍵: ${key}`);

      // 將嵌套的結構展平
      if (key === 'user' && jsonData.users) {
        data[key] = jsonData.users;
      } else {
        data[key] = jsonData;
      }
    } catch (error) {
      console.error(`解析 JSON 文件時發生錯誤: ${filePath}`, error);
    }
  });

  return data;
};

// 加載所有 JSON 文件
const apiData = loadJsonFiles(path.join(__dirname, 'api'));
console.log('加載的 API 資料:', apiData);

// 檢查 apiData 是否正確加載
console.log('API Data:', apiData);

// 動態設定路由
const routes = Object.keys(apiData).reduce((acc, key) => {
  console.log('key :', key + ', acc ' + acc);
  acc[`/api/${key}`] = `/${key}`;
  acc[`/api/${key}/:id`] = `/${key}/:id`;
  return acc;
}, {});

console.log('生成的路由:', routes);

const router = jsonServer.router(apiData);

server.use(jsonServer.rewriter(routes));
server.use(middlewares);
server.use(router);

// 啟動伺服器
const PORT = 8080;
server.listen(PORT, () => {
  console.log(`JSON Server 正在執行於埠號 ${PORT}`);
});
