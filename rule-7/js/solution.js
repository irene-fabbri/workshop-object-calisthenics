class FileManager {
    constructor(path) {
      this.path = path;
    }
    
    readFile(fileName) {
      console.log(`Reading file ${fileName} from ${this.path}`);
      return `Content of ${fileName}`;
    }
    
    writeFile(fileName, content) {
      console.log(`Writing to file ${fileName} at ${this.path}`);
    }
    
    deleteFile(fileName) {
      console.log(`Deleting file ${fileName} from ${this.path}`);
    }
            
    compressFile(fileName) {
      console.log(`Compressing file ${fileName}`);
    }
    
}

class Parser {
    constructor(content) {
      this.content = content;
    }
    
    parseJson() {
        return JSON.parse(this.content);
    }
  
    parseXml() {
        // Patsing XML logic
        return { xmlObject: this.content };
    }
}

class DataTransferer {
    constructor(fileManager) {
        this.fileManager = fileManager;
    }  

    uploadFile(fileName, destination) {
        const content = this.fileManager.readFile(fileName);
        console.log(`Uploading ${fileName} to ${destination}`);
    }
      
    downloadFile(url, fileName) {
        console.log(`Downloading from ${url} to ${fileName}`);
    }  
}